# Cluster Plan — Bulk Launch / Upload (single source of truth)

> **Status:** LOCKED architecture (2026-07-06). Execution not started.
> **NB — tool slug:** the free tool ships at **`/free-bulk-ad-launcher`** (test `/quick-launch` → 301). Any `/quick-launch` reference below means this new slug.
> **Owner:** Natalia. Local, Loose mode, main. No git commit until she approves.
> **Grounding:** `seo-system/intelligence-briefs/2026-07-06.md` (recon) + GSC (query+page, 90d, 2026-07-06) + Ahrefs KE + live SerpAPI. Every decision below is data-verified per URL, not guessed.

---

## The problem this plan solves

The bulk-launch/upload query space is **already fragmented across our own pages** — `bulk ad launcher` returns **4 of our URLs at once**, `bulk ad creation tool` returns 3, none breaking pos 10. Natalia wants to ship a **free, no-login tool** (`/quick-launch`) that launches a batch of creatives live into existing Meta campaigns. Done naively (a 5th keyword page) it worsens the fragmentation. This plan makes the tool a **net-positive hub** and cleans the pre-existing self-competition.

**Core principle:** one page = one job = one lane. Differentiate by *intent*, not by keyword. The tool strengthens the whole domain via GEO/AIO citation + link-earning + being the conversion endpoint — NOT via keyword capture (its terms are ~0 vol).

---

## Locked cluster architecture

| Action | Page | Owns (lane) | GSC now | Target |
|---|---|---|---|---|
| 🟢 **NEW** | `/quick-launch` | free launcher / launch-live-now / no-login (**Meta-only**) | n/a (feature not indexed) | GEO/AIO surface + conversion endpoint |
| 🔧 **strengthen** | `/use-cases/bulk-ad-launch` | `bulk ad launcher` + **all launch-how-to** | pos 7–11 on launch queries | push → top-5; add AEO answer block |
| 🔧 **strengthen** | `/blog/bulk-upload-creatives-meta-tiktok` | **upload-how-to** (`how to bulk upload facebook ads`, `meta ads bulk upload`) | pos 40–50 on target terms | retarget → top-10 |
| 🔧 **differentiate** | `/features/bulk-launch` | `bulk ad creation tool` (mechanism) | pos 8.3 | strip head overlap |
| 🔧 **differentiate** | `/blog/best-bulk-ad-launch-tools` | «best tools» listicle | pos 7.8 on "best" terms | stop competing on bare heads |
| ✅ **leave** | `/ad-creative-uploader` | `ads uploader` (assets → Library) | pos 10.2 | +1 outbound link to `/quick-launch` |
| 🔮 **future** | TikTok launcher page | — | — | **gated**: tool supports TikTok **and** demand validated |

**New blogs = 0. New pages = 1 (`/quick-launch`).** Everything else is strengthen/differentiate of existing pages.

---

## ⚠️ INTENT UPDATE 2026-07-06 — "upload" vs "launch" (the plain version)

**The simple model — two different real actions:**
Imagine a media buyer has 50 videos to turn into ads in Meta this week. There are TWO distinct actions:
- **Action 1 — get the FILES in.** The 50 videos land in Meta's media library. Not ads yet — just files sitting there.
- **Action 2 — build the ADS and launch them.** Each video becomes a real ad (file + headline + link + audience + budget) and goes live.

**The words:**
- **"launch"** = Action 2, unambiguously. "Make my ads live."
- **"upload"** = AMBIGUOUS. Literally "load up." A person can mean Action 1 (just files) OR Action 2 (the whole ad).

**Where we went wrong:** our site treats "upload" as Action 1 only (move files Drive→Library). But when people Google `bulk upload facebook ads`, ~9 of 10 mean **Action 2** — "I have a pile of ads, how do I get them all live at once instead of one-by-one." They land on our file-mover and don't get what they came for → they leave.

**Evidence:** Meta's #1 page ranks for upload=import=create; Meta's own menu item is "Import ads in bulk"; 6/7 Reddit threads use "upload" to mean create-ads. So in search, upload & launch largely collapse into one job (get many ads live fast).

**How we handle it — one idea: each page = one clear job, and match the word to what the visitor wants.** Three consequences fold into the specs below:

1. **The upload blog is retargeted to CREATE/IMPORT ADS** (not "creatives/files"). Lead with spreadsheet/API ad-creation; file-upload is secondary.
2. **NEW LANE ADDED — `/use-cases/automated-creative-upload-meta` owns the FILES/assets lane** (`bulk upload creatives`, `import creative assets` — GSC pos 2.5 / pos 9). It was omitted from the original 5-page list; without it the retargeted blog would collide with it. This makes the cluster **7 pages**.
3. **Entity vocabulary to use (winner's language):** `import ads in bulk`, `bulk import`, `Excel/XLSX spreadsheet`, `campaign · ad set · ad`, `Meta Marketing API`, `duplicate ad sets`, `launch into ad sets`.

### Existing-content mismatch (why this matters — Natalia flagged 2026-07-06)
Several live pages are written around "upload = move creative FILES," which mismatches the real create/import-ads intent → visitors don't get what they searched for (hurts CTR/dwell/conversion + GEO reads us as a "creative uploader," not an "ad launcher/importer"). Confirmed live titles:
- `/ad-creative-uploader` → **"Bulk Upload Ad Creatives to Meta & TikTok — Free Tool"** — a free TOOL ranking for `ads uploader`/`bulk upload` (pos 10.2) that delivers files→Library, not the create-ads job searchers expect. **Sharpest mismatch.**
- `/blog/bulk-upload-creatives-meta-tiktok` → "How to Bulk Upload **Creatives**…" — files framing; retarget to create/import ADS.
- `/use-cases/automated-creative-upload-meta` → correct files-lane owner (pos 2.5 `import creative assets`) but name reinforces upload=files.
- `/lp/ad-uploader` → LP variant — audit so it does not multiply the upload confusion (consolidate if redundant).

## 🔑 Scalemate's launch methods — tell the WHOLE trio (Natalia clarified 2026-07-06)
CSV/XLS is **NOT a separate feature** — it's one of several ways to launch many ads through Scalemate. Correcting an earlier over-elevation: present the full trio (this is the real product story for the launch/tool/use-case pages), don't hero CSV alone.
1. **Templates** — set up once, reuse across launches (uniform setup, saved template).
2. **Bulk creative upload** — push many creatives into existing campaigns in two clicks.
3. **Google Sheets / CSV import** — upload a file with a **unique link, headline, and settings per ad**; Scalemate parses it and creates the ads in **Meta + TikTok**. Best for **ecom** (product-level ads) and **web-to-app funnels** (unique deep-links / tracking params per ad).

**Why it matters for SEO/intent:** method #3 is exactly what "bulk upload facebook ads / import ads in bulk" searchers mean (spreadsheet → ads). Mention it in the winner's vocabulary (`import ads in bulk`, `Excel/XLSX/Google Sheets`) as ONE of the launch methods — presenting the trio, not over-elevating CSV as a standalone hook.

**Ecom + web-to-app = a distinct content angle** for the per-ad-customization value (unique URL/headline/params per row) — usable in the blog how-to, the tool page, and the use-case audience section.

**Where to represent the trio:**
- **`/quick-launch` (tool)** — show all 3 input methods (templates / bulk-creative / Sheets-CSV) in the how-it-works.
- **`/ad-creative-uploader`** — clarify it does the creative-upload method (#2) and link across to the Sheets/CSV + template launch methods (resolves the "does it create ads?" mismatch by routing, not overclaiming).
- **`/use-cases/bulk-ad-launch`** — the trio = "how you launch through us."
- **`/features/bulk-launch`** — the mechanism includes all three inputs.
- **`/blog/bulk-upload-creatives-meta-tiktok` (retargeted)** — present our Sheets/CSV method next to Meta's native Excel import (honest how-to comparison).
> Writer TODO: confirm exact scope with Natalia (platforms per method, ad vs ad-set level, Sheets/CSV column/template format) before writing steps — don't overstate.

## 🔗 URL/slug — DECIDED: `/free-bulk-ad-launcher` (2026-07-06)
`/quick-launch` is a **test URL** (Natalia: it was created just to build the launcher feature — launch into existing Meta campaigns from Drive or local computer). It has **no SEO equity**, so changing it costs ~nothing → we pick the best slug and 301 the old one.
- **DECISION: `/free-bulk-ad-launcher`.** 301 `/quick-launch` → `/free-bulk-ad-launcher`.
- **Why this over `/free-facebook-ad-launcher`:** platform-neutral — stays correct whether the tool is Meta-only now OR gains TikTok later (on the same page or as a sibling). Carry the platform in the title/H1 ("Meta" now → "Meta & TikTok" later) so the URL never needs migrating again. FB-exact-match loss is negligible (target terms 0–30 vol; page value = GEO/product/links, not exact keyword).
- Slug string does NOT cause cannibalization — the page's title/H1/intent (free / interactive / launch-live-now) hold the distinct lane vs the use-case's commercial `bulk ad launcher`. "free" in the slug + title further separates.
- **Route audit before ship:** `/launch` (301→use-case, next.config.mjs), `/quick-launch` (test → 301 to new slug), `/lp/ad-uploader` (LP variant — audit/consolidate). Don't proliferate.

### Refined 7-page lane map
| Real intent | Page |
|---|---|
| create/import ADS in bulk (Excel/API, how-to) | `/blog/bulk-upload-creatives-meta-tiktok` (RETARGET) |
| files/assets → Library (from Drive) | `/use-cases/automated-creative-upload-meta` (**added — files lane**) |
| "ads uploader" brand + assets→Library | `/ad-creative-uploader` (+ disambiguation line, link out) |
| launch / go-live + AEO answer | `/use-cases/bulk-ad-launch` |
| create mechanism (`bulk ad creation tool`) | `/features/bulk-launch` |
| "best tools" listicle | `/blog/best-bulk-ad-launch-tools` |
| free tool (Meta-only) | `/quick-launch` |

⚠️ **Live upload-lane cannibalization** (GSC `meta ads bulk upload` / `bulk upload creatives`): blog (pos 42) + automated-creative-upload-meta (pos 9) + ad-creative-uploader all appear. Assign explicit lanes per this table: **automated-creative-upload-meta = FILES from Drive; blog = create/import ADS via spreadsheet+API; ad-creative-uploader = "ads uploader" brand + assets→Library.**

---

## Anti-cannibalization rule (one line)

> The tool page is the ONLY page with **"free … launcher"** in its title and **launch-into-existing-campaigns** as its verb. Its title MUST contain "launch" + "free" and MUST NOT contain "uploader" / "creation tool" / "best". No other page adds "free launcher" phrasing to its body. Each existing page keeps its own GSC-winning head term (table above) and strips overlapping head phrasing from title + first H2.

---

## Per-page execution spec

### 1. 🟢 NEW — `/quick-launch` (free tool landing) — Meta-only
**Scope guardrail (Natalia clarified 2026-07-06) — do NOT overstate on this page:**
- **The FREE TOOL = no registration → bulk-launch ads into EXISTING Meta campaigns.** That is the whole scope of the free page. Do not promise new-campaign creation here.
- **The FULL PLATFORM does more** (describe this on blog / use-case / feature, NOT as the free-tool promise): also launches into **NEW campaigns** (via reusable templates set up once) and via **CSV/table** import. Keep the free-tool page honest to its narrower scope; route users wanting more to the platform pages.

Full spec: `seo-system/topics/free-bulk-ad-launcher/brief.md` (Brief A). Key points:
- **Slug = `/free-bulk-ad-launcher`** (see URL decision above). The test `/quick-launch` → 301 to it. No SEO equity lost (test page). Distinct "free launcher" lane keeps it out of the `bulk ad launcher` cannibalization.
- **Meta-only for now.** Tool currently launches into Meta/Facebook ads only. Drop TikTok from title, H1, meta, schema `featureList`, and llms.txt until TikTok ships. Google-Drive sync + local drag-drop are in-scope now.
- Title: **"Free Bulk Ad Launcher — Launch Meta Ads Live"**; H1: "Launch a batch of ads live — free, no login." (Platform in title = "Meta" now → "Meta & TikTok" later; slug stays put.)
- Schema `WebApplication` + `FAQPage`; add llms.txt + llms-full.txt entry (Meta-only wording).
- Structure mirrors `/ad-creative-uploader` (interactive widget top + marketing sections). Final polish via `/frontend-design`.
- 301 `/quick-launch` → `/free-bulk-ad-launcher`; verify no `next.config.mjs` catch-all interferes (`/launch` already 301s to use-case).

### 2. 🔧 strengthen — `/use-cases/bulk-ad-launch` (launch-how-to hub + AEO)
Owns ALL launch-how-to intent already (GSC-verified): `launch ads` 238imp/pos19.5, `how to launch meta ads in bulk faster` 51/11.0, `what is the fastest way to launch multiple meta ad creatives in bulk?` 58/9.5, `bulk ad launcher` 94/10.8, `facebook campaign launcher` 106/14.8. Sitting pos 7–11 → clear top-5 headroom. A separate "how to launch" blog would cannibalize this page → **not doing that.**
> **NOTE: the page ALREADY has a `How the Bulk Ad Launch Tool Works` section + an 8-question FAQ. This step is ENHANCE, not rebuild — two targeted additions:**
- **Update the existing How-It-Works** to show all 3 launch methods (templates / bulk-creative upload / Sheets-CSV). It currently describes one flow (cloud-sync → params → launch) and omits the Sheets/CSV method (per-ad unique links/headlines — the ecom + web-to-app angle).
- **Add ~3 FAQ entries** the current FAQ lacks: (a) the exact question-queries verbatim — "What's the fastest way to launch multiple Meta ad creatives in bulk?", "How do I launch Meta ads in bulk faster?"; (b) the **AEO block** — crisp extractable answer to **"What's the difference between bulk ad uploading and bulk ad launching?"** (Google's AI already pulls this page for it: 68 imp, pos 7.9, **0 clicks**, 0 Ahrefs vol — nobody cited yet; goal = get *cited*, mirror the upload half on the blog + cross-link).
- Keep commercial "for teams / at scale" framing as its head-term lane. Do NOT add "free launcher" phrasing here.
- Push pos 9–11 → top-5 via the added depth + internal-link authority (links IN from listicle, feature, blog).

### 3. 🔧 strengthen + RETARGET — `/blog/bulk-upload-creatives-meta-tiktok` (create/import ADS in bulk)
Full spec: `seo-system/topics/how-to-bulk-upload-facebook-ads/brief.md` (Brief B). Existing blog ("How to Bulk Upload Creatives to Meta & TikTok, 5 Methods", 2026-04-21) ranks **pos 40–50** on target terms — undersized. **Intent research flips its target: "bulk upload facebook ads" = CREATE/IMPORT ads via spreadsheet/API, not move creative files.**
- **Retarget title/H1 to create-ads:** e.g. **"Bulk Upload Facebook Ads: How to Create & Import Ads in Bulk (Excel + API)"**. Current "creatives" framing = wrong lane.
- Lead body with the create-ads mechanism (Meta's Excel/XLSX bulk import + API); file-upload is a secondary sub-step, not the headline.
- **Disambiguation line (verbatim intent-pin):** *"In Meta, 'bulk upload' almost always means creating many ads at once — importing a spreadsheet or via API — not moving files into the Media Library."*
- Entity vocab: `import ads in bulk`, `bulk import`, `Excel/XLSX spreadsheet`, `campaign · ad set · ad`, `Meta Marketing API`.
- FAQ that pins intent: "Does bulk upload mean uploading creative files or creating ads?" · "How do I bulk import ads into Meta Ads Manager?" · "What's the difference between bulk upload and bulk launch?" (mirror the use-case AEO answer, cross-link).
- Schema `Article` + `HowTo` (the import steps) + `FAQPage`. CTA DOWN → `/quick-launch`.
- **Do NOT:** frame around "drag creative files into Media Library" (that's the automated-creative-upload-meta lane); don't use "launcher/launch" as primary verb (use-case lane).

### 3b. 🔧 strengthen — `/use-cases/automated-creative-upload-meta` (FILES/assets lane — ADDED)
The real owner of the file/asset intent (GSC: `how can media buyers import creative assets` pos 2.5 / 82 imp; `bulk upload creatives to meta` pos 9 live). Was omitted from the original plan — add it so it does NOT collide with the retargeted blog.
- Explicitly own **"bulk upload creative files / import creative assets from Google Drive."** Keep `files / assets / Drive / drag-and-drop / Media Library` vocabulary.
- **Do NOT** use "create/import ads" or "launch" framing — that bleeds into the blog + use-case lanes.
- Light-touch: ensure title/H2 carry "creative assets / files from Drive"; cross-link to blog ("once files are in, bulk-create your ads") and to `/quick-launch`.

### 4. 🔧 differentiate — `/features/bulk-launch`
Elect as primary owner of `bulk ad creation tool` (pos 8.3, best position of the 3 competing). Title/first-H2 → "how bulk ad creation works (mechanism)". Use audience vocab ("create hundreds of ads at once"), not "compound conditions"/"rules". Strip `bulk ad launcher` head phrasing. Link → use-case as BOFU CTA.

### 5. 🔧 differentiate — `/blog/best-bulk-ad-launch-tools`
Target `best bulk ad launch tools` / `best tools for bulk ad creation` (its own winner, pos 7.8). Stop competing on bare `bulk ad launcher` / `bulk ad creation tool`. Add Scalemate's free `/quick-launch` as the "free option" entry (anchor "free bulk ad launcher (no login)"). Links → use-case + feature as "our tool" entries.

### 6. ✅ leave (light disambiguation) — `/ad-creative-uploader`
Owns `ads uploader` (GSC pos 10.2, real clicks). **Intent-drift caveat:** market meaning of "ads uploader" (adsuploader.com) = create+publish ads; our page = assets→Library, semantically narrower than searchers expect. Keep the query, but:
- Add one disambiguation line clarifying this uploads creative *assets* to the Library (and link to the blog for "bulk-create ads" + `/quick-launch` for "launch live").
- Add one outbound link → `/quick-launch`, anchor "launch them live into your campaigns".
- **Do NOT** claim it "creates and launches ads" (bleeds into create/launch lanes).

---

## Internal-link hub & spoke
Spokes link INTO `/quick-launch` (conversion endpoint) with differentiated anchors that don't cannibalize the linking page's own head term:
- `/ad-creative-uploader` → "launch them live into your campaigns"
- `/blog/bulk-upload-creatives-meta-tiktok` → "free bulk ad launcher" (primary CTA)
- `/blog/best-bulk-ad-launch-tools` → "free bulk ad launcher (no login)"
- `/use-cases/bulk-ad-launch` → "try the free launcher"

`/quick-launch` links back OUT (no head-anchors of the spokes): → use-case ("for teams launching at scale"), → feature ("how bulk launch works"), → blog ("manual method in Ads Manager").

---

## Consolidation fix (pre-existing self-competition — DECISION 2026-07-06)
**Architecture (corrected): ONE money-page + a complementary supporting page. NO self-competition.**
- **`/use-cases/bulk-ad-launch` = THE ranking money-page** for the whole job — owns BOTH `bulk ad launcher`/`bulk launch` AND `bulk ad creation tool` in search. Case studies, results, audience, launch-how-to, AEO block.
- **`/features/bulk-launch` = complementary SUPPORTING page** (mechanism explainer, site navigation, product-marketing). It **keeps `canonical` → `/use-cases/bulk-ad-launch`** so its authority consolidates INTO the money-page. It does NOT try to rank independently — it feeds the use-case. (This was the original, correct design.)
- **`/blog/best-bulk-ad-launch-tools` = "best tools" listicle** — already well-differentiated (leave).

> **Note / correction:** an earlier draft of this plan floated making the feature "primary owner of `bulk ad creation tool`" and flipping it to self-canonical. That was wrong — the feature COMPLEMENTS the use-case, so self-canonical would split them into two competitors (the exact cannibalization we're avoiding). Canonical stays on use-case. Reverted 2026-07-06.

**DONE (Step 1, 2026-07-06, local):**
- ✅ `| Scalemate` suffix removed from use-case + feature titles (both).
- ✅ Titles differentiated (harmless + useful — avoids identical SERP snippets, describes feature's supporting "creation mechanism" role even though use-case is the one that ranks):
  - use-case `<title>`: "Bulk Launch Hundreds of Meta & TikTok Ads in Minutes".
  - feature `<title>` (all 3): "Bulk Ad Creation Tool — Build Meta & TikTok Ads at Once" (55ch).
- ✅ feature `canonical` verified/kept → `/use-cases/bulk-ad-launch` (was briefly flipped to self, then reverted — feature stays supporting).
- listicle: unchanged.

**Later (content pass, optional):** lean feature body into the mechanism (matrix / templates / CSV-Sheets / API) so it's a genuinely useful supporting explainer that funnels to the use-case; keep use-case on outcome/proof. Re-measure cluster at T+4wk.

---

## Recommended execution order
1. **Consolidation + differentiate** (steps 4, 5, and title/H2 on use-case) — cheap; clears the ground before the tool enters the cluster.
2. **Strengthen `/use-cases/bulk-ad-launch`** (how-to section + AEO answer block).
3. **Build `/quick-launch`** tool landing (Meta-only) — Natalia's core goal.
4. **Strengthen `/blog/bulk-upload-creatives-meta-tiktok`** (retarget + link down to tool).
5. **Post-publish:** llms.txt + llms-full.txt, Brand Radar prompt ("free tool to bulk launch Meta ads"), verify internal links, T+4wk re-measure of consolidation.

---

## Future — TikTok launcher (gated, not now)
Ship a dedicated `/tiktok-bulk-ad-launcher` (or `/quick-launch/tiktok`) ONLY when BOTH:
1. the tool actually launches into TikTok, AND
2. discovery validates TikTok-query demand (currently ~0 vol).
Until then: one Meta page; TikTok mentioned max as "coming soon" or omitted. Two near-duplicate platform pages now = re-introduced cannibalization + thin page for a capability that doesn't exist. This is NOT "programmatic SEO" (that needs many demand-bearing variants with unique content — verticals/comparisons, a separate larger track).

---

## Open inputs from Natalia (from briefs)
- [ ] Confirm slug stays `/quick-launch`.
- [x] Tool launches into EXISTING Meta campaigns (not just Library) — **confirmed 2026-07-06**.
- [ ] OK to reuse "2M+ ads launched" proof on the tool page.
- [ ] Real Ads Manager bulk-import failure modes + batch-size thresholds (for the upload-blog strengthen, first-hand credibility).
- [ ] Approve consolidation as a separate workstream.
