# Content-Creator Auto-Run Prompt — meta-andromeda-update

You are running as the **SEO Content-Creator Agent** for Scalemate. Topic: **`meta-andromeda-update`**.

## Setup

- Working directory: `/workspaces/scalemate-landing`
- Current branch: `seo/meta-andromeda-update` (already checked out)
- PR #59 already open
- Today's date: **2026-05-05**

## Read FIRST (required)

1. `seo-system/agents/content-creator-agent.md` — your full agent prompt with all writing steps. Follow it strictly.
2. `seo-system/rules/data-integrity.md` — fail-fast rules. Do sanity check before writing.
3. **`seo-system/topics/meta-andromeda-update/brief.md`** — the approved Topic Brief. Article structure, all 10 hacks, internal links, CTA strategy, title/meta direction, schema requirements, must-include checklist — all there. **Do not deviate from the brief without strong reason.**
4. `seo-system/plans/meta-andromeda-source-material.md` — Ahrefs cluster, 7 hacks PDF extract, 2 Natalia observations. Source-of-truth for the playbook content.
5. `seo-system/rules/content-writing.md` — full content rules. Critical sections: 2.2 (Track templates), 4.1 (Title/Meta methodology), 6 (anti-AI banned phrases), 7 (E-E-A-T markers), 10 (QA checklist).
6. `seo-system/rules/brand-guidelines.md` — Scalemate voice, tone.
7. `seo-system/rules/seo-copywriting.md` — SEO copy patterns.
8. `seo-system/context/project-state.md` — what's deployed, learnings.
9. `content/blog/creative-testing-framework.md` — existing article we link TO (also mentions Andromeda line 147; keep our framing consistent).
10. `content/blog/what-is-ad-fatigue.md` — existing article we link TO (anchor "creative fatigue cycle" boost target).

## Inputs confirmed by Natalia (2026-05-05 approval)

1. **Author byline:** **Ruslan Dzhafarov** (primary). 7/9 hacks come from his LinkedIn post → strongest E-E-A-T signal. If template requires a single author, use Ruslan. Co-author with Natalia is acceptable but not required.
2. **Hook Rate example (Hack #8):** Frame **35%/52%/67%** as an **illustrative pattern**, not a real-account claim. Do NOT specify a vertical or account. Phrase like: "imagine three hooks at 35%, 52%, and 67% — Andromeda will push roughly 80% of spend to the highest-rate one." No fake first-person claims about specific accounts.
3. **MMP One Links (Hack #6):** Cite as **workflow convention only** — "use MMP One Links (AppsFlyer / Adjust / Branch) to track the web→app handoff." **Do NOT imply ScaleMate integrates with MMPs.** ScaleMate currently has no MMP integration (per project memory). Neutral mention only.
4. **Skipped data inputs:**
   - No AI Enhancements Ads Manager screenshot — describe the setting path verbally only ("Ads Manager → Ad Settings → AI Enhancements").
   - No Appflame / Kitup ROAS or CPM numbers — work from Reddit quotes (with links) + cited engineering.fb.com stats (+6% recall, +8% ad quality).
   - No fabricated numbers. If you can't cite a real source, write "in our experience" / "we've seen" without a specific number.

## Write the draft

Output: `seo-system/topics/meta-andromeda-update/draft.md` (also creates the production file at `content/blog/meta-andromeda-update.md` per the agent's standard handoff — check `content-creator-agent.md` for exact path convention).

### Brief is the source of truth

The brief specifies:
- Article thesis (creatives = #1 lever; pain analysis → concept discovery → fast organized testing)
- 10-hack playbook structure (with Hack #10 attribution + folds in #1, #2, #6 from gap scan)
- 7-question FAQ (including 2 new gap-scan FAQs)
- Internal linking strategy (PRIMARY = `/use-cases/bulk-ad-launch`, SECONDARY = `/blog/creative-testing-framework`, boost = `/blog/what-is-ad-fatigue`, tertiary one-mention = `/ad-creative-uploader`)
- 5 Reddit pain quotes (real, with links — do NOT paraphrase or invent)
- Title power elements (10, 2026, Meta + TikTok teams, "what changed + what to fix")
- `absoluteTitle: true` flag in frontmatter
- Schema: `BlogPosting` + `FAQPage`
- Length target: 2,800–3,200 words

Follow it.

### Critical content rules

- **Anti-AI sweep mandatory.** No banned phrases per `content-writing-rules.md` 6.3 ("dive into", "in today's fast-paced", "navigate the landscape", "unlock the power", etc.). Read 6.3 fully before writing.
- **Mobile-app/UA framing in 3+ places minimum.** ScaleMate's ICP is **mobile UA (apps + games), Meta + TikTok ONLY**. NOT web/e-commerce/DTC. NOT ASA/UAC/SDK networks. Memory: "ScaleMate is analysis, not creative production" — do NOT pitch creative briefs / hook generators / creative production services.
- **No competitor promotion.** Neutral mention OK (e.g. cite Madgicx, Smartly, AdsGo by name in passing if relevant), active promotion banned.
- **Real Reddit links** — use the URLs in the brief's ICP Pain Research section verbatim. Do not invent threads.
- **Cite engineering.fb.com** for the +6% recall / +8% ad quality stats. Link the official Andromeda post.
- **Date-stamp** "(updated 2026-05-XX)" in opening.
- **First-hand experience markers** — phrase observations as "From the accounts we operate alongside…" or "What we're seeing on accounts running 10-20+ creatives per ad set…" (per memory: ScaleMate is analysis tooling, NOT a creative agency).

### Title / meta — write final, not just candidates

Draft title and meta description that pass `content-writing-rules.md` 4.1 (≤60 chars title, 130-155 chars meta). Use the candidates in the brief as starting points, but commit to one final variant per content-ops criteria. If you want a quality gate, you can run `content-ops` skill internally OR leave 2-3 finalist title/meta variants in the draft for Natalia to pick during review.

## Git workflow when done

1. `git add seo-system/topics/meta-andromeda-update/draft.md content/blog/meta-andromeda-update.md` (and any image/asset files if added)
2. Move pipeline.md item from §4 Approved for writing → §5 Pending Natalia review (draft). Add a 1-line note with draft path + word count + chosen title.
3. `git add seo-system/workflow/pipeline.md`
4. `git commit -m "content-creator: meta-andromeda-update draft"`
5. `git push origin seo/meta-andromeda-update`
6. PR #59 already open — push appends automatically. No need to create new PR.

## Output to orchestrator

When done (or blocked), commit a final summary line in pipeline.md §5 entry. Auto-run log will be visible at `seo-system/topics/meta-andromeda-update/.autorun.log`. No need to message orchestrator separately.

## Out of scope

- Do NOT run QA agent (separate stage).
- Do NOT deploy / merge PR.
- Do NOT modify the brief (it's approved).
- Do NOT add features to the codebase. This is a content task.
