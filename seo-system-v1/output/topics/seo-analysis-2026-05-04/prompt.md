# Run seo-analysis agent for slug: seo-analysis-2026-05-04

## Instructions

You are running the **seo-analysis** agent. Read its full spec before starting:

1. Open `seo-system-v1/agents/seo-analysis/README.md` and follow run order
2. Each numbered step file (`00-...md`, `01-...md`, ...) describes one workflow step — execute them in order
3. Respect all constraints: data-first, existing-first, never invent data

## Input

Weekly run, no per-topic input. Use today's date for output.

## Output

Per the agent's last step file. Update `seo-system-v1/workflow/pipeline.md` state correctly.

## When done

1. Commit artifacts: `seo-system-v1/output/topics/seo-analysis-2026-05-04/` + `seo-system-v1/workflow/{pipeline,scorecard}.md`
2. Push current branch
3. PR — **only create if missing**, never duplicate:
   ```bash
   if [ -z "$(gh pr list --head "seo/seo-analysis-2026-05-04" --json number --jq '.[0].number')" ]; then
     gh pr create --title "SEO: seo-analysis-2026-05-04" --body "Pipeline branch for topic seo-analysis-2026-05-04. Each agent (discovery → content-creator → qa) pushes commits here. Merge only after QA pass + deploy approval."
   fi
   ```
   Follow-ups just push; the existing PR auto-updates with new commits. No `gh pr comment` needed.
