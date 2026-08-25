"use client"

import { useState } from "react"
import {
  IconCheck,
  IconStarFilled,
  IconArrowRight,
  IconCreditCardOff,
  IconLock,
  IconRefresh,
  IconCalendarDollar,
  IconArrowsUpDown,
  IconSparkles,
} from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./PricingContent.module.scss"

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

const RULES_TIERS = {
  free: {
    key: "free",
    name: "Free",
    price: 0,
    isFree: true,
    capacity: ["2 active rules", "30-min execution", "Facebook only"],
  },
  scale: {
    key: "scale",
    name: "Scale",
    price: 349,
    capacity: ["3 ad accounts", "10 active rules", "Slack + email alerts"],
  },
  pro: {
    key: "pro",
    name: "Pro",
    price: 699,
    popular: true,
    capacity: ["10 ad accounts", "50 active rules", "Slack + email alerts"],
  },
  advanced: {
    key: "advanced",
    name: "Advanced",
    price: 1099,
    capacity: [
      "Unlimited ad accounts",
      "Unlimited active rules",
      "Slack + email alerts",
    ],
  },
}

const LAUNCHES_TIERS = {
  free: {
    key: "free",
    name: "Free",
    price: 0,
    isFree: true,
    capacity: ["100 launches / month", "1 ad account", "Facebook only"],
  },
  scale: {
    key: "scale",
    name: "Scale",
    price: 279,
    capacity: ["3 ad accounts", "500 ads / month", "Meta + TikTok"],
  },
  pro: {
    key: "pro",
    name: "Pro",
    price: 559,
    popular: true,
    capacity: ["10 ad accounts", "2,000 ads / month", "Meta + TikTok"],
  },
  advanced: {
    key: "advanced",
    name: "Advanced",
    price: 879,
    capacity: [
      "Unlimited ad accounts",
      "Unlimited ads / month",
      "All platforms",
    ],
  },
}

const FREE_FEATURES = [
  "1 ad account",
  "2 active rules",
  "100 launches / month",
  "Facebook only",
  "Uploader (unlimited)",
]

const SUB_TERMS = [
  {
    icon: IconLock,
    title: "12-month price lock",
    body: "Rate guaranteed from activation. 30-day notice on any renewal change.",
  },
  {
    icon: IconRefresh,
    title: "Cancel anytime",
    body: "Cancellation takes effect at the end of your current billing period.",
  },
  {
    icon: IconCalendarDollar,
    title: "Annual prepayment",
    body: "Save 15% paying yearly. Locks your rate for the full 12 months.",
  },
  {
    icon: IconArrowsUpDown,
    title: "Flexible tier changes",
    body: "Upgrades prorate immediately. Downgrades take effect next cycle.",
  },
]

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

function fmt(n) {
  return `$${Math.round(n).toLocaleString("en-US")}`
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────

export default function PricingContent() {
  const [rulesTier, setRulesTier] = useState("pro")
  const [launchesTier, setLaunchesTier] = useState("pro")
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <section className={styles.top}>
        <Container>
          <header className={styles.hero}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>Pricing</span>
              <h1>
                Build the plan that{" "}
                <span className={styles.accent}>fits</span>.
              </h1>
              <p className={styles.heroSub}>
                Modular flat-fee&nbsp;· No ad-spend percentage&nbsp;·{" "}
                <strong>30% off when you bundle&nbsp;both.</strong>
              </p>
            </div>
            <BillingToggle annual={annual} setAnnual={setAnnual} />
          </header>

          <div className={styles.cards}>
            <FreeCard />
            <ConfiguratorCard
              rulesTier={rulesTier}
              setRulesTier={setRulesTier}
              launchesTier={launchesTier}
              setLaunchesTier={setLaunchesTier}
              annual={annual}
            />
          </div>
        </Container>
      </section>

      {/* ── Flat pricing band ── */}
      <section className={styles.flatBand}>
        <Container>
          <div className={styles.flatBandInner}>
            <div className={styles.flatBandHead}>
              <span className={styles.flatBandEyebrow}>
                Why flat pricing wins
              </span>
              <h2>Your bill doesn't move when your spend does.</h2>
            </div>
            <div className={styles.flatBandRow}>
              <div className={styles.flatBandItem}>
                <span className={styles.flatBandSpend}>
                  $240K / mo ad spend
                </span>
                <p>
                  Spend-based tools: <strong>~$800 / mo</strong>.<br />
                  Scalemate:{" "}
                  <strong className={styles.flatBandHi}>
                    $279–$699 flat
                  </strong>
                  .
                </p>
              </div>
              <div className={styles.flatBandItem}>
                <span className={styles.flatBandSpend}>
                  $2M / mo ad spend
                </span>
                <p>
                  Spend-based tools: <strong>$10K+ / mo</strong>.<br />
                  Scalemate:{" "}
                  <strong className={styles.flatBandHi}>
                    still $699–$1,099
                  </strong>
                  .
                </p>
              </div>
              <div className={styles.flatBandItem}>
                <span className={styles.flatBandSpend}>Growth-neutral</span>
                <p>
                  Same rules, same automation —
                  <strong className={styles.flatBandHi}>
                    {" "}one flat price regardless of ad spend.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Subscription terms ── */}
      <section className={styles.termsSection}>
        <Container>
          <header className={styles.termsHeader}>
            <span className={styles.termsEyebrow}>Subscription terms</span>
            <h2>Predictable in every direction.</h2>
          </header>
          <div className={styles.termsGrid}>
            {SUB_TERMS.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.title} className={styles.termCard}>
                  <span className={styles.termIcon}>
                    <Icon size={18} stroke={1.75} />
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              )
            })}
          </div>
          <p className={styles.termsFoot}>
            Running a high-volume operation or open to a case study?{" "}
            <a href="/book-a-demo">
              Talk to sales about design-partner pricing
            </a>
            {" "}— up to 60% off, by separate agreement.
          </p>
        </Container>
      </section>
    </>
  )
}

// ──────────────────────────────────────────────
// BillingToggle
// ──────────────────────────────────────────────

function BillingToggle({ annual, setAnnual }) {
  return (
    <div
      className={styles.billingToggle}
      role="radiogroup"
      aria-label="Billing cycle"
    >
      <button
        type="button"
        role="radio"
        aria-checked={!annual}
        className={`${styles.billingOption} ${
          !annual ? styles.billingActive : ""
        }`}
        onClick={() => setAnnual(false)}
      >
        Monthly
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={annual}
        className={`${styles.billingOption} ${
          annual ? styles.billingActive : ""
        }`}
        onClick={() => setAnnual(true)}
      >
        Annual
        <span className={styles.billingChip}>−15%</span>
      </button>
    </div>
  )
}

// ──────────────────────────────────────────────
// FreeCard
// ──────────────────────────────────────────────

function FreeCard() {
  return (
    <article className={styles.freeCard}>
      <div className={styles.freeCardInner}>
        <header className={styles.freeHead}>
          <span className={styles.freeEyebrow}>Free plan</span>
          <h2 className={styles.freeTitle}>Try it.</h2>
        </header>

        <div className={styles.freePrice}>
          <span className={styles.freeAmount}>$0</span>
          <span className={styles.freePer}>/ month</span>
        </div>

        <span className={styles.freeHint}>
          <IconCreditCardOff size={13} stroke={1.8} />
          No credit card · no trial clock
        </span>

        <ul className={styles.freeList}>
          {FREE_FEATURES.map((f) => (
            <li key={f}>
              <IconCheck
                size={14}
                stroke={2.4}
                className={styles.freeCheck}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Button
          href="https://app.scalemate.co/create-account"
          className={styles.freeCta}
          trackEvent="cta_clicked"
          trackProps={{
            cta_location: "pricing_free_card",
            cta_text: "Get started free",
          }}
        >
          Get started free
          <IconArrowRight size={15} stroke={2} />
        </Button>
      </div>
    </article>
  )
}

// ──────────────────────────────────────────────
// ConfiguratorCard (the centerpiece)
// ──────────────────────────────────────────────

function ConfiguratorCard({
  rulesTier,
  setRulesTier,
  launchesTier,
  setLaunchesTier,
  annual,
}) {
  const r = RULES_TIERS[rulesTier]
  const l = LAUNCHES_TIERS[launchesTier]
  const bothFree = r.isFree && l.isFree
  const bothPaid = !r.isFree && !l.isFree
  const subtotal = r.price + l.price
  const bundleDiscount = bothPaid ? subtotal * 0.3 : 0
  const afterBundle = subtotal - bundleDiscount
  const annualSavings = annual && afterBundle > 0 ? afterBundle * 0.15 : 0
  const monthly = afterBundle - annualSavings
  const annualTotal = monthly * 12

  return (
    <article className={styles.configurator}>
      <header className={styles.configHeader}>
        <span className={styles.configEyebrow}>
          <IconSparkles size={11} stroke={2} />
          Custom build
        </span>
        <p className={styles.configSub}>
          Mix tiers per module. Bundle both for automatic 30% off — pick{" "}
          <em>Free</em> on either to skip.
        </p>
      </header>

      <div className={styles.configBody}>
        <div className={styles.pickers}>
          <ModulePicker
            label="Rules"
            sublabel="Automation — pause, scale, manage."
            tiers={RULES_TIERS}
            selected={rulesTier}
            onSelect={setRulesTier}
          />
          <ModulePicker
            label="Launches"
            sublabel="Bulk ad creation — Meta + TikTok."
            tiers={LAUNCHES_TIERS}
            selected={launchesTier}
            onSelect={setLaunchesTier}
          />
        </div>

        <SummaryPanel
          r={r}
          l={l}
          rulesTier={rulesTier}
          launchesTier={launchesTier}
          bothFree={bothFree}
          bothPaid={bothPaid}
          bundleDiscount={bundleDiscount}
          annual={annual}
          annualSavings={annualSavings}
          monthly={monthly}
          annualTotal={annualTotal}
        />
      </div>
    </article>
  )
}

// ──────────────────────────────────────────────
// ModulePicker
// ──────────────────────────────────────────────

function ModulePicker({ label, sublabel, tiers, selected, onSelect }) {
  const tier = tiers[selected]
  return (
    <div className={styles.modulePicker}>
      <div className={styles.moduleHead}>
        <h3 className={styles.moduleLabel}>{label}</h3>
        <span className={styles.moduleSub}>{sublabel}</span>
      </div>

      <div
        className={styles.chips}
        role="radiogroup"
        aria-label={`${label} tier`}
      >
        {Object.values(tiers).map((t) => {
          const isSelected = selected === t.key
          return (
            <button
              key={t.key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`${styles.chip} ${
                isSelected ? styles.chipActive : ""
              } ${t.isFree ? styles.chipFree : ""}`}
              onClick={() => onSelect(t.key)}
            >
              <span className={styles.chipName}>
                {t.name}
                {t.popular && (
                  <IconStarFilled size={9} className={styles.chipStar} />
                )}
              </span>
              <span className={styles.chipPrice}>
                {t.isFree ? "$0" : fmt(t.price)}
              </span>
            </button>
          )
        })}
      </div>

      <ul
        className={`${styles.capacity} ${
          tier.isFree ? styles.capacityFree : ""
        }`}
        key={selected}
      >
        {tier.capacity.map((c) => (
          <li key={c}>
            <IconCheck
              size={12}
              stroke={2.4}
              className={styles.capacityCheck}
            />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ──────────────────────────────────────────────
// SummaryPanel (the light receipt inside the dark configurator)
// ──────────────────────────────────────────────

function SummaryPanel({
  r,
  l,
  rulesTier,
  launchesTier,
  bothFree,
  bothPaid,
  bundleDiscount,
  annual,
  annualSavings,
  monthly,
  annualTotal,
}) {
  return (
    <div className={styles.summary}>
      <span className={styles.summaryEyebrow}>Your selection</span>

      <ul className={styles.lineItems} key={`${rulesTier}-${launchesTier}`}>
        <li className={styles.lineItem}>
          <span className={styles.lineLabel}>
            Rules · <strong>{r.name}</strong>
          </span>
          <span className={styles.lineValue}>
            {r.isFree ? "Free" : fmt(r.price)}
          </span>
        </li>
        <li className={styles.lineItem}>
          <span className={styles.lineLabel}>
            Launches · <strong>{l.name}</strong>
          </span>
          <span className={styles.lineValue}>
            {l.isFree ? "Free" : fmt(l.price)}
          </span>
        </li>
        {bothPaid && (
          <li className={`${styles.lineItem} ${styles.lineSave}`}>
            <span className={styles.lineLabel}>
              Bundle discount
              <span className={styles.lineNote}>both modules · 30% off</span>
            </span>
            <span className={styles.lineValue}>−{fmt(bundleDiscount)}</span>
          </li>
        )}
        {annual && annualSavings > 0 && (
          <li className={`${styles.lineItem} ${styles.lineSave}`}>
            <span className={styles.lineLabel}>
              Annual prepayment
              <span className={styles.lineNote}>15% off · 12-month lock</span>
            </span>
            <span className={styles.lineValue}>−{fmt(annualSavings)}</span>
          </li>
        )}
      </ul>

      <div className={styles.totalBlock} key={`total-${rulesTier}-${launchesTier}-${annual}`}>
        <span className={styles.totalLabel}>Total</span>
        <div className={styles.totalValue}>
          <span className={styles.totalAmount}>{fmt(monthly)}</span>
          <span className={styles.totalPer}>/ month</span>
        </div>
      </div>

      {annual && monthly > 0 && (
        <span className={styles.annualNote}>
          billed annually as {fmt(annualTotal)}
        </span>
      )}

      {bothFree && (
        <span className={styles.bothFreeNote}>
          That's the Free plan — same as the card on the left.
        </span>
      )}

      <Button
        href={
          bothFree ? "https://app.scalemate.co/create-account" : "/book-a-demo"
        }
        className={styles.summaryCta}
        trackEvent="cta_clicked"
        trackProps={{
          cta_location: "pricing_configurator",
          cta_text: bothFree ? "Get started free" : "Book a demo",
          rules_tier: rulesTier,
          launches_tier: launchesTier,
          billing: annual ? "annual" : "monthly",
        }}
      >
        {bothFree ? "Get started free" : "Book a demo"}
        <IconArrowRight size={15} stroke={2} />
      </Button>

      <div className={styles.summaryFoot}>
        <span>
          <IconLock size={11} stroke={1.8} /> 12-month price lock
        </span>
        <span>
          <IconRefresh size={11} stroke={1.8} /> Cancel anytime
        </span>
        <span>
          <IconCreditCardOff size={11} stroke={1.8} /> No setup fee
        </span>
      </div>
    </div>
  )
}
