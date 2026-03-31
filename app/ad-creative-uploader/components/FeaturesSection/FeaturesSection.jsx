import Container from "@/components/elements/Container/Container"
import styles from "./FeaturesSection.module.scss"
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
  },
  {
    icon: IconDownloadOff,
    title: "Upload Without Downloading",
    description:
      "Upload ads from Google Drive directly to your ad accounts. No local files, no manual transfers.",
  },
  {
    icon: IconDevices,
    title: "Multi-Platform",
    description:
      "Upload creatives to Meta Ads and TikTok Ads at once. One workflow for all your ad accounts.",
  },
  {
    icon: IconRocket,
    title: "Bulk Creative Upload",
    description:
      "Select dozens of creatives and bulk upload them all in a single click. No more one-by-one uploads to Ads Manager.",
  },
]

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why This Tool</span>
          <h2>Why use this ad uploader?</h2>
          <p className={styles.subtitle}>
            An ad uploader built to eliminate repetitive ad operations
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <feature.icon size={24} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
