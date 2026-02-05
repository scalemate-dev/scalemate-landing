import styles from "./HowItWorksSection.module.scss"

export default function WindowMockup({ children }) {
  return (
    <div className={styles.screenWindow}>
      <div className={styles.windowHeader}>
        <div className={styles.windowDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
      </div>
      <div className={styles.windowContent}>{children}</div>
    </div>
  )
}
