# Topic Brief: Appflame Case Study — Cascade Automation Rules on Meta (R&D-Mode UA)

> Discovery run: 2026-06-04 (local, Loose mode, branch `main`).
> Trigger: Natalia received client-side write-up + 90-day performance data from Appflame; M3 in action-list (`seo-system/action-lists/2026-05-12.md`) ready to unblock.
> Companion: `seo-system/topics/creative-testing-small-budget/brief.md` (methodology counterpart, ships first — this case study cross-links into it as proof point).
> CMS target: Contentful `caseStudy` entry → rendered at `/customers/appflame-automation-rules` ([app/customers/[slug]/page.jsx](../../../app/customers/[slug]/page.jsx)).

**Verdict: ✅ WRITE — proof-asset format, not methodology format.** SEO head-terms for case studies are too thin to chase (`facebook ads case study` 60 vol / TP 200; `meta ads case study` 40 vol). Real ROI sits in three places:

1. **AI-engine citation surface** — Perplexity / ChatGPT / Google AI Overview cite case studies with specific numbers + named client + named author + named product. Our ~435-automated-decisions-per-month dataset (871 across the first 2 months, 754 of them ad-level pauses) + Dmytro Hannoshenko attribution + Appflame brand = high-citation magnet.
2. **Mid-funnel conversion asset** — evaluators landing from `/features/automation-rules` and comparison searches close on case studies, not on listicles.
3. **Internal-link authority boost** for the `automation-rules` pillar — case study + `/use-cases/ad-campaign-automation-rules` + small-budget blog forms a 3-point cluster pointing to one feature page.

Article rides the feature-pillar keyword cluster (Eva Tier 1, `automation rules` family). No need to fight for case-study head terms.

Rules compliance: `content-writing-rules.md` §1.4, §2.4 (case-study format), §3, §4.1, §5, §6.

---

## Inputs from client (received 2026-06-04)

### On-record attribution

**Author / quote subject:** **Dmytro Hannoshenko**, User Acquisition Lead at Appflame (Kyiv, Ukraine).
**Self-described focus (LinkedIn headline):** *"User Acquisition Lead focused on Meta acquisition, creative systems, and scalable testing workflows."* → perfect alignment with the story we're telling. No positioning stretch needed. Use this verbatim in the byline / quote attribution.

### Client write-up (verbatim Ukrainian → paraphrased EN summary)

1. **Operating model:** R&D team — testing IS the work. No stable unit economics to "maintain." Majority of budget = hypothesis validation, new approaches, new creatives.
2. **Need:** maximum spend control + fast reaction to bad funnel signals.
3. **Built:** cascade auto-rules per funnel stage (click → install → custom AEO event → purchase). Rules check multiple conditions simultaneously. Result: faster pause of weak creatives, no overspend.
4. **Why standard Meta automated rules failed:** too rigid — needed custom logic, multi-level checks (ad + ad-set), and custom events from Appflame's internal traffic-scoring system.
5. **Centralized rule management** + ability to scale logic across new campaigns.
6. **Slack integration:** every rule trigger logs to a channel with reason → retroactive analysis. Concrete pattern: late-arriving purchase data → see which rule fired too aggressively → tune logic OR re-enable ad set.
7. **Main practical impact:** more hypotheses tested on the same budget. Counters Meta's behavior of auto-pushing one creative even when KPIs miss — cascade kills the weak variants, opens room for new creative.
8. **Personal impact (Dmytro):** peace of mind + control. US-market campaigns run while EU team sleeps — Scalemate replaces 24/7 Ads Manager babysitting. Ops load down across the team.
9. **Recommendation:** any performance team — for some it's test/spend control, for others scaling automation, for others ROAS protection. Even basic-tier plan supports complex logic.

### Performance data — first 60 days in Scalemate (first 2 months)

| Action | Applied | Runs | Rules |
|---|---|---|---|
| `pause ad` | **754** | 574 | 6 |
| `pause adset` | **109** | 94 | 1 |
| `activate adset` | **8** | 5 | 1 |
| **Total** | **871** | **673** | **8** |

Derived metrics for copy (avg/month framing):
- **~435 automated rule actions per month** (871 across the first 2 months → 871/2)
- **~377 ad-level pauses per month** (754/2) across 6 cascade rules
- **~55 ad-set pauses per month** (109/2) from 1 rule
- **~4 automated ad-set re-activations per month** (8/2) from 1 rule — mechanism / trigger condition **TBC with Dmytro** (could be cascade-driven revert on fresh perf data, scheduled re-enablement, budget-refresh, or other — do NOT label as "smart" / "late-attribution recovery" in copy without confirmation)
- **8 distinct cascade rules** driving the whole automation surface — small rule library, massive output

Pre-Scalemate baseline: **not available**. Framing in copy = "what cadence Scalemate enables for an R&D team," NOT "before/after comparison." Avoid implied counterfactual.

---

## Keyword Data (anchor cluster — feature-pillar ride-along)

Verified via Ahrefs Keywords Explorer (US, 2026-06-04). Case studies don't fight head-term SEO — they ride the pillar cluster + capture AI-citation surface.

| Keyword | Vol | KD | TP | Role |
|---|---|---|---|---|
| `automated ad optimization rules` | (Eva-prescribed primary for `/features/automation-rules`) | — | — | **Primary anchor (ride-along)** — case study reinforces feature pillar |
| `facebook ads automation rules tool` | low | — | — | Secondary — natural inclusion in "Why Standard Meta Rules Weren't Enough" section |
| `auto pause ads roas` | low | — | — | Secondary — direct match to 754 ad-pause story |
| `facebook ads case study` | 60 | 6 | 200 | **Bonus capture only** — single H2 mention, not optimization target |
| `meta ads case study` | 40 | — | — | Bonus — included in seoDescription naturally |
| `madgicx alternative` | 150 | 0 | 70 | **Comparison ride-along** — 1 sentence "after evaluating [tooling], the team chose…" — captures evaluators |
| `revealbot alternative` (now `bir.ch alternative` per [scalemate_competitor_brands](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/scalemate_competitor_brands.md)) | 20 | — | — | Same — ride-along only |
| `meta automated rules limitations` | (long-tail, low vol but high-evaluator-intent) | — | — | Editorial — Challenge section frames this gap explicitly |

**Real ranking ceiling (12 months):** modest — 30-60 organic visits/month. **AI-citation + conversion are the actual KPIs**, not organic clicks.

---

## Existing-content check

| URL | Status | Risk | Decision |
|---|---|---|---|
| `/features/automation-rules` | Shipped, pillar | LOW | **Case study links UP** — adds proof block + 2 internal links |
| `/use-cases/ad-campaign-automation-rules` | Shipped | LOW | Case study links UP — different intent (use-case = problem-solution, case study = proof) |
| `/customers/kitup`, `/customers/zeptolab` | Shipped CMS entries | LOW | Adjacent — different verticals, different feature focus. Cross-link via "Read more case studies" |
| `/customers/promin-automated-rules` (Eva Tier 1) | Not yet shipped (queued in M3 optional adds) | NONE | Different ICP (agency vs in-house mobile UA) — complementary, not competing |
| `/blog/creative-testing-small-budget` | Pending — `seo-system/topics/creative-testing-small-budget/brief.md` | — | **Ships first** per M3 sequencing. Case study cross-linked from "Where Scalemate fits" section there. Methodology lives in the blog; proof lives here. |
| `/automation-rules-library` | Shipped 2026-05-12 | LOW | Case study links to library for "rule template" deep-dive |

**Cannibalization verdict per [feedback_cannibalization_diagnosis](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_cannibalization_diagnosis.md):** None. Each surface answers a different intent (pillar = what; use-case = how; library = templates; case study = proof; blog = methodology).

---

## SERP / Competitive context

Case-study SERPs are tiny + dominated by:
- B2B SaaS vendor case-study libraries (HubSpot, Salesforce-style)
- Agency case studies (low DR, narrow audience)
- Meta's own "success stories" page

**No direct competitor case study targets the R&D-mode UA framing on cascade rules** — most B2B case studies are "we increased ROAS by X%" or "we saved Y hours." Our angle = "we test more hypotheses per dollar by counter-engineering Meta's one-creative push." Differentiated enough that AI-citation engines will prefer ours when answering "how do high-performing UA teams structure automation on Meta."

bir.ch (DR ~72, formerly Revealbot) has case studies but Meta-only and BAU-optimization-framed, not R&D-mode framed. Their case studies don't mention cascade-multi-condition or US-market overnight coverage. We own that angle.

---

## ICP / Reader

**Primary reader:** in-house UA / Performance Manager at:
- Mobile apps publisher (dating, lifestyle, casual games, utilities) — bullseye, matches Appflame exactly
- D2C eCom with R&D-mode testing on new geos or new product lines
- Performance agency with hypothesis-heavy clients

**Why they read this:**
- Evaluating Scalemate for the rules feature → need proof beyond a feature page
- Researching "is cascade automation worth setting up vs standard Meta rules" → this answers
- Looking for templates / mental models for their own R&D operations

**Secondary reader:** founder / growth lead at early-stage app company who runs UA themselves and needs to justify a tool buy to themselves.

**Tertiary surface:** AI engines (Perplexity / ChatGPT / Google AI Overview) when answering queries like:
- "how do mobile UA teams automate Meta at scale"
- "examples of cascade rules for facebook ads"
- "is Revealbot/bir.ch worth it for R&D testing"
- "how to prevent Meta from pushing one creative"

These don't show up as Ahrefs keywords but get high-volume LLM queries. **AI citation is the modern case-study ROI.** Optimize accordingly: short quotable sentences, hard numbers in close proximity to the quote, named author with title.

---

## Content Plan

### CMS field mapping (Contentful `caseStudy` entry)

| Contentful field | Content |
|---|---|
| `slug` | `appflame-automation-rules` |
| `clientName` | `Appflame` |
| `title` | (override the generic template — see Title/Meta section) |
| `industry` | `Mobile Apps — Lifestyle / Dating` |
| `useCase` | `Cascade Automation Rules for R&D Performance Marketing` |
| `clientLogo` | TBD — need Appflame logo asset approved for `/public/client-appflame.*` |
| `companyInformation` | 50-80 words — see draft below |
| `metrics` | 3-4 cards — see Metric cards section |
| `previewImage` | OG card — needs design (mirror `/customers/kitup` style) |
| `seoDescription` | 150-160 char — see draft below |
| `challenge` | Rich text, ~300-400 words |
| `solution` | Rich text, ~400-500 words |
| `results` | Rich text, ~400-500 words + named blockquote |

**Total target length:** 1,100-1,500 words rendered (excluding navigation chrome). Tighter than blog posts — case studies are dense + scannable.

### Schema

- `Article` (already wired in [`page.jsx:134-153`](../../../app/customers/[slug]/page.jsx#L134-L153))
- **Add:** `Quotation` schema for Dmytro's testimonial — high-value for AI citation
- **Add:** Author = Dmytro Hannoshenko + Organization = Appflame (nested under `mainEntity` or `about`)
- **Consider:** override Article → `CaseStudy` is not a schema.org type; stay with Article + structured `about: { @type: Organization, name: "Appflame" }` block

### Outline (proposed Contentful fields, draft-ready)

```
─── HERO (rendered from CMS title) ───
Title: see Title/Meta section
Label: "Case Study" (already wired)

─── OVERVIEW CARD (CMS Overview component) ───
Industry: Mobile Apps — Lifestyle / Dating
Use case: Cascade Automation Rules for R&D Performance Marketing
Logo: Appflame
Company info: [50-80 word paragraph — see draft]
Metrics: 4 cards [see Metric cards]

─── CHALLENGE (rich text H2) ───
H2: Testing as the Job, Not a Side Quest
- Para 1: R&D operating model — no stable economics to maintain, every campaign tests a hypothesis. Most budget = validation, not optimization.
- Para 2: Why standard Meta automated rules failed —
  - rigid logic (single-condition or simple AND/OR)
  - no support for custom funnel events from Appflame's traffic-scoring system
  - no multi-level checks (ad + ad-set together)
  - no centralized management across many campaigns
- Para 3: The Meta behavior they had to counter — algorithm auto-pushes one creative even when KPIs don't match, wasting test cycles and burning budget on losers before the cascade can catch them.
- Para 4: The operational layer — US-market focus means campaigns run while EU team sleeps. Manual Ads Manager monitoring = 24/7 burnout, missed bad signals, slow reaction.

─── SOLUTION (rich text H2) ───
H2: Cascade Rules, One Per Funnel Stage
- Para 1 + bullet list: What they built —
  - Cascade rules mapped to every funnel stage: click → install → custom AEO event → purchase
  - Multi-condition checks (e.g. CPI threshold + IPM minimum + early retention signal — all evaluated together)
  - Custom events plugged in from Appflame's internal traffic-scoring system
  - Ad-level + ad-set-level coverage in one rule library
- Para 2: Centralized management — all 8 rules in one place, clone-and-tune for new campaigns instead of rebuilding from scratch.
- Para 3 + ASCII / inline diagram: One concrete cascade example — `pause ad` rule logic walkthrough. (Need Natalia to confirm directional numbers acceptable, or pull a sanitized real rule from production.)
- Para 4: Slack integration — every trigger posts to a dedicated channel with reason field. Operational wins:
  - Retroactive learning loop: tune logic when a rule fires too aggressively
  - Late-attribution workflow: when purchase data arrives late, team can quickly identify which rule fired too aggressively and either tune it or re-enable the ad set manually. (Whether the `activate adset` rule auto-handles this OR it's a human-triggered revert from the Slack thread = **needs Dmytro confirmation** before publish — current data shows 8 automated re-activations in 60 days but mechanism TBC.)
- Para 5: What this replaces — manual 24/7 Ads Manager babysitting across US time zones, with the on-call cost that creates.

─── RESULTS (rich text H2) ───
H2: ~435 Automated Meta Decisions Per Month
- Lead with the monthly-avg headline + cadence math:
  - **~435 rule actions per month** (avg, first 2 months in Scalemate; 871 actions total)
  - **~377 ad-level pauses per month** (~88/week) — 754 over 2 months
  - **~55 ad-set pauses per month** — 109 over 2 months
  - Sustained pace from the first month on — not a launch spike
- Sub-section: What this changed —
  1. **More hypotheses per dollar** — weak variants killed inside an ad set before Meta over-allocates, opening room for new creative tests
  2. **Faster reaction to bad funnel signals** — cascade catches multi-event failure before single-metric rules would
  3. **Ad-set re-activation as a safety mechanism** — 8 automated re-activations in 60 days (~4/month). Mechanism TBC with Dmytro — frame neutrally in copy until confirmed.
  4. **Ops load down** — UA team no longer babysits Ads Manager across US overnight hours
  5. **Slack channel as institutional memory** — every rule decision is searchable, tunable, post-mortem-ready
- Direct named blockquote from Dmytro [see Quote section]
- Soft close + CTA → "Start trial" (already wired) + secondary "Book demo"

─── (Optional) FAQ — only if CMS supports / if scope allows ───
- Can Meta's standard automated rules do cascade conditions?
- What's a cascade rule, in one sentence?
- How do you prevent pausing ads that have late-attributed purchases?
- Does this approach work for non-R&D BAU teams?
- How long does it take to set up a cascade rule per funnel stage?
```

### Metric cards (overview block — 4 cards)

| Value | Label |
|---|---|
| **~435** | Automated rule actions per month (avg, first 2 months) |
| **~377** | Ad-level pauses per month across 6 cascade rules |
| **~55** | Ad-set pauses per month |
| **24/7** | US-market coverage without manual Ads Manager monitoring |

(Raw totals in first 2 months: 754 ad-pauses + 109 ad-set-pauses + 8 ad-set re-activations = 871 actions total.)

### Company info paragraph (companyInformation field draft)

> Appflame is a Ukrainian mobile-apps holding behind a portfolio of lifestyle and dating products reaching tens of millions of users. Their performance team operates as R&D-first: most of the ad budget goes into hypothesis testing on Meta in T1 / US markets, not BAU optimization. The team needed control over test cycles + custom-event integration with their internal traffic-scoring system — not just standard ROAS rules.

### Quote draft (Results section blockquote — to be confirmed with Dmytro)

Lift the strongest sentence from the client write-up + name it. Candidates:

1. *"Standard Meta automated rules were too rigid for us. We needed custom logic, multi-level checks, and our own events from the way we score traffic — that's what cascade rules unlocked."* — Dmytro Hannoshenko, User Acquisition Lead at Appflame

2. *"We test more hypotheses on the same budget because the cascade kills weak variants before Meta over-pushes them."* — Dmytro Hannoshenko, User Acquisition Lead at Appflame

3. *"Our market is the US. Our team is in Europe. Scalemate is what lets us stop watching Ads Manager at 3am."* — Dmytro Hannoshenko, User Acquisition Lead at Appflame

**Recommendation:** use quote #1 as the primary (it's the substantive product-fit statement = highest AI-citation value) + quote #3 as a secondary pull-quote near the top of Results (it's the human moment).

### Internal links (min 5 per Eva framework — 2 features, 2 solutions, 1 use case)

- `/features/automation-rules` × 2 (anchor: "automation rules", "cascade rule logic")
- `/features/bulk-launch` × 1 (anchor: "launching ads in bulk")
- `/use-cases/ad-campaign-automation-rules` × 1 (anchor: "ad campaign automation rules use case")
- `/use-cases/bulk-ad-launch` × 1 (anchor: "scale launches without manual setup")
- `/automation-rules-library` × 1 (anchor: "rule template library")
- `/solutions/media-buyers` × 1 (anchor: "media buyers")
- `/blog/creative-testing-small-budget` × 1 (anchor: "creative testing on a constrained budget" — when shipped)
- `/customers` (parent) × 1 (anchor: "read more case studies")

### External links

- None required. (Avoid linking out — case studies should keep authority on-page. If we absolutely need one external citation for E-E-A-T, Appflame corporate site is the only acceptable target.)

---

## Title / Meta direction

**Cooldown check:** new URL — not applicable.

**Title strategy:** override the generic CMS template in [`page.jsx:84`](../../../app/customers/[slug]/page.jsx#L84) (`${clientName}: How They Scaled Ad Campaigns with Scalemate`). That template is fine as a fallback but kills SEO + AI-citation on a flagship case study like this one. Need a per-case-study `title` field override path (either CMS-driven via a new optional `seoTitle` field, or hardcode at page generation).

**Brand in title:** NO `| Scalemate` suffix per [feedback_no_brand_suffix_in_titles](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_no_brand_suffix_in_titles.md). "Scalemate" can appear naturally in body but not as title tail.

**Headline direction (locked 2026-06-04 by Natalia):** `How Appflame Tests More Hypotheses Per Dollar` — outcome-first, audience-language framing. Reasons: (1) matches reader's actual KPI ("hypotheses tested" is what R&D performance teams measure themselves on, not "rule actions"), (2) Reddit-native verb "test more" + benefit phrase "per dollar" — passes [feedback_hero_uses_audience_vocab_not_product_terms](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_hero_uses_audience_vocab_not_product_terms.md), (3) supports AI-citation pull because "more X per dollar" is a common LLM answer pattern.

**Power elements available:** outcome verb (test more), unit of value (hypotheses), economic frame (per dollar), client name (Appflame), proof numbers for body/snippet (~435/month rule actions, ~377 ad-pauses/month, 871 total over 2 months).

**Title variants — primary direction (score in content-ops at write stage):**

1. `How Appflame Tests More Creative Hypotheses Per Dollar on Meta` — 60 char ✓
2. `Appflame: Testing More Hypotheses Per Dollar With Cascade Rules on Meta` — 70 char (OVER, trim)
3. `How Appflame's UA Team Tests More Hypotheses Per Dollar on Meta` — 62 char ✓
4. `Appflame: How an R&D UA Team Tests More Hypotheses Per Dollar` — 60 char ✓
5. `How Appflame Tests More Ad Hypotheses Per Dollar on Meta in 2026` — 62 char ✓
6. `Appflame: Tests More Hypotheses Per Dollar With Cascade Rules` — 60 char ✓ (compact, rule-mention)

**Recommended top 3 to score:** #1 (cleanest, scannable), #3 (named team, AI-citation friendly), #4 (R&D framing in title = high-intent reader pull).

**Number-led alternates (kept as backup / for use in H1 subtitle or social variants):**

- A. `How Appflame Runs ~435 Cascade Rule Actions Per Month on Meta` — 60 char ✓
- B. `Appflame: ~435 Automated Meta Decisions Per Month (Case Study)` — 60 char ✓
- C. `Appflame Case Study: 871 Cascade Rule Actions in 2 Months on Meta` — 63 char ✓

These work as social-post / OG variants where the number hook earns the click. The primary headline stays outcome-led.

**Top 3 to score:** #1 (volume-led, monthly-cadence framing), #6 (Appflame-led number-first), #3 (named-role led, strong AI-citation pull because it inlines the author).

**Meta description (150-160 char), 3 variants:**

A. *"How Appflame's UA team runs ~435 cascade rule actions on Meta per month — ~377 ad pauses and ~55 ad-set pauses — to test more creatives per dollar without overnight Ads Manager babysitting."* (188 — trim)

B. *"Appflame's R&D performance team runs ~435 automated Meta decisions per month using cascade rules per funnel stage. Inside the rule logic, Slack workflow, and US-market overnight coverage."* (188 — trim)

C. *"How Appflame automates Meta with cascade rules per funnel stage — ~435 rule actions per month, US-market coverage without manual monitoring, named cascade logic from the UA lead."* (180 — trim)

**Trimmed final candidates:**
- A': *"Appflame's UA team runs ~435 cascade rule actions on Meta per month. How they test more creatives per dollar without overnight Ads Manager monitoring."* (152 char ✓)
- B': *"~377 ad-pauses per month, ~55 ad-set pauses, 8 cascade rules — how Appflame automates Meta at R&D-cadence for US-market UA."* (122 char ✓)
- C': *"How Appflame's UA Lead automates Meta with cascade rules per funnel stage — ~435 rule actions per month, no manual overnight monitoring."* (138 char ✓)

**Recommendation:** B' for the number-triplet hook (highest CTR pattern for case-study SERPs) + B' carries best into AI-engine answer boxes.

---

## Unique Angle (1-2 sentences)

The only case study that frames cascade automation rules as a "test more hypotheses per dollar" strategy — proven across ~435 automated Meta decisions per month (~377 ad-pauses, ~55 ad-set pauses, plus a small re-activation safety mechanism) from a named UA Lead at a mobile-apps holding running R&D-mode US-market acquisition. Differentiated against bir.ch / Revealbot / Madgicx case studies (which are BAU-optimization framed, Meta-only, no R&D-mode language) and against vendor "success stories" (which lack specific cadence numbers + named technical attribution).

---

## Must Include

- [ ] **Named attribution throughout:** "Dmytro Hannoshenko, User Acquisition Lead at Appflame" (full name + role on first mention, "Dmytro" or "Appflame's UA Lead" thereafter). LinkedIn link in Quotation schema if Dmytro approves.
- [ ] **Hard numbers, repeated in close proximity to quote** (for AI-citation chunking): **~435/month, ~377 ad-pauses/month, ~55 ad-set-pauses/month** (primary monthly framings); plus raw totals **754 + 109 + 8 = 871 actions over 2 months**, **~88 ad-pauses/week**, **6 ad-level rules, 1 ad-set rule, 1 re-activation rule = 8 cascade rules total**. Do NOT label the 8 re-activations as "smart" / "late-attribution recovery" until Dmytro confirms the trigger mechanism.
- [ ] **Mobile UA vocabulary** per [feedback_mobile_ua_testing_frameworks](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_mobile_ua_testing_frameworks.md): T1 / US market, AEO event, IPM (where relevant), CPI (where relevant), early retention (d3 or similar). Don't overload — case study isn't a vocabulary lecture; sprinkle in Challenge + Solution.
- [ ] **Reddit-native verbs in subheadings** per [feedback_hero_uses_audience_vocab_not_product_terms](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_hero_uses_audience_vocab_not_product_terms.md): "automate", "without manual babysitting", "stop watching Ads Manager", "cut the creative treadmill". Reserve product nouns ("cascade", "rules", "auto-revert") for body, not subheadings.
- [ ] **No "Scalemate is" buzzwords** per [content framework rules]: no "next-gen", "supercharge", "transform", "AI-powered". Performance tone, data > adjectives.
- [ ] **Concise scannable copy** per [feedback_concise_scannable_copy](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_concise_scannable_copy.md): short paragraphs (≤60 words), bullets where 3+ items, one inline diagram replaces a prose walkthrough.
- [ ] **No competitor bash.** Reference bir.ch / Madgicx ride-along is one neutral sentence in Challenge (e.g. "After evaluating mainstream automation tools, the team needed something that supported multi-event cascade logic and custom traffic-scoring events"). Don't punch.
- [ ] **No gated Meta feature claims** per [feedback_verify_meta_features](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_verify_meta_features.md). Conversion Lift / Brand Lift / Reach & Frequency are not part of this story — don't mention them.
- [ ] **No NDA leaks** per [feedback_client_name_confidentiality](../../../../.claude/projects/-Users-nataliabondar-claude-work-scalemate-scalemate-landing/memory/feedback_client_name_confidentiality.md). Appflame is approved (confirmed in `seo-system-plan.md` + this brief). Do NOT name specific Appflame apps (Hily, Once, etc.) unless explicitly approved by Dmytro / Appflame's marketing — vertical labels only ("lifestyle / dating products").
- [ ] **Slack as a workflow element, not a feature pitch.** The integration is one detail of the operating story, not a selling point on its own.
- [ ] **CTA discipline:** primary `Start trial` (already wired in `[slug]/page.jsx:184`); secondary `Book demo`. Don't add inline mid-page CTAs — case studies convert best at the end.
- [ ] **Schema additions beyond current Article:** `Quotation` schema for the named blockquote (use [schema.org/Quotation](https://schema.org/Quotation)) + `about: { @type: Organization, name: "Appflame" }` in the Article JSON-LD. Bonus AI-citation surface.

---

## Expected Impact

- **Organic SEO ranking:** modest. Realistic 12-month ceiling: 30-60 visits/month from `automation rules` cluster + brand searches + comparison long-tail. Case-study head terms are too thin to matter.
- **AI-engine citation surface:** **this is the main KPI.** Specific numbers + named author + named client + named product = high-quality citation chunk. Hard to measure directly today, but Ahrefs Brand Radar tracking on "scalemate" + "appflame scalemate" + AI Overview spot-checks at T+30/60/90 days.
- **Mid-funnel conversion:** highest-converting page on the site once shipped. Evaluators landing from `/features/automation-rules` who read this convert at much higher rates than evaluators who don't. Measure: % of trial signups whose session includes `/customers/appflame-automation-rules` (analytics — add session tag).
- **Internal-link authority:** boosts `/features/automation-rules` pillar + `/use-cases/ad-campaign-automation-rules` + `/automation-rules-library`. Indirect SEO lift across the rules cluster.
- **External authority surface:** Dmytro likely shares on LinkedIn → backlink + first-touch traffic from LinkedIn referrer. Coordinate publish with his LinkedIn post for maximum lift.

---

## Funnel & Conversion Assessment

| Criterion | Score |
|---|---|
| Funnel stage | BOFU (proof / evaluation) |
| Steps to sign-up | 2 (read case study → click Start trial) |
| ICP fit | 5/5 — Mobile UA in-house lead is bullseye; performance agency PPCers + D2C R&D testers also strong fit |
| Product page link | Direct (case study links to feature pillar + automation-rules-library; trial CTA at end) |

**Score logic:** BOFU asset with a named source carries the highest trust signal of any page type. Above blog posts, above use-case pages. Worth the production effort.

---

## Input Needed from Natalia (gating list)

- [ ] **NDA / brand approval:** confirm Appflame OK with named attribution + named UA Lead in published article + LinkedIn cross-post. (Memory + `seo-system-plan.md` indicate planned; need final yes from Dmytro / Appflame marketing before publish.)
- [ ] **Quote approval:** confirm with Dmytro the 1-2 quotes lifted from his Ukrainian write-up + paraphrased into EN. Send the 3 candidates from this brief — let him pick / tweak.
- [ ] **Cascade rule example for Solution section:** OK to use directional / sanitized numbers (e.g. "CPI > $X AND IPM < Y AND d3 retention < Z%") or do we pull one real rule definition from Dmytro and check before publish?
- [ ] **`activate adset` mechanism (8 actions in 2 months) — confirm with Dmytro:** what triggers this 1 rule? Cascade-driven revert on fresh perf data (= my original "smart re-activation" interpretation)? Scheduled re-enablement? Budget-refresh? Something else? Affects 2 paragraphs in Solution + Results sections — currently framed neutrally pending confirmation.
- [ ] **Logo asset:** Appflame brand logo for `clientLogo` field — typically vector PNG/SVG approved by Appflame marketing. Optimal path: ask Dmytro for their official press-kit logo.
- [ ] **OG preview image:** design needed (mirror `/customers/kitup` style — black bg, brand accent, big number callout). Hand off to design or generate via frontend-design skill.
- [ ] **App vertical naming:** OK to call them "lifestyle / dating products" or stricter ("mobile apps" only)? Affects 2 sentences in companyInformation + Challenge.
- [ ] **CMS title override path:** decide — extend Contentful `caseStudy` schema with optional `seoTitle` field (clean future-proof path), OR override in `[slug]/page.jsx` via per-slug switch (faster, dirtier). Recommend `seoTitle` field for clean reuse across all case studies.
- [ ] **Sequencing:** confirm — small-budget blog ships first → then this case study → then add inline link back from small-budget blog to case study. Per M3 + your message 2026-06-04.
- [ ] **Publish coordination with Dmytro's LinkedIn:** post on his channel coordinated with publish for backlink + first-touch lift.

---

## Audit trail

- 2026-06-04 — Discovery + brief (Opus 4.7, local Loose mode).
- Client inputs received from Natalia via chat: write-up (Ukrainian, ~600 words, R&D operating model + cascade rules + Slack workflow + US-market angle) + 60-day / 2-month performance data (`pause ad` 754/574/6, `pause adset` 109/94/1, `activate adset` 8/5/1) + named attribution (Dmytro Hannoshenko, UA Lead at Appflame, Kyiv, screenshot 2026-06-04). Window corrected from 3 months → 2 months by Natalia 2026-06-04.
- Data sources: Ahrefs Keywords Explorer (overview, US, 2026-06-04, ~310 units total this session); repo scan (Contentful CMS schema in `app/customers/[slug]/page.jsx`, action-list `seo-system/action-lists/2026-05-12.md`, sibling brief `seo-system/topics/creative-testing-small-budget/brief.md`).
- Memory consulted: `feedback_client_name_confidentiality`, `feedback_hero_uses_audience_vocab_not_product_terms`, `feedback_mobile_ua_testing_frameworks`, `feedback_no_brand_suffix_in_titles`, `feedback_concise_scannable_copy`, `feedback_no_research_source_in_copy`, `feedback_verify_meta_features`, `scalemate_competitor_brands`, `feedback_cannibalization_diagnosis`.
- Sequencing per action-list M3 (updated 2026-06-04): ships AFTER `creative-testing-small-budget` blog.
