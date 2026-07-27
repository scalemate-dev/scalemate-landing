import styles from "./AgentPanel.module.scss"

// AI agent moment — a real marketer's question, answered with 3 concrete
// findings, ending in an action the agent took on its own. Slack floater +
// API code chip behind reinforce "trigger from anywhere": chat, channel,
// or your own stack.

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M7 1.5v3M7 9.5v3M1.5 7h3M9.5 7h3M3.1 3.1l2 2M8.9 8.9l2 2M10.9 3.1l-2 2M5.1 8.9l-2 2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)

const SlackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="6" y="1.5" width="2" height="6" rx="1" fill="#E01E5A" />
    <rect x="6" y="6.5" width="6" height="2" rx="1" fill="#36C5F0" />
    <rect x="1.5" y="6" width="6" height="2" rx="1" fill="#2EB67D" />
    <rect x="6" y="6" width="2" height="6" rx="1" fill="#ECB22E" />
  </svg>
)

const INSIGHTS = [
  { metric: "−38%", label: "Creative_holiday_v2 CVR ↓ — fatigue" },
  { metric: "−31%", label: "Main geo spend dropped — CPM up" },
  { metric: "+2.4x", label: "Two new creatives — ready to scale" },
]

export default function AgentPanel() {
  return (
    <div className={styles.panel} aria-hidden="true">
      {/* API code chip — peeks from behind */}
      <div className={styles.codeChip}>
        <span className={styles.codeDot} />
        <code className={styles.codeBody}>
          <span className={styles.codeKey}>scalemate.agents</span>
          <span className={styles.codeMethod}>.analyze</span>
          <span className={styles.codeParen}>(&hellip;)</span>
        </code>
      </div>

      {/* Chat card — main visual */}
      <div className={styles.chat}>
        {/* User question */}
        <div className={`${styles.row} ${styles.rowUser}`}>
          <span className={styles.avatarUser}>YA</span>
          <div className={styles.bubbleUser}>
            Why did Meta CPI jump 28% yesterday?
          </div>
        </div>

        {/* AI response */}
        <div className={`${styles.row} ${styles.rowAi}`}>
          <span className={styles.avatarAi}>
            <SparkleIcon />
          </span>
          <div className={styles.bubbleAi}>
            <p className={styles.bubbleLead}>
              Three patterns in your account:
            </p>
            <ul className={styles.insightList}>
              {INSIGHTS.map((i, idx) => (
                <li
                  key={i.label}
                  className={styles.insight}
                  style={{ animationDelay: `${1.1 + idx * 0.18}s` }}
                >
                  <span className={styles.insightMetric}>{i.metric}</span>
                  <span className={styles.insightLabel}>{i.label}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionChip}>
              <span className={styles.actionDot} />
              Paused 4 ad sets · scaled Lookalike_2 +15%
            </div>
          </div>
        </div>
      </div>

      {/* Slack origin floater */}
      <div className={styles.slackFloater}>
        <span className={styles.slackIcon}>
          <SlackIcon />
        </span>
        <div className={styles.slackBody}>
          <span className={styles.slackChannel}>#ua-ops</span>
          <span className={styles.slackTime}>asked 9:14 AM</span>
        </div>
      </div>
    </div>
  )
}
