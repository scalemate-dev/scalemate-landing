# Topic Brief: Automation Rules Cluster Strategy

> **Type:** Cluster strategy (not single article).
> **Slug:** automation-rules-cluster
> **Branch:** seo/automation-rules-cluster
> **Date:** 2026-04-29
> **Discovery agent:** Claude (Opus 4.7)

---

## TL;DR — Action Plan in 8 Lines

1. **Cluster has wrong center of gravity.** `/features/automation-rules` ranks pos 84-93 for ads queries because it competes with `/use-cases/ad-campaign-automation-rules` and loses. Feature page lacks any "rules" depth.
2. **Use-case page is the strongest asset (pos 7.2 on a niche query, ICP-perfect).** Title/meta fix is overdue (item #10, deferred 2026-04-27 — revisit now).
3. **Two blog posts (`facebook-automated-rules`, `facebook-ads-automation`) are not indexed after 5 weeks** — primary blocker, not a content problem. Indexation push is the only thing that unlocks ~150-300 mo/imp blog traffic.
4. **Cannibalization is mild but real:** 2 queries (`ad scaling and automation`, `how to automate ad spend limits...`) are split between feature + use-case. Solve via title/H1 separation, not redirect.
5. **Existing pages cover the cluster well.** No new article needed in next 30 days. Only one possible addition: `facebook-automated-rules-examples` (vol 50, KD 2) — a derivative of the existing blog post, optional.
6. **Ahrefs blind spot:** Ahrefs sees `automation rules` as a Jira/Asana keyword (vol 60, parent_topic = "jira automation rules"). Stop targeting that bare phrase — focus on `facebook automated rules` (vol 150, KD 2) and `facebook ads automation` (vol 150, KD 6).
7. **Quick CTR fix on use-case page is the highest-leverage move.** 186 imp / 0 clicks with pos 7.6 = title problem, not content problem.
8. **Internal linking refresh is overdue** — uploader cluster received it on 2026-04-20 but rules cluster was skipped.

---

## 1. Cluster Map (current state)

| URL | Type | Imp 28d | Pos 28d | Top winning query | Indexed? | Strongest asset? |
|---|---|---|---|---|---|---|
| `/features/automation-rules` | feature | 124 | 30.2 | `automated rules ad campaign management pause ad group cpa threshold notification` (5 imp, pos 8.8) | ✅ Yes | ❌ No — ranks pos 80-93 for main queries |
| `/use-cases/ad-campaign-automation-rules` | use-case | 186 | 7.6 | `roas tools offering automated campaign pause/renew rules` (21 imp, pos 7.2) | ✅ Yes | ✅ **Yes — best ICP fit** |
| `/blog/facebook-automated-rules` | blog | 0 | — | — | 🚨 **No** (5 weeks since publish 2026-03-27) | Content fine, indexation broken |
| `/blog/facebook-ads-automation` | blog | 0 | — | — | 🚨 **No** (5 weeks since publish 2026-04-06) | Content fine, indexation broken |

**Cluster total:** 310 impressions / 0 clicks / 28 days. Use-case page carries 60% of impressions. Feature page carries 40% but ranks at pos 30+.

---

## 2. Keyword Cluster (full map)

> **Source:** Ahrefs `keywords-explorer-matching-terms` + GSC anonymous queries. US locale.
> **Critical:** "automation rules" alone (vol 60, KD 10) is dominated by Jira/Asana/Pardot — not ads. Drop as standalone target. Use the `facebook + rules` and `meta + rules` modifiers.

### 2.1 Tier-1 keywords (volume ≥ 50, on-intent, achievable)

| Keyword | Vol/mo (US) | KD | CPC | Intent | Our coverage | Notes |
|---|---|---|---|---|---|---|
| **facebook automated rules** | 150 | 2 | $1.30 | informational, branded | ✅ `/blog/facebook-automated-rules` (not indexed) | Primary target. SERP = Meta help + Birch + KlientBoost + Mayple. |
| **facebook ads automation** | 150 | 6 | $4.50 | informational + commercial | ✅ `/blog/facebook-ads-automation` (not indexed) | Higher commercial intent. SERP = Meta + Kitchn.io + Reddit + Birch. |
| **automate facebook ads** | 150 | 12 | $7.00 | informational, branded | ⚠️ Partial via blog `facebook-ads-automation` | Same intent as #2. One article covers both. |
| **revealbot** | 450 | 0 | $3.00 | navigational, commercial | ❌ No coverage | Comparison opportunity (not in scope this cycle — see scorecard) |
| **facebook ad rules** | 50 | 24 | $0.35 | informational, branded | ⚠️ Partial — feature page ranks pos 84 for "automated rules" | Note: SERP intent is *advertising policy compliance*, NOT automation rules. Different keyword. **Drop.** |
| **automated rules facebook** | 50 | 3 | $1.30 | informational, branded | ✅ Same article as `facebook automated rules` | Variation of #1. |
| **facebook ads automation tools** | 50 | 14 | $6.00 | commercial | ❌ No tools-listicle | **Strategic Bet candidate** — but lower priority than creative-testing-pillar. |
| **facebook ads automation software** | 40 | 12 | $7.00 | commercial | ❌ No coverage | Same SERP as #7. One article serves both. |
| **facebook ads automated rules** | 40 | 2 | $1.30 | informational, branded | ✅ Same article as #1 | Variation. |
| **how to automate facebook ads** | 50 | 7 | $2.00 | informational, branded | ✅ `/blog/facebook-ads-automation` covers | Indexation needed. |

### 2.2 Tier-2 keywords (volume ≥ 20, ICP-aligned)

| Keyword | Vol/mo | KD | Intent | Our coverage |
|---|---|---|---|---|
| automated rules facebook ads | 20 | — | informational | ✅ Primary blog |
| meta ads automated rules | 20 | — | informational | ✅ Primary blog |
| facebook ads automated rules examples | (inferred ~30) | 2 | informational | ⚠️ Could be derivative — see Action Plan |
| google ads automated rules | 50 | 4 | informational, branded | ❌ Out of scope (not Meta) |
| ppc automation rules | 30 | — | informational | ⚠️ GSC: 8 imp pos 88 on /features/automation-rules (off-intent) |
| ppc automated rules | 19 | — | informational | ⚠️ GSC: 19 imp pos 93 on /features/automation-rules (off-intent) |

### 2.3 GSC anonymous long-tail (real demand, low volume)

These are AI-generated long-tail queries from GSC. Not Ahrefs-visible. Each <30/mo but highly ICP:

- `roas tools offering automated campaign pause/renew rules` — 21 imp, pos 7.2 → `/use-cases/ad-campaign-automation-rules` (BOFU, perfect fit)
- `automated rules ad campaign management pause ad group cpa threshold notification` — 5 imp, pos 8.8 → `/features/automation-rules`
- `best automated rules for scaling ads` — 1 imp, pos 36 → use-case
- `how to automate ad spend limits for marketing teams` — 3 imp split between feature + use-case
- `ad scaling and automation` — 3 imp split between feature + use-case (cannibalization)

### 2.4 Keyword cluster intent split (CRITICAL for content decisions)

The `automation rules` cluster has **3 distinct intents** that must not be merged:

1. **HOW-TO / EDUCATIONAL** ("facebook automated rules", "facebook automated rules examples", "how to automate facebook ads"). SERP = Meta help + KlientBoost + Mayple + WordStream + Birch. Format: long-form guide with examples. **Owner: `/blog/facebook-automated-rules` (existing).**
2. **COMMERCIAL / TOOL** ("facebook ads automation", "facebook ads automation software", "facebook ads automation tools"). SERP = Meta product + Kitchn.io + Birch + Make.com + listicles. Format: levels-of-automation guide or tools listicle. **Owner: `/blog/facebook-ads-automation` (existing).**
3. **PRODUCT / BOFU** ("roas tools offering ...", "rules for scaling ads", "automated campaign pause/renew rules"). Long-tail anonymous queries. Format: product page with feature depth. **Owner: `/use-cases/ad-campaign-automation-rules` (existing, ranking pos 7.2).**

> **Rule:** these three intents = three pages. Don't consolidate. The existing 3-asset structure is correct (the 4th page — `/features/automation-rules` — is the redundant one).

---

## 3. Cannibalization Analysis

### 3.1 Direct overlap (2 queries split between 2 pages)

| Query | Page A | Imp A | Pos A | Page B | Imp B | Pos B | Diagnosis |
|---|---|---|---|---|---|---|---|
| `ad scaling and automation` | `/features/automation-rules` | 1 | 36.0 | `/use-cases/ad-campaign-automation-rules` | 2 | 22.5 | Both off-page. Use-case wins, feature dilutes. |
| `how to automate ad spend limits for marketing teams` | `/features/automation-rules` | 1 | 89.0 | `/use-cases/ad-campaign-automation-rules` | 2 | 18.5 | Same — use-case is correct destination. |

**Conclusion:** soft cannibalization. Not severe enough to redirect, but the feature page is dragging cluster authority across the top funnel. Feature page H1 is currently keyword-stuffed for ads-related queries that the use-case already owns.

### 3.2 Why feature page ranks at pos 80-93

Looking at the queries the feature page ranks for (`automated rules`, `ppc automated rules`, `ppc automation rules`, `automate ad operations`) — Google sees this page as a **broad weak signal** for "rules in advertising" but doesn't rank it highly because:

- Use-case page is more specifically about ad campaign rules
- Top SERP for "ppc automated rules" is dominated by Google Ads docs (different product)
- Feature page has no FAQ section, no examples table, no setup screenshots

### 3.3 Cross-cluster note (separate from action plan)

Adjacent cluster also has cannibalization — `/features/bulk-launch` + `/use-cases/bulk-ad-launch` split `automated ad launch tool` (19 imp). **Out of scope for this brief** — flag for next discovery cycle.

---

## 4. SERP Intent Map (top-3 SERP analysis)

### 4.1 SERP: "facebook automated rules" (vol 150, KD 2)

| Pos | URL | Domain | DR | Type | Traffic |
|---|---|---|---|---|---|
| 1 | facebook.com/business/help/1694779440789213 | Meta | 100 | Help doc | 130 |
| 2 | facebook.com/business/help/644860419002064 | Meta | 100 | Help doc | 44 |
| 3 | bir.ch/facebook-automated-rules | Birch | 72 | Cheat sheet | 32 |
| 4-5 | More Meta help + Reddit | — | — | Help / forum | — |
| 6 | klientboost.com | KlientBoost | 76 | Listicle | 17 |
| 7 | mayple.com | Mayple | 73 | Listicle | 14 |
| 8 | wordstream.com | WordStream | 90 | How-to | 11 |

**SERP features:** AI Overview (yes — heavy), Featured Snippet (Klientboost), 4× Inline Videos (YouTube), People Also Ask, Discussions and Forums (Reddit, Quora).

**Intent:** educational/how-to. Top-3 are Meta's own docs + Birch's branded cheat sheet. Positions 6-8 are listicle-format guides.

**Can we win?** Yes for pos 4-7. Meta help center + Birch are immovable. Top organic spot achievable = pos 4. Realistic ceiling = pos 5-6 with proper content + indexation + few backlinks.

**Format directive:** the existing blog post follows the right format (educational guide with examples). Just needs indexation.

### 4.2 SERP: "facebook ads automation" (vol 150, KD 6)

| Pos | URL | Domain | DR | Type | Traffic |
|---|---|---|---|---|---|
| 1 | facebook.com/business/ads/automation | Meta | 100 | Product page | 820 |
| 2 | kitchn.io/platforms/facebook-ads-automation | Kitchn.io | 32 | Product page | 121 |
| 3 | facebook.com/business/help/223852498347426 | Meta | 100 | Help (deprecated 2026!) | 283 |
| 4 | reddit.com/r/PPC | Reddit | 95 | Forum | 71 |
| 5 | bir.ch/facebook-ads-automation | Birch | 72 | Product page | 109 |
| 6 | en-gb.facebook.com | Meta | 100 | Product page | 11 |
| 7 | make.com | Make | 89 | Product page | 33 |
| 8-10 | Reddit + Quora + itsfundoingmarketing | — | — | Forum + listicle | — |

**SERP features:** AI Overview (visible), Inline Videos, Perspectives (LinkedIn, Reddit, Instagram, Facebook posts — strong), Discussions and Forums.

**Intent:** mixed commercial + informational. Top-3 = product pages, then Reddit. **Kitchn.io at DR 32 ranking pos 2 is a critical signal — DR is not the moat here, page quality + product fit is.**

**Can we win?** Yes — at DR ~30-40 we can match Kitchn.io. Realistic ceiling = pos 5-7 with the existing content + indexation + 2-3 backlinks.

**Format directive:** existing blog uses the right "levels of automation" angle. Indexation is the only blocker.

### 4.3 SERP: "facebook automated rules examples" (low-vol derivative)

| Pos | URL | Type |
|---|---|---|
| 1 | mayple.com — 7 Automated Rules to Massively Scale | Listicle |
| 2 | bir.ch/facebook-automated-rules | Cheat sheet |
| 3 | wordstream.com — 3 Time-Saving Facebook Automated Rules | Listicle |
| 4 | facebook.com/business/help — Best practices for automated rules | Meta help |
| 5 | adscook.com — 5 Facebook Automated Rules to Control Ad Spend | Listicle |
| 6 | bestever.ai — 10 Automated Rules Facebook Advertisers | Listicle |
| 7 | klientboost.com | Listicle |
| 8 | blackhatworld.com | Forum thread |

**Intent:** numbered listicle ("5/7/10 rules") format dominates. Different format from the educational guide that owns the "facebook automated rules" SERP — see intent separation rule. **This is a SEPARATE article opportunity** if we want to expand the cluster — but it's optional.

---

## 5. ICP Pain Research

> **Source:** Reddit r/FacebookAds and r/PPC (top 10 threads on `site:reddit.com facebook automated rules`).
> **Activity:** 9+ active threads in past year, 30+ comments, ongoing pain.

### 5.1 Pain quotes (real, with links)

1. **"Rules doesn't work for conversion data. When you test the rules try to think that you have zero conversions, no matter which event."** — r/PPC, [thread](https://www.reddit.com/r/PPC/comments/n40jvg/is_it_just_me_or_are_the_facebook_automated_rules/) (10+ comments)

2. **"Have scheduled times for ads and they do not follow the rules at all. Anyone else?"** — r/FacebookAds, [thread](https://www.reddit.com/r/FacebookAds/comments/1pwbttz/automated_rules_broken/) (4 months ago)

3. **"Automated Rules Missing at Ad Level in Facebook Ads Manager? I usually go to More > Automated Rules to apply existing rules."** — r/FacebookAds, [thread](https://www.reddit.com/r/FacebookAds/comments/1lzirtw/automated_rules_missing_at_ad_level_in_facebook/) (5 comments, 9 months ago)

4. **"You can set up automated rules in Meta ads, but honestly, the platform really sucks, and the rules are a bit rough to set up natively."** — r/FacebookAds, [thread](https://www.reddit.com/r/FacebookAds/comments/1nkbx4f/do_you_use_any_automation_for_setting_up_ads_on/) (4 comments)

5. **"For now, rules can only be set at the campaign or ad set level, so pausing individual ads requires a manual step or a workaround using naming conventions."** — r/PPC, [thread](https://www.reddit.com/r/PPC/comments/1lzmrwp/automatic_rules_on_meta_ads_for_specific_ads/) (4 comments)

6. **"Rules that rely on same day attribution will no longer work. The common daily stop/loss rules you got? Yeah, just turn them off now."** — r/FacebookAds (4 years ago, but still surfaces in current SERP)

7. **"If you could automate one thing about managing your Meta ads, what would it be? — detecting what caused performance shifts (audience, auction, creative fatigue) and clear 'what to do next' signals. Most of the stress comes from guessing, not lack of data."** — r/FacebookAds, [thread](https://www.reddit.com/r/FacebookAds/comments/1sqw8s6/) (10+ comments, 1 week ago — fresh)

### 5.2 Pain language (user verbatim — use these in copy)

- "rules are a bit rough to set up natively"
- "the platform really sucks"
- "rules don't follow at all"
- "can only be set at campaign or ad set level"
- "rules don't work for conversion data"
- "rules that rely on same day attribution will no longer work"
- "stress comes from guessing, not lack of data"

### 5.3 Existing workarounds (what readers do without a tool)

- Manual naming conventions to compensate for ad-level limitations
- Multiple separate rules combined to simulate OR logic (since native is AND only)
- Wake-up checks at 3-4am because no rollback if rule fires badly
- Spreadsheet tracking outside Meta (because rule history is hidden in logs)
- Switching to Birch / Revealbot / Madgicx / Kitchn (the very competitors we're up against)

### 5.4 Emotional triggers

- **Fear**: budget overspend ("month gone in a day" — JTBD D3)
- **Frustration**: Meta UI bugs, rules disappearing from menu, schedule failing silently
- **Time**: 3-4 hours/day on rule maintenance for accounts with 50+ campaigns
- **Boredom**: "stupid mechanical work" (jtbd-messaging.md verbatim — alignment confirmed)

### 5.5 Thread activity scale

- 9 active Reddit threads in past 12 months on r/FacebookAds + r/PPC for "facebook automated rules"
- 30+ comments aggregated
- 1 thread from 1 week ago is breakout: "If you could automate one thing about managing Meta ads"
- Reddit confirms this is a **mid-volume but high-intensity pain** — not a long-tail dropout

---

## 6. Competitive Gap

### 6.1 Top-3 SERP coverage gaps (across both keyword groups)

| Competitor | What they cover | What they miss (our gap to fill) |
|---|---|---|
| **Meta help center** (pos 1-3) | Native UI walkthrough, action types, conditions list | No real examples with metrics, no "what to do when rules break", no third-party comparison, no rollback/scaling logic, no real screenshots beyond UI |
| **Birch (Revealbot)** bir.ch/facebook-automated-rules | 12 example rules with screenshots, cheat sheet format, decent SEO | Birch-only solution presentation, doesn't acknowledge native rules limits beyond "use Birch", no free option, DR 72 = hard to replicate |
| **KlientBoost** | 6 rules with explanations, agency angle | Slim screenshots, no setup pitfalls, no "rules not working" debugging |
| **Kitchn.io** (pos 2 on "facebook ads automation") | Product page, bulk + budget rules positioning, similar product to Scalemate | Same tier as us — feature parity battle, not content gap |
| **WordStream / Mayple / AdsCook** | Listicle-format rules | No first-hand operator examples with real numbers, no "what breaks at scale" depth, no rollback discussion |

### 6.2 Our differentiation (existing, just needs to surface)

- **Real "rules don't work" debugging** (FAQ in `/blog/facebook-automated-rules` covers this — competitors skip it)
- **Rollback/auto-cut logic** (Scalemate-specific, only Birch has comparable)
- **Three levels of automation framework** (`/blog/facebook-ads-automation` Level 1/2/3 — unique angle)
- **Free tier + verified Meta app** (no competitor has this combo)
- **JTBD-aligned messaging** ("don't be the operator, be the strategist") — Birch is more enterprise-tonality

### 6.3 Backlink/authority gap

- Top organic competitors have DR 72-100 vs scalemate DR (~30 estimate). Cannot brute-force the top 3.
- Realistic ceiling: pos 4-7 across both Tier-1 keywords.
- Even pos 5 = ~5-15 clicks/mo per blog post once indexed = 10-30 clicks/mo from Tier-1 cluster.
- Long-tail (Tier-2) ICP queries on use-case page are higher leverage per impression.

---

## 7. Action Plan

> Ordered by impact-to-effort ratio. Reflects existing-first principle.

### 7.1 🟢 Quick Wins (week 1-2, ≤ 4h total)

- [ ] **A1. Force indexation of 2 unindexed blog posts** (HIGHEST priority, blocks 60-80% of cluster value).
  - GSC URL Inspection → Request Indexing for `/blog/facebook-automated-rules` and `/blog/facebook-ads-automation`.
  - Add internal links from the now-indexed `/blog/best-mcp-servers` and `/blog/madgicx-review-alternative` (both are already indexed and authority-passing) to both blog posts. Currently, neither blog post has incoming internal links from indexed high-authority pages.
  - Submit URLs to Google via Search Console URL Inspection AND share each URL once on LinkedIn or X (any external signal).
  - Expected impact: indexation in 7-14 days, then ramping to 50-150 imp/mo each by week 4-6.
  - Effort: 30 min.
  - Owner: Natalia (deploy/promote) + content-creator agent (internal links).

- [ ] **A2. Title/meta fix `/use-cases/ad-campaign-automation-rules`** (scorecard item #10 — was deferred 2026-04-27, now revisit).
  - Page is at pos 7.6 with 186 imp / 0 clicks. Pure CTR problem.
  - Suggested title v1: `Automated Rules for Meta Ads — Scale, Pause, Protect Budget | Scalemate`
  - Suggested title v2: `Facebook Ads Automation Rules — ROAS-based Scaling & Auto-Pause | Scalemate` (more keyword-aligned with rising "facebook ads automation" search)
  - Suggested meta v1: `Scalemate's automation rules pause low-ROAS ads, auto-scale winners with rollback, and protect daily budgets across Meta Ads — 24/7, no manual checks.`
  - **Recommend v2** — taps into 150/mo "facebook ads automation" SERP overlap.
  - Expected impact: CTR 0% → 1-2% = +2-4 clicks/mo at current imp level. Could be more if CTR pulls position higher.
  - Effort: 30 min.
  - Owner: copywriting agent → Natalia deploy.
  - **Bug to fix simultaneously:** the page's `metadata.openGraph.url` says `/features/automation-rules` while `alternates.canonical` says `/use-cases/ad-campaign-automation-rules`. Mismatch may confuse social shares. Fix both to use-case URL.

- [ ] **A3. Internal linking refresh (rules cluster)** — equivalent to what was done for uploader cluster on 2026-04-20.
  - Add: `/use-cases/ad-campaign-automation-rules` → link to `/blog/facebook-automated-rules` ("How to set up Facebook automated rules" anchor)
  - Add: `/features/automation-rules` → link to `/use-cases/ad-campaign-automation-rules` (anchor: "See how teams use rules to automate scaling")
  - Add: `/blog/facebook-ads-automation` → link to `/use-cases/ad-campaign-automation-rules` (anchor: "automated rules with rollback")
  - Add: `/blog/facebook-automated-rules` → link to `/use-cases/ad-campaign-automation-rules` and to `/blog/facebook-ads-automation` ("when native rules aren't enough" anchor)
  - Add: `/blog/madgicx-review-alternative` → link to `/blog/facebook-automated-rules` ("Facebook automated rules guide" anchor)
  - Cross-link `/blog/best-mcp-servers` → `/blog/facebook-ads-automation` (already exists referencing MCP; verify and expand).
  - Effort: 1.5h.
  - Owner: content-creator agent.

### 7.2 🟡 Mid-term content (month 1-2, 3-8h)

- [ ] **B1. Title/meta + content depth fix `/features/automation-rules`** (scorecard item #21 — was Tier-1 use case page Update — extend to feature page).
  - Current title: `Automated Ad Optimization Rules – 24/7 Protection | Scalemate`
  - Page ranks pos 30+ for queries it shouldn't even be targeting (e.g., `ppc automated rules` pos 93).
  - **Decision: re-purpose, not delete.** Keep the page but reposition it so it does NOT compete with use-case page.
  - Reframe as the **product feature page** (technical depth: rule conditions, rollback engine, schedule options, multi-account support). Use-case page stays as the **outcome page** (BOFU, "automate scaling").
  - Add: condition list table (41 conditions Meta supports + which Scalemate extends), screenshot of rule builder, rollback timing logic explainer, comparison vs Birch/Revealbot for the technical buyer.
  - Effort: 4-6h (one content-creator + qa cycle).
  - Owner: discovery → content-creator → qa.

- [ ] **B2. (Optional) New article: `/blog/facebook-automated-rules-examples`** — listicle format, separate intent from existing guide.
  - Volume signal: ~30-50/mo derivative (existing blog post already covers part of this).
  - SERP top-3 are listicles (Mayple "7 rules", WordStream "3 rules", AdsCook "5 rules").
  - Format: numbered listicle "10 Facebook Automated Rules That Actually Work in 2026" — pain-first intro, screenshots, real rule configs with metrics.
  - Pain hook: "the rules everyone teaches break in production — here are the ones that don't"
  - **Hold for now.** Cluster has 2 unindexed posts already; adding another before fixing indexation is wasteful. Revisit after A1 succeeds.
  - Effort: 6-8h when kicked off.

### 7.3 🔵 Cluster restructure

- [ ] **C1. No redirects, no deletes.** All 4 pages stay.
- [ ] **C2. Position separation enforced via title/H1:**
  - `/use-cases/ad-campaign-automation-rules` → BOFU outcome page, title leans on "Facebook Ads Automation Rules" + outcome ("scale, pause, protect")
  - `/features/automation-rules` → product technical depth, title leans on "Automation Rules — Conditions, Rollback, Multi-account" (NEW positioning, repurposed in B1)
  - `/blog/facebook-automated-rules` → educational guide, title stays
  - `/blog/facebook-ads-automation` → levels-of-automation tutorial, title stays
- [ ] **C3. No new blog posts in scope** for next 30 days. After indexation succeeds, evaluate B2.

### 7.4 🔵 Title/Meta fixes (concrete proposals)

| Page | Current title | Proposed title | Why |
|---|---|---|---|
| `/use-cases/ad-campaign-automation-rules` | `Automated Ad Optimization Rules – 24/7 Protection \| Scalemate` | `Facebook Ads Automation Rules — Auto-Scale & Pause with Rollback \| Scalemate` | Captures "facebook ads automation" (150/mo) + "automated rules" intent. "Rollback" = differentiator. Length 78 chars. |
| `/features/automation-rules` | `Automation Rules — 24/7 Ad Optimization Across Meta Ads \| Scalemate` (current title source TBD — check page.jsx) | `Automation Rules Engine — 41 Conditions, Rollback, Multi-account \| Scalemate` | Repositions as technical/feature depth page. Avoids cannibalization with use-case page. |
| `/blog/facebook-automated-rules` | `Facebook Automated Rules: Complete Setup Guide [2026]` | (no change — solid title for educational SERP) | Keep — current performance is unknown because page isn't indexed. |
| `/blog/facebook-ads-automation` | `How to Automate Facebook Ads: Full Guide (2026)` | (no change) | Keep — solid title alignment with vol 150 keyword. |

### 7.5 🔵 Internal linking refresh (specific link insertions)

| From page | To page | Anchor text |
|---|---|---|
| `/use-cases/ad-campaign-automation-rules` | `/blog/facebook-automated-rules` | "How to set up Facebook automated rules" |
| `/use-cases/ad-campaign-automation-rules` | `/blog/facebook-ads-automation` | "Three levels of Facebook ads automation" |
| `/features/automation-rules` | `/use-cases/ad-campaign-automation-rules` | "See how teams automate ROAS-based scaling" |
| `/features/automation-rules` | `/blog/facebook-automated-rules` | "Native Facebook rules vs Scalemate" |
| `/blog/facebook-automated-rules` | `/use-cases/ad-campaign-automation-rules` | "When native rules aren't enough" |
| `/blog/facebook-automated-rules` | `/blog/facebook-ads-automation` | "Beyond rules: full Facebook ads automation" |
| `/blog/facebook-ads-automation` | `/use-cases/ad-campaign-automation-rules` | "automated rules with rollback" (already partially exists — verify) |
| `/blog/madgicx-review-alternative` | `/blog/facebook-automated-rules` | "Facebook automated rules guide" |
| `/blog/best-mcp-servers` | `/blog/facebook-ads-automation` | "Facebook ads automation guide" |

---

## 8. Expected Impact

### 8.1 Conservative scenario (just indexation + Quick Wins)

- A1 (indexation): 2 blog posts go from 0 → 50-100 imp/mo each over 4-6 weeks. Conservative: +120 imp/mo cluster total at mo 2; +200 imp/mo at mo 3. CTR at pos 5-8 = ~3% = ~6-10 clicks/mo new from blog.
- A2 (use-case title fix): CTR 0% → 1.5% on 186 imp/28d = +3 clicks/28d. If position improves to 5 from CTR signal, double again.
- A3 (internal linking): +5-10% authority redistribution, hard to attribute precisely. Helps indexation in A1.

**Total conservative cluster lift in 60 days:** +180 imp/mo, +10-15 clicks/mo (from current 0).

### 8.2 With B1 (feature page repositioning) at mo 2

- Feature page: pos 30 → pos 12-18 on technical queries (`automation rules engine`, `multi-account ad rules`, `rule rollback ads`)
- +30-60 imp/mo, +1-3 clicks/mo
- Marginal but cleans up cannibalization

### 8.3 If B2 is added (post-indexation success)

- New listicle: 30-80 imp/mo at mo 3, ramping to 150-250 imp/mo at mo 6
- +5-15 clicks/mo

**Total cluster ceiling in 6 months:** ~600-900 imp/mo, ~30-60 clicks/mo (conservative).

### 8.4 Failure scenario

- If blog posts STILL don't index by 2026-05-15: this is a domain-wide problem, not cluster-specific. Escalate to broader site-trust work (about page, terms, schema — already in scorecard items #14-18).

---

## 9. Input Needed from Natalia

For each action, what's needed:

- [ ] **A1** — Approve indexation push: Natalia clicks "Request Indexing" in GSC for both URLs (5 min). External signal — share each URL once on LinkedIn or X.
- [ ] **A2** — Approve title/meta change. Pick v1 or v2 (see 7.1). Deploy via standard flow.
- [ ] **A3** — Approve internal linking diff. Content-creator agent prepares as PR commit.
- [ ] **B1** — Approve feature page repositioning. Needed inputs: (a) screenshot of Scalemate rules builder with conditions visible, (b) confirmation of how many conditions Scalemate supports (vs Meta's 41), (c) brief description of rollback engine timing logic.
- [ ] **B2** — Hold; revisit after A1 indexation works.
- **Bug fix:** Approve OG URL fix on use-case page (`metadata.openGraph.url` `/features/automation-rules` → `/use-cases/ad-campaign-automation-rules`).

**No new input needed for content writing in this cycle.** All 4 pages are written, Quick Wins are infra/links/title work only.

---

## 10. Key Decisions Made (no Natalia input required)

- **Dropped `automation rules` (vol 60) as standalone target.** Ahrefs parent_topic = "jira automation rules" — wrong category.
- **Dropped `facebook ad rules` (vol 50, KD 24) as target.** SERP intent = advertising policy compliance, not automation rules.
- **No comparison page (Scalemate vs Revealbot) in scope here.** Revealbot has 450 vol but it's its own cluster — flagged for separate brief.
- **No new content kicked off in this brief.** Existing 4 pages cover the cluster correctly. Indexation + CTR + internal linking is the lever.

---

## 11. Open Questions / Flags for Future Cycles

- [ ] Bulk-launch cluster (`/features/bulk-launch` + `/use-cases/bulk-ad-launch`) has same cannibalization pattern as rules cluster — propose separate brief.
- [ ] Ahrefs DR for scalemate.co — confirm current DR (the brief assumes ~30 based on reference scorecard data; check Ahrefs `site-explorer-domain-rating`). If DR is materially higher/lower, ceiling estimates shift.
- [ ] If A1 indexation push fails after 14 days, escalate to broader trust signals (scorecard items #14, #17, #18: about page, author pages, Organization schema). Most likely root cause = low domain trust signals, not URL-level issue.
- [ ] Revealbot brand-keyword opportunity (vol 450) deserves its own discovery cycle if/when comparison-page format is approved.
- [ ] Once `/blog/facebook-automated-rules` indexes, monitor whether it cannibalizes the use-case page on `automated rules` queries. If yes — sharpen the use-case page H1 toward outcome ("scale-with-rollback") rather than "rules" itself.

---

## 12. Data Sources

- GSC (sc-domain:scalemate.co), 90-day window, dimensions=page+query, filters by URL slug. Pulled 2026-04-29 via `/Users/nataliabondar/.claude/skills/seo-ops/gsc_client.py`.
- Ahrefs `keywords-explorer-overview`, `keywords-explorer-matching-terms` for: `automation rules`, `facebook automated rules`, `facebook ads automation`, `campaign automation`, branded variants. US locale, 2026-04-29.
- Ahrefs `serp-overview` for `facebook automated rules` and `facebook ads automation` (top 10, 2026-04-29).
- SerpAPI Google live SERP for: `facebook automated rules`, `facebook ads automation`, `facebook automated rules examples`, `site:reddit.com facebook automated rules pain OR broken OR manual`. US, 2026-04-29.
- ICP context: `seo-system/context/icp/jtbd-messaging.md` (JTBD groups A-D, UA Manager pain language).
- Scorecard items referenced: #10 (deferred title fix), #19 (Appflame case — blocked), #20 (Promin case — blocked), #21 (Tier-1 use case page update — TBD).
