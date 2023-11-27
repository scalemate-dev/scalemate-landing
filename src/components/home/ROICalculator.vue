<template>
  <div class="roi-calculator">
    <div class="container">
      <h2 class="title">
        Calculate how much you save <br />
        with automation
      </h2>
      <div class="subtitle">
        Let’s measure your user acquisition performance before you hop in.
        Estimate time and money savings after you automate your creative testing
        process.
      </div>

      <div class="row">
        <div class="form">
          <div class="select-wrapper">
            <div class="select-label">Your app niche</div>
            <Select v-model="niche" :options="nicheOptions" />
          </div>
          <div class="select-wrapper">
            <div class="select-label">Number of creatives per month</div>
            <div class="select-range">
              <vue-slider
                :tooltip="'always'"
                v-model="creatives"
                :marks="marksCreatives"
                :min="1"
                :max="500"
              />
            </div>
          </div>
          <div class="select-wrapper" v-if="isNotGamingHyperCasual">
            <div class="select-label">CPA</div>
            <div class="select-range" v-if="isGamingCasual">
              <vue-slider
                :tooltip="'always'"
                v-model="CPA"
                :marks="marksGamingCasualCPA"
                :min="1"
                :max="2500"
              />
            </div>
            <div class="select-range" v-else>
              <vue-slider
                :tooltip="'always'"
                v-model="CPA"
                :marks="marksGamingCPA"
                :min="1"
                :max="1000"
              />
            </div>
          </div>
          <div class="select-wrapper" v-else>
            <div class="select-label">CPI</div>
            <div class="select-range">
              <vue-slider
                :tooltip="'always'"
                v-model="CPI"
                :marks="marksCPI"
                :min="1"
                :max="100"
              />
            </div>
          </div>
        </div>
        <div class="results">
          <ResultItem
            title="No automation"
            :text="`${noAutomation.time} hr/mo, $${noAutomation.money} yearly`"
          />
          <ResultItem
            title="With automation"
            :text="`${withAutomation.time} hr/mo, $${withAutomation.money} yearly`"
          />
          <ResultItem
            title="Saved with Scalemate<span>*</span>"
            :text="`${saved.time} hr/mo, $${saved.money} yearly`"
          />
          <div class="result">
            <div class="result-title">
              Unify your app’s marketing data today
            </div>
            <Button
              color="accent"
              class="result-submit"
              :to="{ name: 'demo', params: {
                data: {
                  CPI,
                  CPA,
                  creatives,
                  niche,
                  noAutomation: `${noAutomation.time} hours/mo, $${noAutomation.money} yearly`,
                  withAutomation: `${withAutomation.time} hours/mo, $${withAutomation.money} yearly`,
                  withAutomation: `${withAutomation.time} hours/mo, $${withAutomation.money} yearly`,
                  saved: `${saved.time} hours, $${saved.money} yearly`
                }
              } }"
            >
              <inline-svg :src="require(`@/assets/icons/help/ship.svg`)" />
              Get a demo
            </Button>
            <!-- <form class="wait-list-form" name="roi" @submit="(e) => handleRequest(e)">
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
                <inline-svg :src="require(`@/assets/icons/help/ship.svg`)" />
                Get a demo
              </Button>
            </form> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" /> -->
  </div>
</template>

<script>
import Select from "@/components/Select";
import ResultItem from "@/components/home/ROICalculator/ResultItem";
import { sendForm } from "@/forms.js";
// import SuccessPopup from '@/components/index/SuccessPopup'
import Button from "@/components/Button";
// import Input from '@/components/Input'
import InlineSvg from "vue-inline-svg";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const NO_AUTOMATION_TIME_YEARLY = 8;
const WITH_AUTOMATION_TIME_YEARLY = 3;
const MONTHS = 12;
const MINUTES_IN_HOUR = 60;
const UAM_HOUR_PRICE = 20;

export default {
  name: "ROICalculator",
  components: {
    Select,
    ResultItem,
    VueSlider,
    // SuccessPopup,
    InlineSvg,
    // Input,
    Button,
  },
  data() {
    return {
      marksCreatives: [1, 100, 200, 300, 400, 500],
      marksGamingCasualCPA: [1, 500, 1000, 1500, 2000, 2500],
      marksGamingCPA: [1, 200, 400, 600, 800, 1000],
      marksCPI: [1, 20, 40, 60, 80, 100],
      email: "",
      showPopup: false,
      niche: "Gaming Casual",
      CPA: 2.5,
      CPI: 1.5,
      creatives: 30,
      nicheOptions: ["Gaming Casual", "Gaming Hyper Casual", "Non-gaming"],
    };
  },
  computed: {
    eventsAmount() {
      if (this.niche === "Non-gaming") {
        return 10;
      }
      if (this.niche === "Gaming Casual") {
        return 1.5;
      }
      if (this.niche === "Gaming Hyper Casual") {
        return 38;
      }

      return 1;
    },

    multiplier() {
      if (this.niche === "Non-gaming") {
        return 1.15;
      }
      if (this.niche === "Gaming Casual") {
        return 1.15;
      }
      if (this.niche === "Gaming Hyper Casual") {
        return 1.33;
      }

      return 1;
    },

    isGamingCasual() {
      return this.niche === "Gaming Casual";
    },
    isNotGamingHyperCasual() {
      return this.niche !== "Gaming Hyper Casual";
    },
    CPIorCPA() {
      return !this.isNotGamingHyperCasual ? this.CPI : this.CPA;
    },
    noAutomation() {
      const time =
        (NO_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) / MINUTES_IN_HOUR;
      const money =
        this.eventsAmount *
          this.CPIorCPA *
          this.creatives *
          MONTHS *
          this.multiplier +
        UAM_HOUR_PRICE * time;
      return {
        time,
        money: Math.round(money),
      };
    },
    withAutomation() {
      const time =
        (WITH_AUTOMATION_TIME_YEARLY * this.creatives * MONTHS) /
        MINUTES_IN_HOUR;
      const money =
        this.eventsAmount * this.CPIorCPA * this.creatives * MONTHS +
        UAM_HOUR_PRICE * time;
      return {
        time,
        money: Math.round(money),
      };
    },
    saved() {
      // const money = (this.noAutomation.money - this.withAutomation.money) / (this.noAutomation.money) * 100
      const money = this.noAutomation.money - this.withAutomation.money;
      return {
        time: Math.round(this.noAutomation.time - this.withAutomation.time),
        money: isNaN(money) ? 0 : Math.floor(money * 10) / 10,
      };
    },
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },

    async handleRequest(event) {
      event.preventDefault();
      console.log(event);
      try {
        await sendForm(event);
        this.email = "";
        this.showPopup = true;
      } catch (error) {
        console.error("formspree error: ", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.roi-calculator {
  padding: 140px 0 196px;

  .title {
    max-width: 768px;
    margin: 0 auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #121718;
    margin-bottom: 20px;
  }

  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #121718;
    max-width: 768px;
    margin: 0 auto;
    margin-bottom: 64px;
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
    padding: 36px;
    background: linear-gradient(
      124.28deg,
      rgba(246, 61, 104, 0.4) 18.79%,
      rgba(251, 214, 119, 0.4) 77.96%
    );
    display: flex;
    flex-flow: column nowrap;
    gap: 32px;
    flex: 0 0 40%;
    border-radius: 24px;
    border: 1px solid #1a1a1a;
  }

  .select-wrapper {
    width: 100%;
  }

  .select-label {
    margin-bottom: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16.1643px;
    line-height: 23px;
    color: #121718;
  }

  .select-range {
    background: #fafafa;
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    padding: 50px 24px;
    width: 100%;
  }

  .results {
    flex: 0 0 35%;
    display: flex;
    flex-flow: column nowrap;
    gap: 48px;
  }

  .result {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  :deep(.vue-slider-rail) {
    height: 6px;
    background: #e5e7eb;
  }

  :deep(.vue-slider-process) {
    /* background: #F63D68; */
    background: #f63d68;
    opacity: 1;
  }

  :deep(.vue-slider-mark-step) {
    opacity: 0;
  }

  :deep(.vue-slider-dot-handle) {
    background: #fcfcfd;
    border: 1.15459px solid #eaecf0;
    box-shadow: 0px 1.15459px 3.46377px rgba(16, 24, 40, 0.1),
      0px 1.15459px 2.30918px rgba(16, 24, 40, 0.06);
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13.8551px;
    line-height: 13px;
    color: #747576;
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
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13.8551px;
    line-height: 21px;
    color: #747576;
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #747576;
  margin-bottom: 8px;
}

@include tablet-horizontal {
  .roi-calculator {
    padding: 64px 0;

    .result-submit {
      width: 100%;
    }

    .title {
      margin-bottom: 16px;
      font-size: 30px;
      line-height: 44px;
    }

    .subtitle {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 48px;
    }

    .row {
      flex-flow: column nowrap;
      gap: 48px;
    }

    .form {
      width: 100%;
    }

    .results {
      width: 100%;
      gap: 32px;
    }
  }
}
</style>
