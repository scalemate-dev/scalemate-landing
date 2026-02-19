"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Logo from "@/components/elements/Logo"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import styles from "./HowItWorksSection.module.scss"

const fileTypes = [
  { name: "hero_v2.mp4", type: "video" },
  { name: "banner_en.png", type: "image" },
  { name: "story_de.jpg", type: "image" },
  { name: "promo_fr.mp4", type: "video" },
  { name: "feed_square.png", type: "image" },
]

function SyncVisual() {
  return (
    <div className={styles.flowDiagram}>
      {/* Connection lines SVG */}
      <svg
        className={styles.flowLines}
        viewBox="0 0 480 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Google Drive → Scalemate */}
        <path
          d="M 90 100 C 150 100, 160 160, 220 160"
          className={styles.flowPath}
        />
        {/* Scalemate → TikTok */}
        <path
          d="M 280 160 C 340 160, 340 90, 400 90"
          className={styles.flowPath}
        />
        {/* Scalemate → Meta */}
        <path
          d="M 280 160 C 340 160, 340 235, 400 235"
          className={styles.flowPath}
        />

        {/* Animated dots — Drive to Scalemate */}
        <circle r="3" className={styles.flowDot}>
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            path="M 90 100 C 150 100, 160 160, 220 160"
          />
        </circle>
        <circle r="2.5" className={styles.flowDot} style={{ opacity: 0.5 }}>
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            begin="0.8s"
            path="M 90 100 C 150 100, 160 160, 220 160"
          />
        </circle>

        {/* Animated dots — Scalemate to TikTok */}
        <circle r="3" className={styles.flowDot}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="1.2s"
            path="M 280 160 C 340 160, 340 90, 400 90"
          />
        </circle>

        {/* Animated dots — Scalemate to Meta */}
        <circle r="3" className={styles.flowDot}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="0.6s"
            path="M 280 160 C 340 160, 340 235, 400 235"
          />
        </circle>
        <circle r="2.5" className={styles.flowDot} style={{ opacity: 0.5 }}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="1.6s"
            path="M 280 160 C 340 160, 340 235, 400 235"
          />
        </circle>

        {/* Small file icons flowing — Drive to Scalemate */}
        <g className={styles.flowFileIcon}>
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            begin="0.3s"
            path="M 90 100 C 150 100, 160 160, 220 160"
          />
          <rect
            x="-5"
            y="-6"
            width="10"
            height="12"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="-2"
            y1="-2"
            x2="2"
            y2="-2"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <line
            x1="-2"
            y1="1"
            x2="2"
            y2="1"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </g>
        <g className={styles.flowFileIcon}>
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            begin="1.8s"
            path="M 90 100 C 150 100, 160 160, 220 160"
          />
          <rect
            x="-5"
            y="-6"
            width="10"
            height="12"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="-2,-1 0,-3 2,-1 2,2 -2,2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </g>
      </svg>

      {/* Google Drive Node */}
      <div className={`${styles.flowNode} ${styles.flowNodeDrive}`}>
        <div className={styles.flowNodeInner}>
          <div className={styles.flowNodeIcon}>
            <Image
              src={googleDriveIcon}
              alt="Google Drive"
              width={28}
              height={28}
            />
          </div>
          <span className={styles.flowNodeLabel}>Cloud Storage</span>
        </div>
        <div className={styles.flowNodeFiles}>
          {fileTypes.map((f, i) => (
            <div key={i} className={styles.flowNodeFile}>
              <span className={styles.flowNodeFileIcon}>
                {f.type === "video" ? "▶" : "◻"}
              </span>
              <span>{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scalemate Node */}
      <div className={`${styles.flowNode} ${styles.flowNodeScalemate}`}>
        <div className={styles.flowNodeInner}>
          <Logo className={styles.flowNodeLogo} />
        </div>
      </div>

      {/* TikTok Node */}
      <div className={`${styles.flowNode} ${styles.flowNodeTiktok}`}>
        <div className={styles.flowNodeInner}>
          <div className={styles.flowNodeIcon}>
            <Image src={tiktokIcon} alt="TikTok" width={22} height={22} />
          </div>
          <span className={styles.flowNodeLabel}>TikTok Ads</span>
        </div>
      </div>

      {/* Meta Node */}
      <div className={`${styles.flowNode} ${styles.flowNodeMeta}`}>
        <div className={styles.flowNodeInner}>
          <div className={styles.flowNodeIcon}>
            <Image src={metaIcon} alt="Meta" width={26} height={26} />
          </div>
          <span className={styles.flowNodeLabel}>Meta Ads</span>
        </div>
      </div>
    </div>
  )
}

const params = [
  { key: "Budget", value: "$50 / day per ad set" },
  { key: "Targeting", value: "Lookalike 1% — US, DE, UK" },
  { key: "Placements", value: "Feed, Reels, Stories" },
  { key: "Structure", value: "1 ad per ad set" },
  { key: "Naming", value: "{concept}_{lang}_{date}" },
]

const launches = [
  "concept_A_en",
  "concept_A_de",
  "concept_B_en",
  "concept_B_fr",
]

function ConfigVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.vizConfig}>
        {params.map((param, i) => (
          <div key={i} className={styles.vizParam}>
            <span className={styles.vizParamKey}>{param.key}</span>
            <span className={styles.vizParamValue}>{param.value}</span>
          </div>
        ))}
        <div className={styles.vizApply}>Apply to all 75 ad sets</div>
      </div>
    </div>
  )
}

function LaunchVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.vizLaunch}>
        <div className={styles.vizLaunchHeader}>
          <span>75 ad sets</span>
          <span className={styles.vizLaunchComplete}>Complete</span>
        </div>
        <div className={styles.vizProgressBar}>
          <div className={styles.vizProgressFill} />
        </div>
        <div className={styles.vizLaunchList}>
          {launches.map((name, i) => (
            <div key={i} className={styles.vizLaunchItem}>
              <span>{name}</span>
              <span className={styles.vizLive}>Live</span>
            </div>
          ))}
          <div className={styles.vizLaunchMore}>+71 more launched</div>
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    number: "01",
    title: "Sync Ad Creatives from Cloud Storage",
    description:
      "Scalemate connects to Google Drive, NextCloud, or other storage and pushes creatives into Meta\u2019s Media Library \u2014 with deduplication and filtering built in.",
    Visual: SyncVisual,
  },
  {
    number: "02",
    title: "Set Campaign Parameters Once",
    description:
      "Budget, targeting, placements, naming conventions \u2014 configured once, ads destribution rules and saved to smart template. One-creative-per-ad-set tracking is supported.",
    Visual: ConfigVisual,
  },
  {
    number: "03",
    title: "Launch All Ads at Once",
    description:
      "Bulk ad deployment software that deploys hundreds of ad sets in one action \u2014 the launch ads at scale tool handles the volume, the team handles the decisions.",
    Visual: LaunchVisual,
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    )

    const elements = sectionRef.current?.querySelectorAll(
      `.${styles.header}, .${styles.step}`,
    )
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.howItWorks} ref={sectionRef}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.headerTitle}>
            How the Bulk Ad Launch Tool Works
          </h2>
          <p className={styles.headerSub}>
            Three steps replace the manual pipeline — from cloud storage to live
            campaigns across Meta.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.step} ${index % 2 !== 0 ? styles.stepReversed : ""}`}
            >
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                {step.Visual ? <step.Visual /> : step.visual}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
