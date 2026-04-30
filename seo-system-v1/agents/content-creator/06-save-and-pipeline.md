# Step 6 — Save Draft + Update Pipeline

## 6a. Save draft

Зберегти draft у:

```
seo-system-v1/output/topics/[slug]/draft.md
```

`[slug]` той самий, що в brief'і.

## 6b. Pipeline update

Оновити [`workflow/pipeline.md`](../../workflow/pipeline.md):

```
4. Approved for writing
   ↓ (коли draft готовий і self-check passed)
5. Pending Natalia review (draft)
```

- Знайти item з цим slug у секції `4. Approved for writing`
- Перенести у секцію `5. Pending Natalia review (draft)`
- Додати/оновити: `artifact: output/topics/[slug]/draft.md`
- Додати: `agent-finished: YYYY-MM-DD`

## 6c. Notify

Повідомити: `Draft ready for QA. Run \`qa seo-system-v1/output/topics/[slug]/draft.md\``

## Verify

- ✅ Draft файл існує на диску
- ✅ Item у секції `5. Pending Natalia review (draft)` (не в 4)
- ✅ Має `artifact:` і `agent-finished:`

Без оновлення pipeline.md Natalia не побачить що draft готовий і чекає review.
