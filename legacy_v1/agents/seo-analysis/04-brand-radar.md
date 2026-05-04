# Step 4 — Brand Radar (AI visibility)

> AEO/GEO зріз: чи згадують нас ChatGPT / Perplexity / Gemini / Google AI Overviews? Як виглядає SoV vs конкурентів? Без цього не видно частини попиту, який вже не доходить до класичної органіки.

## Запит

```
mcp__ahrefs__brand-radar-mentions-overview:
  target: scalemate.co
  date_from: [28d ago]
  date_to: [today]

mcp__ahrefs__brand-radar-sov-overview:
  target: scalemate.co
  competitors: [madgicx.com, bir.ch, admanage.ai]
  date_from: [28d ago]
  date_to: [today]
```

Перед першим викликом — `mcp__ahrefs__doc` для точної сигнатури параметрів (формат `competitors`, country filter, source breakdown).

## Що записати

- Mentions per source (ChatGPT / Perplexity / Gemini / AI Overviews) — окремо
- Citations (коли AI дав посилання на наш домен)
- SoV % vs Madgicx / Birch / Admanage — у нашій ніші
- Тренд: вгору / вниз vs попередній період

## Caveat — Brand Radar Project

Без сконфігурованого Brand Radar Project у кабінеті Ahrefs (з власним списком prompts) дані **обмежені дефолтним моніторингом по домену**. Для повного покриття — завести project з нашими prompts:
- `"best facebook ads automation tools"`
- `"alternatives to madgicx"`
- `"how to automate meta ads at scale"`
- та ін.

`mcp__ahrefs__management-brand-radar-prompts` дозволяє керувати promтами через MCP.
