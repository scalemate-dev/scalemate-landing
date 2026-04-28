#!/bin/bash
# Статус SEO codespaces — яка гілка/тема в кожному і що в pipeline.md
# (показує тільки секції з items, порожні скіпає).
set -euo pipefail

REPO="scalemate-dev/scalemate-landing"

gh codespace list -R "$REPO" --json name,displayName,state,gitStatus \
  -q '.[] | select(.displayName | startswith("seo-")) | "\(.name)\t\(.state)\t\(.gitStatus.ref)"' | \
while IFS=$'\t' read -r name state branch; do
  echo "════ $name [$state] $branch"
  if [ "$state" = "Available" ]; then
    gh codespace ssh -c "$name" -- "awk '/^## /{s=\$0;p=0;next} s && /^- /{if(!p){print s;p=1}print \"  \"\$0}' /workspaces/scalemate-landing/seo-system/workflow/pipeline.md" 2>/dev/null || echo "  (read failed)"
  fi
  echo
done
