# Handoff — Content-Creator Full Draft Phase

> **Purpose:** single-doc entry point for a fresh chat to run the content-creator agent (Step 3 — full draft) for `facebook-ads-automation-listicle-rework`. All discovery + outline work is complete; this doc tells the next chat exactly what to do.
>
> **Status:** Outline shipped + approved by Natalia 2026-05-08. Ready for full draft.

---

## Where we are in pipeline

- §1 New: completed
- §2 Discovery in progress: completed
- §3 Pending Natalia review (brief): completed (approved 2026-05-08)
- **§4 Approved for writing: ← currently here**
- §5 Pending Natalia review (draft): next stop after this run
- §6/§7/§8: downstream

After full draft is written, item moves §4 → §5.

---

## Working mode (CRITICAL — do not deviate)

- **Local on `main` branch.** Do NOT create or switch branches. Do NOT open a PR. All commits go directly to `main` via `git add <specific files> && git commit && git push origin main`.
- This is **Loose mode** per [CLAUDE.md](../../../CLAUDE.md) "Branching workflow". Natalia works on `main`; cloud agents in codespaces are the only exception, and we are not using a codespace for this task.
- Verify branch on start: `git branch --show-current` should return `main`. If not, `git checkout main` before any edits.

---

## Read these first (priority order)

1. **[brief.md](./brief.md)** — primary spec. ~640 lines. Read it fully. Sections that matter most for draft:
   - "URL Strategy" (CREATE NEW `/blog/best-facebook-ads-automation-tools`; old `/blog/facebook-ads-automation` stays AS-IS)
   - "Keyword Data" + cluster table
   - "Funnel & Conversion Assessment" (CTAs)
   - "Title/Meta Direction" (locked candidate #3)
   - "Unique Angle" — F + G paired primary frame, JTBD voice, worked example
   - "Listicle Structure (S5'-specific)" — 12-tool table with locked ordering
   - "Self-#1 honesty framing (mandatory intro beat)" — REQUIRED in intro
   - "Editorial depth per slot" — Hybrid (6 deep + 4 table-only + 2 lateral group)
   - "Worked example for Scalemate per-tool entry"
   - "Internal Links"
   - "Schema"

2. **[tools-research.md](./tools-research.md)** — per-tool data for all 13 tools researched (12 in slate, Adzooma dropped). Verified data + source URLs. Use as the source-of-truth for per-tool content. The "Compact comparison table" near top is mobile-friendly summary.

3. **[outline.md](./outline.md)** — full section structure + word targets + key points per H2/H3. Content-creator follows this skeleton.

4. **[seo-system/content-writing-rules.md](../../content-writing-rules.md)** — main writing rules (§1 brand voice · §2 templates · §3 standards · §5 LLM visibility · §6 anti-AI · §7 E-E-A-T · §8 JTBD).

5. **[seo-system/agents/content-creator-agent.md](../../agents/content-creator-agent.md)** — agent spec. We are at **Step 3 (full draft)** — outline already shipped at Step 2.

6. **Reference articles** for voice/structure consistency:
   - [content/blog/best-mcp-servers-meta-google-ads.md](../../../content/blog/best-mcp-servers-meta-google-ads.md) — recently rewritten newsjack listicle (R3) with content-ops 95+ score, similar pattern
   - [content/blog/best-bulk-ad-launch-tools.md](../../../content/blog/best-bulk-ad-launch-tools.md) — adjacent listicle on the site
   - [content/blog/facebook-ads-automation.md](../../../content/blog/facebook-ads-automation.md) — existing how-to article (kept AS-IS, NOT touched). Source of the `$5K / $5K-$20K / $20K+ / 50+ creatives` decision framework — carry that section over per brief instruction.

---

## Resolved checkpoint state (Natalia 2026-05-08, all 8 outline questions)

| # | Question | Resolution |
|---|---|---|
| 1 | Author byline | **Nataliia Bondar** |
| 2 | Self-#1 reason | "We use Scalemate ourselves for our **web + mobile funnels** — playbooks came out of those campaigns." Bake this into the self-#1 honesty intro beat. |
| 3 | Worked example placement | Inside slot #1 Scalemate's deep entry — as the operator playbook beat (plain-language preamble → rule syntax → why it lands). NOT a standalone section. |
| 4 | AdEspresso caveat | **DROP caveat entirely.** Standard treatment at slot #6, no maintenance-mode hedge. Product is operational, blog frequency not our concern. |
| 5 | `/automation-rules-library` coordinated release | **Confirmed.** Link freely from this article — Natalia publishes the library page together with this listicle. |
| 6 | AI disclosure footer | **Don't add.** Content is operator-voiced (founder author byline, real product capabilities, real metrics). Footer not applicable. |
| 7 | Operator anecdote | Skip in v1. Leave gap for iteration after deploy if Natalia wants to add one. |
| 8 | Meta Native 250-rule cap | Re-fetch fresh Meta Help URL during draft to verify cap is still 250 in 2026. |

---

## Locked decisions (do not re-question)

- **URL:** `/blog/best-facebook-ads-automation-tools` (no year in slug)
- **Old URL `/blog/facebook-ads-automation`:** stays AS-IS (no edit, no delete, no 301)
- **Title:** "12 Best Facebook Ads Automation Tools for 2026 (Meta + TikTok)" (60 chars)
- **Slate locked at 12** (Adzooma dropped, AdNova kept at slot #8):
  1. **Scalemate** (deep, protagonist) — slot #1 per Natalia 2026-05-08, mandatory self-#1 honesty intro
  2. **Meta Native** (deep, baseline)
  3. **Birch (Revealbot)** (deep, deepest rules peer)
  4. **Madgicx** (deep, autonomous-AI big brand)
  5. **Smartly.io** (table-only, ~80 words)
  6. **AdEspresso (Hootsuite)** (table-only, ~80 words, NO caveat)
  7. **Trapica** (table-only, ~80 words)
  8. **AdNova** (deep, bulk launch + creative workflow founder-add)
  9. **Kitchn.io** (table-only, ~80 words)
  10. **AdManage** (deep, multi-platform direct peer)
  11. **Make.com / n8n / Zapier** (lateral group paragraph, ~120 words)
  12. **Hunch / Pencil / AdCreative.ai** (lateral group paragraph, ~120 words; Pencil URL is `trypencil.com`)
- **Primary angles:** F (workflow chains for ad ops) + G (operator playbooks library) paired
- **JTBD voice mandatory** (per content-writing-rules §8 Groups A+B+D applied)
- **Comparison table:** "Auto-revert" column header (NOT "Rollback" — that's dev jargon; "rollback" is Scalemate's own term, kept as alias note in body)
- **Coordinated release** with `/automation-rules-library` (S9') — cross-link both ways
- **Worked example:** creative testing protocol with placeholder thresholds (×10 spend gate / ×2 CPI gate) — content-creator may use as-is per Natalia approval
- **Real metrics that ARE current on site (verified 2026-05-08, OK to cite):** 32% budget savings, 62% time reduction, 2M+ ads launched. Sources: `app/features/automation-rules/components/ProofSection/ProofSection.jsx`, `app/solutions/media-buyers/data.jsx`, `app/page.jsx`, demo-form FAQ.
- **API docs URL** for Scalemate: `https://scalemate.gitbook.io/scalemate-api` (citable)
- **Target word count:** ~3,500

---

## What the next chat does

### Single command to start

Once in the new chat (with this repo + Claude Code + the SEO system), run something like:

```
Запусти content-creator full draft для facebook-ads-automation-listicle-rework. Локально на main, без гілки. Усе у seo-system/topics/facebook-ads-automation-listicle-rework/handoff.md — читай brief.md + tools-research.md + outline.md + content-writing-rules.md перед стартом.
```

### Or — direct Agent-tool prompt (paste this into the new chat)

> You are the Content Creator agent for Scalemate. Run **Step 3 — full draft** for the topic `facebook-ads-automation-listicle-rework`. Outline approved at Checkpoint 2 by Natalia 2026-05-08; this is the writing phase.
>
> **Working mode:** local on `main` branch. NO new branches. NO PR. Commits direct to `main` via `git add <files> && git commit && git push origin main`. Loose mode per CLAUDE.md.
>
> **Read in full before writing:**
> 1. `seo-system/topics/facebook-ads-automation-listicle-rework/handoff.md` — this doc, has all resolved decisions
> 2. `seo-system/topics/facebook-ads-automation-listicle-rework/brief.md` — primary spec
> 3. `seo-system/topics/facebook-ads-automation-listicle-rework/tools-research.md` — per-tool data
> 4. `seo-system/topics/facebook-ads-automation-listicle-rework/outline.md` — section structure + word targets
> 5. `seo-system/content-writing-rules.md` — writing rules
> 6. `content/blog/best-mcp-servers-meta-google-ads.md` — voice/structure reference (recent listicle that scored 95+)
> 7. `content/blog/facebook-ads-automation.md` — existing how-to (carry over the spend-tier decision framework)
>
> **Output:** `content/blog/best-facebook-ads-automation-tools.md` — Next.js blog markdown with full frontmatter + body. Slug `best-facebook-ads-automation-tools`. Author "Nataliia Bondar". Title "12 Best Facebook Ads Automation Tools for 2026 (Meta + TikTok)". CreatedAt 2026-05-08.
>
> **Required:** JTBD voice across every tool entry. Self-#1 honesty intro beat (own the conflict explicitly per brief.md). 6 deep entries + 4 table-only + 2 lateral groups. Worked example inside slot #1 Scalemate. Real metrics (32% / 62% / 2M+) cited. API docs link `scalemate.gitbook.io/scalemate-api`. Internal links per brief.md "Internal Links" section. Schema: BlogPosting + ItemList (12 entries) + FAQPage + BreadcrumbList. ~3,500 words.
>
> **Anti-AI compliance** (per content-writing-rules §6) — concrete first sentence, ≥12 proactive facts, varied sentence length, POV in every H2, customer language, banned-phrases scan, ≥3 first-hand experience markers, no AI disclosure footer (operator-voiced, not AI-authored).
>
> **At draft completion:**
> 1. WebFetch Meta Help URL for automated-rules cap to verify "250 rules per ad account" still current (per outline Q8).
> 2. Verify Birch's API/webhook/Slack-native coverage via WebFetch their integrations page — adjust differentiation if they ship strong external endpoints.
> 3. Self-check against `content-creator-agent.md` Step 4 self-check list.
> 4. Move pipeline.md item §4 → §5 (Pending Natalia review).
> 5. Commit + push to `main`. One commit: `content-creator: facebook-ads-automation-listicle-rework full draft`.
>
> **Report back:** path, word count, anti-AI compliance pass/fail per rule, internal-link count, any verification findings, any place where you had to invent something Natalia should review.

---

## Hard guardrails (don't break)

- **No fabricated data.** Per [data-integrity.md](../../rules/data-integrity.md). If a fact can't be verified from brief / tools-research / fresh WebFetch / shipped Scalemate code, mark it explicitly or omit. Examples to be careful with: peer pricing (verify at draft via vendor pricing page WebFetch), Birch's API depth (verify their integrations page), Meta Native rule cap (verify Meta Help URL).
- **No competitor promotion.** Neutral mention OK; do not write copy that flatters competitors more than they flatter themselves. Especially Birch and Madgicx.
- **No banned phrases.** Per content-writing-rules §1.6.
- **Self-#1 honest framing required.** Don't try fake-modest framing — own the slot-#1 conflict, point at slot #3 (Birch) as bias-check peer.
- **Don't touch existing `/blog/facebook-ads-automation`.** It stays unindexed; we add a NEW URL. No edits to old article frontmatter or body.

---

## Open editorial choices the next chat will make

These are within content-creator's discretion (don't need Natalia approval):

- Exact phrasing of self-#1 disclosure (must own conflict; word choice is content-creator's)
- Per-tool H3 "Best for [job]" wording
- TL;DR section voice (founder voice, ~250 words)
- FAQ Q wording (6 questions planned in outline; final wording is content-creator's)
- Decision matrix exact phrasing
- Schema JSON exact structure (must include all fields content-writing-rules §5 requires)

These are NOT within content-creator's discretion (must match locked decisions):

- Slate ordering
- Editorial depth per slot
- Title (locked candidate #3)
- URL (locked)
- AdEspresso caveat (DROP — locked)
- Self-#1 reason (locked: "we use Scalemate for our own web + mobile funnels")

---

## Pipeline state expectations

When draft phase completes, the next chat:
1. Writes draft to `content/blog/best-facebook-ads-automation-tools.md`
2. Updates `seo-system/workflow/pipeline.md`:
   - §4 Approved for writing → remove `facebook-ads-automation-listicle-rework` line
   - §5 Pending Natalia review (draft) → add summary line with draft path + word count + key features
3. Single commit: `content-creator: facebook-ads-automation-listicle-rework full draft`
4. Push to `main`

After that, Natalia reviews the draft, then approves to §6 Approved for QA → next agent (qa) runs.
