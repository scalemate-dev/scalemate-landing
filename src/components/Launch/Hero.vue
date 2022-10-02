<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero-title">
        <span>One click</span><br /> to launch them all
      </h1>
      <div class="hero-subtitle">
        Scalemate automates creative testing across platforms. One click – I upload your creatives to the library. Two clicks – I launch your campaign on all ad platforms you work with.
      </div>
      <form class="hero-form" name="request-demo" @submit.prevent="(e) => handleRequest(e)">
        <input type="hidden" name="type" value="request-a-demo" />
        <Input placeholder="Enter your email" :required="true" type="email" name="email" v-model="email" />
        <Button color="accent" :submit="true">
          Test Me Out
        </Button>
      </form>

      <div class="hero-integrations">
        <div class="hero-wework">
          <span>I work with</span>
          <div class="hero-logos">
            <inline-svg class="hero-logo-item" v-for="(el, i) of integrations" :key="i" :src="el" />
          </div>
        </div>
        <div class="hero-ask">
          Not enough? <a href="mailto:info@scalemate.co?subject=Hi, I'm interested in custom integration."><span>Ask for
              on-demand integration -></span> </a>
        </div>
      </div>

      <!-- <div class="hero-bg">
        <inline-svg :src="require('@/assets/icons/hero-bg.svg')" />
      </div> -->
      <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" />
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import { sendForm } from '@/formspree.js'

import Button from '@/components/Button'
import Input from '@/components/Input'
import SuccessPopup from '@/components/index/SuccessPopup'

export default {
  name: 'Hero',
  components: {
    Button,
    Input,
    InlineSvg,
    SuccessPopup
  },

  data() {
    return {
      showPopup: false,
      email: '',
      integrations: [
        require('@/assets/icons/tiktok-logo.svg'),
        require('@/assets/icons/fb.svg'),
        require('@/assets/icons/appsflyer.svg'),
      ]
    }
  },

  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
    },

    async handleRequest(event) {
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
.hero {
  min-height: 700px;
  padding-top: 104px;
  padding-bottom: 172px;

  // background: #111827;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .hero-title {
    max-width: 700px;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
    text-align: center;
  }

  .hero-title span {
    color: $color-accent-500;
  }

  .hero-subtitle {
    max-width: 900px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #475467;
    margin-bottom: 48px;
    text-align: center;
  }

  .hero-form {
    width: 100%;
    max-width: 576px;
    display: flex;
    gap: 12px;
    margin-bottom: 64px;
  }

  .hero-wework {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  .hero-logos {
    display: flex;
    margin-left: 12px;
  }

  .hero-logo-item {
    height: 21px;
    width: auto;
    margin-right: 8px;
  }

  .hero-ask span {
    color: #FD6F8E;
  }

  .hero-bg {
    position: absolute;
    right: 0;
    top: 0;

    svg {
      width: 100%;
    }
  }
}

@include desktop-s {
  .hero-bg {
    top: -20%;
    max-width: 30%;
  }
}

@include tablet-horizontal {
  .hero-bg {
    display: none;
  }
}

@include tablet-vertical {
  .hero {
    .hero-title {
      font-size: 42px;
      line-height: 42px;
    }

    .hero-subtitle {
      font-size: 18px;
      line-height: 18px;
    }
  }
}
</style>