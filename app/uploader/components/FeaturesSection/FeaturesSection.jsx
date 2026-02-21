import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./FeaturesSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import {
  IconDownloadOff,
  IconRocket,
  IconCreditCardOff,
  IconDevices,
} from "@tabler/icons-react"

const features = [
  {
    icon: IconCreditCardOff,
    title: "Completely Free",
    description:
      "No credit card, no trial limits, no catches. Free ad creative upload tool — connect and start uploading.",
    color: "green",
  },
  {
    icon: IconDownloadOff,
    title: "Upload Without Downloading",
    description:
      "Upload ads from Google Drive directly to your ad accounts. No local files, no manual transfers.",
    color: "blue",
  },
  {
    icon: IconDevices,
    title: "Multi-Platform",
    description:
      "Upload creatives to Meta Ads and TikTok Ads at once. One workflow for all your ad accounts.",
    color: "purple",
  },
  {
    icon: IconRocket,
    title: "Bulk Creative Upload",
    description:
      "Select dozens of creatives and bulk upload them all in a single click. No more one-by-one uploads to Ads Manager.",
    color: "orange",
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <Image
        className={styles.featuresBubble}
        src={bubble}
        alt=""
        width={700}
        height={700}
      />
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Why use this ad creative uploader?</h2>
          <p>
            A creative uploader tool built to eliminate repetitive ad operations
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.featureCard}
              data-color={feature.color}
            >
              <feature.icon size={32} className={styles.featureIcon} />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
