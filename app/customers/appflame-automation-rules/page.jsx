import Image from "next/image"
import Hero from "@/components/CaseStudy/Hero/Hero"
import Layout from "@/components/CaseStudy/Layout/Layout"
import CompanyCard from "@/components/CaseStudy/CompanyCard/CompanyCard"
import CounterAnimation from "@/components/elements/CounterAnimation/CounterAnimation"
import WaitList from "@/components/home/WaitList/WaitList"
import richTextStyles from "@/components/contentful/RichText/RichText.module.scss"
import overviewStyles from "@/components/CaseStudy/Overview/Overview.module.scss"
import styles from "./page.module.scss"

const SLUG = "appflame-automation-rules"
const URL = `https://www.scalemate.co/customers/${SLUG}`
const CLIENT_NAME = "Appflame"
const INDUSTRY = "App Publisher"
const USE_CASE = "Creative testing automation"
const LOGO = "/client-appflame.svg"
const OG_IMAGE = "https://www.scalemate.co/og-image.png"

const TITLE = "How Appflame automates creative testing on Meta"
const DESCRIPTION =
  "How Appflame automatically pauses 754 losing ads on Meta per month with automation rules, testing more creative hypotheses per dollar, no overnight Ads Manager monitoring."

const METRICS = [
  { value: "20", label: "Hours of overnight monitoring replaced per month" },
  { value: "750", label: "Losing ads stopped from burning budget per month" },
  {
    value: "575",
    label: "Times rules fired per month (each checks thousands of ads)",
  },
]

const DMYTRO_PHOTO = "/dmytro-hannoshenko.jpg"
const DMYTRO_LINKEDIN = "https://www.linkedin.com/in/dmytro-hannoshenko/"

function CaseQuote({ children }) {
  return (
    <figure className={styles.quote}>
      <span className={styles.quoteGlyph} aria-hidden="true">
        {"❝"}
      </span>
      <div className={styles.quoteBody}>{children}</div>
      <hr className={styles.quoteDivider} />
      <figcaption className={styles.quoteAttribution}>
        {DMYTRO_PHOTO ? (
          <Image
            src={DMYTRO_PHOTO}
            alt=""
            width={28}
            height={28}
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ) : (
          <span className={styles.quoteAvatarFallback} aria-hidden="true">
            DH
          </span>
        )}
        <span className={styles.quoteAttributionText}>
          <span className={styles.quoteName}>Dmytro Hannoshenko</span>
          <span className={styles.quoteSeparator}>·</span>
          User Acquisition Lead, Appflame
        </span>
        <a
          href={DMYTRO_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.quoteLinkedIn}
          aria-label="Dmytro Hannoshenko on LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06s.92-2.06 2.06-2.06 2.06.93 2.06 2.06-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
      </figcaption>
    </figure>
  )
}

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

export default function AppflameCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: OG_IMAGE,
    url: URL,
    author: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
    },
    about: {
      "@type": "Organization",
      name: "Appflame",
    },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
  }

  const quotationSchema = {
    "@context": "https://schema.org",
    "@type": "Quotation",
    text: "The biggest practical impact for us is the ability to test more hypotheses on the same budget. With automation rules we can cut weak variants quickly and test more creatives inside one ad set, even when Meta tries to over-push a single creative.",
    spokenByCharacter: {
      "@type": "Person",
      name: "Dmytro Hannoshenko",
      jobTitle: "User Acquisition Lead",
      worksFor: { "@type": "Organization", name: "Appflame" },
    },
    isPartOf: { "@type": "Article", url: URL },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quotationSchema) }}
      />

      <Hero title={TITLE} label="Case Study" />

      <Layout
        side={
          <CompanyCard
            companyName={CLIENT_NAME}
            industry={INDUSTRY}
            useCase={USE_CASE}
            logo={LOGO}
            darkLogo
          />
        }
      >
        {/* Overview */}
        <div className={`${overviewStyles.container} ${styles.overviewBlock}`}>
          <div className={overviewStyles.content}>
            <div className={overviewStyles.heading}>
              <p>
                Appflame's User Acquisition function operates within an R&D
                organization, running performance marketing on Meta for a
                portfolio of mobile apps. The US is the main market.
              </p>
            </div>
          </div>

          <div className={`${overviewStyles.metrics} ${styles.metricsRow}`}>
            {METRICS.map((metric) => (
              <div
                className={`${overviewStyles.metric} ${styles.metricCard}`}
                key={metric.label}
              >
                <CounterAnimation
                  value={metric.value}
                  className={`${overviewStyles.metricValue} ${styles.metricValueLarge}`}
                />
                <div
                  className={`${overviewStyles.metricLabel} ${styles.metricLabelTight}`}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem */}
        <div className={styles.section}>
          <div className={richTextStyles.richText}>
            <h2>Challenge</h2>
            <p>
              Standard Meta rules ran out of room. User Acquisition operates
              within R&D. Testing is the work. Most of the budget validates new
              creative hypotheses, so the team needs tight spend control and
              fast reaction to bad funnel signals.
            </p>
            <p>
              Meta's algorithm in 2026 tends to over-push one creative once it
              starts learning, even when results miss KPIs. And standard Meta
              rules can't catch it: one condition or one action at a time, no
              multi-signal conditions, no custom events from a traffic-scoring
              system.
            </p>
            <p>
              US market, team in Europe. Without automated pause logic, losing
              ads burn budget overnight.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className={styles.section}>
          <div className={richTextStyles.richText}>
            <h2>Solution</h2>
            <p>
              Scalemate covers the funnel in one rule library, with a Slack
              trail.
            </p>
            <ul>
              <li>
                A library of{" "}
                <a href="/features/automation-rules">automation rules</a> in
                Scalemate, covering click through purchase, and reading the
                specific events the team uses in their traffic-scoring system
              </li>
              <li>
                Each rule reads several metrics and events at the same time;
                when all conditions match, the ad or ad-set is paused, scaled,
                or decreased
              </li>
              <li>
                All rules live in one place: centralized management, with check
                logic that scales across new campaigns or whole accounts
              </li>
              <li>
                Every trigger logs to a dedicated Slack channel with the reason:
                a searchable record of what fired, where, and why
              </li>
            </ul>
          </div>
        </div>

        {/* Outcome */}
        <div className={styles.section}>
          <div className={richTextStyles.richText}>
            <h2>Results</h2>
            <p>It allows to test more creative ideas on the same budget.</p>
            <p>
              Scalemate automation pulls losing ads out of the ad set fast,
              freeing room in the budget and in the algorithm's attention for
              the next hypothesis, instead of letting Meta keep over-pushing
              one creative.
            </p>
            <p>Per month on average:</p>
            <ul>
              <li>
                <strong>20 hours of overnight monitoring replaced</strong>,
                derived from 755 decisions per month × ~1.5 min average manual
                review (conservative; excludes continuous-watching time)
              </li>
              <li>
                <strong>
                  175 losing ads stopped from burning budget weekly
                </strong>
                , pulled out of the ad set before Meta's algorithm
                over-allocates
              </li>
            </ul>
            <p>Same budget. More test cycles. No manual monitoring.</p>

            <CaseQuote>
              <p>
                The biggest practical impact for us is the ability to test more
                hypotheses on the same budget.
              </p>
              <p>
                With automation rules we can cut weak variants quickly and test
                more creatives inside one ad set, even when Meta tries to
                over-push a single creative.
              </p>
            </CaseQuote>
          </div>
        </div>

        {/* Detail */}
        <div className={styles.section}>
          <div className={richTextStyles.richText}>
            <h3>How a single rule reads several signals at once</h3>
            <p>
              A typical <a href="/features/automation-rules">automation rule</a>{" "}
              reads several metrics and events at the same time and only fires
              when the full pattern matches. The team treats each rule as a
              small policy document: if all of these conditions are true
              together, the variant is not worth the next dollar.
              Single-condition rules in Meta's UI cannot express that idea.
            </p>

            <h3>Late-attribution workflow</h3>
            <p>
              When data on a paused ad set arrives late (for example, a
              purchase that attributes a few hours after the pause), the Slack
              thread tells the team which rule fired and on what evidence. From
              there they decide whether to tune the rule, re-enable the ad set
              manually, or leave the pause in place. The ad-set re-activation
              rule also executes automatically under conditions defined in its
              own logic.
            </p>

            <h3>What automation rules deliver</h3>
            <ul>
              <li>
                <strong>More hypotheses tested on the same budget.</strong> Meta
                tends to over-allocate to a single creative once it starts
                learning. The automation rules pull losing variants out of the
                ad set faster, freeing room for the next hypothesis.
              </li>
              <li>
                <strong>Earlier pause on multi-signal failures.</strong> A bad
                ad rarely fails on a single metric. Automation rules catch the
                moment when several signals agree.
              </li>
              <li>
                <strong>Re-activates ad-sets when results arrive late.</strong>{" "}
                If a purchase attributes after the pause, the rule reverts it
                instead of writing off a working ad-set.
              </li>
              <li>
                <strong>Operations load down to near zero overnight.</strong> No
                overnight Ads Manager monitoring. The team checks the Slack
                trigger feed in the morning and reads what happened.
              </li>
            </ul>

            <CaseQuote>
              <p>
                Our market is the US. Our team is in Europe. Scalemate is what
                lets us stop watching Ads Manager at night.
              </p>
            </CaseQuote>

            <h2>Where this fits</h2>
            <p>
              Automation rules adapt to whatever rhythm your account runs on:
            </p>
            <ul>
              <li>
                <strong>Testing creatives and audiences</strong>: pause weak
                variants by multi-signal automation, free room for the next
                hypothesis
              </li>
              <li>
                <strong>Seasonality</strong>: throttle budgets when results
                dip, scale them when they compound
              </li>
              <li>
                <strong>Account-wide automation</strong>: auto-pause
                underperformers, auto-scale winners, no eyes-on-screen
              </li>
              <li>
                <strong>Late-attribution recovery</strong>: re-activate paused
                ad-sets when conversions arrive after the pause
              </li>
              <li>
                <strong>Agencies</strong>: clone a working rule library across
                multiple accounts rather than rebuilding per brand
              </li>
            </ul>
            <p>
              Wherever the volume of decisions rises beyond what
              single-condition rules can keep up with, the cascade structure
              travels. Browse the{" "}
              <a href="/automation-rules-library">automation rules library</a>{" "}
              for example rules that lift paid-acquisition efficiency on Meta
              and beyond, or see the{" "}
              <a href="/use-cases/ad-campaign-automation-rules">
                campaign automation use case
              </a>{" "}
              for the broader picture.
            </p>

            <CaseQuote>
              <p>
                I'd recommend this approach to essentially any performance team.
                For some it's test and spend control. For others, ROI control or
                scaling automation. It depends on the product KPI and how the
                team structures its buying.
              </p>
              <p>
                Scalemate's subscription model is also reasonable. You can
                build fairly complex logic even on the basic tier.
              </p>
            </CaseQuote>

            <p>
              If that sounds like your account, start a Scalemate trial and
              rebuild one automation rule from this case study in your own
              funnel. Or read <a href="/customers">more case studies</a> for
              adjacent setups.
            </p>
          </div>
        </div>
      </Layout>

      <WaitList
        href="https://app.scalemate.co/create-account"
        buttonText="Try Scalemate Now"
      />
    </main>
  )
}
