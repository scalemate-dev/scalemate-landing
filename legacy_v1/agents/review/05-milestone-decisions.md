# Step 5 — Milestone decisions

> Decision rules — з [`rules/content-writing.md` → Post-Publish Tracking`](../../../seo-system/rules/content-writing.md#post-publish-tracking) (anchor `#post-publish-tracking`). Anchor стабільний, не залежить від нумерації.

Для кожного item визначити **поточний milestone** (на основі `deploy_date` і `today`) і застосувати rules.

## T+7 days

- **Indexed?** YES / NO
- Якщо NO → recommend re-submit GSC URL Inspection (з [Step 4](04-indexation-check.md))

## T+2 weeks

- **CTR vs baseline:** [X% → Y%]
- **Position vs baseline:** [X → Y]
- **Decision:**
  - ✅ growing — keep monitoring
  - ⚠️ flat — keep, mark як «watch»
  - ❌ declining — investigate

## T+4 weeks (final decision)

- **CTR delta multiplier:**
  - ✅ CTR ≥ 2× baseline → SUCCESS, keep
  - ⚠️ CTR 1.5-2× → keep, minor iteration (title/meta tweak, internal links)
  - ❌ CTR < 1.5× → ESCALATE (architectural change — переписати angle, target intent, content type)
- **Position delta:**
  - ❌ Position dropped > 3 → investigate (cannibalization? competitor activity?)

## Output для кожного item

```
{
  slug: ...,
  url: ...,
  milestone: T+7d | T+2wk | T+4wk | post-T+4wk,
  baseline: { ctr, position, imp_day, clicks_day },
  current: { ctr, position, imp_day, clicks_day },
  delta: { ctr_pct, position, ... },
  indexed: YES | NO | de-indexed,
  decision: ok | iterate | escalate | re-index,
  action: "specific next step or 'none — monitoring'"
}
```
