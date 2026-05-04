# Step 3 — Existing Content Check

> Принцип 3 (existing-first): перевірити чи вже є наша сторінка на цей ключ ПЕРЕД пропозицією нового.

## Check via GSC + Ahrefs

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
  --raw '{"dimensions":["query","page"],"start_date":"[90d ago]","end_date":"[today]","filters":[{"dimension":"query","operator":"contains","expression":"[keyword]"}],"row_limit":20}' --json
```

```
mcp__ahrefs__site-explorer-organic-keywords:
  target: scalemate.co
  mode: subdomains
  country: us
  select: keyword,position,url,traffic
  filters: keyword~"[keyword]"
```

## Filesystem check

Grep по `app/`, `content/blog/` директоріям — чи є файл/route під цей topic. **Не казати "немає сторінки" без перевірки через GSC + grep.**

## Decision

Якщо existing page знайдена:

```
URL: [path]
Поточна позиція: X
Impressions (28d): Y
CTR: Z%
Cannibalization risk: YES/NO (чи показується кілька наших сторінок на той самий query?)
Decision: UPDATE existing | CREATE NEW
Why: [reason]
```

**Cannibalization fix:** якщо 2+ наших сторінок показуються на один key query — консолідувати (301 редирект слабшої в сильнішу) АБО розвести інтент (одна TOFU, інша BOFU).
