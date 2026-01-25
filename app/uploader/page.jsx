import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import UploaderWidget from "./components/UploaderWidget"
import styles from "./page.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"

export const metadata = {
  title: "Uploader - Bulk Upload Creatives to Ad Platforms | Scalemate",
  description:
    "Upload creatives from Google Drive directly to Facebook, TikTok, and Google Ads. Bulk upload videos and images to your ad campaigns in seconds.",
}

export default function UploaderPage() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <Image
          className={styles.bubble1}
          src={bubble}
          alt=""
          width={800}
          height={800}
        />
        <Image
          className={styles.bubble2}
          src={bubble2}
          alt=""
          width={800}
          height={800}
        />
        <Container>
          <div className={styles.heroContent}>
            {/* <div className={styles.heroText}>
              <h1>
                Bulk Upload Creatives <br />
                <span>From Cloud to Ads</span>
              </h1>
              <p className={styles.heroDescription}>
                Connect your ad accounts and Google Drive. Select creatives and upload them to Facebook, TikTok, or Google Ads in bulk. Save hours of manual work.
              </p>
            </div> */}
            <div className={styles.heroWidget}>
              <UploaderWidget />
            </div>
          </div>
        </Container>
      </section>

      <Container paddingBottom={100}>
        <div className={styles.featuresPlaceholder}>
          {/* Features section will go here */}
        </div>
      </Container>
    </div>
  )
}
