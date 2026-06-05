"use client"

import { useMemo, useState } from "react"
import {
  IconLayoutGrid,
  IconTargetArrow,
  IconChartBar,
  IconScissors,
  IconDna2,
  IconArrowsLeftRight,
  IconDeviceMobile,
  IconChevronDown,
} from "@tabler/icons-react"
import { METHODS, GOALS, PLATFORMS, CATALOG } from "./methods-data"
import styles from "./LibraryClient.module.scss"

const GOAL_ICONS = {
  "find-winners": IconTargetArrow,
  validate: IconChartBar,
  "kill-losers": IconScissors,
  andromeda: IconDna2,
  controlled: IconArrowsLeftRight,
  "mobile-ua": IconDeviceMobile,
}

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
              <span className={styles.flowFramedGroupHeader}>
                {step.framedGroup.header}
              </span>
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
                    {g.s && (
                      <span className={styles.flowGroupChipS}>{g.s}</span>
                    )}
                  </div>
                ))}
              </div>
              {step.note && (
                <span className={styles.flowNote}>{step.note}</span>
              )}
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
  const GoalIcon = goal ? GOAL_ICONS[goal.id] : null
  const platforms = method.platform
    .map((p) => PLATFORMS.find((pl) => pl.id === p)?.label)
    .filter(Boolean)
  // Gated methods (e.g. Conversion Lift) run through Meta, not Scalemate —
  // don't claim full automation on those.
  const ctaLabel = method.cardCaveat
    ? "Set it up in Scalemate"
    : "Automate this method"

  return (
    <article id={method.id} className={styles.catalogCard}>
      <div className={styles.catalogMain}>
        <div className={styles.catalogHead}>
          <span className={styles.catalogGoal}>
            {GoalIcon && <GoalIcon size={13} stroke={1.8} />}
            {goal?.label}
          </span>
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

        {method.cardCaveat && (
          <p className={styles.catalogCaveat}>{method.cardCaveat}</p>
        )}

        <details className={styles.playbook}>
          <summary className={styles.playbookSummary}>
            <span>Full playbook — setup, thresholds &amp; common mistake</span>
            <IconChevronDown
              size={15}
              stroke={2}
              className={styles.playbookChevron}
            />
          </summary>
          <div className={styles.playbookBody}>
            {method.bestFor && (
              <div className={styles.playbookRow}>
                <span className={styles.playbookLabel}>Best for</span>
                <p className={styles.playbookText}>{method.bestFor}</p>
              </div>
            )}
            {method.method?.length > 0 && (
              <div className={styles.playbookRow}>
                <span className={styles.playbookLabel}>Setup</span>
                <ol className={styles.playbookSteps}>
                  {method.method.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            )}
            {method.pros && (
              <div className={styles.playbookRow}>
                <span className={styles.playbookLabel}>Strengths</span>
                <p className={styles.playbookText}>{method.pros}</p>
              </div>
            )}
            {method.cons && (
              <div className={styles.playbookRow}>
                <span className={styles.playbookLabel}>Trade-offs</span>
                <p className={styles.playbookText}>{method.cons}</p>
              </div>
            )}
            {method.pitfall && (
              <div className={styles.playbookRow}>
                <span
                  className={`${styles.playbookLabel} ${styles.playbookLabelWarn}`}
                >
                  Common mistake
                </span>
                <p className={styles.playbookText}>{method.pitfall}</p>
              </div>
            )}
            {method.automation?.length > 0 && (
              <div className={styles.playbookRow}>
                <span className={styles.playbookLabel}>
                  On autopilot with Scalemate
                </span>
                <ol className={styles.playbookSteps}>
                  {method.automation.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </details>

        <div className={styles.statRow}>
          <div className={styles.stat}>
            <span className={styles.statK}>Budget</span>
            <span className={styles.statV}>
              {method.budgetLabel ?? BUDGET_LABEL[method.budgetLevel]}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statK}>Duration</span>
            <span className={styles.statV}>{cat?.duration}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statK}>Creatives</span>
            <span className={styles.statV}>{cat?.creos}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statK}>Setup</span>
            <span className={styles.statV}>{cat?.setup}</span>
          </div>
        </div>

        <div className={styles.catalogFoot}>
          <a
            className={styles.buildFlowCta}
            href={`https://app.scalemate.co/?method=${method.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      {cat?.flow && (
        <div className={styles.flowSection}>
          <div className={styles.flowCaption}>{cat.flow.caption}</div>
          <MiniFlow flow={cat.flow} />
        </div>
      )}
    </article>
  )
}

export default function LibraryClient() {
  const [activeGoal, setActiveGoal] = useState("all")

  const filtered = useMemo(
    () => METHODS.filter((m) => activeGoal === "all" || m.goal === activeGoal),
    [activeGoal],
  )

  const counts = useMemo(() => {
    const c = { all: METHODS.length }
    GOALS.forEach((g) => {
      c[g.id] = METHODS.filter((m) => m.goal === g.id).length
    })
    return c
  }, [])

  return (
    <div className={styles.library}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarTitle}>Filters</span>
            <span className={styles.sidebarCount}>
              <strong>{filtered.length}</strong> / {METHODS.length}
            </span>
          </div>

          <section className={styles.filterSection}>
            <ul className={styles.filterList}>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveGoal("all")}
                  className={`${styles.filterItem} ${activeGoal === "all" ? styles.filterItemActive : ""}`}
                >
                  <span className={styles.filterItemLabel}>
                    <IconLayoutGrid size={15} stroke={1.8} />
                    All methods
                  </span>
                  <span className={styles.filterItemCount}>{counts.all}</span>
                </button>
              </li>
              {GOALS.map((g) => {
                const GoalIcon = GOAL_ICONS[g.id]
                return (
                  <li key={g.id}>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveGoal(activeGoal === g.id ? "all" : g.id)
                      }
                      className={`${styles.filterItem} ${activeGoal === g.id ? styles.filterItemActive : ""}`}
                    >
                      <span className={styles.filterItemLabel}>
                        {GoalIcon && <GoalIcon size={15} stroke={1.8} />}
                        {g.label}
                      </span>
                      <span className={styles.filterItemCount}>
                        {counts[g.id]}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        </aside>

        <div className={styles.content}>
          <div className={styles.catalogGrid}>
            {filtered.length === 0 ? (
              <div className={styles.emptyState}>
                No methods match this filter. Try a different goal.
              </div>
            ) : (
              filtered.map((method) => (
                <CatalogCard key={method.id} method={method} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
