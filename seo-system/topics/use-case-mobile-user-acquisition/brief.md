# Topic Brief: /use-cases/mobile-user-acquisition (cornerstone)

> Discovery agent output — 2026-05-12.
> Builds on `seo-system/topics/mobile-ua-pillar/scoping.md` (pillar scoping, same day). This brief is the M1 cornerstone use-case page brief; M4a pillar blog gets a separate brief later.

---

## TL;DR for Natalia

- **Format:** BOFU use-case landing page in the existing `/use-cases/*` template (mirror `bulk-ad-launch` data structure).
- **Primary KW:** `mobile user acquisition` (200 vol, KD 7, TP 250). DR 30-66 winners in top-10 = reachable for us.
- **Secondary KWs (pack into H2s + meta + FAQ):** `mobile app user acquisition strategy` (100 / KD 1), `mobile user acquisition platform` (100 / KD 3), `mobile game user acquisition strategy` (200 / KD 2), `paid user acquisition` (250 / KD 1 — AEO sub-section).
- **JTBD:** "I run UA for a mobile game + subscription app on Meta + TikTok and need to stop hand-launching 150 ad sets per cohort, hand-uploading 30 creatives a day, and hand-watching ROAS thresholds."
- **Unique angle:** the only execution-layer page on SERP that openly says "we sit on top of Adjust/AppsFlyer, not replace them" + shows two live case studies (KitUp subscription, ZeptoLab gaming) on day-1.
- **Estimated impact:** 30-60 clicks/mo at pos 6-9 + AEO citations + cornerstone CR uplift for the existing `/blog/creative-testing-framework` mobile-UA inbound traffic. Pillar value > raw click value (per scoping §8).
- **Input needed from Natalia:** 2 metrics confirmations, 1 video, brand-in-title decision. Listed at the bottom.

---

## Keyword Data

**Source:** Ahrefs Keyword Explorer pulled 2026-05-12 inside `seo-system/topics/mobile-ua-pillar/scoping.md` §1-§2. Not re-pulled (same-day data).

### Primary

| Keyword | Vol/mo (US) | KD | TP | Trend | SERP intent |
|---|---|---|---|---|---|
| `mobile user acquisition` | 200 | 7 | 250 | Stable | TOFU info + commercial (vendor landings rank pos 4-9 alongside DR 90 glossaries) |

### Secondary (must appear in H2s / meta / FAQ)

| Keyword | Vol/mo | KD | TP | Why |
|---|---|---|---|---|
| `mobile app user acquisition strategy` | 100 | 1 | 200 | App-flavored sister query. Strategy intent = good for H2 on framework. |
| `mobile game user acquisition strategy` | 200 | 2 | 150 | Game-flavored sister. Folds in apps + games per memory; ZeptoLab proof carries it. |
| `mobile user acquisition platform` | 100 | 3 | 600 | Highest TP — commercial intent ("what tool?"). Heavy weight in CTA + product positioning. |
| `mobile user acquisition agency` | 90 | (commercial) | — | Commercial sister. Don't target — we're not an agency. **Mention once** to clarify positioning ("we replace agency manual ops, not strategic consult"). |
| `paid user acquisition` | 250 | 1 | — | AEO definition sub-section. Don't headline; cite for AI Overview. |

### Tertiary / LSI (sprinkle in body + FAQ)

- `mobile UA automation`, `mobile UA platform`, `bulk launch app install ads`, `auto-rules D7 ROAS`, `creative refresh mobile UA`, `geo split mobile UA`, `Adjust automation rules`, `MMP signals automation`, `TikTok app install scale`.

### Problem-based phrases (use in H2 Problem + body)

- "launching 150 ad sets per cohort by hand"
- "30 creatives a day to keep CPI flat"
- "creative fatigue eats UA budget"
- "switching between Meta and TikTok all day"
- "waiting on dev to ship before scaling spend"
- "watching D7 ROAS in three tabs"
- "manual creative uploads from Drive"
- "scaling UA without hiring more buyers"

### Avoid (DR-unreachable or off-scope)

- `user acquisition` (head) — DR 86-95 SERP (Adjust, BusinessofApps, Reddit, Salesforce).
- `user acquisition strategy` (head) — same.
- `app install ads` — DR 95-100 (Google Ads / Meta / X own pages) + UAC channel-scope conflict.
- `mobile attribution` — own piece M4c; we are not an MMP.

---

## Existing Content Check

**Source:** GSC `gsc_client.py --days 90` pulled 2026-05-12 inside scoping §3.

- **Matching page on scalemate.co:** NONE.
- **GSC queries for `mobile user acquisition` adjacency:** all impressions currently attach to [`/blog/creative-testing-framework`](https://www.scalemate.co/blog/creative-testing-framework). 13 queries, all <50 imp, all 0 clicks over 90d. Most reads as AI-Overview machine-generated long-tail ("unity ads creative testing capabilities for ua managers" — not Google-Suggest pattern).
- **Cannibalization risk:** **LOW.** Different intent: blog = TOFU framework, this page = BOFU product landing. Both can co-exist with cross-links. Add 2-3 inbound links from `/blog/creative-testing-framework` to this new page (one mid-body + one in conclusion).
- **Decision:** **CREATE NEW** (no existing page to enrich).

---

## SERP Analysis (primary KW `mobile user acquisition`)

**Source:** scoping §2 SERP pull 2026-05-12. SERP features: AI Overview present (limited, 2 cites).

| Rank | URL | Page type | DR |
|---|---|---|---|
| 2 | unity.com/glossary/mobile-user-acquisition | Definition (Unity) | 91 |
| 3 | branch.io/glossary/mobile-acquisition/ | Definition (Branch) | 81 |
| 4 | mobileuseracquisitionshow.com/ | Podcast | 44 |
| 5 | adjoe.io/blog/mobile-user-acquisition-guide/ | SDK-network guide blog | 59 |
| 6 | mcsaatchiperformance.com/.../mobile-user-acquisition/ | Agency landing | 53 |
| 7 | performcb.com/mobile-marketing/ | Network landing | 60 |
| 8 | businessofapps.com/marketplace/user-acquisition/ | Directory | 86 |
| 9 | appsamurai.com/blog/mobile-user-acquisition-strategy | Agency blog | 66 |

**Dominant SERP format:** mixed — DR 81-91 glossary definitions (Unity, Branch) sit on top, then DR 44-66 vendor / agency landings + podcast + directory.

**Can we win?** **YES — realistic pos 6-9** within 3-6 months. Format fit is a use-case landing page with a definition block on top (for AI Overview) + product positioning beneath (for buyer intent). This dual-format play is what the existing top-10 doesn't do cleanly: Unity/Branch are pure definitions with no buyer CTA; agency landings are pure CTA with no AEO-friendly definition.

**SERP feature gap to exploit:** AI Overview currently cites only 2 sources. A clean Q&A schema + first-paragraph definition pattern is the AEO entry point.

**Intent classification:** Dominant intent = **commercial-informational** ("what is mobile UA + which tool/agency"). Buyer is researching, leaning to commercial. Use-case landing page nails this exactly.

---

## Competitive Gap

**Source:** scoping §4 competitor IA audit pulled 2026-05-12.

### What top-3 (Unity, Branch, adjoe) cover

- Definition of mobile UA, channels, KPIs (CPI, CAC, LTV, ROAS, retention).
- Generic "best practices" lists.
- Branded glossary entries with internal links to their own products (Unity Ads, Branch deep linking, adjoe SDK).

### What they MISS (our differentiation)

1. **Execution layer story.** Top-3 are MMPs / SDK networks / ad networks selling impressions or measurement. None describe the actual *daily ops* of running mobile UA — bulk-launching geo cohorts, uploading creative drops, writing automation rules. This is our entire territory.
2. **Honest MMP positioning.** Adjust/Branch glossary entries position themselves as the solution. We're the only page that can credibly say "use your existing MMP, we layer on top." This builds trust with anyone who already pays an MMP.
3. **Real customer proof at vertical level.** Top-3 link to enterprise logo strips with no detail. We have [`/customers/kitup`](https://www.scalemate.co/customers/kitup) (subscription, 30K+ ads, 35 hrs/mo) and [`/customers/zeptolab`](https://www.scalemate.co/customers/zeptolab) (gaming, 2,000+ files, 70% upload-time reduction) live with named metrics — cite from day 1.
4. **Both verticals (apps + games + subscription) equally.** Per `scalemate_core_expertise.md` memory. Unity/adjoe/Liftoff tilt heavily gaming; AppsFlyer/Adjust are vertical-agnostic but generic.
5. **Tier honesty.** Tier 1 (in-platform-only rules) / Tier 2 (MMP-aware rules with Adjust shipped, AppsFlyer+Singular on roadmap) / Tier 3 (SDK networks, ASA, UAC — explicit "not us"). Nobody else writes this segmentation publicly.

---

## ICP Pain Research

**Method:** SerpAPI Reddit + community scan 2026-05-12. Queries: `site:reddit.com mobile user acquisition manual hours frustrating`, `reddit user acquisition manager pain Meta ads scaling creatives`, `reddit mobile game UA creative testing meta TikTok manual`. ~30+ threads scanned.

### Pain quotes (link + thread activity)

1. **"30 Creatives a Day: The New 'Tax' of Competing in Mobile UA"** — Deconstructor of Fun, UA Monthly #1 podcast, 2026-03 ([YouTube key moment 25:38](https://www.youtube.com/watch?v=Z_UOQ2nSZq4&t=1538)). Jihan (Scaling.Games) + Josh (Wildcard Games) explicitly frame the operational floor: **30 creatives/day is now the cost of entry for mobile UA**.
2. **"Best way to test new creatives in a long-running Meta ad set"** — r/FacebookAds, 10+ comments, 2 months ago ([thread](https://www.reddit.com/r/FacebookAds/comments/1rrllfu/best_way_to_test_new_creatives_in_a_longrunning/)). Top comment: *"Just add new creatives directly into the existing ad set. Will Meta actually rotate and test them fairly or just keep spending on the proven ad?"* — frustration with not knowing if creatives get fair test, leading to manual splitting.
3. **"Dynamic creative vs manual testing in 2025"** — r/FacebookAds, 10+ comments ([thread](https://www.reddit.com/r/FacebookAds/comments/1kfc8m0/dynamic_creative_vs_manual_testing_in_2025_where/)). Top reply: *"For larger-scale Meta campaigns, manual creative rotation consistently outperforms dynamic creative optimization when you're past the initial testing phase."* — manual is "right" but unsustainable.
4. **"Scaling Meta Ads in 2025 Playbook"** — r/FacebookAds, 10+ comments, $20M+ spend author ([thread](https://www.reddit.com/r/FacebookAds/comments/1n6q7lg/scaling_meta_ads_in_2025_playbook/)). Audience consistently asks: "how do you actually launch at this volume without hiring 5 buyers?"
5. **"Scaling campaigns without burning out"** — r/marketingagency, 6 comments ([thread](https://www.reddit.com/r/marketingagency/comments/1pbawea/scaling_campaigns_without_burning_out_key/)). Author managing Meta ads for years: *"when scaling, creative fatigue hits hard, and it feels like performance drops out of nowhere."*
6. **"6 Reasons Why You Cannot Scale Your Facebook Ads"** — r/FacebookAds, 60+ comments, 1y ([thread](https://www.reddit.com/r/FacebookAds/comments/1ffru2h/6_reasons_why_you_cannot_scale_your_facebook_ads/)). Comments echo: scaling means hand-launching more ad sets, then babysitting them.
7. **"Meta Ads & TikTok Ads Creative System"** — r/EntrepreneurRideAlong ([thread](https://www.reddit.com/r/EntrepreneurRideAlong/comments/1lv7lao/meta_ads_tiktok_ads_creative_system/)). Author lists the system needed: *"Produces volume fast. Maintains high quality. Prevents fatigue. Makes testing seamless. Fuels scale."* — every line maps to a Scalemate capability.
8. **"How often do casual mobile games refresh their ad creatives"** — r/gamedev ([thread](https://www.reddit.com/r/gamedev/comments/1lb5rmh/how_often_do_casual_mobile_games_refresh_their_ad/)). Confirms refresh cadence is the central operational question for mobile-game UA.
9. **Shamanth Rao (LinkedIn)** — *"Old way: monthly creative crawl. New way: weekly creative sprints."* ([post](https://www.linkedin.com/posts/shamanthrao_how-to-scale-ua-with-creative-strategy-activity-7434292838500315137-ml8-)). Industry voice confirming weekly cadence is the standard.

### Pain language (use verbatim in copy)

- "30 creatives a day"
- "150 ad sets per cohort"
- "creative fatigue hits hard, performance drops out of nowhere"
- "manual creative rotation outperforms — but it's unsustainable"
- "scaling means hiring more buyers"
- "switching between Meta and TikTok all day"
- "monthly creative crawl" vs "weekly creative sprint"
- "watching D7 ROAS in three tabs"

### Scale of the problem

- Industry consensus: **30 creatives/day** is the operational floor for competitive mobile UA in 2026 (Deconstructor of Fun, Mar 2026).
- A mid-tier UA team running 10 geos × 3 audiences × 5 creatives = 150 ad sets per concept. Manual setup = ~3-5 minutes per ad set = 7-12 hours per concept launch. Multiple concepts/week = a full FTE just on setup.
- KitUp internal data: 35 hrs/mo saved after adopting bulk launch + creative sync. Translates to ~0.2 FTE per UA manager.

### Current workarounds

- **Spreadsheets + bulk-import CSVs into Ads Manager** — works for cohort-once, breaks the moment naming conventions change or audiences need iteration.
- **In-platform Meta automated rules** — only see in-platform metrics (CPM, freq), can't act on D7 ROAS or paid-subscriber MMP events.
- **Hiring more buyers** — what scaling teams default to when tooling doesn't scale. The Reddit "scaling = hiring" pattern is the pain we kill.
- **Madgicx / Smartly / Revealbot for DTC e-com** — adjacent tools, but none focus on mobile UA (apps + games) execution layer.

### Emotional triggers

- **Wasted time** — "I have a strategy, but I spend my day on data entry."
- **Lost opportunity** — "By the time I launch the test, the trend is gone."
- **Team scaling pressure** — "I can't keep asking for headcount; ops should not gate strategy."
- **Performance opacity** — "I can't tell if Meta's algo is testing fairly or sandbagging."

### Thread activity (proof of demand)

- 4+ r/FacebookAds threads with 10-60+ comments each from the last 3 months.
- 1 r/marketingagency thread with 6 comments.
- 1 high-signal podcast (Deconstructor of Fun, ~640 views in 2 months but cited industry voices Jihan + Josh).
- LinkedIn UA discourse (Shamanth Rao, Lancaric) is active monthly.

**Conclusion:** pain is validated, language is ICP-native, scale numbers are publicly defensible.

---

## Funnel & Conversion Assessment

| Criterion | Rating |
|---|---|
| **Funnel stage** | BOFU (with light TOFU intro for AI Overview) — buyer is researching tools to fix the daily ops problem. |
| **Steps to sign-up** | 1-2. Land on page → see capabilities → book demo. |
| **ICP fit** | 5/5 — UA Manager at a mobile gaming / subscription / app studio running $50K-$500K/mo on Meta + TikTok. |
| **Product page connection** | DIRECT — primary CTA = `/book-a-demo?source=mobile-ua`. Secondary internal links to `/features/bulk-launch`, `/features/automation-rules`, `/ad-creative-uploader`. |

Why this article drives sign-ups: ICP lands with active intent ("I need a tool"), sees vertical proof in 30 seconds (KitUp + ZeptoLab), reads honest tier segmentation that builds trust ("they're not pretending to be an MMP"), books demo.

---

## Content Plan

- **Type:** Use-case landing page (existing `/use-cases/*` template).
- **Template:** Mirror [`app/use-cases/_data/bulk-ad-launch/index.jsx`](../../../app/use-cases/_data/bulk-ad-launch/index.jsx) structure — same `data` object shape, same sections, same components.
- **Target length:** 1,200-1,500 words (visible copy; data object includes metadata, FAQ, etc.).
- **JTBD group:** A (operational efficiency for ICP UA Manager) per `seo-system/topics/mobile-ua-pillar/scoping.md` §5.
- **Funnel stage:** BOFU.
- **ICP:** UA Manager + Founder/Head of Performance at mobile gaming / subscription app / utility studio. Channel: Meta + TikTok. MMP: Adjust (shipped), AppsFlyer/Singular (roadmap).

### Page structure (mapped to Content Framework `seo-system/Content Framework + SEO пріоритети + Ключові слова + Промпт.md`)

Heading hierarchy follows the framework's H2 set (Problem / Solution / How it Works / Results / Who it's for / FAQ), implemented through the existing use-case data sections.

1. **Hero block** (`data.hero`)
   - **H1 (working version, finalize at copywriting):** `Mobile User Acquisition` + accent `at Scale on Meta & TikTok` — formula: `[Outcome] without [pain]` → "Scale Mobile UA on Meta & TikTok — without hand-launching 150 ad sets a week."
   - Subtitle pain: "Bulk-launch geo cohorts, sync creatives from Drive, and auto-scale on D7 ROAS — for app + game UA on Meta and TikTok."
   - 3 bullets value (one per capability):
     - "Hundreds of app-install ad sets from one geo×audience×creative template"
     - "Auto-rules that read Adjust signals (D7 ROAS, paid subscribers, IAP) — not just in-platform CPI"
     - "Sync 30 creatives/day from Google Drive to Meta + TikTok without manual upload"
   - Platforms badges: Meta Ads, TikTok Ads, Google Drive, **Adjust** (new — first time Adjust appears on a use-case hero).
   - Primary CTA: Book a demo.
   - Secondary CTA: See how it works (anchor to How it Works).

2. **Video** (`data.video`) — **Natalia input:** is there an existing demo video that covers the geo-split mobile UA flow specifically? If not, reuse the bulk-launch demo `qM4rEFX7pBo` and call out app-install in the description.

3. **Problem section** (`data.problem`) — H2: "Why Manual Mobile UA Doesn't Scale" / accent: "Past 30 Creatives a Day".
   - Pain 1: "Every geo cohort is the same repetitive setup" — 10 geos × 3 audiences × 5 creatives = 150 ad sets, each built by hand inside Meta + TikTok.
   - Pain 2: "Creative refresh outpaces manual upload" — 30 creatives/day means hours moving files between Drive, Meta Media Library, and TikTok.
   - Pain 3: "Performance signals live in three tabs" — CPI in Meta, D7 ROAS in Adjust, spend in finance. Decisions wait until someone reconciles.

4. **Before/After section** (`data.beforeAfter`) — H2: "What Changes with Scalemate for Mobile UA"
   - Before: "A new geo launch eats a UA manager's week — 150 ad sets, 200 creative uploads, 4 dashboards."
   - After: "One template, one Drive sync, one auto-rules config. Live across Meta + TikTok in under an hour."
   - Metrics (pull from real customer data — see Must Include):
     - "30K+ ads launched" (KitUp)
     - "70% faster creative deployment" (ZeptoLab)
     - "35 hrs/mo saved per UA manager" (KitUp)

5. **How It Works** (`data.howItWorks`) — H2: "How Mobile UA Automation Works in Scalemate" — three steps:
   - **Step 1: Sync creatives from Drive / NextCloud.** Push 30/day into Meta Media Library + TikTok Creative Center via [automated creative upload](../../../app/use-cases/automated-creative-upload-meta) — dedup, filtering, naming convention enforced.
   - **Step 2: Bulk-launch the geo × audience × creative matrix.** One template = 150 ad sets across Meta + TikTok. Link to [`/use-cases/bulk-ad-launch`](../../../app/use-cases/bulk-ad-launch).
   - **Step 3: Auto-rules on MMP signals.** D7 ROAS thresholds, paid-subscriber rules, IAP rules — using the customer's Adjust feed. Tier 1 teams (no MMP yet) use in-platform CPI/CPM rules. Link to [`/use-cases/ad-campaign-automation-rules`](../../../app/use-cases/ad-campaign-automation-rules).

6. **Results / Proof** (`data.results`) — H2: "Results From Mobile UA Teams Using Scalemate"
   - Case study 1: **KitUp** (subscription, by OuroMedia, 1M+ users). 30K+ ads launched, 35 hrs/mo saved. Link → `/customers/kitup`.
   - Case study 2: **ZeptoLab** (gaming, Cut the Rope + Bullet Echo, 2B+ downloads). 2,000+ media files, 70% upload-time reduction. Link → `/customers/zeptolab`.
   - Logo strip: existing `clientApps` from bulk-ad-launch + add Adjust integration badge.

7. **Audience / Who it's for** (`data.audience`) — H2: "Who Mobile User Acquisition with Scalemate Is For"
   - Role: **UA Managers & Performance Marketers** — link to [`/solutions/media-buyers`](../../../app/solutions/media-buyers).
   - Role: **Mobile Game UA Leads** — copy emphasizing weekly creative sprint cadence + geo soft-launch flow.
   - Role: **Subscription App UA / Growth Leads** — D7 ROAS + paid-subscriber automation.
   - Role: **Founders / Heads of Growth** — "scaling without hiring more buyers."
   - Industries: Mobile Gaming, Subscription Apps, Mobile Utilities, App Publishers, Performance Studios.

8. **Tier honesty block** (NEW — fits between Audience and FAQ) — H2: "What Scalemate Is (And Isn't) for Mobile UA"
   - Plain table or 3-paragraph block:
     - **IS:** execution layer for Meta + TikTok app-install campaigns; MMP-aware auto-rules (Adjust shipped, AppsFlyer / Singular on customer request); bulk launch + creative sync.
     - **IS NOT:** an MMP (we read your existing one); not an ad network / SDK mediation; not a creative-production tool; not plugged into ASA / UAC / Google App Campaigns.
   - **Why this section matters:** builds trust + AEO citation hook + differentiates from MMP glossary pages that own the SERP.

9. **FAQ** (`data.faq`) — H2: "Mobile User Acquisition FAQ" — 7 questions, schema FAQPage. Must include answers for AEO:
   - "What is mobile user acquisition?" *(definition for AI Overview — 2-3 sentence direct answer)*
   - "How does Scalemate help with mobile user acquisition on Meta and TikTok?"
   - "Does Scalemate replace my MMP (Adjust / AppsFlyer / Singular)?" *(answer: no — we read your MMP feed; Adjust integration shipped, AppsFlyer + Singular on customer request)*
   - "Can Scalemate run UA for both apps and games?" *(answer: yes — equally; cite KitUp + ZeptoLab)*
   - "What's a 'mobile user acquisition strategy' that actually scales?" *(targets `mobile app user acquisition strategy` + `mobile game user acquisition strategy` LSI)*
   - "Does Scalemate support SKAdNetwork or ASA?" *(honest answer: SKAN signals flow through your MMP into our rules; ASA not supported)*
   - "How many ad sets can Scalemate launch per mobile UA cohort?" *(answer: 150+ per template; no fixed cap)*

10. **CTA block** (`data.cta`) — title: "Scale Mobile UA Without Scaling Headcount" + Book demo button.

### Components to reuse (no new component code)

All sections map to existing `app/use-cases/_components/`:
- `HeroSection`, `ProblemSection`, `BeforeAfterSection`, `HowItWorksSection`, `ResultsSection`, `AudienceSection`, `CtaSection`, FAQ (built into the slug page).

### `_data/index.js` registration

Add `mobileUserAcquisition` entry → `_data/index.js` mapping `'mobile-user-acquisition'` slug to the new data file, mirroring how bulk-ad-launch is wired.

---

## Title/Meta Direction

### SERP patterns (pos 2-9 for `mobile user acquisition`)

- Unity (pos 2): "Mobile User Acquisition Explained | Unity"
- Branch (pos 3): "Mobile User Acquisition: A Complete Guide | Branch"
- adjoe (pos 5): "Mobile User Acquisition Guide: 2026 Best Practices | adjoe"
- McSaatchi (pos 6): "Mobile User Acquisition | M&C Saatchi Performance"
- AppsAmurai (pos 9): "Mobile User Acquisition Strategy: A Complete 2026 Guide"

**Pattern:** primary KW front-loaded + ":" + descriptor + brand at end. Power words used: "Guide," "Strategy," "Complete," "Explained," "2026."

### Brand placement decision

- **YES, brand in title** (`| Scalemate` at the end). Reason: we're a commercial landing, not a glossary; ICP recognizes the brand from the existing customer + creative-testing-framework footprint. Matches all top-10 commercial pages (Unity, Branch, adjoe, McSaatchi, AppsAmurai all use `| Brand`).

### Power elements to use

- **Number / scale:** "Bulk Launch Hundreds of Ad Sets" or "30 Creatives/Day"
- **Channel specificity:** "Meta + TikTok"
- **Capability promise:** "Bulk-Launch + Auto-Rules + Creative Sync"
- **Speed:** "in Minutes" or "Weekly Sprint"

### absoluteTitle flag

- **NO** for this page — the standard title pattern works. (absoluteTitle is used when we want to override Next.js title template; not needed here.)

### Draft title + meta options (pick at copy stage)

**Title option A (recommended — feature-led):**
`Mobile User Acquisition Automation for Meta & TikTok | Scalemate` (66 chars)

**Title option B (scale-led):**
`Mobile User Acquisition at Scale — Bulk Launch + Auto-Rules | Scalemate` (70 chars)

**Title option C (strategy-led, hits secondary KW):**
`Mobile User Acquisition Strategy: Bulk Launch, Auto-Rules, MMP Signals | Scalemate` (84 chars — too long, trim before use)

**Meta description (recommended, ~155 chars):**
"Run mobile UA on Meta & TikTok without manual setup. Bulk-launch geo cohorts, sync creatives from Drive, auto-scale on Adjust D7 ROAS signals. Used by KitUp, ZeptoLab."

### OG / Twitter card

- OG title: "Mobile User Acquisition Automation for Meta & TikTok | Scalemate"
- OG description: "Bulk-launch app-install campaigns. Sync 30 creatives/day. Auto-rules on Adjust D7 ROAS. For app + game UA teams."
- Image: reuse bulk-launch OG image until we have a mobile-UA-specific shot.

### Cooldown check (Step 6.5)

- Pipeline.md §📊 Monitoring scanned 2026-05-12 — no prior title/meta edit on this URL (page doesn't exist yet). Cooldown does not apply.

---

## Unique Angle

The only execution-layer use-case page on the mobile-UA SERP that (1) honestly tier-segments its product against MMPs and SDK networks ("we sit on top of Adjust — not replace it; we're not Liftoff or AppLovin"), (2) shows two live, named, vertical-different customer case studies (KitUp subscription + ZeptoLab gaming) with real numbers on day-1, and (3) explicitly documents the 30-creatives/day operational floor that industry voices (Deconstructor of Fun, Lancaric, Rao) cite but no vendor landing addresses. This combination — honest scope + named vertical proof + ICP-language pain framing — is missing from every page in the current top-10.

---

## Must Include

- [ ] **Internal links (outbound from this page):**
  - [`/features/bulk-launch`](../../../app/features/bulk-launch)
  - [`/features/automation-rules`](../../../app/features/automation-rules)
  - [`/use-cases/bulk-ad-launch`](../../../app/use-cases/bulk-ad-launch)
  - [`/use-cases/ad-campaign-automation-rules`](../../../app/use-cases/ad-campaign-automation-rules)
  - [`/use-cases/automated-creative-upload-meta`](../../../app/use-cases/automated-creative-upload-meta)
  - [`/ad-creative-uploader`](../../../app/ad-creative-uploader)
  - [`/solutions/media-buyers`](../../../app/solutions/media-buyers)
  - [`/customers/kitup`](https://www.scalemate.co/customers/kitup) (mid-body + Results section)
  - [`/customers/zeptolab`](https://www.scalemate.co/customers/zeptolab) (mid-body + Results section)
  - [`/blog/creative-testing-framework`](https://www.scalemate.co/blog/creative-testing-framework) (in "related reading" / FAQ tail)
  - [`/ai-assistant`](../../../app/ai-assistant) (link from FAQ — "ask the AI assistant about your mobile UA stack")
- [ ] **Internal links (inbound to this page, ship in same release):**
  - 2-3 contextual links inside [`/blog/creative-testing-framework`](https://www.scalemate.co/blog/creative-testing-framework) → this page (mid-body + intro + conclusion).
  - Footer-nav `Use Cases` list updated in `app/layout` or wherever the use-case nav lives.
  - Homepage Use Cases grid: add a tile linking here.
- [ ] **First-hand experience markers:**
  - The 30K+ ads / 35hrs/mo KitUp metric (already on bulk-ad-launch — reuse).
  - The 2,000+ files / 70% upload-time ZeptoLab metric (already on bulk-ad-launch — reuse).
  - A specific "geo cohort split" example with real-world geo names (e.g., "DE / US / UK / FR / IT × Lookalike 1% / 2% / 3% × 5 video creatives = 75 ad sets per platform = 150 ad sets total").
  - A real D7 ROAS rule example (e.g., "if D7 ROAS > 1.5 → scale +50%; if < 0.6 by day 3 → pause").
- [ ] **Data points needed from Natalia:**
  - **CONFIRM** the 30K+ / 35hrs/mo KitUp figure is OK to use on this page (already public on bulk-ad-launch + `/customers/kitup`).
  - **CONFIRM** the 2,000+ files / 70% ZeptoLab figure is OK to use on this page.
  - **NEW** — any internal Scalemate operational stat for mobile UA specifically (e.g., "median Scalemate-managed UA team launches X ad sets per week" or "MMP-aware rules cut wasted spend by Y% in customer cohort"). If we don't have one, omit — don't invent.
- [ ] **Schema:**
  - FAQPage schema on the FAQ block.
  - VideoObject schema if video is included.
  - HowTo schema is **optional** — only add if Step 1-3 can be written in unambiguous instruction form (the bulk-ad-launch page doesn't use HowTo; consider skipping for consistency).
  - WebPage / Service schema (existing template default).

---

## Expected Impact

- **Direct organic clicks if pos 6-9 within 3-6 months:** 30-60 clicks/mo (combined `mobile user acquisition` + `mobile app user acquisition strategy` + `mobile user acquisition platform`).
- **Indirect (creative-testing-framework inbound funnel):** ~50-100 impressions/mo currently land on `/blog/creative-testing-framework` with mobile-UA intent. New page gives those visitors a BOFU target — expect 1-3% click-through to this page, then ~5-10% demo-CTA click rate. Compound effect: 1-3 demo requests/mo from existing TOFU traffic alone.
- **AEO citation lift:** AI Overview present on 70% of mobile-UA queries (scoping §1). Clean Q&A + definition block targets 1-2 AI Overview cite slots over 6 months.
- **Business value:** BOFU × ICP fit 5/5 × direct CTA → conversion-to-demo rate likely 3-8% of unique visitors (vs ~1% on TOFU blog pages). For a UA-team-fit ICP, demo→customer rate is the highest in our portfolio per `scalemate_core_expertise.md`.
- **Pillar lift (compounding):** future M4a (`/blog/mobile-user-acquisition-guide`) + M4b (`/blog/mobile-game-user-acquisition-strategy`) + M4c (AEO attribution explainer) all need this page as their BOFU target. Without it, the entire mobile-UA cluster lacks a conversion endpoint.

---

## Input Needed from Natalia

- [ ] **Title choice:** A (feature-led 66ch) / B (scale-led 70ch) / C (strategy-led 84ch — needs trim). Recommended A.
- [ ] **KitUp & ZeptoLab metric reuse OK?** (Currently live on `/customers/*` and `/use-cases/bulk-ad-launch`. Reusing them on this page is consistent — confirm green.)
- [ ] **Demo video:** reuse `qM4rEFX7pBo` (bulk-launch demo) with updated mobile-UA-specific description, OR record a new 45-60s mobile-UA-focused clip? If new clip blocks ship, default to reuse and re-record later.
- [ ] **Any internal mobile-UA-specific stat we can publish?** (e.g., across Scalemate customers, median X ad sets/cohort, median Y creatives/day synced, Z hrs saved per UA team). If we have it, ship; if not, page works without it.
- [ ] **Adjust badge on hero — green?** First time we'd show Adjust integration logo on a use-case hero alongside Meta + TikTok + Google Drive. Builds Tier 2 credibility instantly. Check with legal/Adjust partnership terms if any.

If all 5 above are green, content-creator agent can write the draft data file in one pass (estimated 6h: 3h copywriting + 1h `_data/index.js` registration + 2h component-wiring + content-ops review).

---

## Next Step

- **If approved (Natalia):** move this item to pipeline.md §4 (Approved for writing). Content-creator agent picks it up.
- **If iterate:** comment on this brief inline; common likely asks: shorten the tier-honesty section, replace ZeptoLab proof with Promin (if/when Promin case study lands), adjust title choice.
- **If reject:** move to §9 Archived (unlikely — pillar scoping already validated cornerstone decision).
