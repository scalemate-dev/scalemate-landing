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
    title: "Every Ad Set Is the Same Repetitive Ad Creation Workflow",
    description:
      "Launching ads one by one means repeating the same sequence per ad set: creative, resolutions, targeting. Multiply by languages — days of clicking. It\u2019s error-prone too — wrong creatives, missing assets, mismatched placements. Volume compounds micro-mistakes into budget waste.",
    bg: "#E0F8DE",
  },
  {
    icon: IconAlertTriangle,
    title: "New Ads Takes a Day — Because the Platform Keeps Breaking",
    description:
      "Facebook Ads Manager wasn\u2019t built for mass ad campaign creation at this scale. Five concepts across fifteen languages means seventy-five combinations — each requiring a separate ad set built by hand. Manual campaign setup takes hours. Sometimes days. The platform lags, crashes mid-upload, or drops assets. Teams need speed, and native tools can\u2019t deliver.",
    bg: "#F0DCFF",
  },
  {
    icon: IconUsersGroup,
    title: "More Scale = More People? That\u2019s Not How It Should Work",
    description:
      "When campaign volume outgrows capacity, the default is hiring — another buyer, another coordinator, same mechanical tasks. But scaling ads without hiring buyers is possible when tooling removes the bottleneck. Without automation, slow campaign launches become the norm.",
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
              Three bottlenecks keep media buyers stuck — repetitive setup,
              platform limitations, and the pressure to hire just to keep up.
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
