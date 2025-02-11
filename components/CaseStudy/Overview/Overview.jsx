import React from "react"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./Overview.module.scss"
import RichTextElements from "@/components/contentful/RichText/RichTextElements"

const Overview = ({ companyInfo, metrics, logo }) => {
  console.log("metrics", metrics)
  // Prepend 'https:' if the URL starts with //
  const imageUrl = logo.startsWith("//") ? `https:${logo}` : logo

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
            <div className={styles.metricValue}>{metric.fields.value}</div>
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
