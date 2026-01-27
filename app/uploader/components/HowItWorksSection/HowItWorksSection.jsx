import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./HowItWorksSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import {
  IconBrandGoogleDrive,
  IconBrandTiktok,
  IconCheck,
} from "@tabler/icons-react"

const steps = [
  {
    number: "1",
    icon: IconBrandGoogleDrive,
    title: "Select",
    description: "Pick creatives from your Google Drive",
  },
  {
    number: "2",
    icon: IconBrandTiktok,
    title: "Connect",
    description: "Select TikTok or Meta ad accounts",
  },
  {
    number: "3",
    icon: IconCheck,
    title: "Upload",
    description: "One click and files go to your ad accounts",
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <Image
        className={styles.howItWorksBubble1}
        src={bubble}
        alt=""
        width={500}
        height={500}
      />
      <Image
        className={styles.howItWorksBubble2}
        src={bubble2}
        alt=""
        width={600}
        height={600}
      />
      <Container>
        <div className={styles.sectionHeader}>
          <h2>How it works</h2>
          <p>Your coffee won't even get cold. 3 steps and you're done</p>
        </div>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className={styles.timelineDot}>
                <step.icon size={24} />
              </div>
              <div className={styles.timelineNumber}>{step.number}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
