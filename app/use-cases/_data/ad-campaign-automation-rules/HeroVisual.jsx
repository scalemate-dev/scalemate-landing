import styles from "./HeroVisual.module.scss"

const rules = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    name: "Scale Winner",
    desc: "ROAS > 2.5 → Budget ×10",
    type: "scale",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </svg>
    ),
    name: "Pause Loser",
    desc: "CPI > $4.00 → Pause ad set",
    type: "pause",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
    name: "Instant Rollback",
    desc: "Performance drop → Revert",
    type: "rollback",
  },
]

export default function HeroVisual() {
  return (
    <div className={styles.stack}>
      {rules.map((rule, i) => (
        <div
          key={rule.type}
          className={styles.card}
          data-type={rule.type}
          style={{
            "--offset": `${i * 16}px`,
            "--z": 3 - i,
          }}
        >
          <div className={styles.cardIcon}>{rule.icon}</div>
          <div className={styles.cardInfo}>
            <span className={styles.cardName}>{rule.name}</span>
            <span className={styles.cardDesc}>{rule.desc}</span>
          </div>
          <span className={styles.cardBadge} data-type={rule.type}>
            Active
          </span>
        </div>
      ))}
    </div>
  )
}
