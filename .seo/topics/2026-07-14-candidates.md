# Topic candidates — 2026-07-14

Unit: `topic-research` · run date 2026-07-14 · target: scalemate.co (repo scalemate-dev/scalemate-landing)

## Run log

**Sanity checks (rules/aeo-rules.md Part A):** all 4 mandatory integrations alive.
- Ahrefs `subscription-info-limits-and-usage` → OK (Lite, 7,340/100,000 units used at start; this run spent ~3,600).
- GSC direct `scripts/gsc.sh --pages 1 --days 7` → OK (data returned).
- SerpAPI `google_light q:test` → OK.
- Trends `google_trends "facebook ads" TIMESERIES` → OK (non-empty payload).

**Signals collected:**
- GSC (direct, 28d window ending 2026-07-14): `--striking`, `--queries 100`, `--pages 50`.
- Competitor gap (Ahrefs `site-explorer-organic-keywords`, US, non-branded, top-20, vol≥100, 2026-07-14): madgicx.com, bir.ch, admanage.ai, kitchn.io, get-ryze.ai, adnova.ai.
- Trends (SerpAPI `google_trends` RELATED_QUERIES, 12m, 2026-07-14): seeds "facebook ads automation", "creative testing", "ai ads", "facebook account restricted".
- Reddit (SerpAPI google, site:reddit.com r/FacebookAds + r/PPC, 2026-07-14): 4 pain sweeps.
- Keyword validation: Ahrefs `keywords-explorer-overview` (US, 2026-07-14), 21 keywords.
- SERP intent: SerpAPI google (US, 2026-07-14) for "facebook ad account restricted", "facebook automated rules".
- x.com pass: **skipped** (optional per SKILL; low-confidence only).

**Data gap (explicit, per DI-6/DI-7):** direct Reddit thread fetch is blocked (HTTP 403 on www + old.reddit, retry done per DI-4). All Reddit quotes below are **verbatim excerpts surfaced in live Google SERP snippets (via SerpAPI, 2026-07-14)** with thread URLs — real text, but `brief`/`validate` must re-verify in-thread (e.g. via a network that can reach reddit.com) before quoting in a draft. The 4 mandatory integrations for this unit were all up; this is a partial-data note, not a stop condition.

**Dedupe performed against:**
- Existing site pages: GSC `--pages 50` + landing `content/blog/` listing via `gh api` (10 posts: adcreative-ai-alternative, best-ad-testing-tools, best-bulk-ad-launch-tools, best-facebook-ads-automation-tools, best-mcp-servers-meta-google-ads, bulk-upload-creatives-meta-tiktok, madgicx-review-alternative, meta-andromeda-update, what-are-static-ads, what-is-ad-fatigue).
- `artifacts/topics/rejected.md` — one touchpoint, flagged inside card 3.
- `artifacts/topics/legacy-backlog.md` — cards 4–5 surface backlog items with fresh evidence instead of re-research; one backlog correction below.
- Target `.seo/topics/` — does not exist yet (gh api 404) → nothing to dedupe.

**Competitor gap highlights (Ahrefs, 2026-07-14):**
- bir.ch ranks for a full "facebook account restricted from advertising" cluster (pos 7–9, KD 0–29) → feeds card 1.
- admanage.ai's top non-branded page: "find all ad landing pages of competitors" 500 vol / KD 1 / pos 2 / ~193 visits/mo → confirms backlog card 4.
- get-ryze.ai floods "facebook ads automation + AI/MCP" listicles (10/10 top results on its own brand SERP are its 2026 listicles; positions itself on "ChatGPT MCP integration") → competitive pressure on our automation/MCP cluster, supports cards 2 and 6.
- madgicx.com non-branded wins are off-ICP Instagram trivia (post sizes, story navigation) — nothing to mine. adnova.ai: zero non-branded top-20 rankings ≥100 vol. kitchn.io: negligible.

---

## Candidates

### 1. facebook-ad-account-restricted-prevention
Primary keyword: `facebook ad account restricted` (vol 100, KD 2, TP 1,200 — Ahrefs US, 2026-07-14). Cluster: `facebook account restricted from advertising` (100, KD 5, TP 250), `meta ad account restricted` (80), `facebook ads account restricted` (20, KD 4, TP 1,300). | GSC signal: none (no page targets it)
Pain evidence (SERP-snippet verbatim, 2026-07-14 — re-verify in-thread):
- "I tried for 3 days to get my Meta ad account unrestricted but failed. I also tried hiring someone on Fiverr to create a new account and within 2 days…" — r/FacebookAds, ~2 mo old, 10+ comments, https://www.reddit.com/r/FacebookAds/comments/1sy3dvw/
- "Is this restriction likely permanent or just stuck? … Is it safe to delete my Business Profile and recreate it?" — r/FacebookAds, ~5 mo, 20+ comments, https://www.reddit.com/r/FacebookAds/comments/1qeej1f/
- "Lots of people report that accounts shut down after connecting external AI agents, like Claude, directly to Ads Manager via API." — r/FacebookAds, ~3 mo, 30+ comments, https://www.reddit.com/r/FacebookAds/comments/1ryu8wk/ ← ties directly to our verified-app differentiator
Trends: "facebook account quality restricted" +70%, "meta account quality" +200% rising, 12m (google_trends, 2026-07-14).
Why us / product fit: media-buyer ICP, JTBD A/B. Honest fit: we do NOT unban accounts — the angle is *prevention/ops*: why accounts get restricted (incl. unverified API/AI tools), account-structure hygiene, and how a verified Meta app (our killer differentiator per rules/seed-map.md) reduces API-side ban risk. Near-YMYL-free, but AEO-9 qualifiers needed on any risk claims.
Format hypothesis: blog how-to / prevention guide. SERP (2026-07-14): Meta Help top-3 + Reddit at pos 3 + YouTube + one SaaS blog (superads.ai) — mixed/weak SERP, AI Overview present, rich PAA ("How do I unrestrict my Facebook ad account?" etc.).
Preliminary score (quick pass, NOT validate): Demand ~15/25 · Reachability ~20/25 (KD 2–5, forum in top-10; Meta docs own the very top — target the prevention angle, not "fix") · Business fit ~18/25 · AEO ~10/15 (Meta policy docs + Reddit as public sources; possible first-party: verified-app review stats) · Existing-asset ~4/10 (links from best-mcp-servers + homepage) ≈ **67 → strongest new candidate**.
Source trail: Ahrefs keywords-explorer-overview 2026-07-14; Ahrefs site-explorer-organic-keywords bir.ch 2026-07-14; SerpAPI google + google_trends 2026-07-14; GSC direct 28d 2026-07-14.

### 2. meta-ads-mcp-explainer (or UPDATE of best-mcp-servers-meta-google-ads)
Primary keyword: `meta ads mcp` (vol 600 — Ahrefs US, 2026-07-14). Cluster: `facebook ads mcp` (350, KD 14), `meta mcp server` (90). | GSC signal: /blog/best-mcp-servers-meta-google-ads = 2,912 imp / 11 clicks / pos 11.5 / CTR 0.38% over 28d; queries "best meta ads mcp" (8 imp, pos 8.4), "best google ads mcp" (11 imp, pos 8.8) — GSC direct, 2026-07-14.
Pain evidence (SERP-snippet verbatim, 2026-07-14 — re-verify in-thread):
- "MCP can connect your AI tool to the ad account through Meta auth, It can pull reports, create/edit campaigns, manage catalogs/product feeds…" — r/FacebookAds "Meta just released Ads MCP", ~2 mo, 60+ comments, https://www.reddit.com/r/FacebookAds/comments/1szn2mx/
- "I have been trying to connect AI (ChatGPT, Gemini or Claude) with my MCC ads accounts. But I am struggling to understand on how we can set them up." — r/PPC, ~5 mo, 10+ comments, https://www.reddit.com/r/PPC/comments/1r30hsz/
- Ban-risk quote from card 1 (1ryu8wk) doubles here: unverified AI/API access is the fear; verified app is the answer.
Trends: "ai for ads" = top related on "ai ads"; "meta ads" +160%, "open ai ads" +190% rising (google_trends 12m, 2026-07-14).
Why us / product fit: BOFU-adjacent — Scalemate AI chat/automation OS layer with verified Meta app IS the product answer. JTBD A/D.
Format hypothesis: explainer/hub "Meta Ads MCP: what it does, limits, safe setup (verified vs unverified)". **Cannibalization flag (mandatory):** existing listicle /blog/best-mcp-servers-meta-google-ads already ranks pos ~8–11 for this cluster. Same-intent risk is real → `validate` must run the §8.2 check; plausible verdict is **UPDATE-EXISTING** (expand the listicle with the explainer + safety section) rather than a new page. Do not write a new page before that check.
Preliminary score: Demand ~18/25 · Reachability ~15/25 (KD 14; we already rank) · Business fit ~20/25 · AEO ~12/15 (first-party: verified-app, MCP tool comparisons) · Existing-asset ~8/10 ≈ **73, with UPDATE-EXISTING as the likely shape**.
Source trail: Ahrefs keywords-explorer-overview 2026-07-14; GSC direct 28d 2026-07-14; SerpAPI google/google_trends 2026-07-14.

### 3. meta-automated-rules-playbook (auto-pause ROAS / seasonal pauses)
Primary keyword: `facebook automated rules` (vol 100, KD 2, TP 100 — Ahrefs US, 2026-07-14). Cluster: `facebook ads automated rules` (40, KD 2), `meta ads automated rules` (20), `automated rules facebook ads` (20). | GSC signal (the real demand proof): "automatically pause ads when roas drops below threshold" 60 imp / pos 3.6; "meta ads automated rules for pausing during holidays best practices" 126 imp / pos 5.3; "best automated rules for scaling ads" 12 imp / pos 23.3 — all 0 clicks, no dedicated content page (GSC direct 28d, 2026-07-14).
Pain evidence (SERP-snippet verbatim, 2026-07-14 — re-verify in-thread):
- "But what we do is just use Automated Rules right inside Ads Manager. You literally just create one rule to pause your campaign at a specific…" — r/FacebookAds "We spend $90k/mo on Meta to make $800k/mo", ~2 wks, 50+ comments, https://www.reddit.com/r/FacebookAds/comments/1uhzseo/
- "Revealbot's auto rules pause weak ads and ping me on Slack the moment CPA or ROAS drifts, so I don't live in Ads Manager." — r/FacebookAds, ~11 mo, https://www.reddit.com/r/FacebookAds/comments/1mmybne/
⚠️ **Rejected-log touchpoint:** `automation-rules-frameworks-meta-tiktok` was rejected 2026-05-05 ("blog format wrong — became /automation-rules-library interactive page"). This is a re-proposal <3 months later **with a new signal**: the GSC long-tail impressions above did not exist in that decision, and the angle is narrower — a how-to playbook (auto-pause on ROAS, seasonal/holiday pauses, scaling rules) that feeds and links the /automation-rules-library page instead of duplicating it. If the human considers this still the same topic → drop.
Why us / product fit: automation rules = core product (/features/automation-rules, /use-cases/ad-campaign-automation-rules both already get impressions at pos 8–17). JTBD A. Cannibalization: existing pages are product/BOFU; this is informational how-to → different intent, must cross-link (validate re-checks §8.2).
Format hypothesis: blog how-to/listicle "N automated rules" (SERP 2026-07-14: Meta Help top-3, then Mayple/KlientBoost/WordStream/Cropink listicles; AI Overview present — listicle-of-rules is the winning format).
Preliminary score: Demand ~10/25 (low Ahrefs vol but real GSC impressions — GSC counts per scorecard) · Reachability ~15/25 (KD 2, but Meta docs + DR 70+ blogs share top-10) · Business fit ~22/25 · AEO ~12/15 (real rule configs from the library + first-party usage numbers) · Existing-asset ~7/10 ≈ **66**.
Source trail: Ahrefs keywords-explorer-overview 2026-07-14; GSC direct 28d 2026-07-14; SerpAPI google 2026-07-14; artifacts/topics/rejected.md.

### 4. find-competitor-landing-pages-meta-tiktok (from legacy backlog — fresh confirmation)
Primary keyword: `find all ad landing pages of competitors` (vol 500, KD 1 — Ahrefs via admanage.ai organic keywords, 2026-07-14; admanage.ai ranks pos 2 with ~193 visits/mo). Broader "competitor landing pages" 40 / KD 4. | GSC signal: none.
Pain evidence: legacy research (artifacts/topics/legacy-backlog.md → "find-competitor-landing-pages-meta-tiktok", 1,100 combined / KD 0–5 at recon 2026-05-25). Not re-researched here per dedupe rule — backlog evidence + today's admanage.ai confirmation.
Why us / product fit: MOFU how-to workflow for media buyers; honest fit note: we are not an ad-spy tool — angle is the manual workflow (Ads Library, TikTok Creative Center) + where execution automation picks up. Cross-platform Meta+TikTok = our differentiator per backlog.
Format hypothesis: blog how-to.
Preliminary score: Demand ~14/25 · Reachability ~20/25 (KD ≤5, a DR-~30s site holds pos 2) · Business fit ~14/25 · AEO ~8/15 · Existing-asset ~2/10 ≈ **58 — send to validate**.
Source trail: Ahrefs site-explorer-organic-keywords (admanage.ai) 2026-07-14; keywords-explorer-overview 2026-07-14; legacy-backlog.md (recon 2026-05-25).

### 5. multi-account-meta-ads-agency-workflow (from legacy backlog — fresh pain, weak search demand)
Primary keyword: `manage multiple facebook ad accounts` (vol 0 — Ahrefs US, 2026-07-14). Honest flag: no measurable search demand; this is a **pain-first / Reddit-proven tail** candidate. | GSC signal: none.
Pain evidence (SERP-snippet verbatim, 2026-07-14 — re-verify in-thread):
- "Running into a wall lately. We have: multiple Meta + Google accounts, different clients, random Google Sheets everywhere, Slack messages + notes…" — r/FacebookAds, ~3 mo, 10+ comments, https://www.reddit.com/r/FacebookAds/comments/1s1fkm5/
- "For agency owners and paid media managers: What operational task still requires more manual work than it should? Budget monitoring?" — r/FacebookAds, ~2 wks, https://www.reddit.com/r/FacebookAds/comments/1uezvy5/
- "agency owners who manage multiple ad accounts, This is a very real pain. Manual reporting + client anxiety is one of the biggest hidden time…" — r/FacebookAds, ~6 mo, https://www.reddit.com/r/FacebookAds/comments/1pw35pw/
Why us / product fit: multi-account Meta+TikTok is a core product capability; agency ICP = high LTV (legacy note: "verify product depth before claiming"). JTBD B/D.
Format hypothesis: use-case page or pain-first blog; per scorecard, zero search demand caps Demand ~6/25 → likely NO-GO as SEO play but viable as BOFU/sales-enablement content. Proposing so the human decides intent.
Preliminary score: ≈ **45 — below GO line; propose only if the goal is BOFU coverage, not traffic**.
Source trail: Ahrefs keywords-explorer-overview 2026-07-14; SerpAPI google 2026-07-14; legacy-backlog.md.

### 6. ai-marketing-agent-vs-ai-assistant (definitional / AEO play)
Primary keyword: `ai marketing agent` (vol 800, KD 34, TP 350 — Ahrefs US, 2026-07-14). Cluster: `marketing ai agent` (350), `ai for facebook ads` (60, KD 47, TP 1,400). | GSC signal: "\"marketing ai assistant\" vs \"marketing ai agent\"…" 22 imp / pos 7.6 over 28d, landing on /ai-assistant (GSC direct, 2026-07-14).
Pain evidence (SERP-snippet verbatim, 2026-07-14 — re-verify in-thread):
- "AI can't manage FB Ads. You can use it only for creatives: text, photo, video … spot patterns across campaigns" — r/FacebookAds "Anyone here successfully using AI to manage Meta ads", ~3 mo, 30+ comments, https://www.reddit.com/r/FacebookAds/comments/1s4iwgy/ (skepticism = the angle: what an agent can/can't actually do)
- "As for automation/AI tools — in my experience they only really help at very large scale, when there are too many campaigns to monitor manually." — r/FacebookAds, ~7 mo, https://www.reddit.com/r/FacebookAds/comments/1p85g98/
Trends: whole "ai ads" cluster rising (2026-07-14). Competitor pressure: get-ryze.ai builds its entire funnel on "AI that manages ads".
Why us / product fit: /ai-assistant page exists (105 imp, pos 6.7, 0 clicks — GSC 28d); definitional article anchors it. JTBD A/D. KD 34–47 is borderline for DR ~30 → the GSC pos-7.6 query shows we can enter the definitional slice.
Format hypothesis: glossary/definitional + honest comparison ("assistant answers, agent executes — where each breaks in ad ops").
Preliminary score: Demand ~15/25 · Reachability ~10/25 (KD borderline — validate must check SERP DR) · Business fit ~15/25 · AEO ~12/15 · Existing-asset ~6/10 ≈ **58 — send to validate**.
Source trail: Ahrefs keywords-explorer-overview 2026-07-14; GSC direct 28d 2026-07-14; SerpAPI google/google_trends 2026-07-14.

---

## Checked and NOT proposed (fresh corrections)

- **meta-ads-updates-2026-hub (legacy backlog):** legacy claimed 2,200 vol / KD 3. Fresh Ahrefs (US, 2026-07-14): `meta ads updates` 1,000 / **KD 72**, `facebook ads updates` 1,600 / **KD 75** — reachability wall for DR ~30. Trends does show "facebook ads news" +300% rising, but the head SERP is unreachable. Recommend: update the backlog entry (stale data), revisit only with a long-tail/newsjack angle (e.g. per-update explainers like the existing meta-andromeda-update post).
- **"ad testing tools" striking-distance cluster** (~1,500 imp/28d combined at pos 13–20: "ad testing tools" 303 imp, "ad testing tool" 272, "ad creative testing platforms" 252, "ad testing software" 232, "ad performance testing tool" 203 — GSC direct, 2026-07-14; /blog/best-ad-testing-tools has 2,209 imp / 0 clicks / pos 16.3): **not a new topic — an UPDATE/enrichment task for the existing post.** Routed to `analysis`/production rather than proposed here (existing-first rule).
- **meta advantage plus campaigns:** 10 vol (Ahrefs 2026-07-14) — no demand; bir.ch's win there is on a stale-volume page. Skip.

## Gate contract
A candidate becomes runnable by `production` only after a human merges it (or an edited version) into `.seo/topics/` in scalemate-landing. This file proposes; `validate` scores for real (rules/scorecard.md) and can kill any card above.
