# SEO Analysis — Weekly Recon

Refactor of [`../intelligence.md`](../intelligence.md) into per-step files.

Контракт не змінився: запускається щопонеділка (або вручну), збирає дані, скорить, кладе бриф у `seo-system-v1/output/recon/YYYY-MM-DD.md`. Рішення приймає Natalia.

## Run order

| # | File | Source | Status |
|---|---|---|---|
| 0 | [00-prereq.md](00-prereq.md) | role + context files | — |
| 1 | [01-gsc-snapshot.md](01-gsc-snapshot.md) | GSC API via `gsc_client.py` | ✅ works |
| 2 | [02-ahrefs-baseline.md](02-ahrefs-baseline.md) | Ahrefs MCP | ✅ works |
| 3 | [03-trends-scan.md](03-trends-scan.md) | SerpAPI Trends + `trend_scout.py` | ✅ works |
| 4 | [04-brand-radar.md](04-brand-radar.md) | Ahrefs Brand Radar (MCP) | ✅ works |
| 5 | [05-query-analysis.md](05-query-analysis.md) | GSC + grep + Ahrefs | ✅ works |
| 6 | [06-pain-discovery.md](06-pain-discovery.md) | SerpAPI (Reddit + PAA) + Ahrefs | ✅ works |
| 7 | [07-competitor-gap.md](07-competitor-gap.md) | Ahrefs MCP | ✅ works |
| 8 | [08-keyword-expansion.md](08-keyword-expansion.md) | Ahrefs MCP | ✅ works |
| 9 | [09-indexation-check.md](09-indexation-check.md) | SerpAPI `site:` query + GSC fallback | ✅ works |
| 10 | [10-scoring.md](10-scoring.md) | score formula + buckets | ✅ works |
| 11 | [11-brief-output.md](11-brief-output.md) | write recon brief + update pipeline | ✅ works |


## Принципи

1. Data-first — гіпотез без джерела не існує
2. Existing-first — перевіряти контент перед пропозицією нового
3. Не вигадувати цифри — `insufficient data` коли треба
4. Рішення приймає Natalia
