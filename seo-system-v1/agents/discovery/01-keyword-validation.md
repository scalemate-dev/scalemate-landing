# Step 1 — Keyword Validation

> **КРИТИЧНО:** Ahrefs не бачить багато low-volume і problem-language queries. GSC показує що РЕАЛЬНО шукають. Ніколи не приймати рішення тільки на базі Ahrefs volume.

## 1a. Ahrefs — primary keyword + варіації

```
mcp__ahrefs__keywords-explorer-overview:
  keywords: ["[keyword]"]
  country: us
  select: keyword,volume,keyword_difficulty,cpc,serp_features

mcp__ahrefs__keywords-explorer-volume-history:
  keyword: "[keyword]"
  country: us
```

Записати: volume (US + UK + EU), KD, CPC, trend direction.

**Шукати ШИРШЕ ніж exact match.** Якщо `"bulk ad upload tools"` = 0, перевірити:
- Ширші формулювання (`"ad launch tools"`, `"facebook ads software"`, `"ad automation tools"`)
- Синоніми (`"launcher"` vs `"uploader"`, `"software"` vs `"tools"` vs `"platform"`)
- ICP-language варіації (як media buyers це називають)

## 1b. GSC — які queries ми вже ловимо

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
  --raw '{"dimensions":["query"],"start_date":"[28d ago]","end_date":"[today]","filters":[{"dimension":"query","operator":"contains","expression":"[topic keyword]"}],"row_limit":50}' --json
```

Перевірити кілька варіацій keyword (напр. `"bulk"`, `"launch"`, `"upload"`, `"launcher"`).
GSC часто показує queries яких Ahrefs не бачить — це **реальний demand**.

## 1c. Decision matrix

| Ahrefs volume | GSC impressions | Reddit/community proof | Decision |
|---|---|---|---|
| > 50/mo | будь-що | будь-що | ✅ Писати (Stream 1: data-driven) |
| 0 | > 50 imp related queries | будь-що | ✅ Писати, **переформулювати topic під GSC queries** (не original) |
| 0 | 0 | 20+ comments, active threads | ⚠️ Stream 2: pain-driven (ліміт 3-4/міс). Escalate до Natalia |
| 0 | 0 | 0 | ❌ Dropout — немає proof of demand |

**Якщо Ahrefs = 0 і GSC має related queries** — ПЕРЕФОРМУЛЮВАТИ topic під GSC queries, не під original keyword з 0 volume.
