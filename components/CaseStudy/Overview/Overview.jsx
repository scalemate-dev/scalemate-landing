import React from "react"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./Overview.module.scss"
import RichTextElements from "@/components/contentful/RichText/RichTextElements"

const Overview = ({ companyInfo, industry, useCase, logo }) => {
  // Prepend 'https:' if the URL starts with //
  const imageUrl = logo.startsWith("//") ? `https:${logo}` : logo

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <RichTextElements document={companyInfo} />
        </div>
      </div>
    </div>
  )
}

export default Overview
