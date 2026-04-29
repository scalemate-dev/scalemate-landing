# Tool Inventory

> Стан на 2026-04-29. Всі MCP — у [.mcp.json](../../../.mcp.json).

---

## ✅ Working

### Ahrefs MCP
- **Endpoint:** `https://api.ahrefs.com/mcp/mcp`
- **Auth:** `AHREFS_MCP_KEY` (Bearer header)
- **Available tool prefixes:** `mcp__ahrefs__site-explorer-*`, `mcp__ahrefs__keywords-explorer-*`, `mcp__ahrefs__brand-radar-*`, `mcp__ahrefs__site-audit-*`, `mcp__ahrefs__gsc-*`, `mcp__ahrefs__web-analytics-*`, `mcp__ahrefs__rank-tracker-*`, `mcp__ahrefs__social-media-*`
- Перед першим викликом нового endpoint'а — `mcp__ahrefs__doc`.
- `render_with` у відповіді → ОБОВ'ЯЗКОВО викликати render-tool.
- Грошові поля у відповідях — у USD cents, ділити на 100 для display.

### SerpAPI MCP
- **Endpoint:** hosted (token у URL).
- **Available tool:** `mcp__serpapi__search`
- **Engines що ми використовуємо:**
  - `engine: google` — live SERP top-10, AI Overview, PAA (`related_questions`), featured snippets
  - `engine: google_light` — швидший, менш витратний по quota, для intent quick-checks
  - `engine: google_trends` + `data_type: RELATED_QUERIES` — top + rising queries по seed
  - `engine: google_trends` + `data_type: TIMESERIES` — динаміка інтересу за період
- **Quota:** платна, обережно з масовими прогонами. У discovery / pain research — 5-10 викликів за цикл.

### GSC direct
- **Скрипт:** [`.claude/skills/seo-ops/gsc_client.py`](../../../.claude/skills/seo-ops/gsc_client.py)
- **Auth:** `.gsc-token.json` (OAuth refresh-token flow)
- **Modes:**
  - `--striking --days 28` — pos 4-20 (striking distance)
  - `--queries 50 --days 28` — top queries
  - `--pages 30 --days 28` — top pages
  - `--countries 5 --days 28` — geo split
  - `--raw '<json>' --json` — будь-який Search Analytics запит
- **Шлях:** project-level `.claude/skills/seo-ops/`. Один шлях для local + codespace.

### `trend_scout.py`
- **Скрипт:** [`.claude/skills/seo-ops/trend_scout.py`](../../../.claude/skills/seo-ops/trend_scout.py)
- **Що робить:**
  - Google Trends RSS (US trending now, geo-wide) — broad news pulse
  - Hacker News (top-30, фільтр по relevance keywords)
  - Reddit (`/r/marketing`, `/r/SEO`, `/r/startups`, etc.) через `hot.json`
  - X/Twitter — через Brave Search, тільки якщо `BRAVE_API_KEY` set
- Score 0-100 по relevance keywords. Запускати з `OUTPUT_DIR=seo-system-v1/output/trends`, вивід у `seo-system-v1/output/trends/flash-trends-{date}.md`.
- **NB:** це **broad signal**, не targeted breakout discovery (для останнього — SerpAPI google_trends).

---

## 🔁 Що змінилось у рефакторі (vs `intelligence.md`)

- **Дубль "Step 7"** з оригіналу виправлено — розщеплено на 07 (competitor gap) і 08 (keyword expansion).
- **Дубль "Step 10"** прибрано — tracking задеплоєного контенту йде в окремий `review` agent. У [10-scoring.md](10-scoring.md) лишився лише scoring.
- **Step 5** (`trend_scout.py`) злито з Step 3 — обидва про trends (3a — seed-based via SerpAPI, 3b — broad via trend_scout).
- **Sub-numbering 6.5** з оригіналу прибрано — pain discovery це окремий повноцінний крок ([Step 6](06-pain-discovery.md)).

---

## Env vars / secrets

| Var | Required for | Where |
|---|---|---|
| `AHREFS_MCP_KEY` | Ahrefs MCP | `.mcp.json` Bearer |
| `GSC_SITE_URL` | GSC client | shell, e.g. `sc-domain:scalemate.co` |
| `.gsc-token.json` | GSC OAuth | `.claude/skills/seo-ops/.gsc-token.json` |
| `BRAVE_API_KEY` | trend_scout X/Twitter scan | optional |
| `CLAUDE_CODE_OAUTH_TOKEN` | codespace headless run | codespace secrets |
