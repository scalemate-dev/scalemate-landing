# Step 4 — SERP & Intent Analysis

> Об'єднує оригінальні Step 1c (intent quick-check), Step 3 (full SERP analysis), Step 4 (intent classification) — це один логічний потік.

## 4a. Intent quick-check (`engine=google_light`, дешеве)

> Перш ніж витрачати quota на повний SERP — переконатись що top-5 не з іншої теми.

```
mcp__serpapi__search:
  engine: google_light
  q: "[keyword]"
  num: 5
```

**Класичний приклад:** `"ad management tools"` → top-5 показує Active Directory / IT admin software, **не** advertising. Такі помилки коштують цілу статтю на wrong topic. **Drop кейворду на цьому етапі**, не йти у full SERP.

Якщо top-5 збігається з нашим intent → переходимо до 4b.

## 4b. Full SERP analysis (`engine=google`, num=10)

```
mcp__serpapi__search:
  engine: google
  q: "[keyword]"
  location: United States
  num: 10
```

Витягти і записати:
- **Top 10 results:** title, domain, snippet
- **SERP features:** AI Overview? PAA (`related_questions`)? Videos? Featured snippet? Image pack?
- **Тип домінуючих сторінок:** review sites (G2, Trustpilot)? competitor landings? listicles? how-tos?
- **DR конкурентів у top-3** — за потреби через `mcp__ahrefs__site-explorer-domain-rating`

## 4c. Intent classification

На базі 4b визначити intent type top-10 і чи можемо ми тут виграти:

| Intent type у top-10 | Можемо виграти? |
|---|---|
| Third-party reviews (G2, Trustpilot, Reddit) | ❌ Не беремо |
| Official pages (competitor's own site) | ⚠️ Тільки якщо наша стаття дає unique angle |
| Competitor landings (alternatives, comparisons) | ✅ Наш формат |
| How-to / educational | ✅ Якщо маємо first-hand experience |
| Listicles ("best N tools") | ✅ Якщо маємо unique data/angle |

**Dropout якщо:** top-5 всі third-party review sites — ми тут не виграємо.

## 4d. Intent separation check (cluster guard)

Якщо у keyword cluster є queries з **різним** intent — це **різні статті**, не одна.

Приклад:
- `"bulk upload creatives"` = file transfer intent (how-to)
- `"bulk ad launch tools"` = campaign creation intent (listicle)
- → Дві різні статті. Одна не виграє обидва SERP.

**Перевірка:** якщо Google показує помітно різний top-10 для двох queries з cluster — це різні intents = різні статті.
