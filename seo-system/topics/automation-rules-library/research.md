# /automation-rules-library — Discovery Research (2026-05-07)

> Discovery agent run — competitor + format research for S9' page draft.
> Sources: Ahrefs SERP overview, SerpAPI top-10 organic, GSC striking-distance via gsc_client.py.

## TL;DR

- **Dominant SERP format**: Blog listicles (5-10 rules) + Bir.ch (Revealbot) cheat-sheet table at #2 for `facebook automated rules examples`. DR 71.
- **Blue-ocean confirmed**: Zero competitor has 30+ rules in one place. ScaleMate's 33 production rules = 3x depth advantage.
- **Pain hook winners (top-10 frequency)**: (1) "Stop wasting budget on underperformers" 80%, (2) "Save time monitoring 24/7" 60%, (3) "Scale winners overnight / dayparting" 50%, (4) "Avoid disrupting learning phase" 30%, (5) "Consistency across 50+ campaigns" 20%.
- **Recommended hero hook**: "Ready-to-copy Meta automation rules — 33 production-tested rules from teams running 50+ campaigns. Every rule includes the native Meta limitation."
- **Format commit**: Card-grid with goal/level filters + expandable detail per card (condition, threshold, action, schedule, native Meta limitation callout, when-to-use). Wins over Bir.ch table on mobile + scannability + depth-per-rule.
- **GSC striking distance**: `/use-cases/ad-campaign-automation-rules` ranks pos 8.2 for `automated rules ad campaign management p` — library can absorb broader cluster via internal linking.

## SERP Map

### `facebook automated rules examples`

| # | Site | Format | DR | # rules | Hook | Monetization |
|---|---|---|---|---|---|---|
| 1 | Mayple | Listicle blog | ~65 | 7 rules | "Scale your Facebook ads" | SEO-only |
| 2 | **Bir.ch (Revealbot)** | **Cheat-sheet table** | **71** | ~10-12 categories | "Pause / daypart / overnight" | Vendor product page |
| 3 | Bestever.ai | Listicle blog (Aug 2025) | ~55 | 10 rules numbered | "Pause underperforming, scale winning" | SEO-only |
| 4 | AdsCook | Blog + examples | ~50 | 5 rules + thresholds | "Kill overspending instantly" | Vendor CTA |
| 5 | WordStream | Blog + how-tos | 90 | ~3 rules + setup | "Save time on routine tasks" | SEO + CTAs |
| 6 | KlientBoost | Blog + definitions | ~75 | 6 rules + why | "Empower automation routine" | Lead capture |
| 7 | Facebook Official | Help docs | 100 | Sparse | None (utility) | n/a |

### `facebook ads cheat sheet`

- WordStream — "Fast & Easy Facebook Advertising Cheat Sheet", DR 90 — focuses on specs/sizing, NOT rules.
- Disruptive Advertising — "Only Facebook Ad Cheat Sheet" DR 75 — copy + strategy, NOT rules.
- Multiple gated PDFs (K6, Connectio, Mojca Mars, Homes.com, HubSpot) DR 60-94 — lead-gated, not web-native.
- **Bir.ch (Revealbot)** — only native HTML cheat sheet specifically targeting automation rules.

### `facebook ads pause rules automation`

- Facebook official help — pure how-to, no examples.
- SandHill Digital "Mastering Facebook Automated Rules" (May 2024) DR ~50 — 5-6 scenario-based rules.
- Reddit/Quora — community discussions on learning-phase disruption + dayparting (no consensus).

**Key finding**: No competitor has >30 rules in one place. Bir.ch is closest with ~10-12 categories. ScaleMate's 33 production rules = 3x depth, defensibly differentiated.

## Pain Entry Analysis

| Hook | Top-10 freq | DR of leader | ScaleMate fit | Conflict risk |
|---|---|---|---|---|
| "Stop wasting budget on underperformers" | 8/10 (80%) | 90+ (WordStream) | #1 use-case match | None — owned by WordStream but commodity |
| "Save time monitoring 24/7 manually" | 6/10 (60%) | 75+ (KlientBoost, Disruptive) | Direct match | Medium — commodity benefit |
| "Scale winners overnight / dayparting" | 5/10 (50%) | 75+ (Ignite Visibility) | Strong alignment with auto-scale rule examples | None |
| "Avoid disrupting learning phase" | 3/10 (30%) | 75+ (KlientBoost) | Educational angle (Meta limitation callout) | None |
| "Consistency across 50+ campaigns" | 2/10 (20%) | 65+ (Mayple) | Uncommon — multi-campaign ops | Strong differentiator |

**Winner**: Pain #1 ("stop wasting budget") + #5 ("multi-campaign consistency") combo. ScaleMate angle: "Stop wasting budget — 33 production-tested pause rules from teams running 50+ campaigns. Every rule includes the native Meta limitation."

## Format Gap Recommendation

### What's winning

- Listicles (5-10 numbered rules) rank because scannable.
- Official Meta help docs rank #1 but lose on "examples" intent.
- **Bir.ch cheat-sheet table at #2** — tables win for reference content.

### What's missing

- No 30+ rule interactive library on SERP.
- No filter-by-goal or filter-by-level — all linear.
- No native-Meta-limitation callout — competitors assume readers know constraints; nobody educates.
- No "production-sourced" credibility marker.

### Recommended commit

**Hybrid card-grid + expandable detail.**

- Cards: title + goal tag + level + quick condition/action preview.
- Expand: full chain (multi-task rules), when-to-use, native Meta limitation callout (orange box).
- Filter: Goal (kill-losers / scale-winners / budget-control / rollback / creative-fatigue) + Level (campaign / ad-set / ad).
- No email gate. Public, SEO-indexed.

### Differentiators ScaleMate can own

1. **Native Meta limitation note on every rule** — competitors skip this; we educate (e.g., "Meta only allows one condition group per rule. For OR-logic across multi-condition triggers, this needs splitting.").
2. **Filter by goal, not metric** — matches user intent ("I want to kill losers", "I want to scale winners") instead of metric ("ROAS rule" / "CPA rule").
3. **Production-sourced from real customers** — anonymised live accounts across 4 verticals (DTC subscription, mobile apps, DTC e-commerce, performance teams running $1M+/mo). Trust signal vs hypothetical generic examples. (Client names stay confidential per `feedback_client_name_confidentiality.md` memory.)

## GSC Striking Distance (last 28 days)

| Query | Position | Clicks | Impressions | CTR | Note |
|---|---|---|---|---|---|
| `automated rules` | 79.0 | 0 | 3 | 0% | `/features/automation-rules` — depth opportunity |
| `automated rules ad campaign management p` | 8.2 | 0 | 4 | 0% | `/use-cases/ad-campaign-automation-rules` — **striking distance** |
| `automate ad operations` | 87.5 | 0 | 2 | 0% | Competitor outranks |
| `best automated rules for scaling ads` | 32.0 | 0 | 1 | 0% | Long-tail, niche |
| `automated campaign testing platform` | 14.5 | 0 | 4 | 0% | Content mismatch |

**Insight**: `/use-cases/ad-campaign-automation-rules` at pos 8.2 = striking distance. New library page can:
- Be linked from use-case page (CTA: "See our library of 30+ ready-to-copy rules").
- Absorb and outrank pos 8.2 if more relevant (33 rules in one place).
- Lift the broader `automated rules` query (pos 79) via topical authority.

## Risks / Open Questions

1. **Volume collapse**: Most "automation rules" + Meta-branded queries show 0 vol via Ahrefs, but SerpAPI shows 553M results. Possible indexing lag. **Action**: Monitor GSC after launch; expect 3-4 wk lag for impressions.
2. **Bir.ch competitive threat**: Revealbot DR 71 cheat-sheet at #2. If they scale to 30+ rules, they own the space. **Action**: Lean on production-sourced + Meta-limitation differentiators.
3. **Email-gating trap**: Most PDF cheat sheets are gated. Pure-SEO no-gate positioning differentiates ScaleMate but requires strong on-page UX to drive engagement. **Action**: No gate Phase 1; CTAs to product page + related content.
4. **Platform scope**: Brief = Meta only. Bir.ch + competitors don't state scope. If users land expecting TikTok/Google → bounce risk. **Action**: Meta-specific headline + filter UI label sets scope early.
5. **Content staleness**: Bestever fresh (Aug 2025); Meta updates rules quarterly. **Action**: Quarterly refresh cadence; mark "updated" date on rules.

---

_Research run by Discovery Agent (Explore subagent), 2026-05-07. Sources: Ahrefs MCP, SerpAPI MCP, GSC via gsc_client.py._

---

## 2026-05-08 — Phase 1.6 refresh + 4-scope

> Re-discovery on Phase 1.6 production state (32 rules, sales + app-promotion
> objectives, 5 playbook frameworks, Slack alert action). Sources: Ahrefs MCP
> (keywords-explorer, serp-overview, site-explorer), SerpAPI MCP (live SERP
> snapshot), GSC via `~/.claude/skills/seo-ops/gsc_client.py` (28d, striking
> distance pos 4-20).

### TL;DR

- **Volume picture stable but thin.** Primary cluster anchor `facebook
  automated rules` = 150 vol / KD 2 (Ahrefs, 2026-05-08). Most exact-match
  cheat-sheet / library / templates queries return 0 vol — the cluster lives
  via long-tail + GSC impressions, not the head term.
- **New defensible target surfaced**: `creative testing framework` 200 vol /
  KD 2 / TP 70. This is Phase 1.6's single biggest net-new lane — the 5 new
  playbook rules (rule-100/101/102/103) directly map to it. ScaleMate already
  ranks for adjacent queries (multiple GSC top-10 hits, see §C below).
- **`facebook ads automation` is the commercial bigger-fish** at 150 vol / KD
  6 / TP 900 / commercial-intent flag. Library can absorb this via internal
  linking + matching copy in the educational opener and FAQ.
- **Bir.ch (Revealbot) still owns the SERP at #3** for the head term, behind
  Meta's own help docs (#1, #2, #5). Their cheat-sheet has 3 referring
  domains total — confirming this niche is low-link-density. Outreach
  strategy isn't "out-link Bir.ch", it's roundups, ProductHunt, Substack
  newsletters, and PPC community posts.
- **GSC striking-distance is rich on creative-testing intent.** Multiple
  Phase 1.6-relevant queries already at pos 1-15: `creative testing
  framework` (pos 29.6, 26 impr — lift target), `meta ads creative testing
  framework 2026` (pos 8.3), `ad creative testing framework` (pos 5.0),
  `meta ads creative fatigue signals` (pos 9.0 — direct match for rule-104
  Slack alert), `creative testing framework paid ads` (pos 13.0),
  `automated rules ad campaign management p[latform]` (pos 8.7 — original
  use-case page hit), `meta ads automated rules for pausing dur[ing
  learning]` (pos 11.3).
- **AI Overview risk**: SerpAPI light view doesn't render AIO blocks but
  PAA box on `facebook automated rules` SERP shows 4 questions ("What are
  the automated rules on Facebook?", "What is automated behavior on
  Facebook?", "What are automated rules?", "What is the 20 rule on
  Facebook?"). Page should answer the first 3 in copy + FAQPage schema to
  win PAA inclusion.
- **Recommended copy moves**: tighten hero around the GSC striking-distance
  intent ("automated rules", "creative testing framework", "rule library");
  add 2 PAA-shaped FAQ items; lift "framework" language across hero +
  library section header to absorb the creative-testing cluster; add a
  light educational opener (≤120 words) that answers "what's a Meta
  automated rule" since that's the dominant PAA pattern.

### A) SERP map — primary cluster (2026-05-08)

#### `facebook automated rules` (vol 150, KD 2 — Ahrefs)

| Pos | URL | DR | Traffic | Format |
|---|---|---|---|---|
| 1 | facebook.com/business/help/1694779440789213 | 100 | 127 | Help doc |
| 2 | facebook.com/business/help/644860419002064 | 100 | 41 | Help doc |
| 3 | bir.ch/facebook-automated-rules | 72 | 30 | Cheat-sheet table |
| 4 | PAA box (4 questions) | — | — | — |
| 5 | facebook.com/business/help/219166281785482 | 100 | 24 | Help doc |
| 6 | klientboost.com/facebook/facebook-ads-automated-rules/ | 76 | 40 | Listicle (6 rules) |
| 7 | mayple.com/resources/.../facebook-ads-automated-rules | 72 | 14 | Listicle (7 rules) |
| 8 | wordstream.com/blog/ws/2023/07/27/facebook-automated-rules | 90 | 11 | Listicle (3 rules) |
| 9 | reddit.com/r/FacebookAds/comments/1drca6a/... | 95 | 6 | Forum thread |

**Read.** Meta dominates with help docs. Bir.ch is the only third-party
cheat-sheet/library format on page 1. Listicle DR-leaders (KlientBoost,
Mayple, WordStream) all run 3–7 rules — ScaleMate's 32-rule depth is still
the unique wedge.

#### `facebook ads rules cheat sheet` (live SerpAPI, 2026-05-08)

Top 10 contains zero rule-automation cheat-sheets (Google flags "rules"
missing on most results). SERP serves Ad-format / Pixel cheat-sheets
instead — semantic mismatch. **Implication**: don't over-invest in this
exact phrase; it's a noisy intent-blend Google can't serve well.

#### Other primary targets — 0-volume in Ahrefs (cluster cousins)

| Keyword | Vol | KD | Status |
|---|---|---|---|
| `facebook automated rules examples` | 0 | — | No exact-match volume; intent covered by parent term |
| `meta ads automation rules library` | 0 | — | Brand-new construction; ScaleMate can own without competition |
| `automated rules cheat sheet` | 0 | — | 0 vol but Bir.ch's title earns clicks via long-tail |
| `automation rules templates meta` | 0 | — | 0 vol, skip |
| `meta automated rules` | 10 | — | Tiny vol; cluster cousin |

### B) Net-new keywords for Phase 1.6 rules (2026-05-08)

| Keyword | Vol | KD | TP | Intent | Recommendation |
|---|---|---|---|---|---|
| **creative testing framework** | **200** | **2** | 70 | Informational | **Tier-A net-new lane.** Add "framework" language to hero + library. Map to playbook rules № 28-31 (Phase 1-3 testing). |
| facebook ads automation | 150 | 6 | 900 | Informational + commercial | Tier-A. Already covered by `/blog/facebook-ads-automation`. Library page should internal-link this anchor; lift via FAQ. |
| facebook ads automation tools | 50 | 14 | 700 | Commercial | Tier-B. Competitive but accessible. Beyond-CTA section should reference the tooling angle. |
| automate facebook ads | 150 | 7 | — | Informational | Tier-B. Companion phrase; add to hero subtitle as natural variant. |
| automated facebook ads | 70 | 5 | — | Informational | Tier-C variant. |
| automated rules | 70 | 9 | — | Informational | Tier-A generic anchor. Hero should rank against this; library is the canonical asset. |
| creative fatigue facebook ads | 50 | — | — | Informational | Tier-B. Direct match for rule № 32 (Slack alert). FAQ candidate. |
| meta ads creative testing | 30 | — | — | Informational | Tier-C variant. |
| facebook ads creative testing | 10 | — | — | Informational | Tier-C variant. |
| creative testing meta ads | 10 | — | — | Informational | Tier-C variant. |
| app install rules meta | 0 | — | — | Informational | Skip. Hyper-niche; 0 vol. |
| cpi pause rule | 0 | — | — | Informational | Skip. |
| ipm meta benchmark | 0 | — | — | Informational | Skip. |
| meta cpm rules | 0 | — | — | Informational | Skip. |
| roas pause rule meta | 0 | — | — | Informational | Skip. |
| 2x cpa pause rule | 0 | — | — | Informational | Skip. |

**Read.** Mobile-UA / CPI / IPM keywords show 0 vol in Ahrefs — drop
optimisation focus from those. Concentrate net-new optimisation on the
**creative-testing framework** lane (rules № 28-31 in UI) and the
**`facebook ads automation` commercial cluster** (already half-ranking
elsewhere on the site).

### C) GSC striking-distance refresh (last 28d, pos 4-20, 2026-05-08)

Pulled via `gsc_client.py --striking --days 28 --queries 500` for
sc-domain:scalemate.co. Rule/automate/cheat/library/fatigue/creative-test
filter applied. Highlights below — 24 striking-distance queries in scope.

| Query | Pos | Impr | Page (likely) | Suggested action |
|---|---|---|---|---|
| best creative testing framework for user [acquisition] | 1.0 | 6 | `/blog/best-mcp-servers-meta-google-ads`* | Already #1; library page should not cannibalize. Internal-link from library. |
| creative testing framework mobile app ua | 1.0 | 2 | same | Same — preserve. |
| ad creative testing framework | 5.0 | 1 | same | Striking. Library page can co-rank. |
| ai tools for scaling creative testing in […] | 4.9 / 5.2 | 15 / 4 | same | Adjacent intent. |
| automated rules ad campaign management p[latform] | 8.7 | 3 | `/use-cases/ad-campaign-automation-rules` | **Striking distance.** Library page absorbs via internal link + matching H2. |
| meta ads creative testing framework 2026 | 8.3 | 6 | blog/use-case mix | Library page can grab "framework 2026" intent with playbook-rule cards. |
| meta ads creative fatigue signals | 9.0 | 1 | uncertain | **Direct match for rule № 32 (Slack alert).** FAQ candidate. |
| how to choose creative testing framework | 9.3 | 3 | uncertain | FAQ candidate. |
| how to build a creative testing pipeline | 9.2 | 8 | uncertain | FAQ candidate (or blog cross-link). |
| meta ads automated rules for pausing dur[ing learning] | 11.3 | 3 | uncertain | **Direct match for FAQ #6 ("safe for learning phase?").** Already in FAQ — re-tune copy to exact phrasing. |
| best automated creative testing platform | 14.5 | 12 | uncertain | Tier-C lift. |
| automated campaign testing platform | 14.5 | 4 | uncertain | Tier-C lift. |
| creative testing framework paid ads | 13.0 | 1 | uncertain | Direct lift target. |
| best automated rules for scaling ads | 32.0 | 1 | `/features/automation-rules`? | Lift candidate; library is the better landing. |
| creative testing framework | 29.6 | 26 | mixed | High-impression lift target. |
| automated creative testing | 29.0 | 27 | mixed | High-impression lift target. |
| meta ad fatigue | 48.6 | 13 | mixed | Out of striking distance, but cluster signal. |
| ad fatigue meta | 49.2 | 13 | mixed | Cluster signal. |
| creative fatigue | 43.6 | 17 | mixed | Cluster signal — rule № 32 anchor. |
| ad scaling and automation | 35.9 | 8 | uncertain | Cluster signal. |
| ppc automation rules | 91.3 | 10 | low | Low priority — competitor-owned. |
| automated ua creatives | 18.9 | 14 | mixed | Mobile-UA angle for rules № 28-29. |

\* Note: `/blog/best-mcp-servers-meta-google-ads` is currently outranking
its expected page — confirms the topic cluster is sticky.

**Net read.** ScaleMate already half-ranks on 8+ creative-testing-framework
queries thanks to existing blog content. The library page can:
1. Add a "framework" H2 anchor + interlink the cluster blog so authority
   flows to the rules library (the canonical asset).
2. Absorb the use-case page's `automated rules ad campaign management
   platform` striking-distance hit (8.7) by carrying matching intent copy
   in hero / library section header.
3. Win 2 PAA spots ("safe for learning phase?", "What's a Meta automated
   rule?") via FAQPage schema additions.

### D) Backlink / referring-domain landscape (2026-05-08)

Surveyed top SERP competitors for `facebook automated rules`:

| Target page | Refdomains | DR range | Pattern |
|---|---|---|---|
| bir.ch/facebook-automated-rules | 3 | 9 – 71 | Vendor (revealbot.com), Glarity, low-DR mirror |
| klientboost.com/.../facebook-ads-automated-rules/ | 6 | 0 – 22 | Spammy / promo / coupon sites |
| wordstream.com/.../facebook-automated-rules | 0 (in Ahrefs cache) | — | Dead-letter for the URL slug |
| mayple.com/.../facebook-ads-automated-rules | 0 (in Ahrefs cache) | — | Same |

**Anchor patterns surveyed (Bir.ch)**:
- "Meta Ads automated rules cheat sheet"
- "Facebook Ad Automated Rules Cheat Sheet | Birch (Revealbot)"
- bare-URL link

**Read.** This niche has near-zero earned-link density. Ranking comes from
content depth + topical authority + brand mentions, not link velocity.
Outreach candidates therefore aren't "find sites linking to Bir.ch"
(there are 3) but rather:

| Outreach lane | Realistic DR target | Approach | Anchor pattern |
|---|---|---|---|
| ProductHunt launch (existing scalemate launch can re-link to library) | 91 | Link in launch description / comments | "32 ready-to-copy Meta automation rules" |
| Substack PPC newsletters (DemandCurve, Demand Gen Live, etc.) | 70-85 | Pitch as a free public reference | "automation rules library" / brand+resource |
| Reddit r/FacebookAds, r/PPC, r/marketing | 95 (Reddit DR) | Cite as reference in answer to "how do I automate X" threads | Bare URL + value-first comment |
| Roundup posts ("best free Facebook ads tools 2026", "best PPC cheat sheets") | DR 30-60 | Outreach to listmaker | "Meta automation rules library" / branded |
| AppSumo / G2 / Capterra ScaleMate listing | DR 70-91 | Link from existing listing's resources tab | "rules library" / "automation framework" |
| Madgicx / Revealbot / AdEspresso community write-ups | DR 60-72 | Comparative reference (low likelihood; competitor) | Branded only |
| Marketing podcast show-notes (Perpetual Traffic, Ad Lab) | DR 55-75 | Send rules library as guest-prep reference | Branded |
| Meta-focused YouTube channel descriptions (cited in SerpAPI tests) | YouTube domain DR 99 | Sponsor / collab on automation tutorials | Branded URL |

**Anchor recommendations (apply on internal links + future outreach):**
- Branded primary: "ScaleMate's automation rules library", "ScaleMate's
  Meta rules library"
- Resource-led: "32 ready-to-copy Meta automation rules", "free Meta
  rules library", "Meta automation cheat sheet"
- Long-tail: "creative testing framework rules", "automated rules for
  pausing during learning phase"
- Avoid: exact-match "Meta ads automation rules library" stuffed across
  every link — looks SEO-built.

### Risks / open questions for Natalia

1. **Volume thinness**: Most exact-match cluster terms show 0 vol in
   Ahrefs. We're betting on long-tail + cluster authority + AI Overview /
   PAA inclusion. If GSC impressions don't lift in 4 weeks, reconsider
   format (interactive library may need an indexable rule-detail-page
   sub-architecture for individual rules to rank on long-tail).
2. **Competitive response from Bir.ch / Revealbot**: They already own
   pos 3 with a thin cheat-sheet. If they expand to 30+ rules, they
   re-take the lane. Mitigation: lean harder on production-sourced +
   per-rule Meta-limitation differentiators in copy.
3. **PAA capture**: To win the PAA box on `facebook automated rules`,
   the FAQPage schema needs Q-shaped questions matching the 4 PAA items.
   Phase 1.7 should add 1-2 PAA-aligned FAQs (e.g., "What are Meta's
   automated rules?").
4. **`creative testing framework` lift target**: Page already at pos 29.6
   with 26 impressions/28d. Library should internal-link the cluster
   blog and reciprocate; expect a 4-6 week lift if topical authority
   ladders.
5. **No AI Overview rendered in SerpAPI light view**: can't verify AIO
   citation strategy without a separate live check. Phase 1.7 should
   re-run with `engine=google` (full SERP) to confirm AIO presence on
   `facebook automated rules`. Out of scope for this content rebuild.

---

_Phase 1.6 refresh run by Discovery Agent (Natalia's local Opus 4.7 1M),
2026-05-08. Sources: Ahrefs MCP (subscription Lite, 73K/100K units used),
SerpAPI MCP (google_light), GSC via gsc_client.py for sc-domain:scalemate.co._
