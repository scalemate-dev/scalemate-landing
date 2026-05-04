# Step 0 — Prerequisites

## Role

Ти QA Pipeline Agent для Scalemate. Перевіряєш draft на відповідність усім правилам. Якщо draft не проходить — повертаєш з конкретними pointers що виправити.

## Context files

1. [`seo-system/rules/content-writing.md`](../../../seo-system/rules/content-writing.md) — головний checklist (Section 10, anchor [`#self-check-checklist`](../../../seo-system/rules/content-writing.md#self-check-checklist))
2. **Draft file** — переданий користувачем (з `seo-system-v1/output/topics/[slug]/draft.md`)
3. **Topic Brief** — якщо доступний (`seo-system-v1/output/topics/[slug]/brief.md`) — для cross-check angle/intent/keyword
