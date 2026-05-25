# /creative-testing-library — Scoping Doc (2026-05-23)

> Mirror of automation-rules-library architecture. Build cheat-sheet style library of creative testing methods to consolidate `creative testing framework` cluster + replace existing `/blog/creative-testing-framework` (which lost 90% impressions May 13 due to AI Overview rollout).

---

## TL;DR

- **Cluster size:** ~610 vol/mo total. Head term `creative testing framework` = 80 vol KD 2 TP 70.
- **Current state:** `/blog/creative-testing-framework` ranks pos 9.84 avg / 1,264 imp / 1 click / 28d. Impressions cliff May 13 (-90%) — AI Overview swallowed long-tail informational queries.
- **Proposed fix:** new interactive library page at `/creative-testing-library` modeled on `/automation-rules-library` success (indexed pos 10.2 within 10 days of launch).
- **Why this format wins:** AI Overview can't summarize "12 different testing methods with filters" inline. Cheat-sheet beats explainer for 2026 SERP.
- **Differentiation:** every competitor covers ONE method (Pilothouse=3-3-3, Hunch=Meta methodology). Nobody has filterable library covering 10+ methods by goal.
- **Existing blog:** 301 → library (consolidate signal, same pattern as facebook-automated-rules → /automation-rules-library).
- **Realistic ceiling:** 40-100 imp/week, 5-20 clicks/mo within 8 weeks. 5-20× current.

---

## Keyword cluster (Ahrefs, US)

| Keyword | Volume | KD | TP | Intent |
|---|---:|---:|---:|---|
| `creative testing framework` | 80 | 2 | 70 | informational |
| `creative testing platform` | 200 | – | – | – |
| `creative testing tools` | 100 | – | – | – |
| `ad creative testing` | 200 | 4 | 100 | informational |
| `meta creative testing` | 30 | – | – | – |
| **Total cluster** | **~610** | – | – | – |

Plus AI-bot anonymized queries: `3-3-3 method facebook`, `meta creative testing framework 2026`, `mobile UA creative testing`, etc. Currently account for 76% of /blog/creative-testing-framework impressions (now mostly killed by AI Overview).

---

## SERP map — `creative testing framework`

| # | Site | Format | DR | Notes |
|---|---|---|---|---|
| 1 | **Dragonfly AI** | "Guide to Building a Robust Framework" | ~50 | Generic framework guide |
| 2 | **Motion Creative Analytics** | "Ultimate guide to Facebook ad creative testing 2025" | ~55 | Long explainer |
| 3 | **Reddit r/FacebookAds** | "Simple creative testing framework that saved me a lot..." | 95 | Community thread |
| 4 | **Hunch Ads** | "Creative Testing on Meta — Methodology" | ~55 | Meta-specific |
| 5 | **theperformers.io** | "Ultimate Guide to Creative Testing Strategy 2025" | ~50 | Strategy framing |
| 6 | **bir.ch (Revealbot)** | "Essential guide to crafting effective framework" | 72 | Vendor guide |
| 7 | **Pilothouse Digital** | "Meta Creative Testing Framework: The 3-3-3 Approach" | ~60 | **Specific method** ← differentiated |
| 8 | **Foxwell Digital** | "Meta Creative Testing Frameworks: How to Find Winners" | ~55 | Method-focused |

**+ AI Overview present** (Google answers "what is" inline)
**+ Featured snippet present**
**+ 3 inline videos**

**Gap:** Nobody covers MULTIPLE methods in one filterable library. Pilothouse owns "3-3-3", Dragonfly owns generic guide, but no equivalent to bir.ch's rules cheat-sheet for **creative testing methods**.

---

## Pain entry analysis

| Hook | Top-10 freq | DR of leader | ScaleMate fit | Conflict |
|---|---|---|---|---|
| "Find winners faster" | 6/10 | Pilothouse 60 | Strong (bulk launch USP) | Medium — Pilothouse owns |
| "Test more creative with limited budget" | 4/10 | Hunch 55 | Strong | Low — different framing |
| "Stop relying on gut, use data" | 5/10 | Motion 55 | Medium | Medium |
| "Survive Andromeda — creative volume" | 2/10 | Foxwell 55 | **Strong USP** — fresh angle | None — emerging |
| "Validate before scaling" | 3/10 | bir.ch 72 | Strong (auto-revert USP) | Low |

**Winner combo:** "Andromeda-survival + find winners faster + multi-method library by goal" — defensibly differentiated. Nobody owns multi-method library format yet.

---

## Methods to include (Phase 1 — 10 methods MVP)

Group by goal (mirror rules-library card structure):

### 🎯 Find winners fast
1. **3-3-3 method** (Pilothouse) — 3 audiences × 3 creatives × 3 days
2. **3-2-2 method** (Dara Denney) — 3 ad sets × 2 creatives × 2 weeks
3. **Hooks test** — vary first 3 seconds only

### 📊 Validate before scaling
4. **Conversion lift test** (Meta native) — incremental with hold-out
5. **ABO vs CBO test** — budget allocation comparison
6. **Hold-out test** — true incrementality measurement

### 🔪 Kill losers fast
7. **Single-variable test** — change one element, isolate impact
8. **Static vs Video test** — format-level kill criteria

### 🧬 Andromeda-ready
9. **Multi-variant battery** — broad targeting, many creatives at once (Andromeda diversity)
10. **Creative refresh cadence** — when to retire creatives in Andromeda algo

### 🔄 Iteration (Phase 2 — defer)
- Iteration framework (what to vary for v2 winner)
- Funnel-stage testing (TOFU/MOFU/BOFU)
- Mobile UA-specific test
- Cost cap testing
- Manual A/B vs Advantage+ test

---

## Per-method card structure

Each method = one expandable card with:

- **Goal:** what this method answers
- **Best for:** team size / budget level / platform / vertical
- **Time investment:** total days from start to decision
- **Min budget:** floor below which method breaks
- **Method steps:** numbered setup
- **Kill criteria / scaling trigger:** specific thresholds
- **Pros / cons:** honest tradeoffs
- **Common pitfalls:** learning-phase disruption, sample-size issues, etc.
- **Andromeda compatibility:** ✅ / ⚠️ / ❌ + why
- **Apply in Scalemate:** CTA → bulk launch template

---

## Filter taxonomy (UX)

Sidebar filters (mirror rules-library):

- **Goal:** find winners / validate / kill losers / Andromeda-ready / refresh
- **Budget level:** <$1K/mo / $1-10K/mo / $10K+/mo
- **Team size:** solo / 2-5 / 5+ buyers
- **Platform:** Meta / TikTok / both
- **Method maturity:** classic (5+ years) / modern (2023+) / Andromeda-era (2026+)
- **Time to decision:** <1 week / 1-2 weeks / 2-4 weeks

Top: search box + "Show all methods" toggle.

---

## URL strategy + consolidation

**New canonical:** `/creative-testing-library`

**Existing blog disposition:**
- `/blog/creative-testing-framework` → **301 redirect** → `/creative-testing-library`
- Mirror pattern from `/blog/facebook-automated-rules` → `/automation-rules-library` (deployed 2026-05-22)
- Existing blog post-mortem: pos 9.84 avg / 1 click in 28d / impressions cliff May 13 → not worth preserving

**Internal links to update:**
- Existing blog cluster (4 articles link to /blog/creative-testing-framework): repoint to /creative-testing-library
- Header / footer: check if any nav link exists, update

**Sitemap:** auto-update via `app/sitemap.js` (library URL added, blog auto-removed when `.md` deleted).

---

## SEO title + meta (V9-style minimal approach)

**Page title (H1 + `<title>`):**
- `Creative Testing Framework Library: 10 Methods by Goal (Free)` (60 chars)
- Leads with `creative testing framework` exact match
- "Library" + "by Goal" mirrors `/automation-rules-library` brand
- "Free" + "10 Methods" — proof points

**Meta description (~155 chars):**
- "10 production-tested creative testing methods sorted by goal — 3-3-3, hooks test, conversion lift, Andromeda diversity. Free templates for Meta + TikTok teams."

**Schema:** SoftwareApplication (mirror rules library)

---

## Phased rollout (mirror rules-library Phase 1-3)

### Phase 1 — MVP (target: ship within 1 week)
- 10 methods, basic filter (goal + platform)
- Static page (no email gate, no apply-in-Scalemate integration)
- 301 redirect existing blog
- Update 4 internal links

### Phase 2 — Engagement (target: 2-3 weeks after Phase 1)
- Add 5 more methods (15 total)
- Add filters: budget / team size / time
- Email gate for "Download full method library PDF" (lead capture)
- Add Schema markup

### Phase 3 — Product integration (defer until Phase 2 traffic confirmed)
- "Apply method in Scalemate" deep linking to bulk-launch templates
- Auto-generate Scalemate campaign structure from method choice
- Track conversion from library → signup

---

## Effort estimate

| Etap | Hours | Owner |
|---|---:|---|
| Methods research + validation (Reddit, podcasts, blogs) | 2-3h | Claude (content-creator agent) |
| Method content writing (10 cards × ~250 words each) | 4-6h | content-creator agent |
| UX design (mirror rules-library) | 0h | Reuse existing pattern |
| React build (interactive library) | 4-8h | Frontend (Ruslan or frontend-design agent) |
| 301 redirect + internal links + sitemap | 1h | Claude |
| QA + SEO audit + deploy | 1-2h | Claude (qa agent) |
| **Total Phase 1** | **12-20h** | Mixed |

---

## Realistic expectation (4-8 weeks post-launch)

Based on rules-library trajectory (deployed 2026-05-12 → pos 10.2 / 68 imp within 10 days):

| Metric | 2 weeks | 4 weeks | 8 weeks |
|---|---:|---:|---:|
| Indexed? | ✅ likely yes | ✅ confirmed | ✅ |
| Position on head term `creative testing framework` | 15-25 | 8-15 | 5-12 |
| Impressions/week | 20-50 | 100-200 | 200-400 |
| Clicks/month | 1-3 | 5-15 | 10-30 |

**Versus current `/blog/creative-testing-framework`:** 1 click / month, declining.

**Ceiling:** cluster TP ~610 vol/mo, AI Overview limits CTR. Honest max ~30-50 clicks/mo. Not big, but **5-20× current**.

---

## Risks + mitigation

1. **Risk:** Library doesn't index (like 3 unindexed `facebook-ads-automation` blogs).
   - **Mitigation:** 301 from old blog passes equity. Plus library format (interactive) is what Google indexed for rules — proven pattern.

2. **Risk:** AI Overview answers "what is creative testing framework" anyway, eating clicks.
   - **Mitigation:** Library format is specifically AI-Overview-resistant (too much specific data to summarize). Plus we own brand mentions on every card.

3. **Risk:** Existing blog has backlinks we'd lose via 301.
   - **Mitigation:** 301 passes 95% link equity per Google. Same as rules library consolidation worked.

4. **Risk:** Methods content quality affects E-E-A-T.
   - **Mitigation:** Run through content-ops panel before publish (target 90+ score, mirror rules library QA).

---

## Open questions for Natalia

1. **Phase 2 email gate:** acceptable for "Download PDF" or hard no?
2. **Phase 3 product integration:** Ruslan available to build "Apply method in Scalemate" or defer indefinitely?
3. **Method 11-15 priorities for Phase 2:** which 5 to add — iteration framework / funnel-stage / mobile UA / cost cap / manual A/B?
4. **Brand naming:** "Creative Testing Framework Library" OK or prefer different name (e.g., "Creative Testing Playbook Library")?

---

## Next steps (if approved)

1. **Natalia approve scoping** (this doc)
2. **Content-creator agent** writes 10 method cards (~5h)
3. **Frontend agent / Ruslan** builds React library page (~8h)
4. **Claude** sets up 301 + internal links + deploys
5. **QA agent** final SEO check
6. **Track** — T+1wk indexation, T+2wk position, T+4wk traffic
