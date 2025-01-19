import styles from "./TilesBlock.module.scss"

const TilesBlock = () => {
  const tiles = [
    {
      title: "1 Ad per 1 Ad Set",
      description: "Maximize Campaign efficiency with individual Ad budgets.",
      theme: "peach",
    },
    {
      title: "Launch from Google Drive",
      description:
        "Upload your creatives from Google Drive and launch them in a seconds.",
      theme: "purple",
    },
    {
      title: "Run Ads with Proven Templates",
      description:
        "Turn your best performing strategies into templates and reuse them for new campaigns.",
      theme: "mint",
    },
    {
      title: "Scale on Autopilot",
      description:
        "Smart rules focus on created ads, avoiding unexpected updates.",
      theme: "white",
    },
  ]

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.header}>
        <h2 className={styles.title}>
          Simplify and <span>Scale</span> your Ad Launches
        </h2>
        <p className={styles.description}>
          Store your creatives in one place. Pull data from your creative
          storage and Facebook, TikTok & Snapchat ad libraries to bring it
          together in Scalemate.
        </p>
      </div> */}

      <div className={styles.tilesGrid}>
        {tiles.map((tile, index) => (
          <div key={index} className={`${styles.tile} ${styles[tile.theme]}`}>
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
