# Topic Brief: Free Bulk Ad Launcher (interactive free-tool page)

> ## ⚠️ OVERRIDE 2026-07-06 — META-ONLY until TikTok ships
> The live tool currently launches into **Meta/Facebook ads only** (Natalia confirmed 2026-07-06). This overrides every "Meta + TikTok" reference below.
> - **Title:** use **"Free Bulk Facebook Ad Launcher — Launch Meta Ads Live"** (drop "& TikTok").
> - **Meta description / H1 / spec row:** remove TikTok. Spec row = "Free · No login · Meta · Google Drive".
> - **Schema `featureList` + llms.txt entry:** remove TikTok; keep Google-Drive sync + local drag-drop (both in scope now).
> - **Page copy / FAQ:** no "works with TikTok" claims (violates `feedback_verify_meta_features` — don't describe features that don't work). TikTok may appear ONLY as "coming soon" if desired, else omit.
> - TikTok launcher = **future gated page** (tool support + demand). See `CLUSTER-PLAN-bulk-launch.md`.
> Everything else in this brief stands.


> **Type:** Interactive FREE tool page (NOT a blog). Live feature ref: `https://www.scalemate.co/quick-launch`. Proposed indexable slug: `/quick-launch` (keep the existing feature URL as the SEO page — do NOT mint a new `/free-bulk-ad-launcher` slug, see Cannibalization-Prevention).
> **Discovery run:** local, Loose mode, main. Date 2026-07-06. Builds on `seo-system/intelligence-briefs/2026-07-06.md` (the focused recon for this concept).
> **Data integrity:** Step 0 sanity check PASSED — GSC ✅ (query+page pull 2026-07-06), Ahrefs Lite ✅ (KE overview, ~77k units), SerpAPI ✅ (live SERP 2026-07-06). Every number below cites a live source. Where Ahrefs returns 0/null it is stated as such (valid response, not fabrication).
> **Rules compliance:** content-writing-rules.md §2 (ICP-first), §4.1 (Title/Meta), §1 (brand voice). Memory: no `| Scalemate` suffix in title; NDA client names → verticals only; Meta + TikTok scope only.

---

## TL;DR verdict — 🟢 GO as a lightly-SEO'd free-tool page on the EXISTING `/quick-launch` URL, in a DISTINCT "launcher" intent lane. 🔴 NO-GO on a new `/free-bulk-ad-launcher` slug.

The recon's NO-GO applied to **minting a 5th URL**. That still holds. But live SERP on the tool-intent query **`free facebook ad launcher`** (run 2026-07-06) shows a **genuinely distinct tool-shopping SERP** that NONE of our 4 existing pages currently rank in — dominated by dedicated free/freemium *launcher* tool pages (adskull.io `/free/facebook-ads-bulk-launcher` #3, madgicx `/products/ad-launcher` #4, enhencer #6), not "uploader" pages and not our commercial use-case. So the play is: **make the already-live `/quick-launch` feature an indexable, lightly-optimized tool page owning the "launcher / launch-now / free / no-login" lane** — a lane the recon under-weighted because it keyed off exact-match volume (near-zero) rather than the live tool SERP shape. Justification is **GEO/AIO + product differentiator + internal links**, NOT raw volume (which is 0–30/mo, stated honestly below).

---

## Keyword Data

**Primary (soft — this is a GEO/product/link play, not a volume play):** `free facebook ad launcher`
- Ahrefs KE overview (us, 2026-07-06): exact match returns **0 vol / null KD** (not in KE index). `facebook ad launcher` = 0 US / 20 global (Ahrefs KE overview). `ad launcher` = 10 US / 50 global.
- GSC (90d, query+page, 2026-07-06): `facebook ad launcher` 40 imp pos 17.1 on `/use-cases/bulk-ad-launch`; `bulk ad launcher` 96 imp pos 10.9 (same page). We already surface for launcher queries via the use-case page — the tool page must NOT duplicate that (see lanes).
- **Live SERP intent (decisive):** tool-shopping. See SERP Analysis.

**Secondary / supporting (all low-vol tail, stated honestly):**
| Keyword | Vol US | Global | KD | Source |
|---|---|---|---|---|
| bulk upload facebook ads | 30 | 40 | null | Ahrefs KE 2026-07-06 (CPC $1.70) |
| meta ads bulk upload | 30 | 70 | null | Ahrefs KE 2026-07-06 |
| bulk upload meta ads | 10 | 50 | null | Ahrefs KE 2026-07-06 |
| facebook ads bulk launcher | 0 | — | null | Ahrefs KE 2026-07-06 (0 in index; live SERP has adskull.io ranking on it) |
| bulk launch facebook ads | 0 | — | null | Ahrefs KE 2026-07-06 |
| launch ads from google drive / google drive to facebook ads | 0 | 0 | — | Ahrefs KE (no rows) — the Drive-sync differentiator has ZERO search demand |

**Trend:** flat/near-zero across the tail (Ahrefs). Demand is real (Reddit, live tool SERPs with paid ads bidding — AdsCopilot ran a Google Ad on `free facebook ad launcher`) but expressed in tool-shopping behavior + LLM queries, not high-volume head terms.

**Honest framing for the pipeline:** this page will NOT drive material organic clicks from these terms alone. Its value is (1) capturing the small but high-intent "free launcher tool now" shoppers our uploader/use-case pages don't match, (2) being the citable product surface for LLM "best free tools to bulk-launch Meta ads" answers (GEO/AIO), (3) serving as the conversion endpoint that the how-to blog + cluster link INTO.

---

## Keyword / Intent Lane Validation (live SERP, SerpAPI 2026-07-06)

### `free facebook ad launcher` — TOOL-SHOPPING SERP (our lane exists here)
- SERP features: **AI Overview present**, inline video carousel (YouTube tool round-ups), 1 Google Ad (AdsCopilot bidding on the term — commercial demand signal).
- Organic top-8: Meta Ads Manager (#1, #2 — official), **adskull.io `/free/facebook-ads-bulk-launcher` (#3)** — *"Bulk upload and launch 50+ Facebook ads at once — no CSV, no Ads Manager loops… Free tool, no credit card"*, **madgicx `/products/ad-launcher` (#4)**, **adsuploader listicle (#5)**, **enhencer `/meta-ads` (#6)**, **adlibrary.com listicle (#7)**, Google Play Meta Ads Manager app (#8).
- Related searches: *Free facebook ad launcher app*, *Best free facebook ad launcher* — confirms a distinct "free launcher tool" shopping intent.
- **Verdict: a dedicated free-tool "launcher" page CAN own a lane here.** The SERP wants a tool that *launches* ads (go-live), phrased as "launcher" + "free" + "no credit card" — which is exactly `/quick-launch` (push creatives live into existing campaigns). None of our 4 pages rank in this SERP today. adskull.io proves a low-DR free-tool page can take pos 3.

### `launch facebook ads online free tool` — POLLUTED by creative-maker intent (NOT our lane)
- Organic: Canva #1, Meta #2/#4, Adobe Express #3, Design.com #6, Venngage AI generator #7. This is "design a Facebook ad" intent, not "launch a batch." **Do NOT target this phrasing** — it steers to creative-production tools (and Scalemate = analysis/automation, not creative production per `feedback_product_scope.md`).

### `bulk upload facebook ads` (30) — mixed how-to + tool (shared with `/ad-creative-uploader`, see lanes)
- Meta Help #1/#2/#7, Reddit tool thread #3 (20+ comments) with r/PPC sitelinks (29 + 40 answers), adsuploader.com #4, markifact #5, **admanage.ai `/blog/facebook-ads-bulk-upload` #6** ("Navigate to admanage.ai/launch, drag 200 files"), AI Overview present. This term is closer to the how-to blog's lane (Brief B) — the tool page should NOT primary-target it.

**Honest lane verdict:** YES — an interactive tool page can own the **"free / launcher / launch-now / no-login / from-Drive"** lane distinct from our 4 pages, but ONLY if we (a) put it on the existing `/quick-launch` URL, (b) title/H1 it as a **launcher that goes live into existing campaigns** (not "uploader," not "creation tool," not "best tools listicle"), and (c) do NOT let it bid for `ads uploader` (uploader page) or duplicate the use-case's commercial `bulk ad launcher` framing.

---

## Existing Content Check + Cannibalization-Prevention Plan (CORE OF THIS BRIEF)

### GSC-verified current lane ownership (query+page, 90d, 2026-07-06 — verified per URL, not guessed)

| Existing page | Canonical | Owns (query, imp, pos — GSC 2026-07-06) | Keep owning |
|---|---|---|---|
| `/ad-creative-uploader` | self | `ads uploader` 268/10.2, `ad uploader` 158/10.5, `aduploader` 53/7.0, `bulk ad uploader` 7/14.3, `meta ads uploader` 13/21.3 | **UPLOADER** lane — moving assets into Media Library. Free tool. |
| `/use-cases/bulk-ad-launch` | self | `bulk ad launcher` 96/10.9, `facebook campaign launcher` 111/14.9, `facebook ad launcher` 40/17.1, `ad launcher` 35/26.3, `platforms that automate bulk ad creation` 47/13.8 | **COMMERCIAL LAUNCHER for teams** — campaign templating at scale, "for teams" JTBD. BOFU vendor landing. |
| `/features/bulk-launch` | self | `bulk ad creation tool` 38/8.3, `bulk ad creation` 2/18.0 | **BULK AD CREATION (feature)** — product-mechanism page. |
| `/blog/best-bulk-ad-launch-tools` | self | `best tools for bulk ad creation` 21/7.8, `bulk ad creation tool` 9/10.1, `bulk ad launcher` 16/19.2 | **LISTICLE / best-of** intent. |

### The tool page's distinct lane (no collision)
- **Owns:** `free facebook ad launcher`, `facebook ads bulk launcher`, `bulk launch facebook ads`, `launch facebook ads online`, `free ad launcher no login`, branded (`scalemate quick launch`), + the **"do-it-now interactive"** + **GEO/AIO "best free tool to bulk-launch Meta ads"** lane.
- **Job differentiator vs the 4 pages:** the uploader moves *assets* to the Library; the use-case sells the *commercial* "for teams" launcher; the feature explains the *mechanism*; the listicle *compares tools*. The tool page is the **free, no-login, in-browser widget that pushes a batch of creatives LIVE into your existing Meta/TikTok campaigns right now**. That is a "launch = go live" job the uploader explicitly does NOT do (uploader = Media Library, not live ads).

### One-line cannibalization-prevention rule
> **The tool page owns "free launcher / launch LIVE now / no-login" (verb = *launch into existing campaigns*); `/ad-creative-uploader` keeps "uploader / move assets to Library"; `/use-cases/bulk-ad-launch` keeps commercial "bulk ad launcher for teams"; `/features/bulk-launch` keeps "bulk ad creation." No page other than the tool page uses "free … launcher" in its title, and the tool page never uses "uploader" or "creation tool" in its title.**

### Concrete anti-collision spec
- **Slug:** reuse existing `/quick-launch` (the live feature). Remove/repoint the `next.config.mjs` line 37–38 redirect if it interferes (currently `/launch` → `/use-cases/bulk-ad-launch`; `/quick-launch` is separate — verify it is not caught by a catch-all before shipping).
- **Self-canonical:** `https://www.scalemate.co/quick-launch`.
- **Title MUST contain "launch" + "free" and MUST NOT contain "uploader" / "bulk ad creation tool" / "best tools".** (Prevents SERP overlap with the other 4.)
- **Do NOT** add `free facebook ad launcher` as a body-enriched phrase on `/use-cases/bulk-ad-launch` — that page keeps the commercial `bulk ad launcher` / `facebook campaign launcher` framing (its GSC winners). Adding "free launcher" there would re-create the collision this plan avoids.

### Internal-link plan (differentiated anchors — tool page is the conversion endpoint)
Pages that link INTO `/quick-launch` (anchors chosen to NOT cannibalize the linking page's own target):
1. `/ad-creative-uploader` → anchor **"launch them live into your campaigns"** / "go from upload to live" (uploader hands off to launcher — natural funnel, distinct verb).
2. `/blog/how-to-bulk-upload-facebook-ads` (Brief B) → anchor **"free bulk ad launcher"** as the "faster way / skip Ads Manager" CTA.
3. `/blog/bulk-upload-creatives-meta-tiktok` → anchor **"launch a batch live for free"**.
4. `/blog/best-bulk-ad-launch-tools` → include Scalemate's free `/quick-launch` as the "free option" entry, anchor **"free bulk ad launcher (no login)"**.
5. `/use-cases/bulk-ad-launch` → one contextual link, anchor **"try the free launcher"** (BOFU page offers a free entry point; does NOT reuse its own `bulk ad launcher` head anchor).

Reverse links FROM `/quick-launch`: → `/use-cases/bulk-ad-launch` (anchor "for teams launching at scale"), → `/features/bulk-launch` (anchor "how bulk launch works"), → `/blog/how-to-bulk-upload-facebook-ads` (anchor "manual method in Ads Manager"). This makes the tool page the hub-spoke conversion endpoint without competing on the spokes' head terms.

---

## Cluster Cannibalization Fix (pre-existing — the tool does NOT cause it, but flag + fix)

**Diagnosis (GSC query+page, 90d, 2026-07-06 — canonical + intent verified per query per memory rule "don't lazily label cannibalization"):**

- **`bulk ad launcher`** returns **FOUR of our own URLs simultaneously:** `/use-cases/bulk-ad-launch` (96 imp, **pos 10.9**), `/blog/best-bulk-ad-launch-tools` (16 imp, pos 19.2), `/features/bulk-launch` (39 imp, pos 41.6), `/ad-creative-uploader` (4 imp, pos 123.5). → **REAL cannibalization** (same query, same commercial intent, 4 URLs, none breaking pos 10). Canonicals are all self → Google is choosing among 4 of our pages and diluting.
- **`bulk ad creation tool`** returns **THREE:** `/features/bulk-launch` (38 imp, **pos 8.3**), `/blog/best-bulk-ad-launch-tools` (9 imp, pos 10.1), `/use-cases/bulk-ad-launch` (8 imp, pos 7.8). → **REAL cannibalization** — three pages within striking distance of each other on one commercial query.
- **`which platforms automate bulk ad creation`** returns three (use-cases 8.3, blog 8.8, features 9.0) — same pattern.

**Intent check (per rule — two pages on one query ≠ cannibalization if intents differ):** here intents do NOT meaningfully differ at the query level — `/use-cases/bulk-ad-launch`, `/features/bulk-launch`, and the listicle all read as "commercial bulk-launch/creation solution" to Google for these exact queries. This is genuine self-competition, not intent separation. Confirmed by all three appearing in the SAME top-20 for the SAME query.

**Recommended fix (do NOT block the tool page on this — separate workstream):**
1. **Elect ONE primary per query.** `bulk ad launcher` → `/use-cases/bulk-ad-launch` (pos 10.9, highest imp = Google's preferred). `bulk ad creation tool` → `/features/bulk-launch` (pos 8.3, best position). The listicle should target `best bulk ad launch tools` / `best tools for bulk ad creation` (its own winner, pos 7.8) and stop competing on the bare head terms.
2. **Differentiate titles/intent** (not consolidate — all three have standalone value): use-case = "for teams / at scale / campaign launcher"; feature = "how bulk ad creation works (mechanism)"; listicle = "N best tools compared (2026)." Strip overlapping head phrasing from the two non-primary pages per query (title + first H2).
3. **Internal-link hierarchy:** listicle → links to both use-case and feature as the "our tool" entries; feature → links to use-case as the BOFU CTA. Establishes a clear primary and demotes the others as supporting for each head term.
4. **Do NOT canonical/301 yet** — positions are 8–11, recoverable via differentiation. Re-measure at T+4wk; only consider consolidation if two still fight inside top-10 after differentiation.

> This block satisfies Deliverable C. The new tool page must NOT be added as a 5th URL on `bulk ad launcher` — its distinct "free launcher / launch-now" lane + title constraint above keeps it out of this fight.

---

## SERP Analysis (tool-lane, live SerpAPI 2026-07-06)

- **Top 3 (`free facebook ad launcher`):** Meta Ads Manager (official) — adskull.io free launcher tool (DR-low, pos 3) — madgicx product page.
- **SERP features:** AI Overview + video carousel + 1 Google Ad. AIO threat + AIO opportunity (structure for citation).
- **Dominant page type:** dedicated free/freemium **tool landing pages** + 2 listicles. NOT third-party review aggregators (G2/Trustpilot absent). → **we can enter** (own tool page is the correct format; adskull.io at DR-low proves reachability).
- **Can we win:** YES for a pos 3–8 tool-page slot over 3–6 months, given a real interactive widget + free/no-login angle. Not #1 (Meta owns official). The realistic prize is the "free 3rd-party launcher" slot adskull.io holds + AIO citation + the branded/GEO lane.

## Competitive Gap
- **admanage.ai** (`/launch`, drag 200 files) + **adsuploader.com** + **adskull.io** + **madgicx `/products/ad-launcher`** all own free/freemium launcher surfaces. All **Meta-only**; none offer **TikTok + Google-Drive sync + no-login** in one free tool.
- **Our differentiation:** Meta **+ TikTok**, Drive-sync OR local drag-drop, **no registration**, launches into **existing** campaigns (not just Library upload), backed by "2M+ ads launched" proof (already used on `/ad-creative-uploader` metadata). This is a strong product/word-of-mouth + GEO differentiator (weak as raw keyword capture — the Drive/TikTok terms are 0-vol).

## ICP Pain Research (from recon — validated, not re-scanned)
- **Pain quotes (SerpAPI snippet-verified, still live Apr 2026):**
  1. *"I am producing a lot of ads and its a pain to launch… upload my media all at one time to the ads manager, create as [ad]…"* — r/FacebookAds "Is there a tool to bulk upload ads to facebook?" (Oct 2024, 20+ comments). Re-surfaced in live SERP #3 today.
  2. *"I'm talking like 10–20 ads across several campaigns? … everyone just do it manually? Just seems so painful."* — r/PPC "Meta Bulk Ad Creative Uploads" (Mar 2025, 29 answers).
  3. *"The UI lags, it randomly logs you out, the bulk upload tool is half broken…"* — r/FacebookAds "losing hours of their life uploading ads one by one" (Apr 18, 2026 — fresh).
  4. *"Looking to see if there is a software option for bulk uploading ads to meta, as it's a pain lol."* — r/PPC "Bulk upload for Meta" (Jan 2025).
  5. Revealbot/bir.ch cited as expensive (~$100/mo) — "free" undercuts this.
- **Pain language:** "pain to launch," "one by one," "losing hours," "half broken," "do it manually." Use in hero/problem copy (audience vocab per `feedback_hero_uses_audience_vocab_not_product_terms.md` — "stop launching ads one by one," "launch a batch live in minutes," NOT "compound conditions").
- **Scale:** hours/week of manual ad-by-ad launching; 10–100+ ads/week batches.
- **Current workarounds:** native Ads Manager bulk import (buggy), Google Sheets templates (markifact), spreadsheets, expensive tools (Revealbot).
- **Emotional triggers:** time waste, buggy native UI, logged-out mid-upload, manual repetition.
- **JTBD:** JTBD 1 (reduce manual ad ops) dominant; JTBD 6 (scale winners fast) secondary.
- **Thread activity:** 5 threads, 20–40 comments each, live through Apr 2026 — strong proof of demand.

---

## GEO / AIO Play (why this tool becomes LLM-citable)
- **Citation hooks:** free + no-login + Meta&TikTok + Drive-sync are exactly the attributes "best free tools to bulk-launch Meta ads" LLM answers enumerate. AIO is present on both `free facebook ad launcher` and `bulk upload facebook ads` — structure the page for extraction.
- **On-page for GEO:** crisp one-sentence definition of what the tool does at top; a labeled "Free · No login · Meta + TikTok · Google Drive" spec row; FAQ in Q&A format with direct-answer first sentences; comparison-friendly bullet of capabilities.
- **Schema:** `WebApplication` (more precise than SoftwareApplication for a browser tool) with `applicationCategory: "BusinessApplication"`, `offers.price: "0"`, `featureList` (bulk launch, Meta+TikTok, Google Drive sync, no login), + `FAQPage`. Mirror the JSON-LD pattern already in `app/ad-creative-uploader/page.jsx` (lines 124–152).
- **llms.txt:** add a `/quick-launch` entry under Tools, e.g. `- [Free Bulk Ad Launcher](https://www.scalemate.co/quick-launch): Launch a batch of creatives live into your existing Meta & TikTok campaigns — free, no login, drag-drop or Google Drive.` Add to both `public/llms.txt` and `public/llms-full.txt`. (Currently absent — verified 2026-07-06.)
- **Brand Radar:** add a prompt tracking AI citation for "free tool to bulk launch Meta/Facebook ads."

## Page Structure (mirror `/ad-creative-uploader`: interactive widget top + marketing sections below)
1. **Hero + LIVE widget** — H1 (launcher framing), one-line what-it-does, the interactive drag-drop/Drive-sync launch widget (reuse `UploaderWidget` pattern with launch-into-campaign flow), "Free · No login · Meta + TikTok" spec row, platform logos (Meta / TikTok / Google Drive). Audience-vocab subhead ("stop launching ads one by one").
2. **Problem** — the "pain to launch / hours / one by one / half-broken native UI" pains (ICP quotes, our voice, no Reddit provenance per `feedback_no_research_source_in_copy.md`).
3. **How it works** — 3 steps (pick/drag creatives → map to existing campaigns → launch live), diagram not prose (per `feedback_concise_scannable_copy.md`).
4. **What makes it different** — free/no-login/Meta+TikTok/Drive vs Ads Manager bulk import + competitors (neutral).
5. **Use cases** — media buyers, agencies (multi-account), UA teams, freelancers (mirror uploader's AudienceSection).
6. **Results / proof** — "2M+ ads launched," time saved (reuse existing proof; NDA → verticals only).
7. **FAQ** — GEO-structured: "What is a bulk ad launcher?", "Is it free?", "Does it work with TikTok?", "Do I need to log in / install anything?", "How is this different from Ads Manager bulk upload?", "Does it launch into my existing campaigns?" Each answer direct-first + 1 internal link.
8. **CTA** — "Launch your first batch free."

## Title/Meta Direction
- **Cooldown check:** `/quick-launch` is NOT in pipeline §📊 Monitoring (verified 2026-07-06) → no cooldown; proceed.
- **Title (55–60ch, must contain "launch"+"free", must NOT contain "uploader"/"creation tool"/"best"):**
  - Rec: **"Free Bulk Ad Launcher — Launch Meta & TikTok Ads Live"** (52ch)
  - Alt: "Bulk Launch Meta & TikTok Ads — Free, No Login" (47ch)
- **H1 (distinct from title per §4.1.2):** "Launch a batch of ads live — free, no login" (audience-vocab, verb = launch-live).
- **Meta (150–160ch, pain-first):** "Stop launching ads one by one. Push a batch of creatives live into your existing Meta & TikTok campaigns — free, no login, drag-drop or Google Drive."
- **Brand in title:** NO (tool/listicle-adjacent intent; SERP leaders don't brand-lead) — per §4.1.3 + memory `feedback_no_brand_suffix_in_titles`.
- **Power elements:** "Free", "No Login", "Meta & TikTok" (audience specificity + differentiation) — ≥2 satisfied.
- Run 5–6 variants through content-ops panel (§4.1.7) before ship.

## Unique Angle
The only **free, no-login** tool that pushes a batch of creatives **live into existing Meta AND TikTok campaigns** (not just into the Media Library like uploaders, not a paid "for teams" platform) — from local drag-drop or Google Drive, backed by 2M+ ads launched.

## Must Include
- [ ] Self-canonical `https://www.scalemate.co/quick-launch`; verify no `next.config.mjs` redirect swallows it.
- [ ] Internal links IN (5, differentiated anchors above) + OUT (3) per link plan.
- [ ] Schema: `WebApplication` + `FAQPage` (mirror uploader page JSON-LD).
- [ ] llms.txt + llms-full.txt entry (Tools section).
- [ ] Title contains "launch"+"free", excludes "uploader"/"creation tool"/"best".
- [ ] Final visual polish via `/frontend-design` skill (mirror `/ad-creative-uploader` + `/use-cases` visual language) per memory `feedback_landing_design_workflow` — hand-rolled SCSS = draft only.

## Expected Impact
- Organic: low (0–30/mo tail terms) — realistic pos 3–8 on `free facebook ad launcher` ≈ a handful of clicks/mo. NOT the main value.
- Real value: conversion endpoint for the how-to blog + cluster (Brief B links here), GEO/AIO citation surface, captures high-intent "free launcher now" shoppers our uploader/use-case pages miss. Funnel: MOFU→BOFU free-tool, 1 step to activation.

## Input Needed from Natalia
- [ ] Confirm slug = keep `/quick-launch` (vs any preference for `/free-bulk-ad-launcher`; recommend keep to avoid a 5th URL).
- [ ] Confirm the widget can launch into EXISTING campaigns (not just Library) — the entire lane differentiation rests on this being true. If it only uploads to Library, it collapses into `/ad-creative-uploader` and this brief's GO flips to NO-GO.
- [ ] OK to reuse "2M+ ads launched" proof on this page.
- [ ] Approve the Cluster Cannibalization Fix as a separate workstream (title/intent differentiation on use-case ↔ features ↔ listicle).
- [ ] Confirm TikTok launch is actually supported in the live tool (scope: Meta + TikTok only).
