import StepIcon from "./StepIcon"
import styles from "./HowItWorksSection.module.scss"

export default function StepCard({ step, isActive, onClick }) {
  return (
    <div
      className={`${styles.stepCard} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.stepHeader}>
        <div className={styles.stepIcon}>
          <StepIcon type={step.iconType} />
        </div>
        <span className={styles.stepNumber}>{step.number}</span>
      </div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.description}</p>
    </div>
  )
}
