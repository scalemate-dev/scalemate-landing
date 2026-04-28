#!/bin/bash
# Запускає codespace, прогоняє headless Claude по першому item з seo-system/workflow/pipeline.md,
# створює окрему гілку, коміт, push, PR. Codespace залишається жити (idle timeout 30 хв) для review.
#
# Usage:
#   bash scripts/run-research.sh
#
# Виводить URL PR'у або повний error trace якщо щось впало.

set -euo pipefail

REPO="scalemate-dev/scalemate-landing"
BASE_BRANCH="feat/codespace-setup"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
DISPLAY_NAME="seo-research-$TIMESTAMP"

echo "▸ Створюю codespace ($DISPLAY_NAME) з гілки $BASE_BRANCH..."
CODESPACE_NAME=$(gh codespace create -R "$REPO" -b "$BASE_BRANCH" -m basicLinux32gb --display-name "$DISPLAY_NAME")
echo "  ✓ Codespace: $CODESPACE_NAME"

echo "▸ Чекаю поки codespace провіжниться (постcreate command, ~3-5 хв)..."
until [ "$(gh codespace view -c "$CODESPACE_NAME" --json state -q .state 2>&1)" = "Available" ]; do
  sleep 20
  printf "."
done
echo
echo "  ✓ Available"

# Підготовка prompt для inner claude
PROMPT=$(cat <<'PROMPT_EOF'
Виконай дослідження по першому активному item з SEO pipeline.

Кроки:

1. Прочитай seo-system/workflow/pipeline.md
2. Знайди ПЕРШИЙ item у секції "## 1. New (потребує discovery)". Якщо порожньо — виведи "NO PENDING TASKS" і зупинись.
3. Витягни slug і metadata (primary-keyword, context).
4. Виконай discovery згідно з seo-system/agents/discovery.md:
   - Ahrefs через mcp__ahrefs__* tools (keywords-explorer, site-explorer, serp-overview, brand-radar)
   - GSC через `python3 seo-system/skills/seo-ops/gsc_client.py`
   - SERP top-10 аналіз
   - ICP pain research (WebSearch для Reddit, communities)
   - Funnel stage assessment
5. Збережи Topic Brief у topics/<slug>/brief.md (повний шаблон з discovery.md).
6. Онови seo-system/workflow/pipeline.md: перенеси item з секції "1. New" до секції "3. Pending Natalia review (brief)".
7. Створи окрему гілку, коміт, push, PR:
   ```bash
   BRANCH="seo/<slug>-$(date +%Y%m%d-%H%M%S)"
   git checkout -b "$BRANCH"
   git add topics/<slug>/brief.md seo-system/workflow/pipeline.md
   git commit -m "seo: discovery brief for <slug>"
   git push -u origin "$BRANCH"
   gh pr create --base main --head "$BRANCH" \
     --title "SEO: discovery brief for <slug>" \
     --body "Discovery brief згенерований автоматично через scripts/run-research.sh. Готов до review від Natalia."
   ```
8. Виведи URL PR в кінці.

Якщо ЛЮБИЙ крок провалиться — НЕ приховуй помилку. Виведи повний trace stderr/stdout проблемного інструменту, поясни що саме не спрацювало, і завершись з кодом помилки. PR не створюй якщо є partial failure.
PROMPT_EOF
)

echo "▸ Запускаю headless Claude (model: claude-opus-4-7[1m], thinking: max)..."
LOG_FILE="/tmp/research-$TIMESTAMP.log"
set +e
gh codespace ssh -c "$CODESPACE_NAME" -- "bash -l -c 'cd /workspaces/scalemate-landing && claude --print --verbose --output-format stream-json --permission-mode bypassPermissions --model \"claude-opus-4-7[1m]\" --max-thinking-tokens 32000 \"$(cat <<\"PROMPT\"
$PROMPT
PROMPT
)\"'" 2>&1 | tee "$LOG_FILE"
EXIT_CODE=${PIPESTATUS[0]}
set -e

echo
if [ "$EXIT_CODE" -eq 0 ]; then
  echo "✓ Research завершено. Дивись лог: $LOG_FILE"
  echo "  Codespace залишається працювати (idle 30 хв до auto-stop): $CODESPACE_NAME"
  echo "  PR має бути в репо: https://github.com/$REPO/pulls"
else
  echo "✗ Research впав (exit $EXIT_CODE). Лог: $LOG_FILE"
  echo "  Останні 50 рядків:"
  tail -50 "$LOG_FILE"
  echo
  echo "  Зайди в codespace для дебагу: gh codespace ssh -c $CODESPACE_NAME"
  exit "$EXIT_CODE"
fi
