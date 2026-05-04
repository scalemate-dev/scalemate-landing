# Discovery Agent — Topic & Keyword Validation

Refactor of [`../../../seo-system/agents/discovery.md`](../../../seo-system/agents/discovery.md) into per-step files.

Контракт не змінився: бере ідею/ключ → валідує через data → готує повний Topic Brief на approve Natalia. Не пише контент.

## Two streams (обов'язкове context — читати ПЕРЕД роботою)

**Stream 1 — Data-driven (пріоритет):**
- Keyword має volume в Ahrefs АБО impressions в GSC
- Scoring по формулі, без обмежень по кількості

**Stream 2 — Pain-driven (доповнення):**
- 0 volume в Ahrefs, 0 в GSC, АЛЕ є Reddit/community proof (20+ comments)
- Реальна біль ICP яку Scalemate вирішує
- **Ліміт: 3-4 статті/місяць** щоб не заповнити сайт unvalidated контентом
- Мета: зайти першими на early-stage queries

**Правило:** якщо topic має 0 volume і 0 GSC impressions — це ТІЛЬКИ Stream 2. Обов'язковий escalate до Natalia з поясненням «pain-driven, ліміт 3-4/міс, ось Reddit proof».

## Run order

| # | File | Source | Status |
|---|---|---|---|
| 0 | [00-prereq.md](00-prereq.md) | role + context files + input format | — |
| 1 | [01-keyword-validation.md](01-keyword-validation.md) | Ahrefs + GSC + decision matrix | ✅ works |
| 2 | [02-funnel-assessment.md](02-funnel-assessment.md) | logic | ✅ works |
| 3 | [03-existing-content-check.md](03-existing-content-check.md) | GSC + Ahrefs | ✅ works |
| 4 | [04-serp-and-intent.md](04-serp-and-intent.md) | SerpAPI (light + full) + intent classification | ✅ works |
| 5 | [05-competitive-gap.md](05-competitive-gap.md) | curl + wc -w + Ahrefs | ✅ works |
| 6 | [06-icp-pain-research.md](06-icp-pain-research.md) | inherit from intel brief OR SerpAPI Reddit | ✅ works |
| 7 | [07-content-type-decision.md](07-content-type-decision.md) | logic + rules link | ✅ works |
| 8 | [08-title-meta-prework.md](08-title-meta-prework.md) | rules anchor | ✅ works |
| 9 | [09-brief-generation.md](09-brief-generation.md) | output template | ✅ works |
| 10 | [10-save-and-pipeline.md](10-save-and-pipeline.md) | files + pipeline.md (1→2→3) | ✅ works |

Tools інвентар — той самий що в [`../seo-analysis/TOOLS.md`](../seo-analysis/TOOLS.md).


## Принципи

- **Data-first** — кожне рішення підкріплено даними (volume, KD, SERP, GSC)
- **GSC = ground truth** — Ahrefs не бачить все
- **SERP validation** — інтент перевіряється через live SERP перед прийняттям keyword
- **Existing-first** — перевіряти existing pages ПЕРЕД пропозицією нового
- **Intent separation** — queries з різним intent = різні статті, не одна
- **Conversion-first** — BOFU > MOFU > TOFU при однаковому volume
- **Не вигадувати** — `insufficient data` коли треба
- **Не писати контент** — тільки brief на approve
