import Container from "@/components/elements/Container/Container"
import VideoEmbed from "@/components/elements/VideoEmbed/VideoEmbed"
import FloatingPaths from "../HeroV2/FloatingPaths"
import styles from "./VideoTourV2.module.scss"

const VIDEO_ID = "7wy0HxU0dJw"

export default function VideoTourV2() {
  return (
    <section className={styles.section}>
      <FloatingPaths />

      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Product tour</span>
          <h2 className={styles.title}>
            See Scalemate{" "}
            <em className={styles.titleAccent}>in action.</em>
          </h2>
        </header>

        <div className={styles.videoWrap}>
          <div className={styles.videoGlow} aria-hidden="true" />
          <VideoEmbed
            videoId={VIDEO_ID}
            title="Scalemate product tour"
            className={styles.video}
          />
        </div>
      </Container>
    </section>
  )
}
