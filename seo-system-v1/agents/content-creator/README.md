# Content Creator Agent — Draft Writing

Refactor of [`../../../seo-system/agents/content-creator.md`](../../../seo-system/agents/content-creator.md) into per-step files.

Контракт: бере approved Topic Brief → пише повний draft по правилах [`rules/content-writing.md`](../../../seo-system/rules/content-writing.md). Не пише без brief'у. Не deploy'ить.

## Run order

| # | File | Source | Status |
|---|---|---|---|
| 0 | [00-prereq.md](00-prereq.md) | role + context files | — |
| 1 | [01-load-brief.md](01-load-brief.md) | read brief, trust track decision | ✅ works |
| 2 | [02-outline.md](02-outline.md) | generate outline + Checkpoint 2 | ✅ works |
| 3 | [03-draft.md](03-draft.md) | write per rules (anchor refs) | ✅ works |
| 4 | [04-self-check.md](04-self-check.md) | anchor ref на checklist | ✅ works |
| 5 | [05-input-request.md](05-input-request.md) | Checkpoint 3 input request | ✅ works |
| 6 | [06-save-and-pipeline.md](06-save-and-pipeline.md) | save draft + pipeline 4→5 | ✅ works |

Tools інвентар — той самий що в [`../seo-analysis/TOOLS.md`](../seo-analysis/TOOLS.md). Content-creator переважно не дзвонить у MCP-tools — тільки читає файли і пише markdown.

## Заборонено

- Писати без brief'у (навіть якщо «тема проста»)
- Писати без прочитання [`rules/content-writing.md`](../../../seo-system/rules/content-writing.md)
- Вигадувати цифри, цитати, case studies
- Використовувати stock phrases з [`#anti-ai-rules`](../../../seo-system/rules/content-writing.md#anti-ai-rules) blacklist
- Generic AI openers («In today's fast-paced world...»)
- Починати draft без approve outline (Checkpoint 2)
