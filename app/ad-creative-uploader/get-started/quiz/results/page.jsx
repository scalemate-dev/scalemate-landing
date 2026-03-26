"use client"

import { Suspense, useEffect, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { requestMagicLink } from "../../../../../lib/api/quizApi"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { trackQuizLead } from "@/helpers/trackGTM"
import styles from "../../quiz-v1/results/results.module.scss"

const HOURLY_RATE = 45

function calcMetrics(adsPerWeek) {
  const monthly = adsPerWeek * 4
  const winners = Math.round(monthly * 0.2)

  const uploading = (monthly * 2) / 60
  const launching = (monthly * 4) / 60
  const pushingBAU = (winners * 4) / 60
  const naming = (monthly * 1.35) / 60

  const totalHours = uploading + launching + pushingBAU + naming
  const totalCost = totalHours * HOURLY_RATE

  const uploadCost = uploading * HOURLY_RATE
  const launchCost = launching * HOURLY_RATE
  const scaleCost = pushingBAU * HOURLY_RATE
  const namingCost = naming * HOURLY_RATE

  const smUploadTime = (monthly * 0.5) / 60
  const smLaunchTime = (monthly * 0.5) / 60
  const smScaleTime = (winners * 0.5) / 60
  const smTotalHours = smUploadTime + smLaunchTime + smScaleTime

  const automationPotential = Math.round(
    ((totalHours - smTotalHours) / totalHours) * 100,
  )

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
        label: "Naming & Data Integrity",
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

export default function ResultsV1Page() {
  return (
    <Suspense fallback={<div className={styles.page} />}>
      <ResultsV1Content />
    </Suspense>
  )
}

const RING_RADIUS = 78
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
const GAUGE_MAX = 80

function ResultsV1Content() {
  const [animateIn, setAnimateIn] = useState(false)
  const [ctaLoading, setCtaLoading] = useState(false)
  const [ctaSent, setCtaSent] = useState(false)
  const [ctaError, setCtaError] = useState("")
  const searchParams = useSearchParams()

  const adsPerWeek = Number(searchParams.get("ads")) || 50
  const m = useMemo(() => calcMetrics(adsPerWeek), [adsPerWeek])

  const quizId = "ad-uploader-quiz"

  useEffect(() => {
    trackMixpanelEvent("results_viewed", {
      quiz_id: quizId,
      ads_per_week: adsPerWeek,
    })
    const timer = setTimeout(() => setAnimateIn(true), 120)
    return () => clearTimeout(timer)
  }, [])

  const vis = animateIn ? styles.visible : ""
  const gaugeFraction = Math.min(m.totalHours / GAUGE_MAX, 1)
  const gaugeOffset = RING_CIRCUMFERENCE * (1 - gaugeFraction)

  async function handleTryFree({ isResend = false } = {}) {
    const email = sessionStorage.getItem("quiz_email")
    if (!email) {
      setCtaError("No email found. Please retake the quiz.")
      trackMixpanelEvent("quiz_error", {
        quiz_id: quizId,
        step_name: "results",
        error_type: "validation",
        error_message: "No email found in session",
      })
      return
    }
    trackMixpanelEvent(isResend ? "magic_link_resend" : "results_cta_clicked", {
      quiz_id: quizId,
      ads_per_week: adsPerWeek,
    })
    if (!isResend) trackQuizLead()
    setCtaLoading(true)
    setCtaError("")
    try {
      await requestMagicLink(email)
      trackMixpanelEvent("magic_link_success", { quiz_id: quizId })
      setCtaSent(true)
    } catch (err) {
      trackMixpanelEvent("quiz_error", {
        quiz_id: quizId,
        step_name: "results",
        error_type: "api",
        error_message: err.message || "Magic link request failed",
      })
      setCtaError(err.message || "Something went wrong. Please try again.")
    } finally {
      setCtaLoading(false)
    }
  }

  const email =
    typeof window !== "undefined" ? sessionStorage.getItem("quiz_email") : ""

  if (ctaSent) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.logo}>Scalemate.</div>
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  className={styles.successCircle}
                />
                <path
                  d="M19 30.5L27 38.5L41 23.5"
                  stroke="#fff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.successCheck}
                />
              </svg>
            </div>
            <h1 className={styles.successTitle}>Check Your Inbox</h1>
            <p className={styles.successBody}>
              We sent a login link to {email && <strong>{email}</strong>}
              {!email && <strong>your email</strong>}. Click the link to access
              your Scalemate workspace and start automating your ad launches.
            </p>
            <div className={styles.successHints}>
              <div className={styles.successHint}>
                <span className={styles.successHintIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 4l6 4.5L14 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="1.5"
                      y="3"
                      width="13"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>The link expires in 60 minutes</span>
              </div>
              <div className={styles.successHint}>
                <span className={styles.successHintIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 8h8M8 4v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>Check spam if you don't see it</span>
              </div>
            </div>
            <button
              className={styles.resendButton}
              onClick={() => handleTryFree({ isResend: true })}
              disabled={ctaLoading}
            >
              {ctaLoading ? "Resending..." : "Resend Link"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>Scalemate.</div>

        {/* ── Ring Gauge ── */}
        <div className={`${styles.gaugeSection} ${vis}`}>
          <span className={`${styles.gaugeSectionLabel}`}>
            MANUAL ROUTINE LOAD
          </span>
          <div className={styles.gaugeWrapper}>
            <svg viewBox="0 0 200 200" className={styles.gaugeSvg}>
              <defs>
                <linearGradient
                  id="gaugeGradient"
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
                cx="100"
                cy="100"
                r={RING_RADIUS}
                className={styles.gaugeTrack}
              />
              <circle
                cx="100"
                cy="100"
                r={RING_RADIUS}
                className={`${styles.gaugeFill} ${animateIn ? styles.gaugeAnimate : ""}`}
                style={{
                  "--ring-circumference": RING_CIRCUMFERENCE,
                  "--ring-offset": gaugeOffset,
                }}
              />
            </svg>
            <div className={styles.gaugeCenter}>
              <span
                className={`${styles.gaugeValue} ${animateIn ? styles.gaugeValueAnimate : ""}`}
              >
                {fmt(m.totalHours)}
              </span>
              <span className={styles.gaugeUnit}>hrs / mo</span>
            </div>
          </div>
          <p className={styles.gaugeSub}>
            Time lost to manual launching instead of testing new angles and
            scaling winners. Based on <strong>{adsPerWeek} ads/week</strong>.
          </p>
        </div>

        {/* ── Impact Cards ── */}
        <div className={`${styles.impactRow} ${vis}`}>
          <div className={`${styles.impactCard} ${styles.impactCardGreen}`}>
            <div className={`${styles.impactValue} ${styles.impactGreen}`}>
              {m.automationPotential}%
            </div>
            <div className={styles.impactLabel}>automatable</div>
          </div>
          <div className={`${styles.impactCard} ${styles.impactCardRed}`}>
            <div className={`${styles.impactValue} ${styles.impactRed}`}>
              {fmtEur(m.totalCost)}
              <span className={styles.impactPeriod}>/mo</span>
            </div>
            <div className={styles.impactLabel}>manual cost</div>
          </div>
        </div>
        <p className={`${styles.impactHint} ${vis}`}>
          Based on €{HOURLY_RATE}/hr avg. media buyer rate
        </p>

        {/* ── Breakdown ── */}
        <div className={`${styles.breakdownSection} ${vis}`}>
          <div className={styles.breakdownHeader}>
            <h3 className={styles.breakdownTitle}>
              How we calculated {fmt(m.totalHours)} hours
            </h3>
            <p className={styles.breakdownIntro}>
              Based on <strong>{adsPerWeek} weekly new ads</strong>:
            </p>
          </div>
          <div className={styles.breakdownList}>
            {m.breakdown.map((item) => (
              <div key={item.label} className={styles.breakdownItem}>
                <div className={styles.breakdownIcon}>{item.icon}</div>
                <div className={styles.breakdownInfo}>
                  <div className={styles.breakdownLabel}>{item.label}</div>
                  <div className={styles.breakdownFormula}>{item.formula}</div>
                  {item.note && (
                    <div className={styles.breakdownNote}>{item.note}</div>
                  )}
                </div>
                <span className={styles.breakdownHours}>
                  {fmt(item.hours)} hrs
                </span>
              </div>
            ))}
            <div className={styles.breakdownTotal}>
              <span>Total Manual Waste</span>
              <strong>{fmt(m.totalHours)} hrs/mo</strong>
            </div>
          </div>
        </div>

        {/* ── Dark Challenger ── */}
        <div className={`${styles.darkCard} ${vis}`}>
          <div className={styles.darkContent}>
            <div className={styles.miniChart}>
              <svg viewBox="0 0 140 65" className={styles.miniChartSvg}>
                <polyline
                  points="10,52 30,49 50,46 70,43 80,45 90,40 100,37 110,34 130,32"
                  className={styles.lineManual}
                />
                <polyline
                  points="10,55 25,46 35,42 50,32 60,28 70,20 80,16 90,11 100,7 110,3 130,1"
                  className={`${styles.lineScalemate} ${animateIn ? styles.lineAnimate : ""}`}
                />
              </svg>
              <div className={styles.chartLegend}>
                <div
                  className={`${styles.chartLegendItem} ${styles.chartLegendScalemate}`}
                >
                  <span className={styles.chartLegendDot} />
                  Scalemate
                </div>
                <div
                  className={`${styles.chartLegendItem} ${styles.chartLegendManual}`}
                >
                  <span className={styles.chartLegendDot} />
                  Manual
                </div>
              </div>
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

        {/* ── Comparison Table ── */}
        <div className={`${styles.tableCard} ${vis}`}>
          <div className={styles.tableHeader}>
            <div className={styles.tableTitle}>Audit breakdown</div>
          </div>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th></th>
                <th>Manual</th>
                <th>Scalemate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.cellItem}>Creative Upload</td>
                <td className={styles.cellManual}>
                  {fmtEur(m.uploadCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellAuto}>
                  €0<span>/mo</span>
                </td>
                <td className={styles.cellBoost}>Instant</td>
              </tr>
              <tr>
                <td className={styles.cellItem}>Launching Ads</td>
                <td className={styles.cellManual}>
                  {fmtEur(m.launchCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellAuto}>
                  {fmtEur(m.smLaunchCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellBoost}>30x Faster</td>
              </tr>
              <tr>
                <td className={styles.cellItem}>Scaling Winners</td>
                <td className={styles.cellManual}>
                  {fmtEur(m.scaleCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellAuto}>
                  {fmtEur(m.smScaleCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellBoost}>30x Faster</td>
              </tr>
              <tr>
                <td className={styles.cellItem}>Naming & Data</td>
                <td className={styles.cellManual}>
                  {fmtEur(m.namingCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellAuto}>
                  €0<span>/mo</span>
                </td>
                <td className={styles.cellBoost}>Automated</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className={styles.totalRow}>
                <td className={styles.cellItem}>Total</td>
                <td className={styles.cellManual}>
                  {fmtEur(m.totalCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellAuto}>
                  {fmtEur(m.smTotalCost)}
                  <span>/mo</span>
                </td>
                <td className={styles.cellBoost}>{m.automationPotential}%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ── Sticky CTA ── */}
      <div className={styles.stickyCta}>
        <div className={styles.stickyCtaGlass}>
          <div className={styles.stickyCtaInner}>
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
              <span className={styles.ctaMicro}>No credit card required.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
