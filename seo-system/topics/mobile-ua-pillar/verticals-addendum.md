# Mobile UA Pillar — Verticals Split Addendum (2026-05-12)

> Extends [`scoping.md`](./scoping.md). Question: should we split the mobile UA pillar by vertical (gaming / subscription / e-com / fintech / utility) beyond the current games-satellite + apps-inside-cornerstone approach?

> **⚠️ REVISED 2026-05-12 (afternoon, 2 rounds)** — original §3 product-fit (subscription = Weak) + MMP-gap severity + KitUp-as-gaming classification were all wrong, built on stale memory + miscategorized customer logos.
>
> **Corrected facts:**
> - **Adjust integration is SHIPPED.** Automation rules use MMP signals (D7 ROAS, paid subscribers, IAP events). MMP→Meta event passback is standard infra — Meta DOES see subscription/purchase events when MMP is configured.
> - **AppsFlyer + Singular** — added **on customer request** (no fixed timeline). Framing: "your MMP plugs into your workflow," not "Q3 2026 ship."
> - **KitUp (subscription app, published by OuroMedia) = ONE customer relationship**, not two. Live case study at `/customers/kitup` (real metrics: 30k+ ads, 15K+ meta ads, 35 hrs/mo saved, ROAS boost). ZeptoLab (Cut the Rope, Bullet Echo) = gaming, live case study at `/customers/zeptolab`. Both LIVE today, no NDA wait, M1 cornerstone can internal-link from day 1.
> - Subscription apps fit Weak → **Strong**. Same high-creative-volume operational pain as gaming, different monetization model.
>
> **Final slate verdict unchanged** (still 0 vertical satellites added) BUT reasoning flips: "right product fit, too little search demand on cluster level — served via cornerstone + customer case study + Tier 2 MMP-aware positioning." See §3 (revised), §5 (revised reasoning), §6 (revised proof carrier + cornerstone copy).

## TL;DR

- **Recommendation: DO NOT split further.** Keep the consolidated cornerstone + 1 games satellite (as already specified in scoping.md §7). Net slate change: **0 items added**.
- **The vertical-search hypothesis fails empirically.** Subscription apps, e-com apps, and utility apps return **near-zero clean UA-search demand** at vol ≥ 30 / KD ≤ 40 (e.g., `subscription app marketing` = 0 vol; `dating app marketing` = 10 vol; `fitness app marketing` = 30 vol; `ecommerce app marketing` cluster = ~300 vol but retargeting-only). There is no SEO opportunity to capture even if we built the pages.
- **The only vertical with real demand — fintech (~6.5K vol/mo cluster) — is a parent-topic false signal.** `fintech marketing agency` (1,000 vol KD 1) drives the cluster. Intent is "find me an agency." Scalemate is not an agency. SERPs are DR 30-76 agency landings — Scalemate could rank but would attract zero-fit traffic. Same false-signal trap as `user acquisition agency` flagged in scoping.md §1.
- **Competitor-IA mimicry would be wrong.** AppsFlyer / Singular / Adjust split by industry because they measure across all verticals — they need a landing per vertical for credibility. Pure ad-ops peers (Smartly, Madgicx) don't split by mobile vertical. Scalemate sits in the second camp (execution layer on Meta+TikTok). Splitting would copy the wrong category's IA.
- **How vertical readers get served instead:** (a) one-paragraph vertical callouts inside the cornerstone (apps + games + subscription-named-by-example), (b) customer case studies as the proof carrier (**`/customers/kitup` = subscription proof, ZeptoLab `/customers/zeptolab` = gaming proof — both LIVE today**), (c) the existing `/customers/?industry=<vertical>` filter (deferred to post-M3 per scoping.md §6).

## Method

**Sources used (all 2026-05-12):**
- Ahrefs `keywords-explorer-overview` + `keywords-explorer-matching-terms` (US) on 30+ vertical seeds covering subscription, e-com, fintech, utility, paywall, catalog ads.
- Ahrefs `serp-overview` top-10 + DR pull on 4 highest-(TP × intent-fit) vertical keywords: `fintech marketing strategy`, `dynamic product ads`, `dating app marketing`, `mobile app retargeting`.
- WebFetch competitor IA: AppsFlyer, Singular, Branch, SplitMetrics, Madgicx (Smartly + Adjust returned HTTP 404 / 429 — substituted with scoping.md §4 evidence).

**Data freshness:** all 2026-05-12. Same DR-assumption framework as scoping.md (Scalemate DR < 30; SERPs with min top-10 DR > 50 treated as unreachable near-term).

**Threshold for "this vertical earns a satellite":**
1. Cluster non-branded vol ≥ 300/mo
2. SERP min-DR-top10 ≤ 50
3. Scalemate honest product-fit = Strong or Partial (not Weak/None)

A vertical must clear ALL THREE to earn a satellite.

## 1. Vertical demand map

| Vertical | Cluster size (≥30 vol, KD ≤ 40) | Total vol/mo | TP range | KD range | AI Overview | Top intent | False-signal flags |
|---|---|---|---|---|---|---|---|
| **Subscription apps** | **0 keywords** | **0** | n/a | n/a | n/a | n/a | `subscription app marketing` = 0 vol. `dating app marketing` = 10 vol. `fitness app marketing` = 30 vol KD null. `paywall optimization` = 80 vol KD 1 but TP null + isolated. `freemium conversion rate` = 80 vol, `freemium conversion rate benchmarks` = 50 vol KD 26. Total clean UA-relevant demand: ~130 vol/mo combined. **Below the 300 vol threshold by 2×.** |
| **E-commerce apps** | 3 keywords | ~300 | 40-150 | 6-12 | No | Informational + commercial | All 3 are retargeting-flavored (`mobile app retargeting` 150 vol, `app retargeting` 100 vol, `shopify retargeting app` 50 vol). No general "e-com app marketing" head term exists. Adjacent cluster: **catalog/DPA ads** (`dynamic product ads` 250 vol, `meta catalog ads` 200 vol, `meta dpa` 80 vol, `tiktok catalog ads` 70 vol — ~1,300 vol total). This is feature-led, not vertical-led: belongs inside `/features/bulk-launch` content or a Meta-Advantage+ blog, NOT inside a `/use-cases/ecommerce-mobile-ua` vertical landing. |
| **Fintech apps** | 30+ keywords | ~6,500 | 50-2,100 | 0-28 | No | **Commercial — but agency-services intent** | **PARENT-TOPIC FALSE SIGNAL.** `fintech marketing agency` 1,000 vol + `fintech digital marketing agency` 700 vol + `marketing agency for fintech` 250 vol + `fintech marketing firm` 150 vol + `fintech marketing company` 150 vol + `fintech content marketing agency` 200 vol drive the cluster. Parent_topic across cluster: `fintech marketing agency` / `fintech digital marketing agency` / `fintech marketing`. Intent = directory of agencies. Scalemate is not an agency. Same trap as `user acquisition agency` flagged in scoping.md §1. Sub-cluster `fintech user acquisition` = unmeasured (returned no data on direct seed pull). |
| **Utility / IAA apps** | 0 clean | 0 | n/a | n/a | n/a | n/a | **TOTAL FALSE-SIGNAL CLUSTER.** Seed `iaa` returns 25 results all = Insurance Auto Auctions (local salvage car auction locations: IAA Phoenix, IAA Houston, IAA Atlanta, etc. — local branded intent). `app monetization` = 600 vol KD 24 BUT parent_topic = `admob`, intent = publishers using Google AdMob to monetize their app (NOT advertisers acquiring users on utility apps). Off-scope for Scalemate channel scope (no AdMob / no SDK networks). |
| **Gaming** (baseline) | 4-12 keywords per scoping.md §1 | ~550 (sub-vertical) — ~1,300 if combined with mobile UA head | 150-250 | 2-3 | Yes | TOFU informational | **CLEAN — confirmed in scoping.md.** Already covered by M4b satellite. |
| **Subscription paywall (B2C false signal)** | 25+ keywords | ~140,000 vol (!) but all noise | n/a | 34-71 | n/a | **Branded consumer intent — NEWS PAYWALL BYPASS** | `paywall bypass` 46K, `paywall remover` 42K, `remove paywall` 25K, `bypass paywall` 15K, `paywall` 15K. **100% consumers trying to read NYT/WSJ articles for free.** Zero overlap with subscription-app marketers optimizing their own paywall. Drop entirely. |

**Verdict on demand:** Of the 5 verticals investigated beyond gaming, **zero clear the 300-vol clean-intent threshold**. Fintech APPEARS to clear it on aggregate volume but is a different product category (agency intent). E-commerce hits exactly 300 in retargeting and partially via catalog ads (1,300 vol), but it's feature-led not vertical-led. Subscription, utility, paywall — all fail.

## 2. SERP intent + DR reachability per vertical

Only the verticals that had ANY usable demand were SERP-tested. Subscription + utility didn't justify a SERP pull (cluster vol below threshold).

### `fintech marketing strategy` (350 vol, KD 1, TP 700)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | improvado.io/blog/fintech-marketing-strategies | Vendor (martech analytics) | 76 |
| 3 | fullyvested.com/insights/...fintech-marketing-strategy | Agency landing | 46 |
| 4 | powerdigitalmarketing.com/blog/fintech-marketing-strategy | Agency blog | 73 |
| 5 | yesandagency.com/fintech-marketing-strategies-how-to... | Agency landing | 49 |
| 6 | nytlicensing.com/.../fintech-content-marketing-definition... | Publisher | 71 |
| 7 | cstmr.com/financial-marketing-services/marketing-strategy/ | Agency landing | 38 |
| 9 | rightleftagency.com/fintech-marketing-strategy/ | Agency landing | 33 |
| 10 | bluetrain.co.uk/blog/best-fintech-marketing-campaigns/ | Agency blog | 30 |

**Min DR top-10: 30. Reachable.** BUT — all 10 top results are **agencies or agency-adjacent publishers**. Page format = "Hire us to grow your fintech." Scalemate would need to write an agency-flavored fintech-marketing page to fit the SERP. That misrepresents the product. Verdict: **DR-reachable, format-mismatched. Skip.**

### `dynamic product ads` (250 vol, KD 9, TP 700)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | facebook.com/business/m/one-sheeters/dynamic-ads | Meta-owned | 100 |
| 4 | business.reddit.com/.../dynamic-product-ads | Reddit Business landing | 95 |
| 5 | business.x.com/.../dynamic-product-ads-campaign | X Business landing | 97 |
| 6 | adjust.com/glossary/dynamic-ads/ | MMP glossary | 90 |
| 7 | channable.com/blog/dynamic-product-ads-guide | Feed mgmt SaaS | 75 |
| 8 | advertising.amazon.com/library/guides/dynamic-ads | Amazon Ads | 96 |
| 9 | reddit.com (3 threads) | Aggregator | 95 |
| 10 | developers.facebook.com/.../dynamic-product-ads | Meta-owned | 100 |

**Min DR top-10: 75. Unreachable.** Same dead-zone trap as `app install ads` (scoping.md §1) — ad-platform self-hosted properties + MMP glossaries lock it in. Verdict: **skip.**

### `dating app marketing` (10 vol, KD 1) — subscription-app proxy

| Rank | URL | Page type | DR |
|---|---|---|---|
| 1 | reddit.com/r/DigitalMarketing/.../market_dating_app | Aggregator | 95 |
| 2 | reddit.com / community.hubspot.com / forum | Aggregator | mixed |
| 3 | moloco.com/.../tinder-marketing-strategy-unpacked | Ad network blog | 74 |
| 5 | bettermarketing.pub/swiping-right-on-brand... | Medium pub | 73 |
| 7 | linkedin.com/pulse/...dating-apps-taught-me-b2b... | LinkedIn post | 99 |
| 8 | matchmediagroup.com/ | Vertical ad network (Match Group's ad network) | 61 |
| 9 | adjust.com/blog/how-to-market-a-dating-app/ | MMP guide | 90 |
| 10 | chipperdigital.io/dating-apps/ | Niche agency | 10 |

**Min DR top-10: 10. Reachable on paper.** BUT volume is **10/mo**. Even pos-1 would yield <5 clicks. Verdict: **demand too thin.**

### `mobile app retargeting` (150 vol, KD 6, TP 100) — e-com proxy

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | adjust.com/glossary/retargeting/ | MMP glossary | 90 |
| 3 | businessofapps.com/guide/mobile-app-retargeting/ | Industry guide | 86 |
| 4 | branch.io/.../mobile-app-retargeting-benefits | Deep-linking platform | 81 |
| 5 | adroll.com/blog/mobile-app-retargeting-best-practices | Retargeting platform | 87 |
| 6 | remerge.io/.../app-retargeting-in-the-privacy-first-era | Retargeting platform | 70 |
| 7 | criteo.com/products/mobile-app-advertising/ | Ad network | 90 |
| 8 | aarki.com/insights/...mobile-app-retargeting | Ad network | 70 |
| 9 | reddit.com (3 threads) | Aggregator | 95 |
| 10 | z2adigital.com/.../mobile-app-retargeting-strategies | Agency blog | 40 |

**Min DR top-10: 40. Reachable but tight.** SERP is owned by retargeting-network/platform pages. Scalemate doesn't sell retargeting placements — we sit on top of Meta/TikTok where retargeting is a built-in setting, not a category. Format mismatch. Verdict: **skip as standalone; if covered, fold into M4a pillar as a sub-section on Meta retargeting.**

## 3. Scalemate product fit per vertical (honest) — REVISED 2026-05-12 afternoon

> Original table had subscription = Weak and e-com = Partial-with-high-MMP-gap. Both were wrong — built on the stale "no MMP integration" assumption. Corrected per Natalia: Adjust shipped, automation rules use MMP signals (D7 ROAS, paid subscribers, IAP). Subscription-app paying customers exist. Subscription + gaming share the same high-creative-volume operational pain.

Applying the 4 capabilities (bulk launch / automation rules / creative upload / AI assistant) honestly to each vertical, with Adjust integration as the new baseline (AppsFlyer + Singular on roadmap):

| Vertical | Product-fit verdict | Reason | MMP coverage status |
|---|---|---|---|
| **Gaming** | **Strong** | Soft-launch geo testing, hook-rate creative testing, high-velocity creative rotation, fatigue auto-pause. Adjust rules can drive ROAS-aware decisions (D7 ROAS scale-ups, IAP-event rotation). **ZeptoLab (Cut the Rope, Bullet Echo) proof exists.** | **Adjust shipped.** AppsFlyer/Singular on customer request (no fixed timeline). |
| **Subscription apps** | **Strong** *(revised from Weak)* | High creative volume (weekly refresh across geos / audiences / paywall variants) = native bulk-launch territory. Adjust integration reads paid-subscriber + D7 ROAS events → rules can act on trial→paid conversion signals, not just CPI. **KitUp (subscription app, published by OuroMedia) proof LIVE at [`/customers/kitup`](https://www.scalemate.co/customers/kitup)** with real metrics. Operational pain is same as gaming, monetization model is different. | **Adjust shipped.** Customers using D7 ROAS / paid-subscriber rules today. AppsFlyer/Singular on customer request. |
| **E-commerce apps** | **Partial → Strong-when-customer-arrives** | Catalog ads / DPA = bulk-launch fit (30 catalog ad sets × geo). With Adjust, ROAS-aware automation works for in-app purchase events. Retargeting is a built-in Meta/TikTok setting, not differentiator. No e-com customer in current base — fit is theoretical until validated. | **Adjust covers it technically.** No e-com customer proof yet. MMP added on customer request when needed. |
| **Fintech apps** | **Weak** | Regulated ad approvals (Meta/TikTok both restrict fintech creative — sub-budget caps, region restrictions, manual review queues), KYC-funnel attribution multi-step, lower creative volume, longer test cycles. The bulk-launch value prop is dampened when each variant goes through manual review. Less Meta-heavy in practice. **NOT an MMP problem — a creative-volume + regulated-channel problem.** | n/a — different blocker. |
| **Utility / IAA apps** | **None** | These apps live on AdMob/SDK-network demand (which we don't support per channel scope). Even when they buy on Meta/TikTok, they're high-volume / low-CPI / IAA-LTV bidding plays where the optimization lever is the SDK ad mediation stack, not the Meta ad set config. | n/a — SDK networks excluded. |

**Pattern (revised):** product fit is **Strong for gaming + subscription + e-com (with Adjust covering the MMP signal layer)**, then drops to **Weak/None for fintech (regulated/low-volume) and utility (SDK-network territory)**. **The Weak/None verticals are excluded for non-MMP reasons** — regulated approvals + SDK-network mediation, not attribution. Earlier "MMP gap" gradient was wrong framing.

## 4. Competitor vertical-split pattern

| Competitor | Splits mobile content by vertical? | Vertical pages found |
|---|---|---|
| **AppsFlyer** | **YES, 8 verticals** | Gaming, Finance, eCommerce, Entertainment, Food and drink, Health and fitness, Travel and local, **Subscription apps** |
| **Singular** | **YES, 7 verticals** | Agencies, E-commerce, Finance, Food & Drink, Gaming, Kids Apps, Travel, Web3 |
| **Branch** | **YES, 6 verticals** | Health, Finance, Retail & E-commerce, Food & Beverage, Media & Entertainment, Travel |
| **Adjust** | **YES (per scoping.md §4)** | Glossary-led + industry hub pages |
| **Liftoff** | **YES** | Mobile Game Developers (dedicated persona) + outcome pages |
| **SplitMetrics** | **YES, 3 verticals only** | Gaming, Real-Money Gaming, Finance |
| **Smartly.io** | **NO** | Team × Channel split. No mobile-vertical pages. |
| **Madgicx** | **NO** | Workflow × use-case split (DTC/E-com only). No mobile-vertical pages. |
| **Moloco** | **NO (case-study-driven proof)** | Vertical signal via customer logos (King, Nexon, Scopely / Bumble, Indeed), not via dedicated industry pages. |

**Synthesis:**

- **Vendors who split by vertical:** **all MMPs** (AppsFlyer, Adjust, Singular, Branch) + ad networks selling into specific verticals (Liftoff for games, SplitMetrics for games + finance). Their business reason: they measure (or sell impressions in) every vertical, so a per-vertical landing serves the credibility/discovery loop ("yes, we work for fintech / dating apps / etc.").
- **Vendors who don't split by vertical:** **all pure ad-ops layers** (Smartly, Madgicx) + Moloco (which uses case studies as the proof layer instead of dedicated industry pages).
- **Where Scalemate sits:** execution layer on Meta + TikTok, no MMP, no impression-selling. The Smartly / Madgicx / Moloco camp — vertical-agnostic ad ops, vertical proof via case studies.
- **Copying the MMP pattern would misrepresent the product.** AppsFlyer can write a fintech page because they measure fintech LTV. We can't — we'd be writing a page about a vertical we have no special tooling for.

## 5. IA recommendation

### Per-vertical split / no-split call (revised reasoning 2026-05-12 afternoon)

| Vertical | Demand ≥ 300/mo? | Min DR top-10 ≤ 50? | Product fit Strong/Partial? | Verdict |
|---|---|---|---|---|
| Gaming | YES (~550, already covered) | YES (37-54) | **Strong** | **Already split — keep M4b satellite** |
| Subscription apps | **NO** (~130) | n/a (didn't test) | **Strong** *(revised)* | **NO satellite — fails demand bar, not product bar.** Served via cornerstone (M1 explicit subscription naming + Tier 2 MMP-aware positioning) + subscription customer case study (new — see §6). |
| E-commerce apps | BORDERLINE (~300 retargeting + ~1,300 catalog ads but feature-led) | NO (40-75 DR ceiling on relevant SERPs) | **Strong-when-customer-arrives** | **NO satellite — DR-locked SERPs + no customer proof yet. Fold catalog-ads coverage into a feature-led blog/section (`C1` in pipeline §1 + action-list).** |
| Fintech apps | YES (~6,500) but **false-signal: agency intent** | YES (30-76) but format-mismatched | Weak | **NO satellite. Agency-services SERP = wrong product category. (Not a creative-volume vertical anyway.)** |
| Utility / IAA | NO (0) | n/a | None | **NO satellite — SDK-network territory excluded by channel scope.** |
| Paywall (B2C) | n/a (false signal) | n/a | n/a | **Drop entirely** |

**Conclusion: still 0 of 5 candidate verticals earn a dedicated satellite — but the reasoning flipped for subscription + e-com.** Demand-side bar is the binding constraint, not product-fit. The doc's old framing implied "Scalemate is poorly suited for these verticals" — that was wrong. The correct read: **Scalemate fits subscription + e-com well; search demand on cluster level just isn't there to justify a dedicated landing.** Subscription readers are served via cornerstone + named customer case study; e-com readers via the feature-led `C1` catalog-ads page when it ships.

### How vertical readers get served from the consolidated cornerstone (revised)

The cornerstone (`/use-cases/mobile-user-acquisition`) + M4a pillar blog must explicitly position the verticals via **Tier 1 / Tier 2 / Tier 3 segmentation** (replacing the old "MMP gap" framing) + named customer proof:

- **Apps + games + subscription apps named in the H1 / hero copy** — all three are strong-fit verticals (per revised scoping.md §5).
- **Tier 2 MMP-aware positioning** explicit in the page: "Scalemate is MMP-aware on Meta + TikTok — Adjust shipped, AppsFlyer + Singular on roadmap. Rules can use D7 ROAS / paid-subscriber events / IAP for automation decisions, not just CPI/CPM." This is the load-bearing claim for the subscription + gaming combined audience.
- "Who this is for" paragraph (~3 sentences, no claim of vertical specialization): "Mobile UA teams running high creative volume on Meta + TikTok — whether that's a subscription-app team running paywall + creative rotation across geos with Adjust-fed D7 ROAS rules ([KitUp by OuroMedia →](/customers/kitup)), a gaming studio testing 50 hook variants per cohort ([ZeptoLab — Cut the Rope, Bullet Echo →](/customers/zeptolab)), or a DTC mobile commerce team scaling catalog campaigns." Pair with on-request MMP framing: "Adjust shipped; AppsFlyer/Singular integrated on request — your MMP plugs into your workflow."
- **Subscription customer case study** — Scalemate has paying subscription-app customers (per Natalia 2026-05-12). M3 slate (originally AppFlame + Promin) should add or substitute a subscription customer if one is OK to publish publicly. Public-logo approval per `feedback_client_name_confidentiality.md` memory required before naming.
- **Customer case studies (M3) carry the vertical proof.** Each `/customers/<slug>` is implicitly a vertical landing without claiming category specialization. Gaming + subscription proof side-by-side anchors the breadth.
- **`/customers/?industry=<vertical>` filter (deferred per scoping.md §6)** — long-term IA answer if/when ≥ 3 customers per vertical. With paying subscription customers existing, this gets closer to threshold than the original scoping doc estimated. Reassess once M3 ships.

### If a vertical *later* earns its keep

A vertical satellite gets reconsidered ONLY when ALL THREE happen:
1. ≥ 3 paying customers in that vertical (proof asset density).
2. A real cluster emerges in Ahrefs at vol ≥ 300/mo / KD ≤ 30 / SERP min DR ≤ 50 (not the case today for any non-gaming vertical).
3. A product capability gets built that materially differentiates Scalemate for that vertical (e.g., a paywall / IAP-event integration for subscription; a Meta CAPI auto-config for e-com; an MMP partner integration for either).

None of these trigger today.

## 6. Updated slate delta (vs scoping.md §7) — REVISED 2026-05-12 afternoon

- **New items added: 0** (slate item count unchanged)
- **Adjustments to existing items: 3** (M1 cornerstone copy + M3 customer slate + M4a pillar voice)
- **Items removed: 0**
- **Net change to slate: 0 items, 3 scope edits**

### Adjustments to existing slate items

1. **M1 cornerstone (`/use-cases/mobile-user-acquisition`):** 
   - Hero copy names all 3 strong-fit verticals (gaming + subscription + apps/e-com), not just "apps + games."
   - Add **Tier 2 MMP-aware positioning** section: "Scalemate rules act on D7 ROAS + paid-subscriber events from Adjust (AppsFlyer + Singular roadmap)." Load-bearing claim.
   - Drop the "MMP-gap, one of 3 tools" framing from the spec — that was wrong.
2. **M3 customer slate:**
   - Original: AppFlame + Promin (presumably gaming or general media-buyer).
   - Revised: **add a subscription-app customer case study** if Natalia can approve a public-logo subscription customer. Public-logo approval per `feedback_client_name_confidentiality.md` required before naming. Subscription proof is the missing carrier for the cornerstone's Tier 2 claim.
3. **M4a pillar blog (`/blog/mobile-user-acquisition-guide`):**
   - Voice update: cover apps + games + subscription as 3 equal verticals (not "apps + games" with subscription as side mention).
   - Add a section on "How MMP-aware automation changes UA decisions" — feature-led not vertical-led, but anchors the Tier 2 positioning. Subscription-app + gaming readers both benefit.

### Catalog ads / DPA — separate action item

Flagged in §7 as cleanest feature-led cluster (~1,300 vol/mo at KD 0-9). Now tracked as `C1` in `pipeline.md §1 New` + action-list 2026-05-04 (Strategic Bets row). Not part of mobile UA slate — feature-led on `/features/bulk-launch` adjacency.

## 7. Risks + open questions

- **Risk: future customer-mix may force a vertical-pivot.** If Scalemate's customer base shifts heavily toward subscription apps (e.g., 3+ signed paying customers there) the IA call should be revisited. Specifically the `/customers/?industry=<vertical>` filter becomes high-value. Not a blocker today.
- **Risk: AEO / LLM citation patterns may reward vertical-specific content even when SEO doesn't.** ChatGPT / Perplexity queries like "best subscription app marketing platform" may surface Scalemate via Brand Radar even though Google SERP doesn't justify a page. Open question: does AEO change the calculus? **Today's read: no — AEO is fed by the same pages as Google ranks, plus customer-citation data. Without volume, AEO won't compensate. Recheck once Brand Radar is configured.**
- **Risk: catalog ads / DPA as a feature topic.** ~1,300 vol/mo at KD 0-9 is the cleanest standalone cluster found in this addendum, but it's **feature-led not vertical-led** — a future "Bulk launch for Meta catalog ads" blog or `/features/bulk-launch` section is a real opportunity. **NOT included in slate today** to keep scope tight, but flag for the next discovery pass.
- **Risk: fintech parent-topic looks tempting on volume.** ~6,500 vol/mo is hard to walk past. Sanity-check via SerpAPI on a future cycle: if Scalemate ever decides to pursue agency-style positioning (which we don't today), revisit. Today's call: **don't.**
- **Open question: should subscription apps get named explicitly in M4a (the pillar blog)?** Suggest yes — naming subscription/dating/fitness apps inside the cornerstone copy + the M4a pillar's "verticals" section without dedicated pages serves the reader without inflating the slate.

## 8. Recommended next decision points

1. **Confirm "0 new vertical satellites" call.** Approve keeping the scoping.md slate as-is (5 items + 1 side-track) and skip the subscription / e-com / fintech / utility satellites. This is the load-bearing decision.
2. **Approve the cornerstone copy edit:** add 1 sentence in `/use-cases/mobile-user-acquisition`'s "Who this is for" block that names gaming + subscription + e-com explicitly (anchors broader read without claiming vertical specialization).
3. **Defer the `/customers/?industry=<vertical>` filter decision until M3 ships.** Today **2 case studies live** (KitUp subscription, ZeptoLab gaming). Reassess filter value once M3 adds AppFlame + Promin (+ optional others) → 4+ entries with vertical breadth. Filter becomes meaningful at ≥ 3 entries per vertical, which we don't have yet. Not a now-decision.
