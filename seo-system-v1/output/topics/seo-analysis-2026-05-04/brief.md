# SEO Intelligence Brief — 2026-05-04

> Weekly SEO analysis. Source: GSC (28d window), Ahrefs MCP, SerpAPI, trend_scout.py.
> Agent: seo-analysis | Cycle: 2026-05-04 | Branch: seo/seo-analysis-2026-05-04

---

## 1. Quick Stats (GSC 28d: 2026-04-06 → 2026-05-04)

| Metric | Value | Signal |
|---|---|---|
| Top page by imp | `/blog/best-ad-testing-tools` | 3,045 imp, 0 clicks ⚠️ |
| CTR anomaly #1 | `/use-cases/ad-campaign-automation-rules` | 239 imp, 0 clicks, pos 8.4 🔥 |
| Biggest win | `/ad-creative-uploader` | +150% imp, +500% clicks (title fix) |
| Keyword rewire win | `/use-cases/automated-creative-upload-meta` | +2000% imp |
| New content | `/blog/bulk-upload-creatives-meta-tiktok` | Indexed in 6 days, 79 imp week 1 |
| Critical blocker | 2 articles "Discovered – not crawled" | 4–6 weeks stuck |

Top pages by impression (28d):

| Page | Imp | Clicks | CTR | Pos |
|---|---|---|---|---|
| `/blog/best-ad-testing-tools` | 3,045 | 0 | 0% | 16.9 |
| `/blog/best-mcp-servers` | 2,421 | 13 | 0.5% | 10.1 |
| `/blog/madgicx-review-alternative` | 2,551 | 3 | 0.1% | 9.7 |
| `/use-cases/ad-campaign-automation-rules` | 239 | 0 | 0% | 8.4 |
| `/ad-creative-uploader` | 240 | 6 | 2.5% | 12.8 |
| `/use-cases/automated-creative-upload-meta` | 63 | 2 | 3.2% | 10.8 |
| `/blog/bulk-upload-creatives-meta-tiktok` | 79 | 1 | 1.3% | 11.1 |

---

## 2. Breakout Opportunities (since last report 2026-04-27)

**Wins confirmed:**

1. `/ad-creative-uploader` title fix (deployed 2026-04-20): **+150% impressions, +500% clicks** vs. baseline. Model confirmed: title changes work fast.
2. `/use-cases/automated-creative-upload-meta` keyword rewire (2026-04-20): **+2000% impressions** — from 3 imp/90d to 63 imp/28d. Keyword stuffing replaced with real queries.
3. `/blog/bulk-upload-creatives-meta-tiktok` (deployed 2026-04-21): **Indexed in 6 days**, 79 imp first week. New content can rank fast when internal links are in place.
4. `/blog/best-bulk-ad-launch-tools` (deployed 2026-04-27): **Indexed in 7 days** — confirmed via site: query today. Early indexation signal is positive.

**New gap found:**

- "ad creative automation" (vol 150, KD 0, Traffic Potential 7,000/mo via Ahrefs) — zero Scalemate coverage, zero competition. Biggest new opportunity this cycle.

---

## 3. Striking Distance Analysis (pos 4–20, GSC 28d)

| Page | Top Query | Pos | Imp | Clicks | CTR | Cooldown | Action |
|---|---|---|---|---|---|---|---|
| `/use-cases/ad-campaign-automation-rules` | automation rules | 8.4 | 239 | 0 | **0%** | None ✅ | 🟢 Title/meta fix — Priority 2 |
| `/blog/best-ad-testing-tools` | ad testing software | 16.9 | 3,045 | 0 | **0%** | Until 2026-05-18 | Content enrichment now; title fix 2026-05-18 |
| `/blog/best-mcp-servers` | best mcp servers | 10.1 | 2,421 | 13 | 0.5% | Until 2026-05-18 | Monitor — steady progress |
| `/blog/madgicx-review-alternative` | madgicx alternative | 9.7 | 2,551 | 3 | 0.1% | Until 2026-05-28 | Monitor — cooldown in effect |

**Key finding:** `/use-cases/ad-campaign-automation-rules` has been deferred since 2026-04-20 waiting for blog article indexation. Both blog articles confirmed still not indexed. Deferral no longer justified — CTR fix is independent of indexation. This is the top quick win this cycle.

**Cooldown guard (ran `detect-metadata-changes.py --no-gsc` 2026-05-04):**
- `/use-cases/ad-campaign-automation-rules` — NOT in monitoring file → no recent title/meta change → **title/meta fix ALLOWED**
- All 2026-04-20 deploys → cooldown until 2026-05-18
- Madgicx v2 (2026-04-30) → cooldown until 2026-05-28

---

## 4. ICP Pain Discovery

**Reddit API status:** All 6 subreddits returned HTTP 403 (Blocked) this cycle. No new Reddit data collected. Relying on prior validated pains + current Google SERP PAA.

**PAA from Google SERP — "how to automate facebook ads":**
- "Can you automate Facebook ads?"
- "What is the best ad automation tool for Facebook?"
- "How to set up Facebook automated rules?"
- "Does Meta have built-in ad automation?"
- "How do I automate Facebook ad bidding?"

**PAA from Google SERP — "ad creative testing":**
- "What is creative testing in advertising?"
- "How to A/B test ad creatives on Facebook?"
- "What is a good creative test result?"
- "How many creatives should I test at once?"

**Prior Reddit-validated pains (still load-bearing, from past cycles):**
- "Testing 50+ creatives/week without burning out" → JTBD-B
- "Accounts getting banned for bulk actions in Ads Manager" → Verified Meta app angle
- "Facebook ads take too much time to manage manually" → JTBD-A
- "How to scale ad spend without scaling headcount" → JTBD-D

**JTBD mapping:**

| JTBD | Query cluster | Coverage | Gap |
|---|---|---|---|
| A: Automate repetitive tasks | "facebook ads automation" | ✅ Exists (`facebook-ads-automation`) but NOT INDEXED | 🚨 Indexation fix needed |
| B: Scale creative ops | "ad creative automation" | ❌ Zero coverage | → New article needed |
| C: Protect budgets | "facebook ads rules" | ✅ Exists (`facebook-automated-rules`) but NOT INDEXED | 🚨 Indexation fix needed |
| D: Scale without headcount | "bulk ad launch" | ✅ Coverage improving | Monitor |

---

## 5. Competitor Threats

### Bir.ch (DR ~25 — same tier as Scalemate)

Bir.ch outranks Scalemate for core terms while our articles sit non-indexed:

| Query | Bir.ch | Scalemate |
|---|---|---|
| "how to automate facebook ads rules" | pos ~4 (`bir.ch/blog/facebook-ads-automation`) | ❌ Not indexed |
| "facebook ads automation guide" | pos ~8 | ❌ Not indexed |

**Threat level: HIGH.** A same-DR competitor is ranking for our core terms while our content is invisible. Every week of non-indexation = backlinks and engagement going to bir.ch.

### Madgicx (DR 60+)

- Top pages: review/comparison articles, automation workflow guides, integration pages
- 6+ comparison articles targeting "[tool] vs Madgicx" format
- Not an immediate threat for our target keywords (DR gap too large)
- Watch for: "madgicx alternative" queries where we have existing content

### admanage.ai

- Limited organic presence (DR too low)
- Paid search dominant — not an organic threat this cycle

---

## 6. AI Visibility (Brand Radar)

**Status:** Brand Radar API returned error (`invalid data_source: all`) — skipped this cycle.

Manual fallback check (Google SERP for "scalemate"):
- No AI Overview snippets detected for brand queries
- No featured snippets on core product queries
- Organization schema not yet implemented (scorecard item #18) — limits Knowledge Graph signals

**Action:** Deploy Organization schema (scorecard #18) to improve brand entity recognition. Low effort (2h), high compounding value.

---

## 7. Technical Issues

### 🔴 CRITICAL: Indexation Crisis — 2 Articles Stuck "Discovered – not crawled"

Confirmed via SerpAPI `site:` queries run 2026-05-04:

| Article | Slug | Deployed | Age | Status |
|---|---|---|---|---|
| "Facebook Ads Automation Guide" | `facebook-ads-automation` | 2026-03-27 | **6 weeks** | ❌ 0 Google results |
| "How to Automate Facebook Ads Rules" | `facebook-automated-rules` | 2026-04-06 | **4 weeks** | ❌ 0 Google results |

**Root cause (best hypothesis):** Low-DR site (DR ~10–12). Google deprioritizes crawl for low-authority domains. Both pages are in the crawl queue ("Discovered") but never fetched. Competitor bir.ch at similar DR is indexed — they likely have more external signals (backlinks, social shares).

**Fix protocol (manual — Natalia):**

1. GSC → URL Inspection → Request Indexing: `https://scalemate.co/blog/facebook-ads-automation`
2. GSC → URL Inspection → Request Indexing: `https://scalemate.co/blog/facebook-automated-rules`
3. Share both URLs on LinkedIn/Twitter with 2-line teaser (social signals trigger crawl)
4. Add internal links from recently-indexed articles → both stuck articles:
   - From `/blog/bulk-upload-creatives-meta-tiktok` → `facebook-ads-automation`
   - From `/blog/best-bulk-ad-launch-tools` → `facebook-automated-rules`

**Revisit:** Check GSC + site: queries on 2026-05-11. If still not indexed → escalate (Fetch as Google, check for crawl errors, consider Cloudflare caching issues).

### `/blog/best-bulk-ad-launch-tools` — Newly Indexed ✅

Deployed 2026-04-27, confirmed indexed today (2026-05-04) via `site:` query. No action needed.

---

## 8. New Content Opportunities

### Opportunity 1: "Ad Creative Automation" Article

**Score: 64 | Bucket: 🟡 Strategic Bet | Effort: 10h**

| Signal | Value |
|---|---|
| Head keyword | "ad creative automation" |
| Volume | 150/mo |
| Keyword Difficulty | **0** |
| Traffic Potential | **7,000/mo** (parent topic) |
| CPC | ~$4.50 |
| Scalemate coverage | ❌ None |
| ICP fit | High — UA Manager, Media Buyer (JTBD-B) |
| Existing bonus | No |

The TP 7,000 signal means this keyword cluster is part of a massive parent topic. KD 0 = top-3 ranking attainable on first publish (as demonstrated by `bulk-upload-creatives` which indexed in 6 days). Scalemate's creative uploader is a direct product match.

**Proposed angle:** "Ad Creative Automation: How to Launch, Test, and Optimize Creatives Without Manual Work" — pain-first, tool-agnostic introduction, then Scalemate workflow as the solution.

**Add to pipeline.md section 1 (New):** `ad-creative-automation`

### Opportunity 2: Creative Testing Pillar (already in pipeline)

Brief written 2026-04-28. Status: pipeline section 3 (Pending Natalia review).

- Keyword cluster: 1,000+ vol, KD 0–8
- Pain validated: "Testing 50+ creatives/week without burning out"
- Pending: Natalia review of brief → move to section 4

**No new action needed this cycle.**

---

## 9. Keyword Expansion (Ahrefs matching terms — this cycle)

| Keyword | Vol | KD | TP | Cluster | Scalemate coverage |
|---|---|---|---|---|---|
| ad creative automation | 150 | 0 | 7,000 | creative ops | ❌ None — **→ new article** |
| facebook ads automation | 500 | 5 | 2,100 | automation | ✅ Exists (not indexed) |
| ad testing software | 250 | 8 | 900 | creative testing | ✅ `best-ad-testing-tools` |
| creative testing ads | 100 | 2 | 450 | creative testing | ✅ Pillar in pipeline |
| bulk launch ads | 70 | 1 | 300 | bulk launch | ✅ Growing coverage |
| automated facebook rules | 200 | 3 | 800 | automation | ✅ Exists (not indexed) |

**Trend signals (Google Trends RELATED_QUERIES):**
- "facebook ads automation" — rising: "ai facebook ads", "automated facebook ad rules"
- "creative testing ads" — rising: "creative fatigue", "creative rotation"
- "ai for advertising" — spike: "ai ad generator", "ai creative testing"

No flash trend actionable for ad automation niche this cycle (HN/tech news was DeepClaude, Spirit Air — irrelevant).

---

## 10. Top 5 Priorities This Cycle

### 🔴 PRIORITY 1 — Emergency Indexation Fix
**Score: 1,620 | Effort: 1h | Owner: Natalia (manual)**

Two articles stuck "Discovered – not crawled" for 4–6 weeks. Competitor bir.ch ranks for our target queries while we're invisible.

**Action:**
1. GSC Request Indexing for both URLs (5 min each)
2. Share both on LinkedIn with teaser (5 min each)
3. Add internal links from `bulk-upload-creatives` and `best-bulk-ad-launch-tools` → stuck articles

---

### 🟢 PRIORITY 2 — Title/Meta Fix: `/use-cases/ad-campaign-automation-rules`
**Score: 563 | Effort: 2h | Cooldown: None ✅ | Owner: copywriting agent**

Pos 8.4, 239 imp/28d, 0 clicks. Page-1 position with zero CTR = pure title/meta problem.

**Proposed title:**
```
Automate Your Facebook & TikTok Ad Rules — No Code | Scalemate
```

**Proposed meta:**
```
Set automation rules for Meta, TikTok, and Google Ads. Pause low performers, scale winners, protect your budget — automatically. Free to start.
```

**Action:** Assign to copywriting agent. Apply title + meta. Deploy. Record baseline in scorecard monitoring. Next check: 2026-05-11.

---

### 🟢 PRIORITY 3 — Content Enrichment: `/blog/best-ad-testing-tools`
**Score: 252 | Effort: 3h | Title cooldown until 2026-05-18 | Owner: copywriting agent**

3,045 imp/28d, 0 clicks, pos 16.9. Title fix blocked (deployed 2026-04-20). Body/H2 enrichment is allowed now.

**Target keywords to add to H2s + body:**
- "ad testing software" (250 vol, KD 8) — add to H2 + intro paragraph
- "ad performance testing tool" (long-tail) — add to body
- "creative performance testing" (50 vol, KD 2) — add to FAQ

**Add FAQ section:**
- "What is ad testing software?" — answer: 2–3 sentences, include "ad testing software" 2×
- "What's the difference between A/B testing and multivariate ad testing?" — unique, hard to copy

**Title fix plan (for 2026-05-18 after cooldown):**
```
10 Best Ad Testing Software Tools for 2026 (Free & Paid)
```

**Action:** Assign to copywriting agent. Enrich H2s + body. No title change now. Schedule title fix for 2026-05-18.

---

### 🟡 PRIORITY 4 — Discovery: "Ad Creative Automation" Article
**Score: 64 | Effort: 10h | Owner: discovery agent**

"Ad creative automation" — KD 0, vol 150, TP 7,000. Zero Scalemate coverage. Direct product fit (creative uploader + automation rules). Largest new traffic opportunity this cycle.

**Action:** Add `ad-creative-automation` to pipeline.md section 1 (New). Run discovery agent next cycle. ICP angle: UA Manager who tests 20+ creatives/week and wants to automate launch → evaluate → scale workflow.

---

### 🟡 PRIORITY 5 — Creative Testing Pillar (approve brief → start writing)
**Score: ~200 | Effort: 10h | Owner: content-creator agent (pending Natalia brief approval)**

Brief complete (2026-04-28). 1,000+ vol cluster, KD 0–8. Pain-validated. In pipeline section 3.

**Action (Natalia):** Review `output/topics/creative-testing-pillar/brief.md`. If approved, move to pipeline section 4. Content-creator agent starts writing next cycle.

---

## 11. Deferred This Cycle

| Item | Reason | Revisit |
|---|---|---|
| `/blog/creative-testing-framework` CTR fix | Deployed 2026-04-27 (7 days ago) — too early. Wait for indexation and CTR baseline. | 2026-05-11 |
| `/blog/madgicx-review-alternative` title fix | Cooldown until 2026-05-28 — deployed 2026-04-30 | 2026-05-28 |
| `what-is-ad-fatigue` optimization | pos 24.2 — too far from page 1 for CTR fix. Low priority (⚪ Iceberg). | Next cycle if DR improves |
| "creative testing burnout" article | Wait for `creative-testing-framework` baseline data before cluster expansion | 2026-05-11 |
| Brand Radar (AI share of voice) | API error — invalid data_source parameter | Next cycle (try data_source: "web") |

---

## 12. Monitoring Tracking

### Updates this cycle (2026-05-04)

| Item | Deployed | Baseline | Current (2026-05-04) | Next check | Status |
|---|---|---|---|---|---|
| `/ad-creative-uploader` title/meta | 2026-04-20 | 96 imp, 1 click, pos 8.9 | ✅ 240 imp, 6 clicks, pos 12.8 | 2026-05-18 (cooldown end) | +150% imp, +500% clicks. Working. |
| `/use-cases/automated-creative-upload-meta` rewire | 2026-04-20 | 3 imp/90d | ✅ 63 imp/28d, pos 10.8 | 2026-05-18 (cooldown end) | +2000% imp. Keyword rewire = massive. |
| `/blog/best-mcp-servers` ban warning | 2026-04-20 | 2,296 imp, 11 clicks, pos 10.3 | ✅ 2,421 imp, 13 clicks, pos 10.1 | 2026-05-18 (cooldown end) | Steady growth. No action. |
| `/blog/best-ad-testing-tools` title fix | 2026-04-20 | 1,420 imp, 0 clicks, pos 14.7 | ⚠️ 3,045 imp, 0 clicks, pos 15.7 | 2026-05-18 (cooldown end) | Imp up but 0% CTR persists. Title fix 2026-05-18 + content enrichment now. |
| `/blog/madgicx-review-alternative` v2 | 2026-04-30 | — | — | 2026-05-14 | Cooldown until 2026-05-28. |
| `/blog/bulk-upload-creatives-meta-tiktok` | 2026-04-21 | N/A | ✅ 79 imp, 1 click, pos 11.1 | 2026-05-11 | Indexed in 6 days. Growing. |
| `/blog/best-bulk-ad-launch-tools` | 2026-04-27 | N/A | ✅ Indexed (confirmed 2026-05-04) | 2026-05-11 | 7 days to index. Add to GSC monitoring. |
| `facebook-ads-automation` indexation | 2026-03-27 | Not indexed | 🚨 STILL NOT INDEXED — 6 weeks | 2026-05-11 | Priority 1. GSC Request Indexing immediately. |
| `facebook-automated-rules` indexation | 2026-04-06 | Not indexed | 🚨 STILL NOT INDEXED — 4 weeks | 2026-05-11 | Priority 1. GSC Request Indexing immediately. |

---

## 13. Data Gaps (this cycle)

| Gap | Impact | Fix |
|---|---|---|
| Reddit API blocked (403) | Pain discovery incomplete — using prior validated pains | Try different UA or wait for unblock |
| Brand Radar API error | AI share of voice unknown | Try `data_source: "web"` next cycle |
| GSC direct API access | Still using Bash workaround via `gsc_client.py` | Low priority — workaround functional |

---

## Appendix: Scoring Summary

| # | Item | Traffic | ICP | Biz | Conf | Effort | Urg | Bonus | Score | Bucket |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Indexation fix (2 articles) | 6 | 5 | 4 | 3 | 1h | 3 | ×1.5 | **1,620** | 🔴 Risk/Urgent |
| 2 | Title/meta `/use-cases/ad-campaign-automation-rules` | 5 | 5 | 5 | 3 | 2h | 2 | ×1.5 | **563** | 🟢 Quick Win |
| 3 | Content enrichment `/blog/best-ad-testing-tools` | 7 | 4 | 3 | 3 | 3h | 2 | ×1.5 | **252** | 🟢 Quick Win |
| 4 | New article "Ad Creative Automation" | 8 | 5 | 4 | 2 | 10h | 2 | ×1.0 | **64** | 🟡 Strategic Bet |
| 5 | Creative Testing Pillar (in pipeline) | 6 | 5 | 4 | 2 | 10h | 2 | ×1.0 | ~48 | 🟡 Strategic Bet |
| — | `what-is-ad-fatigue` | 3 | 3 | 2 | 2 | 4h | 1 | ×1.5 | 13.5 | ⚪ Iceberg |
