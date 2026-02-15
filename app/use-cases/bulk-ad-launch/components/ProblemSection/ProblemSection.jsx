import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import {
  IconRepeat,
  IconAlertTriangle,
  IconUsersGroup,
} from "@tabler/icons-react"
import styles from "./ProblemSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"

const problems = [
  {
    icon: IconRepeat,
    title: "Every Ad Set Is the Same Repetitive Workflow",
    description:
      "Launching ads one by one forces teams to repeat the same sequence across every ad set: pick the creative, match resolutions to placements, set the copy, confirm targeting. Multiply that by languages and concepts, and a single campaign launch turns into days of mechanical clicking.",
    bg: "#E0F8DE",
  },
  {
    icon: IconAlertTriangle,
    title: "The Platform Keeps Breaking at Scale",
    description:
      "Facebook Ads Manager wasn't built for mass ad campaign creation at the scale UA teams operate today. Five concepts multiplied by fifteen languages equals seventy-five combinations — and every single one requires a separate ad set assembled by hand. Manual campaign setup takes hours. Sometimes days.",
    bg: "#F0DCFF",
  },
  {
    icon: IconUsersGroup,
    title: "More Scale = More People? Not How It Should Work",
    description:
      "When campaign volume outgrows a team's capacity, the default answer is hiring. But scaling ads without hiring buyers is entirely possible — when the tooling removes the bottleneck. Without automation, every new campaign adds linear workload. Slow campaign launches become the norm.",
    bg: "#FFE8D3",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Image
        className={styles.bubble}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={700}
        height={700}
      />
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2>
              Why Manual Ad Launches{" "}
              <span className={styles.gradientText}>Don&apos;t Scale</span>
            </h2>
            <p className={styles.subtitle}>
              Every new creative, language, or concept multiplies the manual
              workload exponentially
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {problems.map((problem, index) => (
              <div
                key={index}
                className={styles.card}
                style={{ backgroundColor: problem.bg }}
              >
                <problem.icon size={32} className={styles.cardIcon} />
                <div className={styles.cardContent}>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
