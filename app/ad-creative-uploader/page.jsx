import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "./components/ProblemSection/ProblemSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import ResultsSection from "./components/ResultsSection/ResultsSection"
import AudienceSection from "./components/AudienceSection/AudienceSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title: "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool",
  description:
    "Free tool to bulk upload ad creatives from Google Drive to Meta and TikTok Ads. No downloads, multi-account support. Over 2M ads launched on the platform.",
  alternates: {
    canonical: "https://www.scalemate.co/ad-creative-uploader",
  },
  openGraph: {
    url: "https://www.scalemate.co/ad-creative-uploader",
    title: "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool",
    description:
      "Free tool to bulk upload ad creatives from Google Drive to Meta and TikTok Ads. No downloads, multi-account support. Over 2M ads launched on the platform.",
    type: "website",
    images: [{ url: "/og-creative-uploader.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Upload Ad Creatives to Meta & TikTok — Free Tool",
    description:
      "Free tool to bulk upload ad creatives from Google Drive to Meta and TikTok Ads. No downloads, multi-account support. Over 2M ads launched on the platform.",
    images: ["/og-creative-uploader.png"],
  },
}

const faqItems = [
  {
    question: "What is an ad uploader?",
    answerText:
      "An ad uploader is a tool that lets you send ad creatives directly from cloud storage (like Google Drive) to ad platforms (like Meta Ads and TikTok Ads) without downloading and re-uploading files manually. It eliminates the repetitive upload workflow and lets teams bulk upload creatives to multiple ad accounts at once. For a step-by-step walkthrough, see how to bulk upload creatives to Meta and TikTok.",
    answer: (
      <>
        An ad uploader is a tool that lets you send ad creatives directly from
        cloud storage (like Google Drive) to ad platforms (like Meta Ads and
        TikTok Ads) without downloading and re-uploading files manually. It
        eliminates the repetitive upload workflow and lets teams bulk upload
        creatives to multiple ad accounts at once. For a step-by-step
        walkthrough, see{" "}
        <Link href="/blog/bulk-upload-creatives-meta-tiktok">
          how to bulk upload creatives to Meta and TikTok
        </Link>
        .
      </>
    ),
  },
  {
    question: "Is this tool really free?",
    answer:
      "Yes, 100% free. No credit card required, no hidden fees, no upload limits. We built this ad uploader to help media buyers and marketing teams work faster.",
  },
  {
    question: "How is this different from uploading manually?",
    answerText:
      "Instead of downloading files and re-uploading them one by one, you pick files from Google Drive and send them straight to your ad account in one click. Bulk upload ad creatives to multiple accounts at once — the bigger the batch, the more time you save. See how teams use this workflow at scale in the bulk creative upload use case.",
    answer: (
      <>
        Instead of downloading files and re-uploading them one by one, you pick
        files from Google Drive and send them straight to your ad account in one
        click. Bulk upload ad creatives to multiple accounts at once — the bigger
        the batch, the more time you save. See how teams use this workflow at
        scale in the{" "}
        <Link href="/use-cases/automated-creative-upload-meta">
          bulk creative upload use case
        </Link>
        .
      </>
    ),
  },
  {
    question: "Who is this built for?",
    answerText:
      "Anyone who manages ad creatives regularly: media buyers running multiple accounts, marketing agencies handling creative distribution for clients, growth teams scaling ad operations at high frequency, and freelancers juggling multiple client accounts. Teams also pair the uploader with a launcher — see our breakdown of the best bulk ad launch tools and the wider comparison of the 13 best Facebook ads automation tools.",
    answer: (
      <>
        Anyone who manages ad creatives regularly: media buyers running multiple
        accounts, marketing agencies handling creative distribution for clients,
        growth teams scaling ad operations at high frequency, and freelancers
        juggling multiple client accounts. Teams also pair the uploader with a
        launcher — see our breakdown of the{" "}
        <Link href="/blog/best-bulk-ad-launch-tools">
          best bulk ad launch tools
        </Link>
        {" "}and the wider comparison of the{" "}
        <Link href="/blog/best-facebook-ads-automation-tools">
          13 best Facebook ads automation tools
        </Link>
        .
      </>
    ),
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

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Ad Creative Uploader",
  description:
    "Free ad uploader tool. Upload creatives from Google Drive directly to Meta Ads and TikTok Ads. Bulk upload to multiple ad accounts — no downloads needed.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/ad-creative-uploader",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answerText || (typeof item.answer === "string" ? item.answer : ""),
    },
  })),
}

export default function UploaderPage() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
