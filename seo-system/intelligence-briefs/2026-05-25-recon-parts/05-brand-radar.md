# Part 5 — Brand Radar (AI Visibility) — 2026-05-25

## Brand Radar setup status

**Status: project exists, but NOT operational. No data is being collected.**

| Item | Value |
|---|---|
| Project exists | YES |
| Report name | Competitor Report AI Tracking |
| Report ID | `019ddf15-205c-79f2-832d-ce1a72af6564` |
| Internal project ID | `9523283` |
| Created | 2026-04-30 |
| Custom prompts configured | **0** (empty — this is the blocker) |
| Ahrefs default prompts | **Blocked** — subscription missing "Chatgpt" addon for Brand Radar |
| Data sources scheduled (weekly) | chatgpt, gemini, perplexity |
| Data sources off | copilot, grok, google_ai_overviews, google_ai_mode |
| Mentions returned | 0 across all 16 candidate brands |
| SoV returned | 0.0 across all brands |
| Cited pages returned | 0 |
| AI responses returned | 0 |

**Diagnosis:** Report is a stub. No custom prompts → nothing to query → no responses recorded since 2026-04-30 creation date. Even if prompts were added, ChatGPT data source appears to need a paid addon ("Missing addon: Brand Radar [\"Chatgpt\"]" when calling with `prompts=ahrefs`).

## AI Mentions overview (last 30d)

| Domain | Mentions | SoV | Trend |
|---|---|---|---|
| scalemate.co | 0 | 0.0% | n/a (no data collected) |
| madgicx.com | 0 | 0.0% | n/a (no data collected) |
| bir.ch | 0 | 0.0% | n/a (no data collected) |
| admanage.ai | 0 | 0.0% | n/a (no data collected) |

Source: `brand-radar-mentions-overview` + `brand-radar-sov-overview`, data_source=chatgpt,perplexity,gemini, report_id=019ddf15-205c-79f2-832d-ce1a72af6564. Auto-detected brand variants returned by Ahrefs (also all zero): Birch, Adsmanage, Kitchn, Adtool, Ryze, AdEspresso, Pipeboard, Gomega, Revealbot, Smartly.io, Theoptimizer, AdRoll, Bidalgo, Skai.

## Topics where we're cited

| Topic | Page cited | Source LLM | Notes |
|---|---|---|---|
| — | — | — | No cited pages returned (no prompts configured) |

## Topics where competitors are cited but we are not

| Topic | Competitor cited | Source LLM | Volume | Gap severity |
|---|---|---|---|---|
| — | — | — | — | Cannot measure — no prompts running |

## Sample AI responses

None — `brand-radar-ai-responses` returned `{ "ai_responses": [] }` for the existing report.

## Tool calls executed

- `management-brand-radar-reports` → 1 report found
- `management-brand-radar-prompts` (report_id=019ddf15...) → `{ "prompts": [] }`
- `brand-radar-mentions-overview` (with report_id) → all zeros, 16 brand rows
- `brand-radar-sov-overview` (with report_id) → all zeros
- `brand-radar-cited-pages` (with report_id) → empty
- `brand-radar-ai-responses` (with report_id) → empty
- `brand-radar-mentions-overview` (no report_id, `prompts=ahrefs`) → error: "Missing addon: Brand Radar [Chatgpt]"
- `brand-radar-mentions-overview` (no report_id, no prompts param) → error: "Custom prompts require a report_id"

No tool failures beyond the addon gate. The empty-data result IS the finding.

## Recommended actions

### Priority 1 — Activate Brand Radar (setup gap)

The report scaffold exists but is producing zero signal. Two blockers, both Natalia-side:

1. **Add custom prompts to report `019ddf15-205c-79f2-832d-ce1a72af6564`** in Ahrefs UI → Brand Radar → Competitor Report AI Tracking → Prompts. Prompt count is currently 0.
2. **Confirm subscription tier covers Brand Radar ChatGPT data source.** Default Ahrefs prompts errored with "Missing addon: Brand Radar [Chatgpt]" — either the addon needs to be purchased OR custom prompts are the only path on the current plan. Custom prompts ARE allowed on the current plan (the report itself returns 200, just empty), so this is unblocked if we go custom-only.

### Priority 2 — Initial prompt set (recommended ~25 prompts to seed)

Cover the four core JTBD buckets + bottom-funnel comparison queries an ICP would actually type into ChatGPT/Perplexity/Gemini.

**Bucket A — Tool discovery (TOFU, brand-agnostic):**
1. What are the best tools for automating Facebook ads in 2026?
2. Best TikTok ads automation platform for media buyers
3. Top alternatives to Revealbot / bir.ch
4. Best ad automation tool for performance marketers
5. What is the best Meta ads bulk launch tool?
6. Best creative testing platform for paid social
7. Tools for scaling Facebook ad campaigns without burning out
8. Best automation rules software for Meta ads

**Bucket B — Mobile UA (our strong vertical):**
9. Best mobile user acquisition tools for app marketers
10. How do mobile UA managers test creatives at scale?
11. What tools do mobile gaming UA teams use for Meta + TikTok?
12. Best ad ops platform for mobile apps and games
13. Creative testing frameworks for mobile UA (Cheap Geo, AEO)

**Bucket C — Comparison / BOFU:**
14. Madgicx vs Revealbot — which is better for scaling Meta ads?
15. Madgicx alternatives for mobile UA
16. Smartly.io alternatives for performance marketers
17. Best Madgicx competitors in 2026
18. Cheaper alternatives to Smartly.io

**Bucket D — JTBD / pain language:**
19. How to automate Facebook ads without expensive enterprise tools
20. How to test 50+ ad creatives per week
21. How to scale Meta ad campaigns without hiring more buyers
22. How to centralize Meta + TikTok ad reporting in one place
23. How to bulk launch hundreds of ads efficiently
24. How to set up automation rules to prevent ad budget waste
25. Best practices for scaling mobile UA creative testing

### Priority 3 — Re-run this part once prompts are live

After 7-14 days of prompt collection (the report is set to weekly cadence on chatgpt/gemini/perplexity), re-execute Part 5 of recon. Expected first useful read by **2026-06-08 to 2026-06-15**.

### Priority 4 — Content/SEO implications (do not wait for Brand Radar)

Even without LLM data, we know from competitor analysis (Parts 3-4 of this recon) that comparison and "alternatives" content is the highest-leverage AI-visibility play. AI assistants disproportionately cite list/comparison pages. Independent of Brand Radar, prioritize:

- "Madgicx alternatives" — already partly covered, ensure on-page is optimized for citation (clear list, comparison table, pricing column).
- "Revealbot alternatives" / "bir.ch alternatives" — rebrand reality, write fresh.
- "Best Meta ads automation tools 2026" — listicle with us positioned alongside Madgicx/bir.ch.
- "Best mobile UA tools" — our differentiator pillar; LLMs will cite this if we publish it.

### Priority 5 — Optional second project for Mobile UA-specific tracking

Per MEMORY.md, Mobile UA is a strong vertical with its own pillar planned. Consider a **second Brand Radar report** scoped to mobile-UA-only prompts (apps + games), competitors AppsFlyer/Adjust-adjacent tools and Madgicx mobile angle. Keeps the main report scoped to general performance marketing, and isolates mobile UA signal.

## Bottom line

Brand Radar is **scaffolded but dark**. Natalia needs to (a) add custom prompts to the existing report, and (b) confirm subscription supports ChatGPT data source (if not, custom-only still works). Until then, AI visibility tracking is blocked and any "we're cited in X% of responses" claims are unsupported. Estimated time-to-first-useful-data after prompts are added: 1-2 weekly polling cycles.
