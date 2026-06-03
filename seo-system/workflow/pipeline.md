# Pipeline

> Source of truth для стану всіх SEO топіків і tracking metadata-edits.
> One file, one place. Кожен item рухається через секції 1→9, plus 📊 Monitoring tracking task для title/meta правок на існуючих URL.

---

## Як читати

- **§1-§7** — топіки в роботі (in-progress).
- **§8 Published** — задеплоєно на scalemate.co. Звідси review агент бере items для T+7d / T+2wk / T+4wk milestones.
- **§9 Rejected / Archived** — закрито без публікації (щоб не пропонувати знову).
- **📊 Monitoring** — title/meta правки на існуючих URL (не нові статті). Окремий потік tracking.

Approval = ти редагуєш цей файл і рухаєш item у наступну секцію. Mode: Loose — всі секції завжди на main.

---

## §1. New (потребує discovery)

> Кандидати які пройшли intelligence recon. Score-колонки заповнюються коли є дані; якщо ad-hoc topic від тебе — score може бути порожнім.

| Slug | Volume | KD | GSC imp | Funnel | Score | Notes |
|---|---|---|---|---|---|---|
| scale-creative-volume-without-designers | — | 0 | — | MOFU | 7.0 | Pain #3 from Reddit ("more creatives, same designers"); JTBD 6; no existing content; aligns Bulk Launch + AI Assistant |
| mobile-game-user-acquisition-strategy | 200 | 2 | — | TOFU games-flavored | TBD | **PIVOTED 2026-05-12** from M4b `app-user-acquisition-strategy`. Reason: `app user acquisition` SERP (DR 79-95) unreachable; `mobile game user acquisition strategy` SERP (DR 37-54) reachable. Apps coverage folds into M1 cornerstone + M4a pillar. Targets `mobile game user acquisition strategy` (200 / 2 / 150) + `mobile game user acquisition` (100 / 3 / 200) + `game user acquisition` (150 / 2 / 250). ZeptoLab proof inside (`/customers/zeptolab`). Blocked on M1 ship. |
| mobile-attribution-explained | 150 | 2 | — | TOFU/educational AEO | TBD | **NEW 2026-05-05 (M4c) — AEO play.** Targets `mobile attribution` 150 vol KD 2, TP 600 + sub-cluster `mobile measurement partner` (250 KD 10), `deferred deep linking` (250 KD 2), `skadnetwork` (400 KD 16, TP 600), `skan 4` (60 KD 2). **Frame as educational, NOT product position.** Updated 2026-05-12 — Scalemate HAS Adjust integration shipped (per updated `scalemate_channel_scope.md`), AppsFlyer/Singular on customer request. Article frames "how MMP signals power ad-ops automation," NOT "Scalemate vs MMPs." Structure for LLM citations: Q&A format, FAQPage + HowTo schema, specific numbers/frameworks. Goal = LLM citations + brand awareness. |
| catalog-ads-meta-tiktok-bulk-launch | ~1,300 cluster | 0-9 | — | MOFU feature-led | TBD | **NEW 2026-05-12** — surfaced in mobile UA verticals-addendum research as cleanest feature-led cluster (only cluster with Partial+ product fit outside gaming). Cluster: `dynamic product ads` (250 vol KD 9, TP 700 — **DR 75-100 unreachable**), `meta catalog ads` (200 vol), `meta dpa` (80 vol), `tiktok catalog ads` (70 vol) + matching-terms tail. **Format TBD — blog `/blog/meta-tiktok-catalog-ads-bulk-launch` OR section in `/features/bulk-launch`.** Discovery agent must: (1) pull SERP for narrower KWs (`meta catalog ads` + `tiktok catalog ads`) to validate DR reachability since head `dynamic product ads` is DR-locked; (2) decide blog vs feature-section format; (3) verify Scalemate's actual catalog ad set bulk-launch support (does the product structure 30 catalog ad sets × geo natively?); (4) feature-led not vertical-led — apps + games + e-com all benefit, do NOT scope as e-commerce vertical landing. Internal links: `/features/bulk-launch`, `/use-cases/bulk-ad-launch`. Source: `seo-system/topics/mobile-ua-pillar/verticals-addendum.md` §7. |
| meta-tiktok-automated-ads-sunset-2026 | newsjack | low | — | MOFU newsjack | 202 | **NEW 2026-05-25 (recon).** Meta is sunsetting "Automated Ads" in 2026 — visible in SERP #2 organic for `how to automate facebook ads` (Meta Help page literally says "going away in 2026"). Time-sensitive newsjack: "What replaces Meta Automated Ads in 2026" — positioning piece. Existing `/blog/facebook-ads-automation` had 0 imp 6mo + currently 301-redirects to `/automation-rules-library` (drop-investigation flagged questionable destination). New article could **replace** old URL as topic-anchor + tighter redirect target. Discovery agent: (1) verify Meta's official deprecation announcement + timing; (2) decide if standalone article or rework of old URL; (3) align with drop-investigation Fix #1 (redirect destination question). Bucket: 🟡 Strategic time-sensitive. Source: [`2026-05-25-recon-parts/03-trends.md`](../intelligence-briefs/2026-05-25-recon-parts/03-trends.md). |
| meta-ads-updates-2026-hub | 2,200 | 3 | — | TOFU newsjack hub | 144 | **NEW 2026-05-25 (recon).** admanage.ai winner: `/blog/meta-ads-update` gets **1,712 traffic/mo from ONE article** on `meta ads updates` (2,200 vol KD 3). Rolling hub format — quarterly newsjack refresh. Our differentiator: **ops-impact framing per update** (rule changes needed, creative refresh cadence, budget reallocation) — admanage just lists changes. Coordinates with existing `meta-andromeda-update` (§3 Pending) — pillar/satellite relationship: hub = ongoing changelog, andromeda = deep dive. Discovery agent: (1) confirm pillar/satellite IA without cannibalizing andromeda; (2) decide quarterly refresh cadence + ownership; (3) initial 2026 timeline (Andromeda Mar 2026, Automated Ads sunset, etc.). Bucket: 🟢 Quick Win. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| find-competitor-landing-pages-meta-tiktok | 1,100 combined | 0-5 | — | TOFU how-to | 126 | **NEW 2026-05-25 (recon).** Cluster: `find competitors landing pages` (600 KD 5) + `find all ad landing pages of competitors` (500 KD 0). admanage.ai owns this with `/blog/find-all-ad-landing-pages-of-competitors` pos #3/#9. SERP rewards how-to workflows. **Our angle:** workflow synthesis of Meta Ad Library + TikTok Creative Center (both bir.ch TOP traffic pages but separate explainers) — combined competitive recon walkthrough. Differentiator: cross-platform Meta+TikTok unified. Discovery agent: (1) verify SERP intent (DIY workflow vs tools listicle); (2) decide blog how-to vs companion resource for `/use-cases`; (3) check if ScaleMate has any "competitive intelligence" product hook to mention naturally. Bucket: 🟢 Quick Win. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| creative-analytics-meta-tiktok | 600 | 1 | — | TOFU pillar | 120 | **NEW 2026-05-25 (recon).** Pure gap — **no competitor in our set ranks**. KD 1, ICP-perfect (creative analytics = ScaleMate diagnostic positioning fit). Likely AI Overview candidate. Discovery agent: (1) check SERP top-10 to confirm DR-reachability (KD 1 suggests yes); (2) decide pillar vs feature-page format; (3) frame as "metrics, frameworks, tools" — NOT product pitch (ScaleMate is analysis, not creative production per `feedback_product_scope.md`); (4) potential internal linking from `/creative-testing-library` (new May 25). Bucket: 🟢 Quick Win. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| tiktok-winner-scaling-automation | tail (Reddit-proven) | low | — | MOFU TikTok-specific | 115 | **NEW 2026-05-25 (recon).** Reddit Pain #7 quote: *"we test a lot of creatives on Tiktok and sometimes we find winners however…"* (r/PPC). **Zero TikTok-specific scaling content** on entire site. JTBD 6 native (Bulk Launch + Rules), TikTok in scope. Queries to validate: `how to scale tiktok ads winners`, `tiktok ads scaling rules`, `tiktok creative winner promotion`. Discovery agent: (1) Ahrefs matching-terms for these queries; (2) decide standalone blog vs section in `/use-cases/bulk-ad-launch`; (3) pair with TikTok automation rules from `/automation-rules-library`; (4) check if S14 `tiktok-spark-ads` (P1 from 2026-05-12 action-list) cannibalizes or complements. Bucket: 🟡 Strategic. Source: [`2026-05-25-recon-parts/04-icp-pain.md`](../intelligence-briefs/2026-05-25-recon-parts/04-icp-pain.md). |
| multi-account-meta-ads-agency-workflow | tail (Reddit-proven) | low | — | BOFU agency use-case | 86 | **NEW 2026-05-25 (recon).** Reddit Pain #2: *"random Google Sheets everywhere, Slack messages + notes…"* (r/FacebookAds, 10+ comments) + r/PPC capacity-burnout threads. Agency ICP = high LTV. Maps JTBD 4 + 5. **Gap — no content.** Queries: `managing multiple meta ad accounts agency`, `multi-account meta ads dashboard`, `best tool for managing client meta ad accounts`. Discovery agent: (1) verify Scalemate's actual multi-account/multi-org product depth (claim vs reality check); (2) decide pillar blog vs new use-case page (`/use-cases/multi-account-agency-ops`); (3) "single pane of glass" angle vs Sheets/Slack chaos; (4) avoid hyping features that don't exist. Bucket: 🟡 Strategic. Source: [`2026-05-25-recon-parts/04-icp-pain.md`](../intelligence-briefs/2026-05-25-recon-parts/04-icp-pain.md). |
| ad-management-tool-meta-tiktok | 600-800 | 2-52 | — | MOFU listicle | 64 | **NEW 2026-05-25 (recon).** Cluster: `ad management tool` 800/2 + `ad management` 600/52. admanage.ai ranks #18 (head) + #7 (admanage homepage). Cross-platform Meta+TikTok = our differentiator (most competitors single-platform). **Cannibalization risk** with existing `/blog/best-facebook-ads-automation-tools` (S5' listicle, currently NOT INDEXED at T+17d). Discovery agent: (1) verify SERP intent diff vs existing listicle; (2) if too similar — defer / skip, NOT another listicle on same intent; (3) if different — frame as "ad management" (broader ops) vs "ads automation" (rules/tools). Bucket: 🟡 Strategic — but only AFTER S5' indexation resolved. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| audience-overlap-meta-fix | 200 | 1 | — | MOFU diagnostic | 64 | **NEW 2026-05-25 (recon).** madgicx.com ranks #8 with `/blog/audience-overlap-tool`. KD 1, easy entry. ScaleMate angle: audience overlap = wasted spend = JTBD 7 (budget protection) diagnostic. Discovery agent: (1) verify Scalemate has any audience-overlap visualization or diagnostic in product; (2) if not, frame as "how to detect + fix manually using Meta tools + when to automate"; (3) avoid pitching feature we don't have; (4) potential internal link from `/automation-rules-library` (rule: pause audiences with >X% overlap). Bucket: 🟢 Quick Win. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| facebook-tiktok-ad-cost-calculator | ~1,300 combined | 4-48 | — | TOFU interactive tool | 56 | **NEW 2026-05-25 (recon).** bir.ch owns `/app.bir.ch/facebook-advertising-costs/*` subpages on CPC/CPM/CPL/CPE (pos #1-14 across cluster, 700-3,200 traffic combined). Interactive calculator page (mirror `/automation-rules-library` format) + companion blog "Facebook + TikTok Ad Costs 2026: CPC, CPM, CPL, CPE Benchmarks". Mobile-UA flavor: CPI/eCPI angle (ties to M-block). Discovery agent: (1) high effort (12h interactive tool + content); (2) decide single tool page vs benchmark hub split; (3) data sources for benchmarks (Scalemate internal? public benchmarks?); (4) if benchmark data sourcing too heavy → defer to MOFU blog only. Bucket: 🟡 Strategic — high effort, validate before committing. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |
| meta-tiktok-ad-specs-2026 | 1,300 | — | — | TOFU reference | 28 | **NEW 2026-05-25 (recon).** madgicx.com #2 with `/blog/when-it-comes-to-facebook-ads-size-matters` (Meta-only). **Our angle: unified Meta + TikTok spec sheet.** Strong evergreen + AEO/LLM citation potential. Discovery agent: (1) verify low BOFU intent (this is reference content, doesn't drive trials directly); (2) decide if worth effort vs other higher-score items; (3) low priority unless quick to assemble. Bucket: 🟡 Strategic medium. Source: [`2026-05-25-recon-parts/02-competitor-gap.md`](../intelligence-briefs/2026-05-25-recon-parts/02-competitor-gap.md). |

---

## §2. Discovery in progress

> Discovery агент валідує тему — keyword data, SERP, ICP pain. Виходить з brief.md.

- _empty_

---

## §3. Pending Natalia review (brief)

> Brief готовий, чекає твого approve. Approve = рух у §4. Reject = назад у §1 або в §9.

- **creative-testing-small-budget** — discovery completed 2026-06-03 (local run, Loose mode, main). Brief: [`seo-system/topics/creative-testing-small-budget/brief.md`](../topics/creative-testing-small-budget/brief.md). Trigger: companion to LinkedIn post Natalia is finalizing today on creative testing for $10K-$50K/mo accounts. Verdict: ✅ WRITE — but reframe primary keyword from "small budget" (0 Ahrefs vol, 0 GSC imp on "small budget" framing) to **`creative testing framework`** (80 vol, KD 2, TP 70). Secondary: `ad creative testing` (200/4), `facebook creative testing` (50/2), `meta creative testing` (30). SERP for primary is winnable: DR 30 ranks pos 10, top-3 are DR 38-65 blog posts (Dragonfly, HunchAds, Pilothouse 3-3-3 single-method). Cannibalization check vs `/creative-testing-library`: LOW (library = BOFU interactive catalog; blog = TOFU/MOFU narrative; different SERP shapes). Slug recommend `/blog/creative-testing-framework-small-budget` (NOT `/blog/creative-testing-framework` — that's a permanent 301 redirect destination set in `next.config.mjs` 2026-05-12, would create routing conflict). 14+ Reddit threads of live pain mined; 10 direct quotes in brief. ICP pain dominant cluster: "burning budget", "$20/creative/day = noise", "killing ads prematurely", "Meta A/B needs 7 days I don't have". Unique angle: only blog that explicitly maths out the budget floor of 3-3-3 ($450/day), Meta A/B (7-day minimum), and Lift ($30K+), then prescribes a three-tier path that scales. Multi-platform (Meta + TikTok per `scalemate_channel_scope.md`), backed by 13-method interactive library that no top-10 SERP entrant has. 6 inputs needed from Natalia listed in brief (slug choice, absoluteTitle flag, $450/day floor verification, OK to lift Ruslan LinkedIn quotes, KitUp + ZeptoLab as named verticals, publish order LinkedIn-first vs simultaneous).
- **meta-andromeda-update** — discovery completed 2026-05-05 (PR #59, branch `seo/meta-andromeda-update`). Brief: [`seo-system/topics/meta-andromeda-update/brief.md`](../topics/meta-andromeda-update/brief.md). Primary keyword `meta andromeda update` (vol 500, parent `meta andromeda` 1,400 KD 15). Cluster ~3,500 vol/mo across 23 keywords. SERP for `meta andromeda update` is 10/10 Reddit threads — pure gap for structured founder-voiced playbook. Existing content check: zero pages, zero GSC impressions over 90d. Pain validated: 4 of top-10 Reddit threads have 50+ comments, 2 have 100+. Unique angle: founder-authored mobile-UA Andromeda playbook synthesizing 7 Ruslan LinkedIn hacks + 2 internal Scalemate observations (Creative Diversity Score "worlds", simplified campaign structure with 10–20+ creatives per ad set). 5 inputs needed from Natalia/Ruslan listed in brief.
- **mobile-user-acquisition** (M1 cornerstone, use-case page) — discovery completed 2026-05-12 (local run). Brief: [`seo-system/topics/mobile-user-acquisition/brief.md`](../topics/mobile-user-acquisition/brief.md). Builds on pillar scoping [`seo-system/topics/mobile-ua-pillar/scoping.md`](../topics/mobile-ua-pillar/scoping.md). Primary KW `mobile user acquisition` (200 vol KD 7, DR-reachable 30-66). Secondary: `mobile app user acquisition strategy` (100/1), `mobile user acquisition platform` (100/3), `mobile game user acquisition strategy` (200/2), `paid user acquisition` (250/1 AEO). Format: BOFU use-case landing page mirroring [`app/use-cases/_data/bulk-ad-launch/index.jsx`](../../app/use-cases/_data/bulk-ad-launch/index.jsx). Existing-content check: zero matching page; 13 mobile-UA queries all currently attach to `/blog/creative-testing-framework` — cannibalization LOW (different intent: blog TOFU vs page BOFU). Unique angle: only execution-layer SERP entry with tier-honesty (sits on top of Adjust, not MMP-replacement) + named vertical proof from day 1 (KitUp subscription + ZeptoLab gaming) + 30-creatives/day pain framing. ICP pain validated via Reddit r/FacebookAds (4 threads 10-60+ comments last 3mo) + Deconstructor of Fun Mar-2026 podcast. 5 inputs needed from Natalia listed in brief (title choice, metric reuse OK, demo video reuse, internal mobile-UA stat optional, Adjust hero badge OK).
- **mobile-user-acquisition-guide** (M4a TOFU pillar blog) — discovery completed 2026-05-12 (local run). Brief: [`seo-system/topics/mobile-user-acquisition-guide/brief.md`](../topics/mobile-user-acquisition-guide/brief.md). Builds on pillar scoping [`seo-system/topics/mobile-ua-pillar/scoping.md`](../topics/mobile-ua-pillar/scoping.md) + M1 brief (shared session). Primary KW `mobile user acquisition` (200 vol KD 7) — same head as M1 but intent-split: pillar = TOFU/AEO guide-blog SERP, M1 = BOFU vendor-landing SERP. Secondary: `mobile app user acquisition strategy` (100/1), `mobile game user acquisition strategy` (200/2), `mobile user acquisition platform` (100/3), `paid user acquisition` (250/1 AEO). Format: TOFU pillar blog, 2,800-3,200 words, mirror `/blog/creative-testing-framework` shape. Existing-content check: zero matching page; LOW cannibalization risk with `/blog/creative-testing-framework` (only mobile-UA-adjacent page on site; mitigate via cross-links). SERP verdict: pos 5-9 ceiling within 3-6 months (DR 30-73 guide blogs reachable; top-3 locked by Unity DR 91 + MUA Show + MobileAction). Unique angle: only pillar grounded in 2026 industry shifts (Meta Andromeda Mar 2026, iOS CPI +44% QoQ Q4 2025, 30-creatives/day floor) + operations-layer framing + KitUp/ZeptoLab named proof — every top-10 page misses this combination. ICP pain validated via 84-comment r/FacebookAds Andromeda thread + r/AppMarketingHelp Q4 2025 data dump + Metricus April 2026 industry analysis + Deconstructor of Fun podcast. **Blocked on M1 ship** (needs BOFU target for primary CTA). 6 inputs needed from Natalia listed in brief (title choice, metric reuse OK, Reddit-username quoting OK, optional Scalemate-cohort stat, video reuse choice, retention-section decision).

---

## §4. Approved for writing

> Brief approved. Content-creator агент пише draft.

- _empty_

---

## §5. Pending Natalia review (draft)

> Draft готовий, чекає твого approve. Approve = рух у §6. Reject = назад у §4.

- _empty_

---

## §6. Approved for QA

> Draft approved. QA агент перевіряє content-ops + copy + humanizer + SEO technical.

- _empty_

---

## §7. Pending Natalia deploy

> QA passed. Чекає що ти задеплоїш (`bash deploy.sh`).

- _empty_

---

## §8. Published

> Задеплоєно на scalemate.co. Review агент трекає T+7d / T+2wk / T+4wk.
>
> Формат item:
> ```
> - [URL] — slug
>   - deployed: YYYY-MM-DD
>   - artifact: topics/<slug>/
>   - position-current: X, ctr-current: Y%, imp-day: Z (оновлюється review агентом)
>   - milestone: T+Xwk
>   - decision: [✅ keep / ⚠️ iterate / ❌ escalate]
> ```

- [https://www.scalemate.co/blog/adcreative-ai-alternative](https://www.scalemate.co/blog/adcreative-ai-alternative) — adcreative-ai-alternative
  - deployed: 2026-04-07
  - artifact: content/blog/adcreative-ai-alternative.md
  - position-current: 10.6, ctr-current: 0.20%, imp-day: ~18 (512 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: ⏸️ DEFERRED 2026-05-05 → revisit 2026-05-19. Review-agent originally flagged ❌ escalate (CTR 0.76% → 0.20%, recommend rework to comparison-page format). Re-evaluation with Ahrefs (2026-05-05) overrides this: cluster `adcreative.ai alternative` Traffic Potential = 10 (even #1 ranking gets ~16 clicks/mo), SERP top-10 saturated by DR 84-95 aggregators (G2, Capterra, ProductHunt, Reddit DR 95). Effort 10h on cluster with ~50 clicks/mo ceiling = worst ROI. Defer rework. Revisit conditions: site DR > 30 / AI Overview shift / decide to convert to vendor `/pages/adcreative-ai-alternative` landing page (3-5h, like AdCopy.ai #7 DR 35) instead of full blog rework. See action-lists/2026-05-04.md S3.
  - process note: review-agent escalate-to-rework decisions need TP threshold check (don't escalate if TP < 50 — low-ceiling cluster, not format problem). Logged for future agent fix (deferred per Natalia, not fixing now).
- [https://www.scalemate.co/blog/best-ad-testing-tools](https://www.scalemate.co/blog/best-ad-testing-tools) — best-ad-testing-tools
  - deployed: 2026-04-07
  - artifact: content/blog/best-ad-testing-tools.md
  - position-current: 16.9, ctr-current: 0.0%, imp-day: ~112 (3129 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: ❌ escalate — 3,129 imp, 0 clicks за T+4wk. Confounded with metadata edit Apr 20 (pos 5.8→19.4). Спершу revert metadata (див. 📊 Monitoring) → переоцінити CTR через 14d → якщо все ще 0%, full architectural rework.
- [https://www.scalemate.co/blog/what-is-ad-fatigue](https://www.scalemate.co/blog/what-is-ad-fatigue) — what-is-ad-fatigue
  - deployed: 2026-04-07
  - artifact: content/blog/what-is-ad-fatigue.md
  - position-current: 24.2, ctr-current: 0.0%, imp-day: ~20 (553 imp / 28d)
  - milestone: T+4wk (review 2026-05-04)
  - decision: 🔧 TITLE TEST 2026-05-05 (T+14d milestone 2026-05-19). Original review-agent flagged ❌ escalate (pos 18.6 → 24.2, page 2 → page 3, 0 clicks), recommended retitle OR archive. Action-list S8 originally jumped to rework; corrected 2026-05-05 to title-test first per R1 cheap-first logic. **Title-test action (S8' in action-lists/2026-05-04.md):** re-target intent from generic "what is" to specific pain queries — pick one of: "Ad Fatigue Signs: 5 Metrics That Predict Burnout (2026)" / "How to Fix Ad Fatigue on Meta + TikTok (2026)" / "Ad Fatigue Cycle: Why Winners Burn Out + How to Get Ahead (2026)" + snippet rewrite to diagnostic/actionable framing. **T+14d (2026-05-19) re-evaluate:** if 0 clicks → escalate to rework. **Bonus parallel boost:** Andromeda article (S2', pipeline §3) will internal-link to this page when deployed — compound signal with title fix.
- [https://www.scalemate.co/blog/facebook-ads-automation](https://www.scalemate.co/blog/facebook-ads-automation) — facebook-ads-automation
  - deployed: 2026-04-07
  - artifact: content/blog/facebook-ads-automation.md
  - position-current: —, ctr-current: —, imp-day: 0 (28d window — insufficient data)
  - milestone: T+4wk (review 2026-05-04)
  - indexation: blocked — SerpAPI `site:` returns 0 results at T+4wk
  - decision: ❌ escalate / 🔄 re-index — не індексується 4+ тижнів (як і facebook-automated-rules). GSC URL Inspection → Request Indexing. Якщо все ще не indexed на T+5wk (2026-05-12) — investigate sitemap/canonical/orphan issue.
- [https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok](https://www.scalemate.co/blog/bulk-upload-creatives-meta-tiktok) — bulk-upload-creatives-meta-tiktok
  - deployed: 2026-04-21
  - artifact: content/blog/bulk-upload-creatives-meta-tiktok.md
  - position-current: 9.7, ctr-current: 0.59%, imp-day: ~24 (337 imp / 14d)
  - milestone: T+2wk (review 2026-05-04)
  - decision: ⚠️ iterate — flat. CTR 1.13% (week 1) → 0.59% (14d) = 0.52×, не росте. Position ↑ (10.5 → 9.7, page 1). Per spec — keep monitoring до T+4wk (2026-05-19); якщо все ще flat → snippet rewrite.
- [https://www.scalemate.co/blog/best-bulk-ad-launch-tools](https://www.scalemate.co/blog/best-bulk-ad-launch-tools) — best-bulk-ad-launch-tools
  - deployed: 2026-04-27
  - artifact: content/blog/best-bulk-ad-launch-tools.md
  - position-current: 8.3, ctr-current: 1.44%, imp-day: ~30 (209 imp / 7d)
  - milestone: T+1wk (review 2026-05-04)
  - indexation: ✅ confirmed (SerpAPI site: returns position 1 with full snippet)
  - decision: ✅ keep — strong start (page 1 з day one, CTR 1.44%, 3 clicks за week 1). Next check T+2wk = 2026-05-11.
- [https://www.scalemate.co/blog/creative-testing-framework](https://www.scalemate.co/blog/creative-testing-framework) — creative-testing-framework
  - deployed: 2026-04-28
  - artifact: content/blog/creative-testing-framework.md
  - position-current: 9.6, ctr-current: 0.0%, imp-day: ~58 (345 imp / 6d)
  - milestone: T+1wk (review 2026-05-04, today is T+6d)
  - indexation: ✅ confirmed (SerpAPI site: returns position 1, snippet renders)
  - decision: ✅ keep / monitoring — fast indexation, page 1 instantly. CTR 0% але тільки 6d; reassess T+2wk (2026-05-12). Якщо 0 clicks залишається — snippet review.
  - cluster-linking: 2026-05-07 (PR #79, S6') — 4 new inbound + 2 new outbound links added (cluster authority refresh). Anchors diversified: "creative testing system" / "ad creative testing playbook" / "creative testing framework". Total cluster connections after refresh: 6 inbound + 3 outbound.
  - cluster T+4wk milestone: 2026-06-04 — review-agent measures effect on pos 9.6 → top-5 + impressions lift across linked-FROM articles.
- [https://www.scalemate.co/automation-rules-library](https://www.scalemate.co/automation-rules-library) — automation-rules-library
  - deployed: 2026-05-12 (MVP `5520e27`), iterated through 2026-05-13 (`45a9d7f`: 8 new + reworked rules, Targeting filter)
  - artifact: `app/automation-rules-library/` (React page, NOT blog) + `seo-system/topics/automation-rules-library/` (scoping doc from S9')
  - format: interactive filterable library (by goal: scale winners / kill losers / rollback / budget control), Meta Verified Partner badge, "Try it for free" CTA. Targets `facebook automated rules` 150 vol KD 2 + cluster ~370 vol non-branded.
  - position-current: — (just deployed), ctr-current: —, imp-day: 0
  - milestone: T+1wk 2026-05-20 (indexation via SerpAPI `site:`), T+2wk 2026-05-27 (CTR + position), T+4wk 2026-06-10 (cluster gain)
  - decision: monitoring — cheat-sheet format validated by SERP (bir.ch DR 72 #3). Next phases (TikTok + Google Ads cluster, email gate, platform import) deferred pending Phase 1 signal.
- [https://www.scalemate.co/blog/best-facebook-ads-automation-tools](https://www.scalemate.co/blog/best-facebook-ads-automation-tools) — facebook-ads-automation-listicle-rework
  - deployed: 2026-05-08 (16 follow-up iterations through 2026-05-09)
  - artifact: content/blog/best-facebook-ads-automation-tools.md
  - position-current: — (just deployed), ctr-current: —, imp-day: 0
  - milestone: T+1wk (review 2026-05-15)
  - decision: monitoring — new URL (not same-URL repurpose as S5' plan called for). 4,767 words, 13 tools (slot 13 reporting added 2026-05-09), Structure B buyer's-guide flow with Pick-by-job table at top, FAQ rebuild, comparison table sticky-first-column. Title "13 Best Facebook Ads Automation Tools 2026 (Meta + TikTok)". Cross-links to `/automation-rules-library` × 3. Old `/blog/facebook-ads-automation` left live with banner-link at top pointing here (decided 2026-05-12 — keep as deeper how-to companion, no 301 redirect).
  - cannibalization watch: cluster `facebook ads automation` 150 vol KD 6 now has 2 URLs. Old article had indexation issues (0 imp 28d). If new listicle indexes and old stays at 0 — fine, complementary. If both stay at 0 — escalate to consolidation/redirect at T+4wk.
  - T+1wk check 2026-05-15: indexation (SerpAPI site:) + first impressions. T+2wk 2026-05-22: position + CTR. T+4wk 2026-06-05: cannibalization decision.

---

## §9. Rejected / Archived

> Топіки що ми вирішили НЕ робити. Причина обов'язкова — щоб через 3 місяці не пропонувати знову.
>
> Формат item:
> ```
> - slug
>   - rejected: YYYY-MM-DD
>   - reason: [SERP intent mismatch / 0 demand / cannibalization / abandoned mid-write]
> ```

- facebook-ads-manager-bulk-upload-alternative
  - rejected: 2026-05-05
  - reason: 0 demand (Ahrefs vol = 0 on `facebook ads manager bulk upload alternative` + variants) AND cannibalization with existing `/blog/bulk-upload-creatives-meta-tiktok` (already covers cluster, 79 imp/wk pos 11.1). Replaced by S1' = strengthen existing article with H3 on "alternative" intent. See action-lists/2026-05-04.md S1.
- creative-fatigue-7-day-meta-andromeda
  - rejected: 2026-05-05
  - reason: Slug mixed two clusters — creative fatigue (already covered by `/blog/what-is-ad-fatigue`) + Andromeda (real gap, 3.5K vol/mo). Hyper-specific "7-day" = 0 vol. Repurposed as standalone `meta-andromeda-update` (now in §1 New) with creative fatigue as one sub-section + internal link to existing fatigue page. See action-lists/2026-05-04.md S2'.
- ad-creative-automation
  - rejected: 2026-05-05 (DEFERRED — keep in mind for later, not pushed back to §1 New)
  - reason: Original score "KD 0, TP 7000, zero competition gap" misleading. TP=7000 inflated by adcreative.ai parent_topic spillover (real reachable ~200-400). Critical issue: SERP intent = production/generation tools (Celtra, Bannerflow, Hunch, Pencil, AdCreative.ai dominate top-10). Scalemate = launch+test+scale execution layer = poor product-SERP fit for this cluster. **Revisit trigger:** when Scalemate ships production/generation product OR when we pursue "Production vs Execution split" explainer angle (different framing — defines two layers, recommends tools for each — Scalemate natural fit on execution side). See action-lists/2026-05-04.md S4.
- facebook-ads-automation-tools-comparison
  - rejected: 2026-05-05
  - reason: Cannibalization with existing `/blog/facebook-ads-automation` (same cluster `facebook ads automation` 150 vol KD 6 — stuck on indexation). Format wrong — SERP rewards listicle (adstellar #4 24 traffic, itsfundoingmarketing #6 22 traffic), not comparison guide (get-ryze.ai #8 DR 70 = 3 traffic). New URL doesn't fix root-cause indexation problem (low DR site). Replaced by S5' = repurpose existing article to listicle. See action-lists/2026-05-04.md S5'.
- creative-testing-pillar (carryover, item #12 in scorecard)
  - rejected: 2026-05-05
  - reason: Duplicate with existing `/blog/creative-testing-framework` (deployed 2026-04-27, page 1 at T+1wk, pillar-style "Multi-Platform Playbook 2026"). Existing already targets cluster ~1,400 vol/mo non-branded. Note: original "1000+ vol cluster" claim partly inflated — `creative testing solutions` (500 vol) is branded for medical clinical trials company. Replaced by S6' = internal linking refresh. See action-lists/2026-05-04.md S6'.
- scale-creative-volume-without-designers
  - rejected: 2026-05-05
  - reason: Wrong product fit — creative PRODUCTION pain, Scalemate doesn't solve (we = launch+test+scale execution layer, not generation). No honest CTA. Plus SEO problem: 0 search vol, all `*without designer` matching terms off-topic (interior/graphic/fashion designer career queries). See action-lists/2026-05-04.md S7.
- automation-rules-frameworks-meta-tiktok (was S10/S9 in action-list)
  - rejected: 2026-05-05 (REPURPOSED — not blog format)
  - reason: Original intelligence-agent proposal was a blog article. Repurposed 2026-05-05 per Natalia to interactive library page format (NOT blog) — `/automation-rules-library` React page with filterable rules library + email-gated full version + "import to Scalemate" CTA. Phased build: Phase 1 (Meta cheat-sheet, SEO-indexed) → Phase 2 (TikTok + Google Ads + email gate) → Phase 3 (platform import). SERP analysis 2026-05-05 validated cheat-sheet format wins (bir.ch DR 72 #3, no multi-platform / email-gated competitor — clear gap). TikTok cluster 0 search demand → library = product differentiation, not SEO. See pipeline §1 New `automation-rules-library` (replacement) + action-lists/2026-05-04.md S9' (3h scoping doc).
- mobile-ua-retention-d1-d7-d30-benchmarks (was M4d)
  - rejected: 2026-05-12
  - reason: 3 sub-clusters (D1 150 vol KD 0, D7 150 KD 1, D30 100 KD 3) each TP 30-80 = low ceiling. Combined into one page = thin content; separate pages = sub-50-click ceilings. To be value-add we'd need to publish real benchmarks from MMP cohort data — separate data-collection exercise, not "just write a blog." Replaced by 2-paragraph retention sub-section folded inside M4a pillar blog. See `seo-system/topics/mobile-ua-pillar/scoping.md` §6 comparison vs current M1-M4d plan.
- app-user-acquisition-strategy (was M4b)
  - rejected: 2026-05-12 (PIVOTED — same blog moved to games-flavored variant)
  - reason: `app user acquisition` SERP (DR 79-95) unreachable for low-DR site — top-10 = AppsFlyer / Adjust / Reddit / Salesforce / BusinessofApps. Apps coverage folds inside M1 cornerstone (`/use-cases/mobile-user-acquisition`) + M4a pillar blog instead. Pivot satellite → `mobile-game-user-acquisition-strategy` (200 vol KD 2, DR 37-54 reachable). See pipeline §1 New `mobile-game-user-acquisition-strategy` (replacement) + scoping.md §6.
- solutions-mobile-ua (was M2 — not in pipeline §1 New since it was a landing page, not a content topic — kept here for traceability)
  - rejected: 2026-05-12
  - reason: Would duplicate M1 (`/use-cases/mobile-user-acquisition`) — same persona (UA manager), same JTBD, same CTA. Only new keyword targeted (`user acquisition strategy` head, 200 vol KD 7) has DR 86-95 SERP (Adjust, BusinessofApps, Reddit, Salesforce) — unreachable. Adds IA confusion without unlocking new cluster. See scoping.md §6 comparison vs current M1-M4d plan.

---

## 📊 Monitoring (metadata edits tracking)

> Per-page моніторинг title/meta правок на ІСНУЮЧИХ URL (це не нові топіки — це edits).
> Нові статті/сторінки трекаються в §8 Published.
>
> Як оновлювати:
> 1. Запустити `python3 seo-system/scripts/detect-metadata-changes.py --days 30` — скрипт виведе готові markdown-рядки.
> 2. Якщо URL вже є в таблиці — оновити рядок (новий current snapshot, новий next check).
> 3. Якщо URL новий — додати рядок.
> 4. Review агент далі читає цю таблицю на T+2wk / T+4wk і виносить decision.
>
> **Decision values:**
> - `monitoring` — ще не пройшов milestone, чекаємо
> - `✅ keep` — CTR/impressions виросли, правка спрацювала
> - `⚠️ iterate` — flat, треба ще одну ітерацію (тільки після cooldown 14d)
> - `❌ revert` — позиція впала / impressions просіли, повернути попередній варіант
> - `🔄 re-index` — Google ще не підхопив новий title, чекаємо або submit URL Inspection

| Item | Deployed | Baseline (-30d) | Current | Next check | Change | Decision |
|---|---|---|---|---|---|---|
| `/ad-creative-uploader` metadata | 2026-04-20 | 217 imp, 5 clk, 2.30% CTR, pos 11.2 | 132 imp, 6 clk, 4.55% CTR, pos 9.7 | 2026-05-18 (T+4wk) | title «Free Ad Uploader — Google Drive to Meta…» → «Bulk Upload Ad Creatives to Meta & TikT…» (24e5df9) | ✅ keep (T+2wk: CTR 2.30%→4.55% = 1.98× baseline, pos 11.2→9.7 +1.5 places — edit працює; tracking T+4wk for confirmation) |
| `/blog/best-ad-testing-tools` metadata | 2026-05-04 | 3129 imp, 0 clk, 0.0% CTR, pos 14.7 (post-Apr-20 28d) | no data yet (just deployed) | 2026-05-18 (T+2wk) | **Apr 20 edit caused pos 5.8→19.4 with 0 clicks both versions** (root-cause: page-level positioning, not title). **May 4: replaced revert with ICP-aligned title test** — title «10 Best Ad Testing Tools & Software (20…» → «10 Best Ad Testing Tools for Meta + TikTok (2026)»; description «Compare 10 ad testing tools and softwar…» → «Compare 10 ad testing tools that work across Meta and TikTok: pricing, launch speed, automation rules — for ROAS-focused teams in 2026.» (commit 0691cb2, PR #55) | monitoring (T+2wk: if CTR still ~0, escalate to S9 full content rework per `seo-system/action-lists/2026-05-04.md`) |
| `/blog/best-mcp-servers-meta-google-ads` metadata | 2026-04-20 | 2304 imp, 11 clk, 0.48% CTR, pos 6.5 | 949 imp, 8 clk, 0.84% CTR, pos 7.0 | superseded by R3 rewrite (2026-05-05) | title (no change); description rewrite (24e5df9) | ✅ superseded by R3 newsjack rewrite — see next row |
| `/blog/best-mcp-servers-meta-google-ads` newsjack rewrite (R3) | 2026-05-05 | 2796 imp, 16 clk, 0.57% CTR, pos 9.4 (28d pre-rewrite) | no data yet (just deployed) | 2026-05-19 (T+2wk) | **Full newsjack rewrite** post Meta's official MCP launch (April 29). title «Best MCP Servers for Meta & Google Ads — Ban Risk Warning» → «Meta Ads MCP vs Google Ads MCP: Official + Alternatives» (V2 winner via sm:copywriting + content-ops 93/100); description rewrite to lead with April 29 launch + Scalemate brand inclusion; body — new "Meta's Official MCP Launch" section, "0. Meta Ads MCP (Official)" entry, FAQ Q3/Q4/Q7 updates, "Verified vs Unverified" rewrite, "When Meta's MCP Is Enough vs Layer Above" segmentation block (Tier 1: <10 ads/wk solo / Tier 2: 10+ ads/wk multi-account), comparison table updated with official MCP row, MCP-gap list mapped to Scalemate features. PRs #64, #65, #66, #68, #70 + #71 (blog template "Updated [date]" fix). content-ops 92→95+. | monitoring (T+2wk: target CTR 0.57% → 1.5%+ via news hook + repositioning; if flat, iterate description; if positive, continue T+4wk) |
| `/blog/madgicx-review-alternative` metadata | 2026-04-30 | 2599 imp, 2 clk, 0.08% CTR, pos 9.8 | 128 imp, 1 clk, 0.78% CTR, pos 8.7 | 2026-05-14 (T+2wk) | description «Madgicx pricing starts at $69/mo…» → «Running ads beyond Meta? See Madgicx pr…»; title «Madgicx Review 2026: Pricing, Features …» → «Is There a Real Madgicx Alternative for…» (6d3141e, 9a9bfe5) | monitoring (T+4d: early signal positive — CTR 0.08%→0.78% ≈ 9.7×, pos +1.1; hold judgment until T+2wk) |
| `/use-cases/ad-campaign-automation-rules` metadata | 2026-04-29 | 201 imp, 0 clk, 0.0% CTR, pos 7.8 | 78 imp, 0 clk, 0.0% CTR, pos 11.5 | 2026-05-13 (T+2wk) | title rewrite — Facebook + ROAS focus (0c3d863, PR #39) | monitoring (T+5d: pos -3.7 typical re-ranking after title change; reassess T+2wk. NOTE: row missed by detect-metadata-changes.py — added manually this review cycle) |
| `/use-cases/bulk-ad-launch` body enrichment | 2026-05-04 | 456 imp, 5 clk, 1.10% CTR, pos 18.6 (28d pre-edit) | no data yet (just deployed) | 2026-05-18 (T+2wk) | **Body keyword enrichment** (not title/meta): added 5 striking-distance phrases × 1 mention each — `bulk ad launcher`, `Facebook campaign launcher`, `automated ad launch tool`, `launch ads faster`, `automate bulk ad creation for Meta Facebook Ads`. Each placed in natural body context (CTA, problem, before/after, how-it-works, FAQ). Verified via grep. Commit 0691cb2, PR #55. NOTE: row missed by detect-metadata-changes.py (script tracks frontmatter title/description only — body changes invisible). | monitoring (T+2wk: target pos 14-18 → top 10 on 5 enriched queries; if no movement, file under no-impact body edit and learn) |
| Internal linking refresh — uploader cluster | 2026-05-04 | n/a (multi-page) | n/a (effects accumulate over weeks) | 2026-06-01 (T+4wk) | 3 new internal links added (PR #55, commit 0691cb2): `/ad-creative-uploader` → `/blog/bulk-upload-creatives-meta-tiktok` + `/blog/best-bulk-ad-launch-tools`; `/use-cases/bulk-ad-launch` → `/blog/best-bulk-ad-launch-tools`. Reverse links to `/ad-creative-uploader` and `/use-cases/bulk-ad-launch` already existed. | monitoring (cluster authority signal — measure aggregate impressions/clicks across 5 cluster URLs vs 28d-pre baseline at T+4wk) |
