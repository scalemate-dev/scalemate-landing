# Step 11 — Brief Output + Pipeline Update

> Об'єднує оригінальні Steps 11, 12, 13: записати бриф, оновити scorecard, оновити pipeline.

## 11a. Generate weekly brief

Записати у `seo-system-v1/output/seo-analysis/YYYY-MM-DD.md`:

```markdown
# Intelligence Brief — Week of YYYY-MM-DD

## Quick Stats
- Total GSC impressions (28d): X
- Total GSC clicks (28d): X
- Avg position: X
- Ahrefs DR: X, org_keywords: X

## 🔥 Breakout Opportunities
[Rising queries з Trends + trend_scout (Step 3)]

## 🎯 Striking Distance (pos 4-20)
[Queries close to top-10 + what to do — Step 5]

## 🔍 ICP Pain Discovery
[Top pains з Reddit/PAA + JTBD mapping + Scalemate solution + content gap — Step 6]
[Pain → search query → volume/KD validation — Step 8]

## ⚠️ Competitor Threats
[New competitor activity, their new content — Step 7]

## 🤖 AI Visibility
[Brand Radar — mentions / SoV — Step 4]

## 🔧 Technical Issues
[Site audit findings + non-indexed pages — Step 9]

## 🆕 New Content Opportunities

### High-priority (competitors rank, we don't, vol > 200, ICP-relevant)
[keyword, vol, KD, competitor URL, our angle, content type]

### Medium-priority (PAA / matching terms, vol 50-200)
[keyword/question, vol, content type]

### Pain-validated (з Step 6, Confidence +1)
[pain quote → search query → JTBD → content type]

### Breakout / Rising (від Trends, якщо є)
[rising queries, або "insufficient data"]

## 📊 Top 5 Priorities (for Natalia approval)
[MIXED: existing fixes + new opportunities — все ранжоване по Score]
[Format per Шар 1.5 — score, bucket, effort, expected impact]

## Deferred Items
[Що НЕ робимо цього тижня і чому]

## Tracking Updates
[Owned by `review` agent — окрема секція brief'а наповнюється з review output, якщо є]
```

## 11b. Update scorecard

Оновити [`workflow/scorecard.md`](../../workflow/scorecard.md):
- Додати нові items зі score
- Оновити статуси існуючих
- Перемістити completed items

## 11c. Update pipeline.md (CRITICAL)

Для кожного **top-priority candidate** з seo-analysis brief — додати item у [`workflow/pipeline.md`](../../workflow/pipeline.md) секцію `1. New (потребує discovery)`:

```markdown
- [topic-slug-kebab-case]
  added: YYYY-MM-DD
  source: weekly-seo-analysis
  primary-keyword: [keyword]
  context: [1-2 line context — score, pain validation, why now]
```

**Не дублювати:** перевірити чи slug вже є у інших секціях `pipeline.md` (могли почати раніше). Якщо є — пропустити.

Без цього кроку pipeline залишається порожнім і вся розвідка нікуди не йде — discovery agent (наступний у конвеєрі) не знає що читати.

---

## Done criteria

- ✅ Brief file створено у `output/seo-analysis/YYYY-MM-DD.md`
- ✅ Scorecard оновлено
- ✅ `pipeline.md` секція `1. New` має нові candidate topics
- ✅ Natalia отримує нотифікацію для review
