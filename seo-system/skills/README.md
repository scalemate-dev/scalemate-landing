# Skills bundle

Claude Code skills, bundled in repo so they work identically on:
- Local Mac (`~/.claude/skills/X`)
- GitHub Codespace (symlinked at devcontainer startup)

The Codespace `setup-gsc.sh` script symlinks every directory here into
`~/.claude/skills/`, so any agent prompt referencing `~/.claude/skills/X`
works in both environments without changes.

## Bundled skills

| Skill | Author | License | Purpose |
|---|---|---|---|
| `seo-ops` | Anthropic / Scalemate | MIT | GSC client, trend_scout, content brief (project-specific) |
| `content-ops` | Alireza Rezvani | MIT | Expert panel scoring (used by qa.md stage 1) |
| `copy-editing` | Alireza Rezvani | MIT | Seven Sweeps review (used by qa.md stage 2) |
| `content-creator` | Alireza Rezvani | MIT | Brand voice + SEO content frameworks |
| `copywriting` | Alireza Rezvani | MIT | Marketing copy patterns |
| `seo-audit` | Alireza Rezvani | MIT | Technical SEO audit |

## Updating

To pull a fresh version of a third-party skill from your local Mac:

```bash
rsync -a --exclude='__pycache__' --exclude='*.pyc' --exclude='analytics/' \
  ~/.claude/skills/<skill>/ seo-system/skills/<skill>/
```

Then commit. The symlink will pick up the new content on next codespace launch.

## Adding a new skill

Drop the skill folder under `seo-system/skills/<skill-name>/`. The
`setup-gsc.sh` script auto-symlinks every directory in `seo-system/skills/*`
on the next codespace startup — no script changes needed.
