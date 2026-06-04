import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import FAQ from "@/components/FAQ/FAQ"
import {
  IconRocket,
  IconBolt,
  IconClockHour4,
  IconRefresh,
  IconTargetArrow,
  IconQuote,
  IconBooks,
  IconAdjustments,
  IconChecks,
} from "@tabler/icons-react"
import LibraryClient from "./LibraryClient"
import { METHODS } from "./methods-data"
import styles from "./page.module.scss"

const METHOD_COUNT = METHODS.length

const HERO_STATS = [
  { value: "14", label: "Methods" },
  { value: "2", label: "Platforms" },
  { value: "20+", label: "Auto-rules" },
  { value: "Free", label: "No gate" },
]

const PROBLEMS = [
  {
    no: "01",
    tone: "orange",
    lead: "Finding the next winner is the whole game.",
    body: "Most creatives flop. Winners fatigue in 7–14 days. Pipeline empties faster than you can refill it.",
    cost: "Win once. Restart Monday.",
  },
  {
    no: "02",
    tone: "violet",
    lead: "Which method actually works?",
    body: "Andromeda rewrote Meta. TikTok plays different. Every guide pushes its own framework — none compare them side by side.",
    cost: "Day 1 reading. Day 5 not launched.",
  },
  {
    no: "03",
    tone: "blue",
    lead: "Every test is 5 manual steps.",
    body: "Setup. Launch. Monitor. Evaluate. Log. Skip the last one — learning never compounds.",
    cost: "You ran 50 tests. Nothing compounded.",
  },
]

const LIBRARY_INTRO_CARDS = [
  {
    no: "01",
    Icon: IconBooks,
    title: "14 production-tested methods.",
    body: "3-3-3, Hooks Test, Multi-Variant Battery, Mirror-BAU, Cheap Geo, Conversion Lift — what real media buyers run.",
    note: "Free · no email gate",
  },
  {
    no: "02",
    Icon: IconAdjustments,
    title: "Filtered to your reality.",
    body: "Chip filters by goal, budget, platform. No theoretical tests that won't fit your account.",
    note: "Match in 30 seconds",
  },
  {
    no: "03",
    Icon: IconChecks,
    title: "Every card is runnable today.",
    body: "Setup, kill thresholds, budget floor, common mistake — full playbook per method.",
    note: "Manual or automated · your call",
  },
]

const AUTOPILOT_CARDS = [
  {
    no: "01",
    Icon: IconBolt,
    title: "Automatic, always.",
    body: "Pause weak. Clone winners 2×. Refresh fatigue. Overnight.",
    note: "20+ rules out of the box",
  },
  {
    no: "02",
    Icon: IconClockHour4,
    title: "First winners in 72 hours.",
    body: "Outlier kill Day 3. Top-2 promoted Day 5. No waiting three weeks for signal.",
    note: "Same gates · every test",
  },
  {
    no: "03",
    Icon: IconRefresh,
    title: "Iterate weekly, nothing drops.",
    body: "Refresh cadence built in. Andromeda gets its 20–30 fresh variants. Nothing rots in BAU.",
    note: "Frequency · CTR · CPA · hook-rate · 24/7",
  },
  {
    no: "04",
    Icon: IconTargetArrow,
    title: "Hours back from Ads Manager.",
    body: "Stop logging in at midnight to kill an ad set. Spend the hours on new hooks, offers, angles.",
    note: "One Slack digest · three dashboards gone",
  },
]

const SCHEDULE = [
  { day: "Mon", when: "09:00", tone: "orange", title: "Bulk launch", sub: "30 creatives from Drive · auto-named" },
  { day: "Mon", when: "09:42", tone: "neutral", title: "First test live", sub: "all ad sets running" },
  { day: "Tue", when: "—", tone: "red", title: "Auto-pause", sub: "ad sets below CTR threshold" },
  { day: "Wed", when: "Day 3", tone: "red", title: "Outlier kill", sub: "CPA > 2× target" },
  { day: "Thu", when: "Day 4", tone: "neutral", title: "Top performers ranked", sub: "by CPA per ad set" },
  { day: "Fri", when: "Day 5", tone: "orange", title: "Winner promoted", sub: "auto-clones into BAU at 2× budget" },
  { day: "Sat", when: "ongoing", tone: "green", title: "Refresh monitor", sub: "watches frequency · CTR · CPA" },
  { day: "Daily", when: "09:00", tone: "neutral", title: "Slack digest", sub: "paused · promoted · spend" },
]

export const metadata = {
  title: `Creative Testing Framework Library: Methods by Goal`,
  description: `Creative testing methods sorted by goal — 3-3-3, Hooks Test, Bulk CBO, Cheap Geo, Mirror-BAU. Scalemate's automated creative testing platform runs any of them on Meta + TikTok — more winners, faster.`,
  alternates: {
    canonical: "https://www.scalemate.co/creative-testing-library",
  },
  openGraph: {
    url: "https://www.scalemate.co/creative-testing-library",
    type: "website",
    title: `Scalemate Creative Testing Library: Methods by Goal`,
    description: `Production-tested creative testing methods curated by Scalemate. 3-3-3, Hooks Test, Bulk CBO, Cheap Geo, Mirror-BAU — filter by goal, platform, budget.`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Scalemate Creative Testing Library: Methods by Goal`,
    description: `Creative testing methods curated for Meta + TikTok teams. Filter by goal, platform, budget. Free.`,
    images: ["/og-image.png"],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.scalemate.co",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Creative Testing Library",
      item: "https://www.scalemate.co/creative-testing-library",
    },
  ],
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Creative Testing Library",
  description: `Creative testing methods curated for Meta + TikTok teams — filter by goal, platform, budget. Each includes Scalemate automation setup.`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/creative-testing-library",
  image: "https://www.scalemate.co/og-image.png",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free reference library",
  },
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Creative Testing Methods",
  numberOfItems: METHOD_COUNT,
  itemListElement: METHODS.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: m.name,
    description: m.summary,
  })),
}

const faqItems = [
  {
    question: "What is creative testing?",
    answer:
      "Creative testing — also called ad creative testing or creative ad testing — is the process of running multiple ad creatives against each other to find which ones drive the cheapest, highest-quality conversions before you put real budget behind them. On Meta and TikTok it means structured tests like 3-3-3, Hooks Tests, creative A/B testing, dynamic creative testing and multi-variant batteries, judged on CPA, ROAS, IPM or hook rate. This library collects 14 of those methods so you can match one to your budget and goal — and automate it without stitching together separate creative testing tools.",
  },
  {
    question: "Do I have to use Scalemate to run these methods?",
    answer:
      "No. Every method is fully documented as a manual setup — run any of the 14 in Ads Manager by hand. The automation is just the optional shortcut: same method, launched from a template and watched for you.",
  },
  {
    question: "What is the best creative testing framework for Facebook ads?",
    answer:
      "There isn't one best Facebook creative testing framework — it depends on your goal, budget and platform. 3-3-3 is the common starting point for solo Meta buyers; post-Andromeda teams shipping 20+ creatives a week default to multi-variant battery testing on broad targeting. Use the filters above to match a method to your account.",
  },
  {
    question: "How many creatives should I test per week in 2026?",
    answer:
      "For Meta ads creative testing in 2026, Andromeda changed the math. Under $5K/mo you can still run 5-10 across 2-3 ad sets; broad Advantage+ teams ship 10-30 per ad set, and above $50K/mo it's 50-100 a week as fatigue cycles compressed to 7-14 days.",
  },
  {
    question: "What's the 3-3-3 method in Facebook ads?",
    answer:
      "3 ad sets × 3 creatives × 3 days — each ad set runs 3 distinct creatives for 72 hours, then you scale the winner and kill the rest. Popularized by Pilothouse; fast and cheap, but 3 days is tight signal on small budgets. Full breakdown in Method 01 above.",
  },
  {
    question: "Is Meta's Conversion Lift test the same as A/B testing?",
    answer:
      "No. A/B Test compares two variants that are both running; Conversion Lift uses a true hold-out — some users see no ads — to measure real incrementality. Conversion Lift also isn't self-serve for most accounts; A/B Test is the one in your Experiments menu.",
  },
  {
    question: "How long should I run a creative test before deciding?",
    answer:
      "Depends on the method: 72h for 3-3-3, 5 days for the 3-2-2 sprint, 6-12 days for Bulk CBO, 7-14 days for Meta's A/B Test. The common mistake is running the method's cutoff at half the budget it needs — then your early signal is mostly noise.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const relatedResources = [
  {
    label: "Automation Rules Library — 20+ production-tested rules",
    href: "/automation-rules-library",
  },
  {
    label: "Bulk Ad Launch Use Case",
    href: "/use-cases/bulk-ad-launch",
  },
  {
    label: "13 Best Facebook Ads Automation Tools (2026)",
    href: "/blog/best-facebook-ads-automation-tools",
  },
]

export default function CreativeTestingLibraryPage() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Free library &middot; Meta + TikTok &middot; Creative testing frameworks
              </span>
              <h1 className={styles.heroTitle}>
                Stop guessing which creative testing{" "}
                <span className={styles.heroTitleAccent}>framework to run.</span>
              </h1>
              <p className={styles.tagline}>
                The creative testing methods media buyers actually use across apps, e-commerce and games — 3-3-3, Hooks Test, Bulk CBO, Mirror-BAU — filtered by your budget, platform and goal. Automate the one you pick and find more winners, faster.
              </p>
              <ul className={styles.heroFeatures}>
                <li>Each card: setup, kill criteria, budget floor &amp; the common mistake</li>
                <li>Free, no email gate — automate any method when you&rsquo;re ready</li>
              </ul>
              <div className={styles.heroActions}>
                <Button
                  href="#library"
                  color="accent"
                  trackEvent="hero_find_method"
                  trackProps={{ page: "creative-testing-library" }}
                >
                  Find your method ↓
                </Button>
                <Button
                  href="https://app.scalemate.co"
                  outline
                  trackEvent="hero_start_trial"
                  trackProps={{ page: "creative-testing-library" }}
                >
                  <IconRocket size={18} />
                  Try Scalemate free
                </Button>
              </div>

              <dl className={styles.heroStats}>
                {HERO_STATS.map((s) => (
                  <div key={s.label} className={styles.heroStat}>
                    <dt className={styles.heroStatValue}>{s.value}</dt>
                    <dd className={styles.heroStatLabel}>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.heroPreview}>
                <div className={styles.previewHead}>
                  <span className={styles.previewHeadLabel}>
                    ↳ Live preview · one of 14 flows
                  </span>
                  <span className={styles.previewHeadMethod}>The 3-3-3 Method</span>
                </div>

                <span className={styles.previewBadge}>09:00 Mon</span>

                <div className={styles.previewNode}>
                  <span className={styles.previewNodeTitle}>Bulk launch from Drive</span>
                  <span className={styles.previewNodeSub}>3 ad sets</span>
                </div>

                <div className={styles.previewConnector} />

                <div className={styles.previewConcepts}>
                  {["A", "B", "C"].map((c) => (
                    <div key={c} className={styles.previewConcept}>
                      <span className={styles.previewConceptTitle}>Concept {c}</span>
                      <span className={styles.previewConceptSub}>1 ad · equal $</span>
                    </div>
                  ))}
                </div>

                <div className={styles.previewConnector} />

                <div className={styles.previewNode}>
                  <span className={styles.previewNodeTitle}>Run 72 hours</span>
                  <span className={styles.previewNodeSub}>no manual edits</span>
                </div>

                <span className={styles.previewBadge}>Day 3 · Auto-evaluated</span>

                <div className={`${styles.previewNode} ${styles.previewDecision}`}>
                  <span className={styles.previewNodeTitle}>CPA ≤ 1.5× target?</span>
                </div>

                <div className={styles.previewBranch}>
                  <div className={`${styles.previewNode} ${styles.previewKill}`}>
                    <span className={styles.previewNodeTitle}>✕ Pause loser</span>
                    <span className={styles.previewNodeSub}>auto · no logging in</span>
                  </div>
                  <div className={`${styles.previewNode} ${styles.previewWin}`}>
                    <span className={styles.previewNodeTitle}>★ Scale winner 2×</span>
                    <span className={styles.previewNodeSub}>clones into BAU</span>
                  </div>
                </div>

                <span className={styles.previewBadge}>09:00 Daily</span>

                <div className={styles.previewNode}>
                  <span className={styles.previewNodeTitle}>Slack digest</span>
                  <span className={styles.previewNodeSub}>paused · promoted · spend</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PROBLEMS ───────────────────────── */}
      <section className={styles.problems}>
        <Container>
          <span className={`${styles.sectionEyebrow} ${styles.sectionEyebrowCenter}`}>
            Why creative testing keeps breaking
          </span>
          <h2 className={styles.problemsHeading}>
            Creative testing is{" "}
            <span className={styles.accent}>brutal on every front.</span>
          </h2>

          <div className={styles.problemBanner}>
            <span className={styles.problemBannerIcon}>
              <IconQuote size={20} stroke={2} />
            </span>
            <p className={styles.problemBannerText}>
              &ldquo;Added new ads to a profitable account. Killed it overnight — <strong>1.38 → 0.75 ROAS</strong>, <strong>$18k and 30 days</strong> to recover.&rdquo;
            </p>
          </div>

          <div className={styles.problemGrid}>
            {PROBLEMS.map((p) => (
              <article key={p.no} className={styles.problemCard}>
                <div className={styles.problemCardHead}>
                  <span className={styles.problemCardNo}>Pain · {p.no}</span>
                  <span className={`${styles.problemDot} ${styles[`dot_${p.tone}`]}`} />
                </div>
                <p className={styles.problemCardBody}>
                  <strong>{p.lead}</strong> {p.body}
                </p>
                <div className={styles.problemCost}>
                  <span className={styles.problemCostLabel}>The cost</span>
                  <span className={styles.problemCostValue}>{p.cost}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── LIBRARY INTRO (SOLUTION) ──────────── */}
      <section className={styles.libraryIntro}>
        <Container>
          <div className={styles.libraryIntroHead}>
            <span className={`${styles.sectionEyebrow} ${styles.sectionEyebrowCenter}`}>
              After the pain — the playbook
            </span>
            <h2 className={styles.libraryIntroHeading}>
              14 frameworks that ship winners.{" "}
              <span className={styles.accent}>Filter to yours.</span>
            </h2>
            <p className={styles.libraryIntroSub}>
              Setup, kill thresholds, budget floor, common mistake &mdash; the full playbook per method.
            </p>
          </div>

          <div className={styles.libraryIntroGrid}>
            {LIBRARY_INTRO_CARDS.map(({ no, Icon, title, body, note }) => (
              <article key={no} className={styles.valueCard}>
                <div className={styles.valueCardHead}>
                  <span className={styles.valueCardIcon}>
                    <Icon size={18} stroke={1.8} />
                  </span>
                  <span className={styles.valueCardNo}>{no}</span>
                </div>
                <h3 className={styles.valueCardTitle}>{title}</h3>
                <p className={styles.valueCardBody}>{body}</p>
                <span className={styles.valueCardNote}>↳ {note}</span>
              </article>
            ))}
          </div>

          <div className={styles.libraryIntroCta}>
            <Button
              href="#library"
              color="accent"
              trackEvent="library_intro_explore"
              trackProps={{ page: "creative-testing-library" }}
            >
              Explore the library ↓
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── AUTOPILOT VALUE ────────────────── */}
      <section className={styles.autopilot}>
        <Container>
          <div className={styles.autopilotHead}>
            <span className={`${styles.sectionEyebrow} ${styles.sectionEyebrowCenter}`}>
              Your framework &middot; our engine &middot; zero ops
            </span>
            <h2 className={styles.autopilotHeading}>
              Pick a framework. Set it on autopilot.{" "}
              <span className={styles.accent}>Faster winners. Hours back.</span>
            </h2>
            <p className={styles.autopilotSub}>
              Set thresholds once. Launch &middot; kill &middot; promote &middot; refresh &middot; digest &mdash; runs automatically for every method.
            </p>
          </div>

          <div className={styles.autopilotLayout}>
            <div className={styles.autopilotLeft}>
              <div className={styles.autopilotGrid}>
                {AUTOPILOT_CARDS.map(({ no, Icon, title, body, note }) => (
                  <article key={no} className={styles.valueCard}>
                    <div className={styles.valueCardHead}>
                      <span className={styles.valueCardIcon}>
                        <Icon size={18} stroke={1.8} />
                      </span>
                      <span className={styles.valueCardNo}>{no}</span>
                    </div>
                    <h3 className={styles.valueCardTitle}>{title}</h3>
                    <p className={styles.valueCardBody}>{body}</p>
                    <span className={styles.valueCardNote}>↳ {note}</span>
                  </article>
                ))}
              </div>

              <div className={styles.autopilotCta}>
                <span className={styles.autopilotCtaLabel}>↳ Two ways to start</span>
                <div className={styles.autopilotCtaButtons}>
                  <Button
                    href="https://app.scalemate.co"
                    color="accent"
                    trackEvent="autopilot_try_free"
                    trackProps={{ page: "creative-testing-library" }}
                  >
                    <IconRocket size={18} />
                    Try it free
                  </Button>
                  <Button
                    href="/book-a-demo"
                    outline
                    trackEvent="autopilot_request_setup"
                    trackProps={{ page: "creative-testing-library" }}
                  >
                    Have us set it up
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.scheduleCard}>
              <div className={styles.scheduleHead}>
                <span className={styles.scheduleHeadLabel}>↳ One week on autopilot</span>
                <span className={styles.scheduleHeadSub}>
                  You set thresholds once · Scalemate does the rest
                </span>
              </div>
              <ol className={styles.scheduleList}>
                {SCHEDULE.map((row, i) => (
                  <li key={i} className={styles.scheduleRow}>
                    <div className={styles.scheduleWhen}>
                      <span className={styles.scheduleDay}>{row.day}</span>
                      <span className={styles.scheduleTime}>{row.when}</span>
                    </div>
                    <span className={`${styles.scheduleDot} ${styles[`dot_${row.tone}`]}`} />
                    <div className={`${styles.scheduleChip} ${styles[`chip_${row.tone}`]}`}>
                      <span className={styles.scheduleChipTitle}>{row.title}</span>
                      <span className={styles.scheduleChipSub}>{row.sub}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── LIBRARY ────────────────────────── */}
      <section id="library" className={styles.librarySection}>
        <Container>
          <LibraryClient />
        </Container>
      </section>

      {/* ─── EXECUTION FLOW ─────────────────── */}
      <section className={styles.executionFlow}>
        <Container>
          <div className={styles.executionFlowInner}>
            <h2 className={styles.executionFlowHeading}>
              How Scalemate&rsquo;s automated creative testing platform runs any method in the library
            </h2>
            <p className={styles.executionFlowIntro}>
              One engine behind every method — you pick the template, the platform runs the test. Most creative testing tools and ad creative testing platforms stop at a dashboard; this one launches the batch, kills losers, scales winners, then loops results back so each cycle runs faster and bigger.
            </p>

            <ol className={styles.flowSteps}>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>1</span>
                <div>
                  <h3>Pick a method template</h3>
                  <p>Preset structure — the exact ad set count, budget split, and audience for each method.</p>
                </div>
              </li>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>2</span>
                <div>
                  <h3>Bulk launch from Google Drive</h3>
                  <p>Drag 30 creatives at once — auto-named and pushed into the right ad sets.</p>
                </div>
              </li>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>3</span>
                <div>
                  <h3>Auto-pause on the method's schedule</h3>
                  <p>Losers paused on threshold (CPA, ROAS, IPM) without you logging in.</p>
                </div>
              </li>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>4</span>
                <div>
                  <h3>Winners auto-clone to scaling</h3>
                  <p>Hit the promotion threshold and the creative duplicates into your scale campaign automatically.</p>
                </div>
              </li>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>5</span>
                <div>
                  <h3>Slack summary every morning</h3>
                  <p>Paused, promoted, burning budget — every test's state, without opening Ads Manager.</p>
                </div>
              </li>
              <li className={styles.flowStep}>
                <span className={styles.flowStepNumber}>6</span>
                <div>
                  <h3>Sync results back to your own stack</h3>
                  <p>Connect Scalemate to your system and push every test result — winners, losers, hook rates — straight into your database or creative pipeline via API. Your generation tool spins up the next batch from what actually won, and the loop runs itself.</p>
                </div>
              </li>
            </ol>

            <div className={styles.executionFlowCta}>
              <Button
                href="https://app.scalemate.co"
                color="accent"
                trackEvent="execution_start_trial"
                trackProps={{ page: "creative-testing-library" }}
              >
                Run your first test free
              </Button>
              <Link href="/automation-rules-library" className={styles.flowProofLink}>
                See the 20+ automation rules →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── RELATED RESOURCES ──────────────── */}
      <section className={styles.relatedSection}>
        <Container>
          <h2 className={styles.relatedHeading}>Related resources</h2>
          <ul className={styles.relatedList}>
            {relatedResources.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label} →</Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ─── FAQ ────────────────────────────── */}
      <section className={styles.faqSection}>
        <Container>
          <FAQ faqItems={faqItems} title="Frequently asked questions" theme="light" />
        </Container>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaCard}>
            <h2>Set creative testing to autopilot.</h2>
            <p>Test more. Find winners faster. Learning compounds.</p>
            <p className={styles.ctaCardMeta}>Meta + TikTok. Free tier, no credit card.</p>
            <Button
              href="https://app.scalemate.co"
              color="accent"
              trackEvent="footer_start_trial"
              trackProps={{ page: "creative-testing-library" }}
            >
              <IconRocket size={18} />
              Try Scalemate free
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
