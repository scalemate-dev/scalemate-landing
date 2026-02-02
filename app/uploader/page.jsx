import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import AudienceSection from "./components/AudienceSection/AudienceSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  // TODO: Remove noindex once the uploader page is ready for public launch
  robots: "noindex",
  title: "Free Ad Creative Uploader — Google Drive to Meta & TikTok",
  description:
    "Upload ad creatives from Google Drive directly to Meta and TikTok Ads. Free bulk upload tool - no downloads needed. Save hours on campaign launches.",
  openGraph: {
    title: "Free Ad Creative Uploader — Google Drive to Meta & TikTok",
    description:
      "Upload ad creatives from Google Drive directly to Meta and TikTok Ads. Free bulk upload tool - no downloads needed.",
    type: "website",
    images: [{ url: "/og/uploader.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ad Creative Uploader — Google Drive to Meta & TikTok",
    description:
      "Upload from Google Drive to Meta & TikTok Ads. Free, no downloads needed.",
  },
}

const faqItems = [
  {
    question: "Is this tool really free?",
    answer:
      "Yes, 100% free. No credit card required, no hidden fees, no upload limits. We built this to help marketers work faster.",
  },
  {
    question: "How is this different from uploading manually?",
    answer:
      "Instead of downloading files and re-uploading them one by one, you pick files from Google Drive and send them straight to your ad account in one click. The bigger the batch, the more time you save.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Anyone who uploads ad creatives regularly: media buyers managing multiple accounts, marketing agencies delivering assets to clients, growth teams launching campaigns at high frequency, and freelancers juggling multiple client accounts.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Currently we support Meta Ads and TikTok Ads. Google Ads support is coming soon.",
  },
  {
    question: "What file formats can I upload?",
    answer:
      "We support all major formats: JPG, PNG, MP4. Basically anything your ad platforms accept.",
  },
  {
    question: "Do I need to download files to my computer?",
    answer:
      "No. Files go directly from your Google Drive to the ad platform. Nothing is downloaded to your device, and we never store your files on our servers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We never store your files. They go directly from Google Drive to your ad accounts. Your platform connections are encrypted and we only request the minimum permissions needed to upload.",
  },
]

export default function UploaderPage() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <FeaturesSection />
      <AudienceSection />
      <HowItWorksSection />

      <section className={styles.faq}>
        <Container>
          <FAQ
            faqItems={faqItems}
            subtitle="Got questions? We've got answers"
            theme="light"
            multiOpen
          />
        </Container>
      </section>

      <CtaSection />
    </div>
  )
}
