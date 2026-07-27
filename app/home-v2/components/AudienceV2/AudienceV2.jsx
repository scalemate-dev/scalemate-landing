import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import clockIcon from "@/assets/icons/help/clock.svg"
import shipIcon from "@/assets/icons/help/ship.svg"
import squaresIcon from "@/assets/icons/help/squares.svg"
import puzzleIcon from "@/assets/icons/help/puzzle.svg"
import circlesIcon from "@/assets/icons/help/circles.svg"
import databaseIcon from "@/assets/icons/help/database.svg"
import barChartIcon from "@/assets/icons/help/bar-chart.svg"
import arrowsIcon from "@/assets/icons/help/arrows.svg"
import lightIcon from "@/assets/icons/help/light.svg"
import numbersChartIcon from "@/assets/icons/help/numbers-chart.svg"
import visualsIcon from "@/assets/icons/help/visuals.svg"
import pcIcon from "@/assets/icons/help/pc.svg"
import styles from "./AudienceV2.module.scss"

const iconMap = {
  clock: clockIcon,
  ship: shipIcon,
  squares: squaresIcon,
  puzzle: puzzleIcon,
  circles: circlesIcon,
  database: databaseIcon,
  "bar-chart": barChartIcon,
  arrows: arrowsIcon,
  light: lightIcon,
  "numbers-chart": numbersChartIcon,
  visuals: visualsIcon,
  pc: pcIcon,
}

const ROLES = [
  {
    role: "User Acquisition Manager",
    tagline: "Start doing what your brain capacity deserves.",
    items: [
      {
        icon: "clock",
        label: "Launch Ads in bulk",
        text: "Spend <b>3x</b> less time on campaign launches and automate asset upload.",
      },
      {
        icon: "ship",
        label: "No hussle creatives uploads",
        text: "Seemles delivery your assets to the ad platforms in a <b>single click.</b>",
      },
      {
        icon: "squares",
        label: "Automated Creative Tests",
        text: "Set simple rules to test new creatives, and automatically identify <b>winning ads.</b>",
      },
      {
        icon: "puzzle",
        label: "Streamline your workflow",
        text: "Scalemate automates <b>80% of campaign launches</b> and ad rotations.",
      },
    ],
  },
  {
    role: "Marketing Executive",
    tagline: "Maximize ROAS and unblock your productivity chakra.",
    items: [
      {
        icon: "circles",
        label: "Maximize ROAS",
        text: "Raise your <b>creative winners</b> and cut testing costs in the quest to find them.",
      },
      {
        icon: "database",
        label: "Unite core teams",
        text: "Enhance <b>collaboration</b> between creative and user acquisition teams.",
      },
      {
        icon: "bar-chart",
        label: "Prevent budget leakage",
        text: "Never launch potentially non-performing creatives and save <b>15%.</b>",
      },
      {
        icon: "arrows",
        label: "Optimize team performance",
        text: "Reduce your team routine workload by <b>3 times</b> and keep them focused on high-value tasks.",
      },
    ],
  },
  {
    role: "Creative Designer",
    tagline: "Enter the creative flow with data-backed ideas in mind.",
    items: [
      {
        icon: "light",
        label: "Always know best",
        text: "Combine your skill with data insights to <b>design what works</b> offhand.",
      },
      {
        icon: "numbers-chart",
        label: "Reduce work with numbers",
        text: "Receive <b>simplified reports</b> with explainers and analyze them in minutes.",
      },
      {
        icon: "visuals",
        label: "Organize your visuals",
        text: "Upload creatives to <b>the unified library</b> in 1 click and keep them in order.",
      },
      {
        icon: "pc",
        label: "Be on the same page",
        text: "Align with UA managers and <b>sync your results</b> in a single intuitive dashboard.",
      },
    ],
  },
]

export default function AudienceV2() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Who it's for</span>
          <h2 className={styles.title}>
            We help busy marketing people get things done on time.
          </h2>
        </header>

        <div className={styles.columns}>
          {ROLES.map((role) => (
            <div key={role.role} className={styles.col}>
              <span className={styles.dash} />
              <h3 className={styles.colRole}>{role.role}</h3>
              <p className={styles.colTagline}>{role.tagline}</p>

              <ul className={styles.items}>
                {role.items.map((item) => (
                  <li key={item.label} className={styles.item}>
                    <div className={styles.itemHeading}>
                      <Image
                        src={iconMap[item.icon]}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className={styles.itemIcon}
                      />
                      <span className={styles.itemLabel}>{item.label}</span>
                    </div>
                    <p
                      className={styles.itemText}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
