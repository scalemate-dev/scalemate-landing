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

const configParams = [
  {
    label: "Budget",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="8" x2="12" y2="8" />
        <path d="M15 9.5V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.5" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    label: "Targeting",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "Placements",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Distribution \n control",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

function ConfigVisual() {
  return (
    <div className={styles.cfgDiagram}>
      {/* SVG connection lines */}
      <svg
        className={styles.cfgLines}
        viewBox="0 0 520 360"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Param pills → Smart Template (center) */}
        <path
          d="M 128 75 C 175 75, 200 145, 240 150"
          className={styles.cfgPath}
        />
        <path
          d="M 128 130 C 180 130, 205 150, 240 158"
          className={styles.cfgPath}
        />
        <path
          d="M 128 210 C 180 210, 205 175, 240 172"
          className={styles.cfgPath}
        />
        <path
          d="M 128 290 C 175 290, 200 190, 240 185"
          className={styles.cfgPath}
        />

        {/* Smart Template → Campaign tree */}
        <path
          d="M 305 165 C 355 165, 360 110, 395 110"
          className={styles.cfgPath}
        />

        {/* Static dots at pill endpoints */}
        <circle cx="128" cy="75" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="130" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="210" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="290" r="3" className={styles.cfgDotStatic} />

        {/* Animated dots — pills to template */}
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M 128 75 C 175 75, 200 145, 240 150"
          />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion
            dur="2.2s"
            repeatCount="indefinite"
            begin="0.5s"
            path="M 128 130 C 180 130, 205 150, 240 158"
          />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion
            dur="2.1s"
            repeatCount="indefinite"
            begin="1s"
            path="M 128 210 C 180 210, 205 175, 240 172"
          />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            begin="0.3s"
            path="M 128 290 C 175 290, 200 190, 240 185"
          />
        </circle>

        {/* Animated dots — template to campaign tree */}
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion
            dur="1.8s"
            repeatCount="indefinite"
            begin="1.2s"
            path="M 305 165 C 355 165, 360 110, 395 110"
          />
        </circle>
        <circle
          r="2.5"
          className={styles.cfgDotAnimated}
          style={{ opacity: 0.45 }}
        >
          <animateMotion
            dur="1.8s"
            repeatCount="indefinite"
            begin="2.4s"
            path="M 305 165 C 355 165, 360 110, 395 110"
          />
        </circle>
      </svg>

      {/* Left: Parameter pills */}
      <div className={styles.cfgParams}>
        {configParams.map((p, i) => (
          <div key={i} className={styles.cfgPill}>
            <div className={styles.cfgPillIcon}>{p.icon}</div>
            <span className={styles.cfgPillLabel}>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Center: Smart Template */}
      <div className={styles.cfgCenter}>
        <div className={styles.cfgTemplateStack}>
          <div className={styles.cfgTemplateCard} data-layer="3" />
          <div className={styles.cfgTemplateCard} data-layer="2" />
          <div className={styles.cfgTemplateCard} data-layer="1">
            <div className={styles.cfgTemplateLines}>
              <div
                className={styles.cfgTemplateLine}
                style={{ width: "60%" }}
              />
              <div
                className={styles.cfgTemplateLine}
                style={{ width: "80%" }}
              />
              <div
                className={styles.cfgTemplateLine}
                style={{ width: "45%" }}
              />
              <div className={styles.cfgTemplateBlock} />
            </div>
          </div>
        </div>
        <span className={styles.cfgCenterLabel}>Smart Template</span>
      </div>

      {/* Right: Campaign structure tree */}
      <div className={styles.cfgTree}>
        {/* Campaign node */}
        <div className={styles.cfgTreeNode} data-level="campaign">
          <div className={styles.cfgTreeIcon}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h18v18H3z" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <span>Campaign</span>
        </div>

        {/* Ad Set rows */}
        {[1, 2, 3].map((n) => (
          <div key={n} className={styles.cfgTreeRow} data-row={n}>
            <div className={styles.cfgTreeNode} data-level="adset">
              <div className={styles.cfgTreeIcon}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span>Ad Set {n}</span>
            </div>
            <div className={styles.cfgTreeNode} data-level="ad">
              <div className={styles.cfgTreeIcon}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span>Ad</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LaunchVisual() {
  return (
    <div className={styles.pipelineDiagram}>
      {/* Row 1: Google Drive */}
      <div className={styles.pipelineNode} data-row="1">
        <div className={styles.pipelineNodeInner}>
          <div className={styles.pipelineNodeIcon}>
            <Image
              src={googleDriveIcon}
              alt="Google Drive"
              width={24}
              height={24}
            />
          </div>
          <span className={styles.pipelineNodeLabel}>Google Drive</span>
        </div>
      </div>

      <div className={styles.pipelineConnector} />

      {/* Row 2: Scalemate */}
      <div className={styles.pipelineNode} data-row="2">
        <div className={styles.pipelineNodeInner} data-brand="scalemate">
          <Logo className={styles.pipelineNodeLogo} />
        </div>
      </div>

      <div className={styles.pipelineConnector} />

      {/* Row 3: Smart Template */}
      <div className={styles.pipelineNode} data-row="3">
        <div className={styles.pipelineNodeInner} data-brand="template">
          <div className={styles.pipelineTemplatePreview}>
            <div
              className={styles.pipelineTemplateLine}
              style={{ width: "55%" }}
            />
            <div
              className={styles.pipelineTemplateLine}
              style={{ width: "75%" }}
            />
            <div
              className={styles.pipelineTemplateLine}
              style={{ width: "40%" }}
            />
            <div className={styles.pipelineTemplateBlock} />
          </div>
          <span className={styles.pipelineNodeLabel}>Smart Template</span>
        </div>
      </div>

      {/* Y-fork connector */}
      <svg
        className={styles.pipelineFork}
        viewBox="0 0 200 40"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 100 0 C 100 20, 45 20, 45 40"
          className={styles.pipelinePath}
        />
        <path
          d="M 100 0 C 100 20, 155 20, 155 40"
          className={styles.pipelinePath}
        />
      </svg>

      {/* Row 4: TikTok + Meta side by side */}
      <div className={styles.pipelineOutputs}>
        <div className={styles.pipelineNode} data-row="4">
          <div className={styles.pipelineNodeInner}>
            <div className={styles.pipelineNodeIcon}>
              <Image src={tiktokIcon} alt="TikTok" width={20} height={20} />
            </div>
            <span className={styles.pipelineNodeLabel}>TikTok Ads</span>
          </div>
        </div>
        <div className={styles.pipelineNode} data-row="4">
          <div className={styles.pipelineNodeInner}>
            <div className={styles.pipelineNodeIcon}>
              <Image src={metaIcon} alt="Meta" width={22} height={22} />
            </div>
            <span className={styles.pipelineNodeLabel}>Meta Ads</span>
          </div>
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
      "Scalemate connects to Google Drive, NextCloud, or other storage and pushes creatives into Meta and TikTok Media Library – with deduplication and filtering built in",
    Visual: SyncVisual,
  },
  {
    number: "02",
    title: "Set Campaign parameters once",
    description:
      "Budget, targeting, placements, naming conventions, ads destribution rules, configured once and saved to smart template",
    Visual: ConfigVisual,
  },
  {
    number: "03",
    title: "Launch all Ads at once",
    description:
      "Bulk ad deployment software that deploys hundreds of ad sets in one action \u2014 the launch ads at scale tool handles the volume, the team handles the decisions",
    Visual: LaunchVisual,
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
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
