# Topic research — 2026-08-03

Unit: `topic-research` · input: none · target: scalemate-dev/scalemate-landing · our DR **2.7** (Ahrefs `public-domain-rating-free`, 2026-08-03)

---

## 0. Sanity check (rules/aeo-rules.md Part A) — PASS

| Integration | Call | Result |
|---|---|---|
| Ahrefs | `subscription-info-limits-and-usage` | OK — Lite plan, 50,148/100,000 units used, resets 2026-08-26 |
| GSC (direct) | `bash scripts/gsc.sh --pages 1 --days 7` | OK — exit 0, 532 imp on `/` |
| SerpAPI | `search` engine=`google_light` q=`test` num=1 | OK — 9 organic results |
| Trends | `search` engine=`google_trends` q=`facebook ads automation` TIMESERIES 12m | OK — 53 weekly datapoints |

All four mandatory integrations live. Proceeded.

### Data gaps recorded this run (DI-7 — single-source gaps, marked, not fabricated)

1. **Reddit thread bodies could not be fetched.** `WebFetch` is blocked at the harness level for `www.reddit.com` and `old.reddit.com` ("Claude Code is unable to fetch from…"), and SerpAPI has no `reddit` engine. Thread **discovery** worked normally via SerpAPI `site:reddit.com` search, so every Reddit item below carries a real URL, thread age and comment count from the live SERP, plus Google's own extracted snippet — but **no comment text was read first-hand, so nothing below is presented as a verbatim quote**. Per `capabilities/reddit.md` verbatim quotes are mandatory for a brief; `validate`/`brief` must obtain them another way before any of these topics is written. Reddit is not a mandatory integration for this unit (`rules/aeo-rules.md` A.1), so this is not a STOP.
2. `capabilities/gsc.md` documents the custom-query flag as `{"rowLimit":N}`; `scripts/gsc/gsc_client.py` expects `row_limit`. First call errored (`TypeError: … unexpected keyword argument 'rowLimit'`), retried with `row_limit` → OK. Doc/code mismatch, flagged for `self-improve` — not fixed here.
3. Ahrefs `serp-overview` returns an empty position set for `meta ads mcp` and `pipeboard alternative` (terms too new for the SERP index). Reachability for those was judged from a **live SerpAPI** SERP instead, noted per candidate.

---

## 1. Signals collected

### GSC (direct, `sc-domain:scalemate.co`, 2026-08-03)

- `--queries 1000 --days 90` → 703 queries, 16,588 impressions total.
- `--raw '{"dimensions":["query","page"],"row_limit":2000}' --days 90` → 470 query×page rows.
- `--pages 40 --days 90`, `--striking --days 28`.

Impression clusters by theme (90d, imp / query count):

| Theme | Imp | Queries | Lands on |
|---|---|---|---|
| ad-testing / creative-testing | 4,888 | 80 | `/blog/best-ad-testing-tools` (7,095 imp, pos 19.8, **1 click**) |
| brand (`scalemate`) | 3,902 | 50 | `/` |
| bulk-launch + launcher long tail | 983 | 53 | `/use-cases/bulk-ad-launch`, `/features/bulk-launch` |
| automation-rules | 1,040 | 21 | `/use-cases/ad-campaign-automation-rules`, `/features/automation-rules` |
| **MCP** | **974** | **142** | `/blog/best-mcp-servers-meta-google-ads` (9,343 imp, pos 10.7, **29 clicks** — best asset on the site) |
| uploader | 753 | 7 | `/ad-creative-uploader` |
| static-ads | 429 | 20 | `/blog/what-are-static-ads` |
| catalog (LLM-style queries) | 77 | 20 | `/blog/best-facebook-ads-automation-tools` at pos 24–77 |

Notable unattributed / long-tail queries (imp, avg pos, 90d): `pipeboard.co meta ads mcp pricing free plan` 61 / p11.5 · `unity ads creative testing capabilities for ua managers` 42 / p9.2 · `automated ua creatives` 30 / p18.5 · `adcreative.ai alternative` 29 / p11.9 · `madgicx tiktok ads automation features pricing` 28 / p4.1 · `pipeboard alternative` 18 / p8.2 · `tools for testing motion ads against static versions` 18 / p7.3 · `tools for testing motion ads vs static ads` 17 / p8.2 · `metamcp alternatives` 16 / p9.9 · `meta ads mcp official` 19 / p16.2 · `top video ad testing platforms 2025 comparison` 8 / p5.8.

### Ahrefs (US, 2026-08-03)

`keywords-explorer-matching-terms` on `ads mcp` (vol ≥ 30):

| Keyword | Vol US | KD | Global |
|---|---|---|---|
| pipeboard.co meta ads mcp pricing free plan | 2,100 | n/a | 2,100 |
| google ads mcp | 800 | 12 | 4,500 |
| meta ads mcp | 600 | n/a | 3,400 |
| facebook ads mcp | 350 | 14 | 1,500 |
| google ads mcp server | 250 | 19 | 800 |
| meta ads mcp server | 100 | n/a | 450 |
| amazon ads mcp | 100 | n/a | 300 |
| tiktok ads mcp | 60 | n/a | 250 |
| linkedin ads mcp | 50 | 0 | 150 |
| meta ads mcp claude | 40 | 8 | 300 |

`keywords-explorer-matching-terms` on `catalog ads` (vol ≥ 50): meta catalog ads 250/KD1 · tiktok catalog ads 150/KD3 · meta advantage+ catalog ads 150/KD1 · facebook catalog ads 100/KD24 · advantage+ catalog ads 80/KD0 · pinterest catalog ads 80/KD0 · catalog ads meta 70/KD4 · instagram catalog ads 50.

`keywords-explorer-overview` spot checks: tiktok pixel helper 400/KD19 (3,300 global, TP 350) · facebook ads reporting 400/KD3 · ad testing tools 250/KD1 · ad testing software 200/KD1 · pipeboard 250 (1,500 global) · facebook ads reporting tools 100/KD4 (TP 900) · creative testing framework 80/KD2 · video ad testing 70/KD0 · automated creative testing 60/KD1. Returned **zero volume** (valid answer, not a failure): static vs video ads, motion ads vs static ads, tiktok ads automation tool, madgicx tiktok, mobile game creative testing, mcp server for meta ads.

### Competitor gap — admanage.ai (DR 45), `site-explorer-organic-keywords`, top-20 positions, vol ≥ 100

Ranks where we have nothing: **tiktok pixel helper 300/KD19 → their pos 8** · facebook ads reporting tools 350/KD3 → pos 9 · adespirer/`adespresso alternative` 100/KD0 → pos 2 · foreplay alternatives → pos 9 · meta carousel ad specs 150/KD26 → pos 1.
Ranks we could contest but **shouldn't** (consumer/Android intent, not media-buyer ICP — product-fit fail per `rules/seed-map.md`): meta app manager 900/KD0, what is meta app manager 700/KD0, meta services app 300/KD0, what is meta app installer 350/KD0, tiktok views cluster (~2,700/mo).
Already ours: meta pixel helper 1,900/KD1 — they rank #3, we have `/blog/meta-pixel-helper-explainer` but it earns only 21 imp/90d at pos 12.4.

### Trends (SerpAPI `google_trends`, 12m)

- `meta ads mcp` RELATED_QUERIES **rising**: `claude meta mcp` Breakout · `mcp claude` Breakout · `meta claude mcp` Breakout · `meta ads ai connectors` Breakout · **`meta ads cli` Breakout** · `meta ads claude` +90%. Top: `meta ads mcp server`, `meta mcp server`, `mcp google ads`, `facebook ads mcp`.
- `facebook ads automation` TIMESERIES: baseline 4–8 through 2025, step-change from 2026-02 (19 → 39), peak 100 in 2026-05, back to 4–11 by 2026-07. Spiky, not a stable uptrend.
- `creative testing` RELATED_QUERIES: junk/off-topic (software testing, penetration testing, walmart near me) — no usable signal. Recorded, not used.

### Reddit (SerpAPI discovery only — see gap #1; **snippets are Google's extracts, not verified verbatim quotes**)

MCP / AI-control pain — 7 live threads, r/FacebookAds + r/PPC, 2–5 months old:
- `Claude Code got my Meta ads account permanently [banned]` — **90+ comments, 4mo** — https://www.reddit.com/r/FacebookAds/comments/1sbsw6c/claude_code_got_my_meta_ads_account_permanently/
- `Meta just released Ads MCP. This is where Facebook Ads ops is…` — 60+ comments, 3mo — https://www.reddit.com/r/FacebookAds/comments/1szn2mx/meta_just_released_ads_mcp_this_is_where_facebook/
- `Built a free Meta Ads MCP for Claude.` — 20+ comments, 4mo — https://www.reddit.com/r/FacebookAds/comments/1s6gc75/built_a_free_meta_ads_mcp_for_claude/
- `Meta Ads MCP connector — is_ads_mcp_enabled: false` (setup friction) — 10+ comments, 3mo — https://www.reddit.com/r/FacebookAds/comments/1t01u3w/meta_ads_mcp_connector_is_ads_mcp_enabled_false/
- `Meta MCP connection with Claude - need help` (reports fake/hallucinated data from Claude) — 2mo — https://www.reddit.com/r/FacebookAds/comments/1tuqo0u/meta_mcp_connection_with_claude_need_help_on_how/
- `Does Claude AI automation of the Meta Ad a good idea?` — 2mo — https://www.reddit.com/r/FacebookAds/comments/1t80a95/does_claude_ai_automation_of_the_meta_ad_a_good/
- `Meta released their Ads CLI this week and nobody is [talking about it]` — 3mo — https://www.reddit.com/r/FacebookAds/comments/1t1qlbr/meta_released_their_ads_cli_this_week_and_nobody/

Catalog / out-of-stock pain — 5 live threads:
- `How do you Avoid Running ads on sold-out products` — 9 comments, 9mo — https://www.reddit.com/r/FacebookAds/comments/1ohc17h/how_do_you_avoid_running_ads_on_soldout_products/ (r/PPC duplicate, 9 comments: https://www.reddit.com/r/PPC/comments/1ohcej5/how_do_you_avoid_running_ads_on_soldout_products/)
- `How is everyone handling ad spend on Out of Stock items?` — 6 comments, 8mo — https://www.reddit.com/r/FacebookAds/comments/1ozl1cg/how_is_everyone_handling_ad_spend_on_out_of_stock/
- `I need help with pausing campaigns when stock runs out.` — 4 comments, 8mo — https://www.reddit.com/r/FacebookAds/comments/1peltoi/i_need_help_with_pausing_campaigns_when_stock/
- `Meta Ads - Catalog Ads just EATS up the budget` — 10+ comments, 1yr — https://www.reddit.com/r/PPC/comments/1jjfwu3/meta_ads_catalog_ads_just_eats_up_the_budget/

### x.com

Not run this pass (optional, low-confidence per SKILL §1).

---

## 2. Dedupe pass (existing-first, mandatory)

- **(a) Existing pages** — target `content/blog/` (12 posts, via `gh api`) + GSC `--pages 40`. Live blog set: adcreative-ai-alternative, best-ad-testing-tools, best-bulk-ad-launch-tools, best-facebook-ads-automation-tools, best-mcp-servers-meta-google-ads, bulk-upload-creatives-meta-tiktok, facebook-ad-account-restricted-prevention, madgicx-review-alternative, meta-andromeda-update, meta-pixel-helper-explainer, what-are-static-ads, what-is-ad-fatigue. Note: `/blog/creative-testing-framework` ranks in GSC (1,048 imp) but is **not** in `content/blog/` — it ships outside this pipeline's blog track.
- **(b) `artifacts/topics/rejected.md`** — 9 killed slugs checked. None of the candidates below re-proposes one. Adjacent-but-distinct: `meta-automated-rules-playbook` (killed on reachability) overlaps the automation-rules cluster — candidate 3 is deliberately scoped to the catalog/inventory sub-pain, not the generic automated-rules head term.
- **(c) `artifacts/topics/legacy-backlog.md`** — candidate 3 is the reactivation of `catalog-ads-meta-tiktok-bulk-launch`, reframed exactly as that entry instructed ("head kw DR-locked; validate narrower kws"). Not duplicated elsewhere.
- **(d) Target `.seo/topics/`** — 4 existing batches (2026-07-14/24/25/27) read via `gh api`. Already-proposed slugs excluded from this run: creative-testing-small-budget, meta-ads-learning-phase-reset, advantage-plus-shopping-vs-manual-launch, tiktok-winner-scaling-automation, multi-account-meta-ads-agency-workflow, ad-testing-tools-meta-tiktok, meta-ads-library-guide, tiktok-creative-center-guide, meta-pixel-helper-explainer, meta-google-ads-mcp-exact-match-refresh, meta-ads-updates-2026-hub, meta-tiktok-ad-specs-2026.
- **Cannibalization** — checked via the query×page pull. The MCP cluster resolves cleanly to one page (`best-mcp-servers-meta-google-ads`); the automation-rules cluster splits across `/features/automation-rules` + `/use-cases/ad-campaign-automation-rules` (both JSX, outside this pipeline — already flagged in `rejected.md`, unchanged). No new blog-track cannibalization found.

---

## 3. Candidates

### meta-ads-mcp-pricing-comparison
Primary keyword: `pipeboard.co meta ads mcp pricing free plan` (vol 2,100/mo US, KD n/a — Ahrefs `keywords-explorer-matching-terms`, 2026-08-03) | Cluster: `google ads mcp` 800/KD12 · `meta ads mcp` 600 · `facebook ads mcp` 350/KD14 · `google ads mcp server` 250/KD19 · `meta ads mcp server` 100 · `meta ads mcp claude` 40/KD8 → **≈4,200/mo US** | GSC signal: exact primary query 61 imp / pos 11.5 / 90d; `pipeboard alternative` 18 imp / pos 8.2; `metamcp alternatives` 16 imp / pos 9.9; whole MCP cluster 974 imp across 142 queries, landing on `/blog/best-mcp-servers-meta-google-ads` (9,343 imp, 29 clicks, pos 10.7 — the site's best-converting asset)
Pain evidence: live SERP (SerpAPI, 2026-08-03) for the primary keyword is **entirely pricing/free-plan/comparison intent** — pipeboard.co owns 5 of 9 slots incl. `/pricing`, plus adspirer.com "Pipeboard vs Adspirer: Meta Ads MCP Compared (2026)", adkit.so "Pipeboard vs Meta Ads MCP: which one should you use?" ("Pipeboard wraps the same APIs for $29-199/mo"), flyweel.co "Top 5 MCPs for Google, Meta & TikTok Ads (2026)". AI Overview present. Reddit corroboration: 7 live threads above, incl. a 60+ comment launch thread. Reddit quotes NOT verified (gap #1).
Why us / product fit: **strongest fit in this run.** We already rank in this cluster, we are a listed entrant in our own post (`#4-scalemate-ai-chat-automation-os-layer-verified-meta-app`, 98 imp at pos 5.6), and `rules/seed-map.md` names the verified Meta app as the killer differentiator. BOFU comparison intent, media-buyer ICP.
Format hypothesis: comparison / pricing table — most likely **UPDATE-EXISTING** (expand `best-mcp-servers-meta-google-ads` with a per-tool pricing + free-plan-limits table) rather than a new page; `validate` should settle new-page-vs-update.
Preliminary score (quick pass, NOT the full `validate`): Demand 25 · Reachability ~20 (no DR-90 wall on the money query — competitors are pipeboard.co, adspirer, adkit, flyweel; the `meta ads mcp` head term does have facebook.com/developers.facebook.com DR100 at pos 1/3/5) · Business fit 24 · AEO 12 (pricing tables with verification dates are natively citable) · Existing-asset 9 → **≈90/100**
Source trail: Ahrefs `keywords-explorer-matching-terms` (`ads mcp`, us, 2026-08-03) · Ahrefs `keywords-explorer-overview` (2026-08-03) · GSC direct `--queries 1000 --days 90` + `--raw` query×page (2026-08-03) · SerpAPI `google` q=`pipeboard.co meta ads mcp pricing free plan` (2026-08-03) · SerpAPI `google_light` q=`meta ads mcp` (2026-08-03). Ahrefs `serp-overview` empty for both MCP terms — noted in gap #3.

### meta-mcp-ad-account-ban-risk
Primary keyword: no clean head term — long-tail/AEO play. Nearest measured: `meta ads mcp claude` 40/mo KD8, `facebook ads mcp` 350/mo KD14 (Ahrefs, 2026-08-03). Trends `meta ads mcp` rising: `claude meta mcp` Breakout, `meta ads claude` +90% | GSC signal: no direct-match query yet; adjacent `meta ads mcp official` 19 imp / pos 16.2, `meta ads mcp` 59 imp / pos 26.4
Pain evidence: `Claude Code got my Meta ads account permanently [banned]` — **90+ comments, 4 months old**, the largest engaged thread found this run (https://www.reddit.com/r/FacebookAds/comments/1sbsw6c/…); `Does Claude AI automation of the Meta Ad a good idea?` (Google snippet: "I think it's risky"); `Meta MCP connection with Claude` — user reports hallucinated/fake data from the model. Independent corroboration from the live SERP: the YouTube result at pos 7 for `meta ads mcp` is titled/snippeted "no more unofficial scripts, no more ad account bans". Reddit quotes NOT verified (gap #1) — this candidate leans hardest on them, so `validate` must confirm them first.
Why us / product fit: `rules/seed-map.md` — "Verified Meta app = killer differentiator (ban-risk angle no competitor has)". We also already own `/blog/facebook-ad-account-restricted-prevention`, so this is a natural internal-link pair. Honest limits: we can describe our own verified-app status and our own usage, but any ban-rate number would need first-party data we may not have (AEO-7 — escalate, don't invent).
Format hypothesis: blog how-to / risk explainer with a decision table (official Meta connector vs unofficial script vs verified partner app)
Preliminary score: Demand 10 (thin — trend + forum signal, little keyword volume yet) · Reachability ~20 · Business fit 24 · AEO 11 · Existing-asset 6 → **≈71/100**, but Demand is the fragile dimension — could fall below the GO bar in `validate`.
Source trail: Ahrefs `keywords-explorer-overview`/`matching-terms` (2026-08-03) · SerpAPI `google_trends` RELATED_QUERIES `meta ads mcp` (2026-08-03) · SerpAPI `site:reddit.com` discovery (2026-08-03) · SerpAPI `google_light` q=`meta ads mcp` (2026-08-03) · GSC direct (2026-08-03)

### catalog-ads-inventory-automation
*(legacy-backlog reactivation of `catalog-ads-meta-tiktok-bulk-launch`, reframed per its own note: "head kw DR-locked; validate narrower kws")*
Primary keyword: `meta catalog ads` (250/mo, KD 1 — Ahrefs `keywords-explorer-matching-terms`, 2026-08-03) | Cluster: `tiktok catalog ads` 150/KD3 · `meta advantage+ catalog ads` 150/KD1 · `advantage+ catalog ads` 80/KD0 · `catalog ads meta` 70/KD4 · `instagram catalog ads` 50 → **≈750/mo US at KD 0–4**
Pain evidence: 5 live Reddit threads on exactly this (sold-out products still spending, auto-pause on inventory 0, catalog ads eating the budget) — 9mo/8mo/8mo/1yr, 4–10+ comments each, URLs above. Google's snippets describe Zapier/Make workarounds and hourly stock-check scripts, i.e. no good native answer. GSC corroboration — LLM-style queries already reaching us at bad positions: `how do i automatically pause meta ads for out-of-stock products` (5 imp, pos 30.0), `how do i set a minimum roas floor in meta catalog campaigns` (8 imp, pos 68.6), `what is core-size automation for catalog ads` (5 imp, pos 27.8), `what creative automation tools integrate with shopify` (5 imp, pos 77.2) — all landing on `/blog/best-facebook-ads-automation-tools`, none well-served. Reddit quotes NOT verified (gap #1).
Why us / product fit: automation-rules is core product territory (launch/test/scale execution layer). **Honest fit caveat:** the legacy entry said "verify product support for catalog ad sets first" — this is still unverified and is a hard input request for `validate`. If we cannot drive catalog/inventory-conditional rules, the article must stay educational and the product tie-in drops to an internal link, which would cut Business fit sharply.
Format hypothesis: how-to / use-case ("stop paying for sold-out SKUs"), with a rules-vs-feed-rules-vs-script comparison table
Preliminary score: Demand 18 · Reachability ~14 (head `meta catalog ads` SERP is facebook.com DR100 at pos 1/2/5, but marpipe DR65 pos 6, confect.io DR51 pos 8 and two Reddit threads do rank — the narrow inventory angle is the reachable slice) · Business fit 18 *(conditional on the product check)* · AEO 9 · Existing-asset 5 → **≈64/100**
Source trail: Ahrefs `keywords-explorer-matching-terms` (`catalog ads`, us, 2026-08-03) · Ahrefs `serp-overview` `meta catalog ads` (us, 2026-08-03) · SerpAPI `site:reddit.com` discovery (2026-08-03) · GSC direct query×page 90d (2026-08-03) · `artifacts/topics/legacy-backlog.md`

### meta-ads-cli-guide
Primary keyword: none with measured volume yet — `meta ads cli` returns **Breakout** on Trends but Ahrefs has no US volume row for it (2026-08-03). Adjacent measured: `meta ads mcp` 600, `meta ads ai connectors` (Trends Breakout, no Ahrefs row) | GSC signal: none
Pain evidence: `Meta released their Ads CLI this week and nobody is [talking about it]` — 5 comments, 3mo (https://www.reddit.com/r/FacebookAds/comments/1t1qlbr/…), Google snippet: "built-in MCP server that you can plug directly into Claude". Thin — 1 thread, low engagement. Reddit quotes NOT verified (gap #1).
Why us / product fit: same category as our best-performing asset, same verified-app angle, and a first-mover slot on a term with no established SERP owner.
Format hypothesis: newsjack / how-to, or a section inside the MCP post rather than a standalone page
Preliminary score: Demand 6 · Reachability ~20 · Business fit 20 · AEO 8 · Existing-asset 6 → **≈60/100** — borderline, and Demand is a near-critical zero. **Low confidence: Trends-only signal, needs Ahrefs validation** (per `capabilities/trends.md`). Proposed as an early-mover bet, not an evidenced win.
Source trail: SerpAPI `google_trends` RELATED_QUERIES `meta ads mcp` (2026-08-03) · Ahrefs `keywords-explorer-matching-terms` `ads mcp` (2026-08-03, no `meta ads cli` row) · SerpAPI `site:reddit.com` discovery (2026-08-03)

### tiktok-pixel-helper-explainer
Primary keyword: `tiktok pixel helper` (400/mo US, KD 19, 3,300 global, TP 350 — Ahrefs `keywords-explorer-overview`, 2026-08-03) | GSC signal: none for TikTok; the Meta sibling `meta pixel helper` earns 21 imp / pos 12.4 / 90d on `/blog/meta-pixel-helper-explainer`
Pain evidence: competitor gap, not forum pain — admanage.ai (DR 45) ranks **pos 8** with `/blog/tiktok-pixel-helper` ("Setup, Debug & Fix Common Issues"); `community.shopify.com` "Tik tok pixel helper not working" ranks pos 6, evidencing a real debugging pain. No Reddit sweep run for this one.
Why us / product fit: we already own the Meta equivalent, so this is a proven-format sibling with ready internal links. Weak-to-moderate fit otherwise — it is a tracking/debugging explainer, adjacent to rather than inside the launch/test/scale execution layer.
Format hypothesis: explainer / troubleshooting guide mirroring `meta-pixel-helper-explainer`
Preliminary score: Demand 20 · **Reachability ~6** · Business fit 12 · AEO 8 · Existing-asset 7 → **≈53/100**
⚠️ **Proposed with an explicit reachability warning.** The top-10 is a DR wall: chromewebstore.google.com DR99 (pos 1), ads.tiktok.com DR97 (pos 2/3/5), community.shopify.com DR96 (pos 6), youtube DR99 (pos 10), linklyhq DR80 (pos 9), hightouch DR77 (pos 7) — admanage.ai DR45 at pos 8 is the **only** sub-DR-70 entrant, against our DR 2.7. This is the same wall shape that killed `tiktok-creative-center-guide` (Reachability 0/25, `artifacts/topics/rejected.md`). Included because the competitor-gap + existing-sibling evidence is genuinely new, but `validate` will most likely return NO-GO on reachability. Ranked last deliberately.
Source trail: Ahrefs `keywords-explorer-overview` (2026-08-03) · Ahrefs `serp-overview` `tiktok pixel helper` (us, 2026-08-03) · Ahrefs `site-explorer-organic-keywords` admanage.ai (us, 2026-08-01, subdomains) · GSC direct (2026-08-03)

---

## 4. Non-candidate findings (existing-first — not new articles)

1. **`best-ad-testing-tools` is the biggest single opportunity on the site and it is an enrichment job, not a new topic.** 7,095 impressions / 90d at pos 19.8 → **1 click**. The cluster behind it: `ad testing tools` 820 imp, `ad testing software` 803, `ad testing tool` 701, `ad performance testing tool` 552, `ad creative testing platforms` 389, `creative testing tools` 337, `ad testing platforms` 255 — 4,888 impressions across 80 queries, essentially zero clicks, all sitting at positions 14–35. Ahrefs volumes are modest (`ad testing tools` 250/KD1, `ad testing software` 200/KD1), which means **GSC is finding demand Ahrefs does not** — exactly the `rules/scorecard.md` note that GSC evidence counts at low Ahrefs volume. Already proposed as `ad-testing-tools-meta-tiktok` in `.seo/topics/2026-07-25-candidates.md`; **not re-proposed here**, but it should outrank everything in this batch for human attention.
2. **`/blog/meta-pixel-helper-explainer` is underperforming its keyword.** `meta pixel helper` is 1,900/mo KD1 and admanage.ai ranks #3 on it; our post draws 21 imp/90d at pos 12.4. Title/meta/content enrichment candidate for the `analysis` unit, not a new post.
3. **`adcreative.ai alternative` queries are not attributed to our page.** `adcreative.ai alternative` 29 imp / pos 11.9, `adcreative.ai alternatives 2026` 22 / pos 9.2, `adcreative.ai vs alternatives 2026` 13 / pos 8.4 show no page attribution in the query×page pull, while `/blog/adcreative-ai-alternative` separately earns 769 imp at pos 10.4. Worth a look in `analysis` — possible attribution artefact rather than a real gap.
4. **Deliberately not proposed — product-fit fail.** admanage.ai's largest KD-0 wins (`meta app manager` 900/mo, `what is meta app manager` 700, `what is meta app installer` 350, `meta services app` 300, plus a ~2,700/mo TikTok-views cluster) are consumer/Android-support intent, outside the media-buyer ICP and the `rules/seed-map.md` product-fit boundary. Easy traffic, wrong audience.
5. **Motion-vs-static ad testing** (`tools for testing motion ads vs static ads` 17 imp / pos 8.2, `tools for testing motion ads against static versions` 18 / pos 7.3, `top video ad testing platforms 2025 comparison` 8 / pos 5.8 — all already at striking distance) has real GSC signal but Ahrefs returns **0 volume** for `static vs video ads` / `motion ads vs static ads`, and `video ad testing` is only 70/KD0. Best served as a **section inside the `best-ad-testing-tools` refresh** (finding 1), not a standalone topic.
6. **Mobile/game UA creative testing** — `unity ads creative testing capabilities for ua managers` 42 imp / pos 9.2, `automated ua creatives` 30 / pos 18.5, `creative testing framework mobile app ua new ad platform` 12 / pos 2.9, `game ad creative testing and scaling` 11 / pos 13.6. Real and newly visible in GSC, but `rules/target-profile.md`-track blockers apply: `legacy-backlog.md` has the mobile-UA pillar blocked on a BOFU use-case page shipping first. Surfaced for the human, not proposed as a blog topic this run.

---

## Gate contract

None of these is runnable by the `production` workflow until a human merges it (or an edited version) into `.seo/topics/` in scalemate-dev/scalemate-landing. `validate` may still kill any of them — candidates 4 and 5 are expected to be contested, and candidate 3's Business fit is conditional on an unanswered product-capability question.
