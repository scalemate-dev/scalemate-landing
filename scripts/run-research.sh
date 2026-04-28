#!/bin/bash
# Запускається всередині codespace. Дає Claude задачу обробити
# перший item з seo-system/workflow/pipeline.md.
set -euo pipefail

claude --print --verbose --output-format stream-json --permission-mode bypassPermissions --model claude-opus-4-7 --max-thinking-tokens 32000 "Обробі перший item з seo-system/workflow/pipeline.md (секція 1 New). Слідуй seo-system/agents/discovery.md. Закомить і запушь у поточну гілку. На помилку — повний trace, не пушити."
