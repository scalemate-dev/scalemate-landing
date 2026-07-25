import styles from "./HowItWorksSection.module.scss"

export default function StepCard({ step, isActive, onClick }) {
  return (
    <div
      className={`${styles.stepCard} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.stepNum}>{step.number}</span>
      <div className={styles.stepBody}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.description}</p>
      </div>
    </div>
  )
}
