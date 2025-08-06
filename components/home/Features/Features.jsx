"use client"
import Link from "next/link"
import creativeLibrary from "@/assets/images/home/creative-library.png"
import cloudSync from "@/assets/images/home/cloud-sync.png"
import rulesImage from "@/assets/images/launch/rules-dashboard.png"

import features1 from "@/assets/images/home/features-1.png"
import features2 from "@/assets/images/home/features-2.png"
import launchSchema from "@/assets/images/launch/launch-schema.png"

import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./Features.module.scss"

/**
 * FeatureItem Component
 *
 * A pure component to render a single feature block.
 * Accepts the `feature` object and its `index` as props.
 */
export const FeatureItem = ({ feature, index }) => {
  return (
    <div className={styles.feature}>
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
        {feature.badge && (
          <div
            className={styles.featureBadge}
            style={{
              color: feature.badge.color,
              background: feature.badge.background,
            }}
          >
            {feature.badge.label}
          </div>
        )}
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <div
          className={styles.featureDescription}
          dangerouslySetInnerHTML={{ __html: feature.description }}
        />

        {feature.callToAction && (
          <Link
            href={feature.callToAction.href}
            className={styles.callToAction}
          >
            {feature.callToAction.label} →
          </Link>
        )}
      </div>
      <div className={styles.featureImage}>
        <Image src={feature.image} alt={feature.title} height={500} />
      </div>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      image: launchSchema,
      badge: {
        label: "Smart Templates",
        background: "#F4F3FF",
        color: "#5925DC",
      },
      title: "Flexible Templates",
      description: `
      Quickly build ad campaigns tailored to your exact strategy, without repetitive setup or manual copying.
      <br /><br />
      Create a dynamic template once, and use it to launch multiple campaigns.`,
    },
    {
      image: cloudSync,
      badge: {
        label: "Cloud Sync",
        background: "#ECFDF3",
        color: "#027A48",
      },
      title: "One touch assets upload",
      description: `Forget about manual drag & drop routine – upload new creatives automatically.
        <br /><br />
        Instantly upload and sync your ad creatives from Google Drive directly to Meta & TikTok Ads.`,
    },
    {
      image: rulesImage,
      title: "Empower Your Workflow",
      badge: {
        label: "Scalemate API",
        background: "#F4F3FF",
        color: "#5925DC",
      },
      description: `Quickly set up seamless automation that complements your existing processes.
        <br/><br/>
        Scalemate smoothly plugs into your favorite tools, workflows, and dashboards, making campaign management and creative syncing feel effortless from day one.`,
    },
    // {
    //   image: creativeLibrary,
    //   badge: {
    //     label: "Creative Library",
    //     background: "#FFF1F3",
    //     color: "#C01048",
    //   },
    //   title: "Unified creative library",
    //   description: `Keep all your creatives in one place and instantly reach the asset you need. Filter files by tags, sizes, colors, and more.
    //     <br /><br />
    //     Access historical data about launched campaigns so you would never repeat them.`,
    // },
  ]

  return (
    <div className={styles.features}>
      <Container className={styles.container}>
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </Container>
    </div>
  )
}

export default Features
