# Part 1 — GSC Deep Dive

> Recon date: 2026-05-25 · Window: 28d (2026-04-27 → 2026-05-24).
> Context: built on top of `2026-05-25-drop-investigation.md`. Drop hypothesis (May 2026 Core Update + coverage shrinkage) accepted — this part documents what's *currently* extractable as actions despite rollout.
> Constraint: actions on demoted pages flagged "after rollout (~2026-06-04)" per drop-investigation guidance.

---

## Quick GSC snapshot (28d)

- Top page traffic: `/` 16 clicks, `/blog/best-mcp-servers-meta-google-ads` 16 clicks, `/ad-creative-uploader` 13 clicks
- Striking-distance set (pos 4-20, imp ≥ 50): 7 non-brand queries — all at 0 clicks
- Indexation: `/blog/best-facebook-ads-automation-tools` still **not indexed** at T+17d (deployed 2026-05-08)
- Today's redirect (May 25): `/blog/creative-testing-framework` → `/creative-testing-library` — page not yet indexed (deployed today, expected)

---

## Step 6 — GSC Query Opportunities

### 6a. Queries WITHOUT dedicated content (write new — but defer until post-rollout)

| Query | Impressions | Position | Currently ranks on | Opportunity |
|---|---|---|---|---|
| `pipeboard.co meta ads mcp pricing free p…` | 58 | 11.4 | `/blog/best-mcp-servers-meta-google-ads` | Likely AI-generated long-tail query stream; not standalone content — keep covered inside MCP article. |
| `madgicx tiktok ads automation` | 16 | 6.2 | `/blog/madgicx-review-alternative` | Existing page covers; reinforce TikTok angle in H2 (current pos 6.2 = win zone). |
| `bulk content upload for creators` | 23 | 37.3 | `/blog/bulk-upload-creatives-meta-tiktok` (28.1) + `/ad-creative-uploader` (83.6) | **Wrong-page split** — neither version targets "creators" phrasing. Add 1 H3 + paragraph mention in bulk-upload article. |
| `ppc automation rules` / `ppc automated rules` | 22 + 18 = 40 | 85.9 / 88.4 | `/automation-rules-library` (page 9) | Page exists, ranks abysmally. Likely SERP-intent mismatch (PPC = Google Ads, our library = Facebook). After rollout: add Google Ads rules section OR write standalone `google-ads-automated-rules` page (separate cluster). |
| `facebook automated rules` | 55 | 54.5 | `/use-cases/ad-campaign-automation-rules` (wrong page) | See 6d — wrong-page detection. Page exists (`automation-rules-library` is the correct target) but Google still picks use-case page. Internal-linking + canonical fix needed. |
| `automated ua creatives` | 31 | 18.6 | `/blog/creative-testing-framework` + `/use-cases/automated-creative-upload-meta` | The blog page now 301-redirects to `/creative-testing-library` (May 25). Likely orphaned content — need to ensure `/creative-testing-library` ranks on this query OR `/use-cases/automated-creative-upload-meta` (which has it at pos 23.3) gets reinforced. |

**Note:** all six are existing-content opportunities, not "no page exists" cases. Genuine new-content gaps are addressed in Parts 2-4 (competitor gap, trends, ICP pain).

### 6b. Query clusters (consolidate or strengthen pillar)

| Cluster | Total 28d imp | Queries (top) | Current pages | Action |
|---|---|---|---|---|
| **Ad testing / performance testing** | ~1,800 | ad testing software (311), ad performance testing tool (229), ad testing tools (224), ad testing tool (185), ad testing platform (130), ad testing platforms (108), creative testing tools (159), creative testing platform (79+) | All collapse onto `/blog/best-ad-testing-tools` (pos 16-45 across cluster, 0 clicks) | Page already has 17 mentions of "ad testing tool/platform". Drop investigation flagged this page for ranking demotion. **Defer rework until post-rollout (2026-06-04).** Conditional T+4wk decision already in pipeline. |
| **MCP servers (Meta + Google Ads)** | ~700 | google ads mcp (68), meta ads mcp (49), meta mcp (22), meta mcp server (21), meta ads mcp official (19), facebook ads mcp (19), mcp meta ads (14), google ads mcp server (12), official google ads mcp server (12), etc. | All collapse onto `/blog/best-mcp-servers-meta-google-ads` (pos 10-33) | One strong pillar working well. ✅ Keep. CTR 0.4% at 4,033 imp = 16 clicks — AI Overview displacement per drop-investigation H1. Snippet rewrite candidate post-rollout. |
| **Bulk ad launch** | ~250 | launch ads (52), bulk ad launcher (48 across two pages), launch fast ads (17), launch ads faster (13), facebook campaign launcher (29), bulk ad uploader (6), bulk upload to tiktok (4) | Split across 4 pages: `/use-cases/bulk-ad-launch` (pos 16-30), `/features/bulk-launch` (pos 15-53), `/blog/best-bulk-ad-launch-tools` (pos 9-19), `/blog/bulk-upload-creatives-meta-tiktok` (pos 9-28) | Scattered. `/use-cases/bulk-ad-launch` has Q1 keyword enrichment from action-list (2026-05-04) — measure T+2wk on 2026-05-18 already passed; current data shows pos slipping (12.3 → 21.0 wk-over-wk). **Caution: enrichment effect masked by core update**. Hold until post-rollout. |
| **Madgicx alternative / review** | ~115 | madgicx alternative (67), madgicx g2 reviews (14), madgicx alternatives (8), madgicx vs (17), madgicx review (4), madgicx tiktok ads automation (16), madgicx vs revealbot (4) | `/blog/madgicx-review-alternative` owns full cluster, pos 6-12. ✅ Keep. | Already strong (1 click last 28d, position improving 9.8 → 8.7 per monitoring). Hold. |
| **Creative testing framework** | ~120 | creative testing framework (57), creative testing software (10), creative testing tool (6), creative testing platform (56 split between two pages), best creative testing framework for user… (6 @ pos 1.0), how to build a creative testing pipeline for mobile gam… (12 @ pos 9.8), what creative testing framework works be… (17 @ pos 2.9) | Until today (May 25): `/blog/creative-testing-framework`. Now 301 → `/creative-testing-library`. | **Risk:** redirect was deployed today; cluster ranking signals could shift unpredictably. Monitor `/creative-testing-library` indexation. Cluster T+1wk indexation check 2026-06-01. |
| **AdCreative.ai alternative** | ~50 | adcreative.ai alternatives 2026 (11), adcreative.ai vs alternatives 2026 (9), adcreative.ai alternatives comparison (6) + tail | `/blog/adcreative-ai-alternative` ranks pos 9-12, 81 imp last 7d. ⚠️ Already flagged for low ceiling (TP=10 per pipeline). | Hold per S3 defer. |

### 6c. Keywords to add to existing content (keyword enrichment)

| Query | Impressions (28d) | Position | Page | In body? | Action |
|---|---|---|---|---|---|
| `facebook automated rules` | 55 | 54.5 | `/use-cases/ad-campaign-automation-rules` | ❌ 0 mentions in page jsx | **Critical**: page ranks on this query but has zero on-page mentions. Add to H2, body, FAQ. Also: see 6d — wrong page. Post-rollout. |
| `ad performance testing tool` | 229 | 17.7 (page 2) | `/blog/best-ad-testing-tools` | ❌ 0 mentions of "ad performance testing" | Add H2 "Ad performance testing: what to test" or natural body mention. Highest-volume missing-keyword opportunity. Post-rollout. |
| `creative testing platform` | 79+ | 19-87 | `/blog/best-ad-testing-tools` + `/blog/creative-testing-framework` (now redirected) | ✅ Mentioned in best-ad-testing-tools (2 times) | Reinforce on new `/creative-testing-library` after redirect settles. Add H2 mention. |
| `campaign testing platform` | 34 | 31.3 | `/blog/best-ad-testing-tools` | ❌ 0 mentions | Lower priority but free win — add nature mention. |
| `ad performance test tool` | 12 | 18.0 | `/blog/best-ad-testing-tools` | ❌ 0 mentions of "performance test tool" | Add `performance test` variant. Pairs with `ad performance testing tool` above. |
| `bulk content upload for creators` | 23 | 28.1 / 83.6 split | `/blog/bulk-upload-creatives-meta-tiktok` + `/ad-creative-uploader` | likely no | Add "creators" mention in bulk-upload article (UGC / content-creator framing). |
| `launch ads faster` / `launch fast ads` | 13 + 17 = 30 | 32.7 / 16.2 | `/use-cases/bulk-ad-launch` (4 mentions exist) | ✅ partial | Already in Q1 enrichment scope. No new action — measure post-rollout. |
| `automated ad launch tool` | 15 | 12.9 | `/use-cases/bulk-ad-launch` (mentions exist) | ✅ | Holding from Q1 enrichment. |

### 6d. Wrong page detection (Google shows the wrong page)

| Query | 28d imp | Pos | Actual page (Google shows) | Better-fit page | Fix |
|---|---|---|---|---|---|
| `facebook automated rules` | 55 | 54.5 | `/use-cases/ad-campaign-automation-rules` (0 mentions of phrase) | `/automation-rules-library` (9 mentions, fresher page, exact-match topic) | Internal-link from use-case → library with exact-match anchor "facebook automated rules". Library already has high topical density. Library currently absent from this query's GSC sample = signal Google hasn't picked it up yet. After core-update rollout: also consider canonical hint or H1-strengthen the library page. |
| `automated rules ad campaign management p…` | 30 (use-case) + 13 (library) = 43 | 10.9 / 10.2 | Split between `/features/automation-rules` (30 imp pos 10.9) and `/automation-rules-library` (13 imp pos 10.2) | Library should win | Both currently page 1. **Don't touch** until post-rollout — split could resolve naturally as library accumulates signals. |
| `creative testing platform` (79 imp cluster) | 36 | 54.5 | `/blog/best-ad-testing-tools` (pos 54.5, 36 imp) — but ALSO `/blog/creative-testing-framework` at pos 87.9 (23 imp) | After May 25 redirect: `/creative-testing-library` should now consolidate | Monitor whether redirect transfers cluster ranking. T+1wk check 2026-06-01. |
| `bulk ad launcher` | 33 + 15 + 13 = 61 (3 pages) | 11.8 / 18.9 / 53.0 | `/use-cases/bulk-ad-launch` (33 imp pos 11.8), `/blog/best-bulk-ad-launch-tools` (15 imp pos 18.9), `/features/bulk-launch` (13 imp pos 53.0) | Use-case page is correct primary (pos 11.8) | Reduce on-page emphasis on `/features/bulk-launch` to avoid 3-way split. Or add canonical from features → use-case. Post-rollout. |
| `bulk content upload for creators` | 18 + 10 = 28 | 28.1 / 83.6 | `/blog/bulk-upload-creatives-meta-tiktok` + `/ad-creative-uploader` | Blog should own this informational query | Blog is correct page (pos 28.1) — just needs enrichment. Don't change uploader page; just add "creators" mention to blog. |
| `automated ua creatives` | 20 + 11 = 31 | 16.1 / 23.3 | `/blog/creative-testing-framework` (redirected today) + `/use-cases/automated-creative-upload-meta` | After redirect: `/use-cases/automated-creative-upload-meta` should now own | Already redirected. Monitor whether use-case page absorbs the ~20 imp/28d. |

---

## Section 9 — Indexation Check

| Slug | Deployed | Days live | SerpAPI `site:` | Status |
|---|---|---|---|---|
| `/blog/adcreative-ai-alternative` | 2026-04-07 | 48d | ✅ pos 1, full snippet | Indexed |
| `/blog/best-ad-testing-tools` | 2026-04-07 | 48d | ✅ pos 1 | Indexed |
| `/blog/best-bulk-ad-launch-tools` | 2026-04-27 | 28d | ✅ pos 1 | Indexed |
| `/blog/best-facebook-ads-automation-tools` | 2026-05-08 | **17d** | ❌ "Google hasn't returned any results" | **🚨 NOT INDEXED at T+17d** — escalate. Same pathology as old `/blog/facebook-ads-automation` + `/blog/facebook-automated-rules`. Submit URL Inspection → Request Indexing. If still not indexed at T+4wk (2026-06-05): consolidation/canonical fix per F1. |
| `/blog/best-mcp-servers-meta-google-ads` | 2026-04-07 | 48d | ✅ pos 1 + 3 sitelinks | Indexed |
| `/blog/bulk-upload-creatives-meta-tiktok` | 2026-04-21 | 34d | ✅ pos 1 | Indexed |
| `/blog/madgicx-review-alternative` | 2026-03-01 | 85d | ✅ pos 1 | Indexed |
| `/blog/meta-andromeda-update` | recent | — | ✅ pos 1 | Indexed |
| `/blog/what-is-ad-fatigue` | 2026-04-07 | 48d | ✅ pos 1 + 3 sitelinks | Indexed |
| `/automation-rules-library` | 2026-05-12 | 13d | ✅ pos 1 | Indexed (fast) |
| `/creative-testing-library` | **2026-05-25** | 0d | ❌ "Google hasn't returned any results" | Just deployed today — normal. Re-check 2026-06-01 (T+1wk) per pipeline §8 milestone. |

**Critical:** only one chronic indexation issue — `best-facebook-ads-automation-tools` at T+17d. This is the third blog in the `facebook-*` family with indexation failure (per F1 in foundation list). Strong signal of structural problem, not random.

---

## Section 10 — Previous items tracking (§8 Published + 📊 Monitoring)

> Comparing 7d windows: current `2026-05-18 → 2026-05-24` vs prior `2026-05-11 → 2026-05-17`. Both windows are post-drop (May 16 pivot per drop-investigation), so trends here reflect "is bleeding stopping yet?" not "is page healthy".

### §8 Published — pages deployed before recon

| Page | Prior 7d (May 11-17) | Current 7d (May 18-24) | Δ Imp | Δ Pos | Decision next |
|---|---|---|---|---|---|
| `/blog/best-mcp-servers-meta-google-ads` | 1166 imp / 1 clk / pos 12.1 | 538 / 3 / pos 10.8 | **−54%** | +1.3 (better) | drop-investigation H1 confirmed — query lifecycle + AI Overview. Hold. Decision deferred to post-rollout review 2026-06-05. |
| `/blog/best-ad-testing-tools` | 822 / 1 / pos 20.1 | 434 / 0 / pos 32.5 | **−47%** | **−12.4 (worse)** | Ranking demotion still progressing. R1 title test T+14d (2026-05-18) milestone already passed — title change did not arrest demotion. Per action-list R1: escalate to full content rework post-rollout. |
| `/blog/madgicx-review-alternative` | 138 / 0 / pos 9.0 | 94 / 0 / pos 9.2 | −32% | flat | Hold — stable. T+2wk metadata milestone passed 2026-05-14. Decision: ✅ keep (early signal positive, stable now). |
| `/blog/adcreative-ai-alternative` | 148 / 0 / pos 10.9 | 81 / 0 / pos 10.0 | −45% | +0.9 | Hold per S3 defer (revisit 2026-05-19 → now passed; with core update overlay, extend defer to 2026-06-05). |
| `/blog/best-bulk-ad-launch-tools` | 172 / 1 / pos 8.4 | 43 / 0 / pos 16.6 | **−75%** | **−8.2 (worse)** | Drop-investigation flagged as ranking demotion. Was strong (page 1 day 1) — now collapsed to page 2. Post-rollout: full position review. T+4wk decision deferred to 2026-06-05. |
| `/blog/bulk-upload-creatives-meta-tiktok` | 56 / 0 / pos 6.9 | 35 / 0 / pos 13.8 | −38% | **−6.9** | T+4wk milestone (2026-05-19) — was already flat (CTR 1.13% → 0.59%); now position also slipping. Defer snippet rewrite until post-rollout. |
| `/blog/creative-testing-framework` | 218 / 0 / pos 8.8 | 40 / 0 / pos 6.8 | **−82%** | +2.0 | Drop-investigation confirmed query volume drop. **NOW REDIRECTED (May 25)** → `/creative-testing-library`. Tracking moves to new URL. T+1wk indexation check 2026-06-01. |
| `/blog/what-is-ad-fatigue` | 7 / 0 / pos 25.4 | 4 / 0 / pos 4.5 | −43% | **+20.9 (much better)** but tiny n | S8' title test (T+14d 2026-05-19) — sample too small to call. Position jump suggests title-test helped, but 4 imp is noise. Continue monitoring, decide at T+4wk 2026-06-05. |
| `/blog/meta-andromeda-update` | 37 / 0 / pos 8.7 | 14 / 0 / pos 14.1 | −62% | **−5.4** | T+1wk-ish post-publish (deployed ~2026-05-10 in §3 pending list, indexed). Caught in core update. Hold. |
| `/automation-rules-library` | 64 / 0 / pos 7.7 | 6 / 0 / pos 5.7 | **−91%** | +2.0 | T+1wk milestone 2026-05-20 — indexation confirmed (✅ pos 1 SerpAPI). But impressions collapsed in 7d window. Could be lifecycle (initial novelty bounce) + core update overlap. T+2wk full review 2026-05-27 (in 2 days). |
| `/ad-creative-uploader` | 133 / 6 / pos 10.4 | 65 / 1 / pos 16.0 | −51% | **−5.6** | Metadata edit (2026-04-20) T+4wk milestone passed 2026-05-18 with **✅ keep** status before drop, but now slipping. Likely core-update overlay. Hold; do not revert metadata. |
| `/use-cases/ad-campaign-automation-rules` | 196 / 0 / pos 19.2 | 80 / 0 / pos 34.6 | **−59%** | **−15.4** | Drop-investigation MAJOR ranking demotion confirmed (was 14.2 → 29.0; now 34.6). Title-test cooldown ended 2026-05-13 — eligible for next test, but defer per "no panic edits during rollout". |
| `/use-cases/bulk-ad-launch` | 110 / 0 / pos 12.3 | 94 / 0 / pos 21.0 | −15% | **−8.7** | Q1 enrichment T+2wk milestone passed 2026-05-18. Position worsening alongside cluster — cannot conclude effect of enrichment yet. Confounded by core update. Re-baseline post-rollout. |
| `/features/automation-rules` | 106 / 0 / pos 20.5 | 34 / 0 / pos 46.1 | **−68%** | **−25.6** | Drop-investigation MAJOR demotion confirmed (16.6 → 39.4 → 46.1). H2 (RulesLibraryPromo block) hypothesis still live. Post-rollout: audit rendered HTML pre/post PR #83. |
| `/use-cases/scale-ad-campaigns-faster` | 32 / 0 / pos 23.0 | 25 / 0 / pos 24.0 | −22% | flat | Flat — least-affected page. Hold. |
| `/use-cases/automated-creative-upload-meta` | 54 / 2 / pos 11.1 | 49 / 1 / pos 9.8 | **−9%** | **+1.3 (better)** | ✅ Stable / improving — bucking the trend. Note: 3 of last 7d clicks are from this and `/pricing`. |
| `/` (homepage) | 286 / 3 / pos 6.8 | 219 / 6 / pos 7.3 | −23% | −0.5 | ✅ Stable + clicks doubled. Confirms drop-investigation: not sitewide. |
| `/pricing` | 25 / 3 / pos 9.5 | 6 / 1 / pos 4.5 | **−76%** imp / **+5 pos** | | imp drop is concerning but position improved. Likely query-mix shift. Monitor. |
| `/ai-assistant` | 26 / 0 / pos 5.7 | 14 / 0 / pos 4.6 | −46% / +1.1 pos | | Healthy. |

### 📊 Monitoring (metadata edits)

| Item | Milestone hit this week | Status |
|---|---|---|
| `/ad-creative-uploader` metadata (Apr 20) | T+4wk 2026-05-18 ✅ passed | Pre-drop: ✅ keep (CTR 1.98×). Now slipping under core update overlay. **Recommendation: keep title, no revert.** Re-baseline 2026-06-05. |
| `/blog/best-ad-testing-tools` metadata (May 4) | T+2wk 2026-05-18 ✅ passed | Title test did not arrest CTR=0; impressions collapsing further. Per action-list R1: escalate to S9 full content rework — but defer execution until post-rollout. |
| `/blog/best-mcp-servers-meta-google-ads` newsjack (R3, May 5) | T+2wk 2026-05-19 ✅ passed | CTR 0.4% (target was 1.5%) — flat. But query volume halved, so absolute clicks held (3 in current 7d). Per action-list R3: iterate description post-rollout. |
| `/blog/madgicx-review-alternative` metadata | T+2wk 2026-05-14 ✅ passed | ✅ keep (early signal CTR 9.7× before drop; held steady through drop). |
| `/use-cases/ad-campaign-automation-rules` metadata (Apr 29) | T+2wk 2026-05-13 ✅ passed (cooldown end) | Eligible for new title test, but defer per "no edits during rollout". Page is now MAJOR demoted (pos 19.2 → 34.6). |
| `/use-cases/bulk-ad-launch` body enrichment (Q1) | T+2wk 2026-05-18 ✅ passed | Effect indeterminable — core update confound. Re-baseline 2026-06-05. |
| Uploader cluster internal linking | T+4wk 2026-06-01 (in 7d) | Pending. |
| `/blog/what-is-ad-fatigue` title test (S8') | T+14d 2026-05-19 ✅ passed | Sample too small (4 imp) — extend monitoring to T+4wk 2026-06-05. Per action-list: if still 0 clicks → escalate to S8'' full rework. |
| `/blog/best-facebook-ads-automation-tools` listicle (S5') | T+1wk 2026-05-15 ✅ passed → T+2wk 2026-05-22 ✅ passed | **🚨 STILL NOT INDEXED at T+17d.** Indexation milestone failed. Submit GSC URL Inspection → Request Indexing. Escalate per F1 if not resolved by T+4wk 2026-06-05. |

---

## Constraint reminders for next-step synthesis

- Do **not** propose new title tests, content rewrites, or canonical changes for demoted pages until ~2026-06-04 (core update rollout completion). Re-baseline first.
- Items that **can** proceed this week without core-update interference:
  1. Submit URL Inspection → Request Indexing for `/blog/best-facebook-ads-automation-tools` (15min, no risk).
  2. Internal-linking fix for `facebook automated rules` query → add anchor-text link from `/use-cases/ad-campaign-automation-rules` to `/automation-rules-library` (15min, helps Google pick correct page over time).
  3. Add 2-3 missing-keyword mentions to `/blog/best-ad-testing-tools` (`ad performance testing`, `campaign testing platform`, `ad performance test tool`) — body insertion is "cheap, non-destructive" but per drop-investigation guidance even this should wait. Hold.
- Monitor `/creative-testing-library` indexation 2026-06-01 (T+1wk). If not indexed by then, same family-issue as facebook-* pages.
