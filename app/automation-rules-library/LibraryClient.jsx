"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  RULES,
  RULE_GOALS,
  RULE_LEVELS,
  RULE_OBJECTIVES,
  GOAL_LABELS,
  LEVEL_LABELS,
} from "./rules-data"
import BenchmarkInput, {
  DEFAULT_STATE,
  readBenchmarkInputs,
} from "./BenchmarkInput"
import benchStyles from "./BenchmarkInput.module.scss"
import styles from "./LibraryClient.module.scss"

// ─── Recalculation helpers ──────────────────────────────────────

function computeValue(condition, inputs, mode) {
  if (mode === "production") return condition.productionValue
  if (condition.multiplier == null) return condition.productionValue
  // rolling_avg compares to a per-account rolling stat (e.g. 7-day average
  // spend), which can't be expressed as a fixed dollar value — the renderer
  // shows the formula instead.
  if (condition.benchmarkType === "rolling_avg") return null
  // For spend_floor, the anchor metric is configurable via anchorBenchmark
  // (defaults to "cpa" for back-compat with rules created before Phase 1.6).
  const anchor =
    condition.benchmarkType === "spend_floor"
      ? condition.anchorBenchmark || "cpa"
      : condition.benchmarkType
  const baseInput = inputs[anchor]
  if (baseInput == null || baseInput === "" || Number.isNaN(baseInput)) {
    return condition.productionValue
  }
  return Math.round(baseInput * condition.multiplier * 100) / 100
}

function formatValue(value, unit) {
  if (value == null) return "—"
  if (unit === "currency") {
    // strip trailing .0 / .00, keep decimals when meaningful
    const n = Number(value)
    if (Number.isInteger(n)) return `$${n}`
    return `$${n.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")}`
  }
  if (unit === "ratio") {
    const n = Number(value)
    if (Number.isInteger(n)) return `${n}x`
    return `${n.toFixed(2).replace(/\.?0+$/, "")}x`
  }
  if (unit === "percent_delta") {
    // change/delta metrics — prefix + for positive, − is in the number
    const n = Number(value)
    const sign = n > 0 ? "+" : ""
    return `${sign}${n}%`
  }
  if (unit === "percent") {
    return `${Number(value)}%`
  }
  // count
  const n = Number(value)
  return Number.isInteger(n) ? `${n}` : `${n}`
}

function operatorGlyph(op) {
  if (op === ">=") return "≥"
  if (op === "<=") return "≤"
  return op
}

// Labels for the input metrics each benchmarkType anchors on. Mirrors the
// fields shown in BenchmarkInput so the formula chips speak the same language
// as the inputs the user can actually edit.
const ANCHOR_LABELS = {
  cpa: "breakeven CPA",
  cpc: "CPC ceiling",
  roas: "ROAS target",
  cpi: "CPI target",
  cpm: "CPM benchmark",
}

function formatMultiplier(m) {
  if (Number.isInteger(m)) return `${m}×`
  return `${parseFloat(m.toFixed(3))}×`
}

const WINDOW_LABELS = {
  last_7d: "7-day rolling avg",
  last_3d: "3-day rolling avg",
  last_30d: "30-day rolling avg",
}

const ROLLING_METRIC_LABELS = {
  spend: "spend",
  cpa: "CPA",
  cost_per_purchase: "cost-per-purchase",
  cpm: "CPM",
}

// Inline formula string for a condition — e.g. "2× breakeven CPA",
// "1.7× breakeven CPA", "3.667× CPC ceiling". Returns null when the
// condition isn't benchmark-derived (absolute_spend / absolute_count).
function buildFormula(condition) {
  if (condition.multiplier == null) return null
  if (condition.benchmarkType === "rolling_avg") {
    const m = ROLLING_METRIC_LABELS[condition.anchorMetric] || condition.anchorMetric || "spend"
    const w = WINDOW_LABELS[condition.anchorWindow] || condition.anchorWindow || "rolling avg"
    return `${formatMultiplier(condition.multiplier)} ${w} ${m}`
  }
  const anchor =
    condition.benchmarkType === "spend_floor"
      ? condition.anchorBenchmark || "cpa"
      : condition.benchmarkType
  const label = ANCHOR_LABELS[anchor] || anchor
  return `${formatMultiplier(condition.multiplier)} ${label}`
}

// Maps a condition to its strategic rationale — the "why" behind the
// multiplier choice. Output is one short sentence that classifies the
// threshold (fair-test, loss-cap, scale-signal, etc.) so the user can
// reason about whether the multiplier is the right tool for their account.
// Returns null when no useful rationale applies.
function explainCondition(c) {
  // ─── Absolute (non-benchmark) conditions ──────────────
  if (c.multiplier == null) {
    if (c.benchmarkType === "absolute_count") {
      const op = c.operator
      const v = c.productionValue
      if (c.metric === "purchases") {
        if (op === ">" || op === ">=")
          return `Purchase signal floor — at least ${v} confirmed conversion${
            v === 1 ? "" : "s"
          } before action fires, filters one-off flukes`
        if (op === "<" || op === "<=")
          return `Zero-conversion gate — purchases under ${v} means the funnel isn't producing`
        if (op === "=")
          return `Zero-purchase gate — fires only when no conversion has landed`
      }
      if (c.metric === "initiated_checkout") {
        if (op === "=")
          return `Checkout-zero gate — funnel hasn't reached purchase intent`
        if (op === "<" || op === "<=")
          return `Checkout signal floor — fewer than ${v} checkouts means leading-indicator failure`
        if (op === ">" || op === ">=")
          return `Checkout signal confirmed — at least ${v} mid-funnel events validates the audience`
      }
      if (c.metric === "complete_registration")
        return `Registration gate — fewer than ${v} sign-ups means the lead-gen step is broken`
      if (c.metric === "add_payment_info")
        return `Payment-info gate — zero events means no real purchase intent reached`
      if (c.metric === "add_to_cart")
        return `Add-to-cart leading indicator — early cart events confirm audience-creative fit`
      if (c.metric === "impressions")
        return `Delivery floor — ${(v ?? 0).toLocaleString()} impressions give a fair sample for CPM/CTR reads`
      if (c.metric === "ipm_change")
        return `Delivery-efficiency drop — IPM falling >${Math.abs(v)}% signals creative saturation`
      if (c.metric === "cpi_change")
        return `Install-cost climb — CPI rising >${v}% confirms fatigue, not noise`
      return null
    }
    if (c.benchmarkType === "absolute_spend") {
      if (c.productionValue == null)
        return `Self-referential — compares spend to the campaign's own daily budget cap`
      return null
    }
    return null
  }

  // ─── Benchmark-derived conditions ─────────────────────
  const m = c.multiplier
  const op = c.operator
  const isSpendFloor = c.benchmarkType === "spend_floor"
  const anchor = isSpendFloor
    ? c.anchorBenchmark || "cpa"
    : c.benchmarkType
  const multStr = formatMultiplier(m)

  if (c.benchmarkType === "rolling_avg") {
    const window = WINDOW_LABELS[c.anchorWindow] || c.anchorWindow || "rolling avg"
    const metric = ROLLING_METRIC_LABELS[c.anchorMetric] || c.anchorMetric || "spend"
    return `Anomaly trigger (${multStr} ${window} ${metric}) — catches accidental budget typos or runaway CBO before they burn the day's cap`
  }

  if (isSpendFloor) {
    if (anchor === "cpa") {
      if (m < 1)
        return `Light-touch floor (${multStr} CPA) — skip cheap-impression noise, fire on small evidence`
      if (m <= 2)
        return `Fair-test spend floor (${multStr} CPA) — enough auction signal to read true performance`
      if (m <= 5)
        return `Deep-test threshold (${multStr} CPA) — creative survived early funnel but isn't converting`
      return `Pacing protection (${multStr} CPA) — hard cap when budget overshoot is the bigger risk than missing a winner`
    }
    if (anchor === "cpi")
      return `Mobile UA spend floor (${multStr} CPI) — fair test on install-objective spend before kill`
    if (anchor === "cpc")
      return `CPC-anchored spend floor (${multStr} CPC) — proportional fair-test for click-objective campaigns`
  }

  if (anchor === "cpa") {
    if (op === ">" || op === ">=") {
      if (m >= 2.0)
        return `Loss cap (${multStr} CPA) — well past breakeven, clear-loss territory`
      if (m >= 1.3)
        return `Trim threshold (${multStr} CPA) — over breakeven, ad set degrading`
      if (m > 1.0)
        return `Breakeven boundary (${multStr} CPA) — clearly above unit economics`
      return `Cost-per-X ceiling (${multStr} CPA) — below breakeven (verify direction)`
    }
    if (m <= 0.7)
      return `Strong scale signal (${multStr} CPA) — well under breakeven`
    if (m < 1.0)
      return `Scale signal (${multStr} CPA) — profitably under breakeven`
    return `Conservative scale band (${multStr} CPA)`
  }

  if (anchor === "cpc") {
    if (op === ">" || op === ">=") {
      if (m >= 2.5)
        return `Creative quality canary (${multStr} CPC) — high CPC before conversions arrive = hook break`
      if (m >= 1.5)
        return `CPC anomaly (${multStr} CPC) — auction is paying too much for clicks`
      return `CPC threshold (${multStr} CPC)`
    }
    return `CPC threshold (${multStr} CPC)`
  }

  if (anchor === "roas") {
    if (op === "<" || op === "<=") {
      if (m <= 0.2)
        return `Hard ROAS floor (${multStr} ROAS) — structurally unprofitable, deep-loss territory`
      if (m <= 0.5)
        return `ROAS floor (${multStr} ROAS) — well below target`
      return `ROAS threshold (${multStr} ROAS)`
    }
    return `ROAS target check (${multStr} ROAS)`
  }

  if (anchor === "cpi") {
    if (op === ">" || op === ">=") {
      if (m >= 1.5)
        return `Install cost cap (${multStr} CPI) — well past target, Phase 1 kill territory`
      return `Install cost threshold (${multStr} CPI)`
    }
    return `Install cost scale signal (${multStr} CPI)`
  }

  if (anchor === "cpm")
    return `Delivery cost ceiling (${multStr} CPM) — audience saturating or creative not winning attention`

  return null
}

// Collects unique condition rationales across all tasks of a rule.
// Dedupes by (metric + rationale) so repeated thresholds across a chain
// aren't shown twice. Includes campaign-scope filters at the top so users
// see the full picture (targeting + per-task conditions) in one place.
function uniqueConditionExplanations(rule) {
  const seen = new Map()
  ;(rule.filters || []).forEach((f) => {
    const why = explainCondition(f)
    if (!why) return
    const scope = f.scope === "campaign" ? "(campaign filter)" : "(filter)"
    const label = `${f.metricLabel} ${scope}`
    const key = `${label}|${why}`
    if (!seen.has(key)) {
      seen.set(key, { metric: label, why })
    }
  })
  rule.tasks.forEach((task) => {
    task.conditions.forEach((c) => {
      const why = explainCondition(c)
      if (!why) return
      const key = `${c.metricLabel}|${why}`
      if (!seen.has(key)) {
        seen.set(key, { metric: c.metricLabel, why })
      }
    })
  })
  return Array.from(seen.values())
}

// Build the inline condition string for the card preview / chain.
function renderConditionString(conditions, inputs, mode) {
  return conditions
    .map((c) => {
      const v = computeValue(c, inputs, mode)
      const valueStr =
        v == null
          ? c.benchmarkType === "rolling_avg"
            ? `${formatMultiplier(c.multiplier)} ${WINDOW_LABELS[c.anchorWindow] || "rolling avg"} ${ROLLING_METRIC_LABELS[c.anchorMetric] || c.anchorMetric || "spend"}`
            : "daily budget"
          : formatValue(v, c.unit)
      const formula = buildFormula(c)
      const base = formula
        ? `${c.metricLabel} ${operatorGlyph(c.operator)} ${valueStr} (${formula})`
        : `${c.metricLabel} ${operatorGlyph(c.operator)} ${valueStr}`
      return c.note ? `${base} [${c.note}]` : base
    })
    .join(" AND ")
}

function isAdjustable(rule) {
  return rule.tasks.some((t) =>
    t.conditions.some((c) => c.multiplier != null)
  )
}

// Classify a task action into a direction label so a multi-task rule can
// surface BOTH directions (scale + trim, pause + scale, etc.) instead of
// flattening every multi-step rule into the generic "{N}-step chain".
function inferActionKind(action) {
  const a = (action || "").toLowerCase()
  if (a.includes("increase")) return "scale"
  if (a.includes("decrease") || a.includes("trim")) return "trim"
  if (a.includes("pause")) return "pause"
  if (a.includes("activate")) return "reactivate"
  if (a.includes("notify") || a.includes("alert")) return "alert"
  return null
}

function chainChipLabel(rule) {
  const kinds = []
  const seen = new Set()
  rule.tasks.forEach((t) => {
    const k = inferActionKind(t.action)
    if (k && !seen.has(k)) {
      kinds.push(k)
      seen.add(k)
    }
  })
  if (kinds.length <= 1) {
    return `${rule.tasks.length}-step chain`
  }
  return `${kinds.join(" + ")} chain`
}

function hasNotify(rule) {
  return rule.tasks.some(
    (t) =>
      typeof t.action === "string" &&
      /\b(notify|alert|slack)\b/i.test(t.action)
  )
}

function uniqueBenchmarkTypes(rule) {
  const set = new Set()
  rule.tasks.forEach((t) =>
    t.conditions.forEach((c) => {
      if (c.multiplier != null) {
        // For spend_floor, surface the anchor (so AdjustNote shows the
        // right input names) rather than the literal "spend_floor" string.
        if (c.benchmarkType === "spend_floor") {
          set.add(c.anchorBenchmark || "cpa")
        } else {
          set.add(c.benchmarkType)
        }
      }
    })
  )
  return Array.from(set)
}

function buildCopyText(rule, inputs, mode) {
  const lines = [
    `# ${rule.title}`,
    `Goal: ${GOAL_LABELS[rule.goal] || rule.goal}`,
    `Level: ${LEVEL_LABELS[rule.level] || rule.level}`,
    `Schedule: ${rule.schedule}`,
    "",
  ]
  if (rule.filters && rule.filters.length > 0) {
    const scopeLabel =
      rule.filters[0].scope === "campaign"
        ? "Campaigns"
        : rule.filters[0].scope === "ad-set"
        ? "Ad sets"
        : "Entities"
    const windowLabel = rule.filters[0].window
      ? ` (${rule.filters[0].window})`
      : ""
    lines.push(
      `Targeting filter (${scopeLabel.toLowerCase()} scope): ${renderConditionString(rule.filters, inputs, mode)}${windowLabel}`
    )
    lines.push("")
  }
  rule.tasks.forEach((task, i) => {
    if (rule.tasks.length > 1) lines.push(`## Step ${i + 1}`)
    lines.push(`Condition: ${renderConditionString(task.conditions, inputs, mode)}`)
    lines.push(`Time window: ${task.timeframe}`)
    lines.push(`Action: ${task.action}`)
    lines.push("")
  })
  if (mode === "personalized") {
    const types = uniqueBenchmarkTypes(rule)
    const summary = []
    if (types.includes("cpa")) summary.push(`CPA $${inputs.cpa}`)
    if (types.includes("roas")) summary.push(`ROAS ${inputs.roas}x`)
    if (types.includes("cpc")) summary.push(`CPC $${inputs.cpc}`)
    if (types.includes("cpi")) summary.push(`CPI $${inputs.cpi}`)
    const summaryStr = summary.length
      ? summary.join(", ")
      : "your inputs"
    lines.push(`# Thresholds adjusted from your inputs — ${summaryStr}`)
  } else {
    lines.push(
      rule.source === "playbook"
        ? `# Thresholds from Scalemate's playbook framework`
        : `# Thresholds shown as production examples (live Meta accounts)`
    )
  }
  return lines.join("\n").trim()
}

// ─── Icons ──────────────────────────────────────────────────────

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect
        x="3.5"
        y="3.5"
        width="7"
        height="9"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5.5 3V2c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <path
        d="M2.5 4l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M2.8 6.8 5.2 9.2l5-5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WarnIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1.5 12.5 11.5h-11L7 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.5v3M7 10.2v.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Condition renderer (with personalisation styling) ──────────

function ConditionFragments({ conditions, inputs, mode }) {
  return (
    <>
      {conditions.map((c, idx) => {
        const v = computeValue(c, inputs, mode)
        const isAdjusted =
          mode === "personalized" &&
          c.multiplier != null &&
          v !== c.productionValue
        const valueStr =
          v == null
            ? c.benchmarkType === "rolling_avg"
              ? `${formatMultiplier(c.multiplier)} ${WINDOW_LABELS[c.anchorWindow] || "rolling avg"} ${ROLLING_METRIC_LABELS[c.anchorMetric] || c.anchorMetric || "spend"}`
              : "daily budget"
            : formatValue(v, c.unit)
        const formula = buildFormula(c)
        return (
          <span key={idx}>
            {idx > 0 && <span className={styles.condJoiner}> AND </span>}
            <span className={styles.condMetric}>{c.metricLabel}</span>{" "}
            <span className={styles.condOp}>{operatorGlyph(c.operator)}</span>{" "}
            <span
              className={
                isAdjusted ? styles.condValueAdjusted : styles.condValue
              }
            >
              {valueStr}
            </span>
            {formula && (
              <span className={styles.condFormula}> = {formula}</span>
            )}
            {c.note && (
              <span className={styles.condNote}> ({c.note})</span>
            )}
          </span>
        )
      })}
    </>
  )
}

function ProductionAnnotation({ conditions, inputs, mode, source }) {
  if (mode !== "personalized") return null
  // only annotate conditions whose recalculated value differs from production
  const diffs = conditions.filter((c) => {
    if (c.multiplier == null) return false
    const v = computeValue(c, inputs, mode)
    return v !== c.productionValue
  })
  if (diffs.length === 0) return null
  if (source === "playbook") {
    return (
      <span className={styles.prodAnnotation}>
        Scalemate playbook framework
      </span>
    )
  }
  const strs = diffs.map(
    (c) => `${c.metricLabel}: ${formatValue(c.productionValue, c.unit)}`
  )
  return (
    <span className={styles.prodAnnotation}>
      from production — {strs.join(", ")}
    </span>
  )
}

function AdjustNote({ rule, inputs }) {
  const types = uniqueBenchmarkTypes(rule)
  if (types.length === 0) return null
  const parts = []
  if (types.includes("cpa")) parts.push(`CPA $${inputs.cpa}`)
  if (types.includes("roas")) parts.push(`ROAS ${inputs.roas}x`)
  if (types.includes("cpc")) parts.push(`CPC $${inputs.cpc ?? "—"}`)
  if (types.includes("cpi")) parts.push(`CPI $${inputs.cpi ?? "—"}`)
  if (parts.length === 0) return null
  const sourceTail =
    rule.source === "playbook"
      ? "The framework defaults come from Scalemate's playbook."
      : "Production accounts used different numbers — see the annotations below each condition."
  return (
    <div className={styles.adjustNote}>
      <span className={styles.adjustNoteLabel}>Adjusted for your account</span>
      <p>
        Thresholds scaled from your {parts.join(" and ")}. {sourceTail}
      </p>
    </div>
  )
}

// ─── Card ───────────────────────────────────────────────────────

function RuleCard({
  rule,
  index,
  expanded,
  onToggle,
  onCopy,
  copied,
  inputs,
  mode,
}) {
  const isMulti = rule.tasks.length > 1
  const previewTask = rule.tasks[0]
  const indexLabel = String(index + 1).padStart(2, "0")
  const adjustable = isAdjustable(rule)

  return (
    <article
      className={`${styles.card} ${expanded ? styles.cardExpanded : ""}`}
      data-goal={rule.goal}
      data-level={rule.level}
    >
      <div className={styles.cardTopline}>
        <span className={styles.cardIndex}>№ {indexLabel}</span>
        <div className={styles.cardChips}>
          <span className={`${styles.chip} ${styles[`chip-${rule.goal}`]}`}>
            {GOAL_LABELS[rule.goal]}
          </span>
          <span className={styles.chipNeutral}>{LEVEL_LABELS[rule.level]}</span>
          {rule.testingPhase && (
            <span
              className={`${styles.chipPhase} ${
                styles[`chipPhase-${rule.testingPhase}`]
              }`}
            >
              Phase {rule.testingPhase}
            </span>
          )}
          {hasNotify(rule) && (
            <span className={styles.chipNotify}>Alert</span>
          )}
          {isMulti && (
            <span className={styles.chipMulti}>{chainChipLabel(rule)}</span>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{rule.title}</h3>

      <dl className={styles.cardGrid}>
        {rule.filters && rule.filters.length > 0 && (
          <div className={styles.gridRow}>
            <dt>Targeting</dt>
            <dd>
              <code className={styles.condCode}>
                <span className={styles.filterScope}>
                  {rule.filters[0].scope === "campaign"
                    ? "Campaigns where "
                    : rule.filters[0].scope === "ad-set"
                    ? "Ad sets where "
                    : "Where "}
                </span>
                <ConditionFragments
                  conditions={rule.filters}
                  inputs={inputs}
                  mode={mode}
                />
                {rule.filters[0].window && (
                  <span className={styles.condNote}>
                    {" "}
                    ({rule.filters[0].window})
                  </span>
                )}
              </code>
            </dd>
          </div>
        )}
        <div className={styles.gridRow}>
          <dt>If</dt>
          <dd>
            <code className={styles.condCode}>
              <ConditionFragments
                conditions={previewTask.conditions}
                inputs={inputs}
                mode={mode}
              />
            </code>
            <ProductionAnnotation
              conditions={previewTask.conditions}
              inputs={inputs}
              mode={mode}
              source={rule.source}
            />
          </dd>
        </div>
        <div className={styles.gridRow}>
          <dt>Window</dt>
          <dd>
            <code>{previewTask.timeframe}</code>
          </dd>
        </div>
        <div className={styles.gridRow}>
          <dt>Then</dt>
          <dd>
            {isMulti ? (
              <div className={styles.actionStack}>
                {rule.tasks.slice(0, 3).map((t, i) => (
                  <code key={i}>{t.action}</code>
                ))}
                {rule.tasks.length > 3 && (
                  <span className={styles.actionStackMore}>
                    + {rule.tasks.length - 3} more
                  </span>
                )}
              </div>
            ) : (
              <code>{previewTask.action}</code>
            )}
          </dd>
        </div>
        <div className={styles.gridRow}>
          <dt>Schedule</dt>
          <dd>
            <code>{rule.schedule}</code>
          </dd>
        </div>
      </dl>

      {expanded && (
        <div className={styles.expand}>
          {adjustable && mode === "personalized" && (
            <AdjustNote rule={rule} inputs={inputs} />
          )}

          {(() => {
            const explanations = uniqueConditionExplanations(rule)
            if (explanations.length === 0) return null
            return (
              <div className={styles.breakdown}>
                <span className={styles.breakdownLabel}>
                  Threshold breakdown
                </span>
                <ul className={styles.breakdownList}>
                  {explanations.map((ex, i) => (
                    <li key={i} className={styles.breakdownItem}>
                      <span className={styles.breakdownMetric}>
                        {ex.metric}
                      </span>
                      <span className={styles.breakdownWhy}>{ex.why}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })()}

          {isMulti && (
            <div className={styles.chain}>
              <span className={styles.chainLabel}>
                The full {rule.tasks.length}-step chain
              </span>
              <ol className={styles.chainList}>
                {rule.tasks.map((task, i) => (
                  <li key={i}>
                    <span className={styles.chainStep}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.chainBody}>
                      <strong>If</strong>{" "}
                      <code>
                        <ConditionFragments
                          conditions={task.conditions}
                          inputs={inputs}
                          mode={mode}
                        />
                      </code>{" "}
                      <em>({task.timeframe})</em>
                      <br />
                      <strong>Then</strong> <code>{task.action}</code>
                      <ProductionAnnotation
                        conditions={task.conditions}
                        inputs={inputs}
                        mode={mode}
                        source={rule.source}
                      />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className={styles.whenBlock}>
            <span className={styles.whenLabel}>When to use</span>
            {rule.whenToUse ? (
              <p>{rule.whenToUse}</p>
            ) : (
              <p className={styles.whenPlaceholder}>
                Context note pending — sourced from a live account, threshold
                reasoning is being annotated.
              </p>
            )}
          </div>

          <div className={styles.limitation}>
            <span className={styles.limitationLabel}>
              <WarnIcon />
              Native Meta limitation
            </span>
            <p>{rule.nativeLimitation}</p>
          </div>
        </div>
      )}

      <footer className={styles.cardFooter}>
        <button
          type="button"
          className={styles.expandBtn}
          onClick={() => onToggle(rule.id)}
        >
          {expanded ? "Show less" : "Show details"}
          <ChevronIcon open={expanded} />
        </button>
        <button
          type="button"
          className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ""}`}
          onClick={() => onCopy(rule)}
        >
          {copied ? (
            <>
              <CheckIcon />
              Copied
            </>
          ) : (
            <>
              <CopyIcon />
              Copy rule
            </>
          )}
        </button>
      </footer>
    </article>
  )
}

// ─── Library shell ──────────────────────────────────────────────

export default function LibraryClient() {
  const [goal, setGoal] = useState("all")
  const [level, setLevel] = useState("all")
  const [objective, setObjective] = useState("all")
  const [expandedId, setExpandedId] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  // Benchmark inputs — start with defaults so SSR + first render match.
  // Hydrate from localStorage post-mount.
  const [bench, setBench] = useState(DEFAULT_STATE)
  useEffect(() => {
    setBench(readBenchmarkInputs())
  }, [])

  // Sticky-collapse-on-scroll: the cluster always position-sticky at top.
  // A sentinel placed BEFORE the cluster tells us when it's actually stuck
  // (sentinel out of viewport top). When stuck and the user hasn't manually
  // expanded, we render the compact summary bar instead of the full controls.
  const clusterRef = useRef(null)
  const topSentinelRef = useRef(null)
  const [isStuck, setIsStuck] = useState(false)
  const [userExpanded, setUserExpanded] = useState(false)

  useEffect(() => {
    const node = topSentinelRef.current
    if (!node || typeof IntersectionObserver === "undefined") return
    const obs = new IntersectionObserver(
      ([entry]) => {
        const stuck = !entry.isIntersecting
        setIsStuck(stuck)
        // Auto-collapse manual-expand state when scrolling back into the
        // section's natural position — keeps state predictable.
        if (!stuck) setUserExpanded(false)
      },
      { rootMargin: "0px 0px -100% 0px", threshold: 0 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const isCompact = isStuck && !userExpanded

  // Determine objectives present in the rule set — drives whether to show
  // an objective filter at all. Rules can belong to multiple objectives
  // (e.g. creative-testing Phase 2/3 work across Sales + App Promotion).
  const availableObjectives = useMemo(() => {
    const set = new Set()
    RULES.forEach((r) => (r.objectives || []).forEach((o) => set.add(o)))
    return Array.from(set)
  }, [])
  const showObjectiveFilter = availableObjectives.length > 1

  const filtered = useMemo(() => {
    return RULES.map((rule, index) => ({ rule, index })).filter(
      ({ rule }) =>
        (goal === "all" || rule.goal === goal) &&
        (level === "all" || rule.level === level) &&
        (objective === "all" || (rule.objectives || []).includes(objective))
    )
  }, [goal, level, objective])

  // Active objective for the BenchmarkInput. When filter === "all", pass
  // "all" through so BenchmarkInput renders the union of every input set.
  // When a specific objective is filtered, render that set only.
  const activeObjective = useMemo(() => {
    if (objective !== "all") return objective
    return "all"
  }, [objective])

  const counts = useMemo(() => {
    const goalCounts = {}
    const levelCounts = {}
    const objCounts = {}
    RULES.forEach((r) => {
      goalCounts[r.goal] = (goalCounts[r.goal] || 0) + 1
      levelCounts[r.level] = (levelCounts[r.level] || 0) + 1
      ;(r.objectives || []).forEach((o) => {
        objCounts[o] = (objCounts[o] || 0) + 1
      })
    })
    goalCounts.all = RULES.length
    levelCounts.all = RULES.length
    objCounts.all = RULES.length
    return { goal: goalCounts, level: levelCounts, objective: objCounts }
  }, [])

  const handleToggle = (id) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  const handleCopy = async (rule) => {
    try {
      await navigator.clipboard.writeText(
        buildCopyText(rule, bench, bench.mode)
      )
      setCopiedId(rule.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      setCopiedId(null)
    }
  }

  const isFiltered =
    goal !== "all" || level !== "all" || objective !== "all"

  return (
    <div className={styles.library}>
      {/* Sentinel placed BEFORE the cluster — its visibility tells us whether
          the cluster is sticking to the viewport top. */}
      <div ref={topSentinelRef} aria-hidden="true" style={{ height: 1 }} />

      <div
        ref={clusterRef}
        className={`${benchStyles.stickyCluster} ${
          isStuck ? benchStyles.stickyClusterStuck : ""
        } ${isCompact ? benchStyles.stickyClusterCompact : ""}`}
      >
        {isCompact ? (
          <button
            type="button"
            className={benchStyles.compactBar}
            onClick={() => setUserExpanded(true)}
            aria-expanded="false"
            aria-controls="benchmark-cluster-content"
            aria-label="Adjust thresholds — type your benchmarks to recalculate every rule"
          >
            <span className={benchStyles.compactCopy}>
              <span className={benchStyles.compactEyebrow}>
                Adjust thresholds
              </span>
              <span className={benchStyles.compactDescription}>
                Type your benchmarks — every rule recalculates live.
              </span>
            </span>
            <span className={benchStyles.compactToggle}>
              Adjust
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4l2.5 2.5L7.5 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        ) : (
          <div
            id="benchmark-cluster-content"
            className={benchStyles.clusterContent}
          >
            {isStuck && (
              <button
                type="button"
                className={benchStyles.collapseBtn}
                onClick={() => setUserExpanded(false)}
                aria-expanded="true"
                aria-controls="benchmark-cluster-content"
              >
                Collapse
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 6l2.5-2.5L7.5 6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <BenchmarkInput
              state={bench}
              onChange={setBench}
              activeObjective={activeObjective}
            />

            <div className={styles.filters}>
          <div className={styles.filterColumn}>
            <span className={styles.filterTag}>
              <span className={styles.filterDot} />
              Filter by goal
            </span>
            <div className={styles.chipRow}>
              {RULE_GOALS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGoal(g.id)}
                  className={`${styles.filterChip} ${
                    goal === g.id ? styles.filterChipActive : ""
                  } ${
                    (counts.goal[g.id] || 0) === 0
                      ? styles.filterChipEmpty
                      : ""
                  }`}
                  disabled={(counts.goal[g.id] || 0) === 0}
                >
                  <span>{g.label}</span>
                  <span className={styles.chipCount}>
                    {counts.goal[g.id] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterColumn}>
            <span className={styles.filterTag}>
              <span className={styles.filterDot} />
              Filter by level
            </span>
            <div className={styles.chipRow}>
              {RULE_LEVELS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLevel(l.id)}
                  className={`${styles.filterChip} ${
                    level === l.id ? styles.filterChipActive : ""
                  } ${
                    (counts.level[l.id] || 0) === 0
                      ? styles.filterChipEmpty
                      : ""
                  }`}
                  disabled={(counts.level[l.id] || 0) === 0}
                >
                  <span>{l.label}</span>
                  <span className={styles.chipCount}>
                    {counts.level[l.id] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {showObjectiveFilter && (
            <div className={styles.filterColumn}>
              <span className={styles.filterTag}>
                <span className={styles.filterDot} />
                Filter by objective
              </span>
              <div className={styles.chipRow}>
                {RULE_OBJECTIVES.filter(
                  (o) =>
                    o.id === "all" || availableObjectives.includes(o.id)
                ).map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setObjective(o.id)}
                    className={`${styles.filterChip} ${
                      objective === o.id ? styles.filterChipActive : ""
                    }`}
                  >
                    <span>{o.label}</span>
                    <span className={styles.chipCount}>
                      {counts.objective[o.id] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.resultMeta}>
        <span className={styles.resultMetaText}>
          Showing <strong>{filtered.length}</strong> of {RULES.length} rules
        </span>
        {isFiltered && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={() => {
              setGoal("all")
              setLevel("all")
              setObjective("all")
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {filtered.map(({ rule, index }) => (
          <RuleCard
            key={rule.id}
            rule={rule}
            index={index}
            expanded={expandedId === rule.id}
            onToggle={handleToggle}
            onCopy={handleCopy}
            copied={copiedId === rule.id}
            inputs={bench}
            mode={bench.mode}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.emptyEyebrow}>No matches</span>
          <p>
            No rules match this filter combination. Try clearing one filter
            or switching the goal.
          </p>
          <button
            type="button"
            className={styles.emptyBtn}
            onClick={() => {
              setGoal("all")
              setLevel("all")
              setObjective("all")
            }}
          >
            Clear filters
          </button>
        </div>
      )}

    </div>
  )
}
