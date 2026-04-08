# Scalemate Landing

Next.js 16 app (App Router), SCSS modules, deployed on Vercel.

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
