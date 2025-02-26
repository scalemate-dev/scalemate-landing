import React from "react"
import styles from "./Features.module.scss"

const FEATURES = [
  {
    title: "Text-to-Report",
    description: "Create reports based on Insights shared by your source",
  },
  {
    title: "Bulk Actions",
    description: "Make data prooven actions on your campaigns",
  },
  {
    title: "Scheduled Tasks",
    description: "Schedule reports, launches or rules to run automatically",
  },
  {
    title: "Text-to-Report",
    description: "Create reports based on Insights shared by your source",
  },
]
export default function Features() {
  return (
    <div>
      <div className={styles.features}>
        {FEATURES.map((feature, index) => (
          <React.Fragment key={index}>
            <div className={styles.feature}>
              <div>icon</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
            <div className={styles.border} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
