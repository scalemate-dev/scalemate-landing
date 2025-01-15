"use client"
import Container from "@/components/shared/Container/Container"

import { useState } from "react"
import Image from "next/image"
import styles from "./HowCanHelp.module.scss"
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
import weHelpImage from "@/assets/images/we-help.png"

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

const HowCanHelp = () => {
  const [active, setActive] = useState(0)

  const cases = [
    {
      id: 0,
      position: "User Acquisition Manager",
      description: "Start doing what your brain capacity deserves.",
      options: [
        {
          icon: "clock",
          label: "Erase testing routine",
          text: "Spend <b>3x</b> less time on creatives testing and automate asset upload. ",
        },
        {
          icon: "ship",
          label: "Lower cost per winner",
          text: "Discover your most cost-effective path to find <b>creative winners.</b>",
          // label: 'Test on all platforms at once',
          // text: 'Use a <b>single “launch” button</b> for your Facebook, Tiktok & custom campaigns.'
        },
        {
          icon: "squares",
          label: "Store creative data",
          text: "Organize all creatives and results in unified <b>creative library.</b>",
        },
        {
          icon: "puzzle",
          label: "Communicate success",
          text: "Auto-generate <b>ad reports,</b> and show results to your lead & team. ",
        },
      ],
    },
    {
      id: 1,
      position: "Marketing Executive",
      description: "Maximize ROAS and unblock your productivity chakra.",
      options: [
        {
          icon: "circles",
          label: "Maximize ROAS",
          text: "Raise your <b>creative winners</b> and cut testing costs in the quest to find them.",
        },
        {
          icon: "database",
          label: "Unite core teams",
          text: "Enhance <b>collaboration</b> between creative and user acquisition teams.",
          // label: 'Maximize ROI',
          // text: 'Own a <b>unified creative library</b> and harmonize your ad testing process.'
        },
        {
          icon: "bar-chart",
          label: "Prevent budget leakage",
          text: "Never launch potentially non-performing creatives and save <b>15%.</b>",
        },

        {
          icon: "arrows",
          // label: 'Be on the same page',
          label: "Optimize team performance",
          text: "Reduce your team routine workload by <b>3 times</b> and keep them focused on high-value tasks.",
        },
      ],
    },
    {
      id: 2,
      position: "Creative Designer",
      description: "Enter the creative flow with data - backed ideas in mind.",
      options: [
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

  const activeItem = cases.find((item) => item.id === active)

  return (
    <div className={styles.help}>
      <Container className={styles.container}>
        <h2 className={styles.title}>
          We help busy marketing people get things done on time
        </h2>
        <div className={styles.helpWrapper}>
          <div className={styles.helpNavigation}>
            {cases.map((item) => (
              <h3
                key={item.id}
                className={`${styles.helpNavigationItem} ${
                  active === item.id ? styles.active : ""
                }`}
                onClick={() => setActive(item.id)}
              >
                {item.position}
              </h3>
            ))}
          </div>
          <div className={styles.helpList}>
            <div className={styles.helpCard}>
              <div className={styles.helpTitle}>{activeItem.description}</div>
              <div className={styles.helpDescrWrapper}>
                {activeItem.options.map((opt, i) => (
                  <div key={i} className={styles.helpDescr}>
                    <div className={styles.helpDescrHeading}>
                      <Image
                        src={iconMap[opt.icon]}
                        alt={opt.label}
                        width={24}
                        height={24}
                      />
                      {opt.label}
                    </div>
                    <div
                      className={styles.helpDescrText}
                      dangerouslySetInnerHTML={{ __html: opt.text }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.helpImage}>
              <Image src={weHelpImage} alt="We help" width={500} height={500} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HowCanHelp
