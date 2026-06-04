"use client"

import { useMemo, useState } from "react"
import {
  METHODS,
  GOALS,
  PLATFORMS,
  ANDROMEDA_LABELS,
  CATALOG,
} from "./methods-data"
import styles from "./LibraryClient.module.scss"

const BUDGET_LABEL = {
  low: "<$10K/mo",
  medium: "$10–40K/mo",
  high: "$40K+/mo",
}

function FlowNode({ l, s, q, t }) {
  const cls = [
    styles.flowNode,
    q ? styles.flowNodeGate : "",
    t ? styles[`flowNode_${t}`] : "",
  ]
    .filter(Boolean)
    .join(" ")
  const mark = t === "win" ? "★ " : t === "kill" ? "✕ " : ""
  return (
    <div className={cls}>
      <span className={styles.flowNodeL}>
        {mark}
        {l}
      </span>
      {s && <span className={styles.flowNodeS}>{s}</span>}
    </div>
  )
}

function MiniFlow({ flow }) {
  return (
    <div className={styles.flow}>
      {flow.steps.map((step, i) => {
        if (step.framedGroup) {
          return (
            <div key={i} className={styles.flowFramedGroup}>
              <span className={styles.flowFramedGroupHeader}>{step.framedGroup.header}</span>
              <div className={styles.flowFramedGroupItems}>
                {step.framedGroup.items.map((g, j) => (
                  <div key={j} className={styles.flowFramedGroupRow}>
                    <span className={styles.flowFramedGroupChip}>{g.l}</span>
                    <span className={styles.flowFramedGroupBar} />
                  </div>
                ))}
              </div>
            </div>
          )
        }
        if (step.group) {
          return (
            <div key={i} className={styles.flowGroupRow}>
              <div className={styles.flowGroup}>
                {step.group.map((g, j) => (
                  <div key={j} className={styles.flowGroupChip}>
                    <span className={styles.flowGroupChipL}>{g.l}</span>
                    {g.s && <span className={styles.flowGroupChipS}>{g.s}</span>}
                  </div>
                ))}
              </div>
              {step.note && <span className={styles.flowNote}>{step.note}</span>}
            </div>
          )
        }
        if (step.branch) {
          return (
            <div key={i} className={styles.flowBranch}>
              {step.branch.map((b, j) => (
                <FlowNode key={j} {...b} />
              ))}
            </div>
          )
        }
        return <FlowNode key={i} {...step} />
      })}
    </div>
  )
}

function CatalogCard({ method }) {
  const cat = CATALOG[method.id]
  const goal = GOALS.find((g) => g.id === method.goal)
  const andromeda = ANDROMEDA_LABELS[method.andromedaCompat]
  const platforms = method.platform
    .map((p) => PLATFORMS.find((pl) => pl.id === p)?.label)
    .filter(Boolean)

  return (
    <article className={styles.catalogCard}>
      <div className={styles.catalogHead}>
        <div className={styles.catalogHeadLeft}>
          <span className={styles.catalogNo}>
            METHOD {String(method.number).padStart(2, "0")}
          </span>
          <span className={styles.catalogGoal}>{goal?.label}</span>
        </div>
        <div className={styles.catalogTags}>
          {platforms.map((p) => (
            <span key={p} className={styles.chip}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <h3 className={styles.catalogTitle}>{method.name}</h3>
      <p className={styles.catalogSummary}>{method.summary}</p>

      <div className={styles.statRow}>
        <div className={styles.stat}>
          <span className={styles.statK}>Budget</span>
          <span className={styles.statV}>{method.budgetLabel ?? BUDGET_LABEL[method.budgetLevel]}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statK}>Duration</span>
          <span className={styles.statV}>{cat?.duration}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statK}>Creos</span>
          <span className={styles.statV}>{cat?.creos}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statK}>Setup</span>
          <span className={styles.statV}>{cat?.setup}</span>
        </div>
      </div>

      {cat?.flow && (
        <div className={styles.flowSection}>
          <div className={styles.flowHead}>↳ How it tests creatives</div>
          <div className={styles.flowCaption}>{cat.flow.caption}</div>
          <MiniFlow flow={cat.flow} />
        </div>
      )}

      <div className={styles.catalogFoot}>
        <span
          className={`${styles.chip} ${styles[`chipAndromeda${andromeda.color}`]}`}
        >
          Andromeda {andromeda.emoji} {andromeda.label}
        </span>
        <a
          className={styles.buildFlowCta}
          href={`https://app.scalemate.co/?method=${method.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Build this flow in Scalemate →
        </a>
      </div>
    </article>
  )
}

export default function LibraryClient() {
  const [activeGoal, setActiveGoal] = useState("all")

  const filtered = useMemo(
    () => METHODS.filter((m) => activeGoal === "all" || m.goal === activeGoal),
    [activeGoal],
  )

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
              data-count={METHODS.length}
            >
              All methods
            </button>
            {GOALS.map((g) => {
              const count = METHODS.filter((m) => m.goal === g.id).length
              return (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.filterChip} ${activeGoal === g.id ? styles.filterChipActive : ""}`}
                  onClick={() => setActiveGoal(g.id)}
                  data-count={count}
                >
                  {g.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className={styles.filterActions}>
          <span className={styles.resultsCount}>
            {filtered.length} method{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <div className={styles.catalogGrid}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            No methods match this filter. Try a different goal.
          </div>
        ) : (
          filtered.map((method) => <CatalogCard key={method.id} method={method} />)
        )}
      </div>
    </div>
  )
}
