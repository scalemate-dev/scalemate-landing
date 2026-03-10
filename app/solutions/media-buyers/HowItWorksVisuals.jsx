import Image from "next/image"
import Logo from "@/components/elements/Logo"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"
import styles from "@/app/use-cases/_components/HowItWorksSection/HowItWorksVisuals.module.scss"

/* ───────────────────────────────────────
   Step 1 — Sync Creatives from Cloud Storage
   Google Drive → Scalemate → Meta / TikTok
   ─────────────────────────────────────── */

const fileTypes = [
  { name: "hero_v2.mp4", type: "video" },
  { name: "banner_en.png", type: "image" },
  { name: "story_de.jpg", type: "image" },
  { name: "promo_fr.mp4", type: "video" },
  { name: "feed_square.png", type: "image" },
]

export function SyncVisual() {
  return (
    <div className={styles.flowDiagram} aria-hidden="true">
      <svg
        className={styles.flowLines}
        viewBox="0 0 480 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 90 100 C 150 100, 160 160, 220 160"
          className={styles.flowPath}
        />
        <path
          d="M 280 160 C 340 160, 340 90, 400 90"
          className={styles.flowPath}
        />
        <path
          d="M 280 160 C 340 160, 340 235, 400 235"
          className={styles.flowPath}
        />

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

        <circle r="3" className={styles.flowDot}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="1.2s"
            path="M 280 160 C 340 160, 340 90, 400 90"
          />
        </circle>

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
                {f.type === "video" ? "\u25b6" : "\u25fb"}
              </span>
              <span>{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.flowNode} ${styles.flowNodeScalemate}`}>
        <div className={styles.flowNodeInner}>
          <Logo className={styles.flowNodeLogo} />
        </div>
      </div>

      <div className={`${styles.flowNode} ${styles.flowNodeTiktok}`}>
        <div className={styles.flowNodeInner}>
          <div className={styles.flowNodeIcon}>
            <Image src={tiktokIcon} alt="TikTok" width={22} height={22} />
          </div>
          <span className={styles.flowNodeLabel}>TikTok Ads</span>
        </div>
      </div>

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

/* ───────────────────────────────────────
   Step 2 — Bulk Launch: Config → Hundreds of Ad Sets
   Parameters → Smart Template → Campaign Tree
   ─────────────────────────────────────── */

const configParams = [
  {
    label: "Budget",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "Placements",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export function BulkLaunchVisual() {
  return (
    <div className={styles.cfgDiagram} aria-hidden="true">
      <svg
        className={styles.cfgLines}
        viewBox="0 0 520 360"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M 128 75 C 175 75, 200 145, 240 150" className={styles.cfgPath} />
        <path d="M 128 130 C 180 130, 205 150, 240 158" className={styles.cfgPath} />
        <path d="M 128 210 C 180 210, 205 175, 240 172" className={styles.cfgPath} />
        <path d="M 128 290 C 175 290, 200 190, 240 185" className={styles.cfgPath} />

        <path d="M 305 165 C 355 165, 360 110, 395 110" className={styles.cfgPath} />

        <circle cx="128" cy="75" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="130" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="210" r="3" className={styles.cfgDotStatic} />
        <circle cx="128" cy="290" r="3" className={styles.cfgDotStatic} />

        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion dur="2s" repeatCount="indefinite" path="M 128 75 C 175 75, 200 145, 240 150" />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.5s" path="M 128 130 C 180 130, 205 150, 240 158" />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="1s" path="M 128 210 C 180 210, 205 175, 240 172" />
        </circle>
        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.3s" path="M 128 290 C 175 290, 200 190, 240 185" />
        </circle>

        <circle r="3" className={styles.cfgDotAnimated}>
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s" path="M 305 165 C 355 165, 360 110, 395 110" />
        </circle>
        <circle r="2.5" className={styles.cfgDotAnimated} style={{ opacity: 0.45 }}>
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="2.4s" path="M 305 165 C 355 165, 360 110, 395 110" />
        </circle>
      </svg>

      <div className={styles.cfgParams}>
        {configParams.map((p, i) => (
          <div key={i} className={styles.cfgPill}>
            <div className={styles.cfgPillIcon}>{p.icon}</div>
            <span className={styles.cfgPillLabel}>{p.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.cfgCenter}>
        <div className={styles.cfgTemplateStack}>
          <div className={styles.cfgTemplateCard} data-layer="3" />
          <div className={styles.cfgTemplateCard} data-layer="2" />
          <div className={styles.cfgTemplateCard} data-layer="1">
            <div className={styles.cfgTemplateLines}>
              <div className={styles.cfgTemplateLine} style={{ width: "60%" }} />
              <div className={styles.cfgTemplateLine} style={{ width: "80%" }} />
              <div className={styles.cfgTemplateLine} style={{ width: "45%" }} />
              <div className={styles.cfgTemplateBlock} />
            </div>
          </div>
        </div>
        <span className={styles.cfgCenterLabel}>Smart Template</span>
      </div>

      <div className={styles.cfgTree}>
        <div className={styles.cfgTreeNode} data-level="campaign">
          <div className={styles.cfgTreeIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3z" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <span>Campaign</span>
        </div>

        {[1, 2, 3].map((n) => (
          <div key={n} className={styles.cfgTreeRow} data-row={n}>
            <div className={styles.cfgTreeNode} data-level="adset">
              <div className={styles.cfgTreeIcon}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span>Ad Set {n}</span>
            </div>
            <div className={styles.cfgTreeNode} data-level="ad">
              <div className={styles.cfgTreeIcon}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

/* ───────────────────────────────────────
   Step 3 — Automation Rules: Conditions → Actions 24/7
   IF condition → Evaluate → Pause / Scale / Alert
   ─────────────────────────────────────── */

const actions = [
  {
    label: "Auto-Pause",
    color: "pause",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
      </svg>
    ),
  },
  {
    label: "Auto-Scale",
    color: "scale",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Alert",
    color: "alert",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export function RulesVisual() {
  return (
    <div className={styles.actionDiagram} aria-hidden="true">
      <svg
        className={styles.actionLines}
        viewBox="0 0 480 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Condition → Decision */}
        <path d="M 93 160 C 145 160, 185 155, 218 151" className={styles.rulePath} />

        {/* Decision → Actions */}
        <path d="M 262 151 C 300 151, 326 106, 351 106" className={styles.rulePath} />
        <path d="M 262 151 C 300 151, 326 160, 351 160" className={styles.rulePath} />
        <path d="M 262 151 C 300 151, 326 214, 351 214" className={styles.rulePath} />

        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 93 160 C 145 160, 185 155, 218 151" />
        </circle>

        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.1s" repeatCount="indefinite" path="M 262 151 C 300 151, 326 106, 351 106" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 262 151 C 300 151, 326 160, 351 160" />
        </circle>
        <circle r="3" className={styles.ruleDot}>
          <animateMotion dur="1.7s" repeatCount="indefinite" path="M 262 151 C 300 151, 326 214, 351 214" />
        </circle>
      </svg>

      {/* Left: IF condition */}
      <div className={styles.actionCondition}>
        <div className={styles.actionConditionInner}>
          <span className={styles.actionConditionIf}>IF</span>
          <div className={styles.actionConditionRules}>
            <span>ROAS &lt; 1.5</span>
            <span>CPI &gt; target</span>
            <span>Spend &gt; $500</span>
          </div>
        </div>
      </div>

      {/* Center: Decision */}
      <div className={styles.actionDecision}>
        <div className={styles.actionDecisionBadge}>
          <Logo className={styles.actionDecisionLogo} />
        </div>
        <div className={styles.actionDecisionInner}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
          </svg>
        </div>
        <span className={styles.actionDecisionLabel}>Evaluate</span>
      </div>

      {/* Right: Action cards */}
      <div className={styles.actionCards}>
        {actions.map((a, i) => (
          <div key={i} className={styles.actionCard} data-color={a.color}>
            <div className={styles.actionCardIcon}>{a.icon}</div>
            <span className={styles.actionCardLabel}>{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
