# Topic research run — 2026-07-24

Sanity check (rules/aeo-rules.md Part A): Ahrefs OK (Lite plan, 79057/100000 units remaining) · SerpAPI OK · GSC OK (direct, 3 pages sample) — all green, proceeded.

## Signals collected

**GSC** (`scripts/gsc.sh`, 90d window, direct API, 2026-07-24):
- Top pages: homepage, `/ad-creative-uploader`, `/blog/best-mcp-servers-meta-google-ads` (9,515 imp, 33 clicks), `/blog/best-ad-testing-tools` (**7,521 imp, 1 click, pos 20** — CTR 0.01%, glaring outlier).
- Striking distance (pos 4–20, 90d): `ad testing software` (838 imp, pos 17.3, 0 clicks), `ad creative testing platforms` (354 imp, pos 19.2, 0 clicks), plus a cluster of AI-assistant-style long-tail questions ("what is the fastest way to launch multiple meta ad creatives in bulk?", "which platforms automate bulk ad creation for meta?", "what is the difference between bulk ad uploading and bulk ad launching for meta campaigns?") sitting at pos 5–10 — these read as AI Overview / assistant-relay queries.
- Cannibalization check (`--raw {dimensions:[query,page]}`, 90d): 39 queries served by 2+ of our own pages, all inside the existing bulk-launch / automation-rules cluster (feature vs use-case pages) — **no blog-vs-blog cannibalization found**, but confirms new content should not re-target "bulk ad creation tool" / "automated ad launch tool" head terms (already fought over internally).
- Target repo content/blog listing (`gh api`, live, 2026-07-24): 10 posts. Notably `creative-testing-framework.md` (still appears in the 90d GSC page list) **no longer exists as a blog post** — `git log` on the target shows it was replaced by an interactive page at `/creative-testing-library` (13 methods, filterable, ship commit found via `gh api .../commits`). `.seo/topics/` doesn't exist yet in the target (404) — nothing merged there yet.

**Ahrefs competitor gap** (`site-explorer-organic-keywords`, non-branded, US, 2026-07-23): Madgicx's non-branded traffic is mostly generic Instagram-sizing content (off our product fit — skip). admanage.ai is thin (ad-management-platform cluster, TikTok-views trivia). **bir.ch (Birch)** is the useful one: ranks for a Meta-education glossary cluster we don't touch — `learning phase` (pos 1), `asc campaigns` (pos 1), `facebook account restricted` (already killed, rejected.md), CPC/CPM explainer terms. Cross-checked against scalemate.co's own organic keywords: we rank **only** for `ad testing tool` (2,200/mo, KD 2, pos 26) and `ad creative testing platforms` (900/mo, KD 3, pos 27) — near-zero difficulty, real volume, terrible position. This is an **update-existing** signal (`/blog/best-ad-testing-tools`), not a new-content gap — matches the GSC outlier above.

**Ahrefs keyword validation** (`keywords-explorer-overview`, US): `meta ads learning phase` 100/mo KD4 · `advantage+ shopping campaigns` 100/mo KD2, CPC $12 · `asc campaigns meta` 10/mo. TikTok-scaling and multi-account-agency phrasings return 0 exact-match volume — expected, matches legacy-backlog's own framing ("Reddit-proven tail", not head-keyword demand).

**Reddit pain evidence** (SerpAPI site:reddit.com, 2026-07-24):
- `r/FacebookAds` "learning phase" reset: **10 threads, Apr 2026 → Jun 2026**, all live, all describing the same pain (automation/edits/creative swaps resetting learning phase and tanking performance).
- `r/FacebookAds` "advantage+ shopping" frustration: threads from 2023 through Mar 2026, sustained multi-year confusion ("should I switch", "extreme volatility after ASC rollout", "learning phase bohot frustrating hai").
- `r/TikTokAds` + `r/PPC` scaling: fresh threads through May 2026 ("how are you currently scaling winning Meta products onto TikTok"), confirms legacy-backlog's `tiktok-winner-scaling-automation` candidate is still live.
- `r/PPC` multi-account agency workflow: fresh threads through Jun 2026 ("how do you manage multiple high-spend ad accounts", "which agency software... Optmyzr, TrueClicks, Adalysis, Opteo") — confirms legacy-backlog's `multi-account-meta-ads-agency-workflow` candidate is still live. Note: Optmyzr/TrueClicks/Adalysis/Opteo are Google-Ads-centric competitors, not in our current competitor set — informational only, not added (competitor set is human-owned per seed-map.md).

## Dedupe pass

- Against `content/blog/` (live, 10 posts) + `.seo/topics/` (empty) — no direct duplicates.
- Against `artifacts/topics/rejected.md` — none of the below re-propose a killed slug. One rejected verdict is now **stale**: `creative-testing-pillar` (2026-05-05) was killed as "duplicate of /blog/creative-testing-framework" — that page no longer exists as a blog post (see GSC/target-repo finding above). Flagging for `validate` to re-open, not silently overturning it here.
- Against `artifacts/topics/legacy-backlog.md` — `creative-testing-small-budget`, `tiktok-winner-scaling-automation`, `multi-account-meta-ads-agency-workflow` all reused below (refreshed evidence, not re-researched from scratch); other legacy-backlog scored candidates (meta-tiktok-automated-ads-sunset-2026, meta-ads-updates-2026-hub, find-competitor-landing-pages-meta-tiktok, audience-overlap-meta-fix, meta-tiktok-ad-specs-2026, catalog-ads-meta-tiktok-bulk-launch) are left in the backlog, untouched — still surfaced there for a future run, not re-verified today (kept run to 5 quality candidates per the unit's aim).

---

## Candidates

## creative-testing-small-budget
Primary keyword: creative testing framework (reframed) — legacy vol 80/KD2 (Ahrefs, 2026-06-03, needs refresh) | GSC signal: none dedicated (old `/blog/creative-testing-framework` URL still shows residual 90d clicks/impressions from before it was replaced)
Pain evidence: 14 Reddit threads mined in the legacy brief (`reference/legacy-seo-system/topics/creative-testing-small-budget/brief.md`) — reuse, don't re-mine
Why us / product fit: TOFU narrative companion to the new `/creative-testing-library` interactive reference (13 methods) — budget-constrained framing + Reddit pain-first intro, internal-links into the library and into `/features/automation-rules` ("automate this flow in Scalemate" sections already exist per-method)
Format hypothesis: blog (narrative, pain-first) — distinct intent from the interactive library (reference tool), so likely NOT cannibalization, but flag for `validate` to confirm via SERP/intent check
Preliminary score (scorecard.md, quick pass): Demand 15 (legacy 80/mo, needs refresh) / Reachability unscored (needs SERP pull) / Business fit 20 (direct product tie-in via automate-this-flow sections) / AEO 8 (can cite our own library's 13-method taxonomy) / Existing-asset bonus 8 (library page ready to link) → indicative ~51+, needs Reachability to complete
Source trail: brief already written 2026-06-03 (legacy); rejected.md stale-duplicate reason invalidated by `gh api repos/scalemate-dev/scalemate-landing/commits?path=content/blog/creative-testing-framework.md` (2026-07-24) showing the ship commit that replaced the blog post with `/creative-testing-library`
**Action: this is the cheapest candidate to move — brief exists, only needs a freshness refresh + re-score, not full validate-from-scratch.**

## meta-ads-learning-phase-reset
Primary keyword: meta ads learning phase (100/mo, KD 4, Ahrefs, 2026-07-24); parent topic "facebook learning phase"
Pain evidence: r/FacebookAds, 10 threads Apr–Jun 2026, e.g. "constant edits can reset learning and make results even more unstable... that kind of automation can push acquisition costs [up]" (r/FacebookAds/1t4quvo, May 2026); "duplicating the campaign works because it forces a new learning phase" (r/FacebookAds/1o63gxs, Oct 2025)
Why us / product fit: direct tie-in to `/features/automation-rules` — our rules engine is exactly the thing that can (a) cause the reset if misconfigured or (b) be designed to avoid it (pause/edit cadence, budget-change thresholds). Pure gap: we have zero content on learning-phase mechanics despite owning the feature that interacts with it daily.
Format hypothesis: educational explainer (AEO-shaped: "what resets the Meta learning phase" is a citable, factual Q&A) with a product section on rule design that avoids unnecessary resets
Preliminary score: Demand 10 (100/mo is thin, but GSC-adjacent — no direct impressions yet since we don't rank at all) / Reachability likely high (KD 4, glossary-style SERP, no DR wall expected — needs `validate` SERP pull to confirm) / Business fit 20 (MOFU educational, feeds automation-rules feature) / AEO 13 (factual, citable mechanics — strong AI Overview candidate) / Existing bonus 5 (links to/from automation-rules) → indicative ~55-60+ pending reachability
Source trail: Ahrefs `keywords-explorer-overview`, US, 2026-07-24; Reddit via SerpAPI `site:reddit.com/r/FacebookAds`, 2026-07-24

## advantage-plus-shopping-vs-manual-launch
Primary keyword: advantage+ shopping campaigns (100/mo, KD 2, CPC $12, Ahrefs 2026-07-24); secondary: asc campaigns (10-150/mo depending on variant)
Pain evidence: r/FacebookAds, sustained Oct 2023 → Mar 2026 thread history, e.g. "Advantage+ shopping is horrible" (1179xtqe); "Ever since the new Advantage+ Sales Campaign (ASC) update rolled out... extreme volatility" (1kf6a67, May 2025); "one workaround is switching to a manual sales campaign instead of the Advantage+ shopping campaign" (1s6hcui, Mar 2026)
Why us / product fit: direct positioning opportunity — honest "when full automation (ASC) is enough vs when you need manual multi-account bulk launch + rules" angle; ties to `/features/bulk-launch` and `/features/automation-rules` without overclaiming (we don't build/replace ASC, we complement the manual side)
Format hypothesis: comparison/explainer, high commercial intent (CPC $12 signals real advertiser money behind the confusion)
Preliminary score: Demand 12 (100-150/mo combined, thin but high-CPC commercial) / Reachability unscored (needs SERP pull — likely competing vs Meta's own help docs + agency blogs, moderate DR) / Business fit 18 (positioning/comparison, not pure feature page) / AEO 10 (can cite Meta's own documented ASC behavior + our positioning) / Existing bonus 5 → indicative ~45-50, needs SERP + reachability before GO
Source trail: Ahrefs `keywords-explorer-overview` US 2026-07-24; Reddit via SerpAPI 2026-07-24

## tiktok-winner-scaling-automation (legacy-backlog reactivation)
Primary keyword: no head-kw volume (0 exact-match, Ahrefs 2026-07-24, confirms legacy framing) | Reddit-proven tail
Pain evidence (refreshed): r/TikTokAds "How are you currently scaling winning Meta products onto TikTok" (May 2026, live); r/TikTokAds "Entering Scaling Phase in 2 Weeks" (Aug 2025); r/TikTokAds wiki itself flags "how to scale winning campaigns without crashing" as a core unanswered question
Why us / product fit: zero TikTok-specific scaling content on site; native TikTok+Meta multi-platform is our differentiator (per seed-map.md product-fit boundary)
Format hypothesis: use-case/how-to blog, JTBD native-scaling group
Preliminary score: unchanged from legacy — re-score fully in `validate`, not re-derived here
Source trail: legacy signal in `artifacts/topics/legacy-backlog.md`; freshness re-confirmed via Reddit 2026-07-24 (new threads found, not just the original 2026-05-25 mining)

## multi-account-meta-ads-agency-workflow (legacy-backlog reactivation)
Primary keyword: no head-kw volume | Reddit-proven tail
Pain evidence (refreshed): r/PPC "How do you manage multiple high-spend ad accounts" (Apr 2025, live, engaged); r/PPC "Which agency software for Ads management should I get?" naming Optmyzr/TrueClicks/Adalysis/Opteo (Sep 2024) — confirms buyers actively shopping for exactly this workflow tooling
Why us / product fit: agency ICP, high LTV; legacy note "verify product depth before claiming" still applies — confirm multi-account Meta+TikTok feature depth in `brief` before overclaiming
Format hypothesis: use-case/workflow blog
Preliminary score: unchanged from legacy — re-score fully in `validate`
Source trail: legacy signal in `artifacts/topics/legacy-backlog.md`; freshness re-confirmed via Reddit 2026-07-24

---

## Non-candidate findings (existing-first, not new articles)

1. **`/blog/best-ad-testing-tools` is under-optimized, not under-covered.** 7,521 GSC impressions/90d at position ~20, and independently confirms via Ahrefs (`ad testing tool` 2,200/mo KD2 at pos 26, `ad creative testing platforms` 900/mo KD3 at pos 27) — near-zero keyword difficulty, real volume, page just isn't winning. Recommend `analysis` unit prioritize a title/meta/content refresh pass over any new "ad testing" content.
2. **Automation-rules cluster cannibalization** — `/features/automation-rules` and `/use-cases/ad-campaign-automation-rules` (and `/use-cases/scale-ad-campaigns-faster`) already compete for ~10 shared queries per the GSC cannibalization pull. Resolve this before adding more content that targets "automated rules" head terms.
3. **Stale rejected-topic flag** — `creative-testing-pillar` (rejected.md, 2026-05-05) was killed on a duplicate-page reason that's no longer true (see dedupe pass above). Not un-rejecting it here (that's a human/validate call), just flagging it.
