# Validation scorecard — tiktok-creative-center-guide

Source topic: `artifacts/topics/2026-07-25/candidates.md` candidate #3. Not present in `artifacts/topics/rejected.md` (file does not exist yet — nothing rejected to date) and not in `artifacts/topics/legacy-backlog.md` under this slug (adjacent legacy candidate `tiktok-winner-scaling-automation` is a different topic — native TikTok scaling automation, not a Creative Center explainer — cross-referenced, not reused).

## Sanity check (rules/aeo-rules.md Part A)

- Ahrefs: OK — `subscription-info-limits-and-usage`, Lite plan, 36,460/100,000 workspace units used (2026-07-25).
- GSC (direct): OK — `bash scripts/gsc.sh --pages 1 --days 7` returned real data (2026-07-25).
- SerpAPI: OK — `google_light` test query returned results (2026-07-25).

All green, proceeded.

## Rubric

| Dimension | Score /Max | Evidence |
|---|---|---|
| **Demand** | 15 / 25 | Primary keyword `tiktok creative center` — 10,000/mo, KD 13, CPC $10 (Ahrefs `keywords-explorer-overview`, US, 2026-07-25). Secondary cluster: `tiktok creative center login` 80/mo KD36, `tiktok creative center free` 150/mo, `tiktok creative center top ads` 150/mo KD48, `tiktok keyword insights` 150/mo KD31, `tiktok trend discovery` 200/mo KD45 (Ahrefs, same call). **Discount factors:** (1) volume history (`keywords-explorer-volume-history`, US, 2024-07 → 2026-07) shows a sustained 2-year decline — 19,796/mo (Jul 2024) → 9,204/mo (Jul 2026), −53%, with no recovery trend (ahrefs-kw.md: "2+ years of decline = flag"). (2) Primary keyword intent is majority navigational/branded — SERP is dominated by TikTok's own product (see Reachability) — real informational-guide-capturable demand is closer to the secondary cluster (~700/mo combined), not the 10k headline figure. (3) GSC (direct, `--queries 300 --days 90 --json`, 2026-07-25): **zero impressions** for any "tiktok creative center" variant — confirms no organic footprint today, matches candidates.md's "zero on-site coverage" note. |
| **Reachability** | 0 / 25 | Ahrefs `serp-overview` (US, 2026-07-25) for `tiktok creative center`: positions 1, 3, 4, 6, 7 of top-10 are **all `ads.tiktok.com`** (DR 97) — TikTok's own official Creative Center hub occupies over half the page via sitelinks. Remaining non-brand entrants: Forbes DR 94 (pos 8), **bir.ch DR 72 (pos 9 — our tracked competitor already ranks here)**, pipiads.com DR 63 (pos 10). Our own domain rating: **DR 2.1** (Ahrefs `public-domain-rating-free`, scalemate.co, 2026-07-25 — live figure, notably lower than the ~30 assumed in capabilities/ahrefs-kw.md's reachability heuristic). Gap from our DR to the *weakest* non-brand competitor in the top 10 (DR 63) is enormous, and the majority of the page is a property we can never outrank (TikTok's own domain). SerpAPI `search` (engine google, US, 2026-07-25) additionally shows an **AI Overview** answering the query directly at the top of the page (citing ads.tiktok.com, magicbrief.com, bir.ch, stackmatix.com), further compressing organic opportunity below it. This is the scorecard's literal "wall of DR 70+ entrants" case. |
| **Business fit** | 8 / 25 | ICP: media buyer researching competitor ads, TOFU. Format hypothesis in candidates.md is an explainer/how-to bridging into TikTok scaling — but the bridge is thin: TikTok Creative Center is a *creative discovery/production* tool (per live AI Overview: "AI video generation tools... Symphony Creative Studio to help produce and automate video ad content"), adjacent to the category `rules/seed-map.md` explicitly excludes ("NOT: creative production/generation"). Reddit evidence (below) confirms usage is centered on competitive/product research, not launch/scale — the workflow this guide would teach doesn't naturally continue into Scalemate's bulk-launch/automation-rules product the way e.g. an Ads Library guide would. Existing `bulk-upload-creatives-meta-tiktok.md` post covers TikTok but never mentions Creative Center — confirms no natural internal-link bridge exists today. Scored as TOFU-generic per scorecard.md band (5–10), not the wrong-product-fit floor (0–4), since it stops short of literal creative production — but it is a caution flag, not a clean fit. |
| **AEO/data potential** | 6 / 25→15 max, scored 6 / 15 | No first-party data available (we don't use/track TikTok Creative Center internally). Public-sourceable facts exist (TikTok's own docs, feature list) but the "how to use TikTok Creative Center" explainer format is already a saturated commodity — magicbrief.com, bir.ch, socialchamp.com, stackmatix.com, pipiads.com all rank with near-identical explainer content, and stackmatix.com is already cited directly in Google's AI Overview for this exact query. No unique data angle or information-gain opportunity identified. |
| **Existing-asset bonus** | 2 / 10 | No existing page targets this cluster (confirmed via GSC zero-impressions check + `gh api` blog listing). `bulk-upload-creatives-meta-tiktok.md` is topically adjacent (Meta+TikTok) but does not mention Creative Center — no ready internal link exists. Effectively greenfield. |
| **Total** | **31 / 100** | |

## Kill-gate checklist

- **SERP intent mismatch** — partial: blog/guide format does appear in the SERP (bir.ch, magicbrief, socialchamp), so not a pure format mismatch, but the *dominant* SERP composition is TikTok's own navigational property + an AI Overview that already answers the query — not a gap a new article displaces. Contributing to, not separately triggering, the Reachability zero above.
- **Cannibalization** — none found. No existing scalemate.co page or GSC footprint targets this cluster. Not an UPDATE-EXISTING case.
- **Zero pain evidence** — **not triggered**, but weak: SerpAPI `site:reddit.com "tiktok creative center"` (2026-07-25) surfaced live threads including one from 2 months ago (r/TikTokAds, hashtag section outage) and several from the past 1–3 years confirming the tool is actively used for competitor/product research (e.g. r/TikTokAds "Head over to the TikTok creative center click on 'inspiration' and select 'Top Ads dashboard'..."). Real usage confirmed, but the pain is centered on *using TikTok's own tool* (including it being broken), not a gap our product fills.
- **Product-fit fail** — soft trigger: topic sits adjacent to the explicitly excluded "creative production/generation" category (rules/seed-map.md). Reflected in the Business fit score (8/25) rather than an automatic 0–4, since it's a discovery/research tool rather than a generation tool proper — but it's the reason Business fit didn't score higher despite decent TOFU relevance.

## Verdict

**Critical zero:** Reachability scored 0 (< 8 minimum) → automatic NO-GO regardless of total.
**Total:** 31/100 (< 60 threshold) → also fails on total alone.

Killing dimension: **Reachability** — top-10 SERP for the primary keyword is majority-owned by `ads.tiktok.com` (DR 97) via sitelinks, the remaining non-brand slots start at DR 63, and our live domain rating is DR 2.1 (Ahrefs `public-domain-rating-free`, 2026-07-25). This is not a reachable SERP at any realistic horizon. Secondary factor: Demand quality — the 10,000/mo headline figure is mostly navigational/branded traffic chasing TikTok's own site, real volume has declined 53% over the trailing 2 years, and GSC shows zero existing footprint. Business fit is also weak (8/25) — the topic sits closer to the "creative production/discovery" category the product-fit boundary excludes than to Scalemate's launch/test/scale execution layer.

Revisit-trigger: if scalemate.co's domain rating grows substantially (DR 20+) AND a sharper, more product-adjacent angle is found (e.g. "TikTok Creative Center → bulk-launch the winners" as a use-case-driven piece rather than a general explainer, competing on the secondary cluster only, not the DR-walled head term).

VERDICT: NO-GO
