import HeroV2 from "./components/HeroV2/HeroV2"
import MetricsV2 from "./components/MetricsV2/MetricsV2"
import VideoTourV2 from "./components/VideoTourV2/VideoTourV2"
import RulesLibraryPromo from "@/components/home/RulesLibraryPromo/RulesLibraryPromo"
import FeaturesV2 from "./components/FeaturesV2/FeaturesV2"
import AudienceV2 from "./components/AudienceV2/AudienceV2"
import ROICalculatorV2 from "./components/ROICalculatorV2/ROICalculatorV2"
import CtaV2 from "./components/CtaV2/CtaV2"
import styles from "./page.module.scss"

export const metadata = {
  title: "Scalemate — Home v2 (preview)",
  description: "Internal preview of the redesigned homepage.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.scalemate.co" },
}

export default function HomeV2() {
  return (
    <div className={styles.main}>
      <HeroV2 />
      <MetricsV2 />
      <VideoTourV2 />
      <RulesLibraryPromo />
      <FeaturesV2 />
      <AudienceV2 />
      <ROICalculatorV2 />
      <CtaV2 />
    </div>
  )
}
