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
      <div class="form">
        <div class="select-wrapper">
          <div class="select-label">
            Your app niche
          </div>
          <select v-model="niche" placeholder="Please select one">
            <option>Gaming Casual</option>
            <option>Gaming Hyper Casual</option>
            <option>Non-gaming</option>
          </select>
        </div>
        <Input v-model="creatives" type="number" label="Number of creatives per month" placeholder="10" />
        <Input v-model="CPA" type="number" label="CPA" placeholder="600" v-if="isNotGamingHyperCasual" />
        <Input v-model="CPI" type="number" label="CPI" placeholder="3" v-else />
      </div>
      <div class="results">
        <div class="result-item">
          <div class="result-title">
            No automation
          </div>
          <div class="result-spent">
            Time spent yearly <b>{{ noAutomation.time }} hours</b>
          </div>
          <div class="result-spent">
            Money spent yearly <b>${{ noAutomation.money }}</b>
          </div>
        </div>
        <div class="result-item">
          <div class="result-title">
            With automation
          </div>
          <div class="result-spent">
            Time spent yearly <b>{{ withAutomation.time }} hours</b>
          </div>
          <div class="result-spent">
            Money spent yearly <b>${{ withAutomation.money }}</b>
          </div>
        </div>
        <div class="result-item">
          <div class="result-title">
            Saved with Scalemate<span>*</span>
          </div>
          <div class="result-spent">
            Time spent yearly <b>{{ saved.time }} hours</b>
          </div>
          <div class="result-spent">
            Money spent yearly <b>{{ saved.money }}%</b>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'

const NO_AUTOMATION_TIME_YEARLY = 8
const WITH_AUTOMATION_TIME_YEARLY = 3
const MONTHS = 12
const MINUTES_IN_HOUR = 60
const UAM_HOUR_PRICE = 20

export default {
  name: 'ROICalculator',
  components: {
    Input
  },
  data() {
    return {
      niche: 'Gaming Casual',
      CPA: null,
      CPI: null,
      creatives: null
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
      const money = (this.noAutomation.money - this.withAutomation.money) / (this.noAutomation.money) * 100
      return {
        time: this.noAutomation.time - this.withAutomation.time,
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

  .form {
    display: flex;
    gap: 24px;
  }

  .select-wrapper {
    width: 100%;
  }

  select {
    width: 100%;
    font-style: normal;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    border: 1px solid rgba(166, 170, 180, 0.5);
    border-radius: 10px;
    padding: 16px 18px;
    outline: none;
    transition: border-color 0.2s ease;
    will-change: border-color;
  }

  .select-label {
    margin-bottom: 12px;
    color: #878d93;
    font-size: 14px;
  }

  .results {
    margin-top: 48px;
    display: flex;
    gap: 24px;
  }

  .result-item {
    flex: 1;
  }

  .result-title {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 600;

    span {
      color: $color-accent-500;
    }
  }

  .result-spent {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #6B7280;

    b {
      font-weight: 600;
      color: #6B7280;
    }
  }
}
</style>