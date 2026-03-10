import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import {
  IconTemplate,
  IconCloudUpload,
  IconRocket,
} from "@tabler/icons-react"
import styles from "./HowItWorksSection.module.scss"

const steps = [
  {
    number: "01",
    title: "Define Campaign Template",
    description:
      "The bulk campaign builder saves campaign structure as a reusable template: targeting, bids, budgets, naming. Set up once. Reuse for every launch without rebuilding.",
    icon: IconTemplate,
  },
  {
    number: "02",
    title: "Add Creatives from Google Drive",
    description:
      "Upload creatives from Google Drive. The system generates every combination: concept \u00d7 language \u00d7 GEO \u00d7 format. Teams create multiple ads at once on Meta: hundreds of variations from a single upload.",
    icon: IconCloudUpload,
  },
  {
    number: "03",
    title: "Launch and Auto-Label",
    description: (
      <>
        One click deploys all ad sets. Every variation auto-labeled by concept,
        language, and GEO for tracking. Teams launch multiple ads automatically
        with full traceability from the moment ads go live. From here,{" "}
        <Link href="/features/automation-rules">
          automated ad optimization rules
        </Link>{" "}
        take over 24/7.
      </>
    ),
    icon: IconRocket,
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2>How the Bulk Ad Creation Tool Works</h2>
          <p className={styles.subtitle}>
            Three steps from template to live campaigns:
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
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
