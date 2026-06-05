import styles from "./SystemsBackdrop.module.scss"

// Light wisps drifting along smooth curves — Apple-style minimalism.
// Each curve carries a single glowing dash that travels its full length,
// then wraps. With ~20 curves at slightly different speeds + phase
// offsets, the result is a quiet, continuous field of motion: never
// flashy, never synchronized, always moving. Reads as "the infrastructure
// is on and running, even while you sleep."

const VB_W = 1600
const VB_H = 800
const PATH_COUNT = 22

function buildPaths() {
  const paths = []
  const startTop = -160
  const startBot = VB_H + 160

  for (let i = 0; i < PATH_COUNT; i++) {
    const t = i / (PATH_COUNT - 1)
    const startY = startTop + t * (startBot - startTop)

    // Bow gives the field its diagonal-sweep character. Top curves bow
    // down, bottom curves bow up — they pass each other softly without
    // ever crossing perpendicular to the headline.
    const bow = (0.5 - t) * 180
    const cy1 = startY + bow * 1.4
    const cy2 = startY - bow * 0.6
    const endY = startY - bow * 0.5

    const d = `M -200,${startY} C ${VB_W * 0.3},${cy1} ${VB_W * 0.7},${cy2} ${VB_W + 200},${endY}`

    // Total path length (for dashoffset wrap distance)
    const len = Math.hypot(VB_W + 400, endY - startY) * 1.18

    // The visible "wisp" — a small chunk of the dash pattern. Stays
    // around 8-12% of total length so it always reads as a comet, not
    // a long streak.
    const wisp = Math.max(80, len * 0.1)

    // Speed varies just enough to keep things organic. Slow on purpose.
    const duration = 18 + (i % 5) * 2.4

    // Negative delay so each path starts mid-flight on page load — no
    // dead pause before motion begins.
    const delay = -((i * 1.3) % duration)

    // Two accent strands threaded through the field for brand warmth.
    const accent = i === 6 || i === 16

    paths.push({
      id: `p${i}`,
      d,
      len,
      wisp,
      duration,
      delay,
      accent,
      // Per-path opacity for subtle depth — some strands brighter, most quiet.
      opacity: accent ? 1 : 0.5 + (i % 3) * 0.18,
      strokeWidth: accent ? 1.4 : 1 + ((i % 4) * 0.1),
    })
  }
  return paths
}

const PATHS = buildPaths()

export default function SystemsBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft viewport vignette so wisps fade at the edges instead of
              hard-clipping. Apple loves this kind of edge softness. */}
          <radialGradient id="paths-fade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="55%" stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="paths-fade-mask">
            <rect width={VB_W} height={VB_H} fill="url(#paths-fade)" />
          </mask>
        </defs>

        <g mask="url(#paths-fade-mask)">
          {PATHS.map((p) => (
            <path
              key={p.id}
              d={p.d}
              fill="none"
              stroke={
                p.accent
                  ? "rgba(249, 115, 22, 0.85)"
                  : "rgba(255, 255, 255, 0.85)"
              }
              strokeWidth={p.strokeWidth}
              strokeLinecap="round"
              className={p.accent ? styles.pathAccent : styles.path}
              style={{
                opacity: p.opacity,
                // The dasharray pattern is [wisp, big-gap]. Only the
                // wisp shows; the gap is the dark space between wisps.
                strokeDasharray: `${p.wisp} ${p.len}`,
                strokeDashoffset: 0,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--len": `${p.len + p.wisp}`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
