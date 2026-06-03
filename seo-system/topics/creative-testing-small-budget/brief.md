# Topic Brief: Creative Testing on a Small Budget (companion to LinkedIn post)

> Discovery run: 2026-06-03 (local, Loose mode, branch `main`).
> Trigger: Natalia is finalizing a LinkedIn post today on creative testing for $10K–$50K/mo accounts split across Meta + TikTok + Google. Question: is a companion blog worth writing or is LinkedIn enough?
> Companion artifact: interactive library at `/creative-testing-library` (13 methods, shipped 2026-05-12, see `app/creative-testing-library/methods-data.js`).

**Verdict: ✅ WRITE — but reframe.** Skip the "small budget" angle as a primary keyword (zero Ahrefs/GSC volume; no SERP). Target the head **`creative testing framework`** (Ahrefs 80 / KD 2 / DR 30 ranks) as the primary, with the small-budget pain as the editorial hook + bottom-of-page small-budget setup section. The LinkedIn post is a separate distribution channel — it does not replace the SEO play. Article also doubles as a top-of-funnel feeder for the BOFU `/creative-testing-library` page (currently 0 inbound blog links since the framework post was redirected into it on 2026-05-12).

Rules compliance: content-writing-rules.md sections 1.4, 2.2, 2.4, 3, 4.1, 5, 6.

---

## Keyword Data

Primary candidates (Ahrefs US, 2026-06-03):

| Keyword | Vol | KD | TP | Parent | SERP signal |
|---|---|---|---|---|---|
| `creative testing framework` | 80 | 2 | 70 | `creative testing framework` | **Pick — DR 30/38/44/58 in top-10, KD 2 = reachable.** Pos 4 is Reddit thread with "saved me a lot of money" — pain match |
| `ad creative testing` | 200 | 4 | 100 | `ad creative testing` | Top-10 has DR 8 (veicolo) + 3 Reddit; ad-ops intent. Secondary target |
| `creative testing` | 350 | 11 | 500 | `creative testing solutions` | Mixed intent (market-research + ad-ops). Too head + DR 39-100. Drop as primary |
| `ad creative testing platforms` | 350 | 0 | — | — | Listicle intent (we have `/blog/best-ad-testing-tools`) — feeder, not new article |
| `creative testing methods` | 80 | — | — | — | Library already targets this slug-adjacent — feed via internal links |
| `facebook creative testing` | 50 | 2 | 90 | `creative testing` | Secondary |
| `meta creative testing` | 30 | — | — | — | Secondary |
| `creative pre testing` | 50 | 0 | 40 | — | Market-research intent; skip |
| `creative testing strategy` | 0 | 3 | — | `facebook creative testing` | 0 vol, skip as primary; use in copy |
| `creative testing low budget` | 0 | — | — | — | **0 Ahrefs vol** — editorial hook only, not target keyword |
| `creative testing small budget` | 0 | — | — | — | Same — hook, not target |
| `3-3-3 creative testing` | 0 | — | — | — | 0 vol; Reddit 9-comment thread exists. Hook only |

**Primary target:** `creative testing framework` (80 / KD 2 / TP 70).
**Secondary:** `ad creative testing` (200 / KD 4), `facebook creative testing` (50 / KD 2), `meta creative testing` (30), `creative testing methods` (80).
**Editorial frames (no SEO value but high reader resonance):** "on a small budget", "without burning budget", "3-3-3 framework breakdown".

Trend: stable. `creative testing framework` parent topic established; Reddit thread velocity (10+ small-budget threads in last 3 months) confirms live demand.

## GSC Check (own-site)

Ran 90d (2026-03-04 → 2026-06-02), filter `query contains "creative test"`:
- **0 clicks across 40+ matching queries, 800+ impressions.** Pre-redirect baseline was `/blog/creative-testing-framework` (pos 9.6, 345 imp / 6d at T+1wk). Post-redirect impressions migrate to `/creative-testing-library`.
- High-impression queries we currently catch but don't convert: `creative testing tools` (250 imp pos 48), `creative testing platform` (85 imp pos 64), `ad creative testing platforms` (84 imp pos 29), `creative testing framework` (57 imp pos 32), `automated creative testing` (84 imp pos 35), `unity ads creative testing capabilities` (50 imp pos 9), `automated creative testing platforms` (7 imp pos 24).
- `query contains "small budget"`: **No data.** Zero impressions on small-budget framing.
- `query contains "3-3-3"`: 1 imp on `pilothouse 3-3-3 creative testing framework` (pos 8). Negligible.

**Read:** GSC confirms demand for the **head topic** (creative testing tools/framework/platforms) but **0 demand** for small-budget framing as a query. The pain is real on Reddit but not yet a Google query — small-budget angle = blog hook, not SEO target. Article unlocks ~600+ existing impressions on related queries currently sitting on pages 3-7.

## Existing Content Check

| URL | Status | Cannibalization risk | Decision |
|---|---|---|---|
| `/creative-testing-library` | Shipped 2026-05-12, interactive 13-method catalog, BOFU | LOW — different format + intent | Article links INTO library (TOFU/MOFU → BOFU) |
| `/blog/creative-testing-framework` | **301'd to `/creative-testing-library`** on 2026-05-12 (next.config.mjs) | — | Slot empty — new article does NOT collide with the redirect target slug (use different slug) |
| `/blog/creative-testing-methods` | **301'd to `/creative-testing-library`** | — | Same — slot empty |
| `/blog/best-ad-testing-tools` | Live, listicle on tools (S5'/S6'), MOFU | LOW — different intent (listicle of tools vs framework how-to) | Cross-link both directions |
| `/blog/what-is-ad-fatigue` | Live, TOFU definitional | None — adjacent topic | Cross-link from refresh-cadence mention |
| `/blog/meta-andromeda-update` | Pending Natalia review (§3), MOFU strategy | LOW — Andromeda-specific | Cross-link both directions when shipped |

**Cannibalization verdict per `feedback_cannibalization_diagnosis.md`:** NOT a cannibalization risk vs `/creative-testing-library`. Two intents:
- Library = BOFU interactive catalog ("I need a method, give me the menu").
- Blog = TOFU/MOFU narrative ("I need to understand what creative testing IS + how to start on my budget").
SERP confirms: top-10 for `creative testing framework` = narrative blog posts (Dragonfly, HunchAds, Pilothouse, Data Ally), NOT interactive catalogs. Different SERP shape → different article.

**Slug recommendation:** `/blog/creative-testing-framework-small-budget` OR `/blog/how-to-test-ad-creatives-small-budget`. Avoid `/blog/creative-testing-framework` exact-match (it's a permanent redirect; new file at that path would create a routing conflict).

## SERP Analysis (Ahrefs serp-overview, US, 2026-06-03)

### `creative testing framework` (primary target)

| Pos | URL | DR | Traffic | Note |
|---|---|---|---|---|
| 2 | dragonflyai.co/.../guide-to-building-a-robust-creative-testing-framework | 58 | 29 | Lead piece — robust guide format |
| 3 | hunchads.com/blog/creative-testing-on-meta | 65 | 14 | Meta-only |
| 4 | reddit.com/.../simple_creative_testing_framework_thats_saved_me_a_lot_of_money | 95 | 9 | **Pain query match — "saved me money" phrasing** |
| 5 | askattest.com + smartbear.com + bir.ch/blog/creative-testing-guide + dragonflyai.co | varies | — | bir.ch (DR 72 prev Revealbot) entry |
| 6 | pilothouse.co/post/meta-creative-testing-framework-the-3-3-3-approach-to-finding-winners | 38 | 6 | **3-3-3 specifically — direct competitor for this angle** |
| 7 | dataally.ai/.../mastering-creative-testing-framework | 44 | 5 | "Ultimate guide" angle |
| 8 | celtra.com/.../complete-guide-to-creative-testing | 75 | 4 | Enterprise creative production tool — not our SERP |
| 9 | linkedin.com/.../meta-creative-testing-frameworks-top-brands-use-2026-andrew-foxwell | 99 | 3 | LinkedIn newsletter (Foxwell) |
| 10 | gomarble.ai/.../creative-testing-framework-guide | 30 | 2 | **DR 30 ranks — proves DR-reachable** |

**SERP features:** AI Overview present (creative testing has it; framework variant likely inherits). PAA present.
**Dominant intent:** narrative blog "how to build a framework" + 1 Reddit pain thread. **Mixed Meta + multi-platform.**
**Can we win:** **YES.** DR 30 ranks pos 10; KD 2; top-3 are DR 38-65 blog posts — within reach within 3-6 months. Differentiation needed: small-budget framing + multi-platform (Meta + TikTok, not Meta-only like Pilothouse + HunchAds) + interactive library backing.

### `ad creative testing` (secondary, larger pool)

| Pos | URL | DR | Traffic | Note |
|---|---|---|---|---|
| 1 | qualtrics.com/marketplace/advertising-creative-testing/ | 91 | 95 | Market research — different intent |
| 3 | facebook.com/business/help/.../1423851372208214 | 100 | 106 | Meta docs |
| 4 | appsflyer.com/blog/.../creative-testing | 90 | 61 | MMP playbook |
| 5 | supermetrics.com/blog/ad-creative-testing-optimization | 79 | 22 | Data-side play |
| 6 | reddit.com × 3 | 95 | 18+ | Reddit cluster — pain-language demand |
| 7 | quantilope.com/.../ad-creative-testing | 64 | 23 | Market research |
| 8 | **veicolo-agency.com/ad-creative-testing — DR 8, traffic 10** | 8 | 10 | **DR 8 ranks pos 8 — proof anyone with intent-fit can rank** |
| 9 | shopify.com/blog/creative-testing | 96 | 23 | Cross-link target |
| 10 | system1group.com/test-your-ad | 70 | 313 | Pre-launch ad testing platform |

**Read:** mixed market-research + ad-ops intent. Reddit cluster pos 6 shows Google rewards pain-fit content. Veicolo DR 8 at pos 8 → SERP is winnable on relevance, not DR. We're a secondary target — primary target gives cleaner intent fit.

## Competitive Gap Analysis (top-3 `creative testing framework`)

| Source | Coverage | Gap (our differentiation) |
|---|---|---|
| Dragonfly AI (pos 2, DR 58) | "Robust framework" — Dragonfly is an AI creative-prediction tool, content steers to their product. Multi-step process, includes pre-flight testing. | Vendor-biased to Dragonfly product. Skips small-budget reality. No TikTok. |
| HunchAds (pos 3, DR 65) | "Creative Testing on Meta — Methodology" — Meta-only, focuses on broad CBO + DCT structure. | Meta-only. No multi-platform. No budget tiering. No interactive library to link to. |
| Pilothouse (pos 6, DR 38) | "Meta Creative Testing Framework: The 3-3-3 Approach" — single-method explainer. | Single-method (3-3-3). Doesn't address WHEN 3-3-3 fails (small accounts, multi-platform splits). No TikTok. |
| Reddit (pos 4) | OP shares one specific 6-creative ABO setup that worked at small budget. | Reddit answers a question; we can structure all the patterns + tooling. |

**Our gap to own:**
1. **Honest budget tiering.** "If you have <$100/day per platform, here's what works. $100-$500/day, here's the next tier. $500+/day, here's everything." Pilothouse + Dragonfly skip this.
2. **Multi-platform reality.** Meta + TikTok (Scalemate scope), not Meta-only. None of top-10 covers split budgets.
3. **When the academic frameworks fail.** 3-3-3 needs $50-150/day per ad set = $450/day floor. Meta A/B needs 7-day minimum. We frame the gap, then prescribe what to do instead.
4. **Library backing.** None has a 13-method interactive catalog. We have one shipped.
5. **First-hand operations voice.** Ruslan/Natalia 8+ years, KitUp + ZeptoLab proof, mobile-UA vocabulary (T1/T3, MAI, AEO, IPM).

## ICP Pain Research (Reddit, last 12 months)

**Thread activity:** 14+ active small-budget creative-testing threads on r/FacebookAds + r/PPC in past year, 8 in last 3 months. 5 threads have 20+ comments. **Demand is loud.**

### Top 10 direct quotes (verbatim from SERP snippets)

1. **"Give it 7 days and $100-150 per creative before you call it. That's the minimum viable test at your budget. Anything faster and you're just paying for randomness."**
   - r/FacebookAds, "Low budget creative testing ($100/day) what's your actual…", 2026-04, 20+ comments
   - https://www.reddit.com/r/FacebookAds/comments/1s26c47/low_budget_creative_testing_100day_whats_your/

2. **"Hey everyone, I manage the ads for a small company, and I'm trying to understand how to actually implement creative testing under Meta's new Andromeda system…"**
   - r/FacebookAds, "Small budget problems creative testing under Meta's new…", 2026-01, 20+ comments
   - https://www.reddit.com/r/FacebookAds/comments/1ph7ugy/small_budget_problems_creative_testing_under/

3. **"How do you test multiple creatives without burning too much budget on Meta ads? What's the best strategy to test multiple creatives while still…"**
   - r/FacebookAds, "How do you test multiple creatives without…", 2025-10, 1 comment (low engagement, but exact pain match in title)
   - https://www.reddit.com/r/FacebookAds/comments/1npkn5y/how_do_you_test_multiple_creatives_without/

4. **"At $100/day, you cannot test more than 2-3 creatives simultaneously. Splitting $100 across 5 ads gives you $20/creative/day — that's noise, not signal."**
   - r/FacebookAds, "Low budget creative testing ($100/day)…", 2026-04
   - https://www.reddit.com/r/FacebookAds/comments/1s26c47/low_budget_creative_testing_100day_whats_your/

5. **"When I say small budget I mean anything below $100 daily. This strategy applies to bigger budgets as well! There's a few pre-requisites you…"**
   - r/FacebookAds, "How to not waste your small budget on testing creatives", 2025-07, 7 comments
   - https://www.reddit.com/r/FacebookAds/comments/1l7leji/how_to_not_waste_your_small_budget_on_testing/

6. **"With €15/day, testing all 4 ads at once might spread the budget too thin. Plan B is better, test 2 ads at a time in separate ad sets with equal…"**
   - r/PPC, "How would you test 4 creatives with a low budget for lead…", 2025-05, 3 comments
   - https://www.reddit.com/r/PPC/comments/1kdv11r/how_would_you_test_4_creatives_with_a_low_budget/

7. **"When budgets are small, I feel the biggest risk isn't targeting, it's choosing the wrong creative angle to test first. Sometimes the first few tests…"**
   - r/PPC, "How do you decide which ad creative to test first when…", 2026-04, 20+ comments
   - https://www.reddit.com/r/PPC/comments/1rqvz5x/how_do_you_decide_which_ad_creative_to_test_first/

8. **"I'm running Meta ads for a B2C SaaS and would love some advice on structure at a small budget. Right now: 1 campaign using CBO, 1 ad set…"**
   - r/FacebookAds, "Advice for testing on low budget $20 a day?", 2026-04, 8 comments
   - https://www.reddit.com/r/FacebookAds/comments/1rzw6fh/advice_for_testing_on_low_budget_20_a_day/

9. **"Two weeks of testing creatives and audiences with zero sales usually rules the ads out. When a dozen variations all produce nothing, the…"**
   - r/FacebookAds, "Burned Ad Budget for My Spiritual Brand…", 2026-05, 10+ comments
   - https://www.reddit.com/r/FacebookAds/comments/1tmnve5/need_advice_burned_ad_budget_for_my_spiritual/

10. **"Manually juggling creative, targeting, and strategies with limited data often means getting stuck or killing ads prematurely."**
    - r/FacebookAds, "When to kill a testing creative?", 2026-03, 8 comments
    - https://www.reddit.com/r/FacebookAds/comments/1rckikv/when_to_kill_a_testing_creative/

**Bonus pain quotes (corroborating):**

11. **"Testing Budget: Set your testing CBO at 2-3x your target CPA per ad set. So if your break-even CPA is $30, budget $60-90 per ad set in the…"** — r/FacebookAds, "Road to $1k/day", 2026-03, 10+ comments — https://www.reddit.com/r/FacebookAds/comments/1qwx7vk/road_to_1kday_need_advice_on_cbo_scaling_and/

12. **"This technique involves creating 3 ad sets all targeting the exact same audience with the exact same creative."** (3-3-3/3x3 misunderstanding) — r/PPC, "The Facebook Ads 3x3 Method", 9 comments — https://www.reddit.com/r/PPC/comments/tk3n9w/the_facebook_ads_3x3_method/

13. **"Seems to me like split testing on meta is pointless and obsolete nowadays. Well, suppose I have 5 creatives and I'm not sure which is better…"** — r/PPC, "Testing on Facebook ads is dead?", 8 comments — https://www.reddit.com/r/PPC/comments/1g0kzv9/testing_on_facebook_ads_is_dead/

14. **"Simple creative testing framework that's saved me a lot of money"** — r/FacebookAds, ranks pos 4 on `creative testing framework` SERP — https://www.reddit.com/r/FacebookAds/comments/1qwv4ky/simple_creative_testing_framework_thats_saved_me/

### Pain language clusters (use in H1/intro/H2s)

- **"Burning budget on testing"** — "burn through ad budget", "without burning too much budget", "burned $10K with no sales"
- **"$20/creative/day is noise, not signal"** — math problem: splitting too thin
- **"Killing ads prematurely"** — fear of stopping a winner before it learns
- **"Spread too thin"** / **"choosing the wrong angle to test first"** — paralysis of first move
- **"Two weeks with zero sales"** — emotional, dollar-specific
- **"Meta's new Andromeda system"** — recency, confusion about new algorithm
- **"$50-70 per day over a week to start getting meaningful results"** — realism on minimums

### Scale of pain

- 14+ threads on small-budget creative testing in past 12 months across r/FacebookAds + r/PPC.
- 5 threads with 20+ comments (high engagement signal).
- Pain spikes around Andromeda rollout (March 2026) — see Pain Quote #2 from January.
- Existing workarounds: Pilothouse 3-3-3 (cited verbatim), ABO 1-ad-per-ad-set ($40/day floor), separate testing campaigns, Meta native A/B test (gated by 7-day minimum).
- **Emotional triggers (in order):** wasting limited budget → confusion about Andromeda → can't get statistical significance → "is testing on Meta even worth it anymore?"

## Content Plan

| Field | Value |
|---|---|
| Type | Blog (Track A — how-to/guide) |
| Template | `content-writing-rules.md` §2.3 Track A how-to |
| Target length | 2,000-2,500 words |
| JTBD group | A — "find winners without wasting budget" |
| Funnel stage | TOFU/MOFU (search-intent capture → library = BOFU) |
| ICP | UA Manager / Media Buyer / Founder running ads in-house at $10K-$50K/mo |
| Schema | Article + FAQPage + BreadcrumbList |
| Internal links (min 5) | `/creative-testing-library` ×2 (anchor: "creative testing methods catalog", "all 13 testing methods"), `/blog/best-ad-testing-tools`, `/blog/meta-andromeda-update` (once shipped), `/blog/what-is-ad-fatigue`, `/use-cases/bulk-ad-launch`, `/automation-rules-library` |
| External links | Meta Help Center A/B docs, AppsFlyer creative testing playbook (authoritative, not direct competitor) |
| OG image + cover | Reuse library brand palette; new SVG: "$300/day budget map" |
| absoluteTitle | TBD by Title/Meta direction below |

### Outline (proposed)

```
H1: How to Test Ad Creatives on a Small Budget (Without Burning It) — Meta + TikTok 2026
TL;DR (3-5 bullets — LLM citation ready)
Why "small budget" breaks academic frameworks (3-3-3 / Meta A/B)
  → Math: 3-3-3 floor = $450/day. Meta A/B = 7-day cycle. Where the gap is.
The honest budget tiers (with Reddit quotes)
  Tier A: <$100/day per platform — 1 ad set, 2-3 creatives, $50-150/day, ABO
  Tier B: $100-$500/day per platform — modified 3-3-3, 3 concepts × 1 ad each, 72h
  Tier C: $500+/day per platform — full 3-3-3 or 3-2-2 sprint
Multi-platform reality: how to split when Meta + TikTok + Google each take $200/day
What changed under Andromeda (Mar 2026) — load 7-20 diverse variants in one broad ad set; lower hood feed
Common small-budget mistakes (each = Reddit pain quote)
  1. Splitting $100 across 5 ads ($20/day each = noise)
  2. Killing creatives before learning phase
  3. Running Meta A/B test when you only have $50/day
  4. Testing 4 angles + 4 audiences at once = multi-variable mess
How to actually call a winner on small budget (decision rules)
  - CPA ≤ 1.5× target by Day 3 — keep
  - CTR < 0.5% after 500 imp — kill (auto)
  - Hook rate < 1.2× control after 2K imp — kill
When to upgrade your testing method (graduating to 3-3-3, Meta A/B, Lift)
Where Scalemate fits (auto-pause rules at the threshold, bulk launch saves manual time — not "we make creatives")
   → contextual CTA to /creative-testing-library
FAQ (5-6 questions from Reddit / PAA)
  - What's the minimum budget for creative testing on Meta?
  - Is 3-3-3 worth it on a small budget?
  - Should I use Meta's A/B test feature on a small budget?
  - How long should I run a test before killing it?
  - How many creatives can I test at $100/day?
  - Does creative testing still work post-Andromeda?
```

## Title/Meta Direction

**Cooldown check:** URL is new (`/blog/creative-testing-framework-small-budget` or similar) — no Monitoring row. Cooldown not applicable.

**SERP patterns (pos 1-3 for `creative testing framework`):**
- Pos 2 (Dragonfly): "Guide to Building a Robust Creative Testing Framework" — generic
- Pos 3 (HunchAds): "Creative Testing on Meta — Methodology explained" — Meta-only, explanatory
- Pos 6 (Pilothouse): "Meta Creative Testing Framework: The 3-3-3 Approach to Finding Winners" — specific method
- All include `creative testing framework` exact phrase

**Brand in title:** NO (per `feedback_no_brand_suffix_in_titles.md` + 4.1.3 — this is alternative/listicle-adjacent TOFU). Use `absoluteTitle: true` to bypass `| Scalemate Blog` template suffix.

**Power elements available:** specific number ($100/day), year (2026), audience specificity (small budget), pain acknowledgment (without burning), platform specificity (Meta + TikTok).

**Recommended title variants (to score via content-ops at writing stage):**

1. "Creative Testing Framework for Small Budgets ($100-$500/day) — Meta + TikTok 2026" — 79 char (OVER, trim)
2. "How to Test Ad Creatives on $100/Day (Without Burning Budget) — 2026" — 67 char (OVER, trim)
3. "Creative Testing on a Small Budget: $100/Day Framework for Meta + TikTok" — 73 char (OVER)
4. "Small-Budget Creative Testing: A Meta + TikTok Framework for 2026" — 64 char (OVER by 4)
5. "Creative Testing Framework on $100/Day (Meta + TikTok, 2026)" — 60 char ✓
6. "How to Test Ad Creatives Without Burning Budget (Meta + TikTok 2026)" — 67 char (OVER)
7. "Small-Budget Creative Testing Framework: $100/Day, 2026" — 55 char ✓
8. "Creative Testing on $100/Day: A Framework for Meta + TikTok" — 59 char ✓

**Top 3 to score at write stage:** #5, #7, #8.

**Meta description (150-160 char), 3 variants:**

A. "Most creative testing frameworks assume $500+/day. Here's how to test ad creatives on $100/day across Meta and TikTok in 2026 — without burning budget." (153 char ✓)
B. "3-3-3 needs $450/day. Meta A/B needs 7 days. Here's the creative testing framework that actually works on $100-$500/day across Meta and TikTok." (151 char ✓)
C. "How to test ad creatives on a small budget across Meta + TikTok. Honest budget tiers, decision rules, and where 3-3-3 stops working in 2026." (151 char ✓)

## Unique Angle (1-2 sentences)

The only blog that admits academic frameworks (3-3-3, Meta A/B, Conversion Lift) have a budget floor, math out the floor explicitly, and prescribe a three-tier path that scales with the ad account. Multi-platform (Meta + TikTok in scope per `scalemate_channel_scope.md`), grounded in 14 Reddit threads of live pain, and backed by an interactive 13-method catalog (`/creative-testing-library`) that no top-10 SERP entrant has.

## Must Include

- [ ] **Internal links (min 5):** `/creative-testing-library` × 2 (contextual: methods catalog, then in CTA), `/blog/best-ad-testing-tools`, `/blog/what-is-ad-fatigue` (refresh cadence section), `/use-cases/bulk-ad-launch`, `/automation-rules-library` (auto-kill threshold section). Add `/blog/meta-andromeda-update` once it ships.
- [ ] **First-hand experience markers:** Ruslan/Natalia 8+ years (per `nataliia_bondar_experience.md`); KitUp + ZeptoLab vertical proof (NDA-safe per `feedback_client_name_confidentiality.md`); mobile-UA vocab callout for IPM/CPI/d3 retention (cheap-geo as an answer for mobile UA only); explicit "we run rules at this exact threshold in production" voice.
- [ ] **Data points needed from Natalia:**
  - Internal budget-tier observations: at what daily budget have you seen 3-3-3 actually work? (Confirm $450/day floor.)
  - Approved screenshot of `/creative-testing-library` for inline image.
  - 1-2 sentence quote from Ruslan on the "Andromeda + small budget" combo (matches LinkedIn post voice).
- [ ] **Schema:** Article + FAQPage + BreadcrumbList. Author: Nataliia Bondar (`/authors/nataliia-bondar`).
- [ ] **Pain language carry-overs in copy:** "burning budget", "$20/creative/day = noise, not signal", "killing ads prematurely", "spread too thin", "$50-70/day to start getting meaningful results" — paraphrased per `feedback_no_research_source_in_copy.md` (no "Reddit users say"; state in our voice).
- [ ] **Frameworks vocab:** 3-3-3, 3-2-2 sprint, Meta A/B, Conversion Lift, Cheap Geo / WW MAI / Cheap Geo + AEO / Mirror-BAU (mobile-UA only) — link each to library card.
- [ ] **Mobile UA vocab where relevant:** T1/T3, MAI, AEO, BAU, IPM, CPI, d3 retention (per `feedback_mobile_ua_testing_frameworks.md`) — only in mobile-UA carve-out section, not whole article.
- [ ] **No "creative production" pitch.** Per `feedback_product_scope.md` and `feedback_hero_uses_audience_vocab_not_product_terms.md` — Scalemate position is analysis + automation + reporting, NOT creative generation. CTA = "automate the testing workflow" not "make better creatives."
- [ ] **No "Reddit users say":** paraphrase pain in our own voice.
- [ ] **Concise + scannable per `feedback_concise_scannable_copy.md`:** bullets, sub-200-word sections, diagram-replace-prose where possible.

## Expected Impact

- **Primary keyword ranking ceiling:**
  - 3 months: pos 8-12 (entry on a KD 2 SERP with DR 30+ already ranking pos 10 + good intent fit). Realistic.
  - 12 months: pos 4-7 (passing Pilothouse + Data Ally + gomarble; under Dragonfly + HunchAds without DR boost).
- **Secondary `ad creative testing` ranking:** pos 12-20 in 3 months, pos 8-12 in 12 months (DR-locked but veicolo DR 8 ranks pos 8 — winnable on relevance).
- **Estimated monthly clicks if top-5 across cluster (3-6 months):** 40-80 clicks/mo combined (`creative testing framework` 70 TP × 0.3 CTR = 21 + secondary cluster 200+ TP × 0.1-0.2 CTR + long-tail catch). Conservative.
- **Pickup of existing 600+ GSC impressions:** queries like `creative testing tools` (250 imp), `creative testing platform` (85 imp), `automated creative testing` (84 imp) — currently pos 25-65, moving to pos 15-25 = additional 20-40 clicks/mo.
- **Business value:** MOFU feeder to BOFU `/creative-testing-library` (currently has no organic blog traffic since the framework post 301'd in). Article unlocks search-intent capture above the library funnel.

## Funnel & Conversion Assessment

| Criterion | Score |
|---|---|
| Funnel stage | MOFU (research) → primary CTA = library (BOFU) |
| Steps to sign-up | 3 (read article → click into `/creative-testing-library` → try free / book demo) |
| ICP fit | 4/5 — UA Manager / in-house Media Buyer is bullseye; agency PPCers also fit |
| Product page link | Direct (library = product-adjacent; rules library + bulk launch CTAs flow naturally) |

**Score logic:** MOFU article that anchors the BOFU library = exactly the architecture we'd want for the library. Higher LTV than pure TOFU because reader is in active diagnosis mode ("I'm wasting budget right now").

## Input Needed from Natalia

- [ ] Confirm primary slug: `/blog/creative-testing-framework-small-budget` vs `/blog/how-to-test-ad-creatives-small-budget` vs `/blog/creative-testing-small-budget`
- [ ] Approve `absoluteTitle: true` (skip `| Scalemate Blog` suffix per 4.1.3)
- [ ] Verify the $450/day floor for 3-3-3 (3 ad sets × $50-150/day) lands with your operational experience
- [ ] OK to lift 1-2 Ruslan LinkedIn quotes into article? (Mirrors LinkedIn voice + creates LinkedIn→blog→library funnel)
- [ ] OK to use KitUp + ZeptoLab as named vertical proof (per `feedback_client_name_confidentiality.md` — approved public)
- [ ] LinkedIn post + blog publish order: LinkedIn first (today) → blog 3-7 days later? Or simultaneously?

---

## Audit trail

- 2026-06-03 — Discovery agent (Opus 4.7, local Loose mode).
- Data sources: Ahrefs Keywords Explorer (overview + matching-terms + related-terms + SERP overview, US, snapshot 2026-06-03), GSC API (sc-domain:scalemate.co, last 90d, queries containing "creative test", "small budget", "3-3-3"), SerpAPI Google (Reddit pain mining, 4 search rounds).
- Ahrefs usage this run: ~3,500 units (well under monthly cap).
- Existing-content check via repo file scan + `next.config.mjs` redirects + git log `creative-testing-framework.md` (deleted in commit `a216853` 2026-05-12).
