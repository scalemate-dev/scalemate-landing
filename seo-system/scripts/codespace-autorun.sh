#!/usr/bin/env bash
# Auto-run after postCreateCommand. If on seo/<slug> branch and brief is missing,
# launch discovery agent in headless Claude — no manual SSH needed.

set -euo pipefail
cd /workspaces/scalemate-landing

BRANCH="$(git branch --show-current 2>/dev/null || true)"
if [[ ! "$BRANCH" =~ ^seo/(.+)$ ]]; then
  echo "[seo-autorun] branch '$BRANCH' is not seo/*, skipping"
  exit 0
fi
SLUG="${BASH_REMATCH[1]}"
BRIEF="seo-system/topics/$SLUG/brief.md"

if [[ -f "$BRIEF" ]]; then
  echo "[seo-autorun] $BRIEF already exists, skipping discovery"
  exit 0
fi

if ! command -v claude >/dev/null 2>&1; then
  echo "[seo-autorun] ERROR: claude CLI not found in PATH"
  exit 1
fi

EXTRA_CONTEXT=""
if [[ -f "seo-system/topics/$SLUG/topic.md" ]]; then
  EXTRA_CONTEXT=" Additional topic context (read seo-system/topics/$SLUG/topic.md):
$(cat "seo-system/topics/$SLUG/topic.md")"
fi

mkdir -p /tmp/seo-autorun
LOG="/tmp/seo-autorun/$SLUG.log"

PROMPT="Read seo-system/agents/discovery.md and execute that workflow end-to-end for topic slug: $SLUG. Interpret the slug as the primary keyword/topic.${EXTRA_CONTEXT}

Required output:
1. Save Topic Brief to $BRIEF (full format from discovery.md Step 8).
2. Update seo-system/workflow/pipeline.md per Step 10 — add item to section '3. Pending Natalia review (brief)' with artifact path and agent-finished date.
3. git add the new/changed files, git commit -m 'discovery: $SLUG brief', git push origin $BRANCH.

Do not stop for confirmation — run autonomously. If a data source is unavailable, write 'insufficient data' in that section and continue."

echo "[seo-autorun] launching discovery for slug=$SLUG (log: $LOG)"
nohup claude --print --permission-mode bypassPermissions "$PROMPT" > "$LOG" 2>&1 &
echo "[seo-autorun] discovery PID=$!"
