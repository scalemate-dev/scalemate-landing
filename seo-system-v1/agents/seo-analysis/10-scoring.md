# Step 10 — Scoring нових items

> Tracking раніше задеплоєного контенту винесено в окремий `review` agent — не дублюємо тут.

Для кожного потенційного item з [Step 5](05-query-analysis.md) (existing fixes), [Step 6](06-pain-discovery.md) (pain-validated), [Step 7](07-competitor-gap.md) (competitor gap), [Step 8](08-keyword-expansion.md) (new keywords) — скорити по формулі з [`docs/architecture.md`](../../../seo-system/docs/architecture.md) Шар 1.5:

```
Score = (Traffic × ICP × Business × Confidence) / Effort × Urgency × Existing_bonus
```

Factors (ranges):
- `Traffic`: 0-10
- `ICP`: 0-5
- `Business`: 1-5
- `Confidence`: 0-3 (**+1 для pain-validated** з [Step 6](06-pain-discovery.md))
- `Effort`: 1-10 (дільник)
- `Urgency`: 1-3
- `Existing_bonus`: ×1 для new content, ×1.5 якщо це fix existing

Тегувати buckets: 🟢 Quick Win / 🟡 Strategic / 🔵 Foundation / 🔴 Risk / ⚪ Iceberg.

**ВАЖЛИВО:** скорити і existing-page fixes, І нові content opportunities. Бриф має містити **обидва типи** ранжовано по Score.
