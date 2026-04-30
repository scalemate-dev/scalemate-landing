#!/bin/bash
# Setup Codespace environment for SEO system:
#  - Restore GSC OAuth token + Google client_secret.json from Codespace secrets
#
# Skills live in project-level .claude/skills/ and are auto-discovered by
# Claude Code (no symlinks needed — same path local + codespace).

set -e

DEVCONTAINER_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_DIR="$DEVCONTAINER_DIR/../.claude/skills/seo-ops"

# Recreate .gsc-token.json from base64-encoded Codespace secret
if [ -n "$GSC_TOKEN_JSON" ]; then
  echo "$GSC_TOKEN_JSON" | base64 -d > "$SKILL_DIR/.gsc-token.json"
  chmod 600 "$SKILL_DIR/.gsc-token.json"
  echo "✅ GSC token restored from Codespace secret"
else
  echo "⚠️  GSC_TOKEN_JSON secret not set — GSC auth not configured"
  echo "   To set: gh codespace secret set GSC_TOKEN_JSON < <(base64 < .claude/skills/seo-ops/.gsc-token.json)"
fi

# Recreate client_secret.json from Codespace secrets (Client ID + Secret)
if [ -n "$GOOGLE_CLIENT_ID" ] && [ -n "$GOOGLE_CLIENT_SECRET" ]; then
  cat > "$SKILL_DIR/client_secret.json" <<EOF
{
  "client_id": "$GOOGLE_CLIENT_ID",
  "client_secret": "$GOOGLE_CLIENT_SECRET"
}
EOF
  chmod 600 "$SKILL_DIR/client_secret.json"
  echo "✅ Google OAuth client_secret.json restored"
fi
