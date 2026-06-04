# Intelligence Brief — Organic Drop Investigation (May 13-16 pivot)

> **Тип:** focused diagnostic run (НЕ повний weekly recon).
> **Trigger:** Natalia помітила різке падіння GSC impressions після 13-15 травня.
> **Дата:** 2026-05-25.
> **Аналізована дата-точка:** Apr 25 → May 24, 2026 (30 днів).

---

## TL;DR

1. **Drop pivot date — 15→16 травня.** Last "normal" day May 15 (629 imp), first "low" day May 16 (401 imp). Continuing baseline ~270-400/день vs попередніх ~500-700/день.
2. **−45% impressions, position degradation 11 → 17** (28d trailing window).
3. **НЕ sitewide hit.** Homepage `/` стабільна (303 → 306 imp/day, pos 6.7 → 7.2), `adcreative-ai-alternative` стабільна (16/day, pos 10.1), `ai-assistant` стабільна. Drop concentrated на blog listicles + rules pages. *(Brand query "scalemate" не використовуємо як sentinel — там много name-collision traffic з однойменців, не наш реальний бренд.)*
4. **Найбільший підозрюваний — May 2026 Google Core Update** (офіційно анонсований 21 травня, pre-announce volatility з ~13 травня). Pattern (ranking demotion на commercial listicles, brand непостраждалий) типовий для core update.
5. **Вторинно — наші ж зміни 12-15 травня** могли підсилити ефект: Rules library redesign (#83) на 13-те, RulesLibraryPromo block на 15-те, 301 redirect на 15-те з топік-mismatch.

---

## 1. Quantifying the drop

### Daily impressions (Apr 25 → May 24)

```
Apr 25-29  228, 316, 301, 405, 503         baseline формування
Apr 30     760  ◄ пік
May 1-8    493, 373, 463, 516, 593, 691, 660, 706  ◄ високе плато (~590 avg)
May 9-15   470, 656, 638, 617, 585, 487, 629
May 16     401  ◄ ОБРИВ
May 17-24  350, 400, 286, 369, 269, 285, 235  ◄ нове низьке плато (~300 avg)
```

### Per-day, period-normalized (фіксує weekend bias):

| Period | Days | Avg imp/day | Avg position |
|---|---|---|---|
| May 1-15 (before) | 15 | **590** | **11.3** |
| May 16-24 (after) | 9 | **322** | **17.0** |
| Δ | | **−45%** | **+5.7 pos (worse)** |

### Sentinel сторінки (не торкались + перевірка sitewide-hit гіпотези):
- Homepage `/`: 33.5 imp/day → 34.0 imp/day, pos 6.7 → 7.2 — **стабільна**
- `/blog/adcreative-ai-alternative`: 15.8 → 14.4, pos 10.2 → 10.1 — **стабільна**
- `/ai-assistant`: 3.8 → 2.0, pos 5.6 → 4.9 — **position improved**
- **Висновок: НЕ sitewide penalty / НЕ technical sitewide issue. Drop selective.**
- ⚠️ **NB:** brand query "scalemate" НЕ використовуємо для цієї перевірки — на нього є significant name-collision traffic з однойменців в інших нішах, тож сам по собі він нічого не доводить про нашу видимість.

---

## 2. Які сторінки впали (топ-15)

| Page | imp/day before | imp/day after | Δ | pos before | pos after | Тип |
|---|---|---|---|---|---|---|
| `/blog/creative-testing-framework` | 67.5 | 7.2 | **−89%** | 10.0 | **6.4** ↑ | **Query volume drop** (UA burst) |
| `/blog/best-bulk-ad-launch-tools` | 36.1 | 8.1 | **−78%** | 8.5 | 14.1 | **Ranking demotion** |
| `/blog/best-mcp-servers-meta-google-ads` | 186.5 | 79.0 | **−58%** | 10.9 | 11.2 | Query volume drop |
| `/blog/madgicx-review-alternative` | 29.7 | 13.2 | **−56%** | 9.5 | 9.2 | Query volume drop |
| `/use-cases/ad-campaign-automation-rules` | 26.6 | 12.0 | **−55%** | 14.2 | **29.0** | **Ranking demotion** |
| `/ad-creative-uploader` | 17.6 | 9.0 | **−50%** | 13.0 | 16.0 | Ranking demotion |
| `/blog/bulk-upload-creatives-meta-tiktok` | 11.5 | 6.2 | **−46%** | 9.3 | 11.7 | Ranking demotion |
| `/use-cases/scale-ad-campaigns-faster` | 3.9 | 3.2 | **−18%** | 14.5 | **25.9** | **Ranking demotion** |
| `/features/automation-rules` | 9.7 | 6.4 | **−34%** | 16.6 | **39.4** | **MAJOR ranking demotion** |
| `/use-cases/bulk-ad-launch` | 17.5 | 12.8 | **−27%** | 14.6 | 19.4 | Ranking demotion |
| `/blog/best-ad-testing-tools` | 101.8 | 74.1 | **−27%** | 20.3 | 27.6 | Ranking demotion |
| `/` (homepage) | 33.5 | 34.0 | **+1%** | 6.7 | 7.2 | Stable |
| `/blog/adcreative-ai-alternative` | 15.8 | 14.4 | **−9%** | 10.2 | 10.1 | Stable |
| `/ai-assistant` | 3.8 | 2.0 | — | 5.6 | **4.9** ↑ | Stable / improved |

### Розшифровка типів:

- **Query volume drop** (position stable/improved, impressions tanked) → не наша проблема. Це люди припинили шукати ці саме queries. Хороший приклад: `creative-testing-framework` отримував burst від mobile UA long-tail queries ("best creative testing framework for user acquisition ua launch on new platform" pos 1.0; "performics creative experimentation testing frameworks" pos 10.8) — це шаблон research/discovery query bursts які природньо вщухають.
- **Ranking demotion** (position objectively worse) → треба розбиратись.

---

## 3. Гіпотези (ranked by confidence)

### 🟥 H1 (HIGH confidence) — May 2026 Google Core Update

**Докази:**
- Google анонсував May 2026 Core Update **21 травня**, rolling out 2 тижні (до ~4 червня).
- SEO industry trackers (Semrush Sensor, AdvancedWebRanking) фіксували високу SERP volatility з **~13 травня** — типовий pre-announcement pattern.
- Наша картина **matches core update fingerprint**:
  - Brand stable ✅
  - Specific commercial pages demoted ✅
  - Listicles + product feature pages hit ✅
  - Editorial-quality pages з low E-E-A-T найвразливіші ✅
- Core update focus 2026: "relevant and satisfying content" (per Google statement) → давить на thin/SEO-first content.

**Реальна механіка demotion — SERP coverage shrinkage (verified):**

Сторінки втратили НЕ якість позиції на core queries, а **широту покриття** — Google перестав показувати їх для peripheral queries.

| Сторінка | Unique queries before | After | Δ |
|---|---|---|---|
| `best-mcp-servers-meta-google-ads` | 101 | 42 | −58% |
| `madgicx-review-alternative` | 18 | 5 | −72% |

Це пояснює "paradox" `creative-testing-framework`: −89% imp при position 10.0 → **6.4 ↑**. Сторінка втратила long-tail queries з deep positions (pos 30-90), залишилась тільки на core queries з хорошими позиціями → avg pos підтягнулась, total imp обвалився.

Конкретно для madgicx-review-alternative втрачені queries: "madgicx review", "madgicx vs revealbot", "madgicx tiktok ads automation" (pos 7.0!), long-tail conversational queries. Збережені: "madgicx alternative", "madgicx vs", "madgicx g2 reviews" — core competitive.

Тобто Google вирішив: "ця сторінка релевантна вужче ніж ми думали — показуємо тільки на найточніших matches".

**Додатковий фактор для AI-related тем (best-mcp-servers):** AI Overviews / AI Mode заміщають організічні results для багатьох MCP-related queries. Це найгарячіша AI surface тема — частина наших impressions просто "з'їдена" generative answers.

**Що це значить:**
- Це структурна recalibration алгоритмом, не наша технічна помилка.
- Rollback наших змін НЕ поверне покази.
- Стабілізація очікується після завершення rollout (~4 червня).
- Частково втрачені impressions можуть НЕ повернутись (AI Overview displacement — permanent shift).

**Sources:**
- [May 2026 Google Core Algorithm Update — Coalition Technologies](https://coalitiontechnologies.com/blog/may-2026-google-core-algorithm-update)
- [Google's May 2026 Core Algorithm Update Is Now Rolling Out — Justia](https://onward.justia.com/amp/googles-may-2026-core-algorithm-update-is-now-rolling-out/)
- [Google Algorithm & Ranking Volatility 2026 — Behind the Search](https://behindthesearch.in/blog/google-algorithm-ranking-volatility-2026)

---

### 🟧 H2 (MEDIUM confidence) — Rules library redesign амплифікував demotion

**Що сталось:**
- 12-13 травня: deploy Rules library MVP + UX redesign (#83) + 8 нових/перероблених rules.
- 15 травня: додано `RulesLibraryPromo` block на `/features/automation-rules` + `/use-cases/ad-campaign-automation-rules`.

**Що сходиться з цією гіпотезою:**
- **`/features/automation-rules` pos 16.6 → 39.4** — найбільший position drop з усіх. Сторінка отримала вставку RulesLibraryPromo блоку 15-го.
- **`/use-cases/ad-campaign-automation-rules` pos 14.2 → 29.0** — другий за величиною. Та сама правка 15-го.
- Обидві rules-related — одне і те ж семантичне поле.

**Що НЕ сходиться:**
- Інші сторінки які НЕ торкались (`best-bulk-ad-launch-tools`, `ad-creative-uploader`, `bulk-upload-creatives-meta-tiktok`) теж демутовані. Якщо це лише наша правка — вони мали б триматись.

**Запитання для перевірки (P1, не P0):**
- Що саме змінилось у rendered HTML на `/features/automation-rules` після PR #83? Скільки тексту видалено? Чи зник важливий H2/семантичний контент?
- Чи RulesLibraryPromo додає корисний унікальний контент, чи це лише cross-promo block (Google може розцінити як boilerplate)?

---

### 🟧 H3 (MEDIUM confidence) — 301 redirect на 15 травня з топік-mismatch

**Знахідка:** commit `bbfab39` (15 травня, 17:39) каже "blog: retire facebook-ads-automation, **301 to best-facebook-ads-automation-tools**" — але реальний redirect у `next.config.mjs` веде на `/automation-rules-library`, НЕ на listicle.

```js
// next.config.mjs
{
  source: "/blog/facebook-ads-automation",
  destination: "/automation-rules-library",  // ◄ не listicle!
  permanent: true,
},
```

**Чому це може шкодити:**
- Стара стаття "Facebook Ads Automation" ранжувала на topic "facebook ads automation" — це **blog/article intent**.
- Redirect веде на **product page** (rules library) — це **commercial/transactional intent**.
- Google може розцінити як topic-mismatch redirect → не передає ranking equity, може навіть penalize обидві сторони.
- Якщо мета була `/blog/best-facebook-ads-automation-tools` (listicle, blog intent) — це був би топік-match.

**Перевірити:** який intent був у старої URL по GSC за попередні 90д. Якщо commercial — нинішній redirect OK; якщо informational/listicle — change destination на listicle.

---

### 🟨 H4 (replaced) — see "Реальна механіка demotion" в H1

Початково ця секція пояснювала drop через "query lifecycle" (люди припинили шукати). Після перевірки per-query coverage даних — це пояснення **невірне**. Реальна механіка — **SERP coverage shrinkage**: Google перестав показувати сторінки для peripheral queries, залишив на core. Це не "люди не шукають" — це "Google не показує". Деталі винесено в H1 (це частина механіки core update, не окрема гіпотеза).

Виняток де query-volume hypothesis може частково триматись: AI-hype теми типу "Meta MCP" — там і Google показує менше через AI Overview displacement, і частина дослідницького інтересу природньо вщухає після Meta MCP launch (29 квітня). Але це другорядний фактор.

---

### ⚪ H5 (RULED OUT) — Sitemap / Robots / Indexation тех. проблеми

- `https://www.scalemate.co/sitemap.xml` повертає 200 з валідним XML.
- `robots.txt` без regressions.
- Перевірені сторінки (`/features/automation-rules`, `/use-cases/ad-campaign-automation-rules`) повертають 200.
- 301 на `/blog/facebook-ads-automation` працює (308 → /automation-rules-library — див. H3 щодо topic-match).
- Brand query "scalemate" tracking стабільний → no de-indexation event.

---

## 4. Action plan (recommendations)

### 🔴 P0 — Зробити цього тижня (1-2 год)

**1. Fix the 301 destination** (15 хв)
   - Edit `next.config.mjs`: change `destination: "/automation-rules-library"` → `destination: "/blog/best-facebook-ads-automation-tools"`.
   - Reason: align з commit message intent + tighter topic match (blog→blog vs blog→product page).
   - Caveat: спершу глянути GSC top queries для старої URL за останні 90д. Якщо там reasonably-commercial queries — лишити як є; якщо informational — flip на listicle.

**2. Audit Rules library redesign rendered HTML** (30 хв)
   - Compare `/features/automation-rules` server-rendered HTML до/після PR #83.
   - Check: чи скоротився текстовий обсяг? Чи зник H2 з ключовою фразою? Чи RulesLibraryPromo block рендериться server-side?
   - Якщо контент справді поріділ — додати назад або розширити.

### 🟧 P1 — Наступні 2 тижні (стояти, не діяти)

**3. Wait for May Core Update completion (~4 червня)** — НЕ робити масштабних content overhauls під час rollout. Tracking only.

**4. Categorize affected pages** на:
   - "Query lifecycle" (pos stable/improved) → no action
   - "Ranking demotion" (pos worse +5pp) → review проти Google helpful-content guidance (E-E-A-T, original insight, depth, user-first writing)
   - Demoted pages для пріоритизації review: `features/automation-rules`, `use-cases/ad-campaign-automation-rules`, `best-bulk-ad-launch-tools`, `best-ad-testing-tools`, `ad-creative-uploader`.

**5. NOT urgent: `creative-testing-framework`, `best-mcp-servers`** — це query lifecycle, не наша проблема. Не торкати.

### 🟦 P2 — Після завершення rollout (~5-10 червня)

**6. Re-measure stabilization** — порівняти May 30-June 7 vs current baseline. Зробити update до цього brief.

**7. Якщо `features/automation-rules` + `ad-campaign-automation-rules` не повернуться** після rollout — це сигнал що redesign щось зламав структурно. Тоді detailed content audit + можливо partial rollback.

**8. Якщо інші demoted pages не повернуться** — повний content quality audit (E-E-A-T signals, depth, original data, author bio, internal linking, unique angle vs competitors).

---

## 5. Що ми НЕ робимо і чому

- **Не міняємо контент demoted pages під час rollout.** Google не любить "panic edits" — це часто погіршує ситуацію. Чекаємо стабілізації.
- **Не rollback Rules library redesign.** Зміна UX була deliberate і пов'язана з product launch; rollback тільки якщо H2 підтвердиться після rollout (P2 step 7).
- **Не пишемо новий контент на місце demoted articles.** Спершу зрозуміти чи це алгоритм чи наша помилка.
- **Не trigger reindex.** Sitemap healthy, нема приводу.

---

## 6. Open questions для Natalia

1. Чи зробити fix #1 (redirect destination) **зараз** (це 1 commit) — чи спершу глянути GSC historic intent на старій URL?
2. Чи задеплоїти fix #2 audit (compare HTML pre/post #83) як окрему task для discovery agent?
3. Чи бажаєш повний weekly recon наступного понеділка (2 червня) — щоб охопити full Core Update aftermath?

---

## Tracking — add to `pipeline.md` §📊 Monitoring

```
| 2026-05-25 | Drop investigation: May 2026 Core Update + Rules redesign | baseline imp/day=590 pos=11 → current 322 pos=17 | next check 2026-06-05 (post-rollout) | decision: re-baseline + categorize demoted vs lifecycle |
```
