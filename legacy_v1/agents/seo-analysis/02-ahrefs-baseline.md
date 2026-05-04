# Step 2 — Ahrefs Baseline

> Зовнішня картина — DR, organic profile, top competitors.

## Запит

```
mcp__ahrefs__site-explorer-metrics:
  target: scalemate.co
  mode: subdomains
  date: today

mcp__ahrefs__site-explorer-organic-competitors:
  target: scalemate.co
  mode: subdomains
  country: us
  date: today
  select: competitor_domain,keywords_common,traffic,domain_rating
  limit: 10
```

## Що записати

- DR
- `org_keywords` — скільки кейвордів ранжуємо
- `org_traffic` — оцінений трафік
- Top-10 competitors (для подальшого використання у [07-competitor-gap.md](07-competitor-gap.md))

## Reminder

- `render_with` у відповіді → викликати render-tool, не показувати raw JSON.
- Грошові поля (`traffic_value`, `value`) — у USD cents, ділити на 100.
