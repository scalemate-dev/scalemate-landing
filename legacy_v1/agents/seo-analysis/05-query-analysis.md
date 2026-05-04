# Step 5 — GSC Query Analysis (actionable insights)

> Не просто зібрати queries з [Step 1](01-gsc-snapshot.md) — а проаналізувати кожен на можливості. Це найбагатше джерело quick wins (вже маємо impressions, потрібно лише зробити правильний хід).

Взяти повний список queries з Step 1 і класифікувати кожен по чотирьох вимірах нижче.

---

## 5a. Queries без dedicated content

> "Ми показуємось, але немає сторінки під це."

Для кожного query з `impressions > 10` — спершу перевірити **яка сторінка показується**:

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
  --raw '{"dimensions":["query","page"],"start_date":"[28d ago]","end_date":"[today]","filters":[{"dimension":"query","operator":"contains","expression":"[keyword]"}],"row_limit":10}' --json
```

Потім класифікувати:

| Стан сторінки | Позиція | Дія |
|---|---|---|
| Існує | < 15 | Keyword enrichment (додати ключ у body якщо відсутній) |
| Існує | 15-30 | Striking distance: title/meta fix або content expansion |
| Існує | > 30 | Existing page performance issue (content depth / quality / competition). Discovery потрібна. |
| Не існує | — | New content opportunity |

**НІКОЛИ не казати "немає сторінки" без перевірки через GSC query+page mapping І grep по `app/` і `content/` директорії.**

## 5b. Query clusters

> Група queries = одна тема-дірка.

Згрупувати queries по темі. Приклад:
```
Cluster "ad testing":
  ad testing software (95 imp) +
  ad testing tools (50 imp) +
  ad testing platform (28 imp) +
  ad testing tool (44 imp) +
  ad performance testing tool (75 imp) =
  TOTAL 292 imp
```

Питання:
- Чи є **одна strong page** під цей cluster?
- Чи розмазано по різних сторінках?
- Якщо розмазано → consolidate або створити pillar page.

## 5c. Keyword enrichment у existing content

Для кожного query де ми вже ранжуємось — перевірити чи primary keyword **згадується в body** тієї сторінки. Якщо ні — додати nature mention.

Приклад:
```
"ads uploader" (23 imp, pos 11.9) → перевірити /ad-creative-uploader
Чи є "ads uploader" у тексті? Якщо ні → додати в body / H2 / alt-text
→ це може підняти relevance → краща позиція
```

## 5d. Wrong page detection

Через GSC raw query з `dimensions=["query","page"]`:

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
  --raw '{"dimensions":["query","page"],"start_date":"[28d ago]","end_date":"[today]","row_limit":200}' --json
```

Перевірити: чи для кожного ключового query Google показує **ПРАВИЛЬНУ** сторінку?
- `ad uploader` → має вести на `/ad-creative-uploader`, не на homepage
- `automation rules` → має вести на `/use-cases/ad-campaign-automation-rules` або `/features/automation-rules`

Якщо wrong page → internal linking fix або canonical signal.

---

## Output

```markdown
## GSC Query Opportunities

### Queries without dedicated content
| Query | Imp | Pos | Opportunity |
|---|---|---|---|
| ad fatigue | 29 | 53 | Write article "What Is Ad Fatigue" |

### Query clusters (consolidate or pillar)
| Cluster | Total imp | Queries | Current pages | Action |
|---|---|---|---|---|
| "ad testing" | 292 | 5 queries | /blog/best-ad-test* | Strengthen or create pillar |

### Keyword enrichment
| Query | Page | Missing keyword | Action |
|---|---|---|---|
| ads uploader | /ad-creative-uploader | "ads uploader" not in body | Add to body + alt text |

### Wrong page detection
| Query | Expected page | Actual page | Fix |
|---|---|---|---|
| ... | ... | ... | Internal linking / canonical |
```
