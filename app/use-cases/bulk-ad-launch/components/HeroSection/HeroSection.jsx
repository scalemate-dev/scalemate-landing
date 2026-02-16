import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"

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
              Launch Hundreds of Ads{" "}
              <span className={styles.accent}>in Minutes</span>
              <br />
              — Without Manual Setup
            </h1>

            <p className={styles.description}>
              A <strong>bulk ad launch tool</strong> removes the manual grind
              from campaign deployment. Instead of spending hours on repetitive
              setup, one workflow lets you:
            </p>

            <ul className={styles.props}>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Bulk-create hundreds of ad sets from a single setup
              </li>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Sync creatives from cloud storage directly to ad platforms
              </li>
              <li className={styles.prop}>
                <span className={styles.propDot} />
                Full control over campaign structure — including
                one-ad-per-ad-set
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
            <div className={styles.canvas}>
              {/* Window chrome */}
              <div className={styles.canvasBar}>
                <div className={styles.barDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.barTitle}>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.5 1.5l3 3-9 9H2.5v-3l9-9z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Launch Template
                </span>
                <div className={styles.barActions}>
                  <span className={styles.btnGhost}>Cancel</span>
                  <span className={styles.btnPrimary}>Save</span>
                </div>
              </div>

              {/* Canvas area with dot grid */}
              <div className={styles.canvasArea}>
                {/* Campaign setup card */}
                <div className={styles.campaignCard}>
                  <div className={styles.campaignHead}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                        fill="#1877F2"
                      />
                    </svg>
                    Campaign setup
                  </div>
                  <div className={styles.campaignBody}>
                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>Ad account:</span>
                      <span className={styles.fieldValue}>Brand_US_Main</span>
                    </div>
                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>Campaign:</span>
                      <span className={styles.fieldValue}>Q2_Performance</span>
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                <div className={styles.connectorLine} aria-hidden="true" />

                {/* Adset cards row */}
                <div className={styles.adsetRow}>
                  <div className={styles.adsetCard}>
                    <div className={styles.adsetHead}>
                      <span>Adset setup</span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="2"
                          y="5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                    <div className={styles.adsetBody}>
                      <span className={styles.fieldLabel}>Name:</span>
                      <span className={styles.fieldValue}>
                        Broad_18-65_&#123;dd-mm&#125;
                      </span>
                    </div>
                  </div>

                  <div className={styles.adsetCard}>
                    <div className={styles.adsetHead}>
                      <span>Adset setup</span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="2"
                          y="5"
                          width="9"
                          height="9"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                    <div className={styles.adsetBody}>
                      <span className={styles.fieldLabel}>Name:</span>
                      <span className={styles.fieldValue}>
                        LAL_TopSpenders
                      </span>
                    </div>
                  </div>

                  <div className={styles.adsetPlaceholder}>
                    <span>+ New Adset setup</span>
                  </div>
                </div>

                {/* Google Drive launch button */}
                <div className={styles.driveBtn}>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 24 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.71 2L2 11.5h4.71L8.5 8h7l1.79 3.5H22L16.29 2H7.71z"
                      fill="#4285F4"
                      opacity="0.85"
                    />
                    <path
                      d="M2 11.5l3.5 6.5h13l3.5-6.5H2z"
                      fill="#0F9D58"
                      opacity="0.85"
                    />
                    <path
                      d="M7.71 2L12 9.5 16.29 2H7.71z"
                      fill="#FBBC04"
                      opacity="0.85"
                    />
                  </svg>
                  Launch from Google Drive
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
