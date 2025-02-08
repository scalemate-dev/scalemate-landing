import React from "react"
import Image from "next/image"
import Container from "../../shared/Container/Container"
import styles from "./Overview.module.scss"
import RichTextElements from "../../contentful/RichText/RichTextElements"

const Overview = ({ companyInfo, industry, useCase, logo }) => {
  // Prepend 'https:' if the URL starts with //
  const imageUrl = logo.startsWith("//") ? `https:${logo}` : logo

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src={imageUrl}
            alt="Contentful Logo"
            className={styles.logo}
            height={128}
            width={128}
            objectFit="cover"
          />

          <div className={styles.info}>
            <div className={styles.infoGroup}>
              <div className={styles.label}>Use case:</div>
              <div className={styles.value}>{useCase}</div>
            </div>

            <div className={styles.infoGroup}>
              <div className={styles.label}>Industry:</div>
              <div className={styles.value}>{industry}</div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
            <RichTextElements document={companyInfo} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Overview
