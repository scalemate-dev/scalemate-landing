"use client"
import creativeLibrary from "@/assets/images/home/creative-library.png"
import cloudSync from "@/assets/images/home/cloud-sync.png"
import smartFlow from "@/assets/images/home/smart-flow.png"

import features1 from "@/assets/images/home/features-1.png"
import features2 from "@/assets/images/home/features-2.png"

import Image from "next/image"
import Container from "@/components/shared/Container/Container"
import styles from "./Features.module.scss"

const Features = () => {
  const features = [
    {
      image: smartFlow,
      badge: {
        label: "Smart Launches",
        background: "#F4F3FF",
        color: "#5925DC",
      },
      title: "Efortless launch to Win",
      description: `Run multiple ads with ease using smart launches.
        <br /><br />
        With Scalemate, launching ads is as simple as a click. No hassle, just
        results.`,
    },
    {
      image: creativeLibrary,
      badge: {
        label: "Creative Library",
        background: "#FFF1F3",
        color: "#C01048",
      },
      title: "Unified creative library",
      description: `Keep all your creatives in one place and instantly reach the asset you need. Filter files by tags, sizes, colors, and more.
        <br /><br />
        Access historical data about launched campaigns so you would never repeat them.`,
    },
    {
      image: cloudSync,
      badge: {
        label: "Cloud Sync",
        background: "#ECFDF3",
        color: "#027A48",
      },
      title: "One touch assets upload",
      description: `Forget about manual drag & drop routine — upload files in bulk via cloud sync.
        <br /><br />
        Transfer videos & images from cloud storage to advertisement platform with zero effort on your side.`,
    },
  ]

  return (
    <div className={styles.features}>
      <Container className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            {index === 0 && (
              <Image
                className={styles.featureImage1}
                src={features1}
                alt=""
                width={500}
                height={500}
              />
            )}
            {index === 1 && (
              <Image
                className={styles.featureImage2}
                src={features2}
                alt=""
                width={500}
                height={500}
              />
            )}
            <div className={styles.featureContent}>
              <div
                className={styles.featureBadge}
                style={{
                  color: feature.badge.color,
                  background: feature.badge.background,
                }}
              >
                {feature.badge.label}
              </div>
              <div className={styles.featureTitle}>{feature.title}</div>
              <div
                className={styles.featureDescription}
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
            <div className={styles.featureImage}>
              <Image src={feature.image} alt={feature.title} height={500} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Features
