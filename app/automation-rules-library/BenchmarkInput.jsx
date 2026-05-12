"use client"

import { useEffect, useMemo, useRef } from "react"
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
      key: "d1_roas",
      label: "D1 ROAS",
      prefix: "",
      suffix: "x",
      default: 0.3,
      step: 0.05,
      min: 0.05,
      unit: "ratio",
    },
    {
      key: "d7_roas",
      label: "D7 ROAS",
      prefix: "",
      suffix: "x",
      default: 1.0,
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
    return { ...DEFAULT_STATE, ...parsed }
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

function InfoIcon() {
  return (
    <span className={styles.benchHintIcon} aria-hidden="true">
      i
    </span>
  )
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
    [activeObjective]
  )
  const isProductionMode = state.mode === "production"

  // Soft-required: when ALL visible inputs match their defaults, light up
  // the personalization cues. Once the user changes anything, cues fade.
  const isAllDefault = useMemo(() => {
    if (isProductionMode) return false
    return groups.every((g) =>
      g.fields.every((f) => Number(state[f.key]) === Number(f.default))
    )
  }, [groups, state, isProductionMode])

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

  const toggleMode = () => {
    onChange({
      ...state,
      mode: isProductionMode ? "personalized" : "production",
    })
  }

  const renderField = (field) => {
    const value = state[field.key]
    const isDefault =
      !isProductionMode && Number(value) === Number(field.default)

    return (
      <label
        key={field.key}
        className={`${styles.benchField} ${
          isDefault ? styles.benchFieldDefault : ""
        }`}
      >
        <span className={styles.benchLabel}>
          {field.label}
          {isDefault && (
            <span className={styles.benchDefaultTag}>&middot; default</span>
          )}
        </span>
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

  return (
    <div
      className={`${styles.bench} ${
        isProductionMode ? styles.benchDisabled : ""
      } ${isAllDefault ? styles.benchAllDefault : ""}`}
    >
      <div className={styles.benchHeader}>
        <span className={styles.benchEyebrow}>
          <span
            className={`${styles.benchEyebrowDash} ${
              isAllDefault ? styles.benchEyebrowDashIdle : ""
            }`}
          />
          Adjust thresholds
        </span>
        <button
          type="button"
          className={`${styles.benchToggle} ${
            isProductionMode ? styles.benchToggleActive : ""
          }`}
          onClick={toggleMode}
          aria-pressed={isProductionMode}
        >
          <span className={styles.benchToggleDot} />
          {isProductionMode
            ? "Showing production examples"
            : "Use production examples"}
        </button>
      </div>

      {groups.length > 1 ? (
        <div className={styles.benchGroups}>
          {groups.map((g) => (
            <div key={g.key} className={styles.benchGroup}>
              <span className={styles.benchGroupLabel}>{g.label}</span>
              <div className={styles.benchInputs}>
                {g.fields.map(renderField)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.benchInputs}>
          {groups[0].fields.map(renderField)}
        </div>
      )}

      <p
        className={`${styles.benchHint} ${
          isAllDefault ? styles.benchHintProminent : ""
        }`}
      >
        <InfoIcon />
        {isProductionMode ? (
          <>
            Showing production thresholds — real numbers from live Meta
            accounts. Toggle off to recalculate against your own breakeven.
          </>
        ) : isAllDefault ? (
          <>
            Showing defaults — type your numbers above to recalculate every
            threshold. <strong>Saved locally.</strong>
          </>
        ) : (
          <>
            Thresholds recalculate from your inputs. Production examples below
            each value show what real accounts ran.{" "}
            <strong>Saved locally.</strong>
          </>
        )}
      </p>
    </div>
  )
}
