# Mobile UA Pillar — Scoping Doc (2026-05-12)

> **⚠️ REVISED 2026-05-12 (afternoon, 2 rounds)** — original §5 product-fit + MMP-gap framing + customer-vertical attributions were wrong, built on stale memory + miscategorized public-OK logos.
>
> **Corrected facts:**
> - **Adjust integration SHIPPED.** Automation rules use MMP signals (D7 ROAS, paid subscribers, IAP).
> - **AppsFlyer + Singular** integrated on customer request, no fixed timeline.
> - **KitUp (by OuroMedia) = subscription app — ONE customer relationship, not two.** ZeptoLab (Cut the Rope, Bullet Echo) = gaming. Public-OK logos give us subscription + gaming proof side-by-side today. Live case studies at `/customers/kitup` + `/customers/zeptolab`.
> - Subscription apps product-fit Weak → **Strong** (same operational pain as gaming).
>
> See §5 (revised tier framing), §7 slate row 2 (M3 customer slate), §9 next actions #2 (revised M3 priority). IA conclusions (cornerstone, slate count) still hold — reasons changed.

## TL;DR
- **Cornerstone = `/use-cases/mobile-user-acquisition` (use-case format, keep M1), but reframe primary KW to `mobile user acquisition` + `mobile app user acquisition strategy` (DR-reachable SERPs DR 30-66) instead of treating the page as a generic UA hub.** SERP for the broader `app user acquisition` / `user acquisition strategy` is DR 79-95 (MMP glossaries + Adjust/AppsFlyer/Reddit) — Scalemate cannot rank there near-term, so do not bet a *blog* cornerstone on the generic head term.
- **IA pattern: use-case page (BOFU) + 2 satellite blogs (mobile + game UA strategy variants targeting DR-reachable variants) + 1 AEO attribution explainer + a /customers vertical proof layer.** Drop the M2 solutions page (cannibalizes M1) and drop M4d retention-benchmarks blog (3 super-low-TP definitions in a single page = thin).
- **Slate shrinks from 7 items (M1+M2+M3+M4a-d) to 5 items** (M1 cornerstone, M3 case studies, M4a pillar refocused, M4b games variant, M4c attribution AEO). Plus 2 side-track adjacencies (homepage proof slot + AI-assistant prompt library).
- **Top-2 quick wins:** (1) ship M1 use-case page targeting `mobile user acquisition` head + `mobile app user acquisition strategy` (KD 1-4, reachable DR 30-66) — fast indexation candidate via existing template, internal-linkable from already-impression-earning `creative-testing-framework`. (2) Refocus M4a pillar blog to `mobile user acquisition` (KD 7, DR 30-66 in top 10) instead of generic `user acquisition` (KD 7 but DR 86-95 stack).
- **Biggest risk: vol per page is small.** Most mobile-UA non-branded clusters sit at 100-300 vol with TP 100-700. Even a top-3 win = 30-90 clicks/mo per page. The pillar's value is therefore not raw traffic, it's (a) BOFU positioning for the mobile UA persona who already lands via brand/creative-testing queries, and (b) AEO citations on attribution/retention educational content. Set ICP-conversion expectations, not click expectations.

## Method

**Sources used:**
- Ahrefs Keyword Explorer overview + matching-terms (country=US) — pulled 2026-05-12 across 30 seeds. Volume/KD/TP/parent_topic/intents/SERP features.
- Ahrefs SERP overview top-10 — pulled 2026-05-12 for 5 highest-(TP × intent-fit) keywords (`app user acquisition`, `mobile user acquisition`, `user acquisition strategy`, `mobile game user acquisition strategy`, `paid user acquisition`, `app install ads`).
- GSC `gsc_client.py --queries 500 --days 90` for sc-domain:scalemate.co — pulled 2026-05-12. Regex-filtered 13 mobile-UA-adjacent queries; per-URL drill via `dimensions=[page]`.
- WebFetch competitor IA — pulled 2026-05-12: AppsFlyer (homepage + /solutions/user-acquisition-roas), Moloco, Liftoff, Smartly.io, Madgicx, Singular. Adjust returned HTTP 429 — substituted with secondhand evidence from SERP results showing they own the `/glossary/user-acquisition/` page (DR 90).
- Internal: action-list `seo-system/action-lists/2026-05-04.md` (M1-M4d plan), `app/use-cases/_data/bulk-ad-launch/index.jsx` (template structure), `app/solutions/media-buyers/data.jsx` (solutions template), `app/page.jsx` (homepage IA), `scalemate_channel_scope.md` + `scalemate_core_expertise.md` user memories.

**Data freshness:** all keyword data + SERP + GSC pulled 2026-05-12. Memories last verified 2026-05-04 / 2026-05-05. Site DR for scalemate.co unknown (F3 in action list — Ahrefs site-explorer-metrics config gap). Assumption: DR < 30, treat all SERPs where minimum top-10 DR > 50 as unreachable near-term.

## 1. Keyword cluster map

| Seed cluster | Cluster size (≥30 vol, KD≤30) | Total vol (cluster) | TP range (top KWs) | KD range | AI Overview | Intent type | Confidence note |
|---|---|---|---|---|---|---|---|
| `user acquisition` (head) | 40+ in matching-terms | ~3,600 vol/mo across cluster | 50-800 | 0-10 | Yes on most | TOFU informational + commercial (agency/services/platform/companies) | **PARTIAL FALSE SIGNAL.** Cluster TP inflated by parent_topic spillover — generic `user acquisition` parent eats traffic. Many commercial sub-terms (`user acquisition agency`, `user acquisition services`, `user acquisition companies`, `top/best user acquisition`) point to `user acquisition platform` parent = SERP wants agency-directory / MMP-glossary, NOT execution tools. Scalemate is not an agency or platform-with-ad-network. |
| `mobile user acquisition` | 5 KWs ≥ 90 vol KD ≤ 10 (mobile UA / mobile UA strategy / mobile app UA / mobile app UA strategy / mobile UA platform) | ~700 vol/mo | 100-600 | 1-7 | Yes | TOFU informational + some commercial (`mobile UA agency` 90 vol commercial) | **CLEANER SIGNAL.** SERP shows DR-reachable winners (Starloop DR 37, Superscale DR 43, Adjoe DR 59, AppsAmurai DR 66) alongside DR 86-91 anchors (Unity, BusinessofApps). Scalemate can plausibly enter pos 8-10. |
| `mobile game user acquisition` | 4 KWs at 100-200 vol KD 2-3 | ~550 vol/mo | 150-250 | 2-3 | Yes on top | TOFU + content marketing | **CLEAN.** SERP has DR 37-54 winners (Starloop, Lancaric.me, Superscale). Game-vertical content has lower DR ceiling. |
| `paid user acquisition` | 3 KWs (paid UA, what is paid UA, paid UA campaigns) | ~500 vol/mo | 150-250 | 1-2 | Yes | TOFU definition | **CLEAN but AEO-only play** — SERP is glossary/Adjust/AppsFlyer + Reddit + SplitMetrics DR 68. Effort = AEO citations, not clicks (TP <250 on all). |
| `user acquisition strategy` | 8 KWs at 100-200 vol KD 1-7 | ~1,300 vol/mo | 100-700 | 1-7 | Yes | TOFU informational | **MIXED.** Generic strategy SERP is DR 86-95 (Adjust + BusinessofApps + Reddit + Salesforce). Apps/games variants (`user acquisition strategy for apps`, `mobile game user acquisition strategy`) reachable DR 37-54 — same cluster as mobile UA above. |
| `app install ads` | 4 KWs at 30-300 vol KD 8-17 | ~530 vol/mo | 200-350 | 8-17 | Yes + paid_top | TOFU + transactional | **DEAD ZONE.** SERP entirely owned by ad-network owned-properties (Google Ads support DR 99, X Business DR 97, Reddit Business DR 95, Meta DR 100, BusinessofApps DR 86) + paid_top + paid_bottom slots. Zero ranking chance. Also channel-scope conflict (UAC/Google Ads). |
| `mobile attribution` + SKAN/ATT/MMP | 5 KWs at 60-400 vol KD 2-23 | ~1,000 vol/mo | 100-1000 | 2-23 | Yes (heavy) | TOFU AEO definition | **AEO-only play.** SERP is MMP-owned (Adjust DR 90, AppsFlyer DR 90, Singular DR 79, Branch DR 81). Don't compete on rankings — write for AEO citations. Per channel-scope memory: educational framing OK, product positioning NOT OK. |
| `app retention` + D1/D7/D30 | 4 KWs at 100-200 vol KD 0-23 | ~600 vol/mo | 30-500 | 0-23 | Yes | TOFU AEO definition | **THIN per page.** D1/D7/D30 individually have TP 30-80 each. `app retention` head term has KD 23. Combined-into-one-page = thin content concern; separate pages = sub-50-click ceilings. |
| `tiktok app install` | 1 KW at 5000 vol KD 81 | 5000 | 87000 | 81 | No | Transactional / **branded** | **FALSE SIGNAL.** This is users searching "how do I install the TikTok app" — branded transactional, not UA-related. Exclude. |
| `meta app campaigns` / `aaa meta` / `advantage+ app campaigns` | 3 KWs at 0-10 vol | ~10 vol/mo | <20 | 0 | No | Navigational/branded | **DEAD CLUSTER.** No search demand. Don't target. |
| `mobile ad creative` / `creative refresh mobile` | 1 KW at 60 vol no KD | <100 vol/mo | n/a | n/a | n/a | n/a | **DEAD CLUSTER** for the variants in scope. Matching-terms returned 0 rows with vol≥30 KD≤30. Mobile-specific creative-testing demand is implicit inside `creative testing framework` cluster already covered by existing blog. |
| `app marketing` head | 1 KW at 1100 vol KD 12 | 1100 | 1400 | 12 | Yes | TOFU informational | **PROBABLY UNREACHABLE.** Top-3 likely owned by Adjust/AppsFlyer/Storemaven equivalents. Not pulled SERP — deprioritize, low product-fit even if ranked (Scalemate is not "app marketing software"). |
| `playable ads` | 1 KW at 300 vol KD 27 | 300 | 150 | 27 | No | TOFU informational | **OFF-SCOPE.** Playable ads = creative format Scalemate doesn't produce. Channel-scope says no creative-production content. |

**False signals flagged:**
- `tiktok app install` (5K vol KD 81 TP 87K) is **branded transactional** for the TikTok app itself, not a TikTok UA campaign keyword. Same trap as S4 `ad-creative-automation` parent_topic spillover.
- `user acquisition` head term (700 vol TP 800) has TP that **looks** attractive but SERP is dominated by agency-directory + MMP-glossary intent — different product category than Scalemate.
- `app marketing automation` shows TP 13K but parent_topic is generic `marketing automation tools` (5.7K vol) — TP almost entirely spillover from HubSpot/Marketo cluster, not mobile-UA-specific.
- `mobile measurement partner` has parent_volume 6300 under parent_topic `mmp` — but Scalemate is not an MMP. Channel-scope rule forbids MMP positioning.

## 2. SERP intent + format audit

### `app user acquisition` (vol 250, KD 1, TP 600)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | adjust.com/glossary/user-acquisition/ | MMP glossary (definition) | 90 |
| 3 | appsflyer.com/blog/.../app-user-acquisition | MMP guide blog | 90 |
| 4 | reddit.com (multiple) | Aggregator | 95 |
| 5 | singular.net/glossary/user-acquisition/ | MMP glossary | 79 |
| 6 | businessofapps.com/marketplace/user-acquisition | Agency directory | 86 |
| 7 | appitventures.com/blog/...mobile-app-user-acquisition | Niche agency blog | 30 |
| 8-9 | quora.com / appier.com | Aggregator + Asian DSP blog | 74 |
| 10 | appodeal.com/blog/...mobile-app-user-acquisition-strategies | SDK-network blog | 77 |

**AI Overview:** Yes + sitelink — AEO opportunity on definition.
**Scalemate ranking chance:** **LOW.** Only one DR <50 slot (pos 7 appitventures DR 30). Rest = MMP/aggregator anchors. Verdict: maybe pos 8-10 ceiling at best with strong content + 6-12 months link-building. Skip as primary cornerstone target.

### `mobile user acquisition` (vol 200, KD 7, TP 250)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | unity.com/glossary/mobile-user-acquisition | Definition (Unity) | 91 |
| 3 | branch.io/glossary/mobile-acquisition/ | Definition (Branch) | 81 |
| 4 | mobileuseracquisitionshow.com/ | Podcast site | 44 |
| 5 | adjoe.io/blog/mobile-user-acquisition-guide/ | Guide blog (SDK network) | 59 |
| 6 | mcsaatchiperformance.com/.../mobile-user-acquisition/ | Agency landing | 53 |
| 7 | performcb.com/mobile-marketing/ | Network landing | 60 |
| 8 | businessofapps.com/marketplace/user-acquisition/ | Directory | 86 |
| 9 | appsamurai.com/blog/mobile-user-acquisition-strategy | Agency blog | 66 |

**AI Overview:** Yes (limited, 2 features).
**Scalemate ranking chance:** **MEDIUM.** Positions 4-9 sit DR 44-66 — reachable with a strong use-case landing page that combines definition (for AI Overview) + product positioning (for buyer intent). Verdict: realistic pos 6-9 within 3-6 months if internal-linked from indexed pages.

### `user acquisition strategy` (vol 200, KD 7, TP 600)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | adjust.com/glossary/user-acquisition/ | MMP glossary | 90 |
| 4 | businessofapps.com/.../user-acquisition-strategies/ | Industry research | 86 |
| 5 | business.reddit.com/learning-hub/.../user-acquisition | Platform-owned guide | 95 |
| 6 | crunchbase.com/blog/...low-cost-user-acquisition-strategies | Brand blog | 91 |
| 8 | superscale.com/user-acquisition/ | Vendor landing | 43 |
| 10 | salesforce.com/marketing/customer-acquisition/ | Vendor guide | 92 |

**AI Overview:** Yes + sitelink.
**Scalemate ranking chance:** **LOW.** Only Superscale DR 43 sits below 50. Generic strategy term = enterprise/SaaS-owned territory. Verdict: skip as primary.

### `mobile game user acquisition strategy` (vol 200, KD 2, TP 150)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | superscale.com/user-acquisition/ | Vendor landing | 43 |
| 3 | lancaric.me/strategies-ua-mobile-games/ | Personal blog | 54 |
| 4 | unity.com/glossary/user-acquisition | Definition (Unity) | 91 |
| 5 | adjoe.io/blog/...mobile-app-user-acquisition-strategy | SDK network guide | 59 |
| 6 | appfollow.io/blog/...mobile-game-user-acquisition | Vendor blog | 67 |
| 8 | businessofapps.com/marketplace/user-acquisition/games | Directory | 86 |
| 9 | udonis.co/acquisition | Agency landing | 70 |
| 10 | starloopstudios.com/.../game-user-acquisition | Niche game-studio blog | 37 |

**AI Overview:** Yes.
**Scalemate ranking chance:** **MEDIUM-HIGH** (for games-flavored content). DR 37-54 winners exist. KD 2. Verdict: realistic pos 5-9.

### `app install ads` (vol 300, KD 9, TP 350)

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | support.google.com/google-ads/.../6357635 | Google Ads docs | 99 |
| 3 | business.x.com/.../app-installs | X Business landing | 97 |
| 4 | business.google.com/.../app-ads | Google Ads landing | 99 |
| 5 | business.reddit.com/campaign-objective/app-installs | Reddit Business landing | 95 |
| 6 | businessofapps.com/ads/app-installs/ | Directory | 86 |
| 7 | facebook.com/business/.../meta-advantage-plus/app-campaigns | Meta-owned | 100 |
| 9-10 | reddit.com / microsoft.com | Aggregator + MSFT docs | 95-96 |

**Scalemate ranking chance:** **ZERO.** Owned by ad-platform self-hosted properties (DR 95-100) + paid_top + paid_bottom slots. Same trap as S3 (adcreative-ai-alternative DR-saturated SERP). Verdict: do NOT target.

## 3. GSC existing-impressions check

Filter regex: `mobile|app|ua|skan|install|retention|attribution|aaa|advantage|tiktok app|d1 retention|d7 retention|d30 retention|playable|user acquisition`. Window: 90d. Source: `gsc_client.py` 2026-05-12.

| Query | Imp (90d) | Clk | Pos | URL Google attaches |
|---|---|---|---|---|
| unity ads creative testing capabilities for ua managers | 35 | 0 | 9.0 | /blog/creative-testing-framework |
| automated ua creatives | 14 | 0 | 18.9 | /blog/creative-testing-framework (5 imp) + /use-cases/automated-creative-upload-meta (9 imp) |
| scalemates app | 14 | 0 | 11.7 | branded confusion w/ scalemates.com dating-app — not actionable |
| what creative testing framework works best when launching ua on a new platform | 12 | 0 | 2.4 | /blog/creative-testing-framework |
| how to build a creative testing pipeline for mobile game ua | 11 | 0 | 9.7 | /blog/creative-testing-framework |
| creative testing framework mobile app ua new ad platform | 10 | 0 | 1.7 | /blog/creative-testing-framework |
| best creative testing framework for user acquisition ua launch on new platform | 6 | 0 | 1.0 | /blog/creative-testing-framework |
| ua creative automation | 4 | 0 | 10.5 | (assume same blog) |
| mobile ua creative testing (long tail) | 2 | 0 | 5.0 | (assume same blog) |
| unity ads creative testing feature how it works optimize ua performance | 2 | 0 | 8.0 | (assume same blog) |
| our studio is evaluating three ua platforms how do we run a fair test | 1 | 0 | 9.0 | (assume same blog) |

**Summary:** 13 queries, all <50 imp, all 0 clicks. **No query reaches the 50-imp threshold for "existing signal."** Google's current mobile-UA association is entirely with `/blog/creative-testing-framework` (the 2026-04 pillar). No mobile-UA landing-page intent currently registered at scalemate.co.

**Implication:** there is no existing page to enrich — M1 use-case page would be net-new BOFU. But the `creative-testing-framework` blog is the natural internal link source to push authority toward M1. Also: **most mobile-UA queries already hitting scalemate.co are LLM-generated long-tail queries** ("unity ads creative testing capabilities for ua managers" reads machine-generated, not Google Suggest style) — likely AI Overview seed crawls. This is an AEO signal more than a traffic signal.

## 4. Competitor IA audit

| Competitor | Surface for mobile UA buyers | Pattern |
|---|---|---|
| AppsFlyer | `/solutions/user-acquisition-roas/` single landing page under Solutions → By Goal. Separate industry pages (`/solutions/gaming`, `/solutions/finance`, etc.) under Solutions → By Industry. | **Dual axis: Goal × Industry.** UA is a goal, gaming/apps is an industry. Cross-cuts. |
| Adjust | `/glossary/user-acquisition/` (DR 90 definition page that owns SERP). Plus `/resources/guides/user-acquisition` deeper guide. No vertical app/game split visible in SERP-facing pages. | **Glossary + guide hub.** AEO-optimized. |
| Singular | Solutions split by **goal** (Measure / Protect / Access / Optimize / Analytics) + secondary **industry verticals** (Gaming / E-commerce / Finance / Travel / etc.). No dedicated "mobile UA" hub. | **Goal-primary + industry-secondary.** Same axis as AppsFlyer. |
| Liftoff | Solutions split by **persona** (Marketers / Agencies / DSPs / Publishers / Mobile Game Developers) + products by **outcome** (Accelerate / Monetize / Creative / Intelligence). Mobile Game Developers gets its own landing. | **Persona-primary.** Games gets dedicated vertical landing. |
| Moloco | Solutions = product lines (Moloco Ads / Performance CTV / SDK / Commerce Media / Streaming Monetization). UA is a use-case INSIDE Moloco Ads, no separate hub. Industry split via case studies (King, Nexon, Scopely for games; Bumble, Indeed for apps). | **Product-primary, case-study-driven vertical proof.** |
| Smartly.io | Dual structure: by team (Performance / Brand / Creative / Agency) + by channel (Social Media / CTV / Conversational Commerce / Open Web / Video). No mobile/UA hub, no apps-vs-games split. | **Team × Channel cross-axis.** Mobile UA is implicit. |
| Madgicx | Workflows (Optimization / AI Ads / Analytics). Use-case pages for DTC/E-commerce/Shopify/Instagram/Facebook Orchestrator. **No mobile UA presence.** | **Workflow + use-case. Pure DTC Meta-only.** Mobile UA = explicit gap. |

**Synthesis — pattern that fits Scalemate (execution-layer, not MMP/network/MDP):**

- MMPs (AppsFlyer, Adjust, Singular) own the **glossary/definition SERP** because their DR + page count + entity-association lock it in. Don't fight there. Use those queries as AEO citation targets only.
- Ad networks (Moloco, Liftoff) win **persona/vertical landing pages** (Mobile Game Developers, etc.) because they sell the network itself. Scalemate doesn't sell impressions — we sell ops on top of someone else's media — so a "Mobile Game Developers" landing page doesn't fit our offer.
- Pure ad-ops peers (Smartly, Madgicx) split by **team/workflow × channel**, not by vertical. Smartly has no apps-vs-games page. Madgicx has no mobile UA at all.
- **Closest analogs:** Smartly's "Performance Teams" + channel cross + Madgicx's "AI Ads" workflow. Both treat mobile-UA as implicit inside a broader media-buyer workflow page, not as a separate hub.

**Recommendation:** match Smartly/Madgicx pattern. Mobile UA is **one use-case page** (sitting alongside bulk-launch, automation-rules, etc.) + **one persona-flavored blog cluster** (apps + games equally). Do NOT create:
- `/solutions/mobile-ua` (M2) — duplicates `/use-cases/mobile-user-acquisition` and confuses IA (use-case vs solution distinction is already murky at Scalemate; adding mobile-flavored versions of both = 2 pages competing for the same intent).
- Separate `/mobile-ua/games` vs `/mobile-ua/apps` vertical split — too granular for total cluster vol (~700/mo non-branded), and per memory mobile UA = "apps + games equally" so don't bifurcate prematurely.

## 5. Product fit map

> **REVISED 2026-05-12 afternoon.** Original framing assumed no MMP integration. Reality (per updated `scalemate_channel_scope.md` memory): Adjust integration is shipped — Scalemate reads D1/D7 ROAS, paid subscriber events, in-app purchases; automation rules can use MMP signals for decisions. AppsFlyer + Singular on roadmap.

| Capability | Mobile UA job it solves | Honesty | Notes |
|---|---|---|---|
| Bulk launch (Meta + TikTok) | Launch geo/audience-split app-install campaigns en masse (e.g., 30 geos × 5 creatives = 150 ad sets in one config) | **Natural fit.** | The cleanest fit. Mobile UA = geo testing + audience testing = bulk-launch territory. Shared pain across gaming + subscription apps (both ship high creative volume). |
| Automation rules (Meta + TikTok + Adjust signals) | Pause/scale by CPI / CPM / D7 ROAS / paid subscriber events / IAP / spend thresholds | **Natural fit.** | With Adjust MMP integration shipped, rules can use MMP signals beyond in-platform metrics — e.g., "if D7 ROAS > 1.5 → scale +50%," "if creative drives <30% trial→paid → kill." Same engine for in-platform (Meta CPI/CPM/freq) AND downstream MMP events. AppsFlyer/Singular customers get the same scope when those integrations ship. |
| Creative upload (Drive → Meta/TikTok) | Sync from creative library / Drive to app-install campaigns at high cadence (gaming + subscription both refresh creatives weekly) | **Natural fit.** | File-transfer mechanics are clean. Doesn't solve creative production / playable ads / video resizing (those are upstream — partner with creative tools). |
| AI assistant | Mobile UA Q&A on campaign structure, AAA settings, TikTok app install setup, creative refresh cadence, MMP-event rule examples | **Natural fit (newer).** | Genuinely useful — UA managers Google these questions today. Mobile-UA prompt library on `/ai-assistant` is a low-effort win that boosts the pillar. |

**Tier honesty — what Scalemate IS vs IS NOT (corrected):**

**Scalemate IS:**
- An execution layer on Meta + TikTok with **MMP-aware automation rules** (Adjust shipped; AppsFlyer/Singular roadmap).
- A bulk-launch + creative-sync engine for UA teams that ship high creative volume (gaming, subscription apps, plus any DTC mobile team with catalog ads / multi-geo cohorts).
- Capable of MMP-event-driven decisions: D7 ROAS rules, paid-subscriber rules, IAP rules — using the customer's existing Adjust data.

**Scalemate IS NOT:**
- An MMP itself. We don't measure SKAN postbacks, we read them from your MMP. Head-to-head "AppsFlyer vs Adjust vs Scalemate" comparison content = wrong category (we sit on top, not as substitute).
- An ad network / mediation layer. No SDK networks (Liftoff, ironSource, AppLovin, Mintegral, etc.).
- A creative-production tool. Bulk-upload moves your existing creatives; doesn't make them.
- Plugged into ASA / UAC / Google App Campaigns.

**Segmentation pattern for content (replaces previous "MMP gap" framing):**

The R3 MCP article's tiered honesty still applies, but the segmentation flips:
- **Tier 1 — Meta+TikTok-native UA without MMP:** rules engine uses in-platform CPI/CPM/spend/frequency. Sufficient for early-stage teams.
- **Tier 2 — MMP-aware UA (current Adjust customers; AppsFlyer/Singular soon):** rules engine uses MMP-event signals (D7 ROAS, paid subscribers, IAP) for ROAS-aware automation. **This is the centerpiece tier for gaming + subscription apps.**
- **Tier 3 — Enterprise multi-network UA (SDK networks, ASA, UAC):** Scalemate is one component, not the platform — different conversation.

## 6. IA recommendation

### Cornerstone decision

**Cornerstone = `/use-cases/mobile-user-acquisition` (use-case page), primary KW `mobile user acquisition` (200 vol KD 7) + secondary `mobile app user acquisition strategy` (100 vol KD 1) + `mobile game user acquisition strategy` (200 vol KD 2).**

Why this beats the alternatives:

- **vs. `/solutions/mobile-ua` (current M2):** solutions template is broader/persona-led (`/solutions/media-buyers`). Mobile UA fits more naturally as a use-case (workflow + job) than as a persona/solution because the actual buyer (UA manager) is the same persona as `/solutions/media-buyers` — just doing a specific job. Adding a second solutions page = persona ambiguity. Kill M2.
- **vs. blog cornerstone `/blog/mobile-user-acquisition-guide` (current M4a):** SERP-format-mismatch. The DR-reachable winners for `mobile user acquisition` are vendor landing pages (Superscale `/user-acquisition/`, McSaatchi `/mobile-user-acquisition/`, Liftoff product landings) NOT blog guides. SERP wants commercial landing pages with definition baked in, not 3,000-word listicles. A use-case page hits this format-fit; a blog satellite supports it.
- **vs. hub page `/mobile-ua/` with apps/games sub-pages:** total cluster vol ~700/mo non-branded. Splitting into apps/games subpages = 3 thin pages competing for 700 vol. Wait until cluster grows or until a customer-vertical case-study driver emerges (AppFlame = games, Promin = ?).
- **vs. `/customers` vertical filter:** secondary play, not cornerstone — but recommended as side-track (see §9).

URL: `/use-cases/mobile-user-acquisition` (matches existing use-case URL convention).

Primary KW: `mobile user acquisition` (head).
Secondary: `mobile app user acquisition strategy`, `mobile game user acquisition strategy`, `paid user acquisition`, `mobile user acquisition platform`.
Avoid: `user acquisition strategy` head term (DR 86-95 SERP), `app install ads` (zero ranking + channel-scope conflict).

### Hub-and-spoke tree

```
                                          [/use-cases/mobile-user-acquisition]    ← CORNERSTONE (BOFU + AEO)
                                          KW: mobile user acquisition (head)
                                          Hook: bulk launch + auto rules + creative sync
                                          for app + game UA on Meta + TikTok
                                                       │
                  ┌────────────────────────────────────┼──────────────────────────────────────┐
                  │                                    │                                      │
        [/blog/mobile-user-acquisition-guide]  [/blog/mobile-game-user-acquisition]  [/blog/mobile-attribution-explained]
        (refocused M4a)                        (re-scoped M4b — pivot to "game" not "app")  (M4c — AEO only)
        KW: mobile user acquisition            KW: mobile game user acquisition strategy    KW: mobile attribution (AEO citation)
        TOFU pillar pattern                    TOFU pillar pattern                          + sub: deferred deep linking, SKAN, ATT
                  │                                    │                                      │
                  └──────── internal links ────────────┘                                      │
                                                                                              │
        [/blog/creative-testing-framework]  ← already indexed; add 2 mobile-UA mentions      │
        (existing page; add internal link to cornerstone)                                    │
                                                                                              │
                                                                                              │
                                                                                              │
        [/customers/appflame] + [/customers/promin] ← M3, social proof  ←──────────── cited in →
        (case studies)                                                              attribution explainer
                                                                                              │
                                                                                              │
                                                                                              │
        PRODUCT CTAs (from cornerstone + satellites):                                          │
          - /book-a-demo?source=mobile-ua  (primary)                                          │
          - /features/bulk-launch                                                              │
          - /features/automation-rules                                                         │
          - /ad-creative-uploader                                                              │
          - /ai-assistant  (with mobile-UA prompt library section — side-track)
```

### Comparison vs current M1-M4d plan

| Current item | New status | Reason |
|---|---|---|
| **M1** `/use-cases/mobile-user-acquisition` | **KEEP as cornerstone**, reframe primary KW set (`mobile user acquisition` + game/app variants instead of broader `user acquisition` head) | SERP confirms use-case landing-page format fits. KD 1-7 on reachable variants. |
| **M2** `/solutions/mobile-ua` | **KILL** | Duplicates M1 intent. Persona = same as `/solutions/media-buyers`. Adds IA confusion without unlocking new keyword cluster (`user acquisition strategy` SERP is DR 86-95 = unreachable). |
| **M3** Customer success — AppFlame + Promin | **KEEP**, add to `/customers/[slug]` (Contentful). Bonus: homepage logos strip slot + cornerstone proof section | Highest-value supporting asset. Mobile UA pillar credibility = customer proof. |
| **M4a** `/blog/mobile-user-acquisition-guide` | **KEEP, REFOCUS.** Primary KW `mobile user acquisition` (KD 7, DR 30-66 in top 10) NOT generic `user acquisition` (KD 7 DR 86-95). | Original spec mixed cluster heads; SERP audit shows the targetable variant. |
| **M4b** `/blog/app-user-acquisition-strategy` | **CHANGE FORMAT/URL → `/blog/mobile-game-user-acquisition-strategy`** (games-flavored). Keep apps coverage as a section inside M4a pillar, not a separate blog. | `app user acquisition` SERP DR 79-95 = unreachable. `mobile game user acquisition strategy` SERP DR 37-54 = reachable. Apps and games handled together inside M1 + M4a; the dedicated satellite goes to the easier-ranking games variant. Per memory: apps + games equally — equal coverage is preserved inside M1/M4a; the dedicated satellite picks the SERP we can win. |
| **M4c** `/blog/mobile-attribution-explained` | **KEEP**, AEO-only framing | SERP confirms MMP-owned (DR 79-90). Goal = AI Overview citations + brand trust, not rankings. |
| **M4d** `/blog/mobile-ua-retention-d1-d7-d30-benchmarks` | **KILL** | Three sub-clusters at TP 30/60/80 combined into one page = thin without real benchmark data. We don't have D1/D7/D30 data to publish (no MMP integration). Combined-format AEO play is weak. If we want retention coverage, fold a 2-paragraph section into M4a pillar. |
| (new) **Mobile UA prompt library** on `/ai-assistant` | **NEW side-track** (1h) | Adjacency boost. Genuine product fit. |
| (new) **Homepage logos strip slot** for mobile UA proof | **NEW side-track** (handled inside M3) | Standard proof play. |
| (new) **`/customers/` vertical filter** | **DEFER** | Contentful schema change. Re-evaluate after M3 ships and we know if filter is worth the engineering. |

## 7. Page slate (replacing M1-M4d)

| # | Page | Type | URL | Primary KW (vol / KD / TP) | JTBD | Scalemate hook | Effort | Expected clicks/mo if ranked | Dependencies | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Mobile UA use-case (cornerstone) | use-case landing | `/use-cases/mobile-user-acquisition` | `mobile user acquisition` (200 / 7 / 250) + `mobile app user acquisition strategy` (100 / 1 / 200) + `mobile user acquisition platform` (100 / 3 / 600) | "I run subscription + gaming UA on Meta + TikTok and need to stop hand-launching 150 ad sets per cohort." | Bulk launch (geos × audiences × creatives) + Adjust-aware auto rules (D7 ROAS, paid subscribers, IAP, plus CPI/spend) + creative sync (Drive → Meta/TikTok) for app-install campaigns. Tier 1/2/3 segmentation. **Internal-link to existing `/customers/kitup` (subscription) + `/customers/zeptolab` (gaming) for proof from day 1.** | 6h (mirror `bulk-ad-launch` data file) + 1h `_data/index.js` registration | ~30-60 if pos 6-9 | None — ships first. Existing case studies = proof carrier from day 1. | **P0** |
| 2 | Customer case-study slate **expansion** (NOT foundation) | customer landings + Contentful entries + homepage logo updates | New: `/customers/appflame`, `/customers/promin`, optionally `/customers/ouromedia`. Existing live: `/customers/kitup`, `/customers/zeptolab`. | Branded (no SEO play; proof asset breadth) | "Show me more UA teams like mine that use Scalemate." | All 4 capabilities, real metrics (D7 ROAS, install volume, hours saved). | 6-10h depending on number of new entries | n/a (multiplier on cornerstone CR + vertical breadth) | Natalia inputs (real metrics) + public-logo OK on AppFlame/Promin. Manifestation/MindGuru/Growthers need category confirmation. Not blocking M1 — M1 ships with existing KitUp + ZeptoLab as proof. | **P1** (was P0 — demoted because foundation already exists) |
| 3 | Mobile UA pillar blog | blog (TOFU pillar) | `/blog/mobile-user-acquisition-guide` | `mobile user acquisition` (200 / 7 / 250) — same head as #1 (intent-format-split; blog hits TOFU, use-case hits BOFU) | "I'm researching mobile UA strategy in 2026 and want a definitive guide." | Soft CTA to use-case page #1 + AI assistant prompt set. Apps + games equally covered. Channel scope Meta+TikTok. | 8h (discovery + write + QA) | ~40-80 if pos 5-9 | Blocked on #1 ship (needs BOFU target for CTA) | **P1** |
| 4 | Mobile game UA satellite | blog (TOFU game-flavored) | `/blog/mobile-game-user-acquisition-strategy` | `mobile game user acquisition strategy` (200 / 2 / 150) + `mobile game user acquisition` (100 / 3 / 200) + `game user acquisition` (150 / 2 / 250) | "I run UA on a mobile game — what works on Meta + TikTok specifically?" | Reframe 4 capabilities for game UA: soft-launch geo testing, hook-rate scaling, creative-fatigue auto-rotation. ZeptoLab (Cut the Rope, Bullet Echo) proof inside. | 6h | ~30-70 if pos 5-9 | Blocked on #1 + #2 (ZeptoLab proof + any other gaming customer if approved) | **P1** |
| 5 | Mobile attribution AEO explainer | blog (AEO/educational) | `/blog/mobile-attribution-explained` | `mobile attribution` (150 / 2 / 600) + `deferred deep linking` (250 / 3 / 350) + `skadnetwork` (400 / 16 / 600) | "I need to understand SKAN/ATT/MMP basics for our mobile UA plan." | Educational only — NO product positioning. Per channel-scope memory: framing = "what mobile UA leads need to know," not "Scalemate solves this." Soft CTA only to cornerstone. | 6h | ~5-15 (AEO citation value > click value) | None — independent | **P2** |
| 6 (side-track) | Mobile UA prompt library on AI assistant | section add on existing `/ai-assistant` page | `/ai-assistant` (existing) | n/a (brand SEO benefit only) | "Show me 5 mobile UA prompts the AI assistant handles." | "Try asking..." prompt block with 6-10 mobile UA prompts. | 1h | n/a | None | **P1 (cheap, ship with #1)** |

**Killed vs current plan:**
- M2 `/solutions/mobile-ua` (cannibalization with M1, IA confusion).
- M4d `/blog/mobile-ua-retention-d1-d7-d30-benchmarks` (thin, no data, MMP gap).

**Changed format/URL:**
- M4a primary KW: `user acquisition` → `mobile user acquisition` (DR-reachable variant).
- M4b: `/blog/app-user-acquisition-strategy` → `/blog/mobile-game-user-acquisition-strategy` (apps unreachable on SERP, games reachable; apps coverage moves inside M1 + M4a).

**Total slate:** 5 content items + 1 prompt-library side-track. Was 7 (M1-M4d).

## 8. Risks + open questions

- **We don't have a real Ahrefs DR for scalemate.co** (F3 in action list). All "DR < 30 = unreachable above DR 50" framing is assumption. If actual DR is 35-45, M4a pillar ranks become more plausible. Resolve before final priority ordering on satellites.
- **Customer case-study inputs are gating M3.** No real D7 ROAS / install-volume / hours-saved numbers from AppFlame + Promin = no honest proof asset. Natalia input queued in `natalia-tasks.md`. If those don't land in 2 weeks, alternative is to use **vertical labels only** (per `feedback_client_name_confidentiality.md` memory) on a generic homepage proof slot — but that's much weaker than named case studies.
- **`paid user acquisition` SERP shows a DR-reachable yodelmobile.com pos 9 (DR 49) + getbraavo pos 10 (DR 40).** TP only 250 = sub-25 clicks even at top-3. Not added to slate as standalone — instead absorb as secondary KW in M1 + M4a.
- **AI Overview is present on ~70% of mobile-UA queries we scanned.** The AEO play (M4c + AEO sub-sections in M1 and M4a) likely matters more than the ranking play for total ICP reach. But we have no way to measure AEO citation lift today (Brand Radar setup not configured). Risk: invest in AEO format without measurement loop.
- **Mobile UA cluster vol/page is small.** Even the best-case (all 5 pages rank pos 5-9) = ~100-200 incremental clicks/mo combined. The pillar is justified by ICP conversion quality + AEO citations + customer-proof asset value, not absolute click volume. Make sure Natalia is OK with that framing before committing 30h of effort.
- **`automation-rules-library` page (S9' in pipeline) overlaps with mobile UA cornerstone in product narrative.** When that ships, ensure cross-links + audience separation (rules library = general; mobile UA = persona-led). Not a blocker.
- **Items needing Natalia input:** (a) real D7 ROAS / install / hours-saved from AppFlame + Promin (M3 blocker); (b) confirm prioritization tradeoff (heavy lift for low absolute click volume — is the AEO + ICP-fit ROI worth it?); (c) confirm the "kill M2, kill M4d" calls.

## 9. Recommended next 3 actions

1. **Ship #1 (`/use-cases/mobile-user-acquisition`) first.** Mirror `bulk-ad-launch` data structure. Reframe 4 capabilities for app + game UA on Meta + TikTok. Internal-link FROM `/blog/creative-testing-framework` (already getting mobile-UA impressions) TO this page in 2-3 spots. Primary KW `mobile user acquisition` + secondary `mobile app user acquisition strategy` / `mobile game user acquisition strategy` / `mobile user acquisition platform`. Honest MMP-gap section. CTA = book a demo. **Bundle the 1h Mobile UA prompt-library add on `/ai-assistant` in the same release.**

2. **Customer case-study proof — already live, M3 = expansion not foundation (revised 2026-05-12 afternoon).** **What's already shipped:**
   - [`/customers/kitup`](https://www.scalemate.co/customers/kitup) — **subscription-app case study LIVE** (KitUp, published by OuroMedia — one relationship, not two). Real metrics: "30k+ Ads Launched, 15K+ meta ads, 35 hrs/month saved, ROAS boost." Direct internal-link target for cornerstone Tier 2 claim.
   - [`/customers/zeptolab`](https://www.scalemate.co/customers/zeptolab) — **gaming case study LIVE** (ZeptoLab — Cut the Rope, Bullet Echo). "From Drive to Campaign: Simplifying Ad Creative Uploads." Direct internal-link target for cornerstone gaming proof.
   - OuroMedia logo (KitUp's publisher) also appears separately on `/ad-creative-uploader` results + use-case pages as standalone brand reference — but case study is at `/customers/kitup`, not a separate `/customers/ouromedia`.

   **M3 actual scope (expansion):** add new case studies for **AppFlame + Promin** (needs Natalia inputs: real metrics + public-logo OK). Plus optional adds for Manifestation/MindGuru/Growthers if Natalia confirms category labels. Real metrics required per data-integrity rule.

   **Bottom line:** M1 cornerstone (next priority) can link to KitUp + ZeptoLab `/customers/` pages **from day 1 of ship** — no waiting on M3. M3 expansion adds vertical breadth but isn't load-bearing for cornerstone credibility.

3. **Then ship #3 (`/blog/mobile-user-acquisition-guide` pillar).** TOFU companion to #1. Same head KW (use-case page wins BOFU SERP intent, blog wins TOFU/AEO intent — different formats win different SERP slots). Internal-link to #1 + #2. Run via standard discovery → write → qa pipeline; brief should call out: DR-reachable variants, MMP-gap segmentation, apps + games equally, channel scope Meta + TikTok only. M4b (`mobile-game-user-acquisition-strategy`) and M4c (`mobile-attribution-explained`) follow in subsequent cycles — do NOT batch them in the same release as #3 to avoid same-cluster cannibalization between pillar and games-satellite during the initial indexation window.
