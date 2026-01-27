import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import UploaderWidget from "./components/UploaderWidget"
import styles from "./page.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import {
  IconCloudUpload,
  IconDownloadOff,
  IconRocket,
  IconCreditCardOff,
  IconDevices,
  IconBrandGoogleDrive,
  IconClick,
  IconCheck,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react"

export const metadata = {
  title: "Free Creative Uploader | Google Drive to Facebook & TikTok Ads | Scalemate",
  description:
    "Upload ad creatives from Google Drive directly to Facebook and TikTok Ads. Free bulk upload tool - no downloads needed. Save hours on campaign launches.",
  keywords: "bulk upload creatives, Google Drive to Facebook ads, Google Drive to TikTok ads, free ad creative uploader, bulk creative upload tool",
  openGraph: {
    title: "Free Creative Uploader | Google Drive to Facebook & TikTok Ads",
    description: "Upload ad creatives from Google Drive directly to Facebook and TikTok Ads. Free bulk upload tool - no downloads needed.",
    type: "website",
  },
}

const features = [
  {
    icon: IconDownloadOff,
    title: "No Downloads",
    description: "Skip the tedious download-upload cycle. Files go straight from Google Drive to your ad accounts.",
    color: "blue",
  },
  {
    icon: IconDevices,
    title: "Multi-Platform",
    description: "Upload to Facebook and TikTok at once. One workflow for all your ad accounts.",
    color: "purple",
  },
  {
    icon: IconRocket,
    title: "Bulk Upload",
    description: "Select dozens of creatives and upload them all in a single click. No more one-by-one.",
    color: "orange",
  },
  {
    icon: IconCreditCardOff,
    title: "Completely Free",
    description: "No credit card, no trial limits, no catches. Just connect and start uploading.",
    color: "green",
  },
]

const steps = [
  {
    number: "1",
    icon: IconBrandGoogleDrive,
    title: "Connect",
    description: "Link your TikTok or Facebook ad accounts",
  },
  {
    number: "2",
    icon: IconClick,
    title: "Select",
    description: "Pick creatives from your Google Drive",
  },
  {
    number: "3",
    icon: IconCheck,
    title: "Upload",
    description: "One click — files go to your ad accounts",
  },
]

const faqItems = [
  {
    question: "Is this tool really free?",
    answer: "Yes, 100% free. No credit card required, no hidden fees, no upload limits. We built this to help marketers work faster.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Currently we support Facebook Ads and TikTok Ads. Google Ads support is coming soon.",
  },
  {
    question: "What file formats can I upload?",
    answer: "We support all major formats: JPG, PNG, MP4, MOV — basically anything your ad platforms accept.",
  },
  {
    question: "Is my data secure?",
    answer: "We never store your files. They go directly from Google Drive to your ad accounts. We only keep the connection tokens needed to make uploads work.",
  },
]

export default function UploaderPage() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero} id="top">
        <Image
          className={styles.bubble1}
          src={bubble}
          alt=""
          width={900}
          height={900}
        />
        <Image
          className={styles.bubble2}
          src={bubble2}
          alt=""
          width={900}
          height={900}
        />

        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <h1>Upload creatives from Google Drive to your ad accounts</h1>
              <p>Skip downloading files to your computer. Select from Drive, choose your ad accounts, upload in one click.</p>
            </div>

            <div className={styles.widgetWrapper}>
              <UploaderWidget />
            </div>

            {/* Platforms strip */}
            <div className={styles.platforms}>
              <span>Works with:</span>
              <div className={styles.platformLogos}>
                <div className={styles.platformLogo}>
                  <IconBrandGoogleDrive size={20} />
                  <span>Google Drive</span>
                </div>
                <div className={styles.platformLogo}>
                  <IconBrandTiktok size={20} />
                  <span>TikTok Ads</span>
                </div>
                <div className={styles.platformLogo}>
                  <IconBrandFacebook size={20} />
                  <span>Meta Ads</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>Why use our uploader?</h2>
            <p>Built for marketers who value their time</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard} data-color={feature.color}>
                <div className={styles.featureIcon}>
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2>How it works</h2>
            <p>Three steps to faster ad launches</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>
                  <step.icon size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <Container>
          <FAQ
            faqItems={faqItems}
            title="Questions & Answers"
            theme="light"
          />
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to save time on ad launches?</h2>
            <p>Join thousands of marketers uploading creatives the smart way.</p>
            <a href="#top" className={styles.ctaButton}>
              <IconCloudUpload size={20} />
              Start Uploading — It's Free
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
