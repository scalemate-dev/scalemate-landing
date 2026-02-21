import Logo from "@/components/elements/Logo"
import styles from "../../_components/HowItWorksSection/HowItWorksVisuals.module.scss"

/* ───────────────────────────────────────
   Step 1 — Set Performance Thresholds
   Metric pills → animated flow → Rules Engine
   ─────────────────────────────────────── */

const metrics = [
  {
    label: "ROAS",
    threshold: "< 1.5",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "CPI",
    threshold: "> $2.40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "CTR",
    threshold: "< 0.8%",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Spend",
    threshold: "> $500",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
]

export function ThresholdVisual() {
  return (
    <div className={styles.ruleDiagram}>
      <svg
        className={styles.ruleLines}
        viewBox="0 0 480 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Metric pills → Rules Engine */}
        <path d="M 120 55 C 175 55, 190 130, 230 140" className={styles.rulePath} />
        <path d="M 120 125 C 175 125, 195 140, 230 150" className={styles.rulePath} />
        <path d="M 120 195 C 175 195, 195 170, 230 168" className={styles.rulePath} />
        <path d="M 120 265 C 175 265, 190 190, 230 178" className={styles.rulePath} />

        {/* Rules Engine → Output */}
        <path d="M 310 160 C 360 160, 370 160, 410 160" className={styles.rulePath} />

        {/* Animated dots on input paths */}
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M 120 55 C 175 55, 190 130, 230 140" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.6s" path="M 120 125 C 175 125, 195 140, 230 150" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="1.2s" path="M 120 195 C 175 195, 195 170, 230 168" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.3s" path="M 120 265 C 175 265, 190 190, 230 178" />
        </circle>

        {/* Animated dot on output path */}
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="1.6s" repeatCount="indefinite" begin="1s" path="M 310 160 C 360 160, 370 160, 410 160" />
        </circle>
        <circle r="2.5" className={styles.ruleDot} style={{ opacity: 0.45 }}>
          <animateMotion dur="1.6s" repeatCount="indefinite" begin="2.2s" path="M 310 160 C 360 160, 370 160, 410 160" />
        </circle>
      </svg>

      {/* Left: Metric pills */}
      <div className={styles.ruleMetrics}>
        {metrics.map((m, i) => (
          <div key={i} className={styles.ruleMetricPill}>
            <div className={styles.ruleMetricIcon}>{m.icon}</div>
            <div className={styles.ruleMetricText}>
              <span className={styles.ruleMetricLabel}>{m.label}</span>
              <span className={styles.ruleMetricThreshold}>{m.threshold}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Center: Rules Engine */}
      <div className={styles.ruleEngine}>
        <div className={styles.ruleEngineInner}>
          <Logo className={styles.ruleEngineLogo} />
        </div>
        <span className={styles.ruleEngineLabel}>Rules Engine</span>
      </div>

      {/* Right: Output status */}
      <div className={styles.ruleOutput}>
        <div className={styles.ruleOutputInner}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className={styles.ruleOutputLabel}>Rule Active</span>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────
   Step 2 — Define Actions: Pause, Scale, or Alert
   IF condition → Decision → Actions
   ─────────────────────────────────────── */

const actions = [
  {
    label: "Auto-Pause",
    color: "pause",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
      </svg>
    ),
  },
  {
    label: "Auto-Scale",
    color: "scale",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Alert",
    color: "alert",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export function ActionVisual() {
  return (
    <div className={styles.actionDiagram}>
      <svg
        className={styles.actionLines}
        viewBox="0 0 480 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Condition → Decision */}
        <path d="M 130 160 C 180 160, 195 160, 225 160" className={styles.rulePath} />

        {/* Decision → Actions */}
        <path d="M 295 160 C 340 160, 345 80, 385 80" className={styles.rulePath} />
        <path d="M 295 160 C 340 160, 345 160, 385 160" className={styles.rulePath} />
        <path d="M 295 160 C 340 160, 345 240, 385 240" className={styles.rulePath} />

        {/* Animated dots */}
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 130 160 C 180 160, 195 160, 225 160" />
        </circle>

        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.8s" path="M 295 160 C 340 160, 345 80, 385 80" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2s" repeatCount="indefinite" begin="1.4s" path="M 295 160 C 340 160, 345 160, 385 160" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.2s" path="M 295 160 C 340 160, 345 240, 385 240" />
        </circle>
      </svg>

      {/* Left: IF condition */}
      <div className={styles.actionCondition}>
        <div className={styles.actionConditionInner}>
          <span className={styles.actionConditionIf}>IF</span>
          <div className={styles.actionConditionRules}>
            <span>ROAS &lt; 1.5</span>
            <span>CPI &gt; target</span>
            <span>Spend &gt; $500</span>
          </div>
        </div>
      </div>

      {/* Center: Decision */}
      <div className={styles.actionDecision}>
        <div className={styles.actionDecisionInner}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
          </svg>
        </div>
        <span className={styles.actionDecisionLabel}>Evaluate</span>
      </div>

      {/* Right: Action cards */}
      <div className={styles.actionCards}>
        {actions.map((a, i) => (
          <div key={i} className={styles.actionCard} data-color={a.color}>
            <div className={styles.actionCardIcon}>{a.icon}</div>
            <span className={styles.actionCardLabel}>{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────────────────────
   Step 3 — Rules Run 24/7
   Clock + activity feed
   ─────────────────────────────────────── */

const activityItems = [
  { time: "02:14 AM", action: "Paused", target: "Ad Set #247", status: "pause" },
  { time: "03:41 AM", action: "Scaled +20%", target: "Campaign #89", status: "scale" },
  { time: "06:02 AM", action: "Alert sent", target: "CPI anomaly", status: "alert" },
  { time: "08:30 AM", action: "Paused", target: "Ad Set #312", status: "pause" },
]

export function MonitorVisual() {
  return (
    <div className={styles.monitorDiagram}>
      {/* Left: 24/7 clock */}
      <div className={styles.monitorClock}>
        <svg viewBox="0 0 120 120" className={styles.monitorClockSvg}>
          <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.12" />
          <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x1 = 60 + 48 * Math.cos(angle)
            const y1 = 60 + 48 * Math.sin(angle)
            const x2 = 60 + 54 * Math.cos(angle)
            const y2 = 60 + 54 * Math.sin(angle)
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={i % 3 === 0 ? "2" : "1"} opacity={i % 3 === 0 ? "0.3" : "0.15"} strokeLinecap="round" />
            )
          })}

          {/* Progress arc */}
          <circle cx="60" cy="60" r="50" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="314 314" className={styles.monitorArc}>
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Center pulse */}
          <circle cx="60" cy="60" r="4" className={styles.monitorPulse}>
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <span className={styles.monitorClockLabel}>24 / 7</span>
      </div>

      {/* Right: Activity feed */}
      <div className={styles.monitorFeed}>
        <span className={styles.monitorFeedTitle}>Rule Activity</span>
        {activityItems.map((item, i) => (
          <div key={i} className={styles.monitorFeedItem} data-status={item.status}>
            <span className={styles.monitorFeedTime}>{item.time}</span>
            <span className={styles.monitorFeedDot} />
            <span className={styles.monitorFeedAction}>{item.action}</span>
            <span className={styles.monitorFeedTarget}>{item.target}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
