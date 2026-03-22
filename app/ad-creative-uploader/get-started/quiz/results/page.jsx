"use client"

import { useEffect, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { requestMagicLink } from "../../../../../lib/api/quizApi"
import styles from "./results.module.scss"

const HOURLY_RATE = 45 // €/hr avg media buyer wage

// Calculate all metrics from ads per week
function calcMetrics(adsPerWeek) {
  const monthly = adsPerWeek * 4
  const winners = Math.round(monthly * 0.2) // 20% success rate

  const uploading = (monthly * 2) / 60 // 2 min per ad
  const launching = (monthly * 4) / 60 // 4 min per ad
  const pushingBAU = (winners * 4) / 60 // 4 min per winner
  const naming = (monthly * 1.35) / 60 // ~1.35 min per ad

  const totalHours = uploading + launching + pushingBAU + naming
  const totalCost = totalHours * HOURLY_RATE

  // Audit table costs (proportional to time breakdown)
  const uploadCost = uploading * HOURLY_RATE
  const launchCost = launching * HOURLY_RATE
  const scaleCost = pushingBAU * HOURLY_RATE
  const namingCost = naming * HOURLY_RATE

  // Scalemate time: 0.5 min per ad for upload, launch, and winners. Naming = 0
  const smUploadTime = (monthly * 0.5) / 60
  const smLaunchTime = (monthly * 0.5) / 60
  const smScaleTime = (winners * 0.5) / 60
  const smTotalHours = smUploadTime + smLaunchTime + smScaleTime

  // Automation potential: % of manual time that can be cut
  const automationPotential = Math.round(
    ((totalHours - smTotalHours) / totalHours) * 100,
  )

  // Scalemate costs: €0.50 per ad for launching + scaling winners
  const smLaunchCost = monthly * 0.5
  const smScaleCost = winners * 0.5
  const smTotalCost = smLaunchCost + smScaleCost

  return {
    adsPerWeek,
    monthly,
    winners,
    breakdown: [
      {
        icon: "🚀",
        label: "Creative Uploading",
        formula: `${monthly} ads/mo × 2 min/ea`,
        hours: uploading,
      },
      {
        icon: "⚙️",
        label: "Launching New Ads",
        formula: `${monthly} ads/mo × 4 min/ea`,
        hours: launching,
      },
      {
        icon: "📈",
        label: "Pushing Winners to BAU",
        formula: `${winners} winning ads × 4 min/ea`,
        hours: pushingBAU,
        note: "20% avg. success rate of tested creatives",
      },
      {
        icon: "📂",
        label: "Naming Conventions & Data Integrity",
        formula: `${monthly} ads/mo × 1.35 min/ea`,
        hours: naming,
      },
    ],
    totalHours,
    totalCost,
    uploadCost,
    launchCost,
    scaleCost,
    namingCost,
    smTotalHours,
    automationPotential,
    smLaunchCost,
    smScaleCost,
    smTotalCost,
  }
}

function fmt(n) {
  return n.toFixed(1)
}

function fmtEur(n) {
  return `€${Math.trunc(n).toLocaleString("en-US")}`
}

export default function ResultsPage() {
  const [animateIn, setAnimateIn] = useState(false)
  const [ctaLoading, setCtaLoading] = useState(false)
  const [ctaSent, setCtaSent] = useState(false)
  const [ctaError, setCtaError] = useState("")
  const searchParams = useSearchParams()

  const adsPerWeek = Number(searchParams.get("ads")) || 50
  const m = useMemo(() => calcMetrics(adsPerWeek), [adsPerWeek])

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  async function handleTryFree() {
    const email = sessionStorage.getItem("quiz_email")
    if (!email) {
      setCtaError("No email found. Please retake the quiz.")
      return
    }
    setCtaLoading(true)
    setCtaError("")
    try {
      await requestMagicLink(email)
      setCtaSent(true)
    } catch (err) {
      setCtaError(err.message || "Something went wrong. Please try again.")
    } finally {
      setCtaLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>Scalemate.</div>

        {/* ── Hero: Big Number (no card wrapper) ── */}
        <div className={`${styles.hero} ${animateIn ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            Your Ad Launch Efficiency Audit
          </span>
          <div className={styles.bigNumber}>
            <span className={styles.bigNumberValue}>{fmt(m.totalHours)}</span>
            <span className={styles.bigNumberUnit}>hrs/mo</span>
          </div>
          <p className={styles.heroSub}>
            Time lost to manual launching instead of testing new angles and
            scaling winners. Based on <strong>{adsPerWeek} ads/week</strong>{" "}
            volume.
          </p>
        </div>

        {/* ── Impact Cards (simplified) ── */}
        <div
          className={`${styles.impactRow} ${animateIn ? styles.visible : ""}`}
        >
          <div className={styles.impactCard}>
            <div className={`${styles.impactValue} ${styles.impactGreen}`}>
              {m.automationPotential}%
            </div>
            <div className={styles.impactLabel}>automatable</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactValue}>
              {fmtEur(m.totalCost)}
              <span className={styles.impactPeriod}>/mo</span>
            </div>
            <div className={styles.impactLabel}>manual cost</div>
          </div>
        </div>

        {/* ── Block 3: Breakdown ── */}
        <h3
          className={`${styles.breakdownTitle} ${animateIn ? styles.visible : ""}`}
        >
          How we calculated your {fmt(m.totalHours)} hours
        </h3>
        <div
          className={`${styles.card} ${styles.breakdownCard} ${animateIn ? styles.visible : ""}`}
        >
          <p className={styles.breakdownIntro}>
            We analyzed your workflow based on{" "}
            <strong>{adsPerWeek} weekly new ads</strong>:
          </p>

          <div className={styles.auditLog}>
            {m.breakdown.map((item) => (
              <div key={item.label} className={styles.auditRow}>
                <span className={styles.auditIcon}>{item.icon}</span>
                <div className={styles.auditInfo}>
                  <div className={styles.auditLabel}>{item.label}</div>
                  <div className={styles.auditFormula}>{item.formula}</div>
                  {item.note && (
                    <div className={styles.auditNote}>{item.note}</div>
                  )}
                </div>
                <span className={styles.auditHours}>{fmt(item.hours)} hrs</span>
              </div>
            ))}
          </div>

          <div className={styles.auditTotal}>
            <span>Total Manual Waste:</span>
            <strong>{fmt(m.totalHours)} Hours / Month</strong>
          </div>
        </div>

        {/* ── Block 4: Dark Challenger ── */}
        <div
          className={`${styles.card} ${styles.darkCard} ${animateIn ? styles.visible : ""}`}
        >
          <div className={styles.darkContent}>
            <div className={styles.miniChart}>
              <svg viewBox="0 0 120 60" className={styles.miniChartSvg}>
                <polyline
                  points="10,52 30,49 50,46 70,43 80,45 90,40 100,37 110,34"
                  className={styles.lineManual}
                />
                <polyline
                  points="10,55 25,46 35,42 50,32 60,28 70,20 80,16 90,11 100,7 110,3"
                  className={`${styles.lineScalemate} ${animateIn ? styles.lineAnimate : ""}`}
                />
              </svg>
            </div>
            <div className={styles.darkText}>
              <p>
                You are currently <strong>capping your own growth.</strong>{" "}
                Instead of 500 manual clicks, you could have scripted{" "}
                <strong>5+ fresh creative concepts</strong> and scaled{" "}
                <strong>3 more accounts</strong> this month.
              </p>
            </div>
          </div>
        </div>

        {/* ── Block 5: Audit Log Table ── */}
        <div
          className={`${styles.card} ${styles.tableCard} ${animateIn ? styles.visible : ""}`}
        >
          <div className={styles.tableTitle}>Audit Log</div>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Manual Cost (mo)</th>
                <th>Scalemate</th>
                <th>Efficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Creative Uploading</td>
                <td className={styles.cellManual}>{fmtEur(m.uploadCost)}</td>
                <td className={styles.cellAuto}>€0</td>
                <td className={styles.cellBoost}>Instant</td>
              </tr>
              <tr>
                <td>Launching in Ads Manager</td>
                <td className={styles.cellManual}>{fmtEur(m.launchCost)}</td>
                <td className={styles.cellAuto}>{fmtEur(m.smLaunchCost)}</td>
                <td className={styles.cellBoost}>30x Faster</td>
              </tr>
              <tr>
                <td>Scaling Winning Ads</td>
                <td className={styles.cellManual}>{fmtEur(m.scaleCost)}</td>
                <td className={styles.cellAuto}>{fmtEur(m.smScaleCost)}</td>
                <td className={styles.cellBoost}>30x Faster</td>
              </tr>
              <tr>
                <td>Naming & Data Integrity</td>
                <td className={styles.cellManual}>{fmtEur(m.namingCost)}</td>
                <td className={styles.cellAuto}>€0</td>
                <td className={styles.cellBoost}>Automated</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className={styles.totalRow}>
                <td>Total</td>
                <td className={styles.cellManual}>{fmtEur(m.totalCost)}</td>
                <td className={styles.cellAuto}>{fmtEur(m.smTotalCost)}</td>
                <td className={styles.cellBoost}>98% Effective</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>

      {/* ── Sticky CTA ── */}
      <div className={styles.stickyCta}>
        <div className={styles.stickyCtaInner}>
          {ctaSent ? (
            <span className={styles.ctaMicro}>
              Check your email for a magic link to get started.
            </span>
          ) : (
            <>
              <button
                className={styles.pulseButton}
                onClick={handleTryFree}
                disabled={ctaLoading}
              >
                {ctaLoading ? "Sending..." : "Try It Free"}
              </button>
              {ctaError ? (
                <span className={styles.ctaMicro}>{ctaError}</span>
              ) : (
                <span className={styles.ctaMicro}>
                  No credit card required.
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
