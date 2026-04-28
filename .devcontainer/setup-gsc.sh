#!/bin/bash
# Setup Codespace environment for SEO system:
#  - Symlink all bundled skills (~/.claude/skills/X) so agent prompts work unchanged
#  - Restore GSC OAuth token + Google client_secret.json from Codespace secrets
# Runs once after devcontainer creation.

set -e

# Resolve absolute path so commands work regardless of cwd
DEVCONTAINER_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_BUNDLE_DIR="$DEVCONTAINER_DIR/../seo-system/skills"
SKILL_DIR="$SKILLS_BUNDLE_DIR/seo-ops"

# Symlink every skill bundled in seo-system/skills/* into ~/.claude/skills/
# so agent prompts that reference ~/.claude/skills/X work the same as on Mac.
mkdir -p ~/.claude/skills
for skill_path in "$SKILLS_BUNDLE_DIR"/*; do
  [ -d "$skill_path" ] || continue
  skill_name="$(basename "$skill_path")"
  target="$HOME/.claude/skills/$skill_name"
  if [ -e "$target" ] || [ -L "$target" ]; then
    rm -rf "$target"
  fi
  ln -sf "$(cd "$skill_path" && pwd)" "$target"
  echo "✅ Symlink: ~/.claude/skills/$skill_name → seo-system/skills/$skill_name"
done

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
