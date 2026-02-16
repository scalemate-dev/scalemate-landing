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
    role: "Performance Marketing Managers & Media Buyers",
    description:
      "High-volume Meta campaigns multiply operational drag with every new concept. A bulk facebook ad creation tool that lets buyers create ads in bulk meta \u2014 without touching each ad set \u2014 removes the biggest time drain. Finally, scaling ads without hiring buyers becomes realistic.",
    accent: "#F97316",
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
      "Every hour on manual assembly is time away from strategy. A bulk ad launch tool like Scalemate compresses time-to-launch and makes scaling realistic without adding headcount.",
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
            Built for teams where campaign volume outpaces capacity — whether
            the bottleneck is with buyers executing campaigns or leadership
            planning growth.
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
