import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import {
  IconChartBar,
  IconBuildingSkyscraper,
  IconArrowRight,
} from "@tabler/icons-react"
import styles from "./AudienceSection.module.scss"

const audiences = [
  {
    icon: IconChartBar,
    role: "UA Managers & Media Buyers",
    description:
      "Performance teams running high-volume Meta campaigns absorb the bulk of operational drag. Every additional campaign, language, or creative concept multiplies the manual workload. For buyers managing dozens of active campaigns, a setup that lets them create ads in bulk — without touching each ad set individually — removes the single biggest time drain in their week.",
    accent: "#F63D68",
    links: [
      {
        label: "Scalemate for Media Buyers",
        href: "/solutions/media-buyers",
      },
      {
        label: "Bulk Launch Feature",
        href: "/features/bulk-launch",
      },
    ],
  },
  {
    icon: IconBuildingSkyscraper,
    role: "Founders & Marketing Leaders",
    description:
      "From the leadership perspective, the question isn't about individual ad sets. It's about whether the team can increase campaign output without increasing headcount. Every hour a UA manager spends on manual assembly is an hour not spent on strategy, creative direction, or performance analysis. Scalemate compresses time-to-launch, reduces operational risk from human error, and makes scaling acquisition realistic without proportional team growth.",
    accent: "#8B5CF6",
    links: [
      {
        label: "Automated Creative Upload for Meta",
        href: "/use-cases/automated-creative-upload-meta",
      },
      {
        label: "Scale Ad Campaigns Faster",
        href: "/use-cases/scale-ad-campaigns-faster",
      },
    ],
  },
]

export default function AudienceSection() {
  return (
    <section className={styles.audience}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Who Bulk Ad Launch Is For</h2>
          <p>
            Built for teams that need to move faster without adding headcount
          </p>
        </div>
        <div className={styles.grid}>
          {audiences.map((item, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ "--accent": item.accent }}
              >
                <item.icon size={28} />
              </div>
              <div className={styles.text}>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                <div className={styles.links}>
                  {item.links.map((link, i) => (
                    <Link key={i} href={link.href} className={styles.link}>
                      {link.label}
                      <IconArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
