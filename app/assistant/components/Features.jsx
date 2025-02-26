import React from "react"
import {
  IconMessageFilled,
  IconBoltFilled,
  IconClockHour3Filled,
} from "@tabler/icons-react"
import styles from "./Features.module.scss"

const FEATURES = [
  {
    title: "Text-to-Report",
    description: "Create reports based on Insights shared by your source",
    icon: (
      <IconMessageFilled color="var(--background)" className={styles.icon} />
    ),
    background: "linear-gradient(45deg, #F63D68 0%, #F75A6B 50%, #FBD677 100%)",
  },
  {
    title: "Bulk Actions",
    description: "Make data prooven actions on your campaigns",
    icon: <IconBoltFilled color="var(--background)" className={styles.icon} />,
    background: "linear-gradient(45deg, #FF930F 0%, #FFF95B 100%)",
  },
  {
    title: "Scheduled Tasks",
    description: "Schedule reports, launches or rules to run automatically",
    icon: (
      <IconClockHour3Filled color="var(--background)" className={styles.icon} />
    ),
    background: "linear-gradient(45deg, #696EFF 0%, #F8ACFF 100%)",
  },
  {
    title: "Text-to-Report",
    description: "Create reports based on Insights shared by your source",
    icon: (
      <IconMessageFilled
        color="var(--background)"
        stroke={2}
        className={styles.icon}
      />
    ),
    background: "linear-gradient(45deg, #00FF87 0%, #0061FF 100%)",
  },
]
export default function Features() {
  return (
    <div>
      <div className={styles.features}>
        {FEATURES.map((feature, index) => (
          <React.Fragment key={index}>
            <div className={styles.feature}>
              <h3 className={styles.title}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                  <div
                    className={styles.iconBackground}
                    style={{ background: feature.background }}
                  />
                </div>
                {feature.title}
              </h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
            <div className={styles.border} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
