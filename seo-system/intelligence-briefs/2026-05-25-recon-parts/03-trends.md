# Part 3 — Google Trends + Live SERP PAA Recon

> Date: 2026-05-25 · Source: SerpAPI google_trends + google · Scope: scalemate.co (Meta + TikTok)

---

## Rising / Breakout queries

| Seed | Rising query | Geo | ICP-relevant? | Why now |
|---|---|---|---|---|
| facebook ads automation | walmart near me | US | ❌ No | SERP noise (geo-bleed), ignore |
| tiktok ads scaling | **facebook ads scaling strategy** | US | ✅ HIGH | Breakout value 94,200 — UA managers searching for scaling playbooks; aligns with Scalemate Rules + Bulk Launch |
| tiktok ads scaling | **how to test creatives fast** | US | ✅ HIGH | Breakout 53,000 — direct ICP pain (creative velocity); ties to `/blog/creative-testing-framework` and Bulk Launch |
| tiktok ads scaling | **tiktok ads strategy 2026** | US | ✅ MEDIUM | Top query 100 — strategy intent for TikTok specifically; Scalemate covers TikTok |
| tiktok ads scaling | best ecommerce headlines / aida ecommerce examples | US | ⚠️ Tangential | Breakout 30-60K but creative-production tilt, not Scalemate execution layer |
| marketing automation | **b2b marketing automation** (+40%) | US | ⚠️ Low | Trending but B2B not core ICP (ScaleMate = performance/DTC); skip |
| marketing automation | lidl near me / frontend frameworks / python web framework | US | ❌ No | SERP noise, ignore |
| ai for advertising | **ai humanizer** | US | ⚠️ Tangential | Breakout — content/creative side, not media buying execution; tracking only |
| creative testing ads | — | US | — | No data returned from Google Trends |

**Top breakout signal:** `facebook ads scaling strategy` + `how to test creatives fast` both surfaced from the `tiktok ads scaling` seed — direct Scalemate JTBD overlap (JTBD 3 + JTBD 6).

---

## PAA questions worth answering

| Parent query | PAA question | Our existing page? | Suggested action |
|---|---|---|---|
| how to automate facebook ads | **What is the 3-2-2 method in Facebook ads?** | ❌ No (close to creative-testing-framework but not framed as 3-2-2) | New FAQ section inside `/blog/creative-testing-framework` or `/blog/best-facebook-ads-automation-tools` — name-recognition cluster |
| how to automate facebook ads | Is $10 a day enough for Facebook ads? | ❌ No | TOFU FAQ play — moderate ICP fit (small-budget testers, not core UA manager) |
| how to automate facebook ads | Is $5 a day good for Facebook ads? | ❌ No | Same as above — bundle into "Facebook ads budget FAQ" if at all |
| how to scale ad campaigns | **How to scale successful ad campaigns?** (featured snippet — vertical vs horizontal) | ❌ No dedicated page | New blog `scale-ad-campaigns-meta-tiktok` OR enrich existing automation listicle with H2 "How to scale" |
| how to scale ad campaigns | **How to do ad scaling?** (vertical vs horizontal definition) | ❌ No | Same as above — high-value FAQ for `/blog/best-facebook-ads-automation-tools` or new explainer |
| best tiktok ad automation tools | **What are the best tools for TikTok ads?** | ⚠️ Partial — `/blog/best-facebook-ads-automation-tools` is Meta+TikTok but TikTok-led listicle missing | New listicle `best-tiktok-ad-automation-tools` (Meta+TikTok angle, Scalemate naturally fits) |
| mobile user acquisition strategy | (no PAA returned — AI Overview dominates) | M1 cornerstone in §3 Pending review | Confirms M1 priority; SERP top-10 = Singular/AppsFlyer/Aarki/AdJoe/Appodeal/Branch — execution-layer gap |
| creative testing for mobile games | **Can you get paid to test mobile games?** / **Is it possible to earn $100/day from ads in mobile games?** | ❌ No (wrong intent — playtester not creative-tester) | Skip — SERP intent mismatch with our angle |

**Key PAA insight:** `What is the 3-2-2 method` and `vertical vs horizontal scaling` are repeatable, definable, structured-snippet opportunities. Both lack a Scalemate page. Both are FAQ-injection candidates inside existing high-CTR pages.

---

## SERP competitive landscape changes

| Query | Top 5 organic | New entrants vs known competitors |
|---|---|---|
| how to automate facebook ads | Reddit r/PPC → Meta Help (Automated Ads being phased out 2026 ⚠️) → Make.com → Kitchn.io → YouTube | **Meta Help page warning: "Automated Ads going away in 2026"** = newsjack opportunity. AdAmigo.ai (#8) — new aggregator competitor. Kitchn.io ranking on multiple cluster terms. |
| how to scale ad campaigns | Reddit r/FacebookAds → Metadata.io → Farsiight → Rohring Results → Admetrics | Admetrics.io climbing (also #5 + featured snippet); new mid-DR competitors (Farsiight, Rohring) — not previously tracked |
| best tiktok ad automation tools | TikTok Ads (official) → **Toffu.ai** → Improvado → TheOptimizer → Kitchn.io → Cruva → Adsmurai → bir.ch | **Toffu.ai** = new AI-automation entrant at #2 (not in our tracker). Improvado lists Madgicx as "Meta+TikTok AI automation" #1 in their listicle. bir.ch dropped to #8 on TikTok query. |
| mobile user acquisition strategy | Singular → BusinessOfApps → Reddit → Aarki → AppsFlyer → AdJoe → Appodeal → Branch | DR 79-95 lock confirmed (validates M1 BOFU vs M4a TOFU split). **AdJoe** rising — new mid-tier player. |
| creative testing for mobile games | Tenjin → Segwise.ai → Singular → AppAgent → Superscale → AdSpawn → LinkedIn → ASO World | **Segwise.ai** + **AdSpawn** = new entrants targeting mobile-game creative testing (DR-reachable competitors). Confirms gaming-creative-testing as crowded but DR-reachable mid-tier. |

**New competitors to add to tracker:** Toffu.ai, AdAmigo.ai, AdSpawn, Segwise.ai, AdJoe, Adwisely, Improvado.

**Newsjack flag:** Meta is phasing out "Automated Ads" in 2026 (per their help page). Big migration angle for `/blog/facebook-ads-automation` rework or new "Meta Automated Ads sunset — what to use instead" article.

---

## trend_scout.py findings

Script ran successfully. Output: `~/.claude/skills/seo-ops/output/flash-trends-2026-05-25.md`

- Google Trends: 10 trends pulled
- Hacker News: 7 relevant stories
- Reddit: 4 hot posts
- X/Twitter: 0 (no BRAVE_API_KEY)
- Content angles: only **1** scored opportunity (20/100 — Reddit r/artificial: "AI-generated but visually realistic content will become the norm")

**Verdict:** trend_scout angles this week are weak (single low-score AI-generation angle, off-product-fit per `feedback_product_scope.md` — Scalemate ≠ creative production). Not actionable for this cycle.

---

## Synthesis — top signals for orchestrator

1. **Breakout: `how to test creatives fast`** (53K rising) + `facebook ads scaling strategy` (94K rising) = both direct Scalemate JTBD (3 + 6). Existing `/blog/creative-testing-framework` partially covers first; second is genuine gap.
2. **PAA gap: `3-2-2 method` + `vertical vs horizontal scaling`** = two structured-snippet FAQ injections with zero ScaleMate footprint. Cheap wins via FAQ enrichment.
3. **Newsjack opportunity:** Meta is **sunsetting "Automated Ads" in 2026** (visible in SERP). Hook for `/blog/facebook-ads-automation` rework or fresh "what replaces Meta Automated Ads" article.
4. **New competitors surfaced:** Toffu.ai (#2 for `best tiktok ad automation tools`), AdAmigo.ai, AdSpawn, Segwise.ai, AdJoe, Adwisely, Improvado — none in existing competitor tracker.
5. **TikTok listicle gap:** `best tiktok ad automation tools` SERP has no dominant DR 80+ player (Toffu, Kitchn, TheOptimizer, Cruva = all mid-DR). Scalemate listicle is winnable — but pipeline already covers Meta+TikTok combined; consider TikTok-led variant.

**Skipped per pipeline.md:** mobile-user-acquisition (M1 in §3), creative-testing (already deployed), automation-rules (deployed), facebook-ads-automation listicle (already deployed).
