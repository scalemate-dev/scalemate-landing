# Step 5 — Competitive Gap Analysis

Для top-3 SERP results (з [Step 4b](04-serp-and-intent.md#4b-full-serp-analysis-enginegoogle-num10)):

## Що зібрати по кожному

- **Sections / depth** — які H2/H3, скільки розділів, де глибина, де поверхня
- **Word count** — приблизна довжина статті
- **Real data / screenshots / case studies** — є чи нема? Це наша differentiation якщо нема
- **Schema markup** — FAQ? HowTo? Article?
- **Backlink profile** — реалістично нам обігнати?

## Як міряти word count (без skript'а)

```bash
curl -s "[URL]" | sed -e 's/<[^>]*>//g' -e 's/&[^;]*;//g' | wc -w
```

Це грубо (включає nav/footer), але порядок величини видно. Якщо потрібна точність — Reader-style екстракція через WebFetch.

## Що шукати (gap = наша differentiation)

- **Чого top-3 НЕ покривають** — sections, кейси, deep dives, ICP-specific perspective
- **Що у них застаріло** — дати, цифри, screenshots старі
- **Що у них generic** — AI-fluff, перекази Wikipedia, без власної точки зору
- **Що у них тонке** — 800 words де треба 2500+

## Output

Записати у Topic Brief:

```
Top-3:
1. [domain] — [title] — [type], ~[word count] words
2. ...
3. ...

What they cover well: [...]
What they miss / our differentiation: [specific gaps]
Backlink realism: [can we beat / can't / ranks already despite low DR — meaning low backlink barrier]
```
