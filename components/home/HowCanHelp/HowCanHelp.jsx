"use client"
import Container from "@/components/shared/Container/Container"

import { useState } from "react"
import Image from "next/image"
import styles from "./HowCanHelp.module.scss"

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
          text: "Spend <b>3x</b> less time on creatives testing and automate asset upload.",
        },
        {
          icon: "ship",
          label: "Lower cost per winner",
          text: "Discover your most cost-effective path to find <b>creative winners.</b>",
        },
        {
          icon: "squares",
          label: "Store creative data",
          text: "Organize all creatives and results in unified <b>creative library.</b>",
        },
        {
          icon: "puzzle",
          label: "Communicate success",
          text: "Auto-generate <b>ad reports,</b> and show results to your lead & team.",
        },
      ],
    },
    // ... other cases remain the same
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
                        src={`/icons/help/${opt.icon}.svg`}
                        alt=""
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
              <Image
                src="/images/we-help.png"
                alt="We help"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HowCanHelp
