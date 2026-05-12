import Hero from "../components/Hero/Hero"
import HowCanHelp from "../components/home/HowCanHelp/HowCanHelp"
import Features from "../components/home/Features/Features"
import WithScalemate from "../components/home/WithScalemate/WithScalemate"
import RulesLibraryPromo from "../components/home/RulesLibraryPromo/RulesLibraryPromo"
import ROICalculator from "../components/home/ROICalculator/ROICalculator"
import WaitList from "../components/home/WaitList/WaitList"
import cn from "classnames"
import styles from "./page.module.scss"
import { pageMetadata } from "./metadata"

export const metadata = {
  ...pageMetadata.home,
  alternates: { canonical: "https://www.scalemate.co" },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scalemate",
  url: "https://www.scalemate.co",
  logo: "https://www.scalemate.co/og-image.png",
  description:
    "Launch hundreds of Facebook ads in minutes, scale campaigns faster and save hours of marketing routine daily.",
  sameAs: ["https://www.linkedin.com/company/scalemate"],
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Scalemate",
  url: "https://www.scalemate.co",
}

export default function Home() {
  const renderTitle = () => {
    return (
      <>
        Launch Ads Faster
        <br /> to <span>triple-scale</span> your app
      </>
    )
  }
  const description = `Scalemate let you launch hundreds of ads in minutes, scaling campaigns
          faster and smarter. Born to erase marketing routine and save your time.`

  const badge = {
    link: "/ad-creative-uploader",
    text: "Free Ad Uploader",
  }
  return (
    <div className={cn(styles.main, styles.home)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero
        title={renderTitle()}
        description={description}
        fullHeight
        badge={badge}
      />
      <WithScalemate title="With Scalemate, ad management becomes easy, cutting time by over 62%." />
      <RulesLibraryPromo />
      <Features />
      <HowCanHelp />
      <ROICalculator />
      <WaitList href="/book-a-demo" buttonText="Book a demo" />
    </div>
  )
}
