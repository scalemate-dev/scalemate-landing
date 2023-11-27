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
            <div class="select-range">
              <vue-slider :tooltip="'always'" v-model="creatives" :marks="marksCreatives" :min="1" :max="500"/>
            </div>
          </div>
          <div class="select-wrapper" v-if="isNotGamingHyperCasual">
            <div class="select-label">
              CPA
            </div>
            <div class="select-range"  v-if="isGamingCasual">
              <vue-slider :tooltip="'always'" v-model="CPA" :marks="marksGamingCasualCPA" :min="1" :max="2500" />
            </div>
            <div class="select-range" v-else>
              <vue-slider :tooltip="'always'" v-model="CPA" :marks="marksGamingCPA" :min="1" :max="1000" />
            </div>
          </div>
          <div class="select-wrapper" v-else>
            <div class="select-label">
              CPI
            </div>
            <div class="select-range">
              <vue-slider :tooltip="'always'" v-model="CPI" :marks="marksCPI" :min="1" :max="100" />
            </div>
          </div>
        </div>
        <div class="results">
          <ResultItem
            title="No automation"
            :text="`${noAutomation.time} hours/mo, $${noAutomation.money} yearly`"
          />
          <ResultItem
            title="With automation"
            :text="`${withAutomation.time} hours/mo, $${withAutomation.money} yearly`"
          />
          <ResultItem
            title="Saved with Scalemate<span>*</span>"
            :text="`${saved.time} hours/mo, $${saved.money} yearly`"
          />
          <div>
            <div class="result-title">
              Did you like the result? Test me now
            </div>
            <form class="wait-list-form" name="roi" @submit="(e) => handleRequest(e)">
              <input type="hidden" name="type" value="roi" />
              <input type="hidden" name="cpi" :value="CPI" />
              <input type="hidden" name="cpa" :value="CPA" />
              <input type="hidden" name="creatives" :value="creatives" />
              <input type="hidden" name="niche" :value="niche" />
              <input type="hidden" name="no-automation" :value="`${noAutomation.time} hours, $${noAutomation.money} yearly`" />
              <input type="hidden" name="with-automation" :value="`${withAutomation.time} hours, $${withAutomation.money} yearly`" />
              <input type="hidden" name="saved-with-scalemate" :value="`${saved.time} hours, $${saved.money} yearly`" />
              <Input required v-model="email" class="wait-list-input" name="email" type="email" placeholder="Enter your email" />
              <Button color="accent" :submit="true">
                Test Me Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" />
  </div>
</template>

<script>
import Select from '@/components/Select'
import ResultItem from '@/components/index/ROICalculator/ResultItem'
import { sendForm } from '@/forms.js'
import SuccessPopup from '@/components/index/SuccessPopup'
import Button from '@/components/Button'
import Input from '@/components/Input'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

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
    VueSlider,
    SuccessPopup,
    Input,
    Button
  },
  data() {
    return {
      marksCreatives: [1, 100, 200, 300, 400, 500],
      marksGamingCasualCPA: [1, 500, 1000, 1500, 2000, 2500],
      marksGamingCPA: [1, 200, 400, 600, 800, 1000],
      marksCPI: [1, 20, 40, 60, 80, 100],
      email: '',
      showPopup: false,
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
        return 1.5
      }
      if (this.niche === 'Gaming Hyper Casual') {
        return 38
      }

      return 1
    },

    multiplier () {
      if (this.niche === 'Non-gaming') {
        return 1.15
      }
      if (this.niche === 'Gaming Casual') {
        return 1.15
      }
      if (this.niche === 'Gaming Hyper Casual') {
        return 1.33
      }

      return 1
    },

    isGamingCasual() {
      return this.niche === 'Gaming Casual'
    },
    isNotGamingHyperCasual() {
      return this.niche !== 'Gaming Hyper Casual'
    },
    CPIorCPA() {
      return !this.isNotGamingHyperCasual ? this.CPI : this.CPA
    },
    noAutomation() {
      const time = (NO_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) / MINUTES_IN_HOUR
      const money = (this.eventsAmount * this.CPIorCPA * this.creatives * MONTHS) * this.multiplier + (UAM_HOUR_PRICE * time)
      return {
        time,
        money: Math.round(money)
      }
    },
    withAutomation() {
      const time = (WITH_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) / MINUTES_IN_HOUR
      const money = (this.eventsAmount * this.CPIorCPA * this.creatives * MONTHS) + (UAM_HOUR_PRICE * time)
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
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup
    },

    async handleRequest(event) {
      event.preventDefault();
      console.log(event)
      try {
        await sendForm(event)
        this.email = ''
        this.showPopup = true
      } catch (error) {
        console.error('formspree error: ', error)
      }
    }
  },
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
    gap: 32px;
    flex: 0 0 40%;
    border-radius: 16px;
    border: 1px solid #E5E7EB;
  }

  .select-wrapper {
    width: 100%;
  }

  .select-label {
    margin-bottom: 16px;
    color: #2B2C39;
    font-size: 14px;
  }

  .select-range {
    background: #FAFAFA;
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #E5E7EB;
    padding: 16px 24px;
    width: 100%;
  }

  .results {
    flex: 0 0 35%;
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
  }

  :deep(.vue-slider-rail) {
    height: 6px;
    background: #e5e7eb;
  }

  :deep(.vue-slider-process) {
    /* background: #F63D68; */
    background: #f78a9e;
    opacity: 1;
  }

  :deep(.vue-slider-mark-step) {
    opacity: 0;
  }

  :deep(.vue-slider-dot-handle) {
    background: #F74972;
    box-shadow: 0.5px 0.5px 2px 1px rgba(151, 151, 151, 0.32);
  }

  :deep(.vue-slider-dot) {
    height: 21px !important;
    width: 21px !important;
    /* outline: none !important; */
  }

  :deep(.vue-slider-dot-handle-focus) {
    box-shadow: none !important;
  }

  :deep(.vue-slider-dot-tooltip-inner) {
    color: #6a6a6b;
    background: none;
    border: none;

    &:after {
      content: none;
    }
  }

  :deep(.vue-slider-dot-tooltip-top) {
    top: -4px !important;
  }

  :deep(.vue-slider-mark-label) {
    color: #a2a2a2;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    .row {
      display: block;
    }

    .results {
      margin-top: 48px;
    }

    .title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 18px;
      line-height: 24px;
    }
  }
}

.wait-list {
  padding: 0;
  position: relative;

  &-form {
    display: flex;
    max-width: 528px;
  }

  &-input {
    margin-right: 16px;
  }
}
.result-title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #667085;
  margin-bottom: 16px;
}
</style>