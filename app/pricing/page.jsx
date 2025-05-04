"use client"
import Container from "@/components/elements/Container/Container"
import WaitList from "@/components/home/WaitList/WaitList"

import { useState, useEffect } from "react"
import Link from "next/link"
import cn from "classnames"
import FAQ from "@/components/FAQ/FAQ"
import Button from "@/components/elements/Button/Button"
import styles from "./page.module.scss"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("month") // "month", "quarter", or "year"
  const [plansData, setPlansData] = useState([])
  const [loading, setLoading] = useState(true)
  const [allPlans, setAllPlans] = useState([])

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch("/api/plans")
        const data = await response.json()
        console.log("API Response:", data)
        setPlansData(data.plans || [])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching plans:", error)
        setLoading(false)
      }
    }

    fetchPlans()
  }, [])

  // Helper function to get price for selected billing cycle
  function getPriceForCycle(prices, cycle) {
    if (!prices || !prices.length) return null

    // Use object mapping instead of multi-ternary
    const cycleConditions = {
      month: (p) =>
        p.recurring.interval === "month" && p.recurring.interval_count === 1,
      quarter: (p) =>
        p.recurring.interval === "month" && p.recurring.interval_count === 3,
      year: (p) =>
        p.recurring.interval === "year" && p.recurring.interval_count === 1,
    }

    const condition = cycleConditions[cycle]
    return condition ? prices.find(condition) : prices[0]
  }

  // Helper function to format price from cents to dollars
  function formatPrice(amount) {
    if (!amount) return "N/A"
    return (amount / 100).toFixed(2)
  }

  // Helper function to calculate monthly price
  function calculateMonthlyPrice(price) {
    if (!price) return "N/A"

    // Use object mapping instead of if-else chain
    const calculations = {
      month: () => price.unit_amount / price.recurring.interval_count,
      year: () => price.unit_amount / 12,
    }

    const calculate =
      calculations[price.recurring.interval] || (() => price.unit_amount)
    return `$${formatPrice(calculate())}`
  }

  // Helper function to get billing period text
  function getBillingPeriodText(cycle) {
    const billingTexts = {
      month: "Billed monthly",
      quarter: "Billed quarterly",
      year: "Billed annually",
    }

    return billingTexts[cycle] || "Billed monthly"
  }

  // Combine API plans with static plans
  useEffect(() => {
    if (loading) return

    // Create dynamic plans from API data
    const apiPlans = plansData.map((plan) => {
      const price = getPriceForCycle(plan.prices, billingCycle)
      return {
        id: plan.id,
        name: plan.name,
        price: calculateMonthlyPrice(price),
        description: plan.description,
        cta: "Try for free",
        ctaLink: "https://app.scalemate.co/create-account",
        popular: true, // We can set this based on some logic if needed
        features: [
          `Up to ${plan.metadata?.ad_account_limit || "unlimited"} ad accounts`,
          `${plan.metadata?.requests_limit || "unlimited"} requests`,
          "Campaign management",
          "Reports",
          "Recommendations",
          "Premium support in Slack",
        ],
        priceData: price,
        isStatic: false,
      }
    })

    // Define static free plan
    const freePlan = {
      id: "free",
      name: "Trial",
      price: "Free",
      description:
        "Get started with the basics. Perfect for individuals and small projects.",
      cta: "Try for free",
      ctaLink: "https://app.scalemate.co/create-account",
      popular: false,
      features: [
        "1 ad account",
        "20 requests per month",
        "Basic analytics",
        "Email support",
      ],
      isStatic: true,
      isFree: true,
    }

    // Define static custom plan
    const customPlan = {
      id: "custom",
      name: "Custom",
      price: "Let's chat",
      description:
        "Designed for large marketing teams seeking tailored solutions, help with onboarding and account setup, and premium support.",
      cta: "Let's chat",
      ctaLink: "/book-a-demo",
      popular: false,
      features: [
        "Onboarding help",
        "Tech setup help",
        "Premium support",
        "Custom integrations",
      ],
      isStatic: true,
      isCustom: true,
    }

    // Combine all plans with API plans in the middle
    setAllPlans([freePlan, ...apiPlans, customPlan])
  }, [plansData, billingCycle, loading])

  return (
    <div className={styles.pricingPage}>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>
            Transparent pricing for every marketing team
          </h1>

          <div className={styles.pricingToggle}>
            <span
              className={cn(styles.toggleOption, {
                [styles.active]: billingCycle === "month",
              })}
              onClick={() => setBillingCycle("month")}
            >
              Monthly
            </span>
            <span
              className={cn(styles.toggleOption, {
                [styles.active]: billingCycle === "quarter",
              })}
              onClick={() => setBillingCycle("quarter")}
            >
              Quarterly
            </span>
            <span
              className={cn(styles.toggleOption, {
                [styles.active]: billingCycle === "year",
              })}
              onClick={() => setBillingCycle("year")}
            >
              Yearly <span className={styles.discount}>-20%</span>
            </span>
          </div>
        </Container>
      </section>

      <section className={styles.pricingTiers}>
        <Container>
          {loading ? (
            <div className={styles.loading}>Loading pricing plans...</div>
          ) : (
            <div className={styles.tiersGrid}>
              {allPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(styles.tierCard, {
                    [styles.popular]: plan.popular,
                  })}
                >
                  {plan.popular && (
                    <div className={styles.popularTag}>Most popular</div>
                  )}
                  <h3 className={styles.tierName}>{plan.name}</h3>
                  <div className={styles.tierPrice}>
                    <span className={styles.priceNumber}>{plan.price}</span>
                    {!plan.isFree && !plan.isCustom && (
                      <span className={styles.period}>/mo</span>
                    )}
                  </div>
                  <p className={styles.billingPeriod}>
                    {plan.isFree && "Forever free"}
                    {plan.isCustom && ""}
                    {!plan.isFree &&
                      !plan.isCustom &&
                      getBillingPeriodText(billingCycle)}
                  </p>
                  <p className={styles.tierDescription}>{plan.description}</p>
                  <Button
                    href={plan.ctaLink}
                    color="accent"
                    className={styles.tierCta}
                  >
                    {plan.cta}
                  </Button>
                  <div className={styles.featuresContainer}>
                    <h4 className={styles.featuresTitle}>Features included</h4>
                    <ul className={styles.featuresList}>
                      {plan.features.map((feature, i) => (
                        <li key={i} className={styles.feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className={styles.testimonial}>
        <Container>
          <p className={styles.testimonialIntro}>
            15,000+ clients trust our platform.{" "}
            <Link href="/customers">Meet our customers →</Link>
          </p>
          <blockquote className={styles.quote}>
            <p>
              I had to work 8 hours a day on one ad account. With this platform,
              I only need one or two hours. I just need to work on creatives,
              because everything else is automated.
            </p>
            <footer>
              <cite>Alessandro Gargiulo, Meta Ads Consultant</cite>
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container>
          <FAQ theme="light" />
        </Container>
      </section>

      <WaitList />
    </div>
  )
}
