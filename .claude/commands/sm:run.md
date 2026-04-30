---
description: Start an SEO v1 agent run — local or remote (codespace headless). Usage `/sm:run <agent> [slug]`
---

You are the launcher for SEO v1 agents. Default mode is **remote** (codespace headless) — that's the main use case.

User input: $ARGUMENTS

**Parse `$ARGUMENTS` as `<agent> [slug]`** (whitespace-separated). If `agent` is present → skip Step 1. If `slug` is present → skip Step 2. Only ask for what's missing.

## Step 1 — Pick agent (only if missing from $ARGUMENTS)

Call `AskUserQuestion`:
- header: "Agent"
- question: "Which agent to run?"
- multiSelect: false
- options:
  - `seo-analysis` — "Weekly SEO analysis (GSC + Ahrefs + Trends)"
  - `discovery` — "Per-topic validation → Topic Brief"
  - `content-creator` — "Per-topic draft writing from approved brief"
  - `qa` — "Per-topic 4-stage QA on draft"
  - `review` — "Post-publish tracking of deployed items"

## Step 2 — Pick slug (only if missing from $ARGUMENTS, and agent is per-topic)

For `discovery` / `content-creator` / `qa` without slug → `AskUserQuestion`:
- header: "Topic slug"
- question: "Which topic?"
- multiSelect: false
- options: existing slugs from `ls seo-system-v1/output/topics/` + `_new_` (on `_new_` ask follow-up free-text input in chat, validate `^[a-z0-9-]+$`, re-ask if invalid)

Auto-slug:
- `seo-analysis` → `seo-analysis-YYYY-MM-DD`
- `review` → `review-YYYY-MM-DD`

## Step 3 — Validate

### Agent name
∈ {seo-analysis, discovery, content-creator, qa, review} — fail otherwise.

### Per-topic prerequisite files
- `discovery` — none (prompt is created from scratch)
- `content-creator` — `seo-system-v1/output/topics/<slug>/brief.md` must exist
- `qa` — `seo-system-v1/output/topics/<slug>/draft.md` must exist

### Pipeline state — slug must be in allowed section

Read `seo-system-v1/workflow/pipeline.md`. For per-topic agents:

| Agent | Allowed states for slug | Forbidden (fail validation) |
|---|---|---|
| `discovery` | absent in pipeline.md, OR in `1. New`, OR in `2. Discovery in progress` | sections 3-9 (already past discovery) |
| `content-creator` | in `4. Approved for writing` | other (no approved brief yet, or already past writing) |
| `qa` | in `6. Approved for QA` | other (no approved draft yet, or already past QA) |
| `seo-analysis` | n/a (not slug-based, weekly run) | — |
| `review` | n/a (not slug-based, runs across all `8. Published`) | — |

If validation fails → print specific reason ("slug X is in section Y, expected Z") and stop.

## Step 4 — Create / overwrite prompt.md

Create `seo-system-v1/output/topics/<slug>/prompt.md` (mkdir -p if needed). **Always overwrite** if it exists — every `/sm:run` invocation is a fresh launch. Follow-ups (e.g. discovery done → `/sm:run content-creator <slug>` for same topic) work by overwriting prompt.md and letting Step 7e re-fire claude in the codespace.

Template:

```markdown
# Run <agent> agent for slug: <slug>

## Instructions

You are running the **<agent>** agent. Read its full spec before starting:

1. Open `seo-system-v1/agents/<AGENT_DIR>/README.md` and follow run order
2. Each numbered step file (`00-...md`, `01-...md`, ...) describes one workflow step — execute them in order
3. Respect all constraints: data-first, existing-first, never invent data

## Input

<INPUT_DESC>

## Output

Per the agent's last step file. Update `seo-system-v1/workflow/pipeline.md` state correctly.

## When done

1. Commit artifacts: `seo-system-v1/output/topics/<slug>/` + `seo-system-v1/workflow/{pipeline,scorecard}.md`
2. Push current branch
3. PR — **only create if missing**, never duplicate:
   ```bash
   if [ -z "$(gh pr list --head "seo/<slug>" --json number --jq '.[0].number')" ]; then
     gh pr create --title "SEO: <slug>" --body "Pipeline branch for topic <slug>. Each agent (discovery → content-creator → qa) pushes commits here. Merge only after QA pass + deploy approval."
   fi
   ```
   Follow-ups just push; the existing PR auto-updates with new commits. No `gh pr comment` needed.
```

Mapping `<AGENT_DIR>` / `<INPUT_DESC>`:
- `seo-analysis` → `seo-analysis`, "Weekly run, no per-topic input. Use today's date for output."
- `discovery <slug>` → `discovery`, "Topic slug: `<slug>`. Read latest brief in `output/seo-analysis/` for context if available; otherwise proceed as ad-hoc."
- `content-creator <slug>` → `content-creator`, "Brief at `seo-system-v1/output/topics/<slug>/brief.md`. Trust the brief — don't re-decide content type / track."
- `qa <slug>` → `qa`, "Draft at `seo-system-v1/output/topics/<slug>/draft.md`. Brief at `brief.md` available for cross-check."
- `review` → `review`, "No per-topic input. Read all deployed items from pipeline.md `8. Published`."

## Step 5 — Pick run mode

`AskUserQuestion`:
- header: "Run mode"
- question: "Run agent locally or in codespace?"
- multiSelect: false
- options:
  - `remote` — "Push to codespace, run headless (default — main use case)"
  - `local` — "Run in current Claude Code session (interactive, with checkpoints)"

## Step 6 — If `local`

Output:
```
✅ Created seo-system-v1/output/topics/<slug>/prompt.md

To run locally — say:
  "Follow seo-system-v1/agents/<AGENT_DIR>/README.md and execute step-by-step for slug <slug>"

I'll then walk through each step file, asking for approve at checkpoints.
```

Stop here for local mode.

## Step 7 — If `remote` — execute the launch

> Goal: minimal user input. The 3 questions above (agent, topic, mode) are the only ones. Everything below is automated, no confirmations.

### 7a. Handle dirty git state

```bash
git status --short
```

If there are uncommitted changes other than the new `prompt.md` → `git stash push -u -m "auto-stash before sm:run <slug>"`. One line to the user: "Stashed N files. Recover with `git stash pop` after the run."

### 7b. Branch

Target: `seo/<slug>`.

- If current branch is `seo/<slug>` → no-op
- Else if branch exists locally (`git branch --list seo/<slug>`) → `git checkout seo/<slug>`
- Else → `git checkout -b seo/<slug>` from current branch

### 7c. Commit prompt.md

```bash
git add seo-system-v1/output/topics/<slug>/prompt.md
git commit -m "seo: start <agent> <slug>"
```

No `Co-Authored-By` (this is a startup commit, not agent work).

### 7d. Push

```bash
git push -u origin seo/<slug>
```

No confirmation — just push.

### 7e. Codespace — first run vs follow-up

Get state:
```bash
gh codespace list --json name,state,gitStatus,repository
```

Filter to this repo. Decision tree (all automatic):

#### A) First run for this branch — let `codespace-autorun.sh` handle it

Triggers: **No codespace for this repo** OR **codespace exists on a different branch**.

```bash
gh codespace create --branch seo/<slug> --idle-timeout 60m
```

The new codespace's `postStartCommand` fires `seo-system-v1/scripts/codespace-autorun.sh`, which reads `prompt.md` and launches claude headless. Capture name. Done.

#### B) Follow-up — codespace exists on our branch

Triggers: codespace exists on `seo/<slug>` (running OR stopped).

`codespace-autorun.sh` is idempotent (`.autorun.done` sentinel) and won't re-fire claude on a restart. So we **bypass autorun and SSH in directly** to launch a fresh claude with the new prompt.

If stopped → start first:
```bash
gh codespace start --codespace <name>
```

Then SSH + run helper script (which pulls latest, refuses on overlap, launches claude detached):

```bash
gh codespace ssh -c <name> --no-tty -- 'cd /workspaces/scalemate-landing && git pull && bash seo-system-v1/scripts/codespace-run-followup.sh <slug>'
```

**Run via `Bash` with `run_in_background: true`** — SSH connects, helper launches claude detached (`nohup ... &`), helper exits immediately with the new PID. Local chat doesn't block.

If the helper exits non-zero (overlap with previous run still alive), tell the user one line: "Previous claude in codespace still running. Wait or kill it first via `gh codespace ssh -c <name>`."

#### Don't wait for the codespace to become ready

`gh codespace create` / `start` return when VM is provisioned (a few seconds), not when fully ready. The helper script handles its own readiness (it pulls then runs claude). Exit the launcher right after the SSH call returns.

### 7f. Final output

Print and exit. Do not tail logs, do not ssh again, do not block.

```
✅ Topic prompt: seo-system-v1/output/topics/<slug>/prompt.md
✅ Branch: seo/<slug> pushed
✅ Codespace: <name> [created | started | already running]
✅ Launch: <first-run via autorun | follow-up via SSH>

Agent now runs headless inside the codespace. When done:
  - artifacts committed + pushed
  - PR opened with title "SEO: <agent> <slug>"
  - .autorun.done sentinel in topic dir

If you want to monitor, ask me explicitly (e.g. "monitor <slug>" / "tail logs"):
  gh codespace logs <name> --follow
  gh codespace ssh <name> -- "tail -f /workspaces/scalemate-landing/seo-system-v1/output/topics/<slug>/.autorun.log"
```

## Don't do

- Don't ask the user any questions beyond the 3 in Steps 1, 2, 5 (agent, topic, mode). Everything else is automated.
- Don't run `gh codespace logs` / `gh codespace ssh` / `tail -f` / any other waiting/monitoring command after launch — they block the chat session. Output the commands as suggestions in 7f only. If the user later explicitly asks ("monitor", "tail logs", "show me what's happening"), then run via `Bash` with `run_in_background: true`, not foreground.
- Don't run `git reset` / `git checkout -- ` / other destructive commands — only safe forward operations.
- Don't execute the agent itself — that's the codespace autorun's job.
- Don't modify pipeline.md here — that's the agent's job inside the codespace.
