---
description: Start an SEO v1 agent run — creates topic dir + prompt.md + suggests codespace launch. Usage `/sm:run <agent> [slug]` where agent = seo-analysis | discovery | content-creator | qa | review
---

You are the launcher for SEO v1 agents. User wants to start an agent run with input:

$ARGUMENTS

## Step 1 — Parse args (interactive if missing)

Format: `<agent> [slug]`

**If `$ARGUMENTS` is empty** — call `AskUserQuestion` with:
- header: "Agent"
- question: "Which agent to run?"
- multiSelect: false
- options: одна на кожен агент:
  - `seo-analysis` — "Weekly SEO analysis (recon over GSC + Ahrefs + Trends)"
  - `discovery` — "Per-topic validation → Topic Brief"
  - `content-creator` — "Per-topic draft writing from approved brief"
  - `qa` — "Per-topic 4-stage QA on draft"
  - `review` — "Post-publish tracking of deployed items"

**If user picked a per-topic agent (discovery/content-creator/qa) and slug is missing** — call `AskUserQuestion` again:
- header: "Topic slug"
- question: "Which topic? (kebab-case slug, must match `output/topics/<slug>/`)"
- multiSelect: false
- options: list existing slugs from `seo-system-v1/output/topics/*` (читай через `Bash: ls`) + опція "_new_" для нового (тоді ask follow-up free-text)

**Auto-slug rules** (агенти що не потребують topic):
- `seo-analysis` — `seo-analysis-YYYY-MM-DD` (today's date)
- `review` — `review-YYYY-MM-DD`

## Step 2 — Validate

- Confirm agent name is one of: `seo-analysis`, `discovery`, `content-creator`, `qa`, `review`.
- For per-topic agents (discovery/content-creator/qa): check `seo-system-v1/output/topics/<slug>/` and confirm the expected input file exists:
  - discovery: prompt typically created from scratch — no prerequisite
  - content-creator: needs `brief.md` (otherwise the agent can't run)
  - qa: needs `draft.md`
- Read [seo-system-v1/workflow/pipeline.md](../../seo-system-v1/workflow/pipeline.md) to verify slug isn't already in conflicting state (e.g. don't start discovery if item already past `2. Discovery in progress`).

If validation fails → tell user what's missing, stop.

## Step 3 — Create topic dir + prompt.md

Create `seo-system-v1/output/topics/<slug>/` if missing.

Write `prompt.md` with this template (replace `<AGENT_DIR>` and `<INPUT_DESC>`):

```markdown
# Run <agent> agent for slug: <slug>

## Instructions

You are running the **<agent>** agent. Read its full spec before starting:

1. Open [`seo-system-v1/agents/<AGENT_DIR>/README.md`](../../../agents/<AGENT_DIR>/README.md) and follow run order
2. Each numbered step file (`00-...md`, `01-...md`, ...) describes one workflow step — execute them in order
3. Respect all constraints: data-first, existing-first, не вигадувати

## Input

<INPUT_DESC>

## Output

Per agent's `06-...` / `10-...` / `11-...` step (varies by agent). Update [pipeline.md](../../../workflow/pipeline.md) state correctly.

## When done

1. Commit changes: artifacts under `seo-system-v1/output/topics/<slug>/` + pipeline.md + scorecard.md (if updated)
2. Push branch
3. Open PR against main with title: `SEO: <agent> <slug>`
```

Mapping:
- `seo-analysis` → `<AGENT_DIR>` = `seo-analysis`, `<INPUT_DESC>` = "Weekly run, no per-topic input. Use today's date for output."
- `discovery <slug>` → `<AGENT_DIR>` = `discovery`, `<INPUT_DESC>` = "Topic slug: `<slug>`. Read latest brief in `output/seo-analysis/` for context if available; otherwise proceed as ad-hoc."
- `content-creator <slug>` → `<AGENT_DIR>` = `content-creator`, `<INPUT_DESC>` = "Brief at `seo-system-v1/output/topics/<slug>/brief.md`. Trust the brief — don't re-decide content type / track."
- `qa <slug>` → `<AGENT_DIR>` = `qa`, `<INPUT_DESC>` = "Draft at `seo-system-v1/output/topics/<slug>/draft.md`. Brief at `<slug>/brief.md` available for cross-check."
- `review` → `<AGENT_DIR>` = `review`, `<INPUT_DESC>` = "No per-topic input. Read all deployed items from pipeline.md `8. Published`."

## Step 4 — Suggest next steps

Output exactly:

```
✅ Created seo-system-v1/output/topics/<slug>/prompt.md

To run locally (current Claude Code session):
  Open the prompt and tell me to "follow the agent spec" — I'll execute step by step.

To run headless in codespace:
  git checkout -b seo/<slug>
  git add seo-system-v1/output/topics/<slug>/
  git commit -m "SEO: start <agent> <slug>"
  git push -u origin seo/<slug>
  gh codespace create --branch seo/<slug>  # or restart existing codespace

The codespace postStartCommand fires seo-system-v1/scripts/codespace-autorun.sh
which finds the prompt and runs claude headless.
```

## Don't do

- Don't actually execute the agent (just create the prompt file)
- Don't run git commands automatically — output suggestions only, user decides
- Don't push to remote without confirmation
- Don't modify pipeline.md — that's the agent's job
