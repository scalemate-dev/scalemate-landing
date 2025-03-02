import React from "react"
import Image from "next/image"
import styles from "./CompanyCard.module.scss"

const CompanyCard = ({ logo, useCase, industry }) => {
  const imageUrl = logo.startsWith("//") ? `https:${logo}` : logo

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt="Contentful Logo"
        className={styles.logo}
        height={128}
        width={128}
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
  )
}

export default CompanyCard
