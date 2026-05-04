# Step 2 — Site-wide trend (контекст для per-item)

> Site-wide дивимось першим — це контекст. Якщо у нас впав весь сайт на 30%, не панікуємо що окрема стаття просіла на 30%; якщо сайт виріс +50% а наша стаття flat — це reltive просадка.

## Запит

```bash
GSC_SITE_URL="sc-domain:scalemate.co" python3 .claude/skills/seo-ops/gsc_client.py --trend --days 28
```

## Що записати

- Total clicks (28d): X
- Total impressions (28d): X
- Avg position: X
- Week-over-week deltas: clicks/imp/pos

Це бере як baseline для порівняння у [Step 5 milestone decisions](05-milestone-decisions.md).
