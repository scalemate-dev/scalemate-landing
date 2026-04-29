# Step 6 — ICP Pain Research

> Правило: стаття починається з болю ICP, не з keyword. Див. [`rules/content-writing.md`](../../../seo-system/rules/content-writing.md).

## Inheritance rule

Перед стартом — перевірити input context з [Step 0](00-prereq.md):

- **A. Inheriting from intel brief** — у `output/recon/[date].md` для цього topic'у вже є pain quotes / JTBD mapping / Reddit links. **Наслідуємо as-is, переходимо до 6c (translation у queries).**
- **B. Ad-hoc input** — pain context відсутній. Робимо full research (6a + 6b + 6c).

## 6a. Reddit / Community scan (SerpAPI)

```
mcp__serpapi__search:
  engine: google
  q: "site:reddit.com [topic keyword] pain OR problem OR frustrating OR hours OR manual"
  num: 10
```

Альтернативні subreddits для site:-фільтрів: `PPC`, `FacebookAds`, `digitalmarketing`, `marketing`, `TikTokmarketing`, `PPCMarketing`, `bigseo`.

Перевірити також: Quora, indie hackers, Twitter/X threads (через окремий SerpAPI запит з `site:twitter.com OR site:x.com`).

## 6b. Що витягти

1. **3-5 прямих quotes** де ICP описує проблему своїми словами (точні фрази, з лінками на тред)
2. **Pain language** — якими словами люди описують біль (це йде в H1, intro, problem section)
3. **Масштаб проблеми** — скільки часу/грошей витрачається, як часто виникає
4. **Існуючі workarounds** — як вирішують зараз без tool'а (це стає "methods" у статті)
5. **Emotional triggers** — що найбільше фрустує (manual work, errors, time waste, cost)
6. **Thread activity** — кількість тредів, коментарів (proof of demand)

## 6c. Pain → Search queries translation

Кожну біль перекласти у 2-3 search queries які люди могли б ввести. Прогнати кожну через [Step 1a Ahrefs](01-keyword-validation.md#1a-ahrefs-primary-keyword-варіації) — записати volume + KD.

```
Біль: "I spend 3 hours daily just toggling ads on/off"
→ Queries: "how to automate ad management", "facebook ads automation rules", "automate pausing facebook ads"
→ Validation у Step 1a (volume, KD)
```

## Output (додається у Topic Brief)

```markdown
## ICP Pain Research
- Source: [inherited from intel brief / ad-hoc Reddit scan]
- Pain quotes: [3-5 quotes з лінками]
- Pain language: [фрази якими ICP описує проблему]
- Scale: [скільки часу/грошей коштує проблема]
- Current workarounds: [як вирішують без нас]
- Emotional triggers: [що найбільше фрустує]
- Thread activity: [N тредів, M коментарів]
- Translated queries (validated): [query1 (vol: X, KD: Y), query2 (vol: 0, pain-validated)]
```

**Dropout якщо:** 0 тредів/коментарів по темі І 0 GSC impressions — значить біль не болить достатньо для контенту.
