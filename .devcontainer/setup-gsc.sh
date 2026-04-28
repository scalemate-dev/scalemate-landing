#!/bin/bash
# Setup GSC auth in Codespace from Codespaces secrets
# Runs after devcontainer creation

set -e

# Resolve absolute path so commands work regardless of cwd
DEVCONTAINER_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_DIR="$DEVCONTAINER_DIR/../seo-system/skills/seo-ops"

# Create symlink so ~/.claude/skills/seo-ops/ works in codespace (same as local Mac)
mkdir -p ~/.claude/skills
if [ ! -e ~/.claude/skills/seo-ops ]; then
  ln -sf "$(cd "$SKILL_DIR" && pwd)" ~/.claude/skills/seo-ops
  echo "✅ Symlink created: ~/.claude/skills/seo-ops → $SKILL_DIR"
fi

# Recreate .gsc-token.json from base64-encoded Codespace secret
if [ -n "$GSC_TOKEN_JSON" ]; then
  echo "$GSC_TOKEN_JSON" | base64 -d > "$SKILL_DIR/.gsc-token.json"
  chmod 600 "$SKILL_DIR/.gsc-token.json"
  echo "✅ GSC token restored from Codespace secret"
else
  echo "⚠️  GSC_TOKEN_JSON secret not set — GSC auth not configured"
  echo "   To set: gh codespace secret set GSC_TOKEN_JSON < <(base64 < ~/.claude/skills/seo-ops/.gsc-token.json)"
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
