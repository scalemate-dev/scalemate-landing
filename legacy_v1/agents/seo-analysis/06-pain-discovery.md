# Step 6 — ICP Pain Discovery

> Keyword tools не бачать problem-language queries (volume = 0), але communities доводять що люди їх шукають. Цей step шукає **реальні болі ICP мовою аудиторії** → перетворює в контент-ідеї.
>
> Логіка: Reddit скан → знаходимо біль → маппимо на JTBD → перевіряємо чи є контент → перекладаємо у search queries → валідуємо volume у [Step 8](08-keyword-expansion.md).

---

## 6a. Reddit / Community scan (SerpAPI)

```
mcp__serpapi__search:
  engine: google
  q: "site:reddit.com/r/PPC OR site:reddit.com/r/FacebookAds OR site:reddit.com/r/digitalmarketing [pain query]"
  location: United States
  num: 10
```

**Subreddits для site:-фільтрів:** `PPC`, `FacebookAds`, `digitalmarketing`, `marketing`, `TikTokmarketing`, `PPCMarketing`, `bigseo`.

**Fallback (якщо SerpAPI недоступний):** Reddit публічний JSON API без ключа:
```bash
curl -s "https://www.reddit.com/r/PPC/search.json?q=automation&restrict_sr=1&sort=top&t=year&limit=15" \
  -H "User-Agent: scalemate-seo-recon/1.0"
```

**Pain queries (ротувати 5-7 за цикл):**
- `"too much time managing ads"`
- `"creative testing is painful"`
- `"scaling ads without burning out"`
- `"automating facebook ads"`
- `"bulk ad launch frustration"`
- `"managing multiple ad accounts"`
- `"ad fatigue what to do"`
- `"facebook ads manual work"`
- `"how to test more creatives"`
- `"rules automation ads"`
- `"ad budget wasted"`
- `"media buyer burnout"`

Оновлювати список по мірі знаходження нових pain-themes у попередніх циклах.

**Що витягуємо з кожного релевантного треду:**
- **Exact quote** (мовою юзера — goldmine для titles і copy)
- **Біль / фрустрація** (що конкретно болить)
- **Контекст** (роль, платформа, масштаб)
- **Existing solutions** які пробували (і чому не задоволені)
- **Engagement** (upvotes + comments — proof що біль масова)

## 6b. Google PAA — problem-language queries (SerpAPI live SERP)

Для 3-5 problem-framed queries витягти People Also Ask:

```
mcp__serpapi__search:
  engine: google
  q: "facebook ads take too much time"
  location: United States
```

```
mcp__serpapi__search:
  engine: google
  q: "how to test ad creatives faster"
  location: United States
```

```
mcp__serpapi__search:
  engine: google
  q: "how to automate facebook ads without expensive tools"
  location: United States
```

```
mcp__serpapi__search:
  engine: google
  q: "how to scale ad campaigns without hiring"
  location: United States
```

Витягти `related_questions` → кожне = потенційна стаття або FAQ секція.

## 6c. Маппінг болей на JTBD

Кожну знайдену біль класифікувати по JTBD (з [`seo-system/context/icp/jtbd-messaging.md`](../../../seo-system/context/icp/jtbd-messaging.md)):

| JTBD | Біль |
|---|---|
| JTBD 1 | Зменшити ручну операційну роботу |
| JTBD 2 | Автоматизувати роботу з креативами (бани) |
| JTBD 3 | Масштабувати кампанії без росту часу |
| JTBD 4 | Централізований контроль performance |
| JTBD 5 | Передавати інсайти між командами |
| JTBD 6 | Швидко скейлити winning креативи |
| JTBD 7 | Захистити бюджет від зливу |

Формат таблиці:

```
| Біль (exact quote) | Source | JTBD | Scalemate feature | Контент є? | Content opportunity |
|---|---|---|---|---|---|
| "I spend 3h daily toggling ads" | r/PPC, 45 upvotes | JTBD 1 | Rules | ⚠️ Partial | Enrich existing |
| "Testing 50 creatives/week impossible" | r/FacebookAds | JTBD 6 | Bulk Launch + Rules | ❌ No | NEW pillar |
```

**Якщо біль НЕ маппиться на жоден JTBD** — записати як "Нова біль поза JTBD". Сигнал і для контенту, і для product team.

## 6d. Переклад болей у search queries

Кожну біль перекласти у 2-3 можливі search queries які люди могли б ввести в Google:

```
Біль: "I spend 3 hours daily just toggling ads on/off"
→ Queries: "how to automate ad management", "facebook ads automation rules", "automate pausing facebook ads"
→ На валідацію volume/KD у Step 8 (Ahrefs matching terms)
```

---

## Output

```markdown
## 🔍 ICP Pain Discovery

### Top pains цього циклу
| # | Біль (exact quote) | Source | JTBD | Scalemate вирішує? | Контент є? | Search queries для валідації |
|---|---|---|---|---|---|---|
| 1 | "..." | r/PPC, 45 upvotes | JTBD 1 | ✅ Rules | ⚠️ Partial | query1, query2 |

### Нові болі (поза JTBD)
| Біль | Source | Чому важливо |
|---|---|---|

### Pain → Content pipeline
[Болі перекладені у queries → валідація volume/KD у Step 8]
```

**Pain-validated opportunities отримують `Confidence +1` при scoring у [Step 10](10-scoring.md)** — є proof що біль реальна, не hypothesis з keyword tool.
