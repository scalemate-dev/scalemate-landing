# Blog Articles

Articles live in `content/blog/` as `.md` files with YAML frontmatter. Data layer: `lib/blog.js`.

## Adding an article

1. Create `content/blog/{slug}.md`
2. Add frontmatter + markdown body (see template below)
3. Cover images go to `public/blog/covers/` — reference as `/blog/covers/filename.jpg`
4. FAQ items in frontmatter generate FAQPage schema automatically
5. No code changes needed — listing, sitemap, TOC, schema all auto-generated

## Frontmatter template

```yaml
---
title: "Article Title"
slug: url-slug
metaDescription: "Under 160 chars for SEO"
author: "Name or Scalemate Team"
coverImage: /blog/covers/slug.jpg  # or null
coverAlt: "Alt text"
createdAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
draft: false  # true = hidden from listing/sitemap, accessible via direct URL
faq:
  - question: "Question?"
    answer: "Answer text. Plain text only, no markdown."
---
```

## Rules

- `slug` must match filename (e.g. `my-post.md` → `slug: my-post`)
- `metaDescription` < 160 chars
- FAQ answers are plain text (used in JSON-LD schema)
- External links: standard markdown `[text](url)` — renderer adds `target="_blank"` automatically
- Internal links: `[text](/path)` — no target added
- Tables use standard GFM markdown syntax
- Headings H2/H3 auto-generate TOC and get anchor IDs
- Don't use H1 in body — it's rendered from `title` field
