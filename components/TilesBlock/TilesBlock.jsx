import styles from "./TilesBlock.module.scss"

const TilesBlock = () => {
  const tiles = [
    {
      title: "1 Ad per 1 Ad Set",
      description: "Maximize Campaign efficiency with individual Ad budgets.",
      bg: "#FFE8D3",
    },
    {
      title: "Launch from Google Drive",
      description:
        "Upload your creatives from Google Drive and launch them in a seconds.",
      bg: "#F0DCFF",
    },
    {
      title: "Run Ads with Proven Templates",
      description:
        "Turn your best performing strategies into templates and reuse them for new campaigns.",
      bg: "#E0F8DE",
    },
    {
      title: "Scale on Autopilot",
      description:
        "Smart rules focus on created ads, avoiding unexpected updates.",
      bg: "#F5F4EE",
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.tilesGrid}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`${styles.tile}`}
            style={{ backgroundColor: tile.bg }}
          >
            <h3 className={styles.tileTitle}>{tile.title}</h3>
            <p className={styles.tileDescription}>{tile.description}</p>
            <div className={styles.tileImage}>
              {/* Image placeholder - you'll need to add actual images */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TilesBlock
