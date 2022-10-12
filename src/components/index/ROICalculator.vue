<template>
  <div class="roi-calculator">
    <div class="container">
      <h2 class="title">
        Calculate <span>how much you save</span> with automation
      </h2>
      <div class="subtitle">
        Let’s measure your user acquisition performance before you hop in. Estimate time and money savings after you
        automate
        your creative testing process.
      </div>

      <div class="row">
        <div class="form">
          <div class="select-wrapper">
            <div class="select-label">
              Your app niche
            </div>
            <Select v-model="niche" :options="nicheOptions" />
          </div>
          <div class="select-wrapper">
            <div class="select-label">
              Number of creatives per month
            </div>
            <vue-range-slider ref="slider" v-model="creatives" :min="1" :max="500"/>
          </div>
          <div class="select-wrapper" v-if="isNotGamingHyperCasual">
            <div class="select-label">
              CPA
            </div>
            <vue-range-slider ref="slider" v-model="CPA" :step="0.5" :min="1" :max="10" />
          </div>
          <div class="select-wrapper" v-else>
            <div class="select-label">
              CPI
            </div>
            <vue-range-slider ref="slider" v-model="CPI" :step="0.5" :min="1" :max="10" />
          </div>
        </div>
        <div class="results">
          <ResultItem
            title="No automation"
            :firstLabel="`${noAutomation.time} hours`"
            :secondLabel="`$${noAutomation.money} yearly`"
          />
          <ResultItem
            title="With automation"
            :firstLabel="`${withAutomation.time} hours`"
            :secondLabel="`$${withAutomation.money} yearly`"
          />
          <ResultItem
            title="Saved with Scalemate<span>*</span>"
            :firstLabel="`${saved.time} hours`"
            :secondLabel="`$${saved.money} yearly`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select'
import ResultItem from '@/components/index/ROICalculator/ResultItem'
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

const NO_AUTOMATION_TIME_YEARLY = 8
const WITH_AUTOMATION_TIME_YEARLY = 3
const MONTHS = 12
const MINUTES_IN_HOUR = 60
const UAM_HOUR_PRICE = 20

export default {
  name: 'ROICalculator',
  components: {
    Select,
    ResultItem,
    VueRangeSlider
  },
  data() {
    return {
      niche: 'Gaming Casual',
      CPA: 2.5,
      CPI: 1.5,
      creatives: 30,
      nicheOptions: [
        'Gaming Casual',
        'Gaming Hyper Casual',
        'Non-gaming',
      ]
    }
  },
  computed: {
    eventsAmount() {
      if (this.niche === 'Non-gaming') {
        return 10
      }
      if (this.niche === 'Gaming Casual') {
        return 2.5
      }
      if (this.niche === 'Gaming Hyper Casual') {
        return 38
      }

      return 0
    },
    isNotGamingHyperCasual() {
      return this.niche !== 'Gaming Hyper Casual'
    },
    CPIorCPA() {
      return !this.isNotGamingHyperCasual ? this.CPI : this.CPA
    },
    noAutomation() {
      const time = (NO_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) / MINUTES_IN_HOUR
      const money = (this.eventsAmount * this.CPIorCPA * this.creatives * MONTHS) * (1.15) + (UAM_HOUR_PRICE * time)
      return {
        time,
        money: Math.round(money)
      }
    },
    withAutomation() {
      const time = (WITH_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) / MINUTES_IN_HOUR
      const money = (this.eventsAmount * this.CPIorCPA * this.creatives * MONTHS) * (1.04) + (UAM_HOUR_PRICE * time)
      return {
        time,
        money: Math.round(money)
      }
    },
    saved() {
      // const money = (this.noAutomation.money - this.withAutomation.money) / (this.noAutomation.money) * 100
      const money = (this.noAutomation.money - this.withAutomation.money)
      return {
        time: Math.round(this.noAutomation.time - this.withAutomation.time),
        money: isNaN(money) ? 0 : Math.floor(money * 10) / 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.roi-calculator {
  padding: 140px 0 196px;

  .title {
    max-width: 800px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -2%;
    margin: 0 auto;
    color: $color-text-800;
    text-align: center;
    margin-bottom: 24px;

    span {
      color: $color-accent-500;
    }
  }

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #6B7280;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 48px;
  }

  .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 72px;
    border-radius: 16px;
  }

  .form {
    padding: 48px 32px;
    background: #F2F4F7;
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
    flex: 0 0 40%;
    border-radius: 16px;
    border: 1px solid #E5E7EB;
  }

  .select-wrapper {
    width: 100%;
  }

  .select-label {
    margin-bottom: 12px;
    color: #2B2C39;
    font-size: 14px;
  }

  .results {
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
  }

  :deep(.vue-range-slider) {
    padding: 0 !important;
    margin-top: 40px;
  }

  :deep(.slider-process) {
    background: #f78a9e !important;
  }

  :deep(.slider-dot) {
    background: #F74972 !important;
    box-shadow: none !important;
    width: 24px !important;
    height: 24px !important;
    top: -9px !important;
  }

  :deep(.slider) {
    background: #E5E7EB !important;
  }

  :deep(.slider-tooltip-wrap) {
    top: -4px !important;
  }

  :deep(.slider-tooltip) {
    background: none !important;
    border: none !important;
    color: #7d7d7e !important;
    padding: 0 !important;

    &:before {
      content: none !important;
    }
  }

  @media (max-width: 768px) {
    .row {
      display: block;
    }

    .results {
      margin-top: 48px;
    }
  }
}
</style>