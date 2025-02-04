import styles from "./TilesBlock.module.scss"
import Image from "next/image"
import automateStrategy from "@/assets/images/launch/automate-strategy.png"
import launchFromDrive from "@/assets/images/launch/launch-from-gdrive.png"
import scaleOnAutopilot from "@/assets/images/launch/autopilot.png"
import winnerTags from "@/assets/images/launch/winner-tags.png"

const TilesBlock = () => {
  const tiles = [
    {
      title: "Automate your strategy",
      description:
        "Turn your best strategies into templates and use them for new campaigns.",
      bg: "#FFE8D3",
      image: {
        src: automateStrategy,
        alt: "Automate your strategy",
        width: 230,
      },
    },
    {
      title: "Launch from Google Drive",
      description:
        "Upload your creatives from Google Drive and launch them in a seconds.",
      bg: "#F0DCFF",
      image: {
        src: launchFromDrive,
        alt: "Launch from Google Drive",
        width: 250,
      },
    },
    {
      title: "Scale on Autopilot",
      description:
        "Smart rules focus on created ads, avoiding unexpected updates.",
      bg: "#E0F8DE",
      image: {
        src: scaleOnAutopilot,
        alt: "Scale on Autopilot",
        width: 200,
      },
    },
    {
      title: "Find winning ads",
      description: "Automatically label ads based on performance",
      bg: "#F5F4EE",
      image: {
        src: winnerTags,
        alt: "Find winning ads",
        width: 233,
      },
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.tilesGrid}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={styles.tile}
            style={{ backgroundColor: tile.bg }}
          >
            <div className={styles.tileContent}>
              <h3 className={styles.tileTitle}>{tile.title}</h3>
              <p className={styles.tileDescription}>{tile.description}</p>
            </div>
            <div className={styles.tileImage}>
              <Image
                src={tile.image.src}
                alt={tile.image.alt}
                width={tile.image.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TilesBlock
