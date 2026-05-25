"use client"

import { useMemo, useState } from "react"
import {
  METHODS,
  GOALS,
  PLATFORMS,
  BUDGET_LEVELS,
  ANDROMEDA_LABELS,
} from "./methods-data"
import styles from "./LibraryClient.module.scss"

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0)",
        transition: "transform 0.2s",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function MethodCard({ method, expanded, onToggle }) {
  const goal = GOALS.find((g) => g.id === method.goal)
  const andromeda = ANDROMEDA_LABELS[method.andromedaCompat]
  const budget = BUDGET_LEVELS.find((b) => b.id === method.budgetLevel)
  const platforms = method.platform
    .map((p) => PLATFORMS.find((pl) => pl.id === p)?.label)
    .filter(Boolean)
    .join(" + ")

  return (
    <div
      className={`${styles.card} ${expanded ? styles.cardExpanded : ""}`}
    >
      <button
        type="button"
        className={styles.cardHeader}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <div className={styles.cardHeaderLeft}>
          <span className={styles.cardNumber}>{String(method.number).padStart(2, "0")}</span>
          <div className={styles.cardTitleBlock}>
            <h3 className={styles.cardTitle}>{method.name}</h3>
            <p className={styles.cardSummary}>{method.summary}</p>
          </div>
        </div>
        <div className={styles.cardHeaderRight}>
          <ChevronIcon open={expanded} />
        </div>
      </button>

      <div className={styles.cardChips}>
        <span className={`${styles.chip} ${styles.chipGoal}`}>{goal?.label}</span>
        <span className={styles.chip}>{platforms}</span>
        <span className={styles.chip}>{budget?.label}</span>
        <span
          className={`${styles.chip} ${styles[`chipAndromeda${andromeda.color}`]}`}
          title={`Andromeda compatibility: ${andromeda.label}`}
        >
          Andromeda {andromeda.emoji} {andromeda.label}
        </span>
      </div>

      {expanded && (
        <div className={styles.cardDetails}>
          {method.accessCaveat && (
            <div className={styles.caveat}>
              <strong>⚠️ Access caveat:</strong> {method.accessCaveat}
            </div>
          )}

          <div className={styles.detailSection}>
            <h4>Best for</h4>
            <p>{method.bestFor}</p>
          </div>

          <div className={styles.detailSection}>
            <h4>Method</h4>
            <ol>
              {method.method.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className={styles.detailSplit}>
            <div className={styles.detailSection}>
              <h4>Pros</h4>
              <p>{method.pros}</p>
            </div>
            <div className={styles.detailSection}>
              <h4>Cons</h4>
              <p>{method.cons}</p>
            </div>
          </div>

          <div className={styles.detailSection}>
            <h4>⚠️ Common pitfall</h4>
            <p>{method.pitfall}</p>
          </div>

          <div className={`${styles.detailSection} ${styles.automationSection}`}>
            <h4>🤖 How to automate this flow in Scalemate</h4>
            <ol>
              {method.automation.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}

export default function LibraryClient() {
  const [activeGoal, setActiveGoal] = useState("all")
  const [activePlatform, setActivePlatform] = useState("all")
  const [activeBudget, setActiveBudget] = useState("all")
  const [expandedIds, setExpandedIds] = useState(new Set())

  const filtered = useMemo(() => {
    return METHODS.filter((m) => {
      if (activeGoal !== "all" && m.goal !== activeGoal) return false
      if (activePlatform !== "all" && !m.platform.includes(activePlatform)) return false
      if (activeBudget !== "all" && m.budgetLevel !== activeBudget) return false
      return true
    })
  }, [activeGoal, activePlatform, activeBudget])

  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const expandAll = () => {
    setExpandedIds(new Set(filtered.map((m) => m.id)))
  }

  const collapseAll = () => {
    setExpandedIds(new Set())
  }

  return (
    <div className={styles.library}>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Goal:</span>
          <div className={styles.filterChips}>
            <button
              type="button"
              className={`${styles.filterChip} ${activeGoal === "all" ? styles.filterChipActive : ""}`}
              onClick={() => setActiveGoal("all")}
            >
              All ({METHODS.length})
            </button>
            {GOALS.map((g) => {
              const count = METHODS.filter((m) => m.goal === g.id).length
              return (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.filterChip} ${activeGoal === g.id ? styles.filterChipActive : ""}`}
                  onClick={() => setActiveGoal(g.id)}
                >
                  {g.label} ({count})
                </button>
              )
            })}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Platform:</span>
          <div className={styles.filterChips}>
            <button
              type="button"
              className={`${styles.filterChip} ${activePlatform === "all" ? styles.filterChipActive : ""}`}
              onClick={() => setActivePlatform("all")}
            >
              All
            </button>
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`${styles.filterChip} ${activePlatform === p.id ? styles.filterChipActive : ""}`}
                onClick={() => setActivePlatform(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Budget:</span>
          <div className={styles.filterChips}>
            <button
              type="button"
              className={`${styles.filterChip} ${activeBudget === "all" ? styles.filterChipActive : ""}`}
              onClick={() => setActiveBudget("all")}
            >
              All
            </button>
            {BUDGET_LEVELS.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`${styles.filterChip} ${activeBudget === b.id ? styles.filterChipActive : ""}`}
                onClick={() => setActiveBudget(b.id)}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterActions}>
          <span className={styles.resultsCount}>
            {filtered.length} method{filtered.length === 1 ? "" : "s"}
          </span>
          <button
            type="button"
            className={styles.actionLink}
            onClick={expandAll}
          >
            Expand all
          </button>
          <button
            type="button"
            className={styles.actionLink}
            onClick={collapseAll}
          >
            Collapse all
          </button>
        </div>
      </div>

      <div className={styles.cardList}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            No methods match these filters. Try a different combination.
          </div>
        ) : (
          filtered.map((method) => (
            <MethodCard
              key={method.id}
              method={method}
              expanded={expandedIds.has(method.id)}
              onToggle={() => toggleExpanded(method.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}
