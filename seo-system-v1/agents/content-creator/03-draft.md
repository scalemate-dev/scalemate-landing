# Step 3 — Write Full Draft

Після approve outline — писати по правилах [`rules/content-writing.md`](../../../seo-system/rules/content-writing.md).

## Обов'язково дотримуватись (по секціях rules)

- **Section 1** — Brand voice (confident, pragmatic, operational)
- **Section 2** — Content Architecture (template обраного треку з brief'у)
- **Section 3** — Writing Standards (heading hierarchy, readability, keyword integration)
- **Section 4.1** — Title/Meta methodology (фінал по [`#title-meta-prework`](../../../seo-system/rules/content-writing.md#title-meta-prework))
- **Section 5** — LLM-visibility (TL;DR, definitions, structured data, FAQ)
- **Section 6** — Anti-AI Rules: **виконати ВСІ правила** з [`#anti-ai-rules`](../../../seo-system/rules/content-writing.md#anti-ai-rules) (без винятків). Жодного hardcode'у тут — джерело правди тільки rules.
- **Section 8** — JTBD Messaging Framework

## Формат output

- Markdown файл готовий для Next.js blog
- Frontmatter з усіма обов'язковими полями (title, slug, metaDescription, author, createdAt, faq, `absoluteTitle: true` якщо потрібно — див. [`rules` → 4.1.7](../../../seo-system/rules/content-writing.md#L558))
- Body з усіма H2/H3, таблицями, FAQ

## Заборонено

- Заміна правил «по інтуїції» — все по rules
- Generic AI openers, stock phrases з blacklist
- Вигадані цифри / цитати / клієнтські кейси
- Placeholder'и `[TODO]` у production draft'і — спочатку [Step 5 input request](05-input-request.md), потім draft з реальними даними
