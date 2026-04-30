# QA Pipeline — Content Quality Assurance

Refactor of [`../../../seo-system/agents/qa.md`](../../../seo-system/agents/qa.md) into per-stage files.

Контракт: бере draft → 4 етапи перевірки → видає production-ready content або повертає на доопрацювання з конкретними pointers.

## Run order

| # | File | Stage | Tool |
|---|---|---|---|
| 0 | [00-prereq.md](00-prereq.md) | role + context | — |
| 1 | [01-content-ops.md](01-content-ops.md) | Expert panel score 90+ | `content-ops` skill |
| 2 | [02-copy-editing.md](02-copy-editing.md) | Seven Sweeps | `copy-editing` skill |
| 3 | [03-humanizer.md](03-humanizer.md) | Anti-AI checklist (8 checks) | manual |
| 4 | [04-seo-technical.md](04-seo-technical.md) | On-page + links + cannibalization + Google self-assessment | manual |
| 5 | [05-output-and-pipeline.md](05-output-and-pipeline.md) | save qa.md + pipeline 6→7/4/9 | files |

## Skills

Stage 1 (`content-ops`) і Stage 2 (`copy-editing`) — це Claude skills у `.claude/skills/` (project-level, auto-discoverable). Доступні і локально, і в codespace без додаткового setup'у. Якщо з якихось причин skill недоступний — **позначити stage як skipped** у output (`partial: skipped [stage] — skill unavailable`), не падати.

## Принципи

- **Brutally honest scoring** — не падувати до 90. Якщо draft 75 — він 75
- **Конкретні поінтери** — не «покращити якість», а «рядок 45: замінити X на Y»
- **Не переписувати сам** — тільки вказувати що виправити. Переписування робить content-creator
- **Не пропускати** — якщо stage fails, не йти до наступного
