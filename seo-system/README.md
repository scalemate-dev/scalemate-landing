# SEO System

> Topic-centric SEO content pipeline для Scalemate з human-in-the-loop approval.
> Локальні агенти + remote pipeline. Все стейт-кероване через `workflow/pipeline.md`.

---

## Структура

```
seo-system/
├── README.md                    ← цей файл, entry point
│
├── agents/                      ← prompt definitions кожного агента
│   ├── intelligence.md          (weekly recon, command: розвідка)
│   ├── discovery.md             (topic validation, command: discovery)
│   ├── content-creator.md       (draft writing, command: write)
│   ├── qa.md                    (quality gates, command: qa)
│   └── review.md                (post-publish tracking, command: review)
│
├── rules/                       ← стандарти всіх агентів (обов'язкове для контенту)
│   ├── data-integrity.md        (fail-fast при відмові інтеграцій — ОБОВ'ЯЗКОВО для всіх агентів)
│   ├── content-writing.md       (головні правила контенту)
│   ├── brand-guidelines.md      (brand voice, tone, communication rules)
│   └── seo-copywriting.md       (SEO copy patterns, headlines, structure)
│
├── context/                     ← reference data (lazy-load)
│   ├── project-state.md         ← deployed items, learnings, blocked (обов'язкове для агентів)
│   └── icp/
│       ├── jtbd-messaging.md    (JTBD framework)
│       ├── customer-kitup.md    (case study)
│       └── customer-zeptolab.md (case study)
│
├── workflow/                    ← live state системи
│   ├── pipeline.md              ← SINGLE SOURCE OF TRUTH: §1-§9 stages + 📊 Monitoring (title/meta edits)
│   └── natalia-tasks.md         ← manual tasks
│
├── scripts/                     ← автоматизація
│   └── detect-metadata-changes.py  ← парсить git → GSC → ряди для pipeline.md §📊 Monitoring
│
├── topics/                      ← усі артефакти по topic (kebab-case slug)
│   └── [slug]/
│       ├── brief.md             (discovery agent output)
│       ├── draft.md             (content-creator agent output)
│       ├── qa.md                (QA pipeline output)
│       └── review.md            (post-publish review, optional)
│
├── intelligence/                ← weekly recon (не topic-specific)
│   └── YYYY-MM-DD-recon.md
│
└── docs/                        ← для людей
    ├── architecture.md          ← поточна архітектура, scoring, принципи
    ├── how-to-run.md            ← інструкція як запускати команди
    └── dev-handover.md          ← remote pipeline технічна дока
```

---

## Як працює пайплайн

> **Default mode: Loose. Усі стани pipeline.md живуть на `main`.** Natalia працює завжди на `main` — НЕ створювати локальні гілки `seo/*`, не switch branches, не `git checkout`. Branches/PRs — тільки для cloud agents (codespaces), де ізоляція потрібна для паралельності.

State-машина через `workflow/pipeline.md` (завжди на `main`):

1. Агент пише артефакт в `topics/<slug>/`
2. Агент рухає item у наступну секцію pipeline.md
3. Natalia рев'юить, рухає item далі (approve) або відправляє назад (reject/iterate) — **редагуючи `pipeline.md` на main**
4. Користувач сам обирає який агент запускати наступним — порядок не лінійний

**Local approval** = редагування `pipeline.md` на main (move item у наступну секцію). Просто edit + commit + push на main.
**Cloud agent PR approval** = merge PR `seo/<slug>` → main (для робот, які робилися cloud agent у codespace).

⚠️ **CRITICAL для orchestrator + cloud agents:** перед відкриттям PR проти main — **завжди** спершу `git fetch origin main && git rebase origin/main` на топік-гілці. Це уникає race condition коли два паралельні PRs (один з cloud agent, інший з local main edit) revert'ять один одного при merge. Симптом race: PR merged, але прохідні пов'язані файли raise back до старого state. Рішення: rebase before merge.

Детально: [`docs/how-to-run.md`](docs/how-to-run.md)

---

## Інструкції для агента-orchestrator (як працювати з SEO системою)

> Ця секція — для outer Claude (Mac CLI / claude.ai web), коли користувач (Natalia) просить SEO роботу.

### Доступні агенти

Користувач сам обирає який агент і для якої теми. Виклик не залежить від попередніх stages — можна стартувати будь-який у будь-який момент (наприклад, написати draft напряму якщо brief уже є; запустити review для опублікованого).

| Агент | Призначення | Output |
|---|---|---|
| [agents/intelligence.md](agents/intelligence.md) | Weekly recon, шукати нові теми | `intelligence/YYYY-MM-DD-recon.md` + pipeline §1 update |
| [agents/discovery.md](agents/discovery.md) | Validate тему — keyword data, SERP, ICP pain | `topics/<slug>/brief.md` |
| [agents/content-creator.md](agents/content-creator.md) | Написати draft по brief'у | `topics/<slug>/draft.md` |
| [agents/qa.md](agents/qa.md) | Quality gates — content-ops, anti-AI, SEO check | `topics/<slug>/qa.md` |
| [agents/review.md](agents/review.md) | Постпаблішинг tracking (CTR, position) | `topics/<slug>/review.md` |
| [agents/off-page-agent.md](agents/off-page-agent.md) | Off-page: беклінки, brand mentions, digital PR (місячна каденція) | `off-page/YYYY-MM-DD.md` + pipeline §Off-page |

### Два режими виконання

Агенти однаково працюють в обох. Перш ніж починати **heavy** задачу (будь-який agent з таблиці) — **ОБОВ'ЯЗКОВО** запитати через `AskUserQuestion`:

```
question: "Запустити в якому режимі?"
options:
  - "Local — in your current session."
  - "Remote — run in cloud, isolated."
```

- **Local** — у поточній сесії Claude Code на машині користувача. Швидко, без провіжингу.
- **Remote** — у codespace. Ізольоване середовище, async.

Виключення (запитання не потрібно):
- Quick edit існуючого файлу ("додай розділ X у brief") — local
- Read-only ("Що в pipeline?", "покажи brief X") — local

### Архітектура

- **Default: Loose mode. Все живе на `main`.** Natalia ніколи не switch'ить гілки локально, не робить `git checkout seo/*`.
- **Cloud agents (codespaces) можуть мати свої гілки `seo/<slug>`** — це їхній deal для ізоляції паралельних runs. Користувач їх не торкає; merge PR через GitHub UI.
- **1 codespace = 1 topic = 1 branch** (тільки для cloud agents). Не змішувати теми в одному codespace.
- **1 subagent = 1 topic + 1 stage** — для кожної теми/етапу окремий subagent (Task tool).

### Правило: усі стани живуть на main (Loose mode)

`seo-system/workflow/pipeline.md` на гілці `main` містить items **в усіх 9 секціях** (1-9). Це SINGLE SOURCE OF TRUTH.

**Як це працює (для Local mode — Natalia на своїй машині):**
1. **Нова задача** → відкрити `pipeline.md` на main → додати item у §1. Commit + push прямо на main.
2. **Усі переходи 1→2→3→...→9** — edit `pipeline.md` на main, commit + push.
3. **Жодних PR'ів локальних** — Natalia пише прямо в main.
4. **Жодних `git checkout seo/*`** — все на main.

**Як це працює (для Remote mode — cloud agent у codespace):**
1. Cloud agent створюється на гілці `seo/<slug>` у codespace (для ізоляції паралельних runs).
2. Agent пише артефакти в `topics/<slug>/`, оновлює pipeline.md, відкриває PR проти main.
3. **CRITICAL:** перед merge — agent має зробити `git fetch origin main && git rebase origin/main` на своїй гілці. Якщо local main вже містить items (Loose mode), без rebase merge може revert'ити Natalia's local edits.
4. Natalia рев'юить PR в GitHub UI. Approve → merge → main отримує оновлення.

**Race condition warning** (важливо для cloud agents):
Якщо Natalia робить edits на main locally, і паралельно cloud agent відкриває PR з base = stale main snapshot — merge цього PR може revert local edits. **Симптом:** Natalia бачить як її зміни "пропали" після merge. **Рішення:** cloud agent має rebase before merge; або orchestrator має перевіряти `git log origin/main..HEAD` перед merge і flag conflicts.

### Команди оркестрації (Remote mode)

- `gh codespace list -R scalemate-dev/scalemate-landing` — активні codespaces
- `gh codespace create -R scalemate-dev/scalemate-landing -b seo/<slug> -m basicLinux32gb --display-name seo-<slug>` — новий codespace. **Auto-run prompt:** перед створенням codespace покласти промпт у `seo-system/topics/<slug>/prompt.md` (commit+push на гілку `seo/<slug>`). У `postStartCommand` (запускається на КОЖЕН start, не лише на create) скрипт `seo-system/scripts/codespace-autorun.sh` сам запустить headless claude з цим промптом. Промпт — будь-який (discovery / write / qa / комбінація). Manual SSH не потрібен. Якщо `prompt.md` відсутній — auto-run просто скіпається. Idempotency: повторно НЕ запуститься якщо процес ще живий (`.autorun.pid`) або вже завершився успішно (`.autorun.done` у топік-папці — видалити цей файл щоб ре-ран). Лог пишеться у `seo-system/topics/<slug>/.autorun.log` (переживає stop codespace, на відміну від `/tmp`).
- `gh codespace ssh -c <name> -- "cd /workspaces/scalemate-landing && git checkout seo/<slug> && <agent command>"` — переключитись на гілку і запустити будь-який агент вручну (для повторних запусків або коли prompt.md не використовується)
- `gh codespace ssh -c <name> -- "tail -f seo-system/topics/<slug>/.autorun.log"` — слідкувати за прогресом auto-run
- `bash scripts/seo-status.sh` — список усіх SEO codespaces з тим що в pipeline.md кожного (де які items на якій стадії)

### ВАЖЛИВО: після `gh codespace create` — НЕ чекати, не SSH-ити, не tail-ити логи

Як тільки `gh codespace create` повернув ім'я codespace — робота orchestrator'а завершена. Auto-run запускається сам у `postCreateCommand`, агент сам комітить + пушить + відкриває PR. Не потрібно:

- ❌ `gh codespace ssh ... tail -f ...` для перевірки що запустилось
- ❌ `ls /tmp/seo-autorun/` через SSH
- ❌ `ScheduleWakeup` / `loop` / sleep щоб «зайти пізніше і перевірити»
- ❌ Будь-яке очікування результату

Замість цього — одразу віддати користувачу посилання щоб він сам перевірив:

```
✅ Codespace: https://github.com/codespaces/<codespace-name>
   Branch: seo/<slug>
   PR (з'явиться після першого пушу агента): https://github.com/scalemate-dev/scalemate-landing/pulls?q=head%3Aseo%2F<slug>
   Прогрес логу (опційно): gh codespace ssh -c <codespace-name> -- "tail -f seo-system/topics/<slug>/.autorun.log"
```

Користувач сам зайде у codespace / PR коли захоче. Orchestrator завершує тред після видачі посилань.

### Git workflow для агентів (commit / push / PR)

Кожен агент після завершення свого кроку (артефакт записаний, pipeline.md оновлений) **обов'язково**:

1. `git add` тільки артефакти що ти створив/змінив (не `git add -A`).
2. `git commit -m "<agent>: <slug> <stage>"` (наприклад: `discovery: meta-automation-rules brief`).
3. `git push origin <current-branch>`.
4. Перевірити чи є відкритий PR для гілки: `gh pr list --head "$(git branch --show-current)" --state open --json number --jq '.[0].number'`.
5. **Якщо PR відсутній (перший крок на цій гілці) — створити:**
   ```bash
   gh pr create --base main --head "$(git branch --show-current)" --title "SEO: <slug>" --body "Topic: <slug>. See seo-system/workflow/pipeline.md for state."
   ```
6. **Якщо PR вже існує — нічого додаткового, push достатньо** (новий комміт автоматично з'явиться у PR).

Чому: Natalia рев'юить артефакти у GitHub UI; усі ітерації по темі живуть в одному PR; final approval = merge цього PR у main.

Edge cases: якщо гілка не `seo/<slug>` — тільки commit+push без PR. Якщо `gh` недоступний — push + warning у лог, не падати. Merge conflict → зупинитись, не форсити.

### Робота з існуючим codespace (edits, approvals, повторні runs)

Якщо користувач просить щось зробити **в конкретному codespace** ("зайди в codespace seo-X і ...") або по конкретній темі яка вже має активний codespace:

1. `gh codespace list -R scalemate-dev/scalemate-landing` — знайти потрібний codespace (зазвичай `seo-<slug>`)
2. Виконати дію через SSH:
   - **Edit файлу:** `gh codespace ssh -c <name> -- "cd /workspaces/scalemate-landing && <sed/echo/cat heredoc> && git add <file> && git commit -m '...' && git push"`
   - **Approve (просунути item у pipeline.md):** edit `seo-system/workflow/pipeline.md` — перенести item у наступну секцію, commit + push
   - **Запустити інший агент** в цьому ж codespace: `gh codespace ssh -c <name> -- "bash -l -c 'cd /workspaces/scalemate-landing && git checkout seo/<slug> && claude --print --permission-mode bypassPermissions ...'"`

Local edits Natalia робить **на main** (Loose mode default), не на `seo/<slug>`. Якщо є активний codespace з uncommitted changes — НЕ робити local edits паралельно, чекати поки cloud agent запушить, потім pull main. Інакше race condition при merge PR з codespace може revert local edits.

### Типові запити від Natalia

| Запит | Дія | AskUserQuestion? |
|---|---|---|
| "Запусти discovery для X" | [discovery.md](agents/discovery.md) на гілці `seo/<slug>` | **так** (local/remote) |
| "Напиши draft для X" | [content-creator.md](agents/content-creator.md) на гілці `seo/<slug>` | **так** |
| "Запусти qa для X" | [qa.md](agents/qa.md) на гілці `seo/<slug>` | **так** |
| "Зроби review для X" | [review.md](agents/review.md) на гілці `seo/<slug>` | **так** |
| "Запусти розвідку" | [intelligence.md](agents/intelligence.md), без topic-гілки | **так** |
| "Запусти offpage" / "off-page розвідка" | [off-page-agent.md](agents/off-page-agent.md), без topic-гілки, output у `off-page/` + pipeline §Off-page | **так** |
| "Що в pipeline?" | read [workflow/pipeline.md](workflow/pipeline.md) | ні |
| "Що по темі X?" | read `topics/<slug>/{brief,draft,qa}.md` | ні |
| **"Зайди в codespace seo-X і зроби Y"** | SSH у вказаний codespace, виконати Y, commit, push | ні (явний remote) |
| **"Approve brief для X — просунь у наступний stage"** | edit pipeline.md **на main** (move item у "Approved"), commit, push до main | ні |
| **"Approve draft для X — на QA"** | edit pipeline.md **на main** (move у "Approved for QA"), commit, push до main | ні |
| "Обнови brief теми X — додай розділ Y" | edit **на main** (або SSH в codespace якщо активний run), commit, push | ні (quick edit) |
| "Реджектни тему X" | edit pipeline.md **на main** (move у "9. Rejected/Archived"), commit, push до main, close PR якщо є відкритий | ні |
| "Покажи останні зміни в темі X" | `git log -- seo-system/topics/<slug>/` | ні |

---

## Data sources — коли що використовувати

> **GSC = source of truth для нашого сайту.** Ahrefs корисний для зовнішнього бенчмарку (competitors, SERP, backlinks, keyword volumes), але для діагностики СВОЇХ сторінок завжди йти спочатку в GSC напряму.

### GSC (Google Search Console) — primary

Прямий доступ через `seo-system/skills/seo-ops/gsc_client.py` (CLI + Python lib). Працює з повним GSC API, дає точні impressions/clicks/CTR/position для будь-якої URL.

```bash
cd seo-system/skills/seo-ops
GSC_SITE_URL="sc-domain:scalemate.co" python3 gsc_client.py --pages 200 --days 28 --json
GSC_SITE_URL="sc-domain:scalemate.co" python3 gsc_client.py --striking --days 28
```

Для фільтрації по конкретній URL — використовувати `GSCClient.query()` як library з `filters=[{"dimension":"page","operator":"contains","expression":"<slug>"}]`.

**Коли використовувати:**
- Діагностика "чому ця сторінка не отримує impressions"
- Список keywords для конкретного URL
- Striking distance keywords (pos 4-20)
- Trend / drop analysis по своїх сторінках
- Будь-яке питання про реальну performance scalemate.co

### Ahrefs MCP — secondary

Tools під префіксом `mcp__claude_ai_Ahrefs__*`. Корисний для того що **виходить за межі GSC**: competitors, SERP, keyword volumes, backlinks, brand radar.

**Коли використовувати:**
- Keyword research до написання (volumes, KD, related/matching terms)
- SERP overview, competitor pages
- Backlinks / referring domains
- Site Audit issues (crawl errors, tech SEO)
- Brand Radar (AI mentions)

**НЕ використовувати замість GSC:**
- `gsc-pages` через Ahrefs MCP повертає sample (top by clicks). Сторінки з тисячами impressions але 0 кліків випадуть із списку. Завжди йти в `gsc_client.py` для GSC даних.

### Порядок дій для SEO-діагностики

Коли користувач каже "сторінка не індексується / не ранжує / щось не так":

1. **GSC напряму** через `gsc_client.py` — зібрати реальні impressions/queries за 28-90 днів для конкретних URL
2. **Якщо в GSC є дані** — проблема в ranking/CTR/intent, не в індексації. Копати в content/keywords/cannibalization
3. **Якщо в GSC 0 impressions** — перевірити robots/canonical/sitemap/internal links, потім URL Inspection в GSC UI
4. **Ahrefs** підключати тільки коли потрібно зовнішнє: SERP analysis, competitor pages, keyword volumes для нових тем
5. **Якщо дані дивні / неповні** — зупинитися і запитати користувача "ти бачиш у себе в GSC X чи ні", а не будувати теорії на основі неповних даних

---

## Tracking title/meta edits (контекст по правках)

Система тримає контекст по правках title/description на існуючих URL у двох місцях:

1. **`workflow/pipeline.md` секція `📊 Monitoring`** — таблиця з кожною metadata-правкою: URL, deploy date, baseline (-30d) GSC метрики, current GSC метрики, next check date, decision.
2. **`scripts/detect-metadata-changes.py`** — генератор рядків для цієї таблиці.

**Як це працює:**

```bash
# Витягти всі title/meta зміни в коді за останні 30 днів + GSC baseline/current
python3 seo-system/scripts/detect-metadata-changes.py --days 30
```

Скрипт парсить git history (`app/**/page.{jsx,tsx}`, `app/**/layout.{jsx,tsx}`, `content/blog/*.md`), знаходить зміни `title:` / `description:` / `metaDescription:`, тягне з GSC baseline (30d до deploy) і current (deploy → сьогодні), видає готові markdown-рядки. Нові файли (content launches) автоматично виключаються — вони трекаються в `pipeline.md §8 Published`.

**Як це використовують агенти:**

- **Discovery agent** перед пропозицією нової title/meta правки перевіряє Monitoring → cooldown 14 днів (див. `agents/discovery.md` Step 6.5). Не пропонує повторну правку якщо попередня <14d тому без свіжого сигналу.
- **Review agent** Step 1 читає **обидві** секції одного файлу: `pipeline.md §8` (launches) + `pipeline.md §📊 Monitoring` (edits). Поле `event_type` розрізняє їх у фінальному звіті.

**ENV для скрипта (тільки якщо токени не в дефолтних шляхах `.claude/skills/seo-ops/`):**

```bash
GSC_SITE_URL="sc-domain:scalemate.co"
GSC_TOKEN_FILE="/path/to/.gsc-token.json"
GOOGLE_CREDENTIALS_FILE="/path/to/client_secret.json"
```

---

## Ключові принципи

1. **Data integrity > всі інші правила.** Якщо GSC / Ahrefs / SerpAPI / інша обов'язкова інтеграція не працює — STOP, повідомити Natalia, не продовжувати. Без даних research = вигадка. Деталі: [`rules/data-integrity.md`](rules/data-integrity.md).
2. **Data-first** — жодних гіпотез без GSC/Ahrefs/SERP даних. GSC = source of truth для нашого сайту, Ahrefs = зовнішній бенчмарк.
3. **Quality** — content-ops score >= 90, Anti-AI level = Low
4. **Existing-first** — перевірити existing pages перед новим контентом
5. **Human-in-the-loop** — 4 checkpoints від Natalia, все інше автоматично
6. **No competitor promotion** — neutral mention OK, active promotion banned
