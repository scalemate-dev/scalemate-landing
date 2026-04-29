# Step 3 — Trends Scan

> Об'єднує оригінальні Step 3 (SerpAPI Trends — seed-based breakout discovery) + Step 5 (`trend_scout.py` — broad signals). Це різні класи сигналів, але обидва про "що зростає / що бурлить" — тримаємо в одному файлі для зручності.

## 3a. Seed-based breakout discovery (SerpAPI Google Trends)

Прогнати `related_queries` (`data_type=RELATED_QUERIES`) по seed term'ах через SerpAPI MCP.

**Принцип:** не наші product keywords (вузько), а **що шукає аудиторія** (UA managers, media buyers, founders) — broader topics на topic-level.

**Seed terms (ротувати 5 на цикл — SerpAPI quota):**
- `"facebook ads automation"`
- `"tiktok ads scaling"`
- `"marketing automation"`
- `"ai for advertising"`
- `"creative testing ads"`
- `"media buying tools"`
- `"performance marketing"`
- `"ad creative tools"`
- `"ROAS optimization"`
- `"campaign management software"`

**Виклик:**
```
mcp__serpapi__search:
  engine: google_trends
  q: "[seed term]"
  data_type: RELATED_QUERIES
  geo: US
```

**Що записати:**
- Top **rising** queries з breakout potential, що перетинаються з ICP інтересами
- Top **top** queries (стабільно популярні) — для context
- Сезонні патерни якщо є (через `data_type=TIMESERIES` для критичних)

## 3b. Broad signals (`trend_scout.py`)

```bash
OUTPUT_DIR=seo-system-v1/output/trends python3 .claude/skills/seo-ops/trend_scout.py
```

Дає: Google Trends RSS (US trending now, geo-wide) + HN + Reddit hot + X (якщо `BRAVE_API_KEY` set). Score 0-100 по relevance keywords. Output: `seo-system-v1/output/trends/flash-trends-{date}.md`.

**Що записати:**
- Top content angles по relevance score
- Сигнали з ICP communities (Reddit) — найбільш upvote'нуті теми тижня

**Чим відрізняється від 3a:** 3a — targeted breakout discovery по нашим seed term'ам (вузький фокус). 3b — broad firehose всього що бурлить у нашій ніші, без seed (раннє попередження про нові теми).

## Output

```markdown
## 🔥 Trend Signals

### Seed-based breakout (SerpAPI Trends)
- [seed: "facebook ads automation"] rising: "ai meta ad optimizer" (+340%), "auto budget rules" (+180%)
- ...

### Broad signals (trend_scout)
- [Top angles з trend_scout.py — назва теми, source, relevance score, посилання]
```
