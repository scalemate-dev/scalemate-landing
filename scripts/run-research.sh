#!/bin/bash
# Створює codespace, дає Claude задачу обробити перший item з SEO pipeline.
# Уся логіка — в seo-system/. Codespace живе після завершення (idle 30хв auto-stop).
set -euo pipefail

REPO="scalemate-dev/scalemate-landing"
NAME=$(gh codespace create -R "$REPO" -b feat/codespace-setup -m basicLinux32gb --display-name "seo-$(date +%s)")

until [ "$(gh codespace view -c "$NAME" --json state -q .state)" = "Available" ]; do sleep 20; done

gh codespace ssh -c "$NAME" -- "bash -l -c 'cd /workspaces/scalemate-landing && claude --print --verbose --output-format stream-json --permission-mode bypassPermissions --model claude-opus-4-7 --max-thinking-tokens 32000 \"Обробі перший item з seo-system/workflow/pipeline.md (секція 1 New). Слідуй seo-system/agents/discovery.md. Закомить і запушь у поточну гілку. На помилку — повний trace, не пушити.\"'"

echo "Codespace: $NAME"
