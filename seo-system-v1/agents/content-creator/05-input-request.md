# Step 5 — Input Request (Checkpoint 3)

Якщо для якісного контенту потрібні inputs від Natalia (без яких draft буде з placeholder'ами або generic) — створити **Input Request** замість того щоб вигадувати.

## Типи inputs які запитуємо

- Screenshots інтерфейсу Scalemate
- Specific client case details (numbers, timeline, challenge)
- Customer quotes (реальні, не invented)
- Product feature specifics
- Pricing details
- Legal / compliance claims (YMYL-суміжне)

## Формат (з [`docs/architecture.md` Шар 1.7](../../../seo-system/docs/architecture.md))

```markdown
## Input needed: [article / page]

I'm drafting [X]. To keep quality high (no invented data), I need:

1. [specific input] — [why needed, що станеться без цього]
2. [specific input] — ...

Priority: [blocks / can proceed without / nice-to-have]
Estimated time from you: [5 min / 30 min / 1h]

Alternative if no time:
- Skip the section (with placeholder note)
- Write without this input (risk: generic / unsupported)
- Defer article to next week
```

## Заборонено

- Вигадувати дані щоб не запитувати
- Залишати `[TODO: ...]` placeholder у production draft'і — або отримуємо input, або escalate'имо

## Pipeline-side

Item залишається у `4. Approved for writing` — не переноситься у `5. Pending Natalia review (draft)` поки draft не готовий. Review всё одно йде перед публікацією — окремий blocked-state не потрібен.
