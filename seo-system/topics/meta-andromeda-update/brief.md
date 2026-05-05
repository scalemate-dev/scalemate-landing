# Topic Brief: Meta Andromeda Update

> Discovery date: 2026-05-05
> Branch: `seo/meta-andromeda-update`
> PR: #59
> Source material: [`seo-system/plans/meta-andromeda-source-material.md`](../../plans/meta-andromeda-source-material.md)
> Rules compliance: `content-writing-rules.md` sections 1, 2, 3, 4 (esp. 4.1 Title/Meta methodology), 5, 6 (anti-AI), 7 (E-E-A-T), 10 (QA)

---

## Step 0 — Sanity check (pre-work)

- ✅ GSC live (`gsc_client.py --queries 1 --days 7` returned data)
- ✅ Ahrefs MCP live (`subscription-info-limits-and-usage` — Lite plan, 42,549 units remaining, reset 2026-05-11)
- ✅ SerpAPI MCP live (`google_light` test query returned 10 results)

No data integrity issues. Proceeding.

---

## Keyword Data

### Primary
- **`meta andromeda update`** — Vol **500**/mo (US), KD: not returned by Ahrefs (parent topic KD = 15), CPC: not returned, intent: informational + light branded.

### Why this is primary (not parent `meta andromeda`)
- Parent `meta andromeda` (1,400 vol/mo, KD 15) is more **definitional/branded** ("what is it") and dominated in top-3 by Meta's own engineering blog + Reddit AMA-style posts — winnable but with a definitional H1, not an action playbook.
- `meta andromeda update` targets the **action-seeker** audience (advertisers asking "what changed, what do I do") which is exactly the playbook intent of this article. Aligns with Ruslan's 7 hacks + Natalia's 2 observations.
- We **cover both** by including "What is Meta Andromeda" as H2 #1 + putting `update` in title.

### Secondary cluster (covered by H2 sub-questions / FAQ / body)
| Keyword | Vol | Notes |
|---|---:|---|
| meta andromeda | 1,400 | Parent. Covered in opening definition H2. Verified Ahrefs 2026-05-05: KD 15, intent informational+branded, SERP features `ai_overview, question, news, image_th, video_th`. |
| andromeda meta ads | 150 | Covered in opening (we use "Meta Ads" framing). |
| andromeda meta | 600 | Variant phrasing — natural body match. |
| meta ads andromeda update | 150 | Subset of primary — same SERP. |
| andromeda update meta | 150 | Same intent. |
| meta andromeda algorithm | 80 | Verified Ahrefs 2026-05-05 (vol 80). Section explaining ad-retrieval engine. |
| what is meta andromeda | 80 | Verified Ahrefs 2026-05-05 (vol 80). H2 #1 = direct answer. |
| meta andromeda ai | 60 | Body. |
| meta andromeda update 2025 | 60 | Verified Ahrefs (vol 60). Year markers in body. |
| meta andromeda ads retrieval engine | 50 | Body — this is the technical phrase Meta uses. |
| meta andromeda update what is it | 40 | H2 #1 covers. |
| meta andromeda algorithm 2026 | 40 | Year marker in title (2026). |
| facebook ads andromeda update | 50 | Body — "Facebook + Instagram (Meta)" framing. |

**Cluster total: ~3,500 vol/mo across 23 keywords** (per source material, sample-validated 2026-05-05).

### Trend
Ahrefs `keywords-explorer-volume-history` for `meta andromeda` (US, Feb–May 2026):
- Feb 2026: 2,325 → Mar: 2,415 → Apr: 2,348 → May: 2,311
- **Stable / mild plateau at ~2.3K/mo** (above the 12-month 1,400 average — recent 4 months are elevated). Active news cycle confirmed. Not declining.

### GSC validation
- Filter `query contains "andromeda"` over 90 days → **No data returned** (zero impressions on scalemate.co).
- Filter `query contains "meta andromeda"` over 90 days → **No data returned**.
- Confirms: pure gap. Not currently catching any traffic on this cluster.

### SERP intent confirmed via SerpAPI
- `meta andromeda` top-10: official Meta engineering, Reddit threads, agency explainers, jonloomer.com, adexchanger, adsuploader.com — all **informational explainer content**. No third-party review walls (G2/Trustpilot). **Winnable.**
- `meta andromeda update` top-10: dominated by **Reddit threads** (positions 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — literally 10/10 are reddit.com), with adscale, jonloomer, adexchanger, trypencil sprinkled in lower positions. SERP is **community-pain-driven** = we win with structured, actionable, founder-voiced playbook (something Reddit threads don't deliver in clean format).

---

## Funnel & Conversion Assessment

| Criterion | Value |
|---|---|
| **Funnel stage** | TOFU → MOFU bridge. People searching "what to change" are diagnosing a recent ROAS drop (MOFU intent) wrapped in TOFU language. |
| **Steps to sign-up** | 2-3 (read article → click `/use-cases/bulk-ad-launch` (primary) or `/blog/creative-testing-framework` from playbook → try free tool) |
| **ICP fit** | 5/5 — UA Manager / Media Buyer for mobile apps & games is *exactly* who is feeling Andromeda creative-volume pressure most. Diversification is core ScaleMate territory. |
| **Product page link** | **Primary CTA: `/use-cases/bulk-ad-launch`** — under Andromeda the bottleneck shifted from targeting to creative throughput. The fastest, cleanest way to test 10-20+ creatives per ad set is bulk launch, not single-uploader. **Secondary: `/blog/creative-testing-framework`** (testing system bridge — quick + clean test organization). `/ad-creative-uploader` becomes a tertiary link only (mentioned once, not the core CTA). `/blog/what-is-ad-fatigue` = striking-distance internal-link boost. |

**Why this article will drive signups:** Under Andromeda the work isn't "make more individual ads" — it's **analyze pain → find concepts → run lots of fast, well-organized tests**. The bulk launch use-case directly answers Hack 3 (multi-format), Observation 1 (10-20+ creatives per ad set), Observation 2 (creative "worlds" rotation) and Hack 6 (Hook Rate testing layered onto winning videos). Pairing bulk launch with the creative-testing-framework reads as "here's how to think about tests + here's how to run them quickly" — natural fit for the article's thesis: "creatives are now the most important lever on FB/TikTok; speed + organization of testing is the moat."

---

## Existing Content Check

- **Matching page on scalemate.co for `meta andromeda update`:** ❌ NONE. Zero existing pages.
- **Andromeda mentioned anywhere on site:** Only [`/blog/creative-testing-framework`](../../../content/blog/creative-testing-framework.md) line 147–149 — single paragraph in "Creative = Targeting (Andromeda era)" section. **Not a competing page** — it is a positioning paragraph inside a different topic.
- **GSC organic-keywords on scalemate.co with "andromeda":** zero (Ahrefs `site-explorer-organic-keywords` filter syntax errored, but GSC contains-filter over 90d returned 0 rows — the authoritative signal).
- **Cannibalization risk:** None. The `/blog/creative-testing-framework` mention is Andromeda *as context* for testing methodology, not as the topic itself. We will internally link from new article → that article (and reverse).

**Decision: CREATE NEW** at `/blog/meta-andromeda-update`. No update-existing path because the existing mention is one paragraph inside a different topic.

---

## SERP Analysis (live, 2026-05-05)

### `meta andromeda` (US, num=10)

**Top 10 organic:**
1. engineering.fb.com — Meta Andromeda: Supercharging Advantage+ automation (official, Dec 2024 launch post)
2. reddit.com/r/FacebookAds — "Meta Andromeda Explained in Simple Words" (community)
3. facebook.com/business/news — Unlocking Diversification with Meta Andromeda (Meta's own marketing)
4. envisionitagency.com — Andromeda is Changing Advertising Forever (agency explainer)
5. adexchanger.com — What Meta's Andromeda Update Actually Changes (industry trade)
6. jonloomer.com — Meta Andromeda: What It Means for Your Ad Strategy (creator)
7. linkedin.com — Meta's Andromeda: A Guide to Ad Creatives and Diversity (LinkedIn post)
8. adsuploader.com — Meta Andromeda Explained: Entity IDs vs Creative Volume (competitor-adjacent SaaS)

**SERP features:** `ai_overview` ✅ (large block, 4 list items + recommendations), `related_questions` (PAA: "What is Meta andromeda?", "When did Meta Andromeda start?", "Why did Meta create Andromeda?"), `inline_videos` (3 videos, including "The NEW WAY To Test Facebook Ads (Post Andromeda)"), `related_searches` (Meta Andromeda 2026, Reddit, PDF, campaign structure, release date).

### `meta andromeda update` (US, num=10)

**Top 10 organic — 100% Reddit-dominated:**
1. r/FacebookAds — "Meta Andromeda Explained in Simple Words" (20+ comments)
2. r/FacebookAds — "I Was Wrong About 3:2:2 — Meta's Andromeda Update..." (180+ comments)
3. r/FacebookAds — "My Practical Guide to Mastering Meta Andromeda" (40+ comments)
4. r/FacebookAds — "The Andromeda Update Just Killed My Business..." (110+ comments)
5. r/DigitalMarketing — "My Thoughts on Meta's Andromeda (And How To Succeed)" (10+ comments)
6. r/DigitalMarketing — "what's the best strategy to get good results with Meta..." (10+ comments)
7. r/FacebookAds — "Meta's Andromeda update is quietly changing how..." (10+ comments)
8. r/PPC — "Let's chat about Meta's Andromeda and large catalogs..." (4 comments)
9. r/FacebookAds — "How Meta's New Andromeda Update is Fuc*ing..." (80+ comments)
10. r/FacebookAds — "Meta's Andromeda is a myth" (50+ comments)

**SERP features:** `ai_overview` ✅, `related_questions` ("What is the Meta Andromeda update?", "What changed in Old Meta Andromeda vs updated Andromeda?"), `inline_videos` (3 — including "How to Scale Facebook Ads in 2026 (Andromeda Update)").

### Dominant intent
- **Informational + recently-pained.** People are not browsing Andromeda academically — they're searching because their ROAS dropped and they want to know what to change. AI Overview already serves the definition; what the SERP lacks is a **clean, founder-voiced, ICP-specific action playbook.**

### Can we win?
**YES.**
- 10/10 of `meta andromeda update` SERP is Reddit threads (long-form, messy, anecdotal). A structured, scan-friendly playbook with founder credibility, real internal observations, and product-page bridges has a clear gap.
- Top-3 of `meta andromeda` is Meta's own pages + Reddit + agency content. Our angle (mobile-app UA + Meta+TikTok ICP, founder LinkedIn-sourced hacks, Creative Diversity Score insight) is differentiated.
- KD 15 (parent), our DR (Ahrefs returned 0 in earlier checks — F3 in foundation backlog) means DR is unverified, but we already rank multiple pages on creative-testing-related queries (creative-testing-framework, ad-fatigue) showing topical authority.
- AI Overview is already there → gives us a chance to be cited in AIO if we write a clean, definition-first H2.

**Caveat:** AI Overview eats some click-through. Realistic expectation: page-1 placement will yield CTR closer to 1-2% than 5%, but cluster volume (3,500/mo) compensates.

---

## Competitive Gap Analysis

### Top-3 (`meta andromeda update`): r/FacebookAds threads
**Cover:** anecdotes, reactions ("the update killed my business"), peer advice in comments, occasional structured posts (the 3:2:2 thread, the "practical guide" thread).
**Miss:**
- No cohesive, scan-friendly playbook
- No mobile-app/UA-specific framing — almost all are e-comm/DTC oriented
- No multi-platform (Meta + TikTok) framing — Reddit is FB-only mindset
- Founder-named credibility (Reddit threads are anonymous)
- Internal data points (Creative Diversity Score "worlds" framework, Hook Rate distribution example)
- CTAs to operational tools

### Top-3 (`meta andromeda`): engineering.fb.com / Reddit / facebook.com/business
**Cover:** technical definition (engineering.fb.com), Meta's official positioning (facebook.com/business), basic Reddit explainer.
**Miss:**
- Practical "what do I change tomorrow morning" playbook
- Real practitioner hacks (Meta's own pages stay generic; Ruslan's 7 hacks + Natalia's 2 observations are first-party operator content unavailable elsewhere)
- ICP-specific angle for mobile UA managers

### Our differentiation (1-line)
**A founder-authored Andromeda playbook for mobile-app UA managers buying on Meta + TikTok — synthesizing 7 hacks from Ruslan Dzhafarov's LinkedIn post + 2 internal Scalemate operator observations (Creative Diversity Score "worlds", simplified campaign structure) — that bridges directly to the operational answer (creative volume tooling) the rest of the SERP avoids.**

---

## ICP Pain Research (Reddit / r/FacebookAds, r/PPC, r/DigitalMarketing — fresh scan 2026-05-05)

### Pain quotes (real, with links — do NOT paraphrase in draft)

1. **r/FacebookAds — "The Andromeda Update Just Killed My Business" (110+ comments, ~6 weeks old):**
   > "Meta completely broke something. The update literally destroyed my performance overnight. CPMs went up, CTRs tanked, conversions vanished. I keep tweaking..."
   - Link: https://www.reddit.com/r/FacebookAds/comments/1olyhxj/the_andromeda_update_just_killed_my_business_and/
   - Use as: opening pain hook in intro.

2. **r/FacebookAds — "Meta Andromeda Explained in Simple Words" (20+ comments):**
   > "Before Andromeda Meta used to prefer good content. After Andromeda Meta is demanding multi-variation content. You don't give variation → Meta can't match properly → your ads suffer."
   - Link: https://www.reddit.com/r/FacebookAds/comments/1p21s3b/meta_andromeda_explained_in_simple_words_no/
   - Use as: framing for "creative diversity is the new currency" section (Observation 2 setup).

3. **r/FacebookAds — "I Was Wrong About 3:2:2 — Meta's Andromeda Update..." (180+ comments):**
   > "The reason for this strategic pivot is a change in Meta's ad delivery system, referred to as the 'Andromeda' update. WTF is Andromeda? The Old..."
   - Link: https://www.reddit.com/r/FacebookAds/comments/1ng8ves/i_was_wrong_about_322_metas_andromeda_update/
   - Use as: proof that even confident testing frameworks are getting rewritten under Andromeda → bridges to Observation 1 (simplify structure).

4. **r/PPC — "Let's chat about Meta's Andromeda and large catalogs":**
   > "The new model is a 'creative portfolio.' Instead of A/B testing two ads, you should be running 10-20+ creatives in a single, broad Advantage+ campaign."
   - Link: https://www.reddit.com/r/PPC/comments/1m4poy0/lets_chat_about_metas_andromeda_and_large/
   - Use as: external validation of Observation 1 + Hack 3 (10-20+ creatives per ad set, broad Advantage+).

5. **r/DigitalMarketing — "what's the best strategy... with Meta Andromeda":**
   > "Here's the thing: with Meta Andromeda, over-optimizing early kills performance. It's smarter than it used to be; you need to feed it clean data and good [creatives]."
   - Link: https://www.reddit.com/r/DigitalMarketing/comments/1oe8ai5/first_time_launching_facebook_ads_whats_the_best/
   - Use as: warning section before Hack 2 (AI Enhancements off) — "stop tweaking, start feeding."

### Pain language (use these phrases verbatim in H1, intro, problem section)
- "Andromeda just killed my business / overnight"
- "CPMs went up, CTRs tanked, conversions vanished"
- "I keep tweaking and nothing works"
- "Meta is demanding multi-variation content"
- "Andromeda is a myth" (skeptic camp — addresses in intro: "myth or not, here's what's measurably different")
- "I was wrong about [old framework]"
- "over-optimizing early kills performance"

### Scale
- 4 of top-10 Reddit threads have 50+ comments; 2 have 100+ (110, 180). r/FacebookAds + r/PPC + r/DigitalMarketing all have multiple top-ranked Andromeda threads from past 6 months.
- This is a **high-emotion, high-volume pain** — not a hypothetical demand.

### Current workarounds (what people are doing without us)
- Reverting to old account structures (3:2:2 → being abandoned, per #3 above)
- A/B testing 2 ads (per r/PPC quote — being explicitly called out as wrong-for-Andromeda)
- Manually duplicating creatives in Ads Manager (slow, error-prone)
- Turning off Advantage+ entirely (anti-pattern — Andromeda rewards Advantage+)

### Emotional triggers
1. **Loss aversion** — "killed my business" / "tanked overnight"
2. **Confusion** — Reddit threads disagree (Andromeda is a myth vs. Andromeda changed everything)
3. **Decision paralysis** — "I keep tweaking and nothing works"
4. **Fear of missing the meta** — Meta is rewarding new behavior, advertisers fear they're optimizing for last year's playbook

### Thread activity
**Strong proof of demand:** 9 of top-10 threads have 10+ comments. Total visible comments across top-10 ≈ 530+. AI Overview present in SERP confirms Google has classified this as high-search-demand.

---

## Content Plan

| Field | Value |
|---|---|
| **Type** | Blog newsjack-explainer + practical playbook (hybrid) |
| **Template** | `content-writing-rules.md` 2.2 — Pain-First → Definition → Action Playbook (closest to Track B "Educational with operational payoff") |
| **Target length** | 2,800–3,200 words (expanded from 2,400-2,800 to accommodate Hack #10 attribution + 2 new FAQ entries + thesis framing block; still scan-friendly with H3-driven playbook) |
| **JTBD group** | B (diagnose & fix Meta performance drop) + D (scale creative volume to feed algorithm) |
| **Funnel stage** | TOFU/MOFU bridge |
| **ICP** | Primary: UA Manager / Media Buyer (mobile apps & games). Secondary: Founder/Head of Marketing reading to course-correct. |
| **Schema** | `BlogPosting` + `FAQPage` (FAQ section answers "What is Meta Andromeda", "When did it launch", "What changed", "Should I turn off AI Enhancements", "How many creatives per ad set"). HowTo schema deprecated per Google guidance — do NOT use. |

### Article thesis (sets up the playbook)

Under Andromeda, **creatives are now the single most important lever on Meta + TikTok.** The job stopped being "find the right audience" and became "feed the algorithm enough creative variation that it can find the audience for you." Which means the new core skill set is:

1. **Audience pain analysis** — understand the emotional triggers driving the ICP (otherwise you make pretty ads about nothing).
2. **Concept discovery** — turn pain into 5-10 distinct creative concepts ("worlds"), not micro-tweaks.
3. **Fast, well-organized testing** — launch many variations quickly, in clean structures, so the algorithm sees signal and you see what's working.

This is the framing the playbook should reinforce throughout. Bulk launch + creative-testing-framework are the operational answers; the uploader is a small piece of the bulk-launch workflow, not the headline.

### Article structure (synthesizes all 7 Ruslan hacks + 2 Natalia observations + 1 new attribution hack per gap-scan 2026-05-05)

1. **Hook (intro, ~250w)** — open with the r/FacebookAds "killed my business overnight" pain quote (real, linked). Reframe: under Andromeda, **creatives are the new targeting** — most "Andromeda killed my account" stories are creative-throughput stories in disguise. Promise: 10 specific changes for Meta + TikTok teams running mobile-app UA. Date-stamp 2026. Address the skeptic camp ("myth or not, here's what's measurably different").
2. **What is Meta Andromeda?** (H2, ~200w) — one-paragraph definition (ads retrieval engine, Dec 2024 launch, Grace Hopper / deep neural networks, +6% recall, +8% ad quality) → cite engineering.fb.com → covers `what is meta andromeda`, `meta andromeda algorithm`, `meta andromeda ai`, `meta andromeda ads retrieval engine` keywords.
3. **What actually changed for advertisers — and why creatives became the #1 lever** (H2, ~300w) — broad targeting wins, **creative = targeting**, signal density matters, Creative Diversity Score is now a real lever, Entity ID dedup is real (similar ads collapse into one and underspend). Frame: *the work shifted from audience research to pain research → concept generation → fast organized testing*. Reference [`/blog/creative-testing-framework`](../../../content/blog/creative-testing-framework.md) as the system for the "fast organized testing" half.
4. **10 things to change in your Meta + TikTok account this week** (H2, ~1,650w — the playbook, each item ~150-180w with H3):
   - **#1 — Simplify your campaign structure** (H3, Observation 1: fewer ad sets, 10-20+ creatives per ad set). **Workflow rule (gap-scan add):** when adding new creatives, drop them into the **existing** ad set, not a new one — spinning up new ad sets fragments learning (47-ad-set test thread + multiple practitioner confirmations). **Bridge:** this is exactly why bulk launch beats per-ad upload at this scale → link `/use-cases/bulk-ad-launch` with anchor "launch 10-20+ creatives per ad set in one go."
   - **#2 — Build creative "worlds", not micro-tweaks** (H3, Observation 2: Creative Diversity Score; World A/B/C examples; repurposing across video/carousel/static). **Mechanical why (gap-scan add, ~2 sentences):** Andromeda fingerprints similar ads as a single Entity ID and underspends the duplicates (True Classic case study). Worlds aren't aesthetic — they're how you avoid getting collapsed. "Worlds" come from **pain analysis → concept discovery**, not from tweaking buttons.
   - **#3 — Test static + carousels — don't run 99% video** (H3, Hack 1, attribute to Ruslan Dzhafarov's LinkedIn post; mention Threads carousel test).
   - **#4 — Turn off "AI Enhancements" until you A/B test it** (H3, Hack 2, Ruslan; explain the trust-killing AI tag; concrete setting path).
   - **#5 — Use Advantage+ with multi-format signal diversity** (H3, Hack 3, Ruslan; portrait/square/long/short + static/carousel/video across Reels/Feed/Stories/Threads).
   - **#6 — Build a web-to-app funnel with quizzes** (H3, Hack 4, Ruslan; quiz LP → trial purchase → app install). **Signal-quality add (gap-scan):** pair Pixel + CAPI on the web side; MMP One Links on the app handoff. ScaleMate doesn't integrate with MMPs — cite as workflow convention only ("Use AppsFlyer / Adjust / Branch One Links for the web→app handoff").
   - **#7 — Run web campaigns even if your product is a mobile app** (H3, Hack 5, Ruslan; new Landing Page Views goal, expand inventory & signal source).
   - **#8 — Optimize for Hook Rate (3-sec view rate)** (H3, Hack 6, Ruslan; the 35%/52%/67% example → 80% spend goes to highest hook; layer winning hooks onto videos that drive purchases). **Bridge:** this is testing-system territory → link `/blog/creative-testing-framework` with anchor "fast hook-rate testing system."
   - **#9 — Add Threads to your placements + carousel mix** (H3, Hack 7, Ruslan; Threads is testing carousel ads, engagement is high).
   - **#10 — Fix your attribution window — drop view-through, use 1-day click** (H3, NEW from gap scan). Practitioners report Andromeda inflates view-based attribution; switching to 1-day click stabilizes optimization signal. For app advertisers, 1-day click pairs cleanly with MMP attribution. Concrete setting path in Ads Manager. Sources: u/WizardOfEcommerce + multiple r/FacebookAds threads.
5. **What media buyers are reporting** (H2, ~250w) — 2-3 Reddit quotes pulled from this brief's pain section, properly linked + attributed. Includes the "Andromeda is a myth" skeptic counter-point so we look balanced.
6. **Andromeda + creative fatigue** (H2, ~200w) — short bridge: more creatives per ad set means fatigue cycles compress; Meta now rewards swapping in fresh creative "worlds" rather than near-duplicates. Internal link to [`/blog/what-is-ad-fatigue`](../../../content/blog/what-is-ad-fatigue.md) (anchor: "creative fatigue cycle" — we want this anchor to boost striking-distance pos 24 page).
7. **FAQ** (H2, ~350w, FAQPage schema) — 7 Qs (expanded from gap scan):
   - What is Meta Andromeda?
   - When did Andromeda launch?
   - How many creatives per ad set under Andromeda?
   - Does Andromeda apply to TikTok? (no, but same creative-diversity logic applies — bridge multi-platform angle)
   - Should I turn off AI Enhancements?
   - **Which attribution window should I use under Andromeda?** (NEW gap-scan FAQ — 1-day click answer with rationale)
   - **How many creatives is too many?** (NEW gap-scan FAQ — diminishing returns: 20+ is fine but only with budget per creative; under-budgeted volume just dilutes signal)
8. **CTA close** (H2, ~150w) — recap top 3 actions framed around creatives-as-lever:
   - Primary: **`/use-cases/bulk-ad-launch`** with anchor "launch 50+ creative variants across Meta + TikTok in one workflow" — this is the operational answer to "I need 10-20+ creatives per ad set, fast, organized."
   - Secondary: **`/blog/creative-testing-framework`** with anchor "creative testing system" — for readers who need the testing logic before tooling.
   - Tertiary (one mention only): **`/ad-creative-uploader`** as the upload mechanic inside the bulk-launch workflow, NOT as a standalone CTA.

---

## Title/Meta Direction

> Per `content-writing-rules.md` 4.1.1 — full pre-work below. Final variant selection runs through content-ops 6-criteria scoring at draft stage, not now.

### SERP patterns from pos 1-3 (live 2026-05-05)

**`meta andromeda` top-3:**
- engineering.fb.com — "Meta Andromeda: Supercharging Advantage+ automation for the next-gen of personalized ads retrieval engine" (technical, no year, brand in title since it's their own)
- r/FacebookAds — "Meta Andromeda Explained in Simple Words (No..." (community simplifier — "explained" + "simple words" pattern)
- facebook.com/business — "Unlocking the Power of Diversification with Meta Andromeda" (Meta's marketing voice)

**`meta andromeda update` top-3:**
- r/FacebookAds — "Meta Andromeda Explained in Simple Words" (same, ranks for both)
- r/FacebookAds — "I Was Wrong About 3:2:2 — Meta's Andromeda Update Forced..." (pain-first, "I was wrong" hook)
- r/FacebookAds — "My Practical Guide to Mastering Meta Andromeda" ("practical guide" + "mastering" — action-pattern)

**Patterns that win:**
- "Explained" + "Simple words" (community trust signal)
- "What changed / Practical guide / Mastering" (action verbs)
- Nobody puts a brand in title (all SERP is community/Meta-official) → **we follow same convention**

### Brand placement decision
**❌ Scalemate NOT in title.** Per 4.1.3, this is educational TOFU/MOFU + the SERP doesn't have any brand-in-title competitors. Putting "Scalemate" in title would break Google-alignment with intent + signal advertorial-ness. **Set `absoluteTitle: true` in frontmatter** (per 4.1.3 blog template suffix workaround) so `app/blog/[slug]/page.jsx` doesn't append `| Scalemate Blog`.

### Power elements to use (≥2 per 4.1.5)
1. **Specific number** — "10 things to change" (matches actual article structure: 9 hacks/observations + 1 attribution gap-scan add, honest per 4.1.4)
2. **Year marker** — "2026" (this is a recent update, year matters for freshness)
3. **Audience specificity (optional 3rd)** — "for Meta + TikTok teams" (multi-platform differentiator vs Reddit threads which are FB-only)
4. **Curiosity/promise of specificity** — "what changed + what to fix" pattern (matches "Practical Guide" winner)

### absoluteTitle flag
**YES, `absoluteTitle: true`** required in frontmatter — Andromeda update is alternative-style content where brand suffix would dilute (per 4.1.3 rule for non-branded TOFU).

### Draft title candidates (for content-ops scoring at draft stage — do NOT pick now)
1. `Meta Andromeda Update Explained: 10 Things to Change in Your Account (2026)` — 75 chars (over 60, trim at draft)
2. `Meta Andromeda Update: 10 Fixes for Meta + TikTok Teams (2026)` — 62 chars (multi-platform power element)
3. `Meta Andromeda Update: What Changed and 10 Things to Fix (2026)` — 63 chars (pain-pattern)
4. `What Meta's Andromeda Update Actually Changes (And 10 Fixes)` — 60 chars (matches adexchanger top-5 winning pattern)

### Draft meta candidates (for content-ops scoring at draft stage)
1. `Meta Andromeda update tanked your ROAS? 9 specific changes for UA teams running Meta + TikTok — including hook rate, creative "worlds", and the Advantage+ setup that wins now.` (170 chars — over, needs trim)
2. `Meta's Andromeda update changed how Meta picks ads. Here are 9 changes UA teams should make this week — campaign structure, creative diversity, hook rate, and more.` (165 chars — over, needs trim)
3. `Meta Andromeda explained: ads retrieval engine, creative diversity, hook rate. 9 specific changes for Meta + TikTok teams to make this week — without scaling headcount.` (165 chars — over, trim)

Final character-perfect variants generated at draft phase via 6-criteria content-ops panel.

### Cooldown guard (Step 6.5)
N/A — no existing URL for this slug. No prior metadata edits to defer.

---

## Unique Angle

A founder-voiced, mobile-UA-specific Andromeda playbook (Meta + TikTok scope) synthesizing 7 hacks from Ruslan Dzhafarov's public LinkedIn post + 2 internal Scalemate observations (Creative Diversity Score "worlds", simplified campaign structure with 10-20+ creatives per ad set) + 1 attribution-window add from competitor gap scan — with a **creatives-as-the-#1-lever** thesis: under Andromeda the work is *pain analysis → concept discovery → fast organized testing*, not audience optimization. CTA bridges to bulk launch + creative testing system, which no Reddit thread, agency blog, or Meta official page provides.

---

## Must Include

- [ ] **Internal links (4 minimum, anchored — primary CTA shifted to bulk launch + testing framework):**
  - **Primary CTA: [`/use-cases/bulk-ad-launch`](../../../app/use-cases/_data/bulk-ad-launch/index.jsx)** — anchor: "launch 10-20+ creatives per ad set in one go" (placed in Hack #1 + final CTA close). This is the operational answer to Andromeda's core ask.
  - **Secondary CTA: [`/blog/creative-testing-framework`](../../../content/blog/creative-testing-framework.md)** — anchor: "creative testing system" (placed in Hack #8 Hook Rate + intro framing + final CTA close). Bidirectional; existing page already mentions Andromeda line 147.
  - **Striking-distance boost: [`/blog/what-is-ad-fatigue`](../../../content/blog/what-is-ad-fatigue.md)** — anchor: "creative fatigue cycle" (placed in Andromeda + creative fatigue H2). Currently pos 24, striking distance.
  - **Tertiary (one mention only): [`/ad-creative-uploader`](../../../app/ad-creative-uploader/page.jsx)** — anchor: "upload mechanic" or similar, contextualized as a piece of the bulk-launch workflow, NOT a standalone CTA.
- [ ] **First-hand experience markers:**
  - Direct attribution to Ruslan Dzhafarov (Scalemate co-founder) for Hacks 1-7, with reference to the LinkedIn post (this signals E-E-A-T per `content-writing-rules.md` 6.3 rule 7)
  - Internal Scalemate observations for Observation 1 (campaign structure) + Observation 2 (Creative Diversity Score worlds) — phrase as "From accounts we operate alongside…" or "What we are seeing on accounts running 10-20+ creatives per ad set…"
  - Author byline = Ruslan Dzhafarov OR Natalia Bondar (per 4.1.11 — depends on which voice draft adopts; suggest **Ruslan as primary author** since 7/9 hacks come from his content)
- [ ] **Data points needed (from Natalia / Ruslan — see "Input Needed"):**
  - Real Hook Rate distribution example (if a real account permits a screenshot — currently cite the 35/52/67% pattern as "from a recent test")
  - One real before/after of "10-20+ creatives per ad set" reducing CPM or improving ROAS, if available from Appflame / Kitup accounts
  - Screenshot of "AI Enhancements" toggle in Ads Manager (free to capture, no client data) — boosts Experience signal
- [ ] **Schema:** `BlogPosting` (with `author`, `datePublished`, `dateModified`) + `FAQPage` for FAQ section
- [ ] **Date-stamped opening** — "(updated 2026-05-XX)" — algorithm-update articles age fast
- [ ] **Frontmatter `absoluteTitle: true`** — per 4.1.3 blog template suffix workaround
- [ ] **No HowTo schema** (deprecated per `content-writing-rules.md` 4.2 disclaimer)
- [ ] **No fabricated competitor numbers** — only cite engineering.fb.com's published +6% recall / +8% ad quality stats
- [ ] **Mobile-app/UA framing** — at least 3 explicit references that this playbook is for UA managers buying Meta + TikTok for apps & games (per memory: ScaleMate core expertise is mobile UA, not e-commerce / web)
- [ ] **Anti-AI sweep** — banned phrases per 6.3 ("dive into", "in today's fast-paced", "navigate the landscape", "unlock the power") must not appear

---

## Expected Impact

- **Cluster volume:** ~3,500/mo across 23 keywords (validated)
- **Realistic SERP target:** pos 4-8 within 4-6 weeks (DR caveat applies; Reddit dominance compresses but doesn't block organic placement — adexchanger, jonloomer, adscale all rank pos 4-7 for `meta andromeda update` despite low DR niche sites — proof we can fit there)
- **Estimated monthly clicks if pos 5-7:** at 1.5% CTR (AIO eats top), 3,500 × 0.5 (page-1 share of cluster) × 1.5% = **~25–30 clicks/mo**
- **Stretch (if pos 1-3):** 3,500 × 0.7 × 4% = **~95 clicks/mo**
- **Internal-link halo:** boosts `/blog/what-is-ad-fatigue` (pos 24 → striking distance ambition; already noted in action-list)
- **Business value:** TOFU/MOFU × 5/5 ICP fit × strong product bridge = **high.** This is exactly the audience we want signing up for `/ad-creative-uploader`. Discovery-agent action-list S2' scoring (T7 × I5 × B6 × C3 / E3 × U3 × ×1 = ~360) holds.
- **Authority play:** ranking on a high-recency Meta news topic improves topical authority for the broader creative-testing cluster.

---

## Input Needed from Natalia / Ruslan

1. **Confirm author byline** — Ruslan as primary author OR co-author with Natalia? (Recommendation: Ruslan, since 7/9 actions come from his LinkedIn post = strongest E-E-A-T signal.)
2. **Hook Rate concrete example** — is the 35%/52%/67% spread from a real account or illustrative? If real, can we phrase as "in a recent test on a [vertical] app account"? (Drives credibility per 4.1.4 honesty rule.)
3. **AI Enhancements screenshot** — quick capture of the Ads Manager setting path so we can show readers exactly where to find it (no client data exposure).
4. **Optional: Appflame / Kitup before/after** — any single ROAS or CPM number from "10-20+ creatives per ad set" structure that we can cite as "from accounts running Andromeda-aligned structures"?
5. **MMP scope clarification (Hack 4 web-to-app funnel)** — Ruslan's hack mentions MMP One Links. Confirm we cite this as a *workflow convention* without implying ScaleMate integrates with MMPs (per memory: no MMP integration yet). Suggested phrase: "Use MMP One Links (AppsFlyer / Adjust / Branch) to track the web→app handoff" — neutral mention.

If any of #2-#4 are unavailable, content-creator can proceed with #1 + #5 confirmed only — the article still works on Reddit-quote evidence + cited Meta engineering blog stats.

---

## References

- **Source material:** [`seo-system/plans/meta-andromeda-source-material.md`](../../plans/meta-andromeda-source-material.md) (Ahrefs cluster, 7 hacks PDF extract, 2 observations)
- **Source PDF:** `Scalemate Linkedin post 1_Andromeda Hacks_Ruslan Dzhafarov-2.pdf`
- **Existing Andromeda mention on site:** [`content/blog/creative-testing-framework.md`](../../../content/blog/creative-testing-framework.md) line 147–149
- **Internal-link boost target:** [`content/blog/what-is-ad-fatigue.md`](../../../content/blog/what-is-ad-fatigue.md) (pos 24, striking distance)
- **Product page bridge:** [`/ad-creative-uploader`](../../../app/ad-creative-uploader/page.jsx)
- **Action-list origin:** S2' in [`seo-system/action-lists/2026-05-04.md`](../../action-lists/2026-05-04.md)
- **Pipeline state:** [`seo-system/workflow/pipeline.md`](../../workflow/pipeline.md) §1 New
- **Ahrefs check date:** 2026-05-05 (subscription-info-limits-and-usage, keywords-explorer-overview, keywords-explorer-volume-history all run live)
- **SerpAPI check date:** 2026-05-05 (`meta andromeda` US num=10, `meta andromeda update` US num=10, `site:reddit.com meta andromeda` last-year filter)
- **GSC check date:** 2026-05-05 (90-day window, contains-filter `andromeda` and `meta andromeda` — both returned 0 rows)
