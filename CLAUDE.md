# Scalemate Landing
Next.js 16 app (App Router), SCSS modules, deployed on Vercel.

## Main instrucitons for this file
 - Any updates to this file should be in English language.

## Key commands

- `npm run dev` — dev server
- `npm run build` — production build

## Deploy

When asked to deploy:

1. Run `git fetch` then `git status` to get fresh local/remote state.
2. If behind remote — run `git pull --rebase`.
3. If not ahead of remote (nothing to push) — you MUST use the `AskUserQuestion` tool (not plain text) to present options: "Commit relevant files" or "Empty commit to trigger deploy". Do not ask as a text message. If user chooses to commit and there are more than 3 uncommitted files, ask the user to commit manually and stop the deploy flow.
4. If ahead of remote — proceed directly to step 5.
5. Do NOT run `git push` — the deploy script handles pushing.
6. Run `bash deploy.sh`.

## Brand & Content

- [docs/brand-persona-framework.md](docs/brand-persona-framework.md) — brand persona and content instructions for all website copy.
- [docs/content_framework.md](docs/content_framework.md) — content template for use-case pages (JTBD + performance positioning).

## Blog

Local markdown files, not CMS. See [docs/blog-articles.md](docs/blog-articles.md) for format, rules, and how to add articles.

## SEO Pipeline

For any SEO task (research, brief, draft, QA, review, "run research", "what's in pipeline", "update brief", "reject X") — instructions live in [seo-system/README.md](seo-system/README.md). Read it before doing any SEO work.

## Branching workflow (CRITICAL)

**Default: Loose mode. Natalia works directly on `main`. Do NOT create local feature branches.**

- Never run `git checkout -b seo/...` or any local branch creation when Natalia is editing locally. All edits to `seo-system/`, `content/blog/`, `app/` go directly to `main` with `git add` + `git commit` + `git push origin main`.
- The only exception is **cloud agents in codespaces** — they own their own `seo/<slug>` branches for isolation. Natalia never switches to those branches locally; she reviews/merges them via GitHub UI.
- **Race condition warning:** if a cloud agent has an open PR with stale base while Natalia edits the same files on main, merging that PR will revert her edits. Before merging any cloud-agent PR: `git fetch origin main && git rebase origin/main` on the topic branch (the cloud agent should do this; if it doesn't, abort merge until it does).
- If you (the assistant) notice you're on a non-main branch when Natalia asks for a local edit (`git branch --show-current` returns something other than `main`), **stop and tell her** before editing. Don't silently work on a stale branch.
