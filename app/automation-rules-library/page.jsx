import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import FAQ from "@/components/FAQ/FAQ"
import { IconRocket } from "@tabler/icons-react"
import LibraryClient from "./LibraryClient"
import { RULES } from "./rules-data"
import styles from "./page.module.scss"

export const metadata = {
  title: "12 Production-Tested Facebook Automated Rules | Scalemate",
  description:
    "12 production-tested Facebook automated rules from live $1M+/month Meta accounts. Adjust your CPA, ROAS, CPC — every threshold recalculates to your numbers.",
  alternates: {
    canonical: "https://www.scalemate.co/automation-rules-library",
  },
  openGraph: {
    url: "https://www.scalemate.co/automation-rules-library",
    type: "website",
    title:
      "12 Production-Tested Facebook Automated Rules from $1M+/mo Accounts",
    description:
      "Steal 12 Facebook automated rules running in live $1M+/month Meta accounts. Kill losers, scale winners, prune creative — every threshold recalculates from your CPA, ROAS, CPC inputs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "12 Production-Tested Facebook Automated Rules from $1M+/mo Accounts",
    description:
      "Steal 12 Facebook automated rules running in live $1M+/month Meta accounts. Filter by goal: kill losers, scale winners, prune creative, control budget.",
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
      name: "Automated Rules Library",
      item: "https://www.scalemate.co/automation-rules-library",
    },
  ],
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Facebook Automated Rules Library",
  numberOfItems: RULES.length,
  itemListElement: RULES.map((rule, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: rule.title,
  })),
}

const sources = [
  { vertical: "DTC subscription brand", note: "monthly recurring revenue" },
  { vertical: "Mobile apps studio", note: "app install + in-app purchase" },
  { vertical: "DTC e-commerce team", note: "purchase + checkout funnel" },
  { vertical: "Performance team", note: "$1M+ monthly Meta spend" },
]

const relatedLinks = [
  { label: "Automation Rules — Feature", href: "/features/automation-rules" },
  {
    label: "Ad Campaign Automation Rules — Use Case",
    href: "/use-cases/ad-campaign-automation-rules",
  },
  {
    label: "Facebook Automated Rules: Setup Guide",
    href: "/blog/facebook-automated-rules",
  },
  {
    label: "Beyond Rules: Full Facebook Ads Automation",
    href: "/blog/facebook-ads-automation",
  },
]

const faqItems = [
  {
    question: "What are Meta's automated rules?",
    answerText:
      "Automated rules are Meta's built-in monitor-and-act engine inside Ads Manager. Each rule watches a campaign, ad set, or ad on a schedule (every 30 minutes up to once daily), checks whether the conditions you set are true — CPA over $X, spend under $Y, ROAS below 2.0 — and runs an action when they are: pause, increase budget, decrease budget, or send a notification. Native rules cover the basics; this library is the production-tested set teams actually run, with thresholds you can tune to your own breakeven CPA and ROAS.",
    answer:
      "Automated rules are Meta's built-in monitor-and-act engine inside Ads Manager. Each rule watches a campaign, ad set, or ad on a schedule (every 30 minutes up to once daily), checks whether the conditions you set are true — CPA over $X, spend under $Y, ROAS below 2.0 — and runs an action when they are: pause, increase budget, decrease budget, or send a notification. Native rules cover the basics; this library is the production-tested set teams actually run, with thresholds you can tune to your own breakeven CPA and ROAS.",
  },
  {
    question:
      "What's the difference between Meta's native automated rules and a third-party automation tool?",
    answerText:
      "Meta's native rules pause, scale, or alert on a single condition group, evaluated on Meta's own scheduler. A third-party automation tool sequences steps as a chain — for example, scale up the budget, then roll back if performance degrades within 24 hours, then notify Slack — and runs on cross-account context Meta can't see. For teams running more than one ad account, the difference also covers OR-logic, frequency-aware throttling, and rollback pacing. See the full feature breakdown for what changes when chains replace single rules.",
    answer: (
      <>
        Meta&apos;s native rules pause, scale, or alert on a single condition
        group, evaluated on Meta&apos;s own scheduler. A third-party automation
        tool sequences steps as a chain — for example, scale up the budget,
        then roll back if performance degrades within 24 hours, then notify
        Slack — and runs on cross-account context Meta can&apos;t see. For
        teams running more than one ad account, the difference also covers
        OR-logic, frequency-aware throttling, and rollback pacing. See the{" "}
        <Link href="/features/automation-rules">
          full feature breakdown
        </Link>{" "}
        for what changes when chains replace single rules.
      </>
    ),
  },
  {
    question:
      "How do creative testing rules differ from the kill and scale rules in this library?",
    answerText:
      "Creative testing rules in the library (rules № 30 through 33) follow a phased framework: Phase 1 kills weak ads early on cheap signals (CPI, CPM-vs-benchmark) before they burn budget; Phase 2 promotes survivors using stricter CPA and spend thresholds; Phase 3 cleans up at higher confidence using ROAS. The kill rules elsewhere in the library don't assume a phase — they fire whenever the threshold trips. The phased framework matters when you're running constant creative volume and need a predictable funnel; the broader Meta ads automation playbook covers when to switch between them.",
    answer: (
      <>
        Creative testing rules in the library (rules № 30 through 33) follow
        a phased framework: Phase 1 kills weak ads early on cheap signals
        (CPI, CPM-vs-benchmark) before they burn budget; Phase 2 promotes
        survivors using stricter CPA and spend thresholds; Phase 3 cleans up
        at higher confidence using ROAS. The kill rules elsewhere in the
        library don&apos;t assume a phase — they fire whenever the threshold
        trips. The phased framework matters when you&apos;re running constant
        creative volume and need a predictable funnel; the broader{" "}
        <Link href="/blog/facebook-ads-automation">
          Meta ads automation playbook
        </Link>{" "}
        covers when to switch between them.
      </>
    ),
  },
  {
    question: "How many automated rules can a single Meta ad account hold?",
    answer:
      "Meta caps active rules at 250 per ad account. Hit the cap and the team has to delete or merge rules before adding new ones, which becomes a real problem on accounts running creative testing at volume — each new test needs its own kill, scale, and rollback rule, and 250 fills up faster than teams expect.",
  },
  {
    question:
      "Can Facebook automated rules scale budget with rollback?",
    answer:
      "No — native rules can scale budget but won't roll back automatically. If a rule increases an ad set's budget by 30% on a CPA threshold and performance then degrades, the budget stays elevated until a separate rollback rule fires or someone trims it manually. Pair every scale rule with a matching trim rule, and accept that the rollback fires on its own clock, not chained to the original action.",
  },
  {
    question:
      "Can a rule send a Slack alert when creative fatigue hits?",
    answerText:
      "Native rules can send an email or in-platform notification when a condition trips, but they can't post to Slack or include a campaign report. Rule № 34 in this library is the workaround — it watches frequency, CTR decay, and CPM drift relative to the campaign's own baseline, and the playbook version pipes the alert into a Slack channel with the affected campaigns named so the team can triage in one place. Cross-account ad campaign automation rules cover the same pattern at scale; native equivalent is a generic email saying a rule fired, with no creative context attached.",
    answer: (
      <>
        Native rules can send an email or in-platform notification when a
        condition trips, but they can&apos;t post to Slack or include a
        campaign report. Rule № 34 in this library is the workaround — it
        watches frequency, CTR decay, and CPM drift relative to the
        campaign&apos;s own baseline, and the playbook version pipes the
        alert into a Slack channel with the affected campaigns named so the
        team can triage in one place. Cross-account{" "}
        <Link href="/use-cases/ad-campaign-automation-rules">
          ad campaign automation rules
        </Link>{" "}
        cover the same pattern at scale; native equivalent is a generic
        email saying a rule fired, with no creative context attached.
      </>
    ),
  },
  {
    question:
      "What's the smallest spend threshold a pause rule should use?",
    answerText:
      "A static cheat sheet can't tell you this — the floor depends on your breakeven CPA. Heuristic for fair-test pause rules: set the spend floor at roughly 2× your breakeven CPA. If the team's CPA is $40, that means the rule waits until $80 spent before pausing on a CPA spike, enough auction signal to read true performance. Drop the multiplier toward 0.5× for noise-filter rules where you only want to skip $5 of impressions. The rule of thumb breaks down on high-AOV products where one conversion is worth much more than the spend floor — adjust upward.",
    answer:
      "A static cheat sheet can't tell you this — the floor depends on your breakeven CPA. Heuristic for fair-test pause rules: set the spend floor at roughly 2× your breakeven CPA. If the team's CPA is $40, that means the rule waits until $80 spent before pausing on a CPA spike, enough auction signal to read true performance. Drop the multiplier toward 0.5× for noise-filter rules where you only want to skip $5 of impressions. The rule of thumb breaks down on high-AOV products where one conversion is worth much more than the spend floor — adjust upward.",
  },
  {
    question:
      "Can I copy these rules directly into Meta Ads Manager?",
    answerText:
      "Yes. Each card has a Copy rule button that puts the full configuration on the clipboard — condition, time window, action, schedule. Open Meta Ads Manager, create a new automated rule, and match the fields. For teams who'd rather skip the manual paste, Scalemate can auto-import the full set into a connected account in one click. Both paths work; the manual one is free, the import is faster.",
    answer: (
      <>
        Yes. Each card has a Copy rule button that puts the full configuration
        on the clipboard — condition, time window, action, schedule. Open Meta
        Ads Manager, create a new automated rule, and match the fields. For
        teams who&apos;d rather skip the manual paste,{" "}
        <Link href="/book-a-demo">Scalemate can auto-import</Link> the full
        set into a connected account in one click. Both paths work; the
        manual one is free, the import is faster.
      </>
    ),
  },
  {
    question:
      "Are these automated rules safe for pausing during the learning phase?",
    answerText:
      "Most aren't. The learning phase needs roughly 50 conversions before Meta's algorithm settles, and a 1-day window pause rule will fire long before that, interrupting the loop. Use 3-day or 7-day windows during learning, raise spend floors, and gate the kill rules to ad sets older than 48 hours. The scale rules are safer to leave on, but cap the cumulative budget bump per day to avoid resetting learning with a budget jump over 20%. The full step-by-step setup guide covers each variant.",
    answer: (
      <>
        Most aren&apos;t. The learning phase needs roughly 50 conversions
        before Meta&apos;s algorithm settles, and a 1-day window pause rule
        will fire long before that, interrupting the loop. Use 3-day or 7-day
        windows during learning, raise spend floors, and gate the kill rules
        to ad sets older than 48 hours. The scale rules are safer to leave on,
        but cap the cumulative budget bump per day to avoid resetting learning
        with a budget jump over 20%. The full{" "}
        <Link href="/blog/facebook-automated-rules">
          step-by-step setup guide
        </Link>{" "}
        covers each variant.
      </>
    ),
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
      text: item.answerText ?? item.answer,
    },
  })),
}

export default function AutomationRulesLibraryPage() {
  const ruleCount = RULES.length
  const multiTaskCount = RULES.filter((r) => r.tasks.length > 1).length

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                Meta Ads &middot; Automated Rules Library
              </span>
              <h1 className={styles.heroTitle}>
                {ruleCount} Facebook automated rules.
                <br />
                <span className={styles.heroTitleAccent}>
                  Ready to copy.
                </span>
              </h1>
              <p className={styles.tagline}>
                Real Facebook ads accounts. Real thresholds. Real Meta
                limits noted on every card.
              </p>
              <ul className={styles.heroFeatures}>
                <li>
                  Filter by goal — kill losers, scale winners, alert on
                  fatigue, run a creative testing framework
                </li>
                <li>
                  Set your CPA, ROAS, CPC — every threshold recalculates live
                </li>
                <li>
                  {multiTaskCount} multi-step chains with built-in rollback
                  notes
                </li>
                <li>Public reference. No email gate, no signup</li>
              </ul>
              <div className={styles.heroActions}>
                <Button
                  href="https://app.scalemate.co"
                  color="accent"
                  trackEvent="hero_start_trial"
                  trackProps={{ page: "automation-rules-library" }}
                >
                  <IconRocket size={18} />
                  Get started for free
                </Button>
                <Button
                  href="/book-a-demo?source=auto-import"
                  outline
                  trackEvent="hero_auto_import"
                  trackProps={{ page: "automation-rules-library" }}
                >
                  Auto-import these rules
                </Button>
              </div>
            </div>

            <aside className={styles.heroNumeral}>
              <span className={styles.numeralStrap} aria-hidden="true">
                The library
              </span>
              <span className={styles.numeralFigure} aria-hidden="true">
                {ruleCount}
              </span>
              <div className={styles.numeralDecor} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <a
                href="https://www.facebook.com/business/partner-directory"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerBadge}
                aria-label="Meta Verified Partner — view directory listing"
              >
                <img
                  src="/meta-verified-partner.svg"
                  alt="Meta Verified Partner"
                  width="160"
                  height="95"
                  loading="eager"
                />
              </a>
            </aside>
          </div>
        </Container>
      </section>

      {/* ─── SOURCE ATTRIBUTION (verticals only — names confidential) ─── */}
      <section className={styles.sourceStrip}>
        <Container>
          <div className={styles.sourceInner}>
            <span className={styles.sourceLabel}>Sourced from</span>
            <ul className={styles.sourceList}>
              {sources.map((s) => (
                <li key={s.vertical}>
                  <span className={styles.sourceName}>{s.vertical}</span>
                  <span className={styles.sourceVertical}>{s.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─── THRESHOLD LOGIC (how multipliers map to UA strategy) ─── */}
      <section className={styles.educational}>
        <Container>
          <div className={styles.educationalInner}>
            <span className={styles.educationalEyebrow}>
              How thresholds work
            </span>
            <h2 className={styles.educationalTitle}>
              Every threshold is a multiplier on a benchmark you control.
            </h2>
            <p className={styles.educationalBody}>
              Type your breakeven CPA, target ROAS, CPC ceiling, target CPI,
              or CPM benchmark — every rule&apos;s numbers recalculate from
              those inputs. The library uses six standard multiplier patterns
              that match how performance teams structure kill, scale, and
              pacing rules — every condition shows the formula inline so the
              math is never hidden.
            </p>
          </div>
          <ul className={styles.patternGrid}>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>1–2× CPA</span>
              <span className={styles.patternLabel}>
                Fair-test spend floor
              </span>
              <p className={styles.patternBody}>
                Give the ad enough auction signal before pausing on a single
                bad metric. At $50 breakeven this is $50–$100 spent before a
                kill rule can fire — at $200 breakeven it scales to
                $200–$400.
              </p>
            </li>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>3–7× CPA</span>
              <span className={styles.patternLabel}>
                Deep-test threshold
              </span>
              <p className={styles.patternBody}>
                Creative survived early funnel but never converted. Used in
                multi-tier cascade kills where each tier accepts more spend
                before firing.
              </p>
            </li>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>0.6–0.9× CPA</span>
              <span className={styles.patternLabel}>Scale signal</span>
              <p className={styles.patternBody}>
                Cost-per-purchase cleanly under breakeven — the ad is
                profitable enough to merit more budget. Every scale should
                pair with a rollback rule.
              </p>
            </li>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>1.5–3× CPC</span>
              <span className={styles.patternLabel}>
                Creative quality canary
              </span>
              <p className={styles.patternBody}>
                CPC climbing above your bid ceiling before conversions arrive
                is usually a hook or audience break. Catches the problem
                before the conversion data even lands.
              </p>
            </li>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>8–14× CPA</span>
              <span className={styles.patternLabel}>Pacing protection</span>
              <p className={styles.patternBody}>
                Hard daily-cap math when budget overshoot from CBO is the
                bigger risk than pausing winners. Trim 30%, don&apos;t pause.
              </p>
            </li>
            <li className={styles.patternCard}>
              <span className={styles.patternRange}>1.2–1.25× CPM</span>
              <span className={styles.patternLabel}>
                Delivery cost ceiling
              </span>
              <p className={styles.patternBody}>
                CPM above benchmark means the audience is saturating or the
                creative isn&apos;t winning attention. Phase 1 mobile UA kill
                before installs even start.
              </p>
            </li>
          </ul>
        </Container>
      </section>

      {/* ─── LIBRARY (filters + cards) ────────────── */}
      <section className={styles.librarySection}>
        <Container>
          <LibraryClient />
        </Container>
      </section>

      {/* ─── BEYOND-NATIVE CTA ───────────────────── */}
      <section className={styles.beyondSection}>
        <Container>
          <div className={styles.beyondCard}>
            <div className={styles.beyondText}>
              <span className={styles.beyondEyebrow}>
                When native rules stop being enough
              </span>
              <h2 className={styles.beyondTitle}>
                Native rules pause one threshold at a time.
              </h2>
              <p className={styles.beyondBody}>
                For OR-logic, cross-account management, automatic rollback
                after a scale, Slack alerts on creative fatigue, and a
                creative testing framework that runs Phase 1-3 across Meta
                and TikTok — Scalemate runs the whole sequence as one rule.
                Same thresholds. One account view. No 250-rule cap.
              </p>
              <div className={styles.beyondActions}>
                <Button
                  href="https://app.scalemate.co/create-account"
                  color="accent"
                  trackEvent="beyond_try_free"
                  trackProps={{ page: "automation-rules-library" }}
                >
                  Try it for free
                </Button>
                <Button
                  href="/features/automation-rules"
                  outline
                  trackEvent="beyond_see_feature"
                  trackProps={{ page: "automation-rules-library" }}
                >
                  See the feature
                </Button>
              </div>
            </div>
            <div className={styles.beyondAside}>
              <ul className={styles.beyondList}>
                <li>
                  <span>Native limit</span>
                  <strong>250 rules / account</strong>
                </li>
                <li>
                  <span>Native logic</span>
                  <strong>AND only, one condition group</strong>
                </li>
                <li>
                  <span>Native rollback</span>
                  <strong>None &mdash; budget stays elevated</strong>
                </li>
                <li>
                  <span>Native cross-account</span>
                  <strong>Manual rebuild per account</strong>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQ ───────────────────────────────── */}
      <section className={styles.faq}>
        <Container>
          <FAQ
            faqItems={faqItems}
            title="Questions teams ask before they ship the first rule"
            theme="light"
            multiOpen
          />
        </Container>
      </section>

      {/* ─── RELATED ──────────────────────────── */}
      <section className={styles.relatedLinks}>
        <Container>
          <span className={styles.relatedHeader}>Read next</span>
          <div className={styles.relatedList}>
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.relatedLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
