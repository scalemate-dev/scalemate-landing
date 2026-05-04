# 🧠 Intelligence Brief — Week of 2026-04-15

> Перша жива розвідка Scalemate. Джерела: GSC (direct через seo-ops/gsc_client.py, 90 днів) + Ahrefs MCP (site-explorer metrics / top-pages / organic-keywords / competitors) станом на 2026-04-15.

---

## 🚨 Критична знахідка: Scalemate невидимий для Ahrefs

**Ahrefs domain mode:** 0 organic keywords, 0 organic traffic
**Ahrefs subdomains mode:** 3 keywords, 0 traffic

**Що Ahrefs відстежує (всього 2 сторінки):**
- `/` — pos 3 на "scalemate" (volume 40), 17 referring domains
- `/blog/madgicx-review-alternative` — pos 10 на "madgicx review" (volume 10), 0 referring domains

### VS GSC (те, що реально відбувається в Google):
- 1715 impressions на `scalemate`
- 1737 impressions на `/blog/madgicx-re*`
- 2079 impressions на `/blog/best-mcp-s*`
- 40+ ключових слів з impressions

### Висновок:
Ahrefs ще не зачепив 95% наших запитів. Сайт свіжий, DR низький. Це **фундаментально змінює наш scoring**:

- ❌ НЕ можемо покладатись на Ahrefs volume для нашої performance
- ✅ GSC — primary source для нашої видимості
- ✅ Ahrefs — для keyword research (volume нових ключів) і competitor analysis
- ⚠️ Traffic Potential factor треба рахувати руками: Ahrefs volume × realistic CTR при ранжуванні

---

## ⚠️ Конкурентне поле викривлене

На запит "хто наші organic competitors" Ahrefs повертає: Trustpilot, Reddit, Instagram, Madgicx, LinkedIn — усі з `keywords_common=1`. Означає: Ahrefs не може ідентифікувати реальних конкурентів через тонкий профіль Scalemate.

**Один корисний сигнал:** Madgicx DR 71, 1,333 keywords, 7,838 monthly traffic — це наш реальний SaaS-конкурент.

**TODO:** запитати Birch / adsmanage.ai / kitchn.io окремо як competitor sites.

---

## 📊 Живі пріоритети з GSC (це те, що працює для нас зараз)

### 🚨 Аномалії, що потребують негайної реакції

#### 1. Brand query `scalemate` pos 8.3, CTR 0.6% (1715 imp) — **Brand ambiguity issue**

- **Уточнення від Natalia (2026-04-15):** існує ще **дві компанії** з подібною назвою, вони НЕ конкуренти:
  - [scalemate.io](https://scalemate.io/) — інший бізнес
  - [scalemates.com](https://www.scalemates.com/) — ще один
- **Правильний діагноз:** це НЕ "хтось перехопив SERP через технічний bug", а **brand dilution / namespace conflict**. Google не може однозначно визначити, хто саме "scalemate" — серед трьох брендів-омонімів наш має найменший trust graph.
- **Чому це критично для бізнесу:**
  - Навіть користувачі, які шукають САМЕ наш продукт (1715 impressions — багато навмисних пошуків), отримують `.io` або `.com` у топі
  - Втрачаємо brand traffic що мав бути базовою аудиторією (люди, яких direct marketing привів шукати нас у Google)
- **Правильні actions (це стратегічний track, не quick fix):**
  1. **Organization schema + Knowledge Graph push:** додати повний `Organization` schema на `/` і `/about` з `sameAs` масивом (LinkedIn, Twitter, Crunchbase, Product Hunt, YouTube, G2, Capterra)
  2. **Crunchbase + Wikipedia listings** (якщо ще немає) — Knowledge Graph любить ці джерела
  3. **Review presence** на G2 / Capterra / Product Hunt — активно збирати (вирівнює авторитет проти scalemate.io/scalemates.com)
  4. **Зовнішні згадки саме "Scalemate.co"** (а не просто "Scalemate") у outreach, LinkedIn, Twitter, партнерських публікаціях — щоб Google вчився асоціації бренд→домен
  5. **Title / meta завжди з "Scalemate — [descriptor]"** на всіх сторінках, щоб SERP snippet одразу disambiguate-ував (напр. "Scalemate — Ad Automation OS for Media Buyers")
  6. **Google Business Profile** (якщо є фізичний офіс) — підсилює entity signals
  7. **Branded SERP monitoring через Brand Radar** — трекати weekly, як міняється наша частка у бренд-запитах
- **Priority:** 🟡 Strategic (довгострокова гра на 3-6 місяців, не quick fix — не варто намагатися "швидко виправити", бо це питання entity authority, не ranking manipulation)
- **НЕ робимо:** агресивні SEO-маневри проти scalemate.io / scalemates.com — вони не винні, і такі дії можуть бути flagged як manipulative. Грамотна стратегія — підсилювати СВОЄ entity signals, а не атакувати їх.

#### 2. `/blog/madgicx-review-alternative` — 1737 imp, 1 click (CTR 0.1%)
- **Проблема:** ловимо масу показів по Madgicx-related queries, але ніхто не клікає.
- **Гіпотеза:** title/meta виглядають як attack-content, Google понижує, люди пропускають.
- **Action:** переписати title+meta у нейтральнішому тоні АБО перетворити на повноцінну comparison page "Scalemate vs Madgicx".
- **Priority:** 🔴 Urgent (Google indirect signal що page не helpful — довго залишати не можна)

#### 3. `/blog/best-mcp-s*` — 2079 imp, 9 clicks (CTR 0.4%)
- **Проблема:** стаття про Model Context Protocol (MCP). Офтопічний трафік, не про Scalemate-продукт. Ранжується на pos 10.1, але відвідувачі не ICP.
- **Action:** стратегічне рішення — deindex / repurpose / leverage.
- **Priority:** 🟡 Strategic decision (треба рішення від Natalia)

### 🟢 Quick Wins (striking distance)

| Query | Pos | Imp (90d) | Action |
|---|---|---|---|
| `madgicx pricing 2026` | 7.6 | 156 | Переробити `/blog/madgicx-review-alternative` у повноцінну comparison з pricing секцією |
| `ad testing software` | 11.4 | 40 | Update існуючої `/blog/best-ad-te*` або створити focused page |
| `ad uploader` | 10.3 | 20 | Є `/ad-creative-upl*` (pos 13.2, 190 imp) — update до top-10 |
| `ad performance testing tool` | 13.8 | 33 | Новий topic cluster кандидат |

### 🎯 Tier-1 ключі (legacy SEO plan) НЕ ранжуються

| Intended URL | Primary keyword | Real position | Проблема |
|---|---|---|---|
| `/use-cases/bulk-ad-launch` | bulk ad launch tool | pos 22.1 (430 imp) | Не в топ-20 |
| `/use-cases/automated-creative-upload-meta` | automate creative upload meta | pos 7.8 (59 imp) | Близько, але мало показів — low volume keyword? |
| `/features/automation-rules` | automated ad optimization rules | pos 18.7 (120 imp) | Не в топ-10 |
| `/features/bulk-launch` | bulk ad creation tool | pos 18.4 (128 imp) | Не в топ-10 |

**Висновок:** legacy-keyword-план не спрацював. Треба **переоцінити seed keywords** — можливо вони з низьким real-volume або інший intent.

---

## 📝 Top 5 для Weekly Approval (Checkpoint 1)

*Оцінений через нашу формулу, з GSC-даними як Confidence source (не Ahrefs — поки він не бачить нас).*

### 1. 🟢 Quick Win | Score ~50 | **APPROVED 2026-04-15**
**Action:** Rewrite title + meta для `/blog/madgicx-review-alternative`

**✅ FINAL DECISION (approved after content-ops panel + strategic review):**

**Title (54 chars):**
```
Is There a Real Madgicx Alternative for TikTok + Meta?
```

**Meta description (132 chars):**
```
Running ads beyond Meta? See Madgicx pricing ($99–$329/mo), feature-by-feature comparison with Scalemate, plus a brief note on Birch.
```

**Також оновити у body:** H2 "Revealbot (Birch) — Quick Note" → "Birch (formerly Revealbot) — Quick Note" (freshness signal про rebrand)

**Content-ops panel score:** Pairing A (refined) = 92.4/100 ✅
**Strategic check:** "where Birch fits best" rejected (active promotion конкурента) → replaced with "brief note on Birch" (neutral mention)

**Чому цей pairing:**
- Question format у title (validated pos 1 Birch same pattern)
- Double question (title + meta) — rare CTR driver
- "Real" credibility word, "TikTok + Meta" specificity
- Meta згадує всі 3 tools зі статті (Madgicx / Scalemate / Birch) — completeness
- Real pricing $99-$329/mo з article
- Birch mentioned neutrally, не promoted

**Effort:** 2h (title + meta + H2 update + deploy + GSC Request Indexing)
**Baseline (before change):** CTR 0.05%, pos 7.9, ~200 imp/day
**Tracking milestones:**
- T+7 days (2026-04-22): indexation check
- T+2wk (2026-04-30): first CTR milestone (target >0.5%)
- T+4wk (2026-05-14): final decision (keep / tweak / escalate to architectural change)

### 2. 🟡 Strategic | Score 40 (brand entity authority, довгострокова гра)
**Action:** Запустити brand entity authority plan (7 pillars з п.1 вище)
- **Чому:** brand ambiguity між Scalemate.co / scalemate.io / scalemates.com. Не "fix bug" — це довгострокова робота над entity signals (schema, external mentions, Knowledge Graph, reviews, Crunchbase)
- **Effort:** 4h setup (Organization schema + audit external listings + title/meta uniform) + 0.5h/тиждень моніторинг через Brand Radar
- **Quick wins серед цього:**
  - Перевірити Organization schema на `/` (найшвидше, 1h) — якщо немає, додати з повним `sameAs`
  - Title / meta перевірка на consistent "Scalemate — [X]" patternі всьому сайті (2h audit)
- **Input needed:** перелік активних brand-associated акаунтів (LinkedIn Company, Twitter, Crunchbase, PH, G2 — які вже є, які треба створити)

### 3. 🟢 Quick Win | Score ~42
**Action:** Update `/ad-creative-upl*` для закриття "ad uploader" + "ad creative upload"
- **Чому:** pos 13.2, 190 imp на цій сторінці. Плюс `ad uploader` pos 10.3 (20 imp) — суміжний ключ
- **Effort:** 4h (update + schema + internal links)
- **Input needed:** real screenshot процесу uploading у Scalemate

### 4. 🟡 Strategic Bet | Score ~40
**Action:** Investigate `/blog/best-mcp-s*` — що це за сторінка і стратегія
- **Чому:** 2079 imp — найвища impression-page, але офтоп. Треба прийняти рішення: deindex / repurpose / leverage
- **Effort:** 2h дослідження + рішення від тебе
- **Input needed:** стратегічне рішення — залишаємо MCP-контент чи прибираємо?

### 5. 🔵 Foundation | Low score, but critical
**Action:** Ahrefs Site Audit project setup (якщо ще не запущений) + Core Web Vitals check через PageSpeed Insights
- **Чому:** ми не знаємо технічний стан. Без цього працюємо наосліп
- **Effort:** 1h setup + 2h review results
- **Input needed:** доступ до Ahrefs dashboard (якщо project setup не виконано)

---

## 🔴 Escalations (поза звичайним циклом)

1. **Ahrefs не бачить нас** — критично для подальшого tracking. Можливі кроки: підтвердити sitemap submission у Ahrefs, прискорити crawl. Поки Ahrefs не підхопить — всі volume/KD estimates працюють через Ahrefs Keyword Explorer (на нові ключі), а position tracking — тільки через GSC.

2. **`/blog/madgicx-review-alternative` — 0.1% CTR** — це Google indirect signal, що page не helpful. Якщо довго залишити, може просіти повністю.

---

## Що НЕ встигли цього циклу (TODO для наступного)

- [ ] SerpAPI Trends на seed keywords
- [ ] Brand Radar (AI citations) окремий запит
- [ ] Конкуренти окремо через site-explorer: Madgicx, Birch, adsmanage.ai, kitchn.io
- [ ] Ahrefs Site Audit
- [ ] Повний organic keywords list з фільтрами (була помилка схеми — виправити схему в запиті: `where` потребує `condition`, а не `operator`; `position` не існує як field — використати `best_position` чи `best_position_set`)

---

## 🎯 Action needed від Natalia (Checkpoint 1)

**1. Approve / swap Top 5 вище?**

**2. Ключові рішення, які я не можу прийняти сам:**
- `/blog/best-mcp-s*` — що робимо з MCP-трафіком?
- `/blog/madgicx-review-alternative` — attack softer чи повноцінна comparison?
- Чи є у Ahrefs dashboard запущений Site Audit project для scalemate.co?
- **Brand entity:** які з цих активів уже маємо — LinkedIn Company, Twitter/X, Crunchbase, Product Hunt, G2, Capterra, YouTube? Яких бракує?

**3. Хочеш, щоб у наступному циклі я:**
- a) Продовжила з поточним focus (SerpAPI Trends + Brand Radar + Site Audit + конкуренти)
- b) Спочатку заповнила `prioritization-scorecard.md` уже реальними items з цього циклу
- c) Спочатку взяла 1 з Top 5 у реальну production (для tracer bullet через весь flow)

---

## Raw data reference (на випадок якщо треба повернутись)

### GSC Top Queries (90 days)
```
Query                           Clicks  Impr   CTR    Pos
scalemate                       11      1715   0.6%   8.3
scale mate                      4       335    1.2%   6.7
bulk ad launcher                1       62     1.6%   17.1
madgicx pricing 2026            0       156    0.0%   7.6
```

### GSC Top Pages (90 days)
```
URL                                       Clicks  Impr   CTR    Pos
/                                         23      2926   0.8%   7.4
/blog/best-mcp-s*                         9       2079   0.4%   10.1
/use-cases/bulk-*                         5       430    1.2%   22.1
/ad-creative-upl*                         3       190    1.6%   13.2
/ai-assistant                             1       183    0.5%   5.6
/blog/madgicx-re*                         1       1737   0.1%   9.2
/launch                                   1       91     1.1%   9.3
/pricing                                  1       78     1.3%   4.2
/blog/best-ad-te*                         0       520    0.0%   14.3
/features/automa*                         0       120    0.0%   18.7
/features/bulk-l*                         0       128    0.0%   18.4
```

### Ahrefs Metrics
```
Domain mode:     org_keywords=0,  org_traffic=0
Subdomains mode: org_keywords=3,  org_keywords_1_3=1, org_traffic=0
Tracked pages:
  /                                        → "scalemate" pos 3, vol 40, 17 ref domains
  /blog/madgicx-review-alternative         → "madgicx review" pos 10, vol 10, 0 ref domains
```

### Ahrefs "Competitors" (викривлено — ignore)
Trustpilot / Reddit / Instagram / Madgicx / LinkedIn — всі з common_keywords=1. Не використовувати як real competitor signal.

---

*Brief створений: 2026-04-15*
*Scheduled next recon: через 7 днів (Monday)*
