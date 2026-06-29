# AI-Detection Re-Check — `what-are-static-ads.md`

> Adversarial anti-AI pass on the LIVE article body (post hand-edit), calibrated to
> `seo-system/content-writing-rules.md` §1 + §6 and `qa-pipeline.md` Stage 3 (Humanizer).
> Scanned: article body lines 46–246 (frontmatter/FAQ schema excluded except where noted).

## Verdict

**AI-detection level: LOW.** Would this pass as human-written? **Yes — comfortably.** It reads
like an experienced media buyer talking shop: first-person operator voice, concrete numbers,
sourced claims, sentence-length variation with deliberate fragments ("It's a line item." /
"They're not." / "It's running only one."). No banned vocabulary, no clichéd openers, no
conclusion fluff. The only residual machine-signal is a mild over-reliance on the "Here's the
X / This is the part…" reveal construction — cosmetic, not disqualifying.

**Em-dash count in flowing prose: 3** (≈1 per 1,060 prose words; threshold is 1 per 150 — far
under). Body has 23 em-dashes total, but 13 are in tables, ~7 in image alt-text / italic
captions / provenance lines, and the `2–50×` / `15–20` are en-dash ranges (legitimate). Genuine
prose em-dashes: lines 52, 136 (Quick answer + AppsFlyer corroboration), and the §why-winning
caveat — all load-bearing, none decorative.

## Findings by category

1. **Banned / stock phrases & AI vocabulary** — **None found.** Grep for delve / today's
   landscape / it's worth noting / when it comes to / unlock / unleash / game-changer / robust /
   leverage / seamless / in conclusion / the bottom line / paramount / tapestry / elevate /
   furthermore / moreover etc. returned only one hit: "unlocking" inside the *Meta article URL*
   (line 101), not in prose. Clean.

2. **"Not just X, but Y" / "It's not about X; it's about Y"** — **None of the textbook AI form.**
   There are several "X isn't A; it's B" contrast pairs (lines 78, 124, 130, 230), but they are
   short, concrete, and reader-native ("The instinct is to blame the creative. Usually it's the
   audience."). These read as human emphasis, not the inflated "It's not about features — it's
   about outcomes" AI tell. No rewrite required. Watch only if more get added.

3. **Rule-of-three / triads** — **Low, deliberate.** "launch the volume, watch the distribution,
   judge on contribution, and refresh on frequency" (line 245) is a 4-part closer, not a triad.
   "Segwise … Meta … AppsFlyer" (line 210, 138) is a real enumeration of three sources, not a
   stylistic crutch. No machine-y triad stacking. Fine.

4. **Em-dash density** — **Pass.** 3 in flowing prose; well under threshold. (See count above.)

5. **Uniform sentence rhythm** — **Pass / strong.** Good long-short alternation and real
   fragments used for punch ("They're not. They're a line item." line 177; "It's running only
   one." line 91; "That's not a creative problem. It's a workflow problem." line 230). No stretch
   of 5+ same-length sentences found.

6. **Over-signposting / formulaic transitions** — **The one real (minor) tell.** A recurring
   "reveal" opener pattern:
   - L50: "the part nobody else writes about"
   - L124 (§plateau opener): "Here's the pattern that catches teams off guard:"
   - L175 (§hidden-cost opener): "This is the part the format debate misses entirely"
   - L222 (§judge-winner): "Here's the trap."
   - L103: "Here's the rough economics we see in practice"
   Five instances of "Here's the / This is the part…" curiosity-reveal framing. Each alone is
   fine and human; in aggregate it's the most pattern-y habit in the piece. Recommend varying
   2 of them (see edits below).

7. **Hedging clusters / empty qualifiers** — **Pass.** Counts: typically 1, generally 0, might 0,
   may 0, often 6, usually 4, tends/tend to 4, roughly 6. The "often/roughly/usually" instances
   are doing honest calibration work on real numbers ("roughly 67,000 ads", "roughly 3,000 ad
   sets", "usually convert better on warm") — appropriate for YMYL-adjacent ad-spend claims, not
   stacked hedging. No empty-qualifier clusters.

8. **Generic / inflated phrasing** — **None.** Every authoritative sentence is anchored to a
   number, a source, or a first-hand observation. No "say-nothing" sentences found.

9. **Listicle-y parallelism** — **Pass.** The 4-point launch list (L232–237) and the 3 plateau
   signals (L132–134) have varied internal structure and concrete payloads; not machine-parallel.

10. **Conclusion clichés** — **None.** Final paragraph (L245) is specific and on-voice ("instead
    of quietly spending 87% of your budget on a coin-flip"), not a generic wrap-up.

## Highest-impact edits to lower AI signal further (optional — all minor)

1. **L124 §opener** "Here's the pattern that catches teams off guard:" → e.g. "A static works,
   you push more budget at it, and ROAS *falls*. Most teams blame the creative. It's usually the
   audience." (Drops the reveal-opener; leads with the concrete scenario.)

2. **L175 §opener** "This is the part the format debate misses entirely, and it's where most
   spend actually leaks." → e.g. "The format debate skips the place most spend actually leaks."
   (Removes the second "This is the part…" echo of L50/L124.)

3. **L222** "Here's the trap." → cut the fragment and open directly: "Meta credits the conversion
   to the last click." (One fewer reveal-opener; the trap is self-evident from the next sentence.)

   > Doing any 2 of #1–#3 breaks up the only repeated structural tic.

4. **L52 (Quick answer)** is one long em-dash-bearing sentence stack; optional micro-trim of the
   final clause ("and refreshing before the winner fatigues") would tighten the TL;DR, but not
   an AI tell — leave if length is wanted for AEO extraction.

5. Nothing else. The piece is already in the **Low** band; #1–#3 are polish, not fixes.

## Bottom line
Strong human signal: operator POV in every section, ≥3 proactive facts per 1,000 words, sourced
benchmarks with provenance tags, varied rhythm with fragments. The single residual machine-habit
is the "Here's the / This is the part…" reveal opener (5×). Vary 2 of those and AI signal drops
to negligible. No banned-phrase or em-dash issues. **PASS — Low.**
