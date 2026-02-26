import styles from "../../_components/HowItWorksSection/HowItWorksVisuals.module.scss"

export function AutoRulesVisual() {
  return (
    <div className={styles.rulesCard} aria-hidden="true">
      <div className={styles.rulesHeader}>
        <span className={styles.rulesHeaderTitle}>Automation Rules</span>
        <span className={styles.rulesHeaderBadge}>3 active</span>
      </div>
      <div className={styles.rulesRows}>
        <div className={`${styles.rulesRow} ${styles.rulesRowScale}`}>
          <div className={styles.rulesRowIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className={styles.rulesRowInfo}>
            <span className={styles.rulesRowName}>Scale Winner</span>
            <span className={styles.rulesRowDesc}>
              ROAS &gt; 2.5 → Budget ×10
            </span>
          </div>
          <span className={styles.rulesRowBadge} data-type="scale">
            Active
          </span>
        </div>

        <div className={`${styles.rulesRow} ${styles.rulesRowPause}`}>
          <div className={styles.rulesRowIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          </div>
          <div className={styles.rulesRowInfo}>
            <span className={styles.rulesRowName}>Pause Loser</span>
            <span className={styles.rulesRowDesc}>
              CPI &gt; $4.00 → Pause ad set
            </span>
          </div>
          <span className={styles.rulesRowBadge} data-type="pause">
            Active
          </span>
        </div>

        <div className={`${styles.rulesRow} ${styles.rulesRowRollback}`}>
          <div className={styles.rulesRowIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </div>
          <div className={styles.rulesRowInfo}>
            <span className={styles.rulesRowName}>Instant Rollback</span>
            <span className={styles.rulesRowDesc}>
              Performance drop → Revert budget
            </span>
          </div>
          <span className={styles.rulesRowBadge} data-type="rollback">
            Active
          </span>
        </div>
      </div>
    </div>
  )
}

export function AgentVisual() {
  return (
    <div className={styles.agentCard} aria-hidden="true">
      <div className={styles.agentChrome}>
        <span className={styles.agentDot} data-color="red" />
        <span className={styles.agentDot} data-color="yellow" />
        <span className={styles.agentDot} data-color="green" />
      </div>
      <div className={styles.agentBody}>
        <div className={`${styles.agentMsg} ${styles.agentMsgUser}`}>
          <span>Which creatives are declining?</span>
        </div>
        <div className={`${styles.agentMsg} ${styles.agentMsgBot}`}>
          <span className={styles.agentMsgLabel}>AI Agent</span>
          <div className={styles.agentMetrics}>
            <div className={styles.agentMetric}>
              <span className={styles.agentMetricName}>hero_v2.mp4</span>
              <span className={styles.agentMetricTrend} data-trend="down">
                ↓ 23%
              </span>
            </div>
            <div className={styles.agentMetric}>
              <span className={styles.agentMetricName}>promo_fr.mp4</span>
              <span className={styles.agentMetricTrend} data-trend="down">
                ↓ 18%
              </span>
            </div>
            <div className={styles.agentMetric}>
              <span className={styles.agentMetricName}>banner_en.png</span>
              <span className={styles.agentMetricTrend} data-trend="up">
                ↑ 12%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
