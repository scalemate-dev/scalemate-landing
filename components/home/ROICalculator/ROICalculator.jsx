"use client"
import Container from "@/components/elements/Container/Container"
import ship from "@/assets/icons/help/ship.svg"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Select from "@/components/elements/Select/Select"
import Button from "@/components/elements/Button/Button"
import ReactSlider from "react-slider"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import styles from "./ROICalculator.module.scss"

// Constants
const NO_AUTOMATION_TIME_YEARLY = 8
const WITH_AUTOMATION_TIME_YEARLY = 3
const MONTHS = 12
const MINUTES_IN_HOUR = 60
const UAM_HOUR_PRICE = 20

// ResultItem Sub-component
const ResultItem = ({ title, text }) => (
  <div className={styles.resultItem}>
    <div
      className={styles.resultLabel}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <div>
      <span
        className={styles.resultValue}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  </div>
)

const ROICalculator = () => {
  const [niche, setNiche] = useState("Gaming Casual")
  const [CPA, setCPA] = useState(94)
  const [CPI, setCPI] = useState(1.5)
  const [creatives, setCreatives] = useState(78)

  const hasInteracted = useRef(false)
  const resultTimerRef = useRef(null)

  const trackFirstInteraction = () => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      trackMixpanelEvent(EVENTS.ROI_CALCULATOR_INTERACTED)
    }
  }

  const nicheOptions = ["Gaming Casual", "Gaming Hyper Casual", "Non-gaming"]
  const marksCreatives = [10, 100, 200, 300, 400, 500]
  const marksGamingCasualCPA = [10, 200, 400, 600, 800, 1000]
  const marksGamingCPA = [10, 200, 400, 600, 800, 1000]
  const marksCPI = [1, 20, 40, 60, 80, 100]

  // Computed values
  const eventsAmount = (() => {
    switch (niche) {
      case "Non-gaming":
        return 10
      case "Gaming Casual":
        return 1.5
      case "Gaming Hyper Casual":
        return 38
      default:
        return 1
    }
  })()

  const multiplier = (() => {
    switch (niche) {
      case "Non-gaming":
        return 1.15
      case "Gaming Casual":
        return 1.15
      case "Gaming Hyper Casual":
        return 1.33
      default:
        return 1
    }
  })()

  const isGamingCasual = niche === "Gaming Casual"
  const isNotGamingHyperCasual = niche !== "Gaming Hyper Casual"
  const CPIorCPA = !isNotGamingHyperCasual ? CPI : CPA

  const noAutomation = (() => {
    const time =
      (NO_AUTOMATION_TIME_YEARLY * creatives * MONTHS) / MINUTES_IN_HOUR
    const money =
      eventsAmount * CPIorCPA * creatives * MONTHS * multiplier +
      UAM_HOUR_PRICE * time
    return {
      time,
      money: Math.round(money),
    }
  })()

  const withAutomation = (() => {
    const time =
      (WITH_AUTOMATION_TIME_YEARLY * creatives * MONTHS) / MINUTES_IN_HOUR
    const money =
      eventsAmount * CPIorCPA * creatives * MONTHS + UAM_HOUR_PRICE * time
    return {
      time,
      money: Math.round(money),
    }
  })()

  const saved = (() => {
    const money = noAutomation.money - withAutomation.money
    return {
      time: Math.round(noAutomation.time - withAutomation.time),
      money: isNaN(money) ? 0 : Math.floor(money * 10) / 10,
    }
  })()

  // Debounced result_viewed — fires 1.5s after last input change
  useEffect(() => {
    if (!hasInteracted.current) return
    clearTimeout(resultTimerRef.current)
    resultTimerRef.current = setTimeout(() => {
      trackMixpanelEvent(EVENTS.ROI_CALCULATOR_RESULT_VIEWED, {
        niche,
        creatives,
        cpa: CPA,
        cpi: CPI,
        saved_money: saved.money,
        saved_time: saved.time,
      })
    }, 1500)
    return () => clearTimeout(resultTimerRef.current)
  }, [niche, CPA, CPI, creatives])

  return (
    <div className={styles.roiCalculator}>
      <Container>
        <h2 className={styles.title}>
          Calculate how much you save <br />
          with automation
        </h2>
        <div className={styles.subtitle}>
          Let's measure your user acquisition performance before you hop in.
          Estimate time and money savings after you automate your ad campaigns.
        </div>

        <div className={styles.row}>
          <div className={styles.form}>
            <div className={styles.selectWrapper}>
              <div className={styles.selectLabel}>Your app niche</div>
              <Select
                value={niche}
                onChange={(value) => {
                  trackFirstInteraction()
                  setNiche(value)
                }}
                options={nicheOptions}
              />
            </div>
            <div className={styles.selectWrapper}>
              <div className={styles.selectLabel}>
                Number of creatives per month
              </div>
              <div className={styles.selectRange}>
                <ReactSlider
                  className={styles.slider}
                  thumbClassName={styles.thumb}
                  trackClassName={styles.track}
                  value={creatives}
                  onChange={(value) => {
                    trackFirstInteraction()
                    setCreatives(value)
                  }}
                  min={10}
                  max={500}
                  marks={marksCreatives}
                  markClassName="mark"
                  renderThumb={(props, state) => (
                    <div {...props} key={props.key}>
                      <span>{state.valueNow}</span>
                    </div>
                  )}
                  renderMark={(props) => {
                    return (
                      <div {...props} key={props.key}>
                        <div className="mark-label">{props.key}</div>
                      </div>
                    )
                  }}
                />
              </div>
            </div>
            {isNotGamingHyperCasual ? (
              <div className={styles.selectWrapper}>
                <div className={styles.selectLabel}>CPA</div>
                <div className={styles.selectRange}>
                  <ReactSlider
                    key={isGamingCasual}
                    className={styles.slider}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    value={CPA}
                    onChange={(value) => {
                      trackFirstInteraction()
                      setCPA(value)
                    }}
                    min={10}
                    max={1000}
                    marks={
                      isGamingCasual ? marksGamingCasualCPA : marksGamingCPA
                    }
                    renderThumb={(props, state) => (
                      <div {...props} key={props.key}>
                        <span>{state.valueNow}</span>
                      </div>
                    )}
                    renderMark={(props) => (
                      <div {...props} key={props.key}>
                        <div className="mark-label">{props.key}</div>
                      </div>
                    )}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.selectWrapper}>
                <div className={styles.selectLabel}>CPI</div>
                <div className={styles.selectRange}>
                  <ReactSlider
                    className={styles.slider}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    value={CPI}
                    onChange={(value) => {
                      trackFirstInteraction()
                      setCPI(value)
                    }}
                    marks={marksCPI}
                    renderThumb={(props, state) => (
                      <div {...props} key={props.key}>
                        <span>{state.valueNow}</span>
                      </div>
                    )}
                    renderMark={(props) => (
                      <div {...props} key={props.key}>
                        <div className="mark-label">{props.key}</div>
                      </div>
                    )}
                    min={1}
                    max={100}
                  />
                </div>
              </div>
            )}
          </div>

          <div className={styles.results}>
            <ResultItem
              title="No automation"
              text={`${noAutomation.time} hr/mo, $${noAutomation.money} yearly`}
            />
            <ResultItem
              title="With automation"
              text={`${withAutomation.time} hr/mo, $${withAutomation.money} yearly`}
            />
            <ResultItem
              title="Saved with Scalemate<span>*</span>"
              text={`${saved.time} hr/mo, $${saved.money} yearly`}
            />
            <div className={styles.result}>
              <div className={styles.resultTitle}>
                Unify your app's marketing data today
              </div>
              <Button
                color="accent"
                className={styles.resultSubmit}
                href={`/book-a-demo?data=${encodeURIComponent(
                  JSON.stringify({
                    CPI,
                    CPA,
                    creatives,
                    niche,
                    noAutomation: `${noAutomation.time} hours/mo, $${noAutomation.money} yearly`,
                    withAutomation: `${withAutomation.time} hours/mo, $${withAutomation.money} yearly`,
                    saved: `${saved.time} hours, $${saved.money} yearly`,
                  }),
                )}`}
                trackEvent={EVENTS.ROI_CALCULATOR_DEMO_CLICKED}
                trackProps={{
                  niche,
                  creatives,
                  cpa: CPA,
                  cpi: CPI,
                  saved_money: saved.money,
                  saved_time: saved.time,
                }}
              >
                <Image
                  src={ship}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
                Get a demo
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.disclamer}>
            * Estimated savings using Scalemate, actual numbers may vary.
          </span>
        </div>
      </Container>
    </div>
  )
}

export default ROICalculator
