# SEO System — Як користуватись

> Відкрий Claude Code у папці `/Users/nataliabondar/claude-work` і напиши одну з команд нижче.
> CLAUDE.md у цій папці автоматично завантажить інструкції для агентів.

---

## 🎮 Команди

| Команда | Що робить | Коли використовувати |
|---|---|---|
| **`розвідка`** | Intelligence Agent — збирає GSC + Ahrefs + Trends + Brand Radar, аналізує, скорить, кладе бриф на review | Раз на тиждень (понеділок) |
| **`discovery [тема]`** | Валідує тему/ключ через data, аналізує SERP, готує Topic Brief | Після approve top priorities з розвідки |
| **`write [brief-file]`** | Пише draft по затвердженому brief'у | Після approve Topic Brief |
| **`qa [draft-file]`** | Прогоняє через 4 етапи QA (expert panel → copy-editing → humanizer → SEO check) | Після написання draft'у |
| **`review`** | Перевіряє CTR/позиції/індексацію опублікованого контенту | Раз на тиждень (п'ятниця) |
| **`offpage`** | Off-page: беклінки, brand mentions, broken-link recovery, competitor link gap, listings audit, digital PR чернетки | Раз на місяць |

---

## 🔄 Повний цикл (від ідеї до публікації)

```
ПОНЕДІЛОК:
  розвідка
    → Claude кладе бриф у intelligence-briefs/YYYY-MM-DD.md
    → Ти читаєш, approve'иш top 5 priorities

ВІВТОРОК–ЧЕТВЕР (для кожного approved item):
  discovery [тема або ключ]
    → Claude валідує через Ahrefs/GSC/SERP, готує Topic Brief
    → Ти approve'иш brief (або коригуєш)

  write [path до brief'у]
    → Claude генерує outline → СТОП → ти approve'иш outline
    → Claude пише full draft
    → Якщо потрібен input (screenshots, case data) → Claude питає тебе
    → Draft потрапляє у drafts/

  qa [path до draft'у]
    → content-ops panel (target 90+)
    → copy-editing (Seven Sweeps)
    → humanizer pass (Anti-AI check)
    → SEO technical check
    → Якщо PASS → готово до publish
    → Якщо FAIL → назад до write з конкретними issues

  Ти читаєш фінальний draft → approve → deploy

П'ЯТНИЦЯ:
  review
    → Claude перевіряє deployed items: indexed? CTR trend?
    → Кладе report у review-reports/YYYY-MM-DD.md
    → Feedback іде в наступний цикл розвідки
```

---

## 🤝 4 точки approve від тебе (все інше — система сама)

| Checkpoint | Що approve'иш | Формат |
|---|---|---|
| **1. Weekly priorities** | Які 5 items беремо у роботу цього тижня | Після `розвідка` |
| **2. Content structure** | Outline (H2/H3) перед написанням | Після `write` видає outline |
| **3. Input request** | Screenshots, case data, pricing якщо потрібно | Коли Claude запитає |
| **4. Final publish** | Фінальний draft перед deploy | Після `qa` дає PASS |

---

## 📁 Де що лежить

```
seo-system/
├── agents/                      ← Prompt-файли для кожного агента
│   ├── intelligence-agent.md    ← Weekly recon
│   ├── discovery-agent.md       ← Topic validation
│   ├── content-creator-agent.md ← Draft writing
│   ├── qa-pipeline.md           ← Quality assurance (4 stages)
│   └── review-agent.md          ← Published content tracking
├── intelligence-briefs/         ← Weekly briefs (від розвідки)
│   └── 2026-04-15-first-recon.md
├── drafts/                      ← Чернетки статей (від write)
├── review-reports/              ← Review reports (від review)
├── content-writing-rules.md     ← ВСІ правила написання контенту
├── prioritization-scorecard.md  ← Живий беклог зі scoring
├── seo-system-plan.md           ← Архітектура всієї системи
└── how-to-use.md                ← Цей файл
```

---

## 🛠️ Інструменти (підключені, працюють)

| Tool | Для чого | Як викликається |
|---|---|---|
| **Ahrefs MCP** | Keywords, competitors, backlinks, Brand Radar, site audit | Автоматично через MCP |
| **SerpAPI MCP** | Google Trends (breakout/rising), live SERP top-10, AI Overviews | `mcp__serpapi__search` з params |
| **GSC direct** | Наші impressions, clicks, CTR, positions | `python3 ~/.claude/skills/seo-ops/gsc_client.py` |
| **trend_scout.py** | Broad signals (HN, Reddit, X, Trends RSS) | `python3 ~/.claude/skills/seo-ops/trend_scout.py` |
| **content-creator** | Написання SEO-контенту з brand voice | Skill |
| **content-ops** | Expert panel scoring (7-10 experts, target 90+) | Skill |
| **copywriting** | Marketing copy для landing/product pages | Skill |
| **copy-editing** | Seven Sweeps review | Skill |
| **seo-audit** | Технічний SEO аудит | Skill |

---

## ⚡ Quick Start

**Перший раз:**
1. Відкрий Claude Code у `/Users/nataliabondar/claude-work`
2. Напиши `розвідка`
3. Отримаєш бриф з top 5 priorities
4. Approve те, що хочеш робити
5. Для кожного approved item: `discovery [тема]` → approve → `write [brief]` → approve outline → `qa [draft]` → approve → deploy

**Потім щотижня:**
- Понеділок: `розвідка`
- Вівторок-четвер: робочий цикл
- П'ятниця: `review`

---

## 📊 Принципи системи (коротко)

1. **Data-first** — жодних гіпотез без Ahrefs/GSC/SERP даних
2. **Quality** — content-ops score >= 90, Anti-AI level = Low
3. **Existing-first** — перевірити existing pages перед новим контентом
4. **Human-in-the-loop** — 4 checkpoints від тебе, все інше автоматично
5. **No competitor promotion** — neutral mention OK, active promotion banned

---

*Створено: 2026-04-20*
*Система: 6 agents, 6 commands, 4 checkpoints*
