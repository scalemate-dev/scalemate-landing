# Review Agent — Published Content Tracking

Refactor of [`../../../seo-system/agents/review.md`](../../../seo-system/agents/review.md) into per-step files.

Контракт: дивиться на вже опублікований контент — чи індексується, чи ранжується, чи CTR росте. Видає review report. Запускається **тільки на команду** (без cron / weekly schedule).

## Run order

| # | File | Source | Status |
|---|---|---|---|
| 0 | [00-prereq.md](00-prereq.md) | role + context files | — |
| 1 | [01-collect-deployed.md](01-collect-deployed.md) | scorecard.md | ✅ works |
| 2 | [02-site-wide-trend.md](02-site-wide-trend.md) | GSC `--trend` (контекст для per-item) | ✅ works |
| 3 | [03-gsc-current-state.md](03-gsc-current-state.md) | GSC `--raw` per-item | ✅ works |
| 4 | [04-indexation-check.md](04-indexation-check.md) | SerpAPI `site:` (на кожному milestone) | ✅ works |
| 5 | [05-milestone-decisions.md](05-milestone-decisions.md) | logic per [#post-publish-tracking](../../../seo-system/rules/content-writing.md#post-publish-tracking) | ✅ works |
| 6 | [06-generate-report.md](06-generate-report.md) | single weekly file `output/reviews/YYYY-MM-DD.md` | ✅ works |
| 7 | [07-update-state.md](07-update-state.md) | scorecard + pipeline + per-topic tracking.md | ✅ works |

Tools інвентар — той самий що в [`../seo-analysis/TOOLS.md`](../seo-analysis/TOOLS.md).

## Принципи

- **Факти, не інтерпретації** — показувати числа, не «покращується» без цифр
- **Milestone decisions строго по правилах** ([#post-publish-tracking](../../../seo-system/rules/content-writing.md#post-publish-tracking)) — без виключень
- **Feedback loop** — кожен review дає actionable input для наступного intelligence циклу
- **Не запускається автоматично** — тільки по команді
