# Stage 3 — Humanizer Pass (Anti-AI)

> Reference: [`rules/content-writing.md` → Section 6 Anti-AI Content Rules`](../../../seo-system/rules/content-writing.md#anti-ai-rules) (anchor `#anti-ai-rules`).

## Покроковий чекліст (8 checks)

1. **Перше речення** — прочитати вголос. Звучить як людина?
2. **Blacklist scan** — перевірити ВСІ stock phrases з [Правило 6 «Blacklist 20+ stock phrases»](../../../seo-system/rules/content-writing.md#anti-ai-rules):
   - Generic openers ("In today's fast-paced...")
   - Vague claims ("It's important to note...")
   - Buzzwords ("Revolutionary", "Game-changer"...)
   - Corporate-speak ("Leverage synergies"...)
   - Transition overload (max 1 "furthermore" / "moreover" per article)
3. **Sentence length variability** — чи є 5+ речень підряд однакової довжини (~15-20 слів)?
4. **POV markers** — чи є min 1 per H2 section?
5. **Proactive facts** — чи є min 3 per 1000 слів?
6. **Customer language** — чи звучить як media buyer, не як corporate?
7. **First-hand experience** — чи є min 1 маркер (screenshot, client detail, experiment)?
8. **AI disclosure** — чи потрібен footer?

## Поріг провалу

**Якщо 3+ checks fail → повернути content-creator'у** з конкретними рядками для переписування через [Stage 5 FAIL](05-output-and-pipeline.md).

Менше 3 fail — продовжити на Stage 4 з зауваженнями (final review зловить потім якщо критично).
