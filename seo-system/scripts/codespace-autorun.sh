#!/usr/bin/env bash
# Auto-run after postCreateCommand. If on seo/<slug> branch and a user prompt
# file exists, run it in headless Claude. The prompt is whatever the user wrote
# (any agent, any combination of steps) — no hardcoded workflow here.
#
# Convention: put the prompt at seo-system/topics/<slug>/prompt.md on the
# seo/<slug> branch before creating the codespace.

set -euo pipefail
cd /workspaces/scalemate-landing

BRANCH="$(git branch --show-current 2>/dev/null || true)"
if [[ ! "$BRANCH" =~ ^seo/(.+)$ ]]; then
  echo "[seo-autorun] branch '$BRANCH' is not seo/*, skipping"
  exit 0
fi
SLUG="${BASH_REMATCH[1]}"
PROMPT_FILE="seo-system/topics/$SLUG/prompt.md"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "[seo-autorun] $PROMPT_FILE not found, skipping"
  exit 0
fi

if ! command -v claude >/dev/null 2>&1; then
  echo "[seo-autorun] ERROR: claude CLI not found in PATH"
  exit 1
fi

mkdir -p /tmp/seo-autorun
LOG="/tmp/seo-autorun/$SLUG.log"

echo "[seo-autorun] running prompt from $PROMPT_FILE for branch=$BRANCH (log: $LOG)"
nohup claude --print --permission-mode bypassPermissions "$(cat "$PROMPT_FILE")" > "$LOG" 2>&1 &
echo "[seo-autorun] PID=$!"
