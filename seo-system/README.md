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
│   ├── pipeline.md              ← SOURCE OF TRUTH: статус всіх topics
│   ├── scorecard.md             ← всі candidate topics зі score
│   └── natalia-tasks.md         ← manual tasks
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

State-машина через `workflow/pipeline.md` (на топік-гілці):

1. Агент пише артефакт в `topics/<slug>/`
2. Агент рухає item у наступну секцію pipeline.md
3. Natalia рев'юить, рухає item далі (approve) або відправляє назад (reject/iterate)
4. Користувач сам обирає який агент запускати наступним — порядок не лінійний

**On-branch approval** = редагування `pipeline.md` на топік-гілці (move item у наступну секцію).
**Final approval** = merge PR `seo/<slug>` → main (item потрапляє у main з фінальним стейтом).

Детально: [`docs/how-to-run.md`](docs/how-to-run.md)

---

## Інструкції для агента-orchestrator (як працювати з SEO системою)

> Ця секція — для outer Claude (Mac CLI / claude.ai web), коли користувач (Natalia) просить SEO роботу.

### Доступні агенти

Користувач сам обирає який агент і для якої теми. Виклик не залежить від попередніх stages — можна стартувати будь-який у будь-який момент (наприклад, написати draft напряму якщо brief уже є; запустити review для опублікованого).

| Агент | Призначення | Output |
|---|---|---|
| [agents/intelligence.md](agents/intelligence.md) | Weekly recon, шукати нові теми | `intelligence/YYYY-MM-DD-recon.md` + scorecard update |
| [agents/discovery.md](agents/discovery.md) | Validate тему — keyword data, SERP, ICP pain | `topics/<slug>/brief.md` |
| [agents/content-creator.md](agents/content-creator.md) | Написати draft по brief'у | `topics/<slug>/draft.md` |
| [agents/qa.md](agents/qa.md) | Quality gates — content-ops, anti-AI, SEO check | `topics/<slug>/qa.md` |
| [agents/review.md](agents/review.md) | Постпаблішинг tracking (CTR, position) | `topics/<slug>/review.md` |

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

- **1 topic = 1 branch** `seo/<slug>` — завжди. Не змішувати теми в одній гілці.
- **1 codespace = N topics** — у codespace доступні всі гілки `seo/*`. Робота з різними темами через `git checkout seo/<slug>` (або через окремі worktrees) — у тому ж терміналі чи у різних.
- **1 subagent = 1 topic + 1 stage** — для кожної теми/етапу окремий subagent (Task tool). Кілька топіків можна обробляти паралельно — різні subagents у тому ж codespace, кожен на своїй гілці.

### Правило: main = тільки фінальні стани

`seo-system/workflow/pipeline.md` на гілці `main` може містити items **тільки в секціях**:
- **8. Published**
- **9. Rejected / Archived**

Все що in-progress (секції 1-7) живе **тільки на топік-гілках** `seo/<slug>` всередині codespaces / local checkouts. Main — це чистий історичний журнал завершеної роботи.

**Як це працює:**
1. **Нова задача створюється на топік-гілці**, не на main. Тобто: спочатку створити `seo/<slug>` з main → checkout → додати item у pipeline.md секцію "1. New" → commit на гілку. На main pipeline.md ця тема НЕ з'являється поки не Published/Rejected.
2. **Усі переходи 1→2→3→...→7** відбуваються в pipeline.md топік-гілки.
3. **Перед merge у main** — item має бути в "8. Published" або "9. Rejected" (видалений з секцій 1-7).
4. **PR `seo/<slug>` → main мерджиться** — main отримує тільки фінальний стан.

Коли користувач починає нову тему:
1. **Завжди спочатку** — створити гілку `seo/<slug>` з main, push. Гілка існує незалежно від режиму. Item у pipeline.md з'явиться пізніше — або користувач допише руками, або створить агент (intelligence/discovery) під час роботи.
2. **Тільки після створення гілки** — `AskUserQuestion`: Local чи Remote.
3. **Local** — checkout `seo/<slug>` локально, запустити subagent на цій гілці.
4. **Remote** — використати існуючий codespace (`gh codespace list`) з checkout'ом потрібної гілки, або створити новий: `gh codespace create -b seo/<slug>`. Запустити subagent через SSH.
5. Усі ітерації по темі — у тій же гілці. Перемикання агентів за вибором користувача.
6. Фінал — item у "8. Published" або "9. Rejected", PR `seo/<slug>` → main, мердж.

### Команди оркестрації (Remote mode)

- `gh codespace list -R scalemate-dev/scalemate-landing` — активні codespaces
- `gh codespace create -R scalemate-dev/scalemate-landing -b seo/<slug> -m basicLinux32gb --display-name seo-<slug>` — новий codespace
- `gh codespace ssh -c <name> -- "cd /workspaces/scalemate-landing && git checkout seo/<slug> && <agent command>"` — переключитись на гілку і запустити subagent
- `bash scripts/seo-status.sh` — список усіх SEO codespaces з тим що в pipeline.md кожного (де які items на якій стадії)

### Робота з існуючим codespace (edits, approvals, повторні runs)

Якщо користувач просить щось зробити **в конкретному codespace** ("зайди в codespace seo-X і ...") або по конкретній темі яка вже має активний codespace:

1. `gh codespace list -R scalemate-dev/scalemate-landing` — знайти потрібний codespace (зазвичай `seo-<slug>`)
2. Виконати дію через SSH:
   - **Edit файлу:** `gh codespace ssh -c <name> -- "cd /workspaces/scalemate-landing && <sed/echo/cat heredoc> && git add <file> && git commit -m '...' && git push"`
   - **Approve (просунути item у pipeline.md):** edit `seo-system/workflow/pipeline.md` — перенести item у наступну секцію, commit + push
   - **Запустити інший агент** в цьому ж codespace: `gh codespace ssh -c <name> -- "bash -l -c 'cd /workspaces/scalemate-landing && git checkout seo/<slug> && claude --print --permission-mode bypassPermissions ...'"`

Local edits теж працюють (checkout гілки `seo/<slug>` локально, edit, push) — codespace підхопить через `git pull` коли користувач туди зайде. Але якщо codespace вже відкритий і там є uncommitted changes — НЕ робити local edits, працювати через SSH у тому codespace.

### Типові запити від Natalia

| Запит | Дія | AskUserQuestion? |
|---|---|---|
| "Запусти discovery для X" | [discovery.md](agents/discovery.md) на гілці `seo/<slug>` | **так** (local/remote) |
| "Напиши draft для X" | [content-creator.md](agents/content-creator.md) на гілці `seo/<slug>` | **так** |
| "Запусти qa для X" | [qa.md](agents/qa.md) на гілці `seo/<slug>` | **так** |
| "Зроби review для X" | [review.md](agents/review.md) на гілці `seo/<slug>` | **так** |
| "Запусти розвідку" | [intelligence.md](agents/intelligence.md), без topic-гілки | **так** |
| "Що в pipeline?" | read [workflow/pipeline.md](workflow/pipeline.md) | ні |
| "Що по темі X?" | read `topics/<slug>/{brief,draft,qa}.md` | ні |
| **"Зайди в codespace seo-X і зроби Y"** | SSH у вказаний codespace, виконати Y, commit, push | ні (явний remote) |
| **"Approve brief для X — просунь у наступний stage"** | edit pipeline.md (move item у "Approved"), commit, push (local або через SSH у активний codespace) | ні |
| **"Approve draft для X — на QA"** | edit pipeline.md (move у "Approved for QA"), commit, push | ні |
| "Обнови brief теми X — додай розділ Y" | edit (local або SSH в codespace якщо активний), commit, push | ні (quick edit) |
| "Реджектни тему X" | edit pipeline.md (move у "9. Rejected/Archived"), commit, push, close PR | ні |
| "Покажи останні зміни в темі X" | `git log seo/<slug>` | ні |

---

## Ключові принципи

1. **Data-first** — жодних гіпотез без Ahrefs/GSC/SERP даних
2. **Quality** — content-ops score >= 90, Anti-AI level = Low
3. **Existing-first** — перевірити existing pages перед новим контентом
4. **Human-in-the-loop** — 4 checkpoints від Natalia, все інше автоматично
5. **No competitor promotion** — neutral mention OK, active promotion banned
