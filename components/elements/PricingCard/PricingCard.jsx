import React from "react"
import cn from "classnames"
import Button from "../Button/Button"
import styles from "./PricingCard.module.scss"

function PricingCard({
  name,
  price,
  description,
  cta,
  ctaLink,
  popular,
  features,
  isFree,
  isCustom,
  billingCycle,
  loading,
}) {
  // Helper function to get billing period text
  function getBillingPeriodText(cycle) {
    const billingTexts = {
      month: "Billed monthly",
      quarter: "Billed quarterly",
      year: "Billed annually",
    }

    return billingTexts[cycle] || "Billed monthly"
  }

  function renderSkeletonContent() {
    return (
      <>
        <div className={styles.skeletonTag}></div>
        <div className={styles.skeletonName}></div>
        <div className={styles.skeletonPrice}></div>
        <div className={styles.skeletonPeriod}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
        <div className={styles.skeletonFeatureTitle}></div>
        <div className={styles.skeletonFeatures}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.skeletonFeature}></div>
          ))}
        </div>
      </>
    )
  }

  function renderActualContent() {
    return (
      <>
        {popular && <div className={styles.popularTag}>Most popular</div>}
        <h3 className={styles.tierName}>{name}</h3>
        <div className={styles.tierPrice}>
          <span className={styles.priceNumber}>{price}</span>
          {!isFree && !isCustom && <span className={styles.period}>/mo</span>}
        </div>
        <p className={styles.billingPeriod}>
          {isFree && "Forever free"}
          {isCustom && ""}
          {!isFree && !isCustom && getBillingPeriodText(billingCycle)}
        </p>
        <p className={styles.tierDescription}>{description}</p>
        <Button href={ctaLink} color="accent" className={styles.tierCta}>
          {cta}
        </Button>
        <div className={styles.featuresContainer}>
          <h4 className={styles.featuresTitle}>Features included</h4>
          <ul className={styles.featuresList}>
            {features.map((feature, i) => (
              <li key={i} className={styles.feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  return (
    <div
      className={cn(styles.tierCard, {
        [styles.popular]: popular && !loading,
        [styles.skeleton]: loading,
      })}
    >
      {loading ? renderSkeletonContent() : renderActualContent()}
    </div>
  )
}

export default PricingCard
