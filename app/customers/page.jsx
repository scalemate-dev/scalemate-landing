import Link from "next/link"
import Button from "@/components/elements/Button/Button"
import WaitList from "@/components/home/WaitList/WaitList"
import Container from "@/components/elements/Container/Container"
import Image from "next/image"
import styles from "./page.module.scss"
import { createClient } from "contentful"
import CounterAnimation from "@/components/elements/CounterAnimation/CounterAnimation"
import { pageMetadata } from "../metadata"
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
})

export const metadata = pageMetadata.customers

export default async function CaseStudies() {
  const response = await client.getEntries({
    content_type: "caseStudy",
    locale: "en-US",
    include: 10,
  })

  const caseStudies = response.items.map((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      clientName: item.fields.clientName,
      description: item.fields.companyInformation || "",
      metrics:
        item.fields.metrics?.map((metric) => ({
          value: metric.fields.value,
          description: metric.fields.description,
        })) || [],
      image:
        item.fields.previewImage?.fields.file.url || "/images/case-study-1.jpg",
      slug: item.fields.slug,
    }
  })

  return (
    <div className={styles.container}>
      <Container className={styles.headingContainer}>
        <h1 className={styles.heading}>Success Stories</h1>
        <p className={styles.subheading}>
          Learn how businesses use Scalemate to supercharge their ad processes
          and scale faster.
        </p>
      </Container>

      <Container>
        <div className={styles.grid}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </Container>
      <WaitList />
    </div>
  )
}

function CaseStudyCard({ caseStudy }) {
  const { title, metrics, image, slug, clientName } = caseStudy
  const imageUrl = image.startsWith("//") ? `https:${image}` : image

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardInnerLeft}>
          <div className={styles.clientName}>{clientName}</div>
          <Link href={`/customers/${slug}`}>
            <h2 className={styles.cardTitle}>{title}</h2>
          </Link>
          {/* <p className={styles.cardDescription}>{description}</p> */}

          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <div key={index} className={styles.metric}>
                <CounterAnimation
                  value={metric.value}
                  className={styles.metricValue}
                />
                <span className={styles.metricLabel}>{metric.description}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          color="accent"
          href={`/customers/${slug}`}
          className={styles.button}
        >
          Read full story
        </Button>
      </div>

      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
      </div>
    </div>
  )
}
