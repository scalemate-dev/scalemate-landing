# Step 10 — Save Brief + Update Pipeline

> Об'єднує оригінальні Step 9 (save brief) + Step 10 (pipeline update). Виправлено bug з оригіналу: тепер lock'имо item у `2. Discovery in progress` на старті, а не стрибаємо одразу `1 → 3`.

## 10a. Save brief

Створити папку `seo-system-v1/output/topics/[slug]/` (якщо немає).
Зберегти Topic Brief у `seo-system-v1/output/topics/[slug]/brief.md`.

`[slug]` = kebab-case primary keyword (напр. `creative-testing-pillar`).

## 10b. Pipeline state machine

> [`workflow/pipeline.md`](../../workflow/pipeline.md) має 9 секцій. Discovery двигає item через перші три:

```
1. New (потребує discovery)
   ↓ (на старті discovery)
2. Discovery in progress
   ↓ (коли brief готовий)
3. Pending Natalia review (brief)
```

### На старті discovery (lock):

Знайти item з цим slug у секції `1. New`. Перенести у секцію `2. Discovery in progress` з додатковим полем:

```
- topic-slug
  added: YYYY-MM-DD          (existing)
  source: weekly-recon       (existing)
  primary-keyword: [keyword] (existing)
  context: [...]             (existing)
  agent-started: YYYY-MM-DD HH:MM  (NEW — для guard проти паралельних прогонів)
```

**Якщо item вже у `2. Discovery in progress`** — це або dead lock (попередній прогон зламався), або паралельний запуск. Перевірити timestamp `agent-started`:
- Молодше 1 години → припускаємо паралельний прогон. Abort.
- Старше → вважаємо dead lock, продовжуємо (overwrite `agent-started`).

### На фініші (move to review):

Перенести item з `2. Discovery in progress` у `3. Pending Natalia review (brief)`. Додати:

```
artifact: output/topics/[slug]/brief.md
agent-finished: YYYY-MM-DD
```

Прибрати поле `agent-started` (lock знятий).

### Якщо запуск ad-hoc (без item у pipeline):

Створити новий item одразу у секції `3. Pending Natalia review (brief)` зі всіма полями + `source: manual`.

## 10c. Verify

Після оновлення pipeline.md перевірити що item:
- ✅ Не в `1. New` і не в `2. Discovery in progress` (одне з двох — у `3` або новостворений item у `3`)
- ✅ Має `artifact: output/topics/[slug]/brief.md`
- ✅ Має `agent-finished: YYYY-MM-DD`
- ✅ Brief файл реально існує на диску

Без цього кроку Natalia не побачить що brief готовий і чекає approve.
