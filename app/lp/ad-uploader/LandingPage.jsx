"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { trackAuditStarted } from "@/helpers/trackGTM"
import Link from "next/link"
import Image from "next/image"
import { IconArrowRight } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import FAQ from "@/components/FAQ/FAQ"
import GoogleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import MetaIcon from "@/assets/icons/meta-icon.svg"
import TikTokIcon from "@/assets/icons/tiktok-icon.svg"
import styles from "./LandingPage.module.scss"

const FAQ_ITEMS = [
  {
    question: "Is this really free?",
    answer:
      "Yes, 100% free. No credit card, no hidden fees. We built this to help media buyers and performance teams skip the manual grind.",
  },
  {
    question: "Do I need to download files to my computer?",
    answer:
      "No. Files go directly from Google Drive to your ad accounts. Nothing is downloaded to your device, and we never store your files.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Meta Ads and TikTok Ads via Google Drive. Google Ads is coming soon.",
  },
  {
    question: "How many files can I upload at once?",
    answer:
      "No practical limit. Teams regularly push hundreds of files per batch. The upload runs server-side, so large batches aren't limited by browser timeouts.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Files go directly from Drive to ad accounts. We never store your files on our servers. Encrypted connections, minimum permissions.",
  },
]

const CASE_STUDIES = [
  {
    company: "KitUp",
    vertical: "Education · 1M+ users",
    description:
      "KitUp adopted Scalemate for one-ad-per-ad-set campaigns. Manual campaign setup that took hours shifted to strategic analysis and creative iteration.",
    href: "/customers/kitup",
    metrics: [
      { value: "30,000+", label: "Ads launched" },
      { value: "200hrs", label: "Saved per month" },
      { value: "90%+", label: "Time saved to creatives upload" },
    ],
  },
  {
    company: "ZeptoLab",
    vertical: "Gaming · 2B+ downloads",
    description:
      "ZeptoLab needed bulk ad deployment — moving creatives from cloud storage to Facebook manually meant downloading and re-uploading every file. Those hours went back into campaign optimization.",
    href: "/customers/zeptolab",
    metrics: [
      { value: "2,000+", label: "Media files delivered" },
      { value: "90%", label: "Upload time reduced" },
      { value: "35hrs", label: "Saved monthly" },
    ],
  },
]

export default function LandingPage() {
  const videoRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    trackMixpanelEvent("video_modal_opened", {
      video: "explainer",
      location: "lp_hero",
    })
    setModalOpen(true)
  }

  const closeModal = useCallback(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setModalOpen(false)
  }, [])

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeModal()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [modalOpen, closeModal])

  return (
    <div className={styles.page}>
      {/* ── Screen 1: Hero + Explainer Video ── */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Free Tool for Marketers</span>
            <h1 className={styles.heroTitle}>
              Scale Your Ads,{" "}
              <span className={styles.heroAccent}>Not Your Workload.</span>
            </h1>
            <p className={styles.heroSub}>
              Scale campaigns faster and smarter. No files to download. No ads
              to set up by hand.
            </p>

            <Button
              href="https://app.scalemate.co/create-account"
              className={styles.heroCta}
              trackEvent="cta_clicked"
              trackProps={{ cta_location: "lp_hero" }}
              onClick={trackAuditStarted}
            >
              Start for Free
            </Button>
            <p className={styles.heroMicro}>No credit card required</p>

            <button
              type="button"
              className={styles.videoCard}
              onClick={openModal}
              aria-label="Watch a platform walkthrough"
            >
              <div className={styles.videoThumb}>
                <video src="/explainer.mp4" playsInline preload="metadata" />
                <div className={styles.playOverlay}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle
                      cx="24"
                      cy="24"
                      r="23"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                    />
                    <path d="M19 15L35 24L19 33V15Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className={styles.videoCardText}>
                <span className={styles.videoCardTitle}>
                  Watch a platform walkthrough
                </span>
                <span className={styles.videoCardSub}>
                  Click to watch how it works
                </span>
              </div>
            </button>

            <div className={styles.trustBar}>
              <span className={styles.trustLabel}>Works with:</span>
              <div className={styles.trustItems}>
                <div className={styles.trustItem}>
                  <Image
                    src={GoogleDriveIcon}
                    alt=""
                    width={18}
                    height={18}
                    className={styles.trustIcon}
                  />
                  <span>Google Drive</span>
                </div>
                <span className={styles.trustDot} />
                <div className={styles.trustItem}>
                  <Image
                    src={MetaIcon}
                    alt=""
                    width={20}
                    height={14}
                    className={styles.trustIcon}
                  />
                  <span>Meta Ads</span>
                </div>
                <span className={styles.trustDot} />
                <div className={styles.trustItem}>
                  <Image
                    src={TikTokIcon}
                    alt=""
                    width={14}
                    height={16}
                    className={styles.trustIcon}
                  />
                  <span>TikTok Ads</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Screen 2: Social Proof ── */}
      <section className={styles.proof}>
        <Container>
          <div className={styles.proofHeader}>
            <span className={styles.proofEyebrow}>Proven Results</span>
            <div className={styles.proofHeaderGrid}>
              <h2 className={styles.proofTitle}>
                Trusted by teams shipping{" "}
                <em className={styles.proofTitleAccent}>thousands of ads</em>
              </h2>
              <p className={styles.proofHeaderAside}>
                Teams using Scalemate report consistent outcomes: faster
                campaign launches, creatives scaled in hours not weeks, and
                thousands of hours saved.
              </p>
            </div>
          </div>

          <div className={styles.proofCards}>
            {CASE_STUDIES.map((study, idx) => (
              <article key={idx} className={styles.proofCard}>
                <div className={styles.proofCardTop}>
                  <span className={styles.proofCompany}>{study.company}</span>
                  <span className={styles.proofVertical}>{study.vertical}</span>
                </div>
                <p className={styles.proofCardText}>{study.description}</p>
                <div className={styles.proofMetrics}>
                  {study.metrics.map((m, i) => (
                    <div key={i} className={styles.proofMetric}>
                      <span className={styles.proofValue}>{m.value}</span>
                      <span className={styles.proofMetricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
                {study.href && (
                  <Link href={study.href} className={styles.proofCardLink}>
                    Read the full story <IconArrowRight size={14} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Screen 3: CTA (use-cases style) ── */}
      <div className={styles.ctaWrapper}>
        <section className={styles.cta}>
          <Container>
            <div className={styles.ctaContent}>
              <h2>Ready to upload creatives faster?</h2>
              <p>
                Skip the manual workflow. Upload ad creatives from Google Drive
                to Meta Ads and TikTok Ads in clicks.
              </p>
              <div className={styles.ctaButtons}>
                <Button
                  href="https://app.scalemate.co/create-account"
                  className={styles.ctaButton}
                  trackEvent="cta_clicked"
                  trackProps={{ cta_location: "lp_bottom_cta" }}
                  onClick={trackAuditStarted}
                >
                  Start for Free
                </Button>
              </div>
              <p className={styles.ctaMicro}>
                No credit card required. Free forever.
              </p>
            </div>
          </Container>
        </section>
      </div>

      {/* ── Screen 4: FAQ ── */}
      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={FAQ_ITEMS} title="FAQ" theme="light" multiOpen />
        </Container>
      </section>

      {/* ── Video Modal ── */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close video"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5l10 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className={styles.modalVideo}>
              <video
                ref={videoRef}
                src="/explainer.mp4"
                controls
                autoPlay
                playsInline
              />
            </div>
            <div className={styles.modalBar}>
              <div className={styles.modalBarText}>
                <span className={styles.modalBarTitle}>
                  Upload creatives from Drive to Ads — no downloading, no manual
                  setup
                </span>
                <span className={styles.modalBarSub}>
                  Free tool for media buyers and performance teams
                </span>
              </div>
              <Button
                href="https://app.scalemate.co/create-account"
                className={styles.modalBarCta}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "lp_video_modal" }}
                onClick={trackAuditStarted}
              >
                Start for Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
