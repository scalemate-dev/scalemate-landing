# Scalemate SEO & Organic Traffic System — Brainstorm

> Живий документ. Редагуємо по ходу обговорення.
> Мета: побудувати систему з AI-агентів і скілів, яка дозволить одній людині (Natalia) масштабувати **всю контентну роботу на сайті** scalemate.co — не тільки блог, а весь органічний контент + технічний SEO + keyword/topic discovery.

## Scope контенту (що саме масштабуємо)

Система генерує/оновлює чотири типи контенту:

1. **Блог-статті** — 10-20/тиждень у batch-режимі (TOFU/MOFU, ловля інтенту)
2. **Продуктові сторінки** — агент пропонує зміни/розширення, якщо є резонна причина: slabkий CTR з SERP, конкуренти краще покривають ключ, низький скор від content-ops, gap у messaging
3. **Case studies** — розширити мінімум на +2 кейси по `rules` feature:
   - клієнт **Appflame** (є реальний use case)
   - клієнт **Promin Agency** (є реальний use case)
   - формат: проблема → рішення через Scalemate rules → результат у цифрах
4. **Landing/solution/use-case сторінки** — створення нових або апдейт існуючих під виявлені пошукові інтенти (база для programmatic SEO в подальшому)
5. **Comparison pages** — `Scalemate vs {competitor}` (Madgicx, Birch, adsmanage.ai + інші виявлені через SERP). Ловлять високо-інтентні bottom-funnel запити "X vs Y", "alternatives to X". Часто — найвищий конверсійний трафік.
6. **Hub-сторінки (pillar pages)** — великі topic-хаби, які лінкують на кластер блог-статей (приклад: `/hub/marketing-automation` → лінкує 15 статей по темі). Піднімають authority всього кластеру.
7. **Resources / templates** — безкоштовні ресурси (шаблони, чеклісти, калькулятори, playbooks). Сильний магніт для lead generation + backlinks (люди лінкують на корисні ресурси, а не на маркетинг-сторінки).

Кожен тип контенту має свій міні-конвеєр, але **спільну Discovery/Intelligence базу** — усі рішення "що створювати / оновлювати" приходять з одного джерела (Шар 1 + 2A).

---

## Принципи системи (обов'язкові для всіх агентів)

Ці правила інжектяться як system prompt у кожного агента/скіла системи. Жоден агент не може їх ігнорувати.

### 1. Data-first — жодних гіпотез без даних

**Правило:** будь-яка пропозиція (яке ключове слово цілити, яку статтю писати, яку сторінку оновити, який конкурент небезпечний) **обов'язково** супроводжується конкретними даними з:
- Ahrefs (volume, KD, traffic, SERP overview, backlinks, Brand Radar)
- Google Search Console (impressions, clicks, CTR, position, queries)
- Реальний SERP-аналіз (що зараз ранжується в топ-10)
- Внутрішні джерела (customer feedback, support, outreach responses)

**Формат обґрунтування в кожному брифі:**
```
Data:
- Keyword volume: 1,200/mo (Ahrefs, US+UK+EU)
- KD: 18 / our DR: 24 → realistic
- Current position: 14 (GSC, last 28 days, 320 impressions, CTR 0.9%)
- Top-3 SERP: 2 listicles + 1 tool page (intent: commercial-investigational)
- Competitor gap: Madgicx не покриває "X"
```

**Заборонено:**
- Писати статтю "бо може буде цікаво"
- Казати "цей ключ перспективний" без volume/KD цифр
- Пропонувати оновлення сторінки без reference на GSC/Ahrefs метрики
- Припускати інтент без перегляду реального SERP
- Галюцинувати цифри або посилатися на неіснуючі дані

**Якщо даних бракує** — агент зобов'язаний явно це сказати ("insufficient data to prioritize"), а не вигадувати.

---

### 2. Quality & practical — прикладний, якісний контент

**Правило:** весь контент має бути максимально прикладним — людина, яка прочитала, має отримати конкретну користь, яку може застосувати сьогодні.

**Що означає "прикладний":**
- Реальні приклади з цифрами (не "збільшує конверсію", а "збільшує на 23%, дані з X")
- Конкретні кроки / screenshots / configs / code snippets / templates
- Реальні use cases від клієнтів (Appflame, Promin, інші) — використовувати з `context/icp/customer-*.md`
- Структуровані how-to з чіткими inputs → process → outputs
- FAQ з реальними питаннями (не "чи добре це?", а ті, які дійсно питає ICP)

**Що означає "якісний":**
- Проходить `content-ops` панель з скором 90+
- Має унікальну цінність vs топ-3 конкурентів (gaps заповнені, додані дані/кейси/перспективи, яких немає у них)
- Власна точка зору, а не переказ Wikipedia/чужих статей
- Відповідає бренд-голосу (з `Brand Guidlines.pdf`, `Scalemate_Brand_Persona_Framework.pdf`)
- Технічна точність — факти перевірені, цифри мають джерело

**Заборонено:**
- Generic AI-fluff ("In today's fast-paced world...", "It's crucial to...")
- Переказ чужих статей без власної цінності
- Вода заради word-count (краще 1200 якісних слів, ніж 3000 водянистих)
- Поверхневі "what is X" без конкретних прикладів
- Списки "5 tips" без глибини

**Якщо агент не має достатньо inputs для якісного прикладного контенту** (напр. немає реальних цифр для case study) — він не пише, а повертає запит "потрібні ось такі дані від Natalia / від клієнта".

---

### 3. Existing-first — спочатку перевір що вже є, потім вирішуй

**Правило:** перед тим як пропонувати **нову** сторінку/статтю, агент **обов'язково** перевіряє чи не існує вже сторінка по цій темі/ключу. Апдейт існуючого майже завжди кращий, ніж створення нового.

**Чому це критично:**
- **Канібалізація** — дві наші сторінки, що цілять один ключ, конкурують одна з одною → Google не знає, яку показати → ранжуються обидві гірше, ніж одна
- **Витрата ресурсів** — написати нову з нуля в 3-5x дорожче, ніж апгрейдити існуючу
- **Втрата накопиченої authority** — стара сторінка вже має backlinks, історію, indexing signals. Нова починає з нуля
- **Кращий ROI на апдейті** — стаття на позиції 8-15 часто залітає в топ-3 після 2-3 годин поліпшень, замість тижнів на нову

**Обов'язковий чекліст перед пропозицією нового контенту:**

1. **Пошук по сайту** — чи є сторінка/стаття, що вже таргетить цей ключ або близьку тему?
   - Ahrefs `site-explorer-organic-keywords` — по якому ключу ранжується яка сторінка
   - Ahrefs `site-explorer-top-pages` — топ сторінки і їх ключові слова
   - GSC queries + pages — які наші сторінки показуються на цей запит
   - Власна навігація сайту (sitemap, /blog, /use-cases, /solutions, /features)

2. **Аналіз канібалізації** — якщо ДВІ+ наших сторінок показуються на один ключ (GSC), то це вже проблема. Треба:
   - Консолідувати в одну (301 редірект слабшої в сильнішу)
   - АБО чітко розвести інтент (одна TOFU-гайд, інша BOFU-comparison)

3. **Якщо сторінка існує → пропонуй апдейт**, а не нову:
   - Що додати (розділи, FAQ, приклади, дані, схеми)
   - Що оновити (застарілі цифри, screenshots, конкурентна інформація)
   - Що підсилити (internal links, schema, title/meta)
   - Яку secondary-ключову додати

4. **Нова сторінка створюється ТІЛЬКИ якщо:**
   - Існуючої сторінки на цю тему справді немає
   - АБО існуюча має принципово інший інтент, який не можна "розширити" без втрати фокусу
   - АБО це окремий тип контенту (напр. case study — не можна їх запхнути у блог-статтю)

**Приклад з живої сесії (2026-04-15):**
GSC показав запит `madgicx pricing 2026` з 156 impressions, 0 кліків, позиція 7.6. Перш ніж пропонувати "давайте зробимо comparison page" — треба спершу перевірити: **чи вже є сторінка яка показується на цей запит?** Якщо є — апдейтимо. Якщо нема — думаємо який формат створити (і чи це дійсно comparison, чи інший тип).

**Вихід правила 3:** у кожному брифі з Discovery має бути окрема секція:
```
Existing content check:
- Matching page: /use-cases/madgicx-alternative (exists, ranks pos 7-8 for this query)
- Cannibalization risk: NO (only one page shows up)
- Decision: UPDATE existing, not create new
- Why: ...
```

---

## 1. Контекст

- Сайт: https://www.scalemate.co/
- Блог: `/blog` (зараз 7 статей, локально на `localhost:3000/blog`)
- Є продуктові сторінки та use-case сторінки
- Підключено: Google Search Console, Ahrefs (MCP, оплачений план)
- Сьогоднішня дата: 2026-04-15

### Вхідні дані (відповіді від Natalia, 2026-04-15)

1. **Конкуренти (стартовий список):** Birch, Madgicx, adsmanage.ai, kitchn.io, Ryze AI (get-ryze.ai)
   - Повний список треба знайти через аналіз SERP по цільових ключах (прямі + непрямі конкуренти).
   - План: коли визначимо seed keywords → прогнати Ahrefs `serp-overview` + `organic-competitors` і скласти розширений список.
2. **Geo-ринки:** US, EU, UK (основні). Усі запити/аналітика — з фокусом на ці країни.
3. **Стек / доступ:** проект розгорнутий локально (localhost:3000), є повний доступ для технічних правок.
4. **Блог на проді:** `scalemate.co/blog` індексується, вже є покази по статтях у GSC → можна одразу працювати зі striking distance.
5. **Додаткові модулі (programmatic SEO / refresh / internal linking):** потребує уточнення — див. секцію 5 (розписала що це).

---

## 2. Арсенал — що вже маємо

### Технічні інструменти (підключено)
- **Google Search Console (direct, через `seo-ops/gsc_client.py` + `gsc_auth.py`)** — **default для наших власних даних**:
  - Queries, pages, CTR, positions, impressions, clicks — повний сирий доступ
  - OAuth-based, безкоштовно, без Ahrefs-quota
  - Перевірка: чи пройшла авторизація (`python gsc_auth.py` один раз)
- **Ahrefs MCP** — **для даних, яких немає в GSC**:
  - Keyword research: matching terms, related, volume history, SERP overview, KD, CPC
  - Site audit, backlinks, competitors, rank tracker, DR
  - **Brand Radar** — трекінг AI citations (ChatGPT/Perplexity/Claude)
  - GSC-endpoints Ahrefs-у — як fallback для швидкого одноразового enrichment
- **SerpAPI MCP** (підключено 2026-04-15, hosted) — Google Trends + Google SERP scraping:
  - Google Trends: interest over time, related queries, rising queries (breakout), interest by region, trending searches, autocomplete
  - Google Search: live SERP (топ-10), featured snippets, AI Overviews, People Also Ask, related searches
  - Бонус endpoints: Google News, Shopping, YouTube, Maps, Scholar, Finance
  - Free tier: 250 searches/міс (достатньо для тижневого Discovery циклу)

### Розподіл ролей інструментів (щоб не плутати)

| Інструмент | За що відповідає | За що НЕ відповідає |
|---|---|---|
| **Ahrefs** | Хард валідація: volume, KD, SERP overview, DR, backlinks, competitor organic keywords, Brand Radar (AI citations) | Broad social signals, сезонність помісячно |
| **GSC (напряму, через seo-ops/gsc_client.py)** | **Default** для наших даних: impressions, clicks, CTR, position, striking distance, anonymized queries. Безкоштовно, сирі дані без row limits | Дані конкурентів, volume, KD, breakout queries |
| **Ahrefs GSC-endpoints** | Fallback, коли треба GSC + Ahrefs volume/KD одним запитом (quick interactive) | Не default — з'їдає Ahrefs quota |
| **SerpAPI Google Trends** | **Генератор нових ідей/тем:** rising/breakout queries, related queries, trending searches, autocomplete, interest by region. Також — **напрямок** інтересу (росте/падає), сезонність | ❌ Абсолютний volume, KD, вартість кліка (це Ahrefs). Trends каже "+1,850%", але не каже від якої бази — 10 чи 10,000 запитів |
| **SerpAPI Google Search** | Live SERP топ-10, AI Overviews, People Also Ask, featured snippets — інтент-перевірка | Історія позицій (це Ahrefs/GSC) |
| **trend_scout.py** (seo-ops) | Broad firehose — що зараз бурлить у HN / Reddit / X / Google Trends RSS (народні сигнали до SERP) | ❌ Глибокий аналіз конкретного ключа |

**Flow "Trends → Ahrefs":** Trends знаходить **що взагалі може бути цікавим писати** (нові теми, breakout, related). Ahrefs потім каже **чи реально це варте статті** (volume, KD, SERP). Обидва кроки обов'язкові.

### Коли викликаємо Google Trends у пайплайні

Trends — **перше джерело ідей**, не останнє слово. Використовуємо в чотирьох точках:

1. **Discovery нових тем (щотижня)** — по кожному seed-терму (`marketing automation`, `ai agents`, `rules automation` etc.) витягуємо `related_queries` (top + rising) → це наш **базовий список кандидатів** на тиждень
2. **Breakout hunting (щотижня)** — `trending_searches` по US/UK/EU + rising queries з category "Business" → ловимо теми, що тільки починають набирати (перевага першого ходу)
3. **Trend direction check** — коли Ahrefs знайшов гарний ключ, перевіряємо в Trends: інтерес росте, стабільний чи помирає? Падає 2 роки поспіль → дропаємо
4. **Seasonality** — коли публікувати? Trends показує помісячну динаміку → плануємо публікацію за 6-8 тижнів до піку

**Обов'язкове правило:** що б Trends не показав — перед написанням статті **завжди йдемо в Ahrefs перевіряти реальний volume і KD**. Без цього кроку статтю не починаємо.
- **seo-ops скіл** — має python-скрипти під GSC+Ahrefs:
  - `content_attack_brief.py`, `trend_scout.py`, `gsc_client.py`

### SEO/контент скіли
| Скіл | Роль |
|---|---|
| `seo-ops` | Keyword research, Impact×Confidence матриця, trending topics, competitor gap, traffic alerts |
| `seo-audit` | Технічний аудит: crawlability, indexation, Core Web Vitals, on-page |
| `seo-optimizer` | Keyword mapping, topic clusters, internal linking strategy |
| `seo` | Schema, meta tags, sitemap |
| `seo-fundamentals` | E-E-A-T, алгоритмічні принципи (reference) |
| `content-creator` | Написання SEO-статей з brand voice |
| `content-ops` | Експерт-панель 7-10 експертів, score 0-100, ітерує до 90+ (quality gate) |
| `copywriting` + `copy-editing` | Заголовки, meta, Seven Sweeps редактура |
| `conversion-ops` | Оптимізація конверсії landing-сторінок |

### Робочі артефакти (всі в repo)

**`seo-system/rules/` — стандарти всіх агентів:**
- `content-writing.md` — головні правила написання контенту
- `brand-guidelines.md` — brand voice, tone, communication rules
- `seo-copywriting.md` — SEO copy patterns, headlines, structure

**`seo-system/context/` — reference data:**
- `project-state.md` — deployed items, learnings, blocked
- `icp/jtbd-messaging.md` — JTBD framework + ICP + messaging map
- `icp/customer-kitup.md`, `icp/customer-zeptolab.md` — кейси клієнтів (для соціальних доказів в статтях)

**`docs/` (root проєкту) — продуктові і brand документи:**
- `brand-persona-framework.md` — brand persona, tone of voice
- `content_framework.md` — контент-фреймворк (JTBD + performance positioning)
- `blog-articles.md` — формат і правила blog статей
- `facebook-attribution-and-capi.md` — продуктовий контекст по attribution

**`app/` — продуктовий лендинг (single source of truth для product info):**
- `app/use-cases/_data/` + `app/use-cases/[slug]/` — всі use cases (мапа для programmatic SEO)
- `app/customers/[slug]/` — case studies клієнтів (живі продуктові сторінки)
- `app/features/{automation-rules, bulk-launch}/` — feature pages
- `app/solutions/media-buyers/` — solutions pages
- `app/pricing/`, `app/pricing-v2/` — pricing
- `content/blog/` — existing blog статті (для anti-cannibalization checks)

**`seo-system/skills/` — Python tools:**
- `seo-ops/` — `gsc_client.py`, `trend_scout.py`, `content_attack_brief.py`
- `content-creator/`, `content-ops/`, `copywriting/`, `copy-editing/`, `seo-audit/` — Skill packs (промпти + scripts)

> **Важливо:** всі три ядра (brand voice / JTBD+ICP / content framework) треба підключити як `context files` для content-creator, copywriting, content-ops скілів — щоб не винаходити заново і не дрейфувати від бренд-тону. Усі файли — в repo, нічого external.

---

## 3. Архітектура системи — 3 шари

### Шар 1. Розвідка (Intelligence) — щотижня, автоматично

Агент дивиться **GSC (напряму) + Ahrefs + SerpAPI Trends + trend_scout** і видає пріоритизований бриф.

**Джерела й питання, на які відповідає Intelligence-агент:**

| Джерело | Що витягуємо |
|---|---|
| **GSC (напряму через `seo-ops/gsc_client.py`)** | Де ми на позиціях 5-20 (striking distance)? Які наші сторінки втратили позиції за тиждень? Низький CTR при високих impressions? Enrichment volume/KD беремо окремим викликом в Ahrefs тільки для топ-кандидатів |
| **Ahrefs** | Де конкуренти (Birch, Madgicx, adsmanage, kitchn, Ryze AI) ранжуються, а ми ні (content gap)? Які нові ключі з'явились у них? Хто отримав нові backlinks? |
| **Ahrefs Brand Radar** | У яких AI-prompts згадують конкурентів, а не нас? Share of voice vs конкуренти падає? |
| **SerpAPI Google Trends** | **Які запити ростуть (rising/breakout)?** Які нові related queries з'явились по seed-темах? Є сезонні сплески на горизонті 6-8 тижнів? |
| **trend_scout.py** | Що бурлить у HN / Reddit / X / Trends RSS цього тижня в нашій ніші? (broad signals — раннє попередження нових тем) |
| **Ahrefs Site Audit** | Які нові технічні issues з'явились (broken links, crawl errors, Core Web Vitals регресії)? |

**Вихід:** один бриф з 5 секціями:
1. 🔥 **Breakout opportunities** (rising queries з Trends + trend_scout, які ще не має Ahrefs volume — можемо зайти першими)
2. 🎯 **Striking distance** (позиції 5-20 у GSC — найшвидші wins)
3. ⚠️ **Competitor threats** (де нас обганяють, хто отримав нові backlinks)
4. 🤖 **AI visibility gaps** (Brand Radar — де нас не згадує ChatGPT/Perplexity)
5. 🔧 **Technical issues** (нові critical/high fixes)

**Статус:** ✅ напрям погоджено

---

### Шар 1.5 — Prioritization Methodology (як обираємо що робити)

> Без методології беклог перетворюється на хаос. Ця секція — формула, за якою Intelligence-agent ранжує items і видає weekly priorities.

#### Формула SEO Priority Score

```
Score = (Traffic × ICP × Business × Confidence) / Effort × Urgency
```

**7 факторів:**

| Фактор | Що означає | Шкала | Джерело даних |
|---|---|---|---|
| **Traffic Potential** | Monthly трафік при потраплянні в топ-3 | 0-10 | Ahrefs volume × realistic CTR (~30% на поз.1, ~10% на поз.3) |
| **ICP Fit** | Наскільки запит відповідає UA Manager / Founder | 0-5 | Маппінг до JTBD groups A-D (див. content-writing-rules 8.1) |
| **Business Value** | Funnel stage | 1-5 | BOFU (comparison, "best X", "vs") = 5; MOFU (how-to) = 3; TOFU (what is) = 1 |
| **Confidence** | Наскільки впевнені, що спрацює | 0-3 | Є GSC impressions? striking distance? реально beatable top-10? |
| **Effort** | Години роботи (write + review + publish + tech) | 1-10 | Blog article = 3-5h, comparison = 8-10h, pillar page = 20h+ |
| **Urgency** | Time sensitivity | 1-3 | Rising trend / striking distance decay / competitor threat = 3; evergreen = 1 |
| **Existing Asset Bonus** | Multiplier якщо є existing page під update | ×1.5 | З existing-first check (Принцип №3) |

#### Buckets (класифікація поверх score)

| Bucket | Критерії | Приклади |
|---|---|---|
| 🟢 **Quick Win** | Score ≥ 40, Effort ≤ 5h, ≤1 тиждень | Striking distance updates, meta fixes, internal links |
| 🟡 **Strategic Bet** | Score ≥ 35, Effort > 8h, 2-4 тижні | Pillar pages, comparison pages, нові case studies |
| 🔵 **Foundation** | Technical debt, Score irrelevant | Canonicals, schema, redirects, CWV fixes — робимо in parallel |
| 🔴 **Risk / Urgent** | Urgency = 3, будь-який score | Competitor threats, cannibalization, penalty risks |
| ⚪ **Iceberg** | Score < 20 або Confidence < 1 | Long-tail speculation — тримаємо у беклозі, повертаємось коли pipeline вільний |

#### Приклад Intelligence-agent output

```
## Top Priorities — Week of 2026-04-15

### 1. 🟢 Quick Win | Score 48
**Action:** UPDATE existing /blog/ad-automation-rules-101
- Traffic potential: 1,200/mo → +400 clicks if top-3 (8/10)
- ICP: UA Manager (JTBD group A) — 5/5
- Business: MOFU → leads to /features/automation-rules — 4/5
- Confidence: pos 6 у GSC, stable 3 months — 3/3
- Effort: 4h (existing update, +300 слів, FAQ refresh) — 4
- Urgency: striking distance, конкурент оновився 2 тижні тому — 3
- Existing bonus: ×1.5
- **Why now:** pos 6 → 3 реально за 2 тижні, якщо розширимо розділ про Meta rules + додамо real screenshot

### 2. 🟡 Strategic Bet | Score 42
**Action:** CREATE NEW /compare/scalemate-vs-madgicx
- Traffic potential: 400/mo ("madgicx pricing", "madgicx alternative") — 6/10
- ICP: BOFU media buyers — 5/5
- Business: pure bottom funnel — 5/5
- Confidence: 156 impressions на "madgicx pricing 2026" вже, 0 кліків — 2/3
- Effort: 10h (research Madgicx features/pricing + write + design table) — 10
- Urgency: ловимо поки запит гарячий — 3
- **Why now:** GSC показав 156 imp без кліку — є попит і ми вже в SERP, просто контент не конвертує

### Deferred (why not this week):
- "best marketing automation tools 2026" — Score 28 (high effort 15h, confidence 1 — топ-10 це DR 80+ сайти, DR arbitrage складний)
- Refresh /blog/scaling-facebook-ads — Score 22 (low urgency, evergreen, можна за 2-3 тижні)
```

#### Opportunity Cost Tracking

Агент **завжди** показує не тільки top picks, а ще:
- Що **deferred** і чому (щоб ти бачила повну картину)
- Що пішло в **🔴 Risk** (навіть якщо Score низький — все одно треба реагувати)
- Що в **⚪ Iceberg** (speculative — для майбутніх циклів)

**Нащо:** захист від тунельного бачення. Ти бачиш не тільки "ось топ-5", а "ось топ-5, ось 30 інших які відклали, і ось чому".

#### Де живе беклог

**Файл:** `seo-system/workflow/scorecard.md`

Intelligence-agent щотижня оновлює цей файл — додає нові items, перераховує scores, перетегує buckets. Це живий backlog.

---

### Шар 1.7 — Human-in-the-Loop / Approval Checkpoints

> Система ніколи не працює повністю автоматично. Ключові рішення виходять на твій approve.
> Без твого ОК агент переходить до наступної задачі, не публікує.

#### 4 обов'язкові точки approve від Natalia

**🔹 Checkpoint 1 — Weekly Priorities Approval (щопонеділка)**

*Input від агента:*
```
## Priorities — week of [date]

Top 5 items for this week:
1. [bucket | score] — [action] — [why now, 2 sentences]
2. ...

Opportunity cost:
- Deferred: [list with scores and reasons]
- In ⚪ Iceberg: [brief]

Total estimated effort: [Nh]
Expected outcome if executed: [+X clicks, Y pages updated/published]

ACTION NEEDED FROM YOU:
1. ✅ Approve top 5 / ✏️ Swap items / ❌ Reject
2. Any additional context / priority shifts I should know about?
```

*Твоя відповідь:* approve / swap / reject + optional direction

---

**🔹 Checkpoint 2 — Content Structure Approval (перед написанням)**

Перед тим як content-creator agent починає писати повний draft — він видає **outline** (структура H2/H3 + brief content per section) на approve.

*Input від агента:*
```
## Draft outline: [article title]

Primary keyword: [X] | Target length: [N] words | Content type: [blog/comparison/etc]

**Outline:**
H1: [headline]
  TL;DR: [3-5 bullet points, draft]

H2: [Section 1 title]
  - Key points: ...
  - Data to include: ...
  - Internal links: [list]

H2: [Section 2 title]
  ...

**Existing content check:** [UPDATE /url або CREATE NEW]
**Unique angle vs top-5 SERP:** [specific differentiation]

ACTION NEEDED FROM YOU:
1. ✅ Approve structure → proceed to full draft
2. ✏️ Modify sections / reorder / add / remove
3. ❌ Reject (reason)
```

*Твоя відповідь:* approve / modifications / reject + context

---

**🔹 Checkpoint 3 — Input Requests (агент не може без тебе)**

Коли агент бачить, що для якісного контенту треба inputs, які він не може отримати сам, він НЕ галюцинує — він **прапорить** і чекає тебе.

*Типи inputs, які завжди запитуються:*
- **Screenshots інтерфейсу Scalemate** — для how-to, feature pages, comparison
- **Specific client case details** — numbers, timeline, challenge (для case studies)
- **Customer quotes** — реальні (no inventions)
- **Product roadmap / feature specifics** — якщо агент не знайшов у docs/code
- **Pricing details** — тільки з твоєї верифікації
- **Legal / compliance claims** — будь-що YMYL-суміжне

*Формат input request:*
```
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

*Твоя відповідь:* inputs / "skip" / "defer" / "proceed without"

---

**🔹 Checkpoint 4 — Final Publish Approval (перед деплоєм)**

Агент завершив повний draft, пройшов content-ops score ≥ 90, humanizer pass, всі QA checks (розділ 10 `rules/content-writing.md`).

Перед публікацією — фінальний read from Natalia.

*Input від агента:*
```
## Ready for publish: [article title]

Link to draft: [file path або preview URL]
Content-ops score: [X / 100]
QA checklist: all sections passed ✅
AI detector result: Low ✅
Humanizer pass: done ✅

Key decisions made:
- [e.g., "included Appflame quote as real case"]
- [e.g., "dropped section on X because no data"]

Pending publication checks (I'll do after your ✅):
- Schema markup validation
- Image compression
- Internal links added to related old articles

ACTION NEEDED FROM YOU:
1. Read the draft (link above)
2. ✅ Approve → I publish
3. ✏️ Changes needed (specific comments)
4. ❌ Reject (why)
```

*Твоя відповідь:* ✅ / ✏️ / ❌

#### Автоматичні дії (НЕ потребують approve)

Щоб не спамити тебе — ось що агент робить сам:
- ✅ Discovery research (збір даних з Ahrefs/GSC/Trends)
- ✅ Draft outlines (перед Checkpoint 2)
- ✅ Internal QA (content-ops scoring, AI detector)
- ✅ Schema validation
- ✅ Technical audit (виявлення issues) — але fixes потребують approve
- ✅ Backlog maintenance (score recalculation, bucketing)
- ✅ Weekly reports (GSC + Ahrefs + Brand Radar metrics)

#### Escalation rules (коли агент має перервати потік і прийти до тебе)

- 🚨 Знайдено potential **spam policy violation** (канібалізація, scaled content risk)
- 🚨 Client-specific data без верифікації (не знає точних цифр case study)
- 🚨 Conflict з існуючим контентом (написане суперечить іншій статті на сайті)
- 🚨 Негативна reputation для Scalemate у Brand Radar / reviews (треба реагувати)
- 🚨 Великий drop у GSC (>20% clicks week over week)
- 🚨 Competitor вилетів наперед несподівано (можливо наша сторінка просіла)

#### Формат escalation:
```
🚨 ESCALATION — immediate attention

What happened: [concrete observation]
Evidence: [data, screenshots, link]
Risk: [what we lose if we don't react]
Options:
  A) [action 1, consequences]
  B) [action 2, consequences]
  C) [do nothing, consequences]

Recommended: [my take, 1 sentence]
```

---

### Шар 2. Контент (Content) — Discovery + Production

#### 2A. Topic & Keyword Discovery (постійний процес)

**Мета:** генерувати валідований беклог тем з доведеним інтентом. Жодна стаття не пишеться без брифу з цього етапу.

**Джерела ідей (multi-source):**
1. **GSC striking distance** — запити на позиціях 5-30 (найшвидший win)
2. **GSC anonymous queries + low-CTR** — показуємось, але не клікають (title/intent mismatch)
3. **Ahrefs Keywords Explorer** — seed keywords → matching terms, related, questions (з реальним volume і KD)
4. **Ahrefs Content Gap** — що ранжують конкуренти, а ми ні
5. **Ahrefs Brand Radar** — які AI-запити цитують конкурентів (LLM-search канал)
6. **SerpAPI Google Trends** — rising/breakout queries, related queries, trending searches, autocomplete, interest by region (генератор нових ідей/тем)
7. **SerpAPI Google Search (live SERP)** — People Also Ask, related searches, AI Overviews, featured snippets (ідеї формуляцій від реального SERP)
8. **Ahrefs SERP overview** — SERP features на сторінці ранжування (чи є PAA / Featured Snippet / Video / Image pack можливості)
9. **trend_scout.py** — broad firehose з HN / Reddit / X / Trends RSS (раннє попередження про нові теми в ніші)
10. **Customer language** — outreach-відповіді, support, LinkedIn коментарі (мова ICP, реальні болі)

**Валідація кожної ідеї (чекліст):**
- [ ] **Обсяг пошуку** — volume не нижче порогу
- [ ] **Тренд** — volume зростає/падає (volume-history)
- [ ] **Інтент збігається** — топ-10 SERP відповідає тому, що ми хочемо написати
  - Якщо топ-10 це листинги/reddit, а ми пишемо гайд → **дропаємо**
- [ ] **Ranking difficulty vs наш DR** — чи реалістично потрапити в топ
- [ ] **Конкурентний аналіз топ-3:**
  - Слова, структура, розділи
  - Gaps (чого бракує — наша differentiation)
  - Backlink profile (чи реалістично)
- [ ] **Business relevance** — TOFU / MOFU / BOFU tag, чи веде до ICP
- [ ] **SERP features** — чи можна взяти featured snippet / PAA / AI Overview?

**Вихід: валідований topic brief:**
```
Topic: [тема]
Primary keyword: [ключ] (Vol: X, KD: Y, our chance: high/med/low)
Intent: informational/commercial — підтверджено топ-10
Why write: striking distance / competitor gap / trend rising / brand radar
Funnel stage: TOFU/MOFU/BOFU
Angle (як обігнати): конкуренти не покривають X, Y; ми додаємо кейс Z
Target length: ~N слів
Must include: [розділи, FAQ, schema, внутрішні лінки на product pages]
Expected impact: +N clicks/mo через K місяців
```

#### 2B. Production (після валідації) — по типах контенту

Discovery видає **одну чергу брифів**, але production має кілька треків залежно від типу:

**Трек A — Блог-статті** (масовий, 10-20/тиждень)
- `content-creator` пише → `content-ops` скорить → `copy-editing` → approve → publish

**Трек B — Продуктові сторінки (апдейт)** (по-факту, коли Discovery знаходить причину)
- Discovery-агент тригерить: "на продуктовій сторінці X низький CTR / messaging gap / конкурент краще покриває ключ"
- `copywriting` + `conversion-ops` пропонують diff (що саме змінити) → approve → dev-правки
- **Ніколи не переписуємо продуктову сторінку без доведеної причини**

**Трек C — Case studies** (планово, 2-4/місяць)
- Інпути: інтерв'ю/дані з клієнтом (Appflame, Promin, далі нові)
- Шаблон: context → challenge → Scalemate solution (який feature + rules) → implementation → results (metrics) → quote
- `content-creator` + `copywriting` → `content-ops` → approve
- **Найближчі 2 кейси: Appflame + Promin Agency по `rules` feature**

**Трек D — Landing / solution / use-case сторінки** (стратегічно, 1-5/місяць; пізніше — programmatic SEO)
- Discovery знаходить непокритий інтент з комерційним наміром → створюємо нову сторінку
- Шаблон з `scalemate_use_cases_sitemap.md`
- `content-creator` + `copywriting` + `conversion-ops` → `content-ops` → approve

**Трек E — Comparison pages** (стратегічно, 1-3/місяць, високий пріоритет — bottom-funnel)
- Формат: Scalemate vs {competitor} (Madgicx, Birch, adsmanage.ai, інші з SERP)
- Обов'язкова структура: TL;DR з головною різницею → feature-by-feature таблиця → сильні/слабкі сторони кожного → сценарії "коли обрати Scalemate / коли обрати X" → case study або quote → CTA
- Інпути: `Scalemate_Content_Matrix.pdf`, JTBD, реальний аналіз продукту конкурента (features, pricing, отзиви з G2/Trustpilot)
- `content-creator` + `copywriting` + `conversion-ops` → `content-ops` → approve
- **Обережно з tone:** правдиво, без токсичного бешинга конкурентів (це б'є по репутації і Google карає за thin attack content)

**Трек F — Hub / pillar pages** (1-2/квартал, довгостроково)
- Велика сторінка-хаб по topic cluster (напр. `/hub/marketing-automation`)
- Лінкує на 10-20 статей блогу всередині кластеру; з усіх статей — зворотній лінк на hub
- Структура: definition → why it matters → pillars → підрозділи з короткими TL;DR + "read more" → FAQ → resources
- Створюється **після** того, як в кластері вже є 8-12 опублікованих статей (інакше лінкувати немає на що)
- Discovery тригерить hub, коли бачить що в певному topic cluster уже накопичилась критична маса статей

**Трек G — Resources / templates** (1-2/місяць, високий ROI на beklink-и)
- Формати: шаблони (Google Sheets/Notion), чеклісти, калькулятори, playbooks, фреймворки
- Розміщаються на `/resources/{slug}` — gated (email) або ungated (залежно від цінності)
- SEO-цінність: люди природно лінкують на корисні ресурси → organic backlinks → DR росте
- Lead-gen цінність: gated → email-список для outbound-послідовності
- Inputs: JTBD (що болить клієнтам) → який ресурс дав би миттєве значення

**Критичне правило:** жоден контент (будь-якого типу) не створюється/не оновлюється без брифу з 2A. Discovery сам помічає тип контенту на виході брифа (blog / product-update / case-study / landing / comparison / hub / resource).

---

### Шар 3. Технічний моніторинг — щотижня

`seo-audit` + Ahrefs site-audit → пріоритизований список фіксів (High / Med / Low) → виправляємо або делегуємо.

**Статус:** ✅ напрям погоджено

---

## 4. Щоденний / щотижневий ритм

| Коли | Що відбувається |
|---|---|
| Понеділок | Discovery-агент — повний цикл розвідки → оновлення беклогу (30-50 валідованих тем) |
| Щодня | Production-агент — бере топ-N брифів → конвеєр → Natalia аппрувить на ключових точках |
| П'ятниця | Loop-агент — перевіряє публікації минулого місяця: що індексується / ранжується / застрягло → фідбек у Discovery |
| Тиждень | Технічний моніторинг — site-audit → фікси |

---

## 5. Потенційні додаткові модулі (обговорити)

### 5.1. Programmatic SEO
**Що це:** масова генерація landing-сторінок за шаблоном. Одна сторінка = одна комбінація змінних.

**Приклад для Scalemate:**
- Шаблон: `/automation-for/{industry}` або `/{tool}-vs-{tool}` або `/automate-{task}-in-{tool}`
- Комбінації: `automation-for/ecommerce`, `automation-for/agencies`, `automation-for/saas`, `zapier-vs-make`, `automate-lead-scoring-in-hubspot` …
- Результат: одним шаблоном — 50-500+ URL, кожна таргетить довгий хвіст низько-конкурентних запитів.

**Коли має сенс:** якщо є чіткі осі (industry × use case × tool) і реальний пошуковий попит на комбінації. Перевіряється через Ahrefs.

**Ризики:** Google карає за thin/duplicate контент. Треба щоб кожна сторінка мала унікальну цінність (дані, приклад, скрін).

**⚠️ Guard проти Scaled Content Abuse (Google Spam Policy 2024):** Google явно забороняє "generating many pages for the primary purpose of manipulating search rankings and not helping users". Тому:
- **Кожна сторінка має унікальний search intent** (не near-duplicate).
- **Мін. 40% unique content** на сторінці (screenshots, client names, specific data, кейси).
- Near-duplicates — **merge у одну сторінку**, не publish обидві.
- Якщо не можемо дати unique value на шаблонній сторінці — **не публікуємо**.
- Детально — див. `rules/content-writing.md` розділ 4.5 (Spam Policies guardrails).

**Для Scalemate гіпотеза:** сильний кандидат — у вас є use cases × industries × tools. Можна масштабувати на сотні сторінок, які кожна ловить 10-100 кліків/міс. **Але** — з guards вище, інакше ризик penalty.

---

### 5.2. Internal Linking Agent
**Що це:** коли блог росте (50+ статей) — вручну лінкувати статті одна на одну неможливо. Агент після кожної нової публікації:
- Знаходить релевантні старі статті (за semantic similarity або shared keywords)
- Пропонує де в нових статтях поставити лінки на старі
- Пропонує де в старих статтях додати лінк на нову
- Підтримує "topic clusters" — одна pillar-стаття + кластер супутніх, усі лінкують одна на одну

**Чому важливо:** internal links передають "authority" між сторінками, допомагають Google зрозуміти структуру сайту, прискорюють індексацію нових статей. Часто — найдешевший ranking boost.

**Коли включати:** коли буде 20+ статей. Зараз у нас 7 — можна відкласти, але врахувати в архітектурі.

---

### 5.3. Refresh Agent
**Що це:** старі статті з часом втрачають позиції (контент застарів, конкуренти написали свіжіше, змінився SERP). Агент моніторить:
- Які статті впали в позиціях (Ahrefs/GSC history)
- Які статті ранжуються на позиціях 5-15 і їм бракує маленького апдейту щоб залетіти в топ-3
- Які статті "cannibalize" один одного (дві наші сторінки конкурують за той самий ключ)

На виході — список статей для refresh з конкретними інструкціями (додати розділ, оновити дату, розширити FAQ, додати новий приклад).

**Чому важливо:** оновити існуючу статтю часто в 3-5x дешевше, ніж написати нову, а трафіковий ефект — такий самий або більший.

**Коли включати:** з 3-4 місяця, коли набереться достатньо опублікованого щоб було що рефрешити.

---

### 5.4. LLM-visibility (Brand Radar)
**Що це:** ChatGPT / Perplexity / Claude / Gemini стають окремим каналом — люди питають їх "який інструмент для автоматизації ads вибрати" і отримують відповідь зі згадками брендів. Ahrefs Brand Radar трекає, де вас цитують в AI-відповідях.

**Що робити:**
- Моніторити які prompts згадують конкурентів, а не вас
- Писати контент, який LLM-и люблять цитувати: структуровані порівняння, таблиці, цифри, чіткі definitions, statistics
- Додавати schema.org розмітку (FAQPage, HowTo, Product) — LLM-и її парсять краще

**Чому важливо:** зараз це ~5-15% пошукового трафіку, за рік буде 30%+. Хто починає зараз — має перевагу.

**Для Scalemate:** точно треба, бо ваша ЦА (маркетологи/агенції) — активно користуються ChatGPT для research-у інструментів.

---

### Пріоритет модулів (оновлено 2026-04-15):

**MVP (зараз, включно):**
1. Шар 1 Intelligence + Шар 2 Discovery/Production + Шар 3 Technical
2. **LLM-visibility / Brand Radar** — Ahrefs MCP уже підключений, нічого додатково не треба. Інжектимо в Intelligence-брифи (секція "AI visibility gaps") + даємо content-creator правила "як писати так, щоб LLM цитували"
3. **Internal linking rules** — не окремий агент, а **обов'язкові правила для content-creator + перевірка в content-ops**:
   - Кожна нова стаття має 3-7 internal links на існуючі релевантні сторінки (блог, use cases, features, comparison)
   - Топ продуктових сторінок отримують лінк у кожній релевантній статті (hub-like підхід)
   - Якщо тема статті вже частково покрита в старих статтях — обов'язковий лінк туди (і навпаки — у старій статті додати лінк на нову)
   - `content-ops` перевіряє: чи є мінімум 3 internal links? чи вони doorway-like чи контекстні?

**+1 місяць:**
4. **Programmatic SEO** (масштаб через шаблонні landing-и, використовує Discovery-базу)

**+2-3 місяці:**
5. **Internal Linking Agent** (окремий агент, що автоматично знаходить крос-лінкінг можливості у 20+ статей — коли правил з пункту 3 стане мало)
6. **Refresh Agent** (коли буде що рефрешити — потрібна історія просадок)

---

## 6. План наступних кроків

1. ✅ Відповісти на відкриті питання (секція 1) — зроблено
2. **Прочитати існуючі стратегічні документи** (щоб не винаходити заново):
   - [seo-system/rules/brand-guidelines.md](../rules/brand-guidelines.md) — brand voice
   - [seo-system/rules/seo-copywriting.md](../rules/seo-copywriting.md) — SEO copy patterns
   - [seo-system/rules/content-writing.md](../rules/content-writing.md) — content rules
   - [seo-system/context/icp/jtbd-messaging.md](../context/icp/jtbd-messaging.md) — JTBD + ICP + messaging
   - [docs/brand-persona-framework.md](../../docs/brand-persona-framework.md) — brand persona
   - [docs/content_framework.md](../../docs/content_framework.md) — content framework
3. Запустити **діагностику поточного стану** (1-2 години):
   - Прогнати сайт через Ahrefs + GSC
   - Які ключі вже ранжуються, де striking distance
   - Що роблять конкуренти
   - Технічні проколи
   - Чи правильно таргетяться 7 існуючих статей
3. На базі діагностики — фіналізувати архітектуру системи
4. Побудувати MVP: Discovery + Production + Technical
5. Додати модулі з секції 5 по пріоритету

---

