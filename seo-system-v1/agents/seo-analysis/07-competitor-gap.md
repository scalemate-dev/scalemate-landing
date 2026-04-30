# Step 7 — Competitor Content Gap

> Головне джерело **нових тем** для контенту. Дивимось що ранжують конкуренти, а ми ні.

## 7a. Top pages конкурентів

```
mcp__ahrefs__site-explorer-top-pages:
  target: madgicx.com
  mode: subdomains
  date: today
  select: url,sum_traffic,keywords,top_keyword,top_keyword_volume
  order_by: sum_traffic:desc
  limit: 15

mcp__ahrefs__site-explorer-top-pages:
  target: bir.ch
  mode: subdomains
  ...

mcp__ahrefs__site-explorer-top-pages:
  target: admanage.ai
  mode: subdomains
  ...
```

Записати: по які теми/ключі конкуренти отримують найбільше трафіку? Які з цих тем **МИ НЕ покриваємо**?

## 7b. Keyword gap (вони ранжують, ми ні)

Для кожного конкурента порівняти organic keywords з нашими. Шукати keywords де:
- Конкурент у top-20
- Ми НЕ ранжуємось взагалі
- Volume > 100/mo
- ICP-relevant (ad ops, automation, media buying, campaign management)

Для extraction — `mcp__ahrefs__site-explorer-organic-keywords` з фільтром `position <= 20`. Для diff — порівняти з нашим списком (Step 1 `--queries 50` або повний `site-explorer-organic-keywords` для scalemate.co).

## 7c. Конкурентні блог-статті

```
mcp__ahrefs__site-explorer-top-pages:
  target: madgicx.com/blog
  mode: prefix
  date: today
  select: url,sum_traffic,top_keyword,top_keyword_volume
  order_by: sum_traffic:desc
  limit: 10
```

Які блог-статті приносять найбільше трафіку? Чи є серед них теми, які ми можемо покрити **краще** (multi-platform angle, deeper experience, наш досвід)?
