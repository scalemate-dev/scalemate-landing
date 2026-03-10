import Container from "@/components/elements/Container/Container"
import { IconCheck } from "@tabler/icons-react"
import styles from "./SolutionSection.module.scss"

const rows = [
  {
    feature: "Multi-concept \u00d7 multi-language",
    manual: { text: "One by one", type: "no" },
    scripts: { text: "Partial, breaks often", type: "partial" },
    scalemate: { text: "Full matrix", type: "yes" },
  },
  {
    feature: "Template-based launches",
    manual: { text: null, type: "no" },
    scripts: { text: "Custom, hard to maintain", type: "partial" },
    scalemate: { text: "Reusable templates", type: "yes" },
  },
  {
    feature: "Cross-platform (Meta + TikTok)",
    manual: { text: "Separate setups", type: "no" },
    scripts: { text: "Separate scripts per platform", type: "no" },
    scalemate: { text: "One workflow", type: "yes" },
  },
  {
    feature: "Google Drive integration",
    manual: { text: null, type: "no" },
    scripts: { text: "Requires custom dev", type: "partial" },
    scalemate: { text: "Direct deploy", type: "yes" },
  },
  {
    feature: "Auto-naming and structure",
    manual: { text: null, type: "no" },
    scripts: { text: "If someone built it", type: "partial" },
    scalemate: { text: "Consistent naming", type: "yes" },
  },
  {
    feature: "API changes handling",
    manual: { text: "N/A", type: "no" },
    scripts: { text: "Breaks on every API update", type: "no" },
    scalemate: { text: "Always up to date", type: "yes" },
  },
  {
    feature: "Time per 100 ad sets",
    manual: { text: "Days", type: "no" },
    scripts: { text: "Hours + maintenance", type: "partial" },
    scalemate: { text: "Minutes", type: "yes" },
  },
]

function CellContent({ cell }) {
  if (cell.type === "yes") {
    return (
      <span className={styles.cellYes}>
        <IconCheck size={15} strokeWidth={2.5} className={styles.iconYes} />
        {cell.text}
      </span>
    )
  }
  if (!cell.text) {
    return <span className={styles.cellDash}>&mdash;</span>
  }
  return (
    <span className={styles.cellNeutral}>{cell.text}</span>
  )
}

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Solution</span>
          <h2>Why Scalemate&apos;s Bulk Campaign Builder</h2>
          <p className={styles.subtitle}>
            The bulk campaign builder treats campaign structure
            as a reusable template. Define targeting, bids, budgets, naming
            once. Deploy across any number of creatives, languages, and GEOs in
            one action.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}></th>
                <th className={styles.colHeader}>Manual setup</th>
                <th className={styles.colHeader}>In-house scripts</th>
                <th className={`${styles.colHeader} ${styles.colHighlight}`}>
                  Scalemate
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td className={styles.cell}>
                    <CellContent cell={row.manual} />
                  </td>
                  <td className={styles.cell}>
                    <CellContent cell={row.scripts} />
                  </td>
                  <td className={`${styles.cell} ${styles.cellHighlight}`}>
                    <CellContent cell={row.scalemate} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.tableFootnote}>
          A bulk ad deployment platform that keeps existing
          campaign structures intact. The system handles the multiplication.
        </p>
      </Container>
    </section>
  )
}
