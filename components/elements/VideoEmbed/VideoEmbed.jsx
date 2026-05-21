"use client"

import { useState } from "react"
import styles from "./VideoEmbed.module.scss"

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 68 48"
      width="68"
      height="48"
      aria-hidden
      className={styles.playIcon}
    >
      <path
        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
        fill="#F63D68"
      />
      <path d="M27 34V14l18 10z" fill="#fff" />
    </svg>
  )
}

export default function VideoEmbed({
  videoId,
  title,
  thumbnailUrl,
  priority = false,
  className,
}) {
  const maxresPoster =
    thumbnailUrl ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackPoster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const [isPlaying, setIsPlaying] = useState(false)
  const [posterSrc, setPosterSrc] = useState(maxresPoster)
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div className={`${styles.frame}${className ? ` ${className}` : ""}`}>
      {isPlaying ? (
        <iframe
          className={styles.iframe}
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          className={styles.facade}
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <img
            src={posterSrc}
            alt={title}
            width={1280}
            height={720}
            className={styles.poster}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => {
              if (posterSrc !== fallbackPoster) setPosterSrc(fallbackPoster)
            }}
          />
          <span className={styles.playWrap}>
            <PlayIcon />
          </span>
        </button>
      )}
    </div>
  )
}
