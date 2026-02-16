"use client"
import { useState } from "react"
import Container from "@/components/elements/Container/Container"
import {
  IconCloudDownload,
  IconSettings,
  IconRocket,
  IconCheck,
  IconFolderOpen,
  IconFilter,
  IconCopy,
  IconTargetArrow,
  IconLayoutGrid,
  IconBolt,
  IconStack2,
  IconPlayerPlay,
} from "@tabler/icons-react"
import cn from "classnames"
import styles from "./HowItWorksSection.module.scss"

const steps = [
  {
    id: "sync",
    number: "Step 1",
    title: "Sync Creatives From Cloud Storage",
    description:
      "Scalemate connects to Google Drive, NextCloud, or other storage and pushes creatives into Meta\u2019s Media Library.",
    detail:
      "Deduplication ensures only new files transfer. Filtering rules control which assets sync.",
    icon: IconCloudDownload,
  },
  {
    id: "configure",
    number: "Step 2",
    title: "Set Campaign Parameters Once",
    description:
      "Budget, targeting, placements, naming conventions \u2014 configured once, applied across every ad set.",
    detail:
      "For one-creative-per-ad-set tracking, custom structural rules are supported.",
    icon: IconSettings,
  },
  {
    id: "launch",
    number: "Step 3",
    title: "Launch All Ads at Once",
    description:
      "Smart Launches deploys hundreds of ad sets in one action \u2014 true bulk ad deployment software that takes you from sync to live campaigns in minutes.",
    detail:
      "The launch ads at scale tool handles the volume; the team handles the decisions.",
    icon: IconRocket,
  },
]

function StepScreen({ stepId, isActive }) {
  if (stepId === "sync") {
    return (
      <div className={cn(styles.screen, { [styles.active]: isActive })}>
        <div className={styles.screenWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.windowTitle}>Cloud Sync</span>
            <div className={styles.windowActions} />
          </div>
          <div className={styles.windowContent}>
            <div className={styles.syncScreen}>
              <div className={styles.syncSource}>
                <div className={styles.syncSourceHeader}>
                  <IconFolderOpen size={18} />
                  <span>Google Drive</span>
                </div>
                <div className={styles.fileList}>
                  {["concept_A_en.mp4", "concept_A_de.mp4", "concept_B_en.png", "concept_B_fr.png", "concept_C_en.mp4", "concept_C_es.png"].map(
                    (file, i) => (
                      <div key={i} className={styles.fileRow}>
                        <IconCheck size={14} className={styles.fileCheck} />
                        <span>{file}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={styles.syncArrow}>
                <div className={styles.syncArrowLine} />
                <div className={styles.syncArrowIcon}>&#8594;</div>
                <div className={styles.syncArrowLine} />
              </div>
              <div className={styles.syncDest}>
                <div className={styles.syncDestHeader}>
                  <IconFilter size={18} />
                  <span>Meta Media Library</span>
                </div>
                <div className={styles.syncStatus}>
                  <div className={styles.syncBadge}>
                    <IconCheck size={12} />
                    Deduplication active
                  </div>
                  <div className={styles.syncBadge}>
                    <IconCheck size={12} />
                    6 new files synced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (stepId === "configure") {
    return (
      <div className={cn(styles.screen, { [styles.active]: isActive })}>
        <div className={styles.screenWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.windowDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.windowTitle}>Campaign Setup</span>
            <div className={styles.windowActions} />
          </div>
          <div className={styles.windowContent}>
            <div className={styles.configScreen}>
              <div className={styles.configRow}>
                <span className={styles.configLabel}>Budget</span>
                <span className={styles.configValue}>$50 / day per ad set</span>
              </div>
              <div className={styles.configRow}>
                <span className={styles.configLabel}>Targeting</span>
                <span className={styles.configValue}>
                  <IconTargetArrow size={14} />
                  Lookalike 1% — US, DE, UK
                </span>
              </div>
              <div className={styles.configRow}>
                <span className={styles.configLabel}>Placements</span>
                <span className={styles.configValue}>
                  <IconLayoutGrid size={14} />
                  Feed, Reels, Stories
                </span>
              </div>
              <div className={styles.configRow}>
                <span className={styles.configLabel}>Structure</span>
                <span className={styles.configValue}>
                  <IconCopy size={14} />
                  1 ad per ad set
                </span>
              </div>
              <div className={styles.configRow}>
                <span className={styles.configLabel}>Naming</span>
                <span className={styles.configValue}>
                  {"{concept}_{lang}_{date}"}
                </span>
              </div>
              <div className={styles.configApply}>
                <IconBolt size={16} />
                Apply to all 75 ad sets
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(styles.screen, { [styles.active]: isActive })}>
      <div className={styles.screenWindow}>
        <div className={styles.windowHeader}>
          <div className={styles.windowDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <span className={styles.windowTitle}>Smart Launch</span>
          <div className={styles.windowActions} />
        </div>
        <div className={styles.windowContent}>
          <div className={styles.launchScreen}>
            <div className={styles.launchHeader}>
              <IconStack2 size={20} />
              <span>75 ad sets ready</span>
            </div>
            <div className={styles.launchProgress}>
              <div className={styles.launchBar}>
                <div className={styles.launchFill} />
              </div>
              <span className={styles.launchPercent}>100%</span>
            </div>
            <div className={styles.launchList}>
              {["concept_A_en", "concept_A_de", "concept_B_en", "concept_B_fr"].map(
                (name, i) => (
                  <div key={i} className={styles.launchItem}>
                    <IconPlayerPlay size={14} />
                    <span>{name}</span>
                    <span className={styles.launchLive}>Live</span>
                  </div>
                )
              )}
              <div className={styles.launchMore}>+71 more ad sets launched</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className={styles.howItWorks}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>How the Bulk Ad Launch Tool Works</h2>
          <p>
            Three steps replace the manual pipeline — from cloud storage to
            live campaigns across Meta.
          </p>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(styles.stepCard, {
                  [styles.active]: index === activeStep,
                })}
                onClick={() => setActiveStep(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setActiveStep(index)
                  }
                }}
              >
                <div className={styles.stepHeader}>
                  <div className={styles.stepIcon}>
                    <step.icon size={22} />
                  </div>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {index === activeStep && (
                  <p className={styles.stepDetail}>{step.detail}</p>
                )}
              </div>
            ))}
          </div>

          <div className={styles.screensColumn}>
            <div className={styles.screensSticky}>
              {steps.map((step, index) => (
                <StepScreen
                  key={step.id}
                  stepId={step.id}
                  isActive={index === activeStep}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
