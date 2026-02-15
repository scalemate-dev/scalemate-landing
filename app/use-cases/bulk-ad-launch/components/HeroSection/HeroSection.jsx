import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"

const creatives = [
  { gradient: "linear-gradient(135deg, #FFE0E6, #FFB3C6)", ext: "JPG" },
  { gradient: "linear-gradient(135deg, #C7D2FE, #A5B4FC)", ext: "MP4" },
  { gradient: "linear-gradient(135deg, #FEF3C7, #FDE68A)", ext: "PNG" },
]

const adColors = [
  "#FFE0E6", "#C7D2FE", "#FEF3C7", "#D1FAE5", "#EDE9FE",
  "#FFE4E6", "#DBEAFE", "#FEF9C3", "#CCFBF1", "#FCE7F3",
  "#E0E7FF", "#FED7AA", "#D1FAE5", "#DDD6FE", "#FECDD3",
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.bubble1}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
      />
      <Image
        className={styles.bubble2}
        src={bubble2}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
      />

      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.label}>Bulk Ad Launch</span>

            <h1>
              Launch Hundreds
              <br />
              of Ads <span className={styles.accent}>in Minutes</span>
            </h1>

            <p className={styles.description}>
              Remove the manual grind from campaign deployment — so your UA
              team spends time on strategy, not copy-paste.
            </p>

            <ul className={styles.props}>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Bulk-create hundreds of ad sets
              </li>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Cloud storage sync to ad platforms
              </li>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Full campaign structure control
              </li>
            </ul>

            <div className={styles.cta}>
              <Button color="accent" href="/book-a-demo">
                Book a Demo
              </Button>
              <Button outline href="https://app.scalemate.co/create-account">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.pipeline}>
              {/* Source: Cloud storage */}
              <div className={styles.stage}>
                <span className={styles.sourceBadge}>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 24 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.71 2L2 11.5h4.71L8.5 8h7l1.79 3.5H22L16.29 2H7.71z"
                      fill="#4285F4"
                      opacity="0.7"
                    />
                    <path
                      d="M2 11.5l3.5 6.5h13l3.5-6.5H2z"
                      fill="#0F9D58"
                      opacity="0.7"
                    />
                  </svg>
                  Google Drive
                </span>
                <div className={styles.creatives}>
                  {creatives.map((c, i) => (
                    <div
                      key={i}
                      className={styles.creative}
                      style={{
                        background: c.gradient,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <span className={styles.ext}>{c.ext}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow indicator */}
              <div className={styles.flow}>
                <span />
                <span />
                <span />
              </div>

              {/* Hub: Scalemate */}
              <div className={styles.hub}>Scalemate.</div>

              {/* Flow indicator */}
              <div className={styles.flow}>
                <span />
                <span />
                <span />
              </div>

              {/* Output: Ad platforms */}
              <div className={styles.stage}>
                <div className={styles.outputBadges}>
                  <span className={styles.metaBadge}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                        fill="#1877F2"
                      />
                    </svg>
                    Meta Ads
                  </span>
                  <span className={styles.tiktokBadge}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.82 4.48 6.3 6.3 0 001.86-4.49V8.73a8.3 8.3 0 004.76 1.5V6.78a4.83 4.83 0 01-1-.09z"
                        fill="#1A1A1A"
                      />
                    </svg>
                    TikTok Ads
                  </span>
                </div>
                <div className={styles.adsGrid}>
                  {adColors.map((color, i) => (
                    <div
                      key={i}
                      className={styles.miniAd}
                      style={{
                        background: color,
                        animationDelay: `${0.6 + i * 0.04}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat badges */}
            <div
              className={`${styles.floatingBadge} ${styles.badgeTopRight}`}
            >
              <span className={styles.badgeNumber}>248</span>
              <span className={styles.badgeText}>ads created</span>
            </div>
            <div
              className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}
            >
              <span className={styles.badgeNumber}>3 min</span>
              <span className={styles.badgeText}>avg. setup</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
