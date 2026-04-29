Run the SEO Intelligence Agent for Scalemate (scalemate.co).

Read and follow the full instructions in `seo-system/agents/intelligence.md`.

Mandatory context to load before starting:
- `seo-system/docs/architecture.md`
- `seo-system/rules/content-writing.md`
- `seo-system/workflow/scorecard.md`
- `seo-system/context/project-state.md`

Execute all steps (1 through 13):
1. GSC snapshot (striking, queries, pages)
2. Ahrefs baseline metrics + competitors
3. SerpAPI Trends (related_queries on 5 seed terms)
4. Brand Radar (mentions + SoV)
5. trend_scout.py
6. GSC query analysis (no dedicated content / clusters / keyword enrichment / wrong page detection)
6.5. ICP Pain Discovery (Reddit + PAA, map to JTBD)
7. Competitor content gap + keyword expansion (matching/related/questions/PAA)
8. New topic ideas synthesis
9. Indexation check for all blog/use-case/feature pages
10. Scoring of new items via the formula
11. Generate brief at `seo-system/intelligence/2026-04-29-recon.md`
12. Update `seo-system/workflow/scorecard.md`
13. Add top-priority candidates to `seo-system/workflow/pipeline.md` section "1. New (потребує discovery)"

After finishing, follow the standard agent git workflow:
- git add only the files you created/changed
- git commit -m "intelligence: weekly recon 2026-04-29"
- git push origin seo/intelligence-2026-04-29
- gh pr create --base main --head seo/intelligence-2026-04-29 --title "SEO: intelligence weekly recon 2026-04-29" --body "Weekly recon brief. See seo-system/intelligence/2026-04-29-recon.md."

Do NOT make decisions or deploy anything. Only prepare the brief for Natalia's review.
