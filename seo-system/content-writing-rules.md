# Scalemate Content Writing Rules

> **Master-документ правил написання контенту** для всіх AI-агентів системи (content-creator, copywriting, copy-editing, content-ops, seo-ops).
> Інжектиться як context у кожного контент-агента. Жоден агент не може ігнорувати ці правила.
> Живий документ — редагуємо, коли виявляємо нові патерни або змінюємо підхід.

---

## 📋 Як користуватись цим файлом

- **Writing agents** (`content-creator`, `copywriting`) — читають усі розділи перед початком роботи
- **QA agents** (`content-ops`, `copy-editing`) — використовують розділ 10 (Review & QA) як чекліст
- **Discovery agents** (`seo-ops`) — посилаються на розділи 2 і 3 при формуванні брифа
- При створенні брифа — кожен бриф має рядок `Rules compliance: content-writing-rules.md sections [list]`

---

## 1. Brand Foundation

### 1.1 Tone of Voice

**Scalemate звучить як:**
- **Confident** — ми знаємо, що робимо, і говоримо прямо
- **Pragmatic** — проблема → рішення → результат (без філософії)
- **Clear** — expert thinking + simple language (не спрощуємо ідеї, спрощуємо мову)
- **Operational** — workflow-centric, не tool-centric
- **Performance-driven** — говоримо цифрами і метриками

**Scalemate НЕ звучить як:**
- Hype-driven ("revolutionary", "game-changer", "cutting-edge")
- Corporate ("leverage synergies", "robust ecosystem", "seamless integration")
- Vague ("powerful platform", "intelligent automation", "unlock the power")
- Academic (занадто довгі вступи, багато "furthermore/moreover")

### 1.2 Приклади "так / не так"

| ❌ Не так | ✅ Так |
|---|---|
| "Automate your campaigns with powerful automation rules" | "Scale campaigns faster by automating repetitive ad operations" |
| "Revolutionize your marketing workflow" | "Launch 150 ads in 20 minutes instead of 8 hours" |
| "In today's fast-paced marketing landscape..." | "Minjae spent 14 hours last week copy-pasting creatives. This week, he spent 40 minutes." |
| "Seamlessly integrates with your existing stack" | "Connects to Meta, TikTok, Google Ads, Unity — with native API (no Zapier required)" |

### 1.3 First Person Usage (pragmatic rule)

- **"We"** дозволено в: CTA секціях, solution sections, founder letters, customer quotes context
- **"We"** уникаємо в: narrative explanations, feature descriptions, how-to guides
- **"You"** — основна форма для reader-facing контенту (прямий адрес до media buyer / founder)
- **"Your team"** — коли говоримо про team-level impact

### 1.4 ICP — кому ми пишемо

**Primary audience (70% контенту):**
- **UA Manager / Media Buyer**
  - Щоденно управляє 5+ концептами × 15+ мовами
  - Multi-platform buying (Meta + TikTok + Google Ads)
  - Операційне навантаження: launching, monitoring, optimization, reporting
  - Біль: "я не встигаю тестувати, бо витрачаю 60% часу на рутину"
  - Мова: технічна, операційна, focused on metrics (ROAS, CPA, CAC)

**Economic buyer (30% контенту):**
- **Founder / CEO / Head of Marketing**
  - Приймає рішення про інструменти
  - Біль: "ми не можемо масштабувати без розростання команди в 3x"
  - Мова: business outcomes (revenue, growth rate, margin, headcount cost)

### 1.5 Core Value Props (використовуємо в кожному тексті, де доречно)

1. **Scale marketing without scaling manual work** (main positioning)
2. **Turn chaos into system** (creative testing / workflow)
3. **Remove operational bottlenecks** (what frees you)
4. **Budget protection + auto-scaling** (financial control)

### 1.6 Proof Points (використовуємо як докази, не decorative)

- **3x faster launches**
- **62% time reduction**
- **80% campaign automation**
- **2M+ ads launched**

> `TODO: додати джерела кожного proof point (коли був зміряний, на якій вибірці клієнтів) — потрібно для credibility і щоб LLM-и цитували`

---

## 2. Content Architecture

### 2.1 Cluster Model (від legacy, залишаємо)

```
FEATURE (pillar — product capability)
   ↓ пояснюється через
USE CASE (intent — "I want to ...")
   ↓ групується в
SOLUTION (ICP identity — "I am a ...")
```

**Приклад:**
- Feature: `/features/automation-rules`
- Use cases, що його використовують: `/use-cases/ad-campaign-automation-rules`, `/use-cases/auto-pause-ads-roas`, `/use-cases/automated-bid-management`
- Solution, куди це веде: `/solutions/media-buyers`

### 2.2 Pain-First Content Approach (ОБОВ'ЯЗКОВИЙ)

> **Правило:** кожна нова стаття починається з болю ICP, а не з ключового слова. Keyword — це як люди знаходять статтю. Pain — це чому вони її читають.

**Обов'язковий pre-work для нових статей:**

1. **Pain research (до outline):**
   - Знайти 3-5 реальних quotes з Reddit/communities де ICP описує проблему **своїми словами**
   - Зафіксувати: яка конкретна біль, як часто, скільки часу/грошей коштує
   - Перевірити: чи наш продукт реально вирішує цю біль (не вигадувати fit)

2. **Структура статті — від болю до рішення:**
   ```
   Біль (ICP language, Reddit quotes, конкретні сценарії)
     → Масштаб проблеми (скільки часу горить, business impact)
       → Які є варіанти вирішення (методи/tools, чесне порівняння)
         → Для кого що підходить (не "our tool is best for everyone")
           → Найпростіший шлях для нашого ICP (CTA на product/tool)
   ```

3. **Чого НЕ робити:**
   - ❌ Починати з "In the world of digital marketing..."
   - ❌ Писати статтю навколо keyword без розуміння чому людина це шукає
   - ❌ Перераховувати features без зв'язку з конкретною біллю
   - ❌ Робити Scalemate hero з першого абзацу — спочатку empathy, потім рішення

4. **Discovery agent обов'язково включає:**
   - Reddit/community scan (Step 6.5 в intelligence-agent.md)
   - Pain language extraction — точні фрази якими ICP описує проблему
   - Ці фрази потім використовуються в H1, intro, problem section

**Чому це працює:** люди шукають рішення проблем, не products. Стаття яка починається з "I spent 14 hours uploading creatives last week" отримує кліки. Стаття яка починається з "Top 10 Creative Upload Tools" — ні.

---

### 2.3 Типи контенту (7 треків з плану системи)

Кожен тип має свій шаблон. Шаблон — стартова точка, не тюрма. Можна адаптувати за контекстом.

#### Трек A — Blog Article

**Формати:** How-to, Listicle, Guide, Comparison-style, Thought leadership

**Структура (how-to):**
```
H1 (outcome-oriented — що читач отримає)
TL;DR (3-5 рядків, для scanners і LLM citations)
Problem framing (1-2 абзаци, мовою ICP)
Why it matters (business impact, цифри)
Manual workaround (як люди вирішують без інструменту — емпатія)
Step-by-step solution (з прикладами, screenshots, code/configs)
Common pitfalls / What to avoid
Results / Success metrics
FAQ (3-5 питань)
CTA (contextual — book demo / try free / read related)
```

**Word count:** 1200-2500 (залежно від complexity)
**Internal links:** min 3 contextual, з яких min 1 на продуктову сторінку і min 1 на інший блог

#### Трек B — Product Page (update only)

Продуктові сторінки апдейтимо **тільки за причиною** (низький CTR, messaging gap, competitor coverage). Структура:
```
Hero (outcome-driven H1 + subhead + CTA)
Problem (що болить зараз)
Solution (як Scalemate це закриває — 3-5 bullets)
How it works (workflow screenshot / diagram + 3-4 кроки)
Social proof (customer logos + 1-2 quotes)
Feature breakdown (з прикладами use cases)
Pricing mention / plan fit (коротко)
FAQ (5-7 питань — з GSC PAA + customer support)
Final CTA
```

**Word count:** 600-1200
**Required elements:** Schema (SoftwareApplication + FAQPage), OG image, Twitter card

#### Трек C — Case Study

**Структура:**
```
H1: [Client name] + outcome metric
   Приклад: "How Appflame launched 3x more campaigns with Scalemate rules"
Hero quote (1-2 речення від клієнта)
Client context (хто вони, обсяги, стек)
Challenge (конкретно, з цифрами до)
Solution (які features Scalemate використали, чому саме ці)
Implementation (як інтегрували, hurdles, timeline)
Results (цифри після, з графіком якщо можливо):
   - Primary metric (час/гроші/обсяг)
   - Secondary metrics
   - Unexpected wins
Pull quote (висловлювання клієнта про досвід)
Similar clients / "If you're like [X], this applies"
CTA (contextual demo / case-specific feature page)
```

**Найближчі 2 до написання:**
- **Appflame** (по `rules` feature) — `TODO: зібрати дані — challenge, setup, метрики до/після, quote`
- **Promin Agency** (по `rules` feature) — `TODO: те саме`

**Word count:** 800-1500
**Required:** реальні цифри (до/після), реальна quote (не переказ)

#### Трек D — Landing / Solution / Use-Case

**Use Case template (з legacy, адаптовано):**
```
H1 (outcome-oriented): "Launch Hundreds of Ads in Minutes"
Problem block: ICP мовою, симптоми, hidden costs (customer quotes)
Why it matters: business consequences (time, money, scale)
Manual workaround: як вирішують без інструменту
How Scalemate solves: feature walkthrough (3-4 steps)
Results: proof points / metrics
Who it's for (ICP marker)
FAQ
CTA: Start trial / Book demo
```

**Word count:** 900-1400 (use cases), 1200-1600 (solutions), 600-900 (feature deep-dives)
**Internal links:** min 3 (до features, related use cases, solutions)

#### Трек E — Comparison Page (Scalemate vs X)

**Структура:**
```
H1: "Scalemate vs {Competitor}: [Differentiating angle]"
TL;DR: одне речення з головною різницею
Quick comparison table (7-10 критеріїв × обидва продукти)
Where Scalemate wins (+ чому — конкретно, з features)
Where {Competitor} wins (чесно — де вони реально кращі або дешевші)
When to choose Scalemate (ICP-specific сценарії)
When to choose {Competitor} (чесно — якщо X, ідіть до них)
Case study / customer voice (хтось, хто перейшов з X → Scalemate)
Pricing comparison (без маніпуляцій)
FAQ
CTA (Book demo with migration support)
```

**Tone правило:** ніколи не trash-талк конкурентів. Це б'є по репутації і Google карає за thin attack content. Говорити правду з фокусом на де ми сильніші.

**Word count:** 1500-2500
**Required:** real feature matrix, pricing accuracy check, schema (ComparisonPage або BlogPosting)

`TODO: написати перший comparison "Scalemate vs Madgicx" — як tracer bullet, перевірити що формат працює`

#### Трек F — Hub / Pillar Page

**Коли створювати:** у кластері вже є мін. 8-12 опублікованих статей. Раніше — немає на що лінкувати.

**Структура:**
```
H1: The Complete Guide to [Topic]
Definition + scope (що входить, що ні)
Why this matters (business context)
The [N] pillars of [topic]
   Pillar 1: [short intro] + link to deep-dive article
   Pillar 2: ...
   ...
Common mistakes / myths
Advanced: [next-level content]
Tools & resources (natural mention Scalemate + комплементарні tools)
FAQ
Related resources / further reading
```

**Word count:** 3000-5000 (це flagship content)
**Internal links:** 15-25 на статті в кластері
**Schema:** Article + BreadcrumbList + FAQPage

#### Трек G — Resources / Templates

**Формати:** Google Sheets / Notion templates, checklists, calculators, playbooks, frameworks

**Landing для кожного ресурсу:**
```
H1: [Template name] — what it does in 1 line
Who it's for (ICP + specific role)
What's inside (preview screenshots / structure)
How to use (3-5 кроків)
Gated form (email → download) OR Direct link (ungated — залежить від цінності)
Related content (блог-пости по темі)
```

**Word count:** 400-800 (landing), сам ресурс — окремо
**SEO-цінність:** люди лінкують на ресурси → organic backlinks → DR росте

### 2.4 Internal Linking Rules

**Правила (не механічно "3-7 лінків", а смислово):**

1. **Min 3 internal links на статтю**, усі — **contextual** (не "click here")
2. **Min 1 лінк на продуктову сторінку** (feature/use-case/solution), яка релевантна темі
3. **Min 1 лінк на релевантний блог/case study**, якщо такий існує
4. **Anchor text** — з primary або secondary keyword цільової сторінки (natural variation)
5. **Якщо стаття торкається теми, що вже покрита в існуючій статті — ОБОВ'ЯЗКОВИЙ лінк туди**
6. **У старій статті додаємо зворотній лінк на нову** (крос-лінкінг, не однобічний)
7. **Hub-like лінкінг** — топ продуктові сторінки (/features/automation-rules, /features/bulk-launch) отримують лінк у кожній релевантній статті

**Anti-patterns:**
- ❌ Doorway-лінки в кінці статті купою без контексту
- ❌ Exact-match anchor на кожному лінку (перекеється оптимізація)
- ❌ Лінкування на нерелевантні сторінки для вигоди
- ❌ Один і той самий anchor на різні сторінки

### 2.5 External Linking Rules

- Лінкуємо на **authoritative sources** (Meta docs, Google Ads docs, industry reports — e.g. HubSpot, Gartner)
- Відкривати в новій вкладці (`target="_blank"` + `rel="noopener"`)
- Не лінкуємо на прямих конкурентів (крім comparison pages, де це очікувано)
- Всі external links з `rel="nofollow"` якщо це sponsored / non-authoritative
- Для user-generated context використовуємо `rel="ugc"`, для paid — `rel="sponsored"`

### 2.6 Site-wide Trust Requirements

> Google: **"Trust is most important. The others contribute to trust, but content doesn't necessarily have to demonstrate all of them."** Без цього навіть найкращий контент не ранжується.

Ці елементи **мусять існувати на рівні сайту** — content-агенти перевіряють їх presence, але не створюють:

**Обов'язкові сторінки:**
- `/pricing` — прозорі ціни, тарифи, що входить у кожен план, без dark patterns
- `/about` — хто ми, команда, реальна інформація
- `/contact` — реальні способи зв'язку (email, форма, адреса), не тільки chat bot
- `/privacy` — privacy policy
- `/terms` — terms of service

**Site-wide signals:**
- Consistent company info у footer (legal entity, юрадреса, registered name)
- Author pages (`/authors/{slug}`) — bio + list публікацій + schema `Person` + `sameAs` на LinkedIn/Twitter
- Security: HTTPS, valid SSL, no mixed content
- Mobile-friendly, no intrusive interstitials
- Core Web Vitals у зеленому

**Pricing transparency rules (критично):**
- Ціни видно без реєстрації
- Немає hidden fees / surcharges що з'являються на checkout
- Free trial / cancellation terms прозорі
- Apples-to-apples comparison між тарифами зрозумілий
- Якщо є "Contact for pricing" — поряд мають бути орієнтири (from $X, or "Enterprise" category)

**Content-агент при роботі з pricing-сторінкою:**
- Не пропонувати dark patterns навіть заради конверсії
- FAQ з чесними відповідями ("what happens if I cancel?", "is there a contract?")
- Якщо tier різняться — чітка feature-matrix

---

## 3. Writing Standards

### 3.1 Heading Hierarchy

- **H1** — один на сторінку, outcome-oriented, містить primary keyword (природно)
- **H2** — основні розділи, 5-8 на статтю, кожен описує discrete topic
- **H3** — підрозділи H2, використовуємо коли розділ > 300 слів
- **H4+** — рідко, тільки якщо реально структурно потрібно

### 3.2 Readability

- **Paragraph length** — 2-4 речення максимум. Один-речення абзаци дозволені для акценту.
- **Sentence length** — варіативна. Середнє 15-18 слів, але з коливаннями. Короткі. І довгі, які пояснюють нюанс.
- **Active voice** — default. Passive тільки коли є вагома причина.
- **Lists** — bullet коли порядок не важливий, numbered коли послідовність. Max 7 пунктів — далі розбивати.
- **Tables** — для порівнянь, feature matrixes, step-by-step references
- **Bold** — для акценту на key terms і проactive facts, не для ціллі речень
- **Code blocks / screenshots** — там, де показуємо інтерфейс Scalemate, configs, або technical integration

### 3.3 Keyword Integration

- **Primary keyword:** у H1, перших 100 словах, meta title, URL slug, min 2 natural mentions у body
- **Secondary keywords** (3-5): розподіляються по H2, meta description, body
- **LSI / semantic variations:** природна варіація (не плутати з keyword stuffing)
- **Max density:** 2% primary keyword (якщо стаття 1500 слів — max 30 згадок)
- **Заборонено:** keyword stuffing, exact match у неприродних конструкціях

### 3.4 Dates / Numbers / Data

- **Дати:** завжди конкретні, не "recently" чи "in the past year" (у 2026 читаючи буде 2028)
- **Числа > 1000:** з комою (`2,500`), не `2500` і не `2.500`
- **Відсотки:** завжди зі знаком `%`, не `percent` (в EN)
- **Валюта:** $ з пробілом або без (consistent у межах статті)
- **Джерела даних:** inline посилання або footnote ("as of April 2026, from Scalemate internal benchmarks")

---

## 4. SEO Technical

### 4.1 Title & Meta — Writing Methodology

> Ця секція — повний workflow для створення або зміни title + meta description на будь-якій сторінці.
> **Правило:** жодна title/meta зміна не робиться "по інтуїції". Тільки через цю методику.

#### 4.1.1 Mandatory Pre-Work (ДО написання)

**Без цих 5 кроків агент не має права починати писати:**

1. **Read actual content** — повний WebFetch або Read сторінки:
   - H1, всі H2, всі H3
   - Реальні числа, цифри, ціни, claims, статистика (точні значення, не "приблизно")
   - Comparison таблиці — кількість рядків, які саме feature, які саме competitors
   - FAQ — скільки питань і які саме
   - Word count
   - **Без цього кроку НЕ ПИСАТИ** — будь-який fabricated number у meta = обман + ризик Google penalty
2. **SERP analysis** — через SerpAPI Google Search на primary keyword:
   - Витягти top 5-10 результатів (title + meta snippet + domain)
   - Окремо зазначити SERP features (AI Overview, PAA, inline videos, featured snippet)
   - Зазначити тип domains (third-party review sites? competitor landings? official? Reddit?)
3. **Pattern extraction** — що РОБЛЯТЬ позиції 1-3:
   - Формати заголовків (question / number / comparison / pain / curiosity)
   - Чи є брендова назва в title?
   - Що обіцяє snippet (help decide / compare / review / list)?
   - Які power elements? (year, numbers, audience specificity)
4. **Intent classification** — відповісти на питання:
   - Чи можемо ми реально виграти цей SERP? (наш DR vs top-3 DR, наш контент vs їх контент)
   - Якщо в топ-3 — third-party reviews (Trustpilot/G2/Reddit) → **ми не переможемо цей intent**, треба таргетити інший
   - Якщо в топ-3 — competitor landings → **ми можемо зайти**, треба позиціонувати
5. **Unique angle identification**:
   - Що **ми** даємо, чого немає в топ-5? (multi-platform / specific ICP / specific pain / pricing transparency / first-hand experience)
   - Це — основа нашого differentation у title/meta

6. **Template audit** — перевірити як title реально рендериться у production:
   - Чи має page template automatic transformations (suffix/prefix/brand append)?
   - Для blog: `app/blog/[slug]/page.jsx` — додає `| Scalemate Blog` якщо не встановлено `absoluteTitle: true`
   - Для product pages: `app/[section]/page.jsx` — контролюється прямо в metadata export
   - **Якщо template трансформує title** — або приймати це у розрахунок, або встановити opt-out flag

**Вихід pre-work:** короткий бриф з 6 секцій вище. Без брифа — не пишемо.

---

#### 4.1.2 Character Counts

- **Title tag:** 55-60 characters (hard cap 60 — Google обрізає)
- **Meta description:** 150-160 characters
- **URL slug:** короткий, kebab-case, без stop words, містить primary keyword
- **Canonical tag:** self-referencing (крім редіректів)
- **OG title + description:** можуть бути довшими, optimized для соцмереж (attention-grab)
- **OG image:** 1200x630 (recommended також 16x9, 4x3, 1x1 varianti)
- **Twitter Card:** summary_large_image
- **H1:** унікальний на сайті, НЕ збігається з title tag дослівно (різні функції — title = SERP, H1 = page)

---

#### 4.1.3 Brand Placement Rules (КОЛИ ставити "Scalemate" у title)

**✅ Scalemate В TITLE коли:**
- Homepage і основні product/feature pages
- Branded queries (`scalemate pricing`, `scalemate for X`)
- Case studies (client-specific — "How X Achieved Y with Scalemate")
- Коли читач вже знає бренд (post-awareness стадія)

**❌ Scalemate НЕ В TITLE коли:**
- Alternative intent (`X alternative`, `alternatives to X`)
- Comparison intent (`X vs Y`) — якщо ми не одна зі сторін ЯВНО
- Listicle intent (`Top N tools for Y`)
- How-to / educational TOFU content
- **Правило:** якщо SERP-аналіз показав що топ-10 НЕ ставлять свій бренд у title — ми теж не ставимо. Це патерн Google-alignment з intent.

**Meta description:**
- Не починаємо з "Scalemate is..." у meta — спочатку pain/benefit для читача
- Бренд у meta як solution, не як subject
- Окей згадати бренд через 1 pain point: *"Tired of X? [Solution/Scalemate] does Y."*

**⚠️ Blog articles — template suffix (Scalemate-specific):**

У `app/blog/[slug]/page.jsx` є автоматичний template який дописує `| Scalemate Blog` до кожного title. Для alternative/comparison intent це ПОРУШУЄ правило 4.1.3.

**Workflow для alternative/comparison blog articles:**
1. У frontmatter встановити `absoluteTitle: true` — це відключає auto-append suffix
2. Title у frontmatter буде використаний exactly as-is
3. Для брендових/TOFU статей — НЕ встановлювати `absoluteTitle` (suffix корисний для branding)

**Для product pages (`app/features/*`, `app/use-cases/*`):**
- Title задається прямо у `page.jsx` metadata export — там немає auto-append, контролюємо повністю

---

#### 4.1.4 Mandatory Content Rules

Кожен title і meta **ОБОВ'ЯЗКОВО містить:**

1. **Primary keyword** — natural placement (не forced, не stuffing)
   - Title: primary keyword у перших 3 словах де можливо
   - Meta: primary keyword у перших 100 символах

2. **Honest representation** — meta/title відображають РЕАЛЬНИЙ зміст сторінки
   - Якщо у статті 3 tools сравниваются — пишемо "3", а не "10"
   - Якщо у статті немає case study — не обіцяємо "real customer stories"
   - Якщо ціна $99-$329 (реальний range зі статті) — не пишемо "$49"

3. **Reader benefit (outcome, не feature):**
   - ❌ "We have 50 automation rules"
   - ✅ "Automate 50+ campaign tasks without writing code"

4. **Differentiation markers:**
   - 1-2 елементи, які відрізняють нашу сторінку від топ-5
   - Scope ("multi-platform"), audience ("for agencies"), specificity ("$99-$329 pricing breakdown")

---

#### 4.1.5 Power Elements (proven CTR drivers з SERP-аналізу)

Кожен title/meta **повинен містити ≥2** з цих елементів:

| Element | Приклад | Коли використовуємо |
|---|---|---|
| **Specific numbers** | "10 alternatives", "3x faster", "$99/mo" | ЗАВЖДИ коли число реально в контенті |
| **Year marker** | "2026" | Reviews, comparisons, "best of" lists |
| **Question format** | "Thinking About X?", "Is X Worth It?" | Empathetic hook, pos 1 winners часто це роблять |
| **Curiosity gap** | "Where X Falls Short", "What They Don't Tell You" | Легко переборщити — обережно |
| **Audience specificity** | "for Multi-Platform Teams", "for Agencies" | Сигналізує "це для тебе" |
| **Pain acknowledgment** | "Tired of X?", "Struggling with Y?" | Відкриває empathy, показує розуміння |
| **Direct comparison** | "X vs Y", "X or Y?" | Comparison/alternative intent |
| **Promise of specificity** | "Real Comparison", "Honest Breakdown" | Credibility proxy |

---

#### 4.1.6 Banned Patterns (автоматичний REJECT)

**Жоден з цих паттернів не повинен потрапити в прод:**

1. ❌ **Fabricated numbers** — "Top 10" коли в статті 3
2. ❌ **Generic superlatives без proof** — "The Best", "The Ultimate" (тільки для тих випадків, де можемо це підкріпити даними чи структурно — pillar pages)
3. ❌ **Clickbait** — "You Won't Believe", "This One Trick", "Shocking"
4. ❌ **Attack на конкурентів** — "Madgicx is Terrible", "Avoid Madgicx" (illegal + Google penalty risk)
5. ❌ **Keyword stuffing** — `bulk ad launch | ad launcher | bulk ad | bulk launch tool`
6. ❌ **Scalemate brand у title для alternative/comparison/listicle intent** (див. 4.1.3)
7. ❌ **Generic AI-fluff** — "In the ever-evolving landscape of", "Dive into the world of"
8. ❌ **Обіцянки яких немає у body** — "Customer stories inside" якщо немає
9. ❌ **Promotional phrasing про конкурентів у title/meta** — "where [Competitor] fits best", "where [Competitor] wins", "[Competitor] is the better choice", "best for X is [Competitor]". Це активно steering traffic до competitor'a = проти бізнес-інтересів. **Згадка competitor'a neutrally = OK, promotion = не OK.**
10. ❌ **B2B-cliche credibility claims** — "honest take inside", "real talk inside", "no BS inside" — detected as AI-generated cliche by humanizer panels. Замінюємо на specific credibility signals ("verified", "tested on X accounts", "based on N interviews")
11. ❌ **Flat connector verbs** — "plus a quick take on X", "and a brief look at Y" — слабкі, читач не бачить value. Заміняємо на directional: "plus a brief note on X" (OK — neutral), "where X comes up short" (OK якщо article support), "how X compares" (OK).

#### 4.1.6.1 Allowed Competitor Mention Patterns

Коли у title/meta згадуємо competitor'a (для completeness або comparison intent) — **neutral framing**:

**✅ OK (neutral mentions):**
- "brief note on [Competitor]"
- "[Competitor] covered briefly"
- "plus [Competitor] in context"
- "how [Competitor] compares"
- "[Competitor] in the mix"
- "includes [Competitor] breakdown"

**❌ NOT OK (active promotion):**
- "where [Competitor] fits best"
- "where [Competitor] wins"
- "when [Competitor] makes sense" (implies steering)
- "[Competitor] is the better choice for X"

**Різниця:** neutral mention дає reader'у **scope signal** (knowing what to expect inside article) без steering до competitor'a. Promotion pattern активно продає competitor, що погано для нашої conversion воронки.

---

#### 4.1.7 Selection Methodology (як обираємо з варіантів)

**Обов'язковий workflow для ВСІХ title/meta змін:**

**Step 1 — Generate variants**
Агент генерує:
- 5-6 title варіантів (різні angles — question / number / comparison / pain / specificity)
- 5-6 meta варіантів (різні hooks — pain-first / benefit-first / curiosity / credibility)

**Step 2 — Dropout automaticі** (відкинути без scoring)
Будь-який варіант з:
- Banned pattern (див. 4.1.6)
- Character count fail (>60 title / >160 meta)
- Невідповідність фактичному контенту (fabricated numbers, unsupported claims)

**Step 3 — Content-Ops Expert Panel Scoring (ОБОВ'ЯЗКОВО)**

Викликаємо `content-ops` skill для панелі 7-10 експертів. Кожен title+meta pairing оцінюється по **6 criteria (0-5 балів кожна, max 30 total)**:

| # | Criterion | 0 = fail, 5 = excellent |
|---|---|---|
| 1 | **Intent match** | Наскільки title/meta відповідає SERP, який таргетимо? |
| 2 | **Honesty** | Чи відображає реальний зміст сторінки? |
| 3 | **CTR potential** | ≥2 power elements з 4.1.5? |
| 4 | **Differentiation** | Унікально vs top-10 SERP? |
| 5 | **Brand voice** | Scalemate tone (confident, pragmatic, operational)? |
| 6 | **Character count** | В межах 55-60 title / 150-160 meta? |

**Score breakdown:**
- **25-30:** Excellent — deploy-ready
- **20-24:** Good — можна deploy, але варто ще одна ітерація
- **< 20:** Reject — переписати

**Step 4 — Present top 2-3 to Natalia**
Show:
- Top 3 pairings зі scores
- Breakdown по criteria для кожної
- Моя рекомендація з обґрунтуванням
- SERP-patterns що підтвердили цей вибір

**Step 5 — Human approval**
Natalia обирає одну пару (або модифікує).

**Step 6 — Deploy**
- Update article (title, meta, OG tags — sinchronno)
- GSC → Request Indexing
- Log у `workflow/pipeline.md` секція `📊 Monitoring` (запустити `python3 seo-system/scripts/detect-metadata-changes.py --days 30` — скрипт сам згенерує рядок)

---

#### 4.1.8 Post-Publish Tracking

**Обов'язково після deploy:**

1. **Baseline capture (до зміни):**
   - CTR (30-day average)
   - Impressions (30-day avg)
   - Position (30-day avg)
   - Clicks (30-day total)

2. **Tracking у `workflow/pipeline.md` секція `📊 Monitoring`:**
   ```
   | Item | Deployed | Baseline (-30d) | Current | Next check | Change | Decision |
   ```
   Запускати `python3 seo-system/scripts/detect-metadata-changes.py --days 30` — скрипт сам тягне baseline/current з GSC і генерує рядок.

3. **Milestone decisions:**
   - **T+7 days:** Google переіндексував? (перевірити live SERP)
   - **T+14 days:** Чи CTR рухається? Якщо так — продовжуємо моніторити. Якщо ні — сигнал
   - **T+28 days:** Final decision
     - ✅ CTR ≥ 2x baseline → keep, success
     - ⚠️ CTR 1.5-2x baseline → keep, minor iteration
     - ❌ CTR < 1.5x baseline → escalate (архітектурна зміна: split URL, 301, нова сторінка)

4. **Rollback criteria:**
   - CTR впав >30% від baseline
   - Impressions впали >50%
   - Position просіла >3 позицій стабільно

---

### 4.1.10 Pre-Deploy Verification (ОБОВ'ЯЗКОВИЙ крок)

> Ніколи не deploy-ити title/meta зміну без реальної перевірки як воно рендериться.

**Перед merge/deploy:**

1. **Start dev server:** `npm run dev`
2. **Open live URL:** `http://localhost:3000/[page-path]`
3. **Перевірити `<title>` tag:**
   ```bash
   curl -s http://localhost:3000/[page-path] | grep -i '<title>'
   ```
   Має збігатись з очікуваним title (без несподіваних suffix/prefix від template)
4. **Перевірити `<meta name="description">`:**
   ```bash
   curl -s http://localhost:3000/[page-path] | grep -i 'description'
   ```
5. **Перевірити OG tags:**
   ```bash
   curl -s http://localhost:3000/[page-path] | grep -i 'og:'
   ```
6. **Перевірити Twitter Card:**
   ```bash
   curl -s http://localhost:3000/[page-path] | grep -i 'twitter:'
   ```
7. **Перевірити JSON-LD schema** (headline, name):
   ```bash
   curl -s http://localhost:3000/[page-path] | grep -i 'headline\|@type'
   ```
8. **Визуально у браузері:** відкрити DevTools → Elements → `<head>` — візуально переглянути всі meta tags

**Якщо будь-що не збігається з очікуваним:**
- Знайти де трансформується (template, layout, middleware)
- Або змінити template щоб респектував наш ввід
- Або додати opt-out flag (як `absoluteTitle: true` для blog)

**Після deploy на prod:**
- Повторити ці ж перевірки на prod URL (після Vercel deploy settled)
- GSC URL Inspection → Rendered HTML → подивитись що Google бачить (може різнитись через SSR/ISR timing)

---

### 4.1.11 Author Bylines & Date Signals

> Окремі технічні елементи сторінки, не пов'язані прямо з title/meta methodology.

**Author byline (обов'язково на кожній content-сторінці):**
- Видима byline: "Written by [Name], [Role] at Scalemate" — на початку або під H1
- Link на author page (`/authors/{slug}`)
- Author page зі schema `Person` + `sameAs` LinkedIn / Twitter
- Короткий bio (1-2 речення) з credibility markers
- **Нащо:** Google rater'и не можуть оцінити Expertise / Authoritativeness без видимого автора. Без byline сторінка автоматично вважається low-trust.

**Dates — критично:**
- `datePublished` — ставиться один раз при публікації
- `dateModified` — оновлюється **тільки при реальних edit'ах**
- Видима "Last updated: [date]" у UI
- **Заборонено** змінювати dateModified без реальних змін — це Google explicit antipattern ("artificially changing dates for freshness")
- Якщо оновлюємо статтю — додаємо short changelog або "What's new in this update" секцію

### 4.2 Schema Markup

**⚠️ Важливо розуміти (станом на 2026):**

Google прибрав rich results для кількох schema типів, але markup все одно корисний для:
- **LLM citations** (ChatGPT / Perplexity парсять structured data краще)
- **Semantic clarity** (Google розуміє структуру контенту)
- **Майбутньої сумісності**

**Що ЗМІНИЛОСЬ:**
- **HowTo schema — rich results removed (September 2023).** Markup робимо, але не очікуємо step-by-step carousel у SERP
- **FAQPage schema — rich results тільки для well-known health/government sites (August 2023).** Для Scalemate rich snippet не з'явиться. Markup робимо для семантики і LLM.

**Оновлена матриця (primary schema на тип):**

| Тип контенту | Primary schema | Required properties | Recommended |
|---|---|---|---|
| Blog article (будь-який формат) | **Article** + BreadcrumbList | жодних required | `headline`, `author` (+name, url), `datePublished`, `dateModified`, `image` (16x9, 4x3, 1x1), `publisher`, `mainEntityOfPage` |
| Product / feature page | **SoftwareApplication** | `name` + один з: `offers`, `aggregateRating`, `review` | `applicationCategory`, `operatingSystem`, `offers.price`, `offers.priceCurrency`, `aggregateRating` |
| Case study | **Article** (Case Study flavor) | — | Article set + вкладений `about: Organization` (клієнт) |
| Comparison page | **Article** + `ItemList` | `ItemList.itemListElement` | Article set + `ItemList.name` |
| Hub / pillar | **Article** + **BreadcrumbList** | BreadcrumbList: `itemListElement` з `position`, `name`, `item` | Article set |
| Resource / template landing | **Article** або `CreativeWork` | — | Article set |
| **FAQ section** (вкладена в будь-яку сторінку) | **FAQPage** (тільки для семантики, не для rich result) | `mainEntity` (≥1 Question), `Question.name`, `Question.acceptedAnswer`, `Answer.text` | — |
| Author page (`/authors/{slug}`) | **Person** | `name` | `jobTitle`, `worksFor`, `url`, `sameAs`, `image`, `description` |

**Що НЕ використовуємо (або з обережністю):**
- ❌ **HowTo** — не дає rich result. Якщо хочемо явний "step" markup для LLM — можна, але без очікування SERP-ефекту
- ⚠️ **Review / AggregateRating** — тільки якщо реально збираємо відгуки. Фейкові reviews = Google penalty

`TODO: створити папку seo-system/templates/schemas/ з ready-to-paste JSON-LD для кожного типу вище`

### 4.3 Cannibalization Prevention

**Перед публікацією кожного контенту — обов'язкова перевірка:**

1. Пошук по GSC: чи показуються вже наші сторінки на цей primary keyword?
2. Пошук по Ahrefs `site-explorer-organic-keywords`: яка сторінка вже ранжується?
3. Якщо знайдено:
   - Якщо інтент однаковий → **UPDATE existing, не створюй нову**
   - Якщо інтент різний (одна TOFU-гайд, інша BOFU-comparison) → OK, створюй, але **додай крос-лінк і clear differentiation**

### 4.4 Core Web Vitals (для нових сторінок)

- Image optimization (WebP/AVIF, next/image у Next.js, alt text)
- Lazy loading для below-fold images
- Font preload для основного font
- No layout shifts (reserve space for images, ads)
- Schema markup не має ламати LCP

### 4.5 Google Spam Policies — Guardrails

> Google карає (manual actions або algorithmic demotion) за ці паттерни. Агент **не має** їх виконувати навіть при прямому запиті.

Список заборонених паттернів (офіційні Google Spam Policies):

- **Scaled content abuse** — генерація багатьох сторінок в першу чергу для ранжування, не для користі. Навіть якщо пишеться людиною. Кожна сторінка має мати унікальну цінність.
- **Doorway pages** — набір near-duplicate сторінок, що ведуть в ту саму точку. **Критично для нашого cluster model:** кожен use-case має мати **унікальний search intent**, інакше — merge, не publish обидва.
- **Keyword stuffing** — керамічні повтори. Наш 2% cap у 3.3 це покриває.
- **Cloaking** — показувати Googlebot'у інше, ніж користувачу.
- **Sneaky redirects** — redirect веде не туди, куди очікує читач.
- **Hidden text / links** — white-on-white, display:none для SEO-tricks.
- **Link spam** — paid links без `rel="sponsored"`, PBN, exchange schemes, excessive link trading.
- **Scraping / thin rewriting** — summarize other content without substantial added value.
- **Thin affiliate** — list of tools з чужими описами, без власної аналітики.
- **Site reputation abuse** ("Parasite SEO") — не публікуємо стороннє SEO-content на scalemate.co для чужого авторитету.
- **Expired domain abuse** — не купуємо expired domains для 301 → scalemate.
- **Misleading functionality** — не обіцяти "free X" якщо всередині gate.
- **User-generated spam** — якщо коментарі/форум/UGC — обов'язкова модерація.
- **Machine-generated traffic** — не робити auto-rank-check через Google напряму (використовуємо GSC/Ahrefs MCP).
- **Hacked content / malware** — стандарт безпеки.

**Якщо агент бачить, що бриф підштовхує до spam-pattern** (напр. "давайте зробимо 50 однакових landing-ів для long-tail") — він ОБОВ'ЯЗКОВО прапорить це Natalia: "ризик scaled content abuse — що робимо?"

### 4.6 YMYL (Your Money / Your Life) Handling

Тематики, близькі до YMYL у нашій ніші: **ad spend, pricing, ROI/ROAS forecasts, budget recommendations, CAC benchmarks, performance promises**.

Google застосовує суворіші standards до такого контенту.

**Правила для YMYL-суміжних тем:**
- Всі цифри з **inline citation + дата** (джерело, коли виміряно, на якій вибірці)
- Не робити forecasts без qualifiers ("typically, based on our benchmarks with [N] clients" замість "you will see X%")
- Не обіцяти guaranteed results ("X will get you Y" → "клієнти з подібним setup побачили Y% в нашій практиці")
- Disclaimer: "Results vary by account setup, niche, and budget"
- Автор таких статей — має явну expertise signal (role, experience, public profile)
- Джерела: пріоритет primary — Meta Business, Google Ads Help, Unity docs, наші власні benchmarks. НЕ цитуємо "X said in a Medium article" без перевірки.

---

## 5. LLM-Visibility Rules

> Ціль: щоб Scalemate цитували в ChatGPT / Perplexity / Claude / Gemini відповідях.

### 5.1 Що LLM-и люблять цитувати

- **Чіткі definitions** — "X is a Y that does Z" в першому абзаці
- **Statistics with sources** — "According to [source], X% of media buyers..."
- **Comparison tables** — structured data, де LLM може витягти cell-level факти
- **Step-by-step how-tos** — numbered, actionable, specific
- **Unique POV / opinion** — "Contrary to popular belief, X..." (якщо справді унікально)
- **Numbered lists** — "5 reasons", "3 mistakes", легко парсити
- **FAQ секції** — direct Q&A матчиться з user prompts

### 5.2 Що LLM-и пропускають

- Довгі narrative intro без фактів
- Фразеологія без subject matter
- Generic claims without proof
- Pure PR copy
- Duplicate content (LLM вже має 100 тих самих статей)

### 5.3 Правила для LLM-friendly контенту

1. **TL;DR на початку** — одна секція з 3-5 bullet points, які стисло дають відповідь на головне питання статті
2. **Definitions у першому абзаці** — "X is...", "Y means..."
3. **Structured data** — таблиці, списки, schema
4. **Factual density** — мін. 3 проactive facts на 1000 слів (цифри, дати, джерела)
5. **Opinion / POV markers** — "We believe...", "In our experience...", "Contrarian take:"
6. **Direct answers до common questions** — FAQ з питаннями як у Google PAA

### 5.4 Моніторинг

**Щотижня** — Ahrefs Brand Radar:
- Impressions / mentions history
- Share of voice vs конкуренти (Birch, Madgicx, adsmanage, kitchn)
- Which prompts cite competitors but not us
- Cited pages / domains (звідки LLM-и тягнуть дані про нас і про них)

---

## 6. Anti-AI Content Rules (КРИТИЧНО)

> Поточний стан (Ahrefs AI content level): 6 Low / 3 Moderate / 0 High.
> **Target KPI: 100% Low.** Moderate — не публікуємо, повертаємо на доопрацювання.

### 6.1 Чому це важливо

- Google не карає за AI напряму, але AI-sounding текст = generic = низька якість = падіння позицій через низький dwell time
- LLM-и не цитують AI-fluff (немає unique insights для вибору)
- E-E-A-T: "Experience" + "Expertise" — AI текст бракує цих сигналів
- Читачі закривають вкладку за 10 секунд, якщо перше речення generic

### 6.2 Що робить текст "AI-sounding"

1. **Generic openers** — "In today's fast-paced world", "In the ever-evolving landscape of..."
2. **Transition word overload** — "Furthermore", "Moreover", "Additionally" через речення
3. **Однакова довжина речень** — три підряд по 15-20 слів
4. **Абстрактні заяви без прикладів** — "This revolutionizes productivity"
5. **Списки без глибини** — "5 benefits" де кожен пункт 1 речення
6. **Повторення ключа без варіацій**
7. **Нульова перспектива / POV** — немає "ми вважаємо", "у нашому досвіді"
8. **Stock phrases** — "Let's dive in", "It's important to note"
9. **Відсутність customer voice** — немає цитат, прикладів з реальних клієнтів

### 6.3 Практичні правила (кожне — checkable)

#### Правило 1. Конкретика у першому реченні
- ✅ "Minjae spent 14 hours last week copy-pasting creatives into Facebook. This week, 40 minutes."
- ❌ "In today's fast-paced marketing landscape, efficiency is paramount."

#### Правило 2. Min 3 proactive facts / 1000 слів
Реальні цифри, цитати, джерела, дати. Не "studies show" без посилання.

#### Правило 3. Варіативна довжина речень
Коротке. Потім довге, яке пояснює нюанс, дає приклад або вводить контрarg. Знову коротке. Три підряд по 15-20 слів = переписати.

#### Правило 4. POV injection
У кожному H2-розділі має бути хоча б 1 фраза з явною позицією:
- "We believe that..."
- "Contrary to popular advice..."
- "Most guides say X. We disagree, because..."
- "In our experience working with [500+ media buyers]..."

#### Правило 5. Customer language
Бери фрази з outreach responses, customer quotes з JTBD, LinkedIn коментарів, Intercom support.
- Media buyer каже: "I need to launch 50 ads before Friday without losing my mind"
- НЕ каже: "I need to leverage synergies to optimize workflow"

#### Правило 6. Blacklist 20+ stock phrases (заборонено)

Generic openers:
- ❌ "In today's fast-paced world"
- ❌ "In the ever-evolving landscape of [X]"
- ❌ "In this article, we'll explore"
- ❌ "Let's dive in"

Vague claims:
- ❌ "It's important to note"
- ❌ "It goes without saying"
- ❌ "Needless to say"
- ❌ "At the end of the day"

Buzzwords:
- ❌ "Revolutionary"
- ❌ "Game-changer" / "Game-changing"
- ❌ "Cutting-edge"
- ❌ "State-of-the-art"
- ❌ "Next-generation" / "Next-gen"
- ❌ "Unlock the power of"
- ❌ "Take [X] to the next level"

Corporate-speak:
- ❌ "Leverage synergies"
- ❌ "Robust ecosystem"
- ❌ "Seamless integration"
- ❌ "Intelligent automation" (занадто vague)
- ❌ "Holistic approach"
- ❌ "Best-in-class"
- ❌ "Enterprise-grade" (як маркер — можна, якщо доречно)

Transition overload (використовувати помірно):
- ⚠️ "Furthermore" — max 1 на статтю
- ⚠️ "Moreover" — max 1 на статтю
- ⚠️ "Additionally" — замінити на "also" або переробити речення

#### Правило 7. First-hand Experience Marker (критично для E-E-A-T)

> Experience = #1 нова літера в Google E-E-A-T (додана December 2022).

У кожній how-to, use case, case study, feature deep-dive — **мінімум 1** з цих маркерів:

- **Real screenshot** інтерфейсу Scalemate (не stock image, не illustration)
- **Реальна client-specific деталь** ("When we onboarded Appflame last quarter, we hit a throttling issue at 50 rules per account")
- **Власний експеримент** ("We tested this workflow on 500 campaigns across 3 accounts and found...")
- **Version / date marker** ("Tested on Scalemate v2.4, April 2026")
- **Reference на customer interview** (з посиланням на real case study, не вигадка)
- **Authorial anecdote** від founder або team member ("When I was managing UA at [previous company], I burned $X on [mistake]. Here's what changed my approach.")

**Чому критично:** Google rater'и активно шукають signals, що автор **реально робив** те, про що пише. Без цього — стаття виглядає теоретично і понижується в ранжуванні.

**Заборонено:**
- ❌ Вигадувати client details або numbers
- ❌ Stock photos як "screenshots"
- ❌ Generic "many users report..." без real source

#### Правило 8. AI Disclosure (Transparency)

Якщо чернетка статті написана AI-агентом (content-creator) і потім відредагована людиною — додаємо прозорий footer або author note.

**Варіант A — footer у статті:**
> *This article was drafted with AI assistance (Claude) and reviewed, edited, and fact-checked by [Name] before publishing.*

**Варіант B — в author bio / article metadata:**
> *Co-authored by: [Human name] (editor) + AI draft assistant.*

**Нащо:**
- Google "Who / How / Why" framework — вимагає прозорості як було створено
- Не є rank penalty per se, але **appeared disclosure** — Trust signal для читачів і rater'ів
- Захист від майбутніх алгоритмічних апдейтів, що можуть знижувати нерозкритий AI-контент

**Коли НЕ треба disclosure:**
- Якщо стаття написана людиною з нуля (навіть з AI-assisted research)
- Якщо AI використаний тільки для grammar check / editing

#### Правило 9. Audience-Language Filter (no editor / SEO leaks)

> **Test перед кожним фактом / абзацом:** буде це цікаво і корисно для реального читача статті — media buyer / AdOps / performance marketing lead / CMO / CEO / founder (залежно від ICP конкретної статті, див. §1.4)? Чи це internal-side data, що цікаве тільки нам?
>
> Перед написанням визнач **primary reader role** (з brief'у або зі змісту) і прокачуй кожен fact / абзац через цю лінзу. Те що корисне media buyer'у (rule syntax, threshold protocols) може не цікавити CMO; те що цікавить CEO (ROI proof, governance, vendor risk) може не торкатися hands-on operator'а.
>
> Rule 2 (≥3 facts / 1000 слів) штовхає writer'а додавати фактаж. Rule 9 фільтрує: лише ті facts що мають value для primary reader. Інакше density є, релевантності — ні.

**Заборонено в reader-facing copy:**

SEO / research metrics (внутрішні, читачеві нічого не кажуть):
- ❌ DR / Domain Rating (Ahrefs)
- ❌ SERP rank ("#X on the primary X SERP", "ranks #2 on...")
- ❌ Volume / KD / TP keyword data
- ❌ GSC impressions / clicks / striking distance / cannibalization
- ❌ Cluster names

Process narration (як ми писали статтю):
- ❌ "we pulled / fetched / WebFetch'd"
- ❌ "we verified [page] on YYYY-MM-DD"
- ❌ "the public pricing page didn't load in our verification fetch"
- ❌ "as of YYYY-MM-DD" date-stamps у body (дата у frontmatter `updatedAt` достатня)
- ❌ "founder-add to this slate"
- ❌ "top-N peer listicles we benchmarked"
- ❌ "honest list inclusion to fill the X bucket" — meta-editorial frame
- ❌ "scope honesty" / "in good faith" — performative editor markers

Meta-self-references (минімізувати):
- ⚠️ "this slate" → "this list" (max 1-2 рази)
- ⚠️ "in this article we'll" → не треба, читач уже у статті

**Виключення (OK to keep):**
- ✅ Reddit thread refs, якщо paraphrased + atributed ("r/FacebookAds, paraphrased: '...'") — це reader-value evidence
- ✅ Vendor-side claims з URL ("'240M+ automated actions/year' claim on its homepage") — verifiable evidence
- ✅ "we use X ourselves" / "we've launched 2M+ ads" — first-hand markers (Rule 7 maps)
- ✅ Vendor pricing з URL — buyer-relevant fact

**Translation patterns** (як переписати editor-side fact у reader-side):
- "DR 72, established in r/FB threads" → "appears in nearly every r/FacebookAds 'best automation' thread"
- "verified on 2026-05-08 via WebFetch" → drop date, just state the fact
- "we couldn't verify webhook depth" → "webhook depth isn't documented prominently"
- "founder-add — not in top-3 peer listicles" → "doesn't show up in the top results for this search, but worth knowing"
- "DR 89, #8 on primary SERP" → drop both, say what tool actually does

**Banned-grep для humanizer pass / QA Stage 3:**
```
grep -nE "DR [0-9]+|SERP rank|striking distance|cluster|we pulled|we verified|verification fetch|WebFetch|as of 2026|founder-add|peer listicles we benchmarked"
```
Кожен hit = cut або rewrite перед publish.

### 6.4 Humanizer Pass (обов'язковий крок перед публікацією)

**Хто робить:** `content-ops` skill (або окремий sub-agent)

**Чекліст:**
1. Прочитати перше речення статті вголос. Це звучить як людина чи як SEO-AI?
2. Grep по blacklist stock phrases (6.3.6). Якщо є — переписати.
3. Перевірити варіативність довжини речень (6.3.3). Якщо 5 речень підряд ~15 слів — переписати.
4. Перевірити POV-маркери (6.3.4). Якщо немає — додати.
5. Перевірити proactive facts (6.3.2). Якщо < 3/1000 слів — додати.
6. Перевірити customer language (6.3.5). Якщо генерично — замінити.
7. **Перевірити first-hand Experience markers (правило 7)** — мін. 1 реальний сигнал.
8. **Перевірити AI disclosure (правило 8)** якщо застосовно.
9. **Перевірити Audience-Language Filter (правило 9)** — grep `DR [0-9]+|SERP rank|striking distance|cluster|we pulled|we verified|verification fetch|WebFetch|as of 202[0-9]|founder-add|peer listicles we benchmarked|scope honesty|in good faith`. Кожен hit = cut або rewrite. Плюс sanity check: для кожного абзацу — буде це цікаво primary reader role (media buyer / AdOps / CMO / CEO залежно від ICP)?
10. Прогнати через AI detector (Originality / GPTZero / Ahrefs AI level check)
11. **Якщо результат Moderate / High** — повернути content-creator'у з конкретними pointers на порушені правила

### 6.5 Що робимо з поточними 3 Moderate сторінками

`TODO: окрема задача в діагностиці — ідентифікувати 3 Moderate сторінки, прогнати через humanizer pass, переписати, перевірити що стали Low.`

---

## 7. AI Content Generation

### 7.1 Prompt Structure (для content-creator agent)

**БЕЗ застарілих хаків** (no "perplexity & burstiness" instructions — GPT-4/Claude їх ігнорує).

Правильна структура prompt'а для написання статті:

```
[ROLE]
You are a senior content writer for Scalemate, an automation OS for scaling ad campaigns.

[CONTEXT]
Load these files as context:
- content-writing-rules.md (всі правила)
- scalemate content/JTBD + ICP + Messaging Map.md
- scalemate content/brand communications/* (brand voice)

[BRIEF]
Topic: [від Discovery agent]
Primary keyword: [X] (volume: Y, KD: Z)
Intent: informational/commercial
Content type: [blog / use-case / comparison / etc.]
Target length: [N] words
Must include:
  - [specific data points]
  - [internal links]
  - [customer quotes]
Existing content check: [UPDATE /page-url OR CREATE NEW]

[CONSTRAINTS]
- Follow content-writing-rules.md sections [list relevant ones]
- Section 6 (Anti-AI) is MANDATORY
- Section 5 (LLM-Visibility) — include TL;DR, FAQ, structured data

[TASK]
Write [content type] article on [topic]. First, draft an outline with H2/H3.
Then write full content. After writing, self-check against section 10 checklist.
```

### 7.2 Do / Don't для AI Generation

**DO:**
- Feed ALL context files (brand voice, JTBD, rules)
- Give specific data points, customer quotes, features to include
- Specify structure (which H2 sections expected)
- Ask for outline first, approve, then full draft
- Iterate: draft → content-ops scoring → revisions

**DON'T:**
- Generic prompts ("write an SEO article about X")
- Instructions like "be creative" / "use perplexity and burstiness" / "vary your writing"
- Ask for 3000 words without structure
- Accept first draft without content-ops scoring

### 7.3 Human Review Checkpoints

**Обов'язкові точки approve від Natalia** (не автоматично):
1. Після Discovery → approve brief
2. Після outline → approve structure
3. Після draft → approve (або повернення з коментами)
4. Перед публікацією → фінальний read + approve

---

## 8. JTBD Messaging Framework

### 8.1 JTBD Groups (з `JTBD + ICP + Messaging Map.md`)

**Group A — Зменшення операційного навантаження**
- Job: "Eliminate routine actions that drain my day"
- Trigger: "I spend 60% of time on repeatable ad ops"
- Outcome wanted: "I focus on strategy and testing, not babysitting"

**Group B — Управління складністю**
- Job: "Manage platform differences (Meta vs TikTok vs Google Ads) without chaos"
- Trigger: "Every platform has different rules, I lose track"
- Outcome wanted: "Unified workflow across all channels"

**Group C — Креативи як системний процес**
- Job: "Turn chaotic creative testing into a system"
- Trigger: "We launch 200 creatives/month but can't tell what works"
- Outcome wanted: "Repeatable, data-driven creative strategy"

**Group D — Стратегічний рівень**
- Job: "Scale without hiring more team"
- Trigger: "We can't scale without growing headcount 3x"
- Outcome wanted: "Same team handles 10x more campaigns"

### 8.2 Messaging Maps (короткі витяжки)

**UA Manager / Media Buyer:**
- Core message: "Remove manual work. Let campaigns work — not you on them."
- Secondary: "Launch 10x faster. Monitor 10x less. Optimize with rules, not reminders."
- Proof: "62% time reduction, 80% automation"

**Founder / C-level:**
- Core message: "Scale marketing without growing the team and chaos."
- Secondary: "Turn media buying from headcount problem into process problem."
- Proof: "3x faster launches, 2M+ ads launched across clients"

### 8.3 Coupling Jobs → Content

Кожна стаття має чітке сopуплення з JTBD-групою. Бриф містить:
```
JTBD group: [A / B / C / D]
Job-to-be-done: [специфічне формулювання]
Primary audience: [UA Manager / Founder]
Messaging angle: [Core message з 8.2]
```

---

## 9. Evidence Base

### 9.1 Proof Points (використовуємо, де доречно)

| Proof point | Використовуємо в | Джерело |
|---|---|---|
| 3x faster launches | Hero, case studies, CTAs | `TODO: додати source` |
| 62% time reduction | Use cases, solution pages | `TODO: додати source` |
| 80% campaign automation | Features, blog about automation | `TODO: додати source` |
| 2M+ ads launched | Social proof, about page | `TODO: додати source` |

### 9.2 Case Study Metrics — що обов'язково включаємо

- **Time saved** — годин/тиждень, або % reduction
- **Scale increased** — кампаній/місяць, або ads/тиждень
- **ROAS / CAC improvement** — якщо дозволили поділитися
- **Team efficiency** — headcount-mapped outcomes
- **Launch speed** — від ідеї до live campaign

### 9.3 Customer Quotes Library

**Статус: ВІДКЛАДЕНО (2026-04-15)** — поки клієнтів активно не опитували, матеріалу для бібліотеки замало.

**Коли повертаємось:**
- Після перших 10-15 customer interviews / survey responses
- Коли запустимо customer feedback collection flow (LinkedIn DM campaigns, Intercom follow-ups, dedicated review request emails)

**До того часу** — content агенти цитують клієнтів тільки з реальних підтверджених джерел:
- Existing case studies (KitUp, Zeptolab)
- Майбутні case studies (Appflame, Promin Agency — після збору даних)
- LinkedIn коментарі / Twitter згадки (з посиланням на original)

**Заборонено:** вигадувати / парафразувати quotes. Краще написати без quote, ніж з фейковою.

### 9.4 Competitive Differentiation

Для comparison pages і в blog-статтях, де доречно згадувати конкурентів:

| Competitor | Where they win | Where we win |
|---|---|---|
| Madgicx | `TODO` | `TODO` |
| Birch | `TODO` | `TODO` |
| adsmanage.ai | `TODO` | `TODO` |
| kitchn.io | `TODO` | `TODO` |
| Revealbot | `TODO` (згадано в legacy) | `TODO` |

`TODO: заповнити після competitive research sprint'у`

---

## 10. Review & QA Checklist

> Цей чекліст виконує `content-ops` agent перед кожним approve. Стаття не публікується, поки всі boxes checked.

### 10.1 Structural

- [ ] H1 є, унікальний, outcome-oriented, містить primary keyword
- [ ] H2/H3 правильно структуровані (logical hierarchy)
- [ ] TL;DR секція на початку (для LLM citations)
- [ ] FAQ секція (min 3 питання з real PAA / customer questions)
- [ ] CTA в кінці, contextual

### 10.2 SEO Technical

- [ ] Title tag: 55-60 chars, primary keyword, brand
- [ ] Meta description: 150-160 chars, primary keyword, CTA hint
- [ ] URL slug: короткий, kebab-case, primary keyword
- [ ] Canonical tag self-referencing
- [ ] OG tags (title, description, image 1200x630 + recommended 16x9 / 4x3 / 1x1)
- [ ] Twitter Card: summary_large_image
- [ ] Schema markup відповідний типу (Article / SoftwareApplication / etc.) — **без** HowTo/FAQPage як rich-result driver
- [ ] Image alt texts descriptive + keyword-aware (не stuffing)
- [ ] **Author byline видима** (Name + Role + link на /authors/{slug})
- [ ] `datePublished` + `dateModified` в schema, "Last updated" у UI
- [ ] `dateModified` оновлено **тільки при реальних змінах** (не фейковий refresh)

### 10.3 Content Quality

- [ ] Min 3 proactive facts / 1000 слів
- [ ] Min 1 POV marker на H2-розділ
- [ ] Customer language, не corporate
- [ ] Проactивний перший абзац (конкретно, не generic)
- [ ] Варіативна довжина речень (перевірено візуально)
- [ ] Немає stock phrases з blacklist (6.3.6)
- [ ] Мінімум 1 customer quote або case reference (якщо контент дозволяє)
- [ ] **Unique angle vs top-5 SERP competitors** — рядок з брифа ("що ми додаємо, чого немає в топ-5") відтворений у статті
- [ ] **Min 1 first-hand Experience marker** (правило 6.3 #7) — screenshot / client detail / власний експеримент

### 10.4 Anti-AI Check

- [ ] Прочитати перше речення вголос — звучить як людина?
- [ ] Немає generic openers (6.3.1)
- [ ] Transition words не зловживаються (max 1 "furthermore" / "moreover" на статтю)
- [ ] POV markers присутні (6.3.4)
- [ ] Прогнано через AI detector
- [ ] Результат: Low AI level (НЕ Moderate, НЕ High)

### 10.5 SEO / Links

- [ ] Min 3 internal links, всі contextual
- [ ] Min 1 link на продуктову сторінку
- [ ] Min 1 link на релевантний блог / case study (якщо існує)
- [ ] Anchor text natural variation (не exact-match skattering)
- [ ] External links to authoritative sources where claims need sourcing
- [ ] Reverse links (стара стаття → нова) додані, якщо релевантно

### 10.6 Cannibalization Check

- [ ] Перевірено GSC: немає 2+ наших сторінок на той самий primary keyword
- [ ] Перевірено Ahrefs organic keywords: немає конфлікту
- [ ] Якщо є existing page — робимо UPDATE, не CREATE NEW

### 10.7 Brand Voice

- [ ] Tone confident, pragmatic, operational (не corporate, не hype)
- [ ] Відповідає Brand Persona Framework і brand-communication-content-guidelines
- [ ] First person used appropriately (see 1.3)
- [ ] No buzzwords / не trash-talk конкурентів
- [ ] ICP language (media buyer / founder, залежно від angle)

### 10.8 Content-ops Score

- [ ] Експерт-панель score ≥ 90
- [ ] Якщо < 90 — повернення content-creator'у з конкретними issue pointers

### 10.9 Google Helpful Content Self-Assessment (15 питань)

> Ці питання Google явно пропонує для самооцінки контенту. Content-ops agent відповідає на кожне. Якщо на 3+ питання відповідь "ні" — стаття не публікується.

**Content quality:**
- [ ] Q1. Чи надає контент **оригінальну** інформацію / research / analysis (не переказ)?
- [ ] Q2. Чи описує тему **substantially / completely**?
- [ ] Q3. Чи дає insightful analysis понад очевидне?
- [ ] Q4. Якщо основано на інших джерелах — чи уникає простого копіювання / rewording?
- [ ] Q5. Чи H1 / title — описові, без clickbait?
- [ ] Q6. Чи це контент, який читач захотів би bookmark, share, recommend другу?
- [ ] Q7. Чи це контент, який міг би бути в друкованому журналі / енциклопедії?
- [ ] Q8. Чи дає substantial value понад те, що є в SERP top-10?

**Presentation & production:**
- [ ] Q9. Чи немає spelling / stylistic errors?
- [ ] Q10. Чи "well-produced" (не sloppy, rushed)?
- [ ] Q11. Чи **не** mass-produced / outsourced without care?

**Expertise:**
- [ ] Q12. Чи автор демонструє first-hand expertise / real knowledge?
- [ ] Q13. Чи довірився б експерт / researcher цьому джерелу?
- [ ] Q14. Чи має contentor audience, що прийшла б directly (не тільки з search)?
- [ ] Q15. Чи читач feel satisfied, досягнувши прочитаного — отримав відповідь?

---

## Appendix A — Template Files to Create

`TODO: створити в `seo-system/templates/`:`
- `template-blog-howto.md`
- `template-use-case.md`
- `template-case-study.md`
- `template-comparison.md`
- `template-hub-pillar.md`
- `template-resource-landing.md`
- `schema-json-ld-snippets.md` (ready-to-paste schemas)

## Appendix B — Competitive Positioning Notes

`TODO: заповнити з competitive research sprint'у (див. розділ 9.4)`

## Appendix C — Seed Keywords + URL Mapping (з legacy)

| URL | Primary keyword | Secondary | Problem-based |
|---|---|---|---|
| /use-cases/bulk-ad-launch | bulk ad launch tool | create ads in bulk meta, launch ads at scale | launching ads one by one, manual setup takes hours |
| /use-cases/automated-creative-upload-meta | automate creative upload meta | bulk upload creatives facebook, upload from google drive | dragging creatives into facebook, manual uploads |
| /use-cases/ad-campaign-automation-rules | ad campaign automation rules | auto-pause ads roas, automated bid management | manual campaign babysitting |
| /use-cases/scale-ad-campaigns-faster | scale ad campaigns faster | scale user acquisition, performance marketing automation | scaling means hiring more buyers |
| /solutions/media-buyers | tools for media buyers automation | user acquisition tools, media buying workflow | repetitive tasks, too many campaigns |
| /features/bulk-launch | bulk ad creation tool | create multiple ads at once, bulk campaign builder | copying campaigns repeatedly |
| /features/automation-rules | automated ad optimization rules | automate facebook ads rules | monitoring manually |

---

## Appendix D — Google Guidelines Foundation (2026-04-15)

> Джерело: офіційні Google Search Central документи + Google E-E-A-T blog post. Це фундамент, на якому стоять правила цього файлу.

### Читані першоджерела
- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [HowTo structured data (deprecated notice)](https://developers.google.com/search/docs/appearance/structured-data/how-to)
- [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [E-E-A-T update blog post (Dec 2022)](https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t)

### Не читані (TODO)
- **Search Quality Rater Guidelines full PDF (170+ сторінок)** — головне першоджерело для ratings. WebFetch не впорався з binary PDF. `TODO: завантажити локально і прочитати через Read tool з pages параметром. Має дати точні Low/Medium/High/Highest quality definitions.`

### 5 головних принципів Google (TL;DR)

1. **People-first, не search-first.** Контент для користі читачу, не для ранжування.
2. **Trust — головна літера E-E-A-T.** Інші літери обслуговують Trust. Без довіри — нічого не рятує.
3. **"Who / How / Why" видимі.** Хто автор (byline + bio). Як створено (AI disclosure). Чому створено (для користі, не трафіку).
4. **Technical + semantic SEO базова гігієна.** Unique titles, descriptive metas, semantic headings, alt text, clean URLs, valid structured data.
5. **Zero tolerance для scaled content abuse.** Масова генерація сторінок для ranking — порушення, навіть human-written.

### Як ці принципи розподілені по нашому файлу

| Google principle | Наш розділ |
|---|---|
| People-first content | Вся філософія + розділ 6 (Anti-AI) |
| Trust як головне | 2.5 (Site-wide trust), 4.1 (author byline, dates) |
| Who / How / Why | 4.1 (byline), 6.3 правило 8 (AI disclosure) |
| Technical SEO гігієна | 3, 4 |
| Spam policies | 4.5 (explicit guardrails) |
| E-E-A-T Experience | 6.3 правило 7 (first-hand markers) |
| YMYL handling | 4.6 |
| Helpful Content self-assessment | 10.9 (15 Q checklist) |

### Що змінилось у Google нещодавно (важливо)

- **December 2022:** додано Experience в E-E-A-T (було E-A-T). Першоджерельний досвід тепер критичний.
- **August 2023:** FAQPage rich results обмежені до health/gov sites. Для Scalemate — не з'являться.
- **September 2023:** HowTo rich results повністю прибрані. Markup можна, але без очікування SERP-ефекту.
- **2024:** додано **Scaled content abuse** як окрему spam-policy категорію. Масова генерація — новий red flag.

---

## Changelog

- 2026-04-15 — перша версія документа. 10 розділів + 3 appendix'и. Заповнено розділи 1-2, 8-9 витяжкою з існуючих документів (Content Framework, JTBD+ICP, brand communications). Розділи 3, 4, 5, 6, 7, 10 написані з нуля. Критичний розділ 6 (Anti-AI) — основа на блекліст stock phrases + humanizer pass.
- 2026-04-15 — Customer Quotes Library відкладено — матеріалу замало, клієнтів активно не опитували. Повернемось після 10-15 customer interviews. Поки що — тільки verified quotes з existing case studies.
- 2026-04-15 — **Великий Google-compliance апдейт.** Додано: Appendix D (Google foundation + джерела), розділ 2.5 (Site-wide trust requirements з pricing transparency), розділ 4.5 (Spam Policies guardrails — 15 заборонених паттернів), розділ 4.6 (YMYL handling для ad spend/ROI теми), розділ 6.3 правило 7 (first-hand Experience marker) і правило 8 (AI disclosure). Оновлено: 4.1 (author byline + dateModified rules), 4.2 schema matrix (HowTo/FAQPage deprecation disclaimers), 10.2-10.3 QA (нові checks), 10.9 (15 Google self-assessment questions). Відкрита задача: прочитати повний SQRG PDF.
- 2026-04-15 — **Розширено розділ 4.1 до повноцінної Title & Meta Writing Methodology.** 9 subsections: 4.1.1 Mandatory Pre-Work (read content + SERP + patterns + intent + angle), 4.1.2 Character Counts, 4.1.3 Brand Placement Rules (коли Scalemate у title, коли ні), 4.1.4 Mandatory Content Rules (honesty, reader benefit), 4.1.5 Power Elements (numbers, year, question, curiosity, audience, pain, comparison, credibility), 4.1.6 Banned Patterns (fabricated numbers, clickbait, attack, stuffing), 4.1.7 Selection Methodology (generate 5-6 → dropout → content-ops panel scoring 6 criteria × 5 балів → top 2-3 → Natalia approve), 4.1.8 Post-Publish Tracking (baseline → T+2wk → T+4wk decisions), 4.1.9 Author Bylines & Date Signals. **Привід:** спроба переписати title/meta для madgicx-review-alternative без методики призвела до fabricated "10 alternatives" (у статті насправді 3 tools). Тепер workflow обов'язковий.
- 2026-04-15 — **Додано 3 нові banned patterns у 4.1.6** (промоція competitor'ів, B2B cliche "honest take inside", flat connector verbs) + **новий розділ 4.1.6.1 Allowed Competitor Mention Patterns** (neutral mention OK — "brief note on X", "X covered briefly"; active promotion banned — "where X fits best", "where X wins"). **Привід:** content-ops panel порекомендувала "where Birch fits best" у meta для madgicx статті — CTR-optimized, але активно steering traffic до competitor'a. Natalia flagged strategic misalignment. Тепер patterns explicit у правилах.
- 2026-04-16 — **Додано 3 нові елементи щоб не повторити template-suffix помилку:** (1) 4.1.1 Step 6 "Template audit" — обов'язкова перевірка як title реально рендериться через template; (2) 4.1.3 блок про Scalemate-specific blog template + `absoluteTitle: true` flag; (3) новий розділ 4.1.10 "Pre-Deploy Verification" з curl-командами для перевірки title/meta/OG/Twitter/JSON-LD перед deploy. **Привід:** frontmatter title для madgicx статті був правильний ("Is There a Real Madgicx Alternative..."), але `app/blog/[slug]/page.jsx` template auto-append'ив "| Scalemate Blog" → порушення 4.1.3. Fixed code to support opt-out flag + updated rules.
