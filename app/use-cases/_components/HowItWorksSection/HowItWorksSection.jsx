import Container from "@/components/elements/Container/Container"
import styles from "./HowItWorksSection.module.scss"

export default function HowItWorksSection({ eyebrow = "How It Works", title, subtitle, steps }) {
  return (
    <section className={styles.howItWorks}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.headerTitle}>{title}</h2>
          <p className={styles.headerSub}>{subtitle}</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.step} ${index % 2 !== 0 ? styles.stepReversed : ""}`}
            >
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                {step.Visual && <step.Visual />}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
