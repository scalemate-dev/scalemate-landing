#!/usr/bin/env bash
# SSH-driven follow-up runner — invoked by /sm:run from the local Claude session
# when the codespace already exists for our branch.
#
# Bypasses codespace-autorun.sh (which only handles the first run after VM start).
#
# Pulls latest, refuses if a previous claude process is alive, otherwise launches
# claude headless detached with the topic's prompt.md.
#
# Usage (from local /sm:run, via SSH):
#   gh codespace ssh -c <name> --no-tty -- \
#     'cd /workspaces/scalemate-landing && git pull && bash seo-system-v1/scripts/codespace-run-followup.sh <slug>'

set -euo pipefail

SLUG="${1:-}"
if [[ -z "$SLUG" ]]; then
  echo "[sm:run-followup] missing slug arg" >&2
  exit 2
fi

cd /workspaces/scalemate-landing

TOPIC_DIR="seo-system-v1/output/topics/$SLUG"
PROMPT_FILE="$TOPIC_DIR/prompt.md"
LOG="$TOPIC_DIR/.autorun.log"
PIDFILE="$TOPIC_DIR/.autorun.pid"
DONE="$TOPIC_DIR/.autorun.done"

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "[sm:run-followup] $PROMPT_FILE not found — pull first" >&2
  exit 2
fi

# Refuse if a previous claude process is still alive (overlap guard)
if [[ -f "$PIDFILE" ]] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
  echo "[sm:run-followup] PID $(cat "$PIDFILE") still alive, refusing" >&2
  exit 1
fi
rm -f "$PIDFILE" "$DONE"

if ! command -v claude >/dev/null 2>&1; then
  echo "[sm:run-followup] ERROR: claude CLI not found in PATH" >&2
  exit 1
fi

mkdir -p "$TOPIC_DIR"
{
  echo ""
  echo "===== [sm:run-followup] $(date -u +%FT%TZ) start (slug=$SLUG) ====="
} >> "$LOG"

# Detach claude so SSH session can return immediately
nohup bash -lc "
  set -o pipefail
  claude --print --permission-mode bypassPermissions \"\$(cat '$PROMPT_FILE')\" >> '$LOG' 2>&1
  status=\$?
  echo \"===== [sm:run-followup] \$(date -u +%FT%TZ) exit=\$status =====\" >> '$LOG'
  if [[ \$status -eq 0 ]]; then
    touch '$DONE'
  fi
  rm -f '$PIDFILE'
" >/dev/null 2>&1 &

echo $! > "$PIDFILE"
echo "[sm:run-followup] launched claude PID=$(cat "$PIDFILE"), log: $LOG"
