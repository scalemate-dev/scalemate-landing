# Step 9 — Indexation Check

> Знайдена проблема 2026-04-20: статті live 3-4 тижні, у sitemap, але Google не проіндексував. Тепер перевіряємо щоразу.

## Підхід — SerpAPI `site:` query (primary)

Для кожної blog-статті і use-case/feature сторінки:

```
mcp__serpapi__search:
  engine: google
  q: "site:scalemate.co/blog/[slug]"
```

Якщо результат = 0 → сторінка **НЕ проіндексована**.

## Fallback — GSC pages report diff

Якщо SerpAPI недоступний:

1. Витягти всі URL з `app/sitemap.ts` (або з опублікованого `https://scalemate.co/sitemap.xml`).
2. Витягти список pages які отримали хоча б 1 impression за 90d:
   ```bash
   GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
     --raw '{"dimensions":["page"],"start_date":"[90d ago]","end_date":"[today]","row_limit":1000}' --json
   ```
3. Diff: URL у sitemap, який існує `> 14 днів`, але **не з'являвся в GSC** = ймовірно non-indexed.

Не 100% точно (може бути 0 показів і у проіндексованої сторінки), але для blog/use-case/feature URL'ів дає сигнал.

## Якщо знайдено non-indexed

Записати у бриф як 🚨 Technical issue:
- URL
- Дата створення (скільки днів з моменту publish)
- Чи є у `app/sitemap.ts`
- Recommendation: GSC → Request Indexing (manual)

## Tracking

Окремо перевірити сторінки зі статусом **"Request Indexing submitted"** з попередніх циклів (з [`scorecard.md`](../../workflow/scorecard.md)) — чи вже проіндексувались?
