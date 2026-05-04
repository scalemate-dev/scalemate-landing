# Step 4 — Indexation check

> Перевіряємо на **кожному milestone** (T+7d, T+2wk, T+4wk), не тільки після deploy. Edge case: статтю проіндексували на T+5d, потім deindex'нули через місяць — це треба ловити.

## Запит

Для кожного deployed item:

```
mcp__serpapi__search:
  engine: google
  q: "site:scalemate.co/[path]"
```

## Що записати

- **Indexed:** YES / NO
- **Cached date** (якщо є): коли Google останній раз crawl'нув
- **Snippet content:** чи Google показує актуальну версію (порівняти snippet з реальним H1/intro)

## Decision matrix

| Стан | Дія |
|---|---|
| Indexed + актуальний snippet | ✅ ОК |
| Indexed + старий snippet (>14d) | ⚠️ recommend Re-submit GSC URL Inspection |
| NOT indexed (T+7d) | 🚨 Submit GSC URL Inspection ASAP |
| NOT indexed (T+2wk) | 🚨🚨 Investigate (sitemap, robots, canonical) |
| NOT indexed (T+4wk) | 🔴 Block — content / quality issue (escalate до Natalia) |
| Раніше indexed, тепер NOT | 🔴 De-index event — escalate (можливо penalty / quality strike) |
