import styles from "./TilesBlock.module.scss"
import Image from "next/image"
import automateStrategy from "@/assets/images/launch/automate-strategy.png"
import launchFromDrive from "@/assets/images/launch/launch-from-gdrive.png"
import scaleOnAutopilot from "@/assets/images/launch/autopilot.png"
import winnerTags from "@/assets/images/launch/winner-tags.png"

const DEFAULT_TILES = [
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
const TilesBlock = ({ tiles = DEFAULT_TILES }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tilesGrid}>
        {tiles.map((tile, index) => (
          <Tile {...tile} key={index} />
        ))}
      </div>
    </div>
  )
}

export const Tile = (props) => {
  return (
    <div className={styles.tile} style={{ backgroundColor: props.bg }}>
      <h3 className={styles.tileTitle}>{props.title}</h3>
      <div className={styles.tileContent}>
        <p className={styles.tileDescription}>{props.description}</p>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          className={styles.tileImage}
          width={props.image.width}
        />
      </div>
    </div>
  )
}

export default TilesBlock
