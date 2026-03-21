import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "../components/ProblemSection/ProblemSection"
import FeaturesSection from "../components/FeaturesSection/FeaturesSection"
import HowItWorksSection from "../components/HowItWorksSection/HowItWorksSection"
import ResultsSection from "../components/ResultsSection/ResultsSection"
import AudienceSection from "../components/AudienceSection/AudienceSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "../page.module.scss"

export const metadata = {
  title: "Get Free Access — Ad Creative Uploader | Scalemate",
  description:
    "Upload ad creatives from Google Drive directly to Meta Ads and TikTok Ads. Get free access to the fastest creative upload tool for media buyers.",
  robots: { index: false, follow: false },
}

const faqItems = [
  {
    question: "Is this tool really free?",
    answer:
      "Yes, 100% free. No credit card required, no hidden fees, no upload limits. We built this ad creative uploader to help media buyers and marketing teams work faster.",
  },
  {
    question: "How is this different from uploading manually?",
    answer:
      "Instead of downloading files and re-uploading them one by one, you pick files from Google Drive and send them straight to your ad account in one click. Bulk upload ad creatives to multiple accounts at once — the bigger the batch, the more time you save.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Anyone who manages ad creatives regularly: media buyers running multiple accounts, marketing agencies handling creative distribution for clients, growth teams scaling ad operations at high frequency, and freelancers juggling multiple client accounts.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "You can upload creatives to Meta Ads and TikTok Ads directly from Google Drive. Google Ads support is coming soon.",
  },
  {
    question: "What file formats can I upload?",
    answer:
      "Upload images to Meta Ads and TikTok Ads in JPG and PNG, or upload videos in MP4. Basically anything your ad platforms accept.",
  },
  {
    question: "Do I need to download files to my computer?",
    answer:
      "No. Upload ads without downloading — files go directly from Google Drive to Meta Ads or TikTok Ads. Nothing is downloaded to your device, and we never store your files on our servers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We never store your files. They go directly from Google Drive to your ad accounts. Your platform connections are encrypted and we only request the minimum permissions needed to upload.",
  },
]

export default function GetStartedPage() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ResultsSection />
      <AudienceSection />
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
