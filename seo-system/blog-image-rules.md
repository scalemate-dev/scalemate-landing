# Blog Image Rules

> Правила розміщення візуалів у статтях блогу Scalemate. Орієнтир для дизайнерки і для нас при підготовці статей.

---

## 1. Типи візуалів та їх ролі

| Тип | Призначення | Розмір | Формат |
|---|---|---|---|
| **Cover thumbnail** | Картка статті на `/blog`, og:image fallback | 1720×860px (2:1) | SVG або PNG 2x |
| **Hero background** | Фон під заголовок на сторінці статті | 1400×400px (3.5:1) | SVG (краще) або PNG 2x |
| **og:image** | Картинка для соцмереж/месенджерів при шерингу | 1200×630px | PNG 2x |
| **Inline visual** | Діаграма/схема всередині тексту статті | 1440×810px (16:9) | SVG (для схем) або PNG 2x (для скріншотів) |

**Чому SVG для діаграм:** масштабується без втрат, файл менший за PNG, чіткий на retina.
**Чому PNG для скріншотів і фото:** SVG не підходить для растрових зображень.

---

## 2. Скільки візуалів на статтю

- **Hero background + cover thumbnail** — обов'язково на кожну нову статтю
- **Inline візуали** — мінімум 1 на 800-1000 слів тексту
- **Максимум** — не більше 1 візуала на 400 слів (інакше текст втрачає ритм)

**Орієнтир для типової статті 1500-2500 слів:** 2-4 inline візуали + cover + hero bg.

---

## 3. Коли робити візуал, а коли ні

**✅ Робимо візуал:**
- **Workflow / процес** — кроки, цикл, послідовність дій
- **Comparison** — порівняння тулзів, методів, рівнів
- **Framework / decision tree** — як обрати, з чого почати
- **Концепція з 3+ елементами** — категорії, рівні, типи (краще побачити одразу ніж читати list)
- **Числові порівняння** — графіки де цифри передають insight (типу "30 min vs 4 hours")

**❌ НЕ робимо візуал:**
- Просто декоративна картинка з Unsplash без змісту
- Скріншот UI що дублює текстовий опис
- Іконка біля кожної секції (виглядає як шаблон)
- Stock photo з людьми за ноутбуком

**Правило:** візуал має **додавати інформацію**, яку текст не передає так само ефективно. Якщо діаграма просто повторює список — викинути або список.

---

## 4. Де саме розміщувати inline візуал

**✅ Правильні місця:**
- **Після вступного абзацу секції** — читач отримав контекст, тепер бачить ілюстрацію
- **Перед детальними підсекціями** — як overview перед deep-dive
- **Після останньої підсекції перед `---`** — як summary секції

**❌ Не робимо:**
- Одразу після H2 без жодного тексту (читач не має контексту)
- В середині абзацу (ламає читання)
- Підряд два візуали без тексту між ними
- В кінці статті після CTA

**Загальне правило:** мінімум 2 абзаци тексту до або після візуала.

---

## 5. Captions (підписи)

**Формат:** курсив під картинкою, окремим параграфом.

**Правила:**
- **1 коротке речення** (до 100 символів)
- **Передає insight, не опис** — що читач має винести з візуала
- **Не дублює alt text**
- **Без крапки в кінці** якщо це фраза-висновок

**Приклади:**

✅ Добре:
> *Start with the bottleneck — the right tool follows.*

✅ Добре:
> *Most teams operate at Level 1. The gap between Level 1 and Level 3 is where the real time savings live.*

❌ Погано (опис):
> *Diagram showing three levels of automation.*

❌ Погано (надто довго):
> *This chart visualizes how teams progress from manual ad management through native Meta automation, then to third-party tools, and finally to full AI-powered autopilot systems.*

---

## 6. Alt text

**Формат:** descriptive sentence без "image of" / "picture of".

**Правила:**
- **До 125 символів** (для accessibility readers)
- **Включає ключові поняття** з контексту статті (для SEO)
- **Описує зміст**, не вигляд ("five criteria" а не "circular diagram")

**Приклади:**

✅ Добре:
> "Three levels of Facebook ads automation: Level 1 native Meta tools free, Level 2 third-party platforms, Level 3 full AI autopilot"

❌ Погано:
> "Diagram"

❌ Погано:
> "A horizontal infographic with orange and blue elements showing automation"

---

## 7. Технічні вимоги до файлів

### Орієнтація
- **Inline візуали** — горизонтальна (16:9 або 4:3), вписується в article container
- **Hero background** — горизонтальна (3.5:1), розтягнута під hero секцію
- **Cover** — 2:1, для thumbnail карток

### Структура SVG
- **viewBox** обов'язково (інакше браузер не масштабує правильно)
- **width і height** ставити в матчі з viewBox
- **Прозорий фон** для inline візуалів (лягає на білий контент-фон)
- **Світлий бежевий фон** (#fefdfb або схожий) для hero — узгоджується з gradient статті

### Шляхи в репозиторії
Всі картинки для блогу — в одній папці `public/blog/images/{slug}/`. Окремих папок під covers/heroes не маємо — все в підпапці статті.

```
public/blog/images/
├── facebook-ads-automation/
│   ├── listing.svg          (cover thumbnail)
│   ├── hero.png             (og:image)
│   ├── hero-bg.svg          (hero background)
│   └── automation-levels-overview.png  (inline)
└── bulk-upload-creatives-meta-tiktok/
    ├── blog-card.svg
    ├── hero.svg
    └── manual-cost.svg
```

### Naming (всередині папки статті)
- Cover thumbnail: `blog-card.svg` або `listing.svg`
- Hero background: `hero-bg.svg` або `hero.svg`
- og:image: `og.png` або `hero.png`
- Inline візуали: `{purpose}.svg` (наприклад `automation-priority-framework.svg`, `manual-cost.svg`)

---

## 8. Frontmatter в markdown

```yaml
---
coverImage: /blog/images/{slug}/blog-card.svg
coverAlt: "Descriptive alt text"
heroBg: /blog/images/{slug}/hero-bg.svg
ogImage: /blog/images/{slug}/og.png  # якщо різний від cover
---
```

## 9. Inline картинка в markdown

```markdown
![Alt text describing the diagram content with key concepts](/blog/images/{slug}/{purpose}.svg)

*Caption with the insight in italic.*
```

---

## 9.5 Workflow: Natalia кидає сирі картинки, Claude обробляє

Дефолтний робочий процес — Natalia додає файли в розмові/папці, Claude приводить їх до правил §10.

**Що Natalia дає:**
1. Сирий файл (PNG/JPG/SVG будь-якого розміру — навіть 2MB скрін).
2. Slug статті або сторінки (`best-facebook-ads-automation-tools`, `madgicx-review-alternative` etc.).
3. Роль картинки: `cover` / `hero-bg` / `og` / `inline` (або словами — "скрін дашборду в секцію Pricing").

**Що Claude робить автоматично:**
1. **Перевіряє розмір** через `du -h` / `ls -lh`. Якщо raster >300KB:
   - Скрін дашборду / UI з градієнтами → JPG q82 через `sharp`
   - Скрін з різким текстом / прозорістю → PNG palette через `sharp`
   - Очікувана економія: 5–10× (див. §10.1).
2. **Перейменовує** за конвенцією §7.4 (`hero.svg`, `cover.svg`, `{purpose}.jpg`).
3. **Кладе** в `public/blog/images/{slug}/` (створює папку якщо нема).
4. **Видаляє оригінал** після конвертації (інакше в репо лежить два файли).
5. **Пише alt text** з ключовими поняттями статті, ≤125 символів, без "Image of...".
6. **Пише caption** з insight (не описом) — див. §5.
7. **Оновлює frontmatter** статті (`coverImage`, `coverAlt`, `heroBg`, `heroBgAlt`, `ogImage` залежно від ролі).
8. **Вставляє inline в markdown** через `![alt](path)` + наступним абзацом `*caption*` — в правильне місце (§4).
9. **Для JSX-картинок** додає `width`/`height` (raster) або перевіряє `viewBox` (SVG).
10. **Декоративні SVG** маркує `alt="" aria-hidden="true"` в JSX (§10.6).
11. **Перевіряє чекліст** §11 перед завершенням.

**Якщо щось неоднозначне** — Claude питає коротко (наприклад: "цей скрін як inline в секцію 'How to choose' чи як cover? Зараз 1.8MB PNG → конвертую в JPG?"). У `Auto Mode` бере reasonable default і йде далі.

---

## 10. SEO / accessibility / CWV вимоги (баги, які вже траплялись)

Цю секцію писали після реальних інцидентів — Ahrefs site audit + Google rich-results validator ловили їх раніше. Не повторюй.

### 10.1 Розмір файлу — головний винуватець LCP

**Ліміти:**
- **Inline PNG скріншоти (UI dashboard, etc.)** — `<= 300KB`. Якщо вихідний скрін >500KB — конвертуй у JPG через `sharp`.
- **Inline JPG** — `<= 200KB` для повношириних, `<= 100KB` для half-width.
- **Hero/cover SVG** — `<= 50KB` (зазвичай 3–10KB вистачає).
- **Inline SVG-діаграми** — `<= 80KB`.

**Чому це критично:**
- Ahrefs site audit (квітень + травень 2026) флагав `scalemate-uploader-dashboard.png` (1.4MB) і `scalemate-launcher-dashboard.png` (1.7MB) як oversized.
- Великі картинки = повільний LCP = просідання Core Web Vitals = втрата позицій.
- На блогових сторінках hero + cover вантажаться як LCP candidates — це найкритичніше місце.

**Команда для конвертації:**
```bash
# PNG → JPG (для скрінів з кольорами/градієнтами)
npx sharp -i input.png -o output.jpg -q 82

# PNG palette compression (якщо потрібна прозорість)
npx sharp -i input.png -o output.png --png-palette
```

Очікувана економія: **~10× зменшення** (1.4MB PNG → 94KB JPG, 1.0MB PNG → 310KB palette PNG).

### 10.2 Формат — PNG vs JPG vs SVG vs WebP

| Тип контенту | Формат | Чому |
|---|---|---|
| Дашборд-скріншот (Scalemate UI) | **JPG q82** | Багато кольорів, нема прозорості → JPG в рази менший за PNG |
| Скріншот з різким текстом (Meta Ads Manager) | **PNG palette** | Текст має бути чітким; palette-compression тримає розмір <300KB |
| Діаграма / framework / flowchart | **SVG** | Векторне, retina-friendly, маленький файл |
| Hero background | **SVG** | Розтягується без втрат |
| og:image | **PNG** або **JPG** | Соцмережі гірше парсять SVG; PNG безпечніше |

**WebP/AVIF** — Next.js автоматично оптимізує через `next/image`, тож вхідний формат менш важливий, але джерело все одно має бути розумного розміру.

### 10.3 Alt text — три рівні залежно від ролі

**Декоративні картинки (hero bg, фонові SVG):**
```jsx
<Image src="/hero-bg.svg" alt="" aria-hidden="true" />
```
`alt=""` + `aria-hidden="true"` — обов'язково обидва. Інакше Ahrefs флагає як missing alt.

**Контентні картинки (inline diagrams, screenshots):**
- Описовий alt до 125 символів з ключовими поняттями статті (для SEO + accessibility readers).
- Не починай з "Image of...", "Picture of...".

**Cover / og:image (через frontmatter):**
- В md: `coverAlt: "..."`.
- Fallback ланцюжок у коді: `heroBgAlt → coverAlt → "{title} — illustration"`.
- Якщо забудеш `coverAlt` — fallback спрацює, але це signal що ти не подумав про SEO.

**Інцидент:** до фіксу 67df6a8 (квітень 2026) VideoEmbed thumbnails, blog hero bg, ROICalculator/WithScalemate деко-картинки мали порожній alt. Ahrefs флагав. Тепер у JSX є fallback логіка — але frontmatter все одно треба заповнювати правильно.

### 10.4 Structured data — image field має бути АБСОЛЮТНИЙ URL

```jsx
// ❌ ПОГАНО — Google rich-results validator відхиляє
image: "/blog/images/{slug}/cover.svg"

// ✅ ДОБРЕ — абсолютний URL
image: article.coverImage.startsWith("http")
  ? article.coverImage
  : `https://www.scalemate.co${article.coverImage}`
```

Це вже захардкоджено в `app/blog/[slug]/page.jsx` для `Article` schema. Якщо додаєш schema на нову сторінку (`SoftwareApplication`, `Product`, etc.) — image field має бути абсолютний URL.

### 10.5 og:image — обов'язковий і ВАЛІДНИЙ

- Frontmatter `ogImage` має існувати як файл — якщо metadata посилається на видалену картинку, соцмережі показують broken preview.
- Розмір: 1200×630px PNG/JPG.
- Якщо `ogImage` не вказано — fallback на `coverImage`, потім на `/og-image.png`. Так захардкоджено в `generateMetadata`.

**Інцидент:** комміт 22caa70 — на ad-campaign-automation-rules use-case metadata посилалось на видалений og файл. Перевіряй, що файл існує перед мерджем.

### 10.6 Декоративні SVG → `aria-hidden`

Будь-яка картинка, що **не несе інформації** (hero bg, фонова текстура, декоративні shapes), має:
```jsx
<Image src="..." alt="" aria-hidden="true" />
```

Без `aria-hidden` Ahrefs/Axe ставлять його як missing alt, навіть з порожнім alt.

### 10.7 Width/height на raster картинках — обов'язково

Для PNG/JPG в `next/image` ставити explicit `width` і `height` (або `fill`) — інакше Cumulative Layout Shift (CLS).

```jsx
<Image src="/blog/images/{slug}/screenshot.jpg" alt="..." width={1440} height={810} />
```

SVG inline в markdown через `![]()` — Next автоматично визначає розмір по `viewBox`, тому й потрібен viewBox у SVG (п. 7).

---

## 11. Чекліст перед публікацією

**Контент і композиція:**
- [ ] Cover thumbnail готовий (1720×860)
- [ ] Hero background готовий (1400×400)
- [ ] Inline візуалів мінімум 1 на 800-1000 слів
- [ ] Кожен візуал має caption з insight (не описом)
- [ ] Кожен візуал має alt text з ключовими поняттями (до 125 символів)
- [ ] Візуали додають інформацію, не дублюють текст

**Файли:**
- [ ] Файли в правильній папці `public/blog/images/{slug}/`
- [ ] Naming за конвенцією (`blog-card.svg`, `hero-bg.svg`, `{purpose}.svg`)
- [ ] SVG мають viewBox і прозорий фон (для inline)

**SEO / CWV / a11y (п. 10):**
- [ ] **Розмір файлу:** PNG/JPG `<300KB`, SVG `<80KB`. Перевір `du -h public/blog/images/{slug}/*`.
- [ ] **Формат:** дашборд-скрін = JPG q82, UI скрін з текстом = PNG palette, діаграма = SVG.
- [ ] **Frontmatter `coverAlt` заповнений** (а не покладаєшся на fallback).
- [ ] **`ogImage` файл реально існує** на диску.
- [ ] **Декоративні SVG** мають `alt="" aria-hidden="true"` в JSX.
- [ ] **Article schema image** — абсолютний URL (захардкоджено, але перевір при новій schema).
- [ ] Перевірено візуально на live preview що картинки на повну ширину контейнера.
