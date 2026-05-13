"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./BenchmarkInput.module.scss"

const STORAGE_KEY = "scalemate-benchmark-inputs"

// Input sets keyed by objective. The bar swaps fields when the active
// objective changes. When `activeObjective === "all"`, both sets are rendered
// as grouped subsections so the user sees every metric they could tune.
export const INPUT_SETS = {
  sales: [
    {
      key: "cpa",
      label: "Breakeven CPA",
      prefix: "$",
      suffix: "",
      default: 50,
      step: 5,
      min: 1,
      unit: "currency",
    },
    {
      key: "roas",
      label: "Target ROAS",
      prefix: "",
      suffix: "x",
      default: 2.0,
      step: 0.1,
      min: 0.1,
      unit: "ratio",
    },
    {
      key: "cpc",
      label: "CPC ceiling",
      prefix: "$",
      suffix: "",
      default: 1.5,
      step: 0.1,
      min: 0.1,
      unit: "currency",
    },
    {
      key: "cpm",
      label: "CPM benchmark",
      prefix: "$",
      suffix: "",
      default: 20,
      step: 0.5,
      min: 0.5,
      unit: "currency",
    },
  ],
  "app-promotion": [
    {
      key: "cpi",
      label: "Target CPI",
      prefix: "$",
      suffix: "",
      default: 5,
      step: 0.5,
      min: 0.1,
      unit: "currency",
    },
    {
      key: "roas",
      label: "Target ROAS",
      prefix: "",
      suffix: "x",
      default: 2.0,
      step: 0.1,
      min: 0.1,
      unit: "ratio",
    },
    {
      key: "ipm",
      label: "IPM target",
      prefix: "",
      suffix: "",
      default: 5,
      step: 0.5,
      min: 0.5,
      unit: "ratio",
    },
    {
      key: "cpm",
      label: "CPM benchmark",
      prefix: "$",
      suffix: "",
      default: 20,
      step: 0.5,
      min: 0.5,
      unit: "currency",
    },
  ],
}

const OBJECTIVE_LABELS = {
  sales: "Sales benchmarks",
  "app-promotion": "App Promotion benchmarks",
}

// Build the canonical default inputs object (covers all known keys so the
// recalc logic never hits an undefined input).
export const ALL_DEFAULTS = Object.values(INPUT_SETS).reduce((acc, set) => {
  set.forEach((f) => {
    acc[f.key] = f.default
  })
  return acc
}, {})

export const DEFAULT_STATE = {
  ...ALL_DEFAULTS,
  mode: "personalized",
}

// Read once on mount — guarded for SSR.
export function readBenchmarkInputs() {
  if (typeof window === "undefined") return DEFAULT_STATE
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    const parsed = JSON.parse(raw)
    // Always force personalized mode — the production-mode toggle was
    // removed, so persisted "production" values would otherwise trap users.
    return { ...DEFAULT_STATE, ...parsed, mode: "personalized" }
  } catch {
    return DEFAULT_STATE
  }
}

function writeBenchmarkInputs(state) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* ignore quota / privacy modes */
  }
}

// Resolve the visible field groups based on activeObjective.
// "all" → both groups; specific → that single group.
function getVisibleGroups(activeObjective) {
  if (activeObjective === "all") {
    return [
      { key: "sales", label: OBJECTIVE_LABELS.sales, fields: INPUT_SETS.sales },
      {
        key: "app-promotion",
        label: OBJECTIVE_LABELS["app-promotion"],
        fields: INPUT_SETS["app-promotion"],
      },
    ]
  }
  const fields = INPUT_SETS[activeObjective] || INPUT_SETS.sales
  return [{ key: activeObjective, label: null, fields }]
}

export default function BenchmarkInput({
  state,
  onChange,
  activeObjective = "sales",
}) {
  const groups = useMemo(
    () => getVisibleGroups(activeObjective),
    [activeObjective],
  )

  // Clear button activates only when at least one visible field differs
  // from its default — saves a click on a no-op.
  const isAllDefault = useMemo(
    () =>
      groups.every((g) =>
        g.fields.every((f) => Number(state[f.key]) === Number(f.default)),
      ),
    [groups, state],
  )

  // Persist on every change.
  const firstRun = useRef(true)
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    writeBenchmarkInputs(state)
  }, [state])

  const handleField = (key, raw) => {
    if (raw === "") {
      onChange({ ...state, [key]: "" })
      return
    }
    const num = parseFloat(raw)
    if (Number.isNaN(num)) return
    onChange({ ...state, [key]: num })
  }

  const handleBlur = (key, fieldDef) => {
    if (state[key] === "" || state[key] == null) {
      onChange({ ...state, [key]: fieldDef.default })
    }
  }

  const handleClear = () => {
    if (isAllDefault) return
    onChange({ ...ALL_DEFAULTS, mode: "personalized" })
  }

  const renderField = (field) => {
    const value = state[field.key]

    return (
      <label key={field.key} className={styles.benchField}>
        <span className={styles.benchLabel}>{field.label}</span>
        <span className={styles.benchInputWrap}>
          {field.prefix && (
            <span className={styles.benchPrefix}>{field.prefix}</span>
          )}
          <input
            className={styles.benchInput}
            type="number"
            inputMode="decimal"
            value={value ?? ""}
            step={field.step}
            min={field.min}
            onChange={(e) => handleField(field.key, e.target.value)}
            onBlur={() => handleBlur(field.key, field)}
            aria-label={field.label}
          />
          {field.suffix && (
            <span className={styles.benchSuffix}>{field.suffix}</span>
          )}
        </span>
      </label>
    )
  }

  // When both objective groups are visible (activeObjective === "all"),
  // keep the secondary group (app-promotion) collapsed behind a disclosure
  // so the panel doesn't dump 10 inputs on the user at once.
  const [secondaryOpen, setSecondaryOpen] = useState(false)
  const primaryGroup = groups[0]
  const secondaryGroup = groups[1]

  return (
    <div className={styles.bench}>
      <span className={styles.benchEyebrow}>Configure thresholds</span>

      <div className={styles.benchInputs}>
        {primaryGroup.fields.map(renderField)}
      </div>

      {secondaryGroup && (
        <div className={styles.benchSecondary}>
          <button
            type="button"
            className={styles.benchDisclosure}
            onClick={() => setSecondaryOpen((v) => !v)}
            aria-expanded={secondaryOpen}
          >
            <span>App promotion benchmarks</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
              style={{
                transform: secondaryOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              <path
                d="M2.5 4l2.5 2.5L7.5 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {secondaryOpen && (
            <div className={styles.benchInputs}>
              {secondaryGroup.fields.map(renderField)}
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className={styles.benchClear}
        onClick={handleClear}
        disabled={isAllDefault}
      >
        Clear thresholds
      </button>
    </div>
  )
}
