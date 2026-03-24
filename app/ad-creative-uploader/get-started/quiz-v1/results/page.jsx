"use client"

import { Suspense, useEffect, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { requestMagicLink } from "../../../../../lib/api/quizApi"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import styles from "./results.module.scss"

const HOURLY_RATE = 45 // €/hr avg media buyer wage

// Profile content definitions
const PROFILES = {
  "manual-grinder": {
    label: "YOUR AD OPS PROFILE",
    headline: "You're spending more time on uploads than on optimization.",
    diagnosis:
      "Your workflow right now: download files, re-upload to each platform, set up every ad manually, repeat. Based on your answers, your team is absorbing all of this by hand — no tools, no shortcuts, just patience. That worked at lower volumes. At yours, it's a time trap.",
    priceOfInaction: (adsPerWeek, totalHours) =>
      `Every hour spent on file management is an hour not spent on creative testing. At your volume, that's ${Math.round(totalHours)} hours per month of work that requires zero human judgment.`,
    darkChallenger: (adsPerWeek, totalHours) => ({
      before: `You're spending ${Math.round(totalHours)} hours/month on work that needs zero creative thinking. That's ${Math.round(totalHours)} hours your team could spend`,
      highlights: [
        "testing new angles",
        "finding winners",
        "actually improving ROAS",
      ],
      after: "— instead of downloading and re-uploading files.",
    }),
    solution:
      "Scalemate automates the operational layer — creative uploads, campaign setup, bulk launches across platforms and accounts. Your team drops files in once. The system handles the rest. No more downloading, re-uploading, or setting up ads from scratch.",
    cta: "Stop the manual grind — try Scalemate free.",
    tableTitle: "Savings Breakdown",
    hoursLabel:
      "Time your team spends on operational ad work instead of testing new angles and scaling winners.",
  },
  "scaling-bottleneck": {
    label: "YOUR AD OPS PROFILE",
    headline: "Your operations can't keep up with your scaling pace.",
    diagnosis:
      "You want to test more creatives, scale across more accounts, move faster — but every new campaign multiplies the manual steps. Based on your answers, your team is either delaying launches or cutting the number of creatives you test. The bottleneck isn't your strategy. It's the operational work between the idea and the live ad.",
    priceOfInaction: (adsPerWeek) =>
      `At ${adsPerWeek} ads per week, every creative you don't test is a winning angle you'll never find. Your setup process is the speed limit on your scaling — and it gets worse the more platforms and accounts you add.`,
    darkChallenger: (adsPerWeek) => ({
      before: `Your setup process is the speed limit on your scaling. At ${adsPerWeek} ads/week, you're leaving`,
      highlights: ["untested creatives on the table"],
      after: "every month — not because you don't have ideas, but because launching them takes too long.",
    }),
    solution:
      "Scalemate removes the multiplier. Bulk creative uploads, automated campaign setup across platforms and accounts, zero redundant steps. Scale the output without scaling the workload. More creatives tested, more winners found, same team.",
    cta: "Unblock your scaling — try Scalemate free.",
    tableTitle: "Savings Breakdown",
    hoursLabel:
      "Time locked in operational setup that could go toward scaling and testing.",
  },
  "error-prone": {
    label: "YOUR AD OPS PROFILE",
    headline: "Manual processes break performance. Automation protects it.",
    diagnosis:
      "When your team rushes through 20+ creative setups, things slip — wrong targeting, duplicated ads, naming inconsistencies. You're relying on scripts or spreadsheets that work most of the time, but break when it matters most. It's not a people problem. It's a process problem.",
    priceOfInaction: (adsPerWeek, totalHours, monthly) =>
      `Errors don't just waste time fixing them — they waste ad spend and pollute your data. You end up optimizing on top of inconsistent execution. At ${adsPerWeek} ads per week, even a 5% error rate means ${Math.round(monthly * 0.05)} broken ads per month.`,
    darkChallenger: (adsPerWeek, totalHours, monthly) => ({
      before: `At ${adsPerWeek} ads/week, even a small error rate means ${Math.round(monthly * 0.05)} broken ads per month —`,
      highlights: [
        "wrong settings",
        "inconsistent naming",
        "duplicated setups",
      ],
      after: ". Every fix takes time. Every unfixed mistake costs ad spend.",
    }),
    solution:
      "Scalemate standardizes your operational layer. Every creative goes to the right platform, right account, right setup — automatically. Consistent naming, correct post IDs, no manual duplication. Same execution quality at 50 ads or 500.",
    cta: "Take errors out of the equation — try Scalemate free.",
    tableTitle: "Savings Breakdown",
    hoursLabel: "Time spent on manual work where errors compound.",
  },
  "decision-maker": {
    label: "YOUR AD OPS PROFILE",
    headline: "Scale your output without scaling your headcount.",
    diagnosis:
      "Your team's capacity is your most expensive constraint. Right now, a significant chunk of it goes to work that doesn't require human judgment — uploading files, duplicating campaigns, managing naming conventions. You've been solving this by adding people. But headcount scales linearly. Your ad volume doesn't.",
    priceOfInaction: (adsPerWeek, totalHours) =>
      `At an average operational cost of €${HOURLY_RATE}/hr, that's €${Math.round(totalHours * HOURLY_RATE).toLocaleString("en-US")}/month on tasks that should be automated. Every month you wait, you're paying for manual work that a system handles in minutes.`,
    darkChallenger: (adsPerWeek, totalHours) => ({
      before: `Your team spends ${Math.round(totalHours)} hours/month on operational tasks that don't require strategic judgment. At €${HOURLY_RATE}/hr average cost, that's`,
      highlights: [
        `€${Math.round(totalHours * HOURLY_RATE).toLocaleString("en-US")}/month on work a system handles in minutes`,
      ],
      after: ". Same budget, zero output.",
    }),
    solution:
      "Scalemate is the operational layer that lets your team do more without adding more people. Automated creative distribution, bulk campaign setup, zero redundant steps. Same team, higher output, lower operational cost per ad launched.",
    cta: "See the impact on your team's output — try Scalemate free.",
    tableTitle: "Operational Cost Comparison",
    hoursLabel: "Operational hours that don't require strategic thinking.",
    hoursHeading: "YOUR TEAM'S OPERATIONAL OVERHEAD",
    totalLabel: "Total Operational Overhead",
  },
}

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

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className={styles.page} />}>
      <ResultsContent />
    </Suspense>
  )
}

// Ring gauge constants
const RING_RADIUS = 78
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
const GAUGE_MAX = 80

function ResultsContent() {
  const [animateIn, setAnimateIn] = useState(false)
  const [ctaLoading, setCtaLoading] = useState(false)
  const [ctaSent, setCtaSent] = useState(false)
  const [ctaError, setCtaError] = useState("")
  const searchParams = useSearchParams()

  const adsPerWeek = Number(searchParams.get("ads")) || 50
  const profileKey = searchParams.get("profile") || "manual-grinder"
  const profile = PROFILES[profileKey] || PROFILES["manual-grinder"]
  const m = useMemo(() => calcMetrics(adsPerWeek), [adsPerWeek])

  const quizId = "ad-uploader-quiz-v1"

  useEffect(() => {
    trackMixpanelEvent("results_viewed", {
      quiz_id: quizId,
      ads_per_week: adsPerWeek,
      profile_type: profileKey,
    })
    const timer = setTimeout(() => setAnimateIn(true), 120)
    return () => clearTimeout(timer)
  }, [])

  const vis = animateIn ? styles.visible : ""

  // Gauge
  const gaugeFraction = Math.min(m.totalHours / GAUGE_MAX, 1)
  const gaugeOffset = RING_CIRCUMFERENCE * (1 - gaugeFraction)

  async function handleTryFree() {
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
    trackMixpanelEvent("results_cta_clicked", {
      quiz_id: quizId,
      ads_per_week: adsPerWeek,
      profile_type: profileKey,
    })
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

  // ── Success Screen ──
  if (ctaSent) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.logo}>Scalemate.</div>
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" className={styles.successCircle} />
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
                    <path d="M2 4l6 4.5L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>The link expires in 60 minutes</span>
              </div>
              <div className={styles.successHint}>
                <span className={styles.successHintIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8M8 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>Check spam if you don't see it</span>
              </div>
            </div>
            <button className={styles.resendButton} onClick={handleTryFree} disabled={ctaLoading}>
              {ctaLoading ? "Resending..." : "Resend Link"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const isDecisionMaker = profileKey === "decision-maker"
  const dark = profile.darkChallenger(adsPerWeek, m.totalHours, m.monthly)

  // Savings data for card-based comparison
  const savingsItems = [
    {
      label: "Creative Upload",
      manual: m.uploadCost,
      auto: 0,
      boost: isDecisionMaker ? "100%" : "Instant",
    },
    {
      label: "Launching Ads",
      manual: m.launchCost,
      auto: m.smLaunchCost,
      boost: isDecisionMaker
        ? `${Math.round((1 - m.smLaunchCost / m.launchCost) * 100)}%`
        : "30x Faster",
    },
    {
      label: "Scaling Winners",
      manual: m.scaleCost,
      auto: m.smScaleCost,
      boost: isDecisionMaker
        ? `${Math.round((1 - m.smScaleCost / m.scaleCost) * 100)}%`
        : "30x Faster",
    },
    {
      label: "Naming & Data",
      manual: m.namingCost,
      auto: 0,
      boost: isDecisionMaker ? "100%" : "Automated",
    },
  ]

  // ── Results Screen ──
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logo}>Scalemate.</div>

        {/* ── 1. Hero ── */}
        <div className={`${styles.hero} ${vis}`}>
          <span className={styles.eyebrow}>{profile.label}</span>
          <h1 className={styles.profileHeadline}>{profile.headline}</h1>
          <p className={styles.diagnosis}>{profile.diagnosis}</p>
        </div>

        <hr className={styles.divider} />

        {/* ── 2. Ring Gauge ── */}
        <div className={`${styles.gaugeSection} ${vis}`}>
          <span className={styles.gaugeSectionLabel}>
            {profile.hoursHeading || "YOUR MANUAL HOURS ESTIMATE"}
          </span>
          <div className={styles.gaugeWrapper}>
            <svg viewBox="0 0 200 200" className={styles.gaugeSvg}>
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc4a3a" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r={RING_RADIUS} className={styles.gaugeTrack} />
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
              <span className={`${styles.gaugeValue} ${animateIn ? styles.gaugeValueAnimate : ""}`}>
                {fmt(m.totalHours)}
              </span>
              <span className={styles.gaugeUnit}>hrs / mo</span>
            </div>
          </div>
          <p className={styles.gaugeSub}>
            {profile.hoursLabel} Based on{" "}
            <strong>{adsPerWeek} ads/week</strong>.
          </p>
        </div>

        {/* ── 3. Impact Cards ── */}
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

        {/* ── 4. Breakdown ── */}
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
              <span>{profile.totalLabel || "Total Manual Work"}</span>
              <strong>{fmt(m.totalHours)} hrs/mo</strong>
            </div>
          </div>
        </div>

        {/* ── 5 & 6. Insight Pair ── */}
        <div className={`${styles.insightPair} ${vis}`}>
          <div className={`${styles.insightCard} ${styles.insightCardPain}`}>
            <div className={`${styles.insightIcon} ${styles.insightIconPain}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v6M8 11.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className={`${styles.insightLabel} ${styles.insightLabelPain}`}>
              The cost of inaction
            </span>
            <p className={styles.insightText}>
              {profile.priceOfInaction(adsPerWeek, m.totalHours, m.monthly)}
            </p>
          </div>
          <div className={`${styles.insightCard} ${styles.insightCardGain}`}>
            <div className={`${styles.insightIcon} ${styles.insightIconGain}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={`${styles.insightLabel} ${styles.insightLabelGain}`}>
              With Scalemate
            </span>
            <p className={styles.insightText}>{profile.solution}</p>
          </div>
        </div>

        {/* ── 7. Dark Challenger ── */}
        <div className={`${styles.darkCard} ${vis}`}>
          <div className={styles.darkContent}>
            <div className={styles.miniChart}>
              <svg viewBox="0 0 140 65" className={styles.miniChartSvg}>
                {/* Manual: flat/slow growth — bottom line */}
                <polyline
                  points="10,52 30,49 50,46 70,43 80,45 90,40 100,37 110,34 130,32"
                  className={styles.lineManual}
                />
                {/* Scalemate: steep growth — top line */}
                <polyline
                  points="10,55 25,46 35,42 50,32 60,28 70,20 80,16 90,11 100,7 110,3 130,1"
                  className={`${styles.lineScalemate} ${animateIn ? styles.lineAnimate : ""}`}
                />
              </svg>
              <div className={styles.chartLegend}>
                <div className={`${styles.chartLegendItem} ${styles.chartLegendScalemate}`}>
                  <span className={styles.chartLegendDot} />
                  Scalemate
                </div>
                <div className={`${styles.chartLegendItem} ${styles.chartLegendManual}`}>
                  <span className={styles.chartLegendDot} />
                  Manual
                </div>
              </div>
            </div>
            <div className={styles.darkText}>
              <p>
                {dark.before}{" "}
                {dark.highlights.map((h, i) => (
                  <span key={i}>
                    <strong>{h}</strong>
                    {i < dark.highlights.length - 1 ? ", " : ""}
                  </span>
                ))}
                {dark.after}
              </p>
            </div>
          </div>
        </div>

        {/* ── 8. Comparison Table ── */}
        <div className={`${styles.tableCard} ${vis}`}>
          <div className={styles.tableHeader}>
            <div className={styles.tableTitle}>{profile.tableTitle}</div>
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
              {savingsItems.map((item) => (
                <tr key={item.label}>
                  <td className={styles.cellItem}>{item.label}</td>
                  <td className={styles.cellManual}>{fmtEur(item.manual)}<span>/mo</span></td>
                  <td className={styles.cellAuto}>{fmtEur(item.auto)}<span>/mo</span></td>
                  <td className={styles.cellBoost}>{item.boost}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={styles.totalRow}>
                <td className={styles.cellItem}>Total</td>
                <td className={styles.cellManual}>{fmtEur(m.totalCost)}<span>/mo</span></td>
                <td className={styles.cellAuto}>{fmtEur(m.smTotalCost)}<span>/mo</span></td>
                <td className={styles.cellBoost}>
                  {isDecisionMaker
                    ? `${fmtEur((m.totalCost - m.smTotalCost) * 12)}/yr saved`
                    : `${m.automationPotential}%`}
                </td>
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
              <span className={styles.ctaMicro}>
                {profile.cta} No credit card required.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
