# Step 3 — GSC current state per item

Для кожного deployed item з [Step 1](01-collect-deployed.md):

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py \
  --raw '{"dimensions":["date"],"start_date":"[deploy_date]","end_date":"[today]","filters":[{"dimension":"page","operator":"contains","expression":"[url_path]"}],"row_limit":100}' --json
```

Записати daily trend: CTR, impressions, position, clicks.

## Що порахувати

- Current CTR (last 7d average)
- Current position (last 7d average)
- Current impressions/day, clicks/day
- Δ vs baseline (з [Step 1](01-collect-deployed.md)): абсолютна і %
- Δ vs site-wide trend (з [Step 2](02-site-wide-trend.md)): чи зростає швидше/повільніше за середнє по сайту?
