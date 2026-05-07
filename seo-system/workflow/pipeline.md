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
| automation-rules-library | 370 (cluster) | 2-9 | — | MOFU/BOFU | 7.5 | **Interactive library page format (NOT blog) — replaces previously-proposed `automation-rules-frameworks-meta-tiktok` blog (in §9 Rejected, repurposed 2026-05-05).** React page at `app/automation-rules-library/page.jsx` with filterable rules library (by goal: scale winners / kill losers / rollback / budget control), email gate for full library + "import to Scalemate" CTA. Phased build: Phase 1 (Meta cheat-sheet, SEO-indexed) → Phase 2 (TikTok + Google Ads + email gate) → Phase 3 (platform import). Cluster: Meta `facebook automated rules` 150 vol KD 2 + variants ~370 total non-branded; TikTok 0 search demand (= product differentiation, not SEO); Google Ads `google ads automated rules` 50 vol KD 4. SERP validates cheat-sheet format wins (bir.ch DR 72 #3, no multi-platform / email-gated competitor). Internal hub: `/features/automation-rules` + `/use-cases/ad-campaign-automation-rules`. **Next step:** scoping doc S9' in action-list 2026-05-04 (3h research before engineering Phase 1 ~6-8h). NOT a discovery-agent task — this needs scoping, not brief. |
| mobile-user-acquisition-guide | 700 | 10 | — | TOFU pillar | TBD | **NEW 2026-05-05 — mobile UA pillar cornerstone (M4a in action-list 2026-05-04).** Hub for mobile UA cluster. Targets `user acquisition` 700 vol + cluster: `user acquisition strategy` (200 KD 7), `paid user acquisition` (250 KD 2), TP 600. AI Overview active. Apps + games equally. Channel scope: Meta + TikTok only (per `scalemate_channel_scope.md` memory). **Blocked on M1 (`/use-cases/mobile-user-acquisition`) ship** — needs real BOFU target for CTA. Internal links to: M1 use-case + M2 solution. See `action-lists/2026-05-04.md` M1-M3 for product-surface roadmap context. |
| app-user-acquisition-strategy | 250 | 1 | — | MOFU strategy | TBD | **NEW 2026-05-05 (M4b).** Strategy satellite to `mobile-user-acquisition-guide`. Targets `app user acquisition` 250 vol KD 1, TP 600. Apps + games. Same channel constraints. Blocked on M1 ship. |
| mobile-attribution-explained | 150 | 2 | — | TOFU/educational | TBD | **NEW 2026-05-05 (M4c) — AEO play.** Targets `mobile attribution` 150 vol KD 2, TP 600 + sub-cluster `mobile measurement partner` (250 KD 10), `deferred deep linking` (250 KD 2), `skadnetwork` (400 KD 16, TP 600), `skan 4` (60 KD 2). **Frame as educational, NOT product position** — ScaleMate has no MMP integration per `scalemate_channel_scope.md`. Structure for LLM citations: Q&A format, FAQPage + HowTo schema, specific numbers/frameworks. Goal = LLM citations (faster than SEO rankings for low-DR site), brand awareness in mobile UA community. |
| mobile-ua-retention-d1-d7-d30-benchmarks | 150 | 1 | — | MOFU metrics | TBD | **NEW 2026-05-05 (M4d).** Combined definition + benchmarks: D1 retention (150 vol KD 0), D7 (150 KD 1), D30 (100 KD 3). Apps + games benchmarks separately. AEO-friendly (definition pages get cited). Blocked on M1+M2 ship for CTA targets. |

---

## §2. Discovery in progress

> Discovery агент валідує тему — keyword data, SERP, ICP pain. Виходить з brief.md.

- _empty_

---

## §3. Pending Natalia review (brief)

> Brief готовий, чекає твого approve. Approve = рух у §4. Reject = назад у §1 або в §9.

- **meta-andromeda-update** — discovery completed 2026-05-05 (PR #59, branch `seo/meta-andromeda-update`). Brief: [`seo-system/topics/meta-andromeda-update/brief.md`](../topics/meta-andromeda-update/brief.md). Primary keyword `meta andromeda update` (vol 500, parent `meta andromeda` 1,400 KD 15). Cluster ~3,500 vol/mo across 23 keywords. SERP for `meta andromeda update` is 10/10 Reddit threads — pure gap for structured founder-voiced playbook. Existing content check: zero pages, zero GSC impressions over 90d. Pain validated: 4 of top-10 Reddit threads have 50+ comments, 2 have 100+. Unique angle: founder-authored mobile-UA Andromeda playbook synthesizing 7 Ruslan LinkedIn hacks + 2 internal Scalemate observations (Creative Diversity Score "worlds", simplified campaign structure with 10–20+ creatives per ad set). 5 inputs needed from Natalia/Ruslan listed in brief.
- **facebook-ads-automation-listicle-rework** — discovery re-validated 2026-05-07 (S5' **CREATE NEW URL**, local on `main`). Brief: [`seo-system/topics/facebook-ads-automation-listicle-rework/brief.md`](../topics/facebook-ads-automation-listicle-rework/brief.md). **Plan changed from "rework existing" to "create new URL".** New URL: `/blog/best-facebook-ads-automation-tools` (slug carries no year — year goes in title only). Existing `/blog/facebook-ads-automation` stays AS-IS — no edit, no delete, no 301 redirect, sits unindexed. Primary keyword `facebook ads automation tools` (vol 50 KD 14 CPC $6.00 **TP 700**, commercial intent); cluster ~340 vol/mo on-topic non-branded with **TP 700-900** confirmed by fresh Ahrefs 2026-05-07 (`facebook ads automation` 150 vol KD 6 TP 900; `facebook ads automation software` 40 vol KD 12 TP 600; rest body-tier). Volume trend +24% over 4 months (rising). SERP fresh pull: listicle SERP `best facebook ads automation tools 2026` has 5/7 organic positions as listicles on DR 30-50 vendor blogs + AI Overview present. Peer-set deep-dive (WebFetch on Synter / Get-Ryze / AdStellar): only Synter has rules-aware "Automation Type" column; none structures comparison around rules engine + rollback + trigger complexity + multi-account + scheduling — that's our **rules-as-spine** angle (5 rules dimensions per tool, not 1 binary tag). **Cannibalization cleared** with in-flight `automation-rules-library` (S9' / pipeline §1): library targets `facebook automated rules` cluster (TP 100, informational cheat-sheet) — different SERP, different intent, different format than this listicle. Pain validated: 5+ active r/FacebookAds + r/PPC threads (10-50+ comments each) on manual ad-management drudgery, "burning 4-6 hours a week", "lost 5 hours" to no-rollback rules. Listicle structure: 12 tools (Native Meta / Scalemate / Birch / Madgicx / Smartly / AdEspresso / Trapica / Adzooma / Kitchn / AdManage / Make.com / creative-automation honest-mention) with 13-column rules-spine-anchored comparison table + decision-framework block. Internal-link plan: ADD inbound from `/features/automation-rules` + `/use-cases/ad-campaign-automation-rules` + blog index (auto); keep all existing links to old `/blog/facebook-ads-automation` in place (no removals). Risk + fallback: if new URL doesn't index at T+2wk → escalate to S5'-2 (301 old → new). 6 inputs needed from Natalia listed in brief (peer-set confirm, pricing verification, rules-spine values for Birch/Madgicx/Scalemate, first-hand operator anecdote, title selection, internal-link plan).

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
