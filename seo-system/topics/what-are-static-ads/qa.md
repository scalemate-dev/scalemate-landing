# QA Report — what-are-static-ads

> Run: local QA pipeline on `main` (no branch, no push). Date: 2026-06-27.
> Spec: `seo-system/agents/qa-pipeline.md`. Draft: `seo-system/topics/what-are-static-ads/draft.md`.
> Verdict: **PASS WITH FIXES** — content-ops 91/100, anti-AI **Low** (borderline; one fix recommended). No critical (publish-blocking) data-integrity or scope defects. Two SEO-technical must-fixes (title + meta over char cap) before publish. Dataset schema wiring is a known publish dependency.

---

## Headline numbers

- **Content-ops score:** 91/100 (PASS — target 90)
- **Anti-AI level:** **Low** (humanizer 88/100 — clean of banned vocab/stock phrases; only tell is em-dash density)
- **Copy-editing (Seven Sweeps):** PASS — no blocking issues
- **SEO Technical:** PASS with 2 must-fix char-count items
- **Data-integrity / provenance:** PASS — every number tagged; first-party kept separate from public; no public-as-proprietary slip; no NDA leak
- **Word count:** ~3,922 (brief target 2,800–3,200 — **over by ~700**, see M3)

---

## PASS / FAIL per gate

| Gate | Status | Notes |
|---|---|---|
| Stage 1 — Content-Ops Panel (≥90) | ✅ PASS | 91/100 |
| Stage 2 — Copy-Editing (Seven Sweeps) | ✅ PASS | clarity/voice/prove-it/specificity all strong |
| Stage 3 — Humanizer / Anti-AI | ✅ PASS (Low) | em-dash overuse is the only material tell |
| Stage 3 — Audience-Language grep | ✅ PASS | zero hits on banned editor/SEO jargon |
| Stage 4 — SEO on-page | ⚠️ PASS w/ fixes | title 62 chars (cap 60), meta 168 (cap 160) |
| Stage 4 — Links | ✅ PASS | all 8 internal targets resolve |
| Stage 4 — Data-study provenance | ✅ PASS | all numbers tagged; first-party vs public separated |
| Stage 4 — Cannibalization | ✅ PASS | brief confirmed LOW; CREATE NEW |
| Article-specific: Freshness | ⚠️ PASS w/ flag | 2023 Meta fatigue stat removed ✅; new AppsFlyer 2025 anchor added (not in brief) — verify |
| Article-specific: CTR-vs-conversion | ✅ PASS | no "45%" anywhere; no CTR misquote |
| Article-specific: Scope (no creative production) | ✅ PASS | Gemini/AI-gen ref keeps user pipeline as subject |
| Article-specific: NDA | ✅ PASS | Appflame only; 754/mo matches customers page; no other client names |
| Article-specific: Research-source citation | ✅ PASS | Reddit/YouTube never cited; public DATA stats cited (OK) |
| Article-specific: AEO structure | ✅ PASS | front-loaded def, PAA H2s, FAQ+schema; Dataset embedded as comment (publish dep) |
| Article-specific: Title/meta exact | ⚠️ see M1 | matches approved string + absoluteTitle:true + no brand suffix; but 62 chars |
| Google Helpful-Content self-assessment (15Q) | ✅ PASS | 0 "no" answers |

---

## Stage 1 — Content-Ops Expert Panel: 91/100

Panel (7 experts; humanizer weighted 1.5×):

| Expert | Score | Key feedback |
|---|---|---|
| Performance-Marketing / UA expert | 94 | Operator-true: zombie creatives, 87% concentration, frequency-vs-reach read, blended ROAS, frequency-tied scaling. This is genuine UA depth, not theory. Minor: "~10,000 impressions before Meta can judge it" (FAQ) is a practitioner heuristic stated flatly — soft-qualify. |
| SEO / AEO expert | 92 | Front-loaded "Quick answer", PAA-verbatim H2s, FAQ mapped to PAA, jump-links, comparison tables = strong extractable structure. Title/meta over char cap costs a few points. Dataset schema only embedded as comment (not live) — AEO upside deferred until wired. |
| Data-Integrity / provenance auditor | 93 | Every number carries a tier tag. First-party (87% / 70%+ / ~3,000) explicitly walled off from public. AppsFlyer added as `public` corroboration AND explicitly "not part of the first-party dataset" — clean. Singular/Segwise/Meta each named + URL + caveat. No public-as-proprietary. Deduction: AppsFlyer stat is not in the brief — needs source-verify before publish (see C-none/flag). |
| Brand-Voice / Anti-AI editor | 88 | Voice is confident, pragmatic, operational — on-brand. POV markers in nearly every H2. No buzzwords, no corporate-speak. Only drag: em-dash density (~1/63 words vs 1/200 target) and a few sentence-rhythm runs in the data-study module. |
| Conversion / CTA strategist | 90 | Educational-entry → product-exit executed well; hub-and-spoke contextual links (not a CTA dump). Frontmatter CTA is sharp. Minor: module 12 item 4 (winner-loop automation) is the densest paragraph and slightly buries the bulk-launch CTA above it. |
| Readability / structure editor | 89 | Scannable, good table use, one-idea blocks. Length is over brief target (~3,922 vs 3,200) — the data-study + module 12 carry extra weight; risk of diluting definitional ranking intent the brief explicitly guarded against. |
| AI Writing Detector (humanizer, 1.5×) | 88 | No banned vocab, no stock phrases, no curly quotes, no emoji, no title-case headings, no collaborative artifacts. Sole material pattern: **em-dash overuse** (62 in body / ~3,922 words). Vary punctuation in ~15–20 spots to clear cleanly. |

**Aggregate (humanizer 1.5×):** ((94+92+93+88+90+89) + 88×1.5) / 7.5 = **91.1 → 91/100. PASS.**

**Top 3 panel weaknesses (non-blocking):**
1. Em-dash density (humanizer) — see M2.
2. Length over brief target + slight dilution of definitional spine (M3).
3. Title/meta over char cap (M1).

---

## MUST-FIX (before publish)

**M1 — Title + meta exceed character caps (SEO Technical).**
- Title `"What Are Static Ads? Types & How to Scale Them on Meta in 2026"` = **62 chars** (hard cap 60; brief estimated ~58). Google will truncate. Fix: trim ~2–4 chars, e.g. drop "Them" → `"What Are Static Ads? Types & How to Scale on Meta in 2026"` (57) or `"What Are Static Ads? Types + How to Scale on Meta in 2026"`. Keep the approved angle; this is wording-level only (allowed per brief: "panel may micro-tune wording, NOT the angle").
- Meta description (frontmatter line 5) = **168 chars** (cap 160). Trim ~8+ chars. e.g. end at "…all your spend into one creative." → shorten the tail clause.
- Both are honesty-accurate and on-angle; this is purely length.

**M2 — Em-dash overuse (Anti-AI / humanizer).** 62 em dashes in ~3,922 words (~1 per 63; humanizer budget ~1 per 200 = ~20). This is the only thing keeping anti-AI from a clean high-Low. Convert ~15–20 em-dash clauses to periods, commas, or parens. Hot spots: lines 64, 66, 93, 104, 116, 165, 167, 187, 190, 218, 220. Not publish-blocking, but recommended to lock "Low" durably.

**M3 — Length / definitional-spine balance (brief fidelity).** Body ~3,922 words vs brief target 2,800–3,200. The brief's explicit guardrail: the educational SPINE (definition/types/examples — the KD-0 traffic capture) must stay dominant; analytics/strategy modules must not push it into a pure-MoFu strategy piece. Currently the data-study + module 12 are heavy. Recommend trimming ~500–700 words from modules 9–12 (esp. module 12 item 4, lines 233, which is the single densest paragraph) without cutting the definition/types sections. Tightening also helps M2.

---

## SHOULD-FIX (quality, not blocking)

**S1 — Dataset JSON-LD is embedded as an HTML comment only (lines 196–210).** The draft itself flags this: the blog template (`app/blog/[slug]/page.jsx`) emits Article + BreadcrumbList + FAQPage, NOT Dataset. **This is a publish DEPENDENCY, not a content defect** (per the QA brief). Action for Natalia/eng: either extend the template to emit Dataset from frontmatter, or hard-code this block in the rendered page. Until wired, the strongest AEO/LLM-citation surface (the brief's core differentiator) is inert. Track as a pre-publish task.

**S2 — `/automation-rules-library` link (line 233)** is an extra internal target not in the brief's hub-and-spoke set. It resolves (`app/automation-rules-library/` exists) and is contextually used for the scope-boundary sentence, so it's fine — just noting it's an addition vs the brief.

**S3 — FAQ "roughly 10,000 impressions before Meta can judge it" (line 33)** and "10,000 impressions" heuristics are stated as fact. Soft-qualify as practitioner guidance (the draft already does this well elsewhere; keep it consistent).

**S4 — AppsFlyer 2025 anchor (lines 187–188) is NOT in the brief.** It is correctly tagged `public (AppsFlyer, 2025 edition)`, URL'd, and explicitly walled off from the first-party dataset, and the "53% of top 2%" vs our "87% of top 1–2" distinction is handled honestly (no conflation). Freshness OK (2025 edition < 18mo). **Action:** verify the exact figures (top 2% = 53%, prior 56%, +18% non-gaming YoY, 1.1M variations / 1,300+ apps / $2.4B) against the live AppsFlyer report before publish, since it was added post-brief and is load-bearing for the "industry corroboration" claim.

---

## Detailed gate notes

### Provenance / data-integrity (CRITICAL gate) — PASS
- First-party centerpiece (87% avg spend concentration; 70%+ zombie; ~3,000 ad sets / 25 accounts; gaming/ecom/subscription; mobile+web; Dec 2025–Jun 2026) tagged `first-party (...)` on both findings (lines 182, 185), in the "Cite this" block (192), and in the Dataset description (202). Reads as OURS.
- Public anchors each named + URL'd + caveated: Segwise (lines 116, 134–141, FAQ), Singular (220, FAQ), Meta for Business (93). No public stat relabeled as ours.
- Cost economics (lines 95–104) explicitly "directional, not a benchmark" / operator voice. Correct.
- No untagged number found in the data-study module.

### Freshness — PASS (with flag)
- The 2023 Meta "45% CTR" fatigue stat is **fully removed** (grep for "45%" = 0 hits). ✅
- The fatigue mechanism is now carried by Segwise 2026 + first-party + practitioner-consensus framing — no stale anchor.
- AppsFlyer "2025 edition" is the only sub-18-month public anchor added beyond brief; verify per S4.

### CTR vs conversion — PASS
- No "45%" anywhere. No "CTR drop" misframe. Fatigue is framed as frequency/reach + conversion-rate decline (lines 120–122), and CTR is only used correctly in the Segwise comparison (click-through metric). Clean.

### Scope (analysis/automation, not creative production) — PASS
- Module 12 item 4 (line 233) explicitly bounds the boundary: "our automation rules orchestrate the signal… your own pipeline generates the creative. The rule layer is the trigger and notify; the AI generation lives in your stack, not ours." The Gemini reference has the USER's stack as subject. ✅
- "We're deliberately not turning this into a design tutorial" (line 85) reinforces scope. No creative-generation pitch.

### NDA — PASS
- Only named client = Appflame (line 171), with the 754-losing-ads/month figure linking `/customers/appflame-automation-rules`. The 754 figure matches the live customers page (`app/customers/appflame-automation-rules/page.jsx`). All study data reported by vertical only. Grep for other client names (Fitly/Astara/Empowered/EUv2/KitUp/ZeptoLab/Promin) = 0 hits.

### Research-source citation — PASS
- No Reddit/YouTube cited in copy. Pains restated in operator voice ("teams quietly run 4 and call it a test", "the algo dumps all the spend into one"). Public DATA stats (Segwise/Singular/Meta/AppsFlyer) ARE cited — correct.

### AEO — PASS (Dataset = publish dep)
- Front-loaded "Quick answer" in first 100 words (line 44). PAA-verbatim H2s: "What is a static ad?", "What are the types of static ads?", "Do video ads perform better than static ads?". FAQ (6 Q) + FAQPage schema in frontmatter. Two comparison tables. Dataset JSON-LD present but commented (S1).

### Internal links — PASS (all resolve)
- `/use-cases/bulk-ad-launch` ✅ (`app/use-cases/_data/bulk-ad-launch`)
- `/use-cases/automated-creative-upload-meta` ✅
- `/blog/meta-andromeda-update` ✅ (`content/blog/meta-andromeda-update.md`)
- `/blog/what-is-ad-fatigue` ✅
- `/blog/best-ad-testing-tools` ✅
- `/creative-testing-framework-library` ✅ (`app/creative-testing-framework-library/`)
- `/customers/appflame-automation-rules` ✅
- `/automation-rules-library` ✅ (extra, S2)

### Anti-AI grep (Stage 3) — PASS
- Audience-language banned-grep (DR/SERP rank/cluster/we pulled/we verified/WebFetch/as of 202x/etc.): **0 hits**.
- Stock-phrase blacklist (in today's/ever-evolving/dive in/game-changer/seamless/etc.): **0 hits**.
- Transition overload: furthermore 0, moreover 0, additionally 0. ✅
- Humanizer banned vocab: 0 hits. Curly quotes: 0. Emoji: 0. Title-case headings: 0.
- Only tell: em-dash density (M2).

---

## Recommendation

Draft is **production-ready after M1 (title/meta length) is fixed**; M2 (em dashes) and M3 (length/spine balance) strongly recommended in the same pass to lock anti-AI "Low" and protect the definitional ranking intent. S1 (Dataset schema wiring) is a separate eng/publish dependency, not a content blocker. S4 (verify AppsFlyer figures) before publish.

Pipeline state intentionally NOT advanced (§5→§6) — awaiting Natalia's formal approval.
