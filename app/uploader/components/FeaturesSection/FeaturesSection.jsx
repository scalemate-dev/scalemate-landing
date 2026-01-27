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
      "No credit card, no trial limits, no catches. Just connect and start uploading.",
    color: "green",
  },
  {
    icon: IconDownloadOff,
    title: "No Downloads",
    description:
      "Direct from Drive to your ad accounts. Zero local files needed.",
    color: "blue",
  },
  {
    icon: IconDevices,
    title: "Multi-Platform",
    description:
      "Upload to Facebook and TikTok at once. One workflow for all your ad accounts.",
    color: "purple",
  },
  {
    icon: IconRocket,
    title: "Bulk Upload",
    description:
      "Select dozens of creatives and upload them all in a single click. No more one-by-one.",
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
          <h2>Why use our uploader?</h2>
          <p>Built to protect marketers from boring tasks</p>
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
