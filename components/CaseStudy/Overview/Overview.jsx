import React from "react"
import CounterAnimation from "@/components/elements/CounterAnimation/CounterAnimation"
import styles from "./Overview.module.scss"
import RichTextElements from "@/components/contentful/RichText/RichTextElements"

const Overview = ({ companyInfo, metrics }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <RichTextElements document={companyInfo} />
        </div>
      </div>

      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div className={styles.metric} key={metric.fields.description}>
            <CounterAnimation
              value={metric.fields.value}
              className={styles.metricValue}
            />
            <div className={styles.metricLabel}>
              {metric.fields.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Overview
