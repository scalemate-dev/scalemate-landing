"use client"

import { useEffect, useState, useRef } from "react"
import styles from "./AuditPreview.module.scss"

const RING_R = 38
const RING_C = 2 * Math.PI * RING_R
const GAUGE_MAX = 80
const TOTAL_HOURS = 50
const GAUGE_FRACTION = Math.min(TOTAL_HOURS / GAUGE_MAX, 1)
const GAUGE_OFFSET = RING_C * (1 - GAUGE_FRACTION)

export default function AuditPreview() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const vis = visible ? styles.visible : ""

  return (
    <div ref={ref} className={`${styles.preview} ${vis}`}>
      {/* Top bar with personalization badge */}
      <div className={styles.topBar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.topBarLabel}>Preview</span>
      </div>

      <div className={styles.body}>
        {/* Left / Top: Ring gauge */}
        <div className={`${styles.gaugeCol} ${vis}`}>
          <span className={styles.gaugeLabel}>MANUAL ROUTINE LOAD</span>
          <div className={styles.gaugeWrap}>
            <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
              <defs>
                <linearGradient
                  id="previewGaugeGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#dc4a3a" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r={RING_R}
                className={styles.gaugeTrack}
              />
              <circle
                cx="50"
                cy="50"
                r={RING_R}
                className={`${styles.gaugeFill} ${visible ? styles.gaugeAnimate : ""}`}
                style={{
                  "--rc": RING_C,
                  "--ro": GAUGE_OFFSET,
                }}
              />
            </svg>
            <div className={styles.gaugeCenter}>
              <span
                className={`${styles.gaugeVal} ${visible ? styles.gaugeValAnim : ""}`}
              >
                50.0
              </span>
              <span className={styles.gaugeUnit}>hrs / mo</span>
              <span className={styles.gaugeNote}>per buyer</span>
            </div>
          </div>
        </div>

        {/* Right / Bottom: metrics */}
        <div className={styles.metricsCol}>
          {/* Impact cards */}
          <div className={`${styles.impactRow} ${vis}`}>
            <div className={`${styles.impactCard} ${styles.impactGreen}`}>
              <span className={styles.impactVal}>82%</span>
              <span className={styles.impactLbl}>automatable</span>
            </div>
            <div className={`${styles.impactCard} ${styles.impactRed}`}>
              <span className={styles.impactVal}>
                $2,250<small>/mo</small>
              </span>
              <span className={styles.impactLbl}>manual cost per buyer</span>
            </div>
          </div>

          {/* Mini breakdown */}
          <div className={`${styles.breakdownMini} ${vis}`}>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownIcon}>🚀</span>
              <span className={styles.breakdownName}>Creative Uploading</span>
              <span className={styles.breakdownHrs}>12.2 hrs</span>
            </div>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownIcon}>⚙️</span>
              <span className={styles.breakdownName}>Launching Ads</span>
              <span className={styles.breakdownHrs}>24.3 hrs</span>
            </div>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownIcon}>📈</span>
              <span className={styles.breakdownName}>Scaling Winners</span>
              <span className={styles.breakdownHrs}>7.8 hrs</span>
            </div>
            <div className={styles.breakdownRow}>
              <span className={styles.breakdownIcon}>📂</span>
              <span className={styles.breakdownName}>Naming & Data</span>
              <span className={styles.breakdownHrs}>5.7 hrs</span>
            </div>
          </div>

          {/* Mini comparison */}
          <div className={`${styles.comparisonMini} ${vis}`}>
            <div className={styles.compRow}>
              <span />
              <span className={styles.compHdr}>Manual</span>
              <span className={styles.compHdr}>Scalemate</span>
            </div>
            <div className={styles.compRow}>
              <span>Launch</span>
              <span className={styles.compManual}>$1,094</span>
              <span className={styles.compAuto}>$100</span>
            </div>
            <div className={styles.compRow}>
              <span>Scale</span>
              <span className={styles.compManual}>$351</span>
              <span className={styles.compAuto}>$20</span>
            </div>
            <div className={`${styles.compRow} ${styles.compTotal}`}>
              <span>Total</span>
              <span className={styles.compManual}>$2,250</span>
              <span className={styles.compAuto}>$120</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
