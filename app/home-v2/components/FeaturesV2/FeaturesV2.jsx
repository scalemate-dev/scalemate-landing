import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import { RuleEngine } from "@/app/features/automation-rules/components/HeroSection/HeroSection"
import { PipelineFlow } from "@/app/features/bulk-launch/components/HeroSection/HeroSection"
import { SyncVisual } from "@/app/use-cases/_data/bulk-ad-launch/HowItWorksVisuals"
import AgentPanel from "./AgentPanel"
import styles from "./FeaturesV2.module.scss"

const FEATURES = [
  {
    eyebrow: "Smart Launches",
    title: "Easy launch to Win",
    description: (
      <>
        Run multiple ads with ease using smart launches.
        <br />
        <br />
        With Scalemate, launching ads is as simple as a click. No hassle, just
        results.
      </>
    ),
    Visual: PipelineFlow,
    alt: "Scalemate bulk launch pipeline",
    href: "/use-cases/bulk-ad-launch",
    linkLabel: "See bulk launch in action",
  },
  {
    eyebrow: "Rules",
    title: "Scale on Autopilot",
    description: (
      <>
        Optimize ad performance effortlessly.
        <br />
        <br />
        Automate scaling, pausing, and bid adjustments to maximize ROAS and
        reduce manual work.
      </>
    ),
    Visual: RuleEngine,
    alt: "Scalemate automation rules engine",
    href: "/use-cases/ad-campaign-automation-rules",
    linkLabel: "Read the rules playbook",
  },
  {
    eyebrow: "Cloud Sync",
    title: "One touch assets upload",
    description: (
      <>
        Forget about manual drag & drop routine — upload files in bulk via
        cloud sync.
        <br />
        <br />
        Transfer videos & images from cloud storage to advertisement platform
        with zero effort on your side.
      </>
    ),
    Visual: SyncVisual,
    alt: "Scalemate cloud sync flow diagram",
    href: "/use-cases/automated-creative-upload-meta",
    linkLabel: "See cloud sync in action",
  },
  {
    eyebrow: "AI Agent",
    title: "Plug AI Agents Into Your Ops",
    description: (
      <>
        From question to action, in one message.
        <br />
        <br />
        AI Agent that reads your data, finds patterns, and acts on your
        campaigns. Use it in chat, or trigger it from Slack, your BI, or your
        own automation stack.
      </>
    ),
    Visual: AgentPanel,
    alt: "Scalemate AI agent chat with Slack and API triggers",
    href: "/ai-assistant",
    linkLabel: "Meet the AI Assistant",
  },
]

export default function FeaturesV2() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.steps}>
          {FEATURES.map((f, idx) => (
            <article
              key={f.title}
              className={`${styles.step} ${idx % 2 !== 0 ? styles.stepReversed : ""}`}
              data-index={String(idx + 1).padStart(2, "0")}
            >
              <div className={styles.stepInfo}>
                <span className={styles.stepEyebrow}>{f.eyebrow}</span>
                <h3 className={styles.stepTitle}>{f.title}</h3>
                <p className={styles.stepDesc}>{f.description}</p>
                {f.href && (
                  <Link href={f.href} className={styles.stepLink}>
                    {f.linkLabel}
                    <span className={styles.stepLinkArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                )}
              </div>
              <div className={styles.stepVisual}>
                <f.Visual />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
