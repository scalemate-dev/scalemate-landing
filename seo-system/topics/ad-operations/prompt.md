Запусти discovery agent для теми `ad operations`.

## Context від Natalia (зі scorecard)

| keyword | volume | KD | CPC | intent | note |
|---|---|---|---|---|---|
| ad operations | 250 | 1 | $0.60 | informational | 🔥 Literally what Scalemate IS. Need pillar. |

Це **pillar topic** — основна категорійна тема яку Scalemate буквально втілює як продукт. Discovery має бути ретельним: це фундамент під майбутній content hub.

## Інструкції

1. **Першим** прочитай `seo-system/README.md` для актуального workflow.
2. Прочитай `seo-system/agents/discovery.md` — це твоя роль і кроки.
3. Прочитай required context files (architecture, content-writing rules, scorecard, project-state).
4. Виконай ВСІ кроки discovery workflow:
   - Step 1: Keyword validation (Ahrefs + GSC + SERP)
     - Ahrefs `keywords-explorer-overview` для `ad operations` + варіацій (ad ops, ad operations manager, ad operations specialist, paid ads operations, ad operations tools, ad operations software, ad operations platform)
     - Ahrefs `keywords-explorer-volume-history` — чи росте чи падає
     - GSC: `python3 ~/.claude/skills/seo-ops/gsc_client.py --raw '{"dimensions":["query"],"row_limit":50,"days":28,"filters":[{"dimension":"query","operator":"contains","expression":"ad operations"}]}'` (також спробуй "ad ops")
     - SerpAPI live SERP для intent validation: `mcp__serpapi__search` з `{"engine":"google_light","q":"ad operations","num":10}` — критично перевірити що не plumbing/military/etc
   - Step 1.5: Funnel & conversion assessment (TOFU/MOFU/BOFU, кроків до sign-up, ICP fit)
   - Step 2: Existing content check — чи є вже наша сторінка по "ad operations" або close variants
   - Step 3: SERP analysis (top 10, features, dominant page types, DR конкурентів)
   - Step 4: Intent classification + intent separation check (можливо "ad operations" як category != "ad operations tools" як listicle)
   - Step 5: Competitive gap analysis (top-3 — що покривають, чого бракує)
   - Step 5.5: ICP pain research (Reddit r/PPC, r/FacebookAds, r/digital_marketing, Quora, X/Twitter — quotes, pain language, scale, workarounds, emotional triggers)
   - Step 6: Content type decision (pillar vs blog vs hub vs use-case) — особливо подумай чи це pillar/hub з child pages
   - Step 7: Title/meta pre-work (SERP patterns, brand placement, power elements)
   - Step 8: Generate Topic Brief у форматі з discovery.md Step 8
5. **Save:** `seo-system/topics/ad-operations/brief.md`
6. **Update pipeline.md:**
   - Якщо item відсутній — створи новий у секції `3. Pending Natalia review (brief)` з context з таблиці вище
   - Додай `artifact: topics/ad-operations/brief.md` і `agent-finished: <today>`
7. **Git workflow** (per README):
   - `git add` тільки створені/змінені файли (brief.md, pipeline.md, prompt.md якщо потрібно)
   - `git commit -m "discovery: ad-operations brief"`
   - `git push origin seo/ad-operations`
   - Перевір PR: `gh pr list --head seo/ad-operations --state open --json number --jq '.[0].number'`
   - Якщо PR немає — створи: `gh pr create --base main --head seo/ad-operations --title "SEO: ad-operations" --body "Topic: ad-operations (pillar). See seo-system/workflow/pipeline.md for state."`

## Special considerations для цієї теми

- **Це pillar** — brief має бути ширший за звичайний (можливо план content hub з child topics: ad operations tools, ad operations software, ad operations specialist role, ad operations workflow, etc.)
- **Disambiguation:** "ad operations" може означати: digital ad ops (publisher-side), paid social/search ops (advertiser-side, наша ICP), або navigational (старі агенції). SERP перевірити критично.
- **Scalemate positioning:** ми робимо ad operations automation для UA managers / media buyers (advertiser-side, paid social). Brief має чітко зафіксувати цю позицію.
- **Conversion potential:** category-defining pillar — high TOFU traffic, але потрібен зв'язок з product pages (free tier, automation tools).

Не пиши контент — тільки brief. Закінчуй commit + push + PR.
