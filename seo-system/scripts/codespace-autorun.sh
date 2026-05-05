#!/usr/bin/env bash
# Auto-run on every codespace start (postStartCommand). If on a seo/<slug>
# branch and a user prompt file exists, run it in headless Claude.
#
# Why postStartCommand (not postCreateCommand): postCreateCommand runs ONCE
# at codespace creation. If the codespace stops (idle timeout, manual stop)
# before the agent finishes, /tmp is wiped and on next start nothing
# re-launches. postStartCommand fires on every start, so a stopped codespace
# resumes the prompt automatically — gated by an idempotency sentinel.
#
# Convention: put the prompt at seo-system/topics/<slug>/prompt.md on the
# seo/<slug> branch before creating the codespace.
#
# Idempotency:
#   - If .autorun.done exists in the topic dir → skip (delete it to re-run).
#   - If a previous claude process is still alive (PID in .autorun.pid) → skip.
#   - Otherwise → launch claude with nohup, log to topic dir (survives stop).

set -euo pipefail
cd /workspaces/scalemate-landing

BRANCH="$(git branch --show-current 2>/dev/null || true)"
if [[ ! "$BRANCH" =~ ^seo/(.+)$ ]]; then
  echo "[seo-autorun] branch '$BRANCH' is not seo/*, skipping"
  exit 0
fi
SLUG="${BASH_REMATCH[1]}"
TOPIC_DIR="seo-system/topics/$SLUG"
PROMPT_FILE="$TOPIC_DIR/prompt.md"
LOG="$TOPIC_DIR/.autorun.log"
PIDFILE="$TOPIC_DIR/.autorun.pid"
DONE="$TOPIC_DIR/.autorun.done"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "[seo-autorun] $PROMPT_FILE not found, skipping"
  exit 0
fi

if [[ -f "$DONE" ]]; then
  echo "[seo-autorun] $DONE exists — already completed. Delete it to re-run."
  exit 0
fi

if [[ -f "$PIDFILE" ]] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "[seo-autorun] previous run still alive (PID $(cat "$PIDFILE")), skipping"
  exit 0
fi
rm -f "$PIDFILE"

if ! command -v claude >/dev/null 2>&1; then
  echo "[seo-autorun] ERROR: claude CLI not found in PATH"
  exit 1
fi

mkdir -p "$TOPIC_DIR"
{
  echo ""
  echo "===== [seo-autorun] $(date -u +%FT%TZ) start (branch=$BRANCH) ====="
} >> "$LOG"

# Wrap claude so we can mark .autorun.done on success and clean PIDFILE.
# Use `bash -lc` (login shell) so codespace secrets like CLAUDE_CODE_OAUTH_TOKEN
# (injected via /etc/profile.d/) are loaded — postStartCommand runs in a
# non-login shell where those env vars are absent, which makes claude exit
# immediately with "Not logged in".
nohup bash -lc "
  set -o pipefail
  claude --print --permission-mode bypassPermissions \"\$(cat '$PROMPT_FILE')\" >> '$LOG' 2>&1
  status=\$?
  echo \"===== [seo-autorun] \$(date -u +%FT%TZ) exit=\$status =====\" >> '$LOG'
  if [[ \$status -eq 0 ]]; then
    touch '$DONE'
  fi
  rm -f '$PIDFILE'
" >/dev/null 2>&1 &

echo $! > "$PIDFILE"
echo "[seo-autorun] launched claude PID=$(cat "$PIDFILE"), log: $LOG"
