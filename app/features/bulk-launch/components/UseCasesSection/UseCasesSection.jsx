import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import {
  IconLanguage,
  IconFlask,
  IconTrendingUp,
  IconCalendarEvent,
} from "@tabler/icons-react"
import styles from "./UseCasesSection.module.scss"

const useCases = [
  {
    icon: IconLanguage,
    title: "Multi-language campaign rollouts",
    description: (
      <>
        5 concepts &times; 15 languages &times; 3 formats = 225 ad sets.
        Manually, a full week. Through Scalemate, one session. The{" "}
        mass ad creation software handles the matrix; the buyer
        handles strategy.
      </>
    ),
    link: { label: "Read more: Bulk Ad Launch", href: "/use-cases/bulk-ad-launch" },
  },
  {
    icon: IconFlask,
    title: "Weekly creative testing cycles",
    description:
      "New creatives every week. With Scalemate, buyers create multiple ads at once on Meta for every test batch. Google Drive to live campaigns in minutes. The testing pipeline moves faster than creative burnout.",
  },
  {
    icon: IconTrendingUp,
    title: "Scaling winners fast",
    description: (
      <>
        Winners fatigue fast. Templates preserve the winning strategy. The buyer
        scales reach in clicks, not hours. More ad sets, new audiences, new
        GEOs. All before the revenue window closes.
      </>
    ),
    link: { label: "Read more: Scale Ad Campaigns Faster", href: "/use-cases/scale-ad-campaigns-faster" },
  },
  {
    icon: IconCalendarEvent,
    title: "Seasonal campaign pushes",
    description:
      "Black Friday, holidays, seasonal events. Dozens of campaigns with a hard deadline. The bulk ad deployment platform removes the speed constraint. Teams launch multiple ads automatically across all markets without overtime.",
  },
]

export default function UseCasesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Use Cases</span>
          <h2>Where Teams Use Bulk Ad Creation</h2>
          <p className={styles.subtitle}>
            Four ways teams use the bulk ad creation tool to
            launch faster and test more:
          </p>
        </div>

        <div className={styles.grid}>
          {useCases.map((uc, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <uc.icon size={24} />
              </div>
              <h3>{uc.title}</h3>
              <p>{uc.description}</p>
              {uc.link && (
                <Link href={uc.link.href} className={styles.cardLink}>
                  {uc.link.label} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
