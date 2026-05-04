# Scalemate SEO — Prioritization Scorecard (Living Backlog)

> **Живий беклог для всього SEO-roadmap'у.** Intelligence-agent оновлює щотижня (понеділок).
> Formula і методологія — див. `docs/architecture.md` Шар 1.5.
> Ключові рішення виходять на твій approve — див. `docs/architecture.md` Шар 1.7.

---

## Legend

**Buckets:**
- 🟢 Quick Win (Score ≥ 40, Effort ≤ 5h)
- 🟡 Strategic Bet (Score ≥ 35, Effort > 8h)
- 🔵 Foundation (technical, robимо parallel)
- 🔴 Risk / Urgent (Urgency = 3)
- ⚪ Iceberg (Score < 20, speculative)

**Content types:** blog, product, case-study, landing, comparison, hub, resource, technical

**Status:**
- `backlog` — у черзі
- `this-week` — взятий у роботу цього тижня (approved at Checkpoint 1)
- `in-outline` — готується outline (до Checkpoint 2)
- `in-draft` — пишеться full draft
- `in-review` — готовий до Checkpoint 4
- `published` — у проді
- `deferred` — відкладено (причина у колонці)

---

## Active Backlog (top 50)

| # | Item | Type | Traffic | ICP | Biz | Conf | Effort | Urg | Bonus | **Score** | Bucket | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Rewrite title+meta `/blog/madgicx-review-alternative` | blog | 6 | 5 | 5 | 3 | 2 | 3 | ×1.5 | **~50** | 🟢 Quick Win | ✅ `deployed` | Pairing A (content-ops 92.4/100). Deployed 2026-04-16 commit `6d3141e`. Baseline CTR 0.05% / pos 7.9 / ~200 imp/day. Revisit T+7d (2026-04-23 indexation), T+2wk (2026-04-30 CTR milestone), T+4wk (2026-05-14 final). |
| 2 | Brand entity authority plan (Organization schema + sameAs) | technical | 4 | 4 | 4 | 2 | 4 | 2 | — | **~38** | 🟡 Strategic | `backlog` | Scalemate.co vs scalemate.io vs scalemates.com namespace conflict |
| 3 | Investigate `/blog/best-mcp-s*` | blog | — | — | — | — | 2 | — | — | **TBD** | 🟡 Strategic | `backlog` | 2079 imp/0.4% CTR. Decide: deindex / repurpose / leverage |
| 4 | Title/meta fix `/ad-creative-uploader` (додати "bulk", "creatives") | product | 3 | 5 | 4 | 3 | 2 | 2 | ×1.5 | **~40** | 🟢 Quick Win | `backlog` | pos 7-12 для "ad uploader" variants, 79 imp/28d, 1 click. Додати "bulk" і "creatives" в title — це те що люди шукають. |
| 5 | Keyword rewire `/use-cases/automated-creative-upload-meta` | product | 4 | 5 | 4 | 2 | 7 | 3 | ×1.5 | **~45** | 🟢 Quick Win | `backlog` | 3 imp/28d — невидима. "automate creative upload meta ads" x10 → замінити на real queries: "bulk upload creatives", "upload ads to meta faster". Новий title/H1/meta. Зберегти case studies (ZeptoLab, KitUp). Detail plan: `plans/ad-creative-uploader-growth.md` |
| 6 | Blog "How to Bulk Upload Creatives to Meta & TikTok (5 Methods)" | blog | 4 | 5 | 4 | 3 | 8 | 2 | ×1 | **~50** | 🟡 Strategic | `backlog` | Pain-validated: 10 Reddit threads, 30+ comments. SERP beatable (pos 3-8 = blogs/tools). Наш angle: FREE + Google Drive + case studies. Links to `/ad-creative-uploader`. Detail plan: `plans/ad-creative-uploader-growth.md` |
| 7 | Internal linking refresh (uploader cluster) | technical | — | — | — | — | 2 | — | — | — | 🔵 Foundation | `backlog` | З existing articles (facebook-ads-automation, facebook-automated-rules, best-ad-testing-tools) → лінки на `/ad-creative-uploader`. Cross-link tool page ↔ use-case page. |
| 8 | Add "vs Competitors" section to use-case page | product | 3 | 5 | 5 | 2 | 4 | 2 | ×1.5 | **~30** | 🟢 Quick Win | `backlog` | Порівняльна таблиця: Scalemate (FREE) vs admanage ($700/mo) vs Birch vs kitchn.io vs manual Ads Manager. Killer angle: price + Google Drive + multi-platform. |
| 9 | Listicle "Best Bulk Ad Upload Tools 2026 (Free & Paid)" | blog | 3 | 5 | 5 | 2 | 9 | 2 | ×1 | **~35** | 🟡 Strategic | `backlog` | 5 competitor listicles in top-10, нас нема в жодному. Own listicle де Scalemate = best free option. Detail plan: `plans/ad-creative-uploader-growth.md` |
| 10 | Title/meta fix `/use-cases/ad-campaign-automation-rules` | product | 4 | 5 | 4 | 3 | 3 | 3 | ×1.5 | **~300** | 🟢 Quick Win | `backlog` | pos 8.8 (page 1!), 170 imp, 0 clicks = pure CTR fix. From v2 brief item #1. |
| 11 | Optimize `/blog/best-mcp-servers` | blog | 5 | 2 | 2 | 2 | 4 | 2 | ×1.5 | **~150** | 🟢 Quick Win | `backlog` | 2296 imp, 11 clicks, pos 10.3. Edge of page 1. From v2 brief item #2. |
| 12 | Write "Creative Testing" pillar page | hub | 6 | 5 | 4 | 2 | 10 | 2 | ×1 | **~200** | 🟡 Strategic | `backlog` | Keyword cluster 1000+ vol, KD 0-8, CPC $7-12. Pain-validated: "Testing 50+ creatives/week without burning out". From v2 brief item #4. |
| 13 | Write "Ad Operations: The Complete Guide" | blog | 5 | 5 | 4 | 2 | 10 | 1 | ×1 | **~150** | 🟡 Strategic | `backlog` | "ad operations" 250 vol, KD 1. Literally what Scalemate IS. From v2 brief item #5. |
| 14 | Create `/about` page | landing | — | — | — | — | 5 | — | — | — | 🔵 Foundation | `backlog` | **Найбільший trust gap.** Google Quality Raters: "Who is responsible?" Без About — сайт анонімний. Input needed від Natalia: команда, company info, місі��. |
| 15 | Create `/terms` page (Terms of Service) | landing | — | — | — | — | 3 | — | — | — | 🔵 Foundation | `backlog` | Стандарт для SaaS з free tier. Red flag для quality raters якщо немає. |
| 16 | Create `/contact` page | landing | — | — | — | — | 2 | — | — | — | 🔵 Foundation | `backlog` | Dedicated contact (email, форма). book-a-demo частково покриває, але Google каже: "legitimate businesses provide clear contact info." |
| 17 | Author pages for blog (`/blog/author/natalia`) | technical | — | — | — | — | 4 | — | — | — | 🔵 Foundation | `backlog` | Blog без авторів = анонімний контент. Author bio + LinkedIn + список статей. Schema Person + sameAs. Стає критично при 15+ статтях. |
| 18 | Organization schema + sameAs | technical | — | — | — | — | 2 | — | — | — | 🔵 Foundation | `backlog` | sameAs links (LinkedIn, Twitter), founder, address. Knowledge Graph. Was scorecard #2. |
| 19 | Case study: Appflame (rules feature) | case-study | 3 | 5 | 5 | 2 | 8 | 2 | ×1 | **~40** | 🟡 Strategic | `backlog` | Немає сирих даних — Input needed від Natalia: метрики, challenge, solution, results. Шаблон: `/customers/kitup` format. |
| 20 | Case study: Promin Agency (rules feature) | case-study | 3 | 5 | 5 | 2 | 8 | 2 | ×1 | **~40** | 🟡 Strategic | `backlog` | Є часткові згадки в content (automation-rules, media-buyers). Input needed від Natalia: повні метрики, quote. Шаблон: `/customers/kitup` format. |
| 21 | Update Tier-1 use case pages (bulk-ad-launch, automation-rules etc) | product | — | — | — | — | 10+ | — | — | **TBD** | 🟡 Strategic | `backlog` | pos 18-22, не в top-10. Re-audit seed keywords spersh |

---

## This Week Priorities (approved 2026-04-15)

| # | Item | Action | Owner agent | ETA | Status |
|---|---|---|---|---|---|
| 1 | `/blog/madgicx-review-alternative` | Apply title+meta change, deploy, Request Indexing | Natalia (deploy) | 2026-04-16 | ✅ **DEPLOYED 2026-04-16** (commit `6d3141e`). Awaiting Vercel prod build + GSC Request Indexing |

---

## Current Sprint (approved 2026-04-20)

> Ціль: 3-4 якісні нові статті/тиждень + фікси existing pages. Quick wins спершу, потім нові статті.

**Quick Wins (existing fixes):**

| # | Item | Agent | Status |
|---|---|---|---|
| 10 | Title/meta `/use-cases/ad-campaign-automation-rules` | copywriting | `deferred` — чекаємо індексацію 2 блог-постів (facebook-automated-rules, facebook-ads-automation), revisit ~2026-04-27 |
| 4 | Title/meta `/ad-creative-uploader` | copywriting | ✅ `deployed` 2026-04-20 (commit `24e5df9`). Title: "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool". Baseline: 96 imp/90d, 1 click, pos 8.9 ("ad uploader"), pos 51.6 ("bulk ad uploader"). |
| 5 | Keyword rewire `/use-cases/automated-creative-upload-meta` | content-creator + copywriting | ✅ `deployed` 2026-04-20 (commit `24e5df9`). Rewired 15 місць: "automate creative upload meta ads" (0 vol) → "bulk upload creatives" cluster (80-100/mo). Додано client logos + platforms. |
| 7 | Internal linking refresh (uploader cluster) | content-creator | ✅ `deployed` 2026-04-20 (commit `24e5df9`). 3 нові cross-links: facebook-automated-rules → uploader, madgicx-review → uploader, tool page → use-case page. |
| 11 | Optimize `/blog/best-mcp-servers` | copywriting | ✅ `deployed` 2026-04-20 (commit `24e5df9`). Title: "Ban Risk Warning", додано verified vs unverified секцію + Meta ban warning + FAQ. |
| 11b | Title/meta `/blog/best-ad-testing-tools` | copywriting | ✅ `deployed` 2026-04-20 (commit `24e5df9`). Title: "10 Best Ad Testing Tools & Software (2026 Comparison)". Baseline: 1420 imp/90d, 0 clicks, pos 11.2 ("ad testing software"). |
| 8 | "vs Competitors" section on use-case page | copywriting + conversion-ops | `backlog` |

**New Content (discovery → write → qa):**

| # | Item | Agent | Status |
|---|---|---|---|
| 6 | Blog "How to Bulk Upload Creatives (5 Methods)" | discovery → content-creator → qa | `backlog` |
| 9 | Listicle "Best Bulk Ad Upload Tools 2026" | discovery → content-creator → qa | `backlog` |
| 12 | Pillar "Creative Testing" | discovery → content-creator → qa | `backlog` |
| 13 | "Ad Operations: Complete Guide" | discovery → content-creator → qa | `backlog` |
| 19 | Case study: Appflame (rules feature) | content-creator → qa | `blocked` — input needed |
| 20 | Case study: Promin Agency (rules feature) | content-creator → qa | `blocked` — input needed |

**Trust / Foundation (паралельно):**

| # | Item | Agent | Status |
|---|---|---|---|
| 14 | `/about` page | copywriting + conversion-ops | `blocked` — input needed |
| 15 | `/terms` page | copywriting | `backlog` |
| 16 | `/contact` page | copywriting | `backlog` |
| 17 | Author pages for blog | content-creator (template) | `backlog` |
| 18 | Organization schema | content-creator | `backlog` |
| 19 | Blog article: "Autonomous Creative Testing Workflows" — як налаштувати workflow де launches → first-step evaluation → status assignment → move to BAU працюють автоматично 24/7. Future internal link target з `/blog/creative-testing-framework`. | content-creator | `backlog` |

---

## Deferred Items (з причинами)

*(items зі скорингу, які агент вирішив не брати цього тижня — для transparency)*

| Item | Score | Reason deferred | Revisit |
|---|---|---|---|
| `best-ad-testing-tools` (1282 imp, pos 14.7) | — | Включимо у Creative Testing cluster (#12). Не окремий fix. | При роботі над #12 |
| `what-is-ad-fatigue` (396 imp, pos 21.9) | — | Far from top-10, low priority | Наступна розвідка |
| Meta Ad Sizes guide / Meta Pixel Helper guide | — | Validated by competitors але lower priority ніж core topics | Наступна розвідка |

---

## 🔴 Urgent / Risk Queue

*(competitor threats, cannibalization, potential penalties — реагуємо поза звичайним циклом)*

| Item | Risk | Detected | Status |
|---|---|---|---|
| — | — | — | — |

---

## ⚪ Iceberg (speculative)

*(low score або low confidence — тримаємо, повертаємось коли pipeline вільний)*

| Item | Why interesting | Blocker |
|---|---|---|
| — | — | — |

---

## 📊 Monitoring (deployed items tracking)

| Item | Deployed | Baseline | Current (2026-04-27) | Next check | Notes |
|---|---|---|---|---|---|
| Madgicx article title/meta | 2026-04-16 | CTR 0.05%, pos 7.9 | 2551 imp, 3 clicks, 0.1% CTR, pos 9.7 | 2026-04-30 (T+2wk) | CTR low, pos stable |
| `/blog/madgicx-review-alternative` title+meta v2 | 2026-04-30 | (filled by next review run) | (filled by next review run) | 2026-05-14 (T+2wk) | Detected by `detect-metadata-changes.py`. Title: "Madgicx Review 2026..." → "Is There a Real Madgicx Alternative for TikTok + Meta?". Meta also rewritten. Commits 6d3141e, 9a9bfe5. Cooldown until 2026-05-28 — no further title/meta proposals before then. |
| `facebook-ads-automation` indexation | 2026-03-27 | Not indexed | 🚨 **Still not indexed** (Discovered - not crawled) | 2026-05-04 | Re-submit + share externally |
| `facebook-automated-rules` indexation | 2026-04-06 | Not indexed | 🚨 **Still not indexed** (Discovered - not crawled) | 2026-05-04 | Re-submit + share externally |
| `/ad-creative-uploader` title/meta | 2026-04-20 | 96 imp, 1 click, pos 8.9 | ✅ **240 imp, 6 clicks, pos 12.8** (+150% imp, +500% clicks) | 2026-05-04 | Title fix working! |
| `/use-cases/automated-creative-upload-meta` rewire | 2026-04-20 | 3 imp/90d | ✅ **63 imp/28d, pos 10.8** (+2000% imp) | 2026-05-04 | Keyword rewire massive impact |
| `/blog/best-mcp-servers` ban warning | 2026-04-20 | 2296 imp, 11 clicks, pos 10.3 | ✅ 2421 imp, 13 clicks, pos 10.1 | 2026-05-04 | Steady growth |
| `/blog/best-ad-testing-tools` title fix | 2026-04-20 | 1420 imp, 0 clicks, pos 14.7 | ⚠️ 2260 imp, 0 clicks, pos 15.7 | 2026-05-04 | Imp up but pos dropped. Needs time |
| `/blog/bulk-upload-creatives` (NEW) | 2026-04-21 | N/A | ✅ **79 imp, 1 click, pos 11.1** — indexed in 6 days | 2026-05-04 | New article performing |

---

## Technical Debt (🔵 Foundation — parallel track)

*(не блокує контент, але треба поступово закривати)*

| # | Issue | Severity | Effort | Status | Notes |
|---|---|---|---|---|---|
| 1 | Internal linking refresh (uploader cluster) | Med | 2h | `backlog` | Cross-link existing articles → uploader pages |

---

## Scoring Examples (для референсу)

### Example 1 — Update existing article (Quick Win)
```
Item: UPDATE /blog/ad-automation-rules-101
Traffic: 8/10  (1,200/mo volume × 30% CTR at pos 3 = +360)
ICP: 5/5       (UA Manager, JTBD Group A)
Biz: 4/5       (MOFU → /features/automation-rules)
Conf: 3/3      (GSC pos 6, stable 3 months)
Effort: 4      (existing update + 300 words + FAQ)
Urgency: 3     (striking distance decay risk)
Bonus: ×1.5    (existing asset)

Score = (8 × 5 × 4 × 3) / 4 × 3 × 1.5 = 540
→ Bucket: 🟢 Quick Win
```

### Example 2 — New comparison page (Strategic Bet)
```
Item: CREATE /compare/scalemate-vs-madgicx
Traffic: 6/10  (400/mo × 30% at top = +120)
ICP: 5/5       (BOFU media buyers)
Biz: 5/5       (pure bottom funnel)
Conf: 2/3      (already 156 imp on "madgicx pricing 2026")
Effort: 10     (research + write + design table)
Urgency: 3     (hot query, 0% CTR currently)
Bonus: ×1      (new page)

Score = (6 × 5 × 5 × 2) / 10 × 3 × 1 = 90
→ Bucket: 🟡 Strategic Bet
```

### Example 3 — Speculative long-tail (Iceberg)
```
Item: "ultimate guide to meta creative testing"
Traffic: 5/10  (800/mo)
ICP: 4/5       (media buyers, but TOFU)
Biz: 2/5       (TOFU — unclear conversion path)
Conf: 1/3      (топ-10 DR 70+, we're DR ~30)
Effort: 15     (pillar content)
Urgency: 1     (evergreen)
Bonus: ×1

Score = (5 × 4 × 2 × 1) / 15 × 1 × 1 = 2.7
→ Bucket: ⚪ Iceberg (revisit коли DR підростемо)
```

---

## Weekly Cadence

**Monday:**
1. Intelligence-agent робить розвідку (Ahrefs + GSC + SerpAPI Trends + Brand Radar + trend_scout)
2. Оновлює цей scorecard — додає нові items, перераховує scores, перетегує buckets
3. Видає Weekly Priorities report → Checkpoint 1 approval від Natalia

**Tuesday-Thursday:**
- Production по approved items: Discovery → Outline (Checkpoint 2) → Draft → QA → Publish (Checkpoint 4)
- Input requests (Checkpoint 3) — як з'являється потреба

**Friday:**
- Post-publish review: що вже індексується / ранжується / застрягло
- Фідбек у Intelligence для наступного Monday

---

## Changelog

- 2026-04-15 — template створений, готовий до першого заповнення після першої розвідки
- 2026-04-15 — перший item approved: `/blog/madgicx-review-alternative` title+meta rewrite. Pairing A (refined) — content-ops panel 92.4/100. Baseline CTR 0.05%, pos 7.9, ~200 imp/day. Awaiting deploy by Natalia.
- 2026-04-20 — масовий апдейт scorecard: додано 10 нових items з v2 brief + Ad Creative Uploader growth plan. Approved items from v2: #1 (automation-rules title fix), #2 (mcp-servers optimize), #3 (ad-uploader update), #4 (Creative Testing pillar), #5 (Ad Operations guide). Rejected: #6 (TikTok guide — not ICP), #7 (FB automation — monitor existing). Ad Uploader growth plan (6 agent tasks + 4 manual) збережено у `plans/ad-creative-uploader-growth.md`. Додано Monitoring секцію для deployed items. ICP Pain Discovery step додано в agents/intelligence.md.
