---
description: Запустити SEO research у codespace (headless Claude обробить наступну задачу з pipeline.md, створить PR)
---

Запусти `bash scripts/run-research.sh` і повідом результат: URL PR'у або повний error trace якщо щось впало.

Скрипт сам:
- створить codespace
- дочекається готовності
- запустить headless Claude з Opus 4.7 1M context + max thinking
- inner Claude обробить перший item з seo-system/workflow/pipeline.md секції "1. New"
- запушить на окрему гілку і створить PR в main

Codespace залишається жити (idle 30 хв до auto-stop) щоб Natalia могла зайти і ревʼюити процес.
