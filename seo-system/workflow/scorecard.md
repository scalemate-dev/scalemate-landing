# Scorecard

> Усі candidate topics зі score + tracking deployed items.
> Source of truth для пріоритезації і моніторингу title/meta правок.

---

## 🎯 Backlog (candidate topics)

| Topic | Score | Volume | KD | GSC imp | Funnel | Status | Notes |
|---|---|---|---|---|---|---|---|
| _empty_ | — | — | — | — | — | — | — |

---

## 📊 Monitoring (deployed items tracking)

> Per-page моніторинг title/meta правок на ІСНУЮЧИХ URL (не нові статті).
> Нові статті/сторінки трекаються в [`pipeline.md`](pipeline.md) секція `8. Published`.
>
> Як оновлювати:
> 1. Запустити `python3 seo-system/scripts/detect-metadata-changes.py --days 30` — скрипт виведе готові markdown-рядки.
> 2. Якщо URL вже є в таблиці — оновити рядок (новий current snapshot, новий next check).
> 3. Якщо URL новий — додати рядок.
> 4. Review агент далі читає цю таблицю на T+2wk / T+4wk і виносить decision.

| Item | Deployed | Baseline (-30d) | Current | Next check | Change | Decision |
|---|---|---|---|---|---|---|
| `/ad-creative-uploader` metadata | 2026-04-20 | 217 imp, 5 clk, 2.3% CTR, pos 11.2 | 149 imp, 6 clk, 4.03% CTR, pos 9.9 | 2026-05-04 (T+2wk) | title «Free Ad Uploader — Google Drive to Meta…» → «Bulk Upload Ad Creatives to Meta & TikT…» (24e5df9) | monitoring |
| `/blog/best-ad-testing-tools` metadata | 2026-04-20 | 1561 imp, 0 clk, 0.0% CTR, pos 5.8 | 1568 imp, 0 clk, 0.0% CTR, pos 19.5 | 2026-05-04 (T+2wk) | title «Best Ad Testing Tools in 2026: 10 Tools…» → «10 Best Ad Testing Tools & Software (20…»; description «Compare the best ad testing tools and a…» → «Compare 10 ad testing tools and softwar…» (bcc4394, 24e5df9) | monitoring |
| `/blog/best-mcp-servers-meta-google-ads` metadata | 2026-04-20 | 2304 imp, 11 clk, 0.48% CTR, pos 6.5 | 965 imp, 8 clk, 0.83% CTR, pos 6.9 | 2026-05-04 (T+2wk) | title (no change); description «Compare MCP servers that connect Meta A…» → «Meta is banning ad accounts that connec…» (24e5df9) | monitoring |
| `/blog/madgicx-review-alternative` metadata | 2026-04-30 | 2599 imp, 2 clk, 0.08% CTR, pos 9.8 | 128 imp, 1 clk, 0.78% CTR, pos 8.8 | 2026-05-14 (T+2wk) | description «Madgicx pricing starts at $69/mo…» → «Running ads beyond Meta? See Madgicx pr…»; title «Madgicx Review 2026: Pricing, Features …» → «Is There a Real Madgicx Alternative for…» (6d3141e, 9a9bfe5) | monitoring |

**Decision values:**
- `monitoring` — ще не пройшов milestone (T+2wk / T+4wk), просто чекаємо
- `✅ keep` — CTR/impressions виросли, правка спрацювала
- `⚠️ iterate` — flat, треба ще одну ітерацію (тільки після cooldown)
- `❌ revert` — позиція впала / impressions просіли, повернути попередній варіант
- `🔄 re-index` — Google ще не підхопив новий title, чекаємо або submit URL Inspection

---

## 🚧 In Progress

| Topic | Stage | Branch | Notes |
|---|---|---|---|
| _empty_ | — | — | — |

---

## ✅ Completed (history)

| Topic | Deployed | Result | Insight |
|---|---|---|---|
| _empty_ | — | — | — |
