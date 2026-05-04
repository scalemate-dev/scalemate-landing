# Step 1 — Collect deployed items

Two sources, обидва обов'язкові:

1. **[`workflow/pipeline.md`](../../workflow/pipeline.md) секція `8. Published`** — нові статті / сторінки (повноцінні content launches).
2. **[`workflow/scorecard.md`](../../workflow/scorecard.md) секція `📊 Monitoring (deployed items tracking)`** — title/meta правки на існуючих URL, indexation watch'і, інші per-page моніторингові події. **Не пропускати** — items звідси не дублюються в `pipeline.md § 8`, бо це не нові топіки, а edits.

Для кожного deployed item записати:
- `slug` (для metadata edits — деривувати з URL, e.g. `/ad-creative-uploader` → `ad-creative-uploader`)
- `url`
- `deploy_date`
- `event_type`: `content-launch` (з pipeline §8) або `metadata-edit` (з scorecard Monitoring) — впливає на formatting у Step 6 report
- baseline metrics (CTR, position, impressions/day, clicks/day) — за тиждень до deploy для metadata edits, за тиждень після deploy для content launches
- остання milestone дата (з попереднього review якщо був)

> Якщо `📊 Monitoring` виглядає неповною (наприклад, нещодавній commit з зміною `metadata.title` у `app/**/page.jsx` чи `content/blog/*.md` не відображений у таблиці) — запустити `python3 seo-system-v1/scripts/detect-metadata-changes.py --days 30` і додати ряди до scorecard перед продовженням Step 2. Без цього review буде сліпим до недавніх metadata edits.
