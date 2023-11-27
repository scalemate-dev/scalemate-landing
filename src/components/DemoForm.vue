<template>
  <div class="demo">
    <inline-svg class="linear-background-1" :src="require(`@/assets/icons/demo-linear-background.svg`)" />
    <inline-svg class="linear-background-2" :src="require(`@/assets/icons/demo-linear-background-2.svg`)" />
    <div class="demo-form">
      <div class="demo-hero">
        <div class="demo-title">Get started today</div>
        <div class="demo-description">
          Join the community of advertisers to learn how you can triple-scale your
          marketing with Scalemate
        </div>
      </div>
      <form class="demo-container" name="demo-form" @submit="(e) => handleRequest(e)">
        <input type="hidden" name="type" value="demo-form" />
        <input type="hidden" name="jobPosition" :value="jobPosition" />
        <input type="hidden" name="monthlyBudget" :value="monthlyBudget" />
        <template v-if="params">
          <input type="hidden" name="cpi" :value="params.CPI" />
          <input type="hidden" name="cpa" :value="params.CPA" />
          <input type="hidden" name="creatives" :value="params.creatives" />
          <input type="hidden" name="niche" :value="params.niche" />
          <input type="hidden" name="no-automation" :value="params.noAutomation" />
          <input type="hidden" name="with-automation" :value="params.withAutomation" />
          <input type="hidden" name="saved-with-scalemate" :value="params.saved" />
        </template>
        <Input
          ref="name"
          :required="true"
          v-model="name"
          label="Name"
          name="name"
          type="text"
          placeholder="Jack Divinson"
        />
        <Input
          :required="true"
          v-model="email"
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <Select
          label="Job position"
          v-model="jobPosition"
          placeholder="Select your position"
          :options="jobPositionOptions"
        />
        <!-- :required="true" -->
        <Input
          v-model="companyName"
          label="Company Name"
          name="company-name"
          type="text"
          placeholder="Scalemate"
        />
        <!-- :required="true" -->
        <Select
          label="Monthly ad budget"
          v-model="monthlyBudget"
          placeholder="Select your ad monthly budget"
          :options="monthlyBudgetOptions"
        />
        <Input
          :textarea="true"
          v-model="message"
          label="Message"
          name="message"
          type="text"
          placeholder="Your message here.."
        />
        <Button color='accent' :outline="formSent" :wide="true" :submit="true" :loading="loading" :disabled="formSent"> 
          {{ formSent ? 'All Set! We\'ll Reach Out Soon 👍'  : 'Book a demo'}}
        </Button>
      </form>
    </div>
    <!-- <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" /> -->
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import { sendForm } from '@/forms.js'
// import SuccessPopup from '@/components/index/SuccessPopup'
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";


export default {
  name: "App",
  components: {
    InlineSvg,
    // SuccessPopup,
    Input,
    Select,
    Button,
  },
  data() {
    return {
      loading: false,
      formSent: false,
      showPopup: false,
      dataParams: null,
      name: "",
      email: "",
      jobPosition: "",
      companyName: "",
      monthlyBudget: "",
      message: "",
      jobPositionOptions: [
        "C-level",
        "Team lead / Head (management)",
        "User acquisition manager",
        "Creative designer",
        "Other",
      ],
      monthlyBudgetOptions: [
        "Less than $20,000",
        "$20,001 - $50,000",
        "$50,001 - $100,000",
        "$100,001 - $500,000",
        "Over $500,000",
        "Prefer not to answer",
      ],
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup
    },
    async handleRequest(event) {
      event.preventDefault();
      console.log(this.formValues)
      try {
        this.loading = true
        await sendForm(this.formValues)

        this.formSent = true
        this.loading = false

      } catch (error) {
        this.loading = false
        console.error('formspree error: ', error)
      }
    }
  },
  computed: {
    params: function () {
      console.log('this.$route.params.data', this.$route.params.data)
      return this.$route.params.data;
    },

    formValues () {
      return {
        dataParams: this.params,
        name: this.name,
        email: this.email,
        jobPosition: this.jobPosition,
        companyName: this.companyName,
        monthlyBudget: this.monthlyBudget,
        message: this.message
      }
    }
  },
  mounted() {
    this.$refs.name.$el.focus();
  }
};
</script>

<style lang="scss" scoped>
.demo {
  position: relative;

  .linear-background-1 {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-5%, -5%);
    z-index: 0;
  }

  .linear-background-2 {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(10%, -10%);
    z-index: 0;
  }

  &-container {
    max-width: 522px;
    padding: 0px 24px;
    margin: 0 auto;
    margin-top: 64px;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }

  &-form {
    padding: 192px 24px 167px;
    position: relative;
    z-index: 1;
  }

  &-hero {
    max-width: 816px;
    padding: 0 24px;
    margin: 0 auto;
  }

  &-title {
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

  &-description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #121718;
  }
}
</style>
