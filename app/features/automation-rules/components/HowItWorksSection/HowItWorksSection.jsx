import Container from "@/components/elements/Container/Container"
import {
  IconAdjustments,
  IconPlayerPause,
  IconArrowsUpDown,
  IconBell,
  IconRefresh,
} from "@tabler/icons-react"
import styles from "./HowItWorksSection.module.scss"

const steps = [
  {
    number: "01",
    title: "Define Conditions on Any Metric",
    description:
      "The rules engine for performance marketing accepts any metric as a trigger: ROAS, CPI, IPM, CTR, spend. Set a threshold and time window: ROAS below 1.2 for 24 hours, CPI exceeding target by 20%, or $500 spent with zero conversions. Works across all your Meta Ads accounts.",
    icon: IconAdjustments,
  },
  {
    number: "02",
    title: "Assign Actions: Pause, Scale, Adjust, or Alert",
    description: "Each rule maps to one of four responses:",
    icon: IconArrowsUpDown,
    actions: [
      {
        label: "Auto-pause",
        desc: "stop ad sets breaching performance floors",
        icon: IconPlayerPause,
      },
      {
        label: "Auto-scale budget",
        desc: "increase spend on winners, with automatic rollback",
        icon: IconArrowsUpDown,
      },
      {
        label: "Bid adjustments",
        desc: "shift bids based on real-time signals",
        icon: IconAdjustments,
      },
      {
        label: "Alerts",
        desc: "Slack or email notifications without automatic action",
        icon: IconBell,
      },
    ],
    footnote:
      "Teams that automate facebook ads rules through Scalemate run two modes: auto-execute for budget protection, alert-only for decisions that need review. As an ad performance automation tool, it adapts to the team's risk tolerance.",
  },
  {
    number: "03",
    title: "Rules Run 24/7 With Built-In Rollback",
    description:
      "Once live, rules run without interruption: monitoring, acting, rolling back. Detection, action, and recovery in one continuous loop. No overnight gaps, no weekend blind spots.",
    icon: IconRefresh,
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2>
            How Automated Ad Optimization Rules Work
          </h2>
          <p className={styles.subtitle}>
            Three steps replace the daily optimization grind. Each maps to a
            specific capability of the rules engine for performance marketing.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepIndicator}>
                <div className={styles.stepNumber}>{step.number}</div>
                {index < steps.length - 1 && (
                  <div className={styles.stepLine} />
                )}
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepIcon}>
                    <step.icon size={22} />
                  </div>
                  <h3>{step.title}</h3>
                </div>
                <p className={styles.stepDesc}>{step.description}</p>

                {step.actions && (
                  <div className={styles.actionGrid}>
                    {step.actions.map((action, i) => (
                      <div key={i} className={styles.actionCard}>
                        <div className={styles.actionIcon}>
                          <action.icon size={18} />
                        </div>
                        <div className={styles.actionText}>
                          <strong>{action.label}</strong> — {action.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {step.footnote && (
                  <p className={styles.stepFootnote}>{step.footnote}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
