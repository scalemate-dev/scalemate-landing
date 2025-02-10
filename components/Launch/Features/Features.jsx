import React from "react"
import Container from "@/components/elements/Container/Container"
import { FeatureItem } from "@/components/home/Features/Features"
import styles from "@/components/home/Features/Features.module.scss"
// import creativeLibrary from "@/assets/images/home/creative-library.png"
// import cloudSync from "@/assets/images/home/cloud-sync.png"

export default function Features({ features, title, description }) {
  return (
    <div className={styles.features}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </Container>
      <Container className={styles.container}>
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </Container>
    </div>
  )
}
