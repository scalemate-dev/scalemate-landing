# Step 6 — Generate review report

**Single source of truth — один файл за прогін:** `seo-system-v1/output/review/YYYY-MM-DD.md`.

Mirror до [seo-analysis brief](../seo-analysis/11-brief-output.md) — обидва weekly snapshots живуть у `output/`, дата у назві файла.

## Формат

```markdown
# Review Report — YYYY-MM-DD

## Site Trend (28d)
- Total clicks: X (Δ WoW: +/-Y%)
- Total impressions: X (Δ WoW: +/-Y%)
- Avg position: X (Δ WoW: +/-Y)

## Deployed Items Status

### [slug] — [URL]
- Deployed: [date] | Milestone: T+7d / T+2wk / T+4wk
- Baseline → Current:
  - CTR: X% → Y% (Δ: +/-Z%)
  - Position: X → Y
  - Impressions/day: X → Y
  - Clicks/day: X → Y
- vs site trend: faster / inline / slower
- Indexed: YES / NO / de-indexed
- Decision: ✅ keep / ⚠️ iterate / ❌ escalate / 🔄 re-index
- Action: [specific next step]

### [slug 2] — ...

## Feedback for next intelligence cycle
- [Insight 1 — actionable для seo-analysis, e.g. «madgicx article CTR rises — consider expanding to full comparison page»]
- [Insight 2]

## Anomalies
- [Unexpected drops/spikes/new queries]
- [De-index events якщо є]
```

## Якщо item потребує deep-dive (escalation)

Опціонально — створити `seo-system-v1/output/topics/[slug]/review-deepdive.md` з детальним розбором (тільки для items зі `decision: escalate`). Не для всіх.
