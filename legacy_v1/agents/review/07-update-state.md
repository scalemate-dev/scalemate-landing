# Step 7 — Update state (scorecard + pipeline + tracking)

## 7a. Per-topic tracking file (full metrics — append-only history)

Для кожного reviewed item — записати/append'ити у `seo-system-v1/output/output/topics/[slug]/tracking.md`:

```markdown
# Tracking — [slug]

## YYYY-MM-DD (T+Nwk milestone)
- CTR: X% → Y% (Δ: +/-Z%)
- Position: X → Y
- Impressions/day: X → Y
- Indexed: YES
- Decision: keep | iterate | escalate
- Notes: [optional]
```

**Append, не overwrite** — це історія метрик на кожен milestone. Дозволяє reviewing agent у наступному циклі бачити trajectory.

## 7b. Pipeline.md — тільки тонкі status flags

> **Принцип:** pipeline.md — це state machine, не dashboard. Сирі метрики живуть у tracking.md (7a). У pipeline.md — лише flag що item потребує уваги.

Оновити [`workflow/pipeline.md`](../../workflow/pipeline.md) секцію `8. Published`:

```
- [YYYY-MM-DD] topic-slug
  url: https://scalemate.co/...
  artifact: output/topics/[slug]/draft.md
  tracking: output/topics/[slug]/tracking.md
  status: ok | iterate | escalate | blocked-indexation
  last-review: YYYY-MM-DD
```

`status` — єдине поле що оновлюється review'ом. Інші (`url`, `artifact`) — stable.

## 7c. Move to section 9 якщо milestone failed остаточно

Якщо `status: escalate` залишається після T+4wk + ще одного циклу review — перенести у `9. Rejected / Archived` з полем:

```
- topic-slug
  ...
  rejected-by: review
  rejected-reason: [e.g. "CTR < 1.5× baseline at T+8wk, content gap unfixable"]
  rejected-date: YYYY-MM-DD
```

Поле `rejected-by` (`review` / `qa`) — щоб різнити origin (review = опубліковано і не сработало; qa = draft не пройшов якість).

## 7d. Update scorecard.md

Оновити [`workflow/scorecard.md`](../../workflow/scorecard.md):
- Додати tracking-метрики до deployed items (поточний milestone)
- Змінити статус якщо milestone decision прийнято
- Перемістити completed/escalated items

## Verify

- ✅ `intelligence/YYYY-MM-DD-review.md` створено ([Step 6](06-generate-report.md))
- ✅ `output/topics/[slug]/tracking.md` має новий запис для кожного reviewed item
- ✅ Pipeline.md `8. Published` items мають оновлений `status:` + `last-review:`
- ✅ Items зі `status: escalate` довше 1 циклу — перенесені у `9.` з `rejected-by: review`
