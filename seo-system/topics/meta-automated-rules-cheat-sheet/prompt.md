Run the **discovery** agent for topic **"Facebook (Meta) Automated Rules cheat sheet"**.

Slug: `meta-automated-rules-cheat-sheet`
Branch: `seo/meta-automated-rules-cheat-sheet` (already checked out)

## Context
- Format angle: **cheat sheet / quick reference** — table-style, scannable, condition→action pairs, ready-to-copy rule recipes. NOT a long-form guide.
- Parallel topic: there is already an in-progress topic `meta-automation-rules` (branch `seo/meta-automation-rules`) targeting general guide intent. Treat current topic as a **separate format** targeting "cheat sheet" / "templates" / "examples" SERP intent. **Cannibalization check is mandatory** — explicitly compare SERP top-10 of the two queries; if SERPs overlap heavily, recommend merging into one piece instead.
- ICP: UA Manager / media buyer running Facebook/Meta ads at scale, wants ready-to-paste rules they can drop into Ads Manager.

## Instructions
Follow the full workflow in `seo-system/agents/discovery.md` (steps 1–10):
1. Keyword validation via Ahrefs (primary + variations: "meta automated rules", "facebook automated rules examples", "facebook ads automated rules templates", "automated rules cheat sheet", "facebook ads rules best practices") + GSC (`sc-domain:scalemate.co`, contains "automated rules" / "automation rules").
2. SERP validation for each candidate keyword (intent must match cheat-sheet/reference, not generic guide).
3. Existing content check on scalemate.co.
4. SERP analysis top-10 — note format dominance (PDF? listicle? cheat sheet? guide?).
5. Intent classification + intent-separation check vs. parallel `meta-automation-rules` topic.
6. Competitive gap.
7. ICP pain research (Reddit r/PPC, r/FacebookAds — quotes about manual rule setup, time wasted, common mistakes).
8. Content type decision (likely listicle / resource / cheat-sheet template).
9. Title/Meta pre-work (Step 7 of discovery.md).
10. Generate brief at `seo-system/topics/meta-automated-rules-cheat-sheet/brief.md`.
11. Update `seo-system/workflow/pipeline.md` — add item under "3. Pending Natalia review (brief)" with `artifact: topics/meta-automated-rules-cheat-sheet/brief.md` and `agent-finished: <today>`.

## Git workflow (mandatory after artifact is written)
1. `git add seo-system/topics/meta-automated-rules-cheat-sheet/brief.md seo-system/workflow/pipeline.md`
2. `git commit -m "discovery: meta-automated-rules-cheat-sheet brief"`
3. `git push origin seo/meta-automated-rules-cheat-sheet`
4. Open PR if missing: `gh pr create --base main --head seo/meta-automated-rules-cheat-sheet --title "SEO: meta-automated-rules-cheat-sheet" --body "Topic: meta-automated-rules-cheat-sheet. See seo-system/workflow/pipeline.md for state."`

## Output
Brief at `seo-system/topics/meta-automated-rules-cheat-sheet/brief.md` following the exact template from discovery.md Step 8.
