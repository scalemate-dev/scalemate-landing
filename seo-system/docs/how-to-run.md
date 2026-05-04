# Як користуватись SEO системою

> Інструкція для Natalia. Як запускати команди і рухати роботу через pipeline.

---

## Команди

Кожна команда = виклик одного агента. Деталі workflow і output дивись прямо в файлі агента.

| Команда | Агент | Output |
|---|---|---|
| `розвідка` | [agents/intelligence.md](../agents/intelligence.md) | `intelligence/YYYY-MM-DD-recon.md` + pipeline §1 update |
| `discovery [тема]` | [agents/discovery.md](../agents/discovery.md) | `topics/[slug]/brief.md` |
| `write [brief-file]` | [agents/content-creator.md](../agents/content-creator.md) | `topics/[slug]/draft.md` |
| `qa [draft-file]` | [agents/qa.md](../agents/qa.md) | `topics/[slug]/qa.md` |
| `review` | [agents/review.md](../agents/review.md) | `topics/[slug]/review.md` per published item |

---

## Workflow (від ідеї до публікації)

Кожний topic проходить через [workflow/pipeline.md](../workflow/pipeline.md) — це state machine з 9 секцій. Approval = редагування pipeline.md (рухаєш item з однієї секції в наступну).

| Стадія | Pipeline section | Хто робить | Команда |
|---|---|---|---|
| 1. Виявити нові topics | `1. New` ← з recon | Intelligence agent | `розвідка` |
| 2. **APPROVE topics → discovery** | `1. New` → `2. Discovery in progress` | Natalia ✅ | (рухаєш в pipeline.md) |
| 3. Написати brief | `2.` → `3. Pending Natalia review (brief)` | Discovery agent | `discovery [тема]` |
| 4. **APPROVE brief → writing** | `3.` → `4. Approved for writing` | Natalia ✅ | (рухаєш в pipeline.md) |
| 5. Написати draft | `4.` → `5. Pending Natalia review (draft)` | Content-creator agent | `write [brief]` |
| 6. **APPROVE draft → QA** | `5.` → `6. Approved for QA` | Natalia ✅ | (рухаєш в pipeline.md) |
| 7. Прогнати QA | `6.` → `7. Pending Natalia deploy` | QA agent | `qa [draft]` |
| 8. **APPROVE → DEPLOY** | `7.` → `8. Published` | Natalia ✅ | review draft → `bash deploy.sh` |
| 9. Перевірити published | оновлює `8.` метриками | Review agent | `review` (раз на тиждень) |

**4 approval checkpoints** від Natalia (виділені ✅). Все інше — агенти роблять автоматично.

---

## Локально vs remote

Команди можна виконувати в **двох режимах**:

| Режим | Як запускати | Коли використовувати |
|---|---|---|
| **Локально** | Відкрий Claude Code → напиши команду | Інтерактивно, з checkpoints (наприклад `write` зупиниться на outline, чекатиме approve) |
| **Remote pipeline** | Скажи Claude "запусти pipeline" | Batch-обробка кількох approved items за раз. Без інтерактивних checkpoints |

Remote agent читає те саме `workflow/pipeline.md`, але обробляє тільки секції "1. New" (→ briefs) і "4. Approved for writing" (→ drafts). Все інше робиться локально.

Detail про remote (тригер, MCP підключення, обмеження): [dev-handover.md](dev-handover.md)

---

## Quick Start

**Перший раз:**
1. `розвідка` → перегляни recon brief
2. Відкрий [workflow/pipeline.md](../workflow/pipeline.md), додай topics в `1. New`, рухай approved в `2. Discovery in progress`
3. Для кожного: `discovery [тема]` → approve brief → `write [brief]` → approve draft → `qa [draft]` → approve → deploy

**Щотижня:**
- Понеділок: `розвідка` + approve top priorities
- Вівторок-четвер: writing cycle
- П'ятниця: `review`

---

## Що знаходиться де

Дивись [README.md](../README.md) — там повна мапа структури і покажчик "куди дивитись першим".

Інструменти і MCP конектори — описані в [CLAUDE.md](../../CLAUDE.md) (root проєкту) і [seo-system/skills/seo-ops/CODESPACE-SETUP.md](../skills/seo-ops/CODESPACE-SETUP.md).

Принципи і scoring — [architecture.md](architecture.md).
