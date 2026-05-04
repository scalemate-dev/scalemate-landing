# Data Integrity — обов'язкове правило для всіх агентів

> Якщо хоч одна обов'язкова data-інтеграція не працює — **СТОП**, повідомити Natalia, **не продовжувати**.
> Без даних research = вигадка. Краще зупинитись і дочекатись fix, ніж видати результат який виглядає переконливо але побудований на нічому.

---

## Обов'язкові інтеграції (per agent)

### Intelligence agent
- **GSC** (`gsc_client.py`) — primary data source. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.
- **Ahrefs MCP** — для keyword research, SERP, competitors, brand radar. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.
- **SerpAPI MCP** — Google Trends, live SERP, Reddit/community search. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.

### Discovery agent
- **GSC** — для existing content check + GSC validation. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.
- **Ahrefs MCP** — keyword volumes, KD, SERP. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.
- **SerpAPI MCP** — SERP validation, Reddit pain research. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.

### Review agent
- **GSC** — primary метрики. БЕЗ ЦЬОГО НЕ ПРОДОВЖУВАТИ.
- **SerpAPI MCP** — indexation check (тільки для items <7d). Якщо відвалилось — пропустити Step 3, але продовжити Steps 1-2, 4-7 з GSC даними. Це не повний блокер.

### Content-creator / QA agents
- Зазвичай не використовують зовнішні дані напряму. Працюють з артефактами (brief, draft).

---

## Правило: Fail-fast при відмові інтеграції

**Перед початком роботи** кожен агент мусить перевірити що його обов'язкові інтеграції живі. Якщо НЕ працює — **вийти з роботи з повідомленням**.

### Sanity check на старті

```bash
# GSC
GSC_SITE_URL="sc-domain:scalemate.co" python3 ~/.claude/skills/seo-ops/gsc_client.py --queries 1 --days 7
# → якщо помилка auth/network → STOP

# Ahrefs MCP
mcp__ahrefs__subscription-info-limits-and-usage
# → якщо "MCP token is invalid" / "Access denied" → STOP

# SerpAPI MCP
mcp__serpapi__search: {"engine": "google_light", "q": "test", "num": 1}
# → якщо timeout / 401 → STOP
```

### Що казати Natalia при failure

```
🚨 ЗУПИНКА — інтеграція не працює

Tool: [GSC / Ahrefs / SerpAPI / etc.]
Помилка: [exact error message]
Що пробував: [команда яка впала]
Можлива причина: [auth / rate limit / network / token expired]

НЕ продовжую research — без цієї інтеграції результат буде вигаданий.

Що зробити:
- [конкретний actionable: "перевір AHREFS_MCP_KEY", "переавторизуйся в GSC", "почекай N хв на rate limit reset"]
```

Після цього **стоп**. Не писати brief з частковими даними. Не "припускати". Не "робити best-effort". Чекати на fix і тільки після cleared sanity check продовжувати.

---

## Винятки (коли можна продовжити з partial data)

| Тип помилки | Дія |
|---|---|
| Один з 3+ Reddit threads не завантажився | OK продовжити, цитувати ті що завантажились |
| SerpAPI повертає <10 результатів | OK продовжити, але зафіксувати в brief "SERP analysis on N results, not 10" |
| Один з GSC raw queries fail (network blip) | Retry 1 раз, якщо знову fail → STOP |
| Ahrefs повертає 0 для конкретного keyword | OK — це валідна відповідь (нульовий volume), не failure |
| Review agent: SerpAPI indexation check недоступний | OK продовжити з GSC-only review, зафіксувати "indexation check skipped" |

**Правило тлумачення:** якщо помилка означає що цілий клас даних відсутній (всі GSC queries, весь Ahrefs, весь SerpAPI) — це STOP. Якщо це окремий datapoint — partial OK з явним позначенням в output.

---

## Чому це обов'язкове

1. **Hallucination protection.** LLM навчений виглядати впевнено навіть без даних. Якщо continue-when-broken, видасть конкретні цифри volume/CTR які виглядають реальними але вигадані.
2. **Trust.** Якщо ти знайдеш one fabricated number в brief — підозра падає на ВСІ числа в системі. Один fake destroys credibility всіх legit data points.
3. **Resource waste.** Краще побачити "GSC token expired" і пофіксити за 5 хв ніж згенерувати брexed який потім доведеться переписувати з нуля.

---

## Hard ban list

Заборонено:
- ❌ "Based on industry averages…" коли потрібні конкретні GSC метрики
- ❌ "Approximate keyword volumes…" коли Ahrefs не відповів
- ❌ "Reddit users typically say…" без живих threads
- ❌ "Top SERP results usually include…" без SerpAPI call
- ❌ Додавати в brief числа без цитування source (commit hash / API call timestamp / tool name)

Все що НЕ підтверджено живими даними — пропускати або STOP.
