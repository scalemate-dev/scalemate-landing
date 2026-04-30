# Ahrefs Fixes 2026-04-30 — Title & Meta Variants

> Methodology: `seo-system/rules/content-writing.md` section 4.1.
> Pre-work followed: read each page's actual content, ran SerpAPI SERP analysis where SERP signals matter, classified intent, identified unique angle, audited template behavior.
>
> Note: Ahrefs `serp-overview` and `keywords-explorer-overview` returned empty (quota / cache miss) during this session, so SERP analysis was performed via SerpAPI (`google_light` engine, `num=10`) for the highest-leverage URLs. For pages where the title is staying intact and only meta length is being trimmed, SERP work was scoped to confirming intent + power-element patterns rather than full top-10 dump (the existing title already reflects validated keyword targeting from prior cycles).
>
> Character counts are based on the rendered output (including any `| Scalemate Blog` template suffix where applicable).

---

## A1. ai-assistant — meta too long (215, target 150-160)

- **URL:** https://www.scalemate.co/ai-assistant
- **File:** `app/metadata.js` → `assistantMetadata.description`
- **Current title (54 ch):** "Scalemate: AI Marketing Agent for Ads & Reporting" — keep
- **Intent:** branded / product page
- **Brand placement:** brand IN title + meta OK (per 4.1.3 — branded product page)
- **Page facts (from page.jsx FAQ + components):** AI assistant for performance marketers; analyses + manages campaigns; works with Meta + TikTok; bulk-upload creatives from cloud/local drive; budget control; rotates top-performing ads; data anonymized.
- **Banned-pattern check:** current desc starts with "Experience next-generation Ads management" — `next-generation` is on the banned buzzword list (6.3.6). Must be removed.
- **Power elements available:** specific platform names (Meta, TikTok), specific tasks (bulk uploads, budget control, reports), audience specificity (performance marketers).

### Meta variants (5)

| # | Variant | Chars | Power elements | Banned? |
|---|---|---|---|---|
| M1 | "Manage Meta and TikTok ads with an AI agent: bulk launches, budget control, creative uploads, automated reports — all from one chat interface." | 145 | platform, tasks, specificity | OK (under 150 — needs +5) |
| M2 | "An AI agent for performance marketers: bulk-launch ads, control budgets, upload creatives, and pull reports for Meta and TikTok — all via chat." | 144 | audience, tasks, platforms | OK (under 150 — needs +6) |
| M3 | "Run Meta and TikTok ads via chat. Scalemate's AI agent bulk-launches campaigns, controls budgets, uploads creatives, and generates reports on demand." | 151 | platforms, tasks, specificity | OK ✅ |
| M4 | "Bulk-launch ads, control budgets, upload creatives, and pull reports for Meta and TikTok — all through one AI agent built for performance marketers." | 151 | tasks, platform, audience | OK ✅ |
| M5 | "Skip Ads Manager. Scalemate's AI agent runs Meta and TikTok campaigns via chat: bulk launches, budget control, creative uploads, automated reports." | 150 | pain hint, platforms, tasks | OK ✅ |

### Content-Ops Panel — Top scores (manually applied per 4.1.7 step 3)

| Variant | Intent (5) | Honesty (5) | CTR (5) | Diff (5) | Voice (5) | Char (5) | Total |
|---|---|---|---|---|---|---|---|
| M3 | 5 | 5 | 4 | 4 | 5 | 5 | **28** |
| M4 | 5 | 5 | 4 | 4 | 5 | 5 | **28** |
| M5 | 5 | 5 | 5 | 4 | 5 | 5 | **29** ✅ winner |
| M1 | 4 | 5 | 4 | 3 | 5 | 4 | 25 |
| M2 | 4 | 5 | 4 | 3 | 5 | 4 | 25 |

**Winner — M5** (150 ch). "Skip Ads Manager" is a pain-acknowledgment power element specific to the ICP, then operational outcomes.

---

## A2. book-a-demo — meta too long (170, target 150-160)

- **URL:** https://www.scalemate.co/book-a-demo
- **File:** `app/metadata.js` → `pageMetadata.bookDemo`
- **Title (62 ch):** "Book a Demo – Automate Meta & TikTok Ad Campaigns | Scalemate" — slightly over (62), considering trim
- **Intent:** branded / commercial — booking page. Brand IN title is correct (4.1.3 branded).
- **Page facts:** 30-min demo, automate campaign setup + creative uploads + scaling rules across Meta and TikTok, no headcount.

### Title variants

| # | Variant | Chars |
|---|---|---|
| T1 | "Book a Demo – Automate Meta & TikTok Ad Campaigns \| Scalemate" | 62 (current) |
| T2 | "Book a Demo: Automate Meta & TikTok Ad Ops \| Scalemate" | 55 ✅ |
| T3 | "Book a Scalemate Demo: Automate Meta & TikTok Ads" | 50 ✅ |

T3 is shortest, brand-natural, keeps primary keyword "Scalemate Demo". **Title winner: T3 (50 ch)**.

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Book a 30-minute Scalemate demo. See how performance teams automate Meta and TikTok campaign setup, creative uploads, and scaling rules — without hiring." | 156 ✅ |
| MD2 | "Book a 30-min Scalemate demo. See how performance teams automate Meta + TikTok campaign setup, creative uploads, and scaling rules — no extra headcount." | 154 ✅ |
| MD3 | "Book a 30-min demo. Watch how performance teams automate Meta and TikTok ad ops — campaign setup, creative uploads, scaling rules — no extra headcount." | 153 ✅ |
| MD4 | "30-minute Scalemate demo: how performance teams automate Meta and TikTok campaign setup, creative uploads, and scaling rules without adding headcount." | 152 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD1 | 5 | 5 | 4 | 4 | 5 | 5 | **28** ✅ winner |
| MD2 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD3 | 4 | 5 | 4 | 4 | 5 | 5 | 27 |
| MD4 | 4 | 5 | 4 | 4 | 5 | 5 | 27 |

**Winner — MD1.** Most readable phrasing, full word "minute", strongest pain ("without hiring").

---

## A3. use-cases/bulk-ad-launch — meta too long (196, target 150-160)

- **URL:** https://www.scalemate.co/use-cases/bulk-ad-launch
- **File:** `app/use-cases/_data/bulk-ad-launch/index.jsx`
- **Title (64 ch):** "Bulk Launch Hundreds of Meta & TikTok Ads in Minutes | Scalemate" — slightly over, will trim
- **Intent:** commercial / use-case (matches "bulk ad launch tool" per Appendix C)
- **Page facts (from index.jsx hero):** "Hundreds of ad sets from one setup", "Sync creatives from cloud storage", "Full control over campaign structure", used by mobile publishers, marketing agencies, e-commerce teams.

### Title variants

| # | Variant | Chars |
|---|---|---|
| T1 | "Bulk Launch Meta & TikTok Ads in Minutes \| Scalemate" | 52 ✅ |
| T2 | "Bulk Ad Launch for Meta & TikTok in Minutes \| Scalemate" | 55 ✅ |
| T3 | "Bulk Launch Hundreds of Meta & TikTok Ads \| Scalemate" | 53 ✅ |

**Title winner — T2 (55 ch)** — exact match on primary keyword "bulk ad launch" + platforms + speed.

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Deploy hundreds of Meta and TikTok ad sets from one template. Define budget, targeting, and naming once — Scalemate generates every combination." | 144 |
| MD2 | "Deploy hundreds of Meta and TikTok ad sets from one template. Set budget, targeting, naming once. Trusted by mobile publishers and agencies." | 141 |
| MD3 | "Build hundreds of Meta and TikTok ad sets from one template. Define budget, targeting, and naming once — and launch every combination in minutes." | 146 |
| MD4 | "Deploy hundreds of Meta and TikTok ad sets from one template. Define budget, targeting, naming once — Scalemate generates every combination instantly." | 152 ✅ |
| MD5 | "Deploy hundreds of Meta and TikTok ad sets from one setup. Define budget, targeting, and naming once — used by mobile publishers, agencies, and DTC teams." | 156 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD5 | 5 | 5 | 5 | 5 | 5 | 5 | **30** ✅ winner |
| MD4 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD1 | 5 | 5 | 4 | 3 | 5 | 4 | 26 |

**Winner — MD5.** Has audience specificity ("mobile publishers, agencies, DTC teams"), strong differentiation.

---

## A4. solutions/media-buyers — title too long (72) AND meta too long (178)

- **URL:** https://www.scalemate.co/solutions/media-buyers
- **File:** `app/solutions/media-buyers/data.jsx`
- **Current title (72 ch):** "Tools for Media Buyers Automation – Scale Results, Not Hours | Scalemate"
- **Intent:** solution / commercial — "tools for media buyers automation" per Appendix C primary keyword
- **SERP analysis (SerpAPI google_light "tools for media buyers automation"):** top 10 are listicles + reviews (AdStellar, HubSpot, Motion, Activepieces). Featured answer box from `syntermedia.ai` lists tools. Most do NOT carry brand in title — pattern is "Top X Media Buying Automation Tools".

  → 4.1.3 verdict: **listicle/comparison intent → Scalemate NOT in title**. The current "| Scalemate" suffix is misaligned, but solution pages are inherently branded. Compromise: keep brand at end, drop the long secondary phrase to fit 60.
- **Page facts (from data.jsx hero):** auto-upload creatives to Meta and TikTok from cloud storage, bulk-launch hundreds of ad sets from one setup, automation rules that optimize 24/7.

### Title variants

| # | Variant | Chars |
|---|---|---|
| T1 | "Media Buyer Automation Tools for Meta & TikTok \| Scalemate" | 58 ✅ |
| T2 | "Tools for Media Buyer Automation: Meta & TikTok \| Scalemate" | 59 ✅ |
| T3 | "Media Buyer Tools: Auto-Upload, Bulk-Launch, Rules \| Scalemate" | 61 ❌ over |
| T4 | "Media Buying Automation Tools for Meta & TikTok \| Scalemate" | 59 ✅ |
| T5 | "Tools for Media Buyers — Automate Meta & TikTok Ads \| Scalemate" | 62 ❌ over |
| T6 | "Media Buyer Automation: Tools for Meta & TikTok Ads \| Scalemate" | 62 ❌ over |

### Title panel

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| T1 | 5 | 5 | 4 | 4 | 5 | 5 | **28** ✅ winner |
| T2 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| T4 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Title winner — T1 (58 ch).** Primary keyword "media buyer automation tools" + platform specificity + brand at end (suffix is acceptable for branded solution page).

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Tools for media buyers that handle the grind: auto-upload creatives, bulk-launch hundreds of ad sets, automation rules, and an AI agent for reports." | 152 ✅ |
| MD2 | "Auto-upload creatives, bulk-launch hundreds of ad sets, automate rules across Meta and TikTok — and pull reports via AI. Scale results, not hours." | 149 (under 150 — needs +1) |
| MD3 | "Auto-upload creatives, bulk-launch hundreds of ad sets, automate rules across Meta and TikTok, and pull reports via AI agent. Scale results, not hours." | 154 ✅ |
| MD4 | "A media buyer's automation stack: auto-upload creatives, bulk-launch ad sets, run rules 24/7 across Meta and TikTok, plus an AI agent for reports." | 150 ✅ |
| MD5 | "Auto-upload creatives, bulk-launch hundreds of ad sets, run automation rules 24/7 on Meta and TikTok, plus an AI agent for reports — all in one stack." | 152 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD5 | 5 | 5 | 5 | 5 | 5 | 5 | **30** ✅ winner |
| MD3 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD1 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD4 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Winner — MD5 (152 ch).** Concrete tasks with platform names, "24/7" power element, "all in one stack" credibility.

---

## A5. pricing — meta too long (206, target 150-160)

- **URL:** https://www.scalemate.co/pricing
- **File:** `app/pricing/page.jsx` (and mirrored in `app/metadata.js` `pricingMetadata`)
- **Title (60 ch):** "Free Ad Automation Tool for Meta & TikTok – Scalemate Pricing" — keep
- **Intent:** branded / commercial — pricing page
- **Page facts (from FAQ items):** Free plan = 1 ad account, 2 active rules, 100 ad launches/month, 50 AI messages, unlimited uploads, no credit card. Custom plans with API access and dedicated support.

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Free Meta and TikTok ad automation: 1 ad account, 2 rules, 100 launches/month, unlimited uploads. No credit card. Custom plans for teams at scale." | 149 (under 150 — needs +1) |
| MD2 | "Automate Meta and TikTok ads free: 1 ad account, 2 rules, 100 launches/month, 50 AI messages, unlimited uploads. No credit card. Custom plans available." | 156 ✅ |
| MD3 | "Free plan: 1 ad account, 2 rules, 100 launches/month, unlimited uploads, no credit card. Custom plans add API access and dedicated support for teams." | 151 ✅ |
| MD4 | "Free Scalemate plan: 1 ad account, 2 rules, 100 ad launches/month, unlimited creative uploads, no credit card. Custom plans for scaling ad teams." | 149 (under 150 — +1) |
| MD5 | "Automate Meta and TikTok ads on the free plan: 1 ad account, 2 rules, 100 launches/month, unlimited uploads. Custom plans add API and team support." | 150 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD2 | 5 | 5 | 5 | 5 | 5 | 5 | **30** ✅ winner |
| MD3 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD5 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Winner — MD2 (156 ch).** Specific numbers (5 of them), "no credit card", platform names, audience signal.

---

## A6. customers/kitup — meta too long (181, target 150-160) — BLOCKED (Contentful)

- **URL:** https://www.scalemate.co/customers/kitup
- **File:** Contentful CMS (`caseStudy` content type, `seoDescription` field) — NOT in code
- **Status:** Cannot fix via code. Documented in PR "Needs your decision" section.

Recommended replacement (for Natalia to apply in Contentful):
- "How KitUp scaled Meta ads with Scalemate: 15K+ ads launched, 35 hrs/month saved, ROAS up. The full story behind their automation rollout." (157 ch ✅)

---

## A7. blog/best-mcp-servers-meta-google-ads — title too long (74) AND meta too long (170)

- **URL:** https://www.scalemate.co/blog/best-mcp-servers-meta-google-ads
- **File:** `content/blog/best-mcp-servers-meta-google-ads.md`
- **Current title rendered (74 ch):** "Best MCP Servers for Meta & Google Ads — Ban Risk Warning | Scalemate Blog"
- **SERP analysis (SerpAPI):** Scalemate is **#1**. Top 10 are listicles ("Best...", "Top 5...", "15 Best..."). NONE put their brand at the front. Featured answer box is also a listicle (flyweel.co).
- **Intent:** listicle / comparison → **per 4.1.3 brand NOT in title** → must set `absoluteTitle: true` to drop "| Scalemate Blog" suffix.
- **Page facts:** comparison of Meta + Google Ads MCP servers; covers Pipeboard, GoMarble, Flyweel, Google Ads MCP (official), Scalemate AI Chat, ban risks, free tools.

### Title variants (rendered without suffix when absoluteTitle: true)

| # | Variant | Chars |
|---|---|---|
| T1 | "Best MCP Servers for Meta & Google Ads (2026)" | 46 ✅ |
| T2 | "Best MCP Servers for Meta & Google Ads — 2026 Comparison" | 56 ✅ |
| T3 | "Best Meta & Google Ads MCP Servers — Ban-Safe Picks (2026)" | 57 ✅ |
| T4 | "Best MCP Servers for Meta & Google Ads — Ban-Safe Picks 2026" | 60 ✅ |
| T5 | "Best MCP Servers for Meta & Google Ads (2026 Comparison)" | 55 ✅ — already what Google indexed |
| T6 | "MCP Servers for Meta & Google Ads: Best Picks for 2026" | 55 ✅ |

### Title panel

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| T5 | 5 | 5 | 5 | 4 | 5 | 5 | **29** ✅ winner |
| T4 | 5 | 5 | 5 | 5 | 5 | 5 | 30 (tied — but T5 already ranks #1) |
| T2 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Title winner — T5: "Best MCP Servers for Meta & Google Ads (2026 Comparison)" (55 ch).** This is exactly what Google indexed and serves at #1 today (per SerpAPI position 1 result). Aligning frontmatter to the existing serving title locks in the rank.

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Compare Meta and Google Ads MCP servers: Pipeboard, GoMarble, Flyweel, Google's official server, and Scalemate. Setup, free tiers, and ban-risk warnings." | 158 ✅ |
| MD2 | "Compare 9+ MCP servers for Meta and Google Ads in 2026: Pipeboard, GoMarble, Flyweel, Google's official server, Scalemate. Setup notes and ban risks inside." | 159 ✅ |
| MD3 | "Meta is banning ad accounts that connect unverified MCP servers. Compare verified vs unverified options for Meta and Google Ads — setup, free tools, ban risks." | 161 ❌ over |
| MD4 | "Compare verified vs unverified MCP servers for Meta and Google Ads. Setup notes, free tiers, and which ones risk getting your ad account banned in 2026." | 152 ✅ |
| MD5 | "Meta is banning unverified MCP server connections. Compare verified options for Meta and Google Ads — Pipeboard, GoMarble, Flyweel, Google's official server." | 159 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD5 | 5 | 5 | 5 | 5 | 5 | 5 | **30** ✅ winner |
| MD4 | 5 | 5 | 5 | 4 | 5 | 5 | 29 |
| MD1 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Winner — MD5 (159 ch).** Pain hook ("Meta is banning..."), specific competitor names (allowed neutral mention per 4.1.6.1), credibility.

---

## A8. blog/best-bulk-ad-launch-tools — meta too long (165, target 150-160)

- **URL:** https://www.scalemate.co/blog/best-bulk-ad-launch-tools
- **File:** `content/blog/best-bulk-ad-launch-tools.md`
- **Title (50 ch + already absoluteTitle: true):** "Best Bulk Ad Launch Tools for Meta & TikTok (2026)" — keep
- **Intent:** listicle / comparison — `absoluteTitle: true` already set ✅
- **Page facts:** compares 10 bulk ad launch tools for Meta + TikTok, includes Scalemate, AdManage.ai, Birch + others.

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Compare 10 bulk ad launch tools for Meta and TikTok: pricing, platforms, what each does. We make one of these tools — here's what others don't share." | 150 ✅ |
| MD2 | "Compare 10 bulk ad launch tools for Meta and TikTok. Pricing, platforms, what each does. We make one of these — here's what the others won't tell you." | 152 ✅ |
| MD3 | "10 bulk ad launch tools for Meta and TikTok compared: pricing, platforms, capabilities. We build one — and we'll be honest about where each tool fits." | 152 ✅ |
| MD4 | "10 bulk ad launch tools for Meta and TikTok: pricing, platforms, what each one does. Includes free tiers, account limits, and Meta verification status." | 154 ✅ |
| MD5 | "Compare 10 bulk ad launch tools for Meta and TikTok — pricing, platforms, capabilities, and free-tier limits. We build one. Here's what others won't share." | 156 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD5 | 5 | 5 | 5 | 5 | 5 | 5 | **30** ✅ winner |
| MD4 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD2 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Winner — MD5 (156 ch).** Strong specifics + power elements + transparency hook.

---

## B1. Short meta — `/blog` (97, target 150-160)

- **URL:** https://www.scalemate.co/blog
- **File:** `app/metadata.js` → `blogMetadata.description`
- **Current:** "Insights on ad automation, scaling strategies, and performance marketing from the Scalemate team." (97 ch)

### Meta variants

| # | Variant | Chars |
|---|---|---|
| MD1 | "Tactical playbooks on Meta and TikTok ad automation, bulk launches, automation rules, creative testing, and how to scale ads without scaling headcount." | 154 ✅ |
| MD2 | "How to automate Meta and TikTok ads, bulk-launch campaigns, set up rules, and test creatives at scale — written by the team behind Scalemate." | 144 (under 150 — +6) |
| MD3 | "Playbooks on automating Meta and TikTok ads: bulk launches, automation rules, creative testing, and scaling campaigns without scaling headcount." | 147 (under 150 — +3) |
| MD4 | "Tactical guides on Meta and TikTok ad automation, bulk launches, creative testing, and scaling campaigns — from the performance team behind Scalemate." | 153 ✅ |
| MD5 | "Insights on ad automation, scaling strategies, and performance marketing from the Scalemate team — covering Meta, TikTok, bulk launches, and creative testing." | 159 ✅ |

### Panel scores

| Variant | Intent | Honesty | CTR | Diff | Voice | Char | Total |
|---|---|---|---|---|---|---|---|
| MD4 | 5 | 5 | 4 | 4 | 5 | 5 | **28** ✅ winner |
| MD1 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |
| MD5 | 5 | 5 | 4 | 4 | 5 | 5 | 28 |

**Winner — MD4 (153 ch).** Concrete topics + author credibility ("performance team behind Scalemate").

---

## B2. Short meta — `customers/zeptolab` (74, target 150-160) — BLOCKED (Contentful)

- **URL:** https://www.scalemate.co/customers/zeptolab
- **Status:** Contentful-managed. Cannot fix via code.

Recommended replacement (for Natalia to apply in Contentful):
- "How ZeptoLab automated 2,000+ creative uploads and Meta ad launches with Scalemate. Workflow, automation rules, and the time-saved numbers behind it." (153 ch ✅)

---

## B3 / B4. Short meta + missing H1 + low word count + missing canonical — `app.scalemate.co/`, `app.scalemate.co/create-account`

- **URLs:** `https://app.scalemate.co/`, `https://app.scalemate.co/create-account`
- **Status:** Different subdomain (the in-app SPA). NOT in `scalemate-landing` repo. Cannot fix here. Documented in PR "Needs your decision".

---

## C. Missing alt text — 6 URLs

- **Methodology:** seo-copywriting.md image guidelines + 4.2 (alt descriptive, no "image of"/"picture of"; decorative gets `alt=""`).
- Each handled in code edits, with descriptive alt that conveys what the image communicates.
- See commit log + per-image notes in PR body.

---

## D. Image too large — `piperboat.png` (1015 KB)

- **URL:** https://www.scalemate.co/blog/images/best-mcp-servers-meta-google-ads/piperboat.png
- Path: `public/blog/images/best-mcp-servers-meta-google-ads/piperboat.png`
- Action: compress with `sharp` or convert to WebP. Verify under 200 KB.

---

## E. Structured data validation errors — 4 URLs

- Ahrefs `validation_kinds` returned EMPTY for all 4 URLs (`/solutions/media-buyers`, `/ad-creative-uploader`, `/features/bulk-launch`, `/features/automation-rules`).
- Per Step 3 directive: **"If Ahrefs returns empty/vague — note in PR body."** Skipping per methodology — no concrete error to fix without manual Rich Results Test run.
- Documented in PR.

---

## F. External 4XX (4) and 3XX (13)

- Ahrefs returned only the broken/redirected destination URLs and empty `external_link_anchor` values — no source page list.
- Per Step 3 directive: cannot identify which Scalemate pages link to these without source-page data. Documented in PR with target URLs for Natalia to spot-check; will action only ones we can definitively trace via grep.

---

## Verification summary

All deploy verifications via `curl http://localhost:3000/<path> | grep '<title>\|description'` are documented in commit messages and PR body.
