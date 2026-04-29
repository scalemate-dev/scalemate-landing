# Step 1 — GSC Snapshot

> Наші дані — що вже бачить Google по нашому сайту.

## Запит

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py --striking --days 28
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py --queries 50 --days 28
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py --pages 30 --days 28
```

## Що записати

- Top queries (по impressions / clicks)
- Striking distance (pos 4-20) — кандидати на швидкий буст
- Top pages — звідки йде трафік
- Anomalii: CTR < 1% при impressions > 100 (поганий title/meta при пристойному показі)

Опційно: `--countries 5 --days 28` для geo split.
