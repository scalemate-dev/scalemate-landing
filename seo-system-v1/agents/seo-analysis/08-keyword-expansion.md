# Step 8 — Keyword Expansion

> Розширення від наших seed keywords до нових можливостей через Ahrefs. Сюди ж приходять search queries, які ми отримали з [Step 6 Pain Discovery](06-pain-discovery.md), на валідацію volume/KD.

## 8a. Matching terms

```
mcp__ahrefs__keywords-explorer-matching-terms:
  keyword: "ad automation"
  country: us
  select: keyword,volume,keyword_difficulty,cpc
  order_by: volume:desc
  limit: 20

mcp__ahrefs__keywords-explorer-matching-terms:
  keyword: "bulk ad launch"
  ...

mcp__ahrefs__keywords-explorer-matching-terms:
  keyword: "creative testing"
  ...
```

## 8b. Related terms (semantically near)

```
mcp__ahrefs__keywords-explorer-related-terms:
  keyword: "facebook ads automation"
  country: us
  select: keyword,volume,keyword_difficulty
  order_by: volume:desc
  limit: 20
```

## 8c. Question-style queries

```
mcp__ahrefs__keywords-explorer-matching-terms:
  keyword: "how to automate ads"
  country: us
  select: keyword,volume,keyword_difficulty
  order_by: volume:desc
  limit: 15

mcp__ahrefs__keywords-explorer-matching-terms:
  keyword: "how to scale ad campaigns"
  ...
```

## 8d. People Also Ask (SerpAPI live SERP)

Для 3-5 найважливіших seed queries — подивитись PAA через live SERP:

```
mcp__serpapi__search:
  engine: google
  q: "[seed query]"
  location: United States
```

Витягти `related_questions` → конкретні питання аудиторії → кожне = potential article.

## 8e. Validate pain queries (з Step 6)

Прогнати кожен pain-derived query з [06-pain-discovery.md](06-pain-discovery.md#6d-переклад-болей-у-search-queries) через `keywords-explorer-overview`. Записати volume + KD. Pain queries часто мають volume = 0, але exact-match — це OK. Ми все одно тримаємо їх з `Confidence +1` бонусом.

---

## Output

Список нових кейвордів / тем з `volume`, `KD`, source (matching/related/PAA/pain). Передається у [Step 11 brief](11-brief-output.md) як кандидати на нові content opportunities.
