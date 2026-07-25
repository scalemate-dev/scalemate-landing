# Topic candidates — 2026-07-25

Run type: landing-page gap analysis (ad-hoc, requested directly — same procedure as scheduled `topic-research`). Sanity-checked GSC (direct), Ahrefs (Lite plan, 31555/100000 workspace units used), SerpAPI, Google Trends before research — all OK.

Existing site content checked against (10 posts, via `gh api repos/scalemate-dev/scalemate-landing/contents/content/blog`): adcreative-ai-alternative, best-ad-testing-tools, best-bulk-ad-launch-tools, best-facebook-ads-automation-tools, best-mcp-servers-meta-google-ads, bulk-upload-creatives-meta-tiktok, madgicx-review-alternative, meta-andromeda-update, what-are-static-ads, what-is-ad-fatigue. Cross-checked against `artifacts/topics/rejected.md` (empty — nothing to exclude) and `artifacts/topics/legacy-backlog.md` (13 scored + 4 briefed candidates — reused/linked below, not re-researched from scratch).

---

## 1. ad-testing-tools-meta-tiktok (update/expand `best-ad-testing-tools`, or split into a sharper comparison)

Primary keyword: `ad testing tool` (vol 1,000, KD 2 — Ahrefs, 2026-07-24) | cluster: `ad testing tools` (250/KD1), `ad testing software` (200/KD1), `ad testing platform` (150/KD1, CPC $8), `ad testing platforms` (100/KD1), `ad performance testing tool` (150), `creative testing platform` (250, CPC $50) — combined ~2,100 vol, virtually zero difficulty.

GSC signal (90d, direct, 2026-07-25): we already publish `/blog/best-ad-testing-tools` but it's badly underperforming its own cluster — `ad testing tool` gets 682 impr at position 25.1, `ad testing software` 833 impr at pos 17.3, `ad testing tools` 787 impr at pos 20.1, `ad testing platform` 202 impr at pos 40.1, `creative testing platform` 133 impr at pos 23.0. Near-zero clicks across the whole cluster (0 CTR at these positions). This is a live page failing to rank for its own target terms — existing-first says fix/relaunch this page, not just add a new one.

SERP evidence: top 10 for `ad testing tool` is won by thin/generic content (Neurons DR63/UR5, Quantilope DR64/UR9, superads.ai DR56/UR4, jonloomer DR74/UR4) — no URL rating above 13. None of our tracked competitors (Madgicx/Birch/admanage.ai/kitchn.io/Ryze AI/Adnova) rank here at all — pure gap, genuinely low competition, not just low-KD-but-unreachable.

Pain evidence (Reddit, verbatim, 2026-07-25): "Do these types of testing tools work? Feel like I'm bombarded with 'data-driven creative' ads and I can't help but feel skeptical" (r/PPC, /comments/1k7md5u); "You can't restart a completed Creative Testing experiment — you'll need to recreate it. Meta's built-in Creative Testing tool doesn't allow you..." (r/FacebookAds, /comments/1rzwv67, 2026-03-21) — a concrete limitation of Meta's native tool that a third-party workflow solves.

Why us / product fit: direct — we already have a creative-testing-framework page and automation-rules product; the gap is in owning "ad testing tool" the *category term*, cross-platform (Meta+TikTok), not just a listicle.

Format hypothesis: refresh existing listicle with Meta+TikTok cross-platform testing angle + the "Meta's native tool can't restart tests" pain point as a differentiator section; consider whether the existing page's title/structure is the problem (tech-qa candidate) before writing net-new.

Preliminary score: reach ✅ (KD 1-2, no competitor blocking), volume ✅ (~2,100 combined), product fit ✅, but it's an **existing-page fix**, not a new article — flag for `analysis` unit too (title/meta mismatch, see rules/scorecard.md dimension on cannibalization/consolidation).

Source trail: Ahrefs keywords-explorer-overview (country us, 2026-07-24); Ahrefs serp-overview for "ad testing tool" (2026-07-24); GSC direct `--pages 50 --days 90` and `--queries 100 --days 90` (2026-07-25); SerpAPI google_light Reddit search (2026-07-25).

---

## 2. meta-ads-library-guide

Primary keyword: `meta ads library` / `facebook ads library` cluster (Ahrefs, 2026-07-24) — Bïrch ranks top-10 for 9 variants of this term combined ~35,000 vol (KD ranging 11–46, several sub-25 variants like `ad library meta` 1,200/KD11, `meta ad library` 1,400-1,800/KD9-45); Madgicx separately ranks for `facebook ads library` variants combined ~30,000 vol via `madgicx.com/blog/facebook-ad-library`. Two of our six tracked competitors independently built and rank for this — proven pattern, not a guess.

GSC signal: we have zero pages on this topic; no impressions for "ads library" queries in our 90d window.

Pain evidence: Reddit — "How do you use Meta Ads Library?" (r/FacebookAds /comments/1kn6zrr) and "Does anyone use the Meta Ads Library? Any tips & tricks?" (r/FacebookAds /comments/1fspwnq) both live, upvoted threads; current #3 SERP position for "meta ads library how to use" is a Reddit thread — a content vacuum an authoritative guide can fill.

Why us / product fit: strong TOFU-to-BOFU bridge — "find competitor ads in the Ad Library → bulk-launch your own variants" connects directly to our bulk-ad-launch and creative-upload use cases, unlike Madgicx's off-topic traffic plays (Instagram post sizes, navigation — explicitly NOT our fit, noted only as a pattern-recognition data point, not a template).

Format hypothesis: educational how-to guide (search/filter/export workflow) + a section bridging into "now launch what you found, in bulk" (internal link to /use-cases/bulk-ad-launch).

Preliminary score: reach — reachable on mid-tail variants (KD 9-25), harder on the exact head term (KD 40-46); volume strong; product fit good (bridge, not pure informational orphan); AEO potential — currently the SERP for "how to use" queries is Reddit + low-authority blogs, room for a citable authoritative answer.

Source trail: Ahrefs site-explorer-organic-keywords, target=bir.ch and target=madgicx.com, mode=domain, date 2026-07-24; SerpAPI google_light "meta ads library how to use OR guide" (2026-07-25).

---

## 3. tiktok-creative-center-guide

Primary keyword: `tiktok creative center` cluster (Ahrefs, target=bir.ch, 2026-07-24) — Bïrch's single largest keyword driver in our whole competitor sweep: 11 ranking variants combined ~71,000 vol, KD ranging 0–73 with multiple very-low-KD variants (KD 1, 3, 6, 7, 7, 8, 9, 13).

GSC signal: zero on-site coverage; no TikTok-specific tooling explainer exists (we have TikTok mentioned only inside bulk-upload-creatives-meta-tiktok).

Why us / product fit: matches seed-map's flagged gap ("zero TikTok-specific scaling content on site; JTBD 6 native") — see `tiktok-winner-scaling-automation` in legacy-backlog.md, Reddit-proven tail, still unaddressed. This guide would be the TOFU entry point that pillar needs.

Format hypothesis: how-to/explainer (what TikTok Creative Center shows, how to use it for competitive research) bridging into TikTok ad scaling/automation.

Preliminary score: reach — several sub-10-KD variants make this very achievable; volume is the largest in this whole run; product-fit honesty check: this is closer to pure informational/TOFU than our core execution-layer product — keep the bridge section tight and honest (we don't do creative production), lean on the "research → scale on Scalemate" narrative only.

Source trail: Ahrefs site-explorer-organic-keywords, target=bir.ch, mode=domain, date 2026-07-24. Cross-ref: `artifacts/topics/legacy-backlog.md` → `tiktok-winner-scaling-automation`.

---

## 4. meta-pixel-helper-explainer

Primary keyword: `meta pixel helper` cluster (Ahrefs, target=admanage.ai, 2026-07-24) — admanage.ai ranks top-10 for 6 variants combined ~9,300 vol, KD mostly 1–16 (one outlier at 16), via one dedicated page (`/blog/meta-pixel-helper-chrome-extension`).

GSC signal: zero on-site coverage.

Why us / product fit: weaker fit than #2/#3 — this is a tracking/debugging tool explainer, adjacent to our Adjust integration and attribution-adjacent positioning, but not core to launch/scale execution. Flagging as lower-priority, informational-only; honest fit note per seed-map boundary (we are not an MMP/pixel-debugging tool).

Format hypothesis: short explainer, low investment, AEO-oriented (definitional query, citable answer format).

Preliminary score: reach ✅ (near-zero KD), volume moderate (~9k combined across variants, but each individual variant is smaller), product fit weak-to-moderate — recommend only if capacity allows after 1–3.

Source trail: Ahrefs site-explorer-organic-keywords, target=admanage.ai, mode=domain, date 2026-07-24.

---

## 5. meta-google-ads-mcp-exact-match-refresh (update `best-mcp-servers-meta-google-ads`)

Primary keyword: `google ads mcp` (vol 800, KD 12) and `meta ads mcp` (vol 600, KD n/a — Ahrefs, 2026-07-24).

GSC signal (90d, direct): our existing MCP article is our #3 page by clicks (32 clicks / 9,526 impr / pos 10.4 overall) but ranks poorly for the two highest-volume exact-match head terms specifically: `google ads mcp` — 21 impr at pos 22.1; `meta ads mcp` — 4 impr at pos 26.8; `meta ads mcp server` — 4 impr at pos 17.5. We rank well (pos 8-9) for softer variants (`best meta ads mcp`, `best google ads mcp`) but not the head terms themselves.

Why us / product fit: direct — this is our own best-performing page, currently leaving 800+600 = 1,400/mo volume on the table on exact-match head terms it's positioned to win (KD 12 is very reachable given the page's existing traction).

Format hypothesis: **not a new article** — refresh/restructure existing page to target the two head terms directly (headings, title/meta), likely an `analysis`-unit enrichment task rather than `topic-research` output; flagging here because it surfaced during this sweep.

Preliminary score: reach ✅, volume ✅, effort low (existing page, no new writing unit needed) — cheapest win in this entire run.

Source trail: GSC direct `--queries 100 --days 90 --json` (2026-07-25); Ahrefs keywords-explorer-overview (2026-07-24).

---

## 6. meta-ads-updates-2026-hub (re-surface from legacy-backlog, now with fresh validation)

Legacy candidate (`artifacts/topics/legacy-backlog.md`, recon 2026-05-25): 2,200 vol / KD 3, rolling-hub format, ops-impact framing as our angle.

Fresh validation (Ahrefs, target=admanage.ai, 2026-07-24): admanage.ai's `/blog/meta-ads-update` ranks **#1** for `meta updates` (2,900 vol, KD 76 — but they rank #1 anyway, meaning it's an authority/freshness play, not a KD-reachability play) and for `meta ads updates news` (800 vol, KD 25). Confirms the legacy note ("admanage.ai gets 1,712 traffic/mo from ONE such article") is directionally real and the format still works as of today.

Why us / product fit: ops-impact framing (what changed → what you need to do in your automation rules) is exactly our product's job — direct fit.

Action: do not re-research from scratch — re-score against current `rules/scorecard.md` and hand to `validate`.

Source trail: legacy-backlog.md; Ahrefs site-explorer-organic-keywords target=admanage.ai (2026-07-24).

---

## Not proposed (checked, rejected as candidates this run)

- **adcreative.ai comparison variants** (`adcreative.ai alternatives 2026`, `adcreative.ai vs pencil vs creatify`, etc.) — already covered by `/blog/adcreative-ai-alternative`; GSC shows this ranking pos 9-12 on most variants already. Enrichment task for `analysis`, not a new-topic candidate.
- **Instagram post-size / navigation / emoji-style generic traffic plays** (seen driving huge volume for Madgicx, e.g. `instagram navigation` 85,000 vol) — explicitly out of product-fit boundary (rules/seed-map.md): not ad-ops/execution-layer relevant, would be pure vanity traffic with no funnel connection. Noted only as a competitor pattern to *not* copy.
- **Cannibalization observed, not a content gap**: `use-cases/bulk-ad-launch` vs `features/bulk-launch` vs `blog/best-bulk-ad-launch-tools`, and `use-cases/ad-campaign-automation-rules` vs `features/automation-rules`, both compete for overlapping query sets (37 cannibalized queries found via `--raw` query×page, 90d). This is a consolidation/internal-linking fix, in scope for the `analysis` unit, not `topic-research`.

---

## Top 3 for quick reference

1. **ad-testing-tools-meta-tiktok** — cheapest-to-fix existing-page failure, ~2,100 vol at KD 1-2, zero competitor blocking.
2. **meta-ads-library-guide** — proven 2-competitor pattern (~30-35k vol each), strong funnel bridge into bulk-launch.
3. **tiktok-creative-center-guide** — largest single volume driver found (~71k vol across variants), closes the seed-map-flagged TikTok content gap.
