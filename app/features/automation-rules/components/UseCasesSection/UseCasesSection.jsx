import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import {
  IconMoon,
  IconFlame,
  IconWorld,
  IconRepeat,
} from "@tabler/icons-react"
import styles from "./UseCasesSection.module.scss"

const useCases = [
  {
    icon: IconMoon,
    title: "Protect overnight and weekend spend",
    description:
      "Rules auto-pause ad sets that breach performance floors while the team is offline. Set a ROAS floor. The system pauses underperformers within minutes, not hours. Budget stays protected without anyone checking dashboards at 2 AM.",
  },
  {
    icon: IconFlame,
    title: "Scale winners before creative burnout",
    description: (
      <>
        When an ad set hits performance targets, rules increase budget by a
        configured percentage, automatically. If performance dips after the
        increase, rollback fires. The way to{" "}
        <Link href="/use-cases/scale-ad-campaigns-faster">
          scale ad campaigns faster
        </Link>
        : capture the full window, not just the fraction a manual process
        covers.
      </>
    ),
  },
  {
    icon: IconWorld,
    title: "Enforce ROAS floors across all accounts",
    description:
      "Same threshold logic lets teams auto optimize campaigns across all Meta Ads accounts from one dashboard. Define the floor once. It applies everywhere. No rebuilding rules per account, no gaps.",
  },
  {
    icon: IconRepeat,
    title: "Run the full optimization loop on autopilot",
    description: (
      <>
        Combine pause, scale, and alert into{" "}
        <Link href="/use-cases/ad-campaign-automation-rules">
          ad campaign automation rules
        </Link>{" "}
        that cover the full cycle. The system monitors, decides, acts, and
        rolls back without manual input. Teams using a{" "}

        <Link href="/launch">bulk ad creation tool</Link> get the most out of
        this: more campaigns under management, same operational load.
      </>
    ),
  },
]

export default function UseCasesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Use Cases</span>
          <h2>
            Where Teams Use Automated Ad Optimization Rules
          </h2>
          <p className={styles.subtitle}>
            Each scenario below maps to a specific way automation rules protect
            budget and recover time. The common thread: what used to require
            checking dashboards all day now runs on its own.
          </p>
        </div>

        <div className={styles.grid}>
          {useCases.map((uc, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <uc.icon size={24} />
              </div>
              <h3>{uc.title}</h3>
              <p>{uc.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
