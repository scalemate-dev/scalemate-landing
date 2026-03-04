import Container from "@/components/elements/Container/Container"
import { IconX, IconMinus, IconCheck } from "@tabler/icons-react"
import styles from "./SolutionSection.module.scss"

const rows = [
  {
    feature: "Works overnight & weekends",
    manual: { text: null, type: "no" },
    native: { text: "Limited", type: "partial" },
    scalemate: { text: "24/7", type: "yes" },
  },
  {
    feature: "All Meta accounts in one place",
    manual: { text: null, type: "no" },
    native: { text: "Per-account only", type: "no" },
    scalemate: { text: "One dashboard", type: "yes" },
  },
  {
    feature: "Budget scaling with rollback",
    manual: { text: null, type: "no" },
    native: { text: null, type: "no" },
    scalemate: { text: "Auto-reverts on drop", type: "yes" },
  },
  {
    feature: "Auto-execute + alert-only modes",
    manual: { text: null, type: "no" },
    native: { text: null, type: "no" },
    scalemate: { text: "Run both per rule", type: "yes" },
  },
  {
    feature: "Scales with campaign volume",
    manual: { text: "Breaks at 30+", type: "no" },
    native: { text: "Basic", type: "partial" },
    scalemate: { text: "30 or 300", type: "yes" },
  },
]

function CellContent({ cell }) {
  if (cell.type === "no" && !cell.text) {
    return <IconX size={18} className={styles.iconNo} />
  }
  if (cell.type === "no" && cell.text) {
    return (
      <span className={styles.cellNo}>
        <IconX size={14} className={styles.iconNo} />
        {cell.text}
      </span>
    )
  }
  if (cell.type === "partial") {
    return (
      <span className={styles.cellPartial}>
        <IconMinus size={14} className={styles.iconPartial} />
        {cell.text}
      </span>
    )
  }
  return (
    <span className={styles.cellYes}>
      <IconCheck size={14} className={styles.iconYes} />
      {cell.text}
    </span>
  )
}

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Solution</span>
          <h2>
            Why Scalemate&apos;s Automation Rules
          </h2>
          <p className={styles.subtitle}>
            Instead of a person monitoring → deciding → acting, a rule handles
            the full loop. Define the logic once. Execution runs on its own.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}></th>
                <th className={styles.colHeader}>Manual optimization</th>
                <th className={styles.colHeader}>Platform native rules</th>
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
                    <CellContent cell={row.native} />
                  </td>
                  <td className={`${styles.cell} ${styles.cellHighlight}`}>
                    <CellContent cell={row.scalemate} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
