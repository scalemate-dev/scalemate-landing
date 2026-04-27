# SEO System

> Topic-centric SEO content pipeline для Scalemate з human-in-the-loop approval.
> Локальні агенти + remote pipeline. Все стейт-кероване через `workflow/pipeline.md`.

---

## Куди дивитись першим

| Я хочу... | Йди в... |
|---|---|
| Запустити команду (`розвідка`, `discovery`, `write`, `qa`, `review`) | [`docs/how-to-run.md`](docs/how-to-run.md) |
| Зрозуміти архітектуру системи | [`docs/architecture.md`](docs/architecture.md) |
| Подивитись поточний статус роботи | [`workflow/pipeline.md`](workflow/pipeline.md) |
| Подивитись беклог тем | [`workflow/scorecard.md`](workflow/scorecard.md) |
| Знайти ручні таски для себе | [`workflow/natalia-tasks.md`](workflow/natalia-tasks.md) |
| Подивитись поточний стан проєкту (deployed, learnings, blocked) | [`context/project-state.md`](context/project-state.md) |
| Прочитати правила контенту | [`rules/content-writing.md`](rules/content-writing.md) |
| Зрозуміти remote pipeline | [`docs/dev-handover.md`](docs/dev-handover.md) |

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

```
розвідка → approve topics in pipeline.md → discovery → approve brief →
content-creator → approve draft → qa → approve final → deploy → review
```

Кожний крок:
1. Агент пише артефакт в `topics/[slug]/`
2. Агент рухає item в наступну секцію `workflow/pipeline.md`
3. Natalia ревʼюить, рухає item далі або відправляє назад
4. Наступний агент підхоплює

**Approval = редагування `workflow/pipeline.md`.** Простий state machine.

Детально: [`docs/how-to-run.md`](docs/how-to-run.md)

---

## Команди (локально, в Claude Code)

| Команда | Агент | Output |
|---|---|---|
| `розвідка` | [agents/intelligence.md](agents/intelligence.md) | `intelligence/YYYY-MM-DD-recon.md` + scorecard update |
| `discovery [тема]` | [agents/discovery.md](agents/discovery.md) | `topics/[slug]/brief.md` |
| `write [brief-file]` | [agents/content-creator.md](agents/content-creator.md) | `topics/[slug]/draft.md` |
| `qa [draft-file]` | [agents/qa.md](agents/qa.md) | `topics/[slug]/qa.md` |
| `review` | [agents/review.md](agents/review.md) | `topics/[slug]/review.md` per published item |

Або remote: скажи "запусти pipeline" — агент в хмарі обробить approved items автоматично.

---

## Ключові принципи

1. **Data-first** — жодних гіпотез без Ahrefs/GSC/SERP даних
2. **Quality** — content-ops score >= 90, Anti-AI level = Low
3. **Existing-first** — перевірити existing pages перед новим контентом
4. **Human-in-the-loop** — 4 checkpoints від Natalia, все інше автоматично
5. **No competitor promotion** — neutral mention OK, active promotion banned
