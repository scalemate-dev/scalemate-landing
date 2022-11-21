<template>
  <div class="wait-list">
    <div class="container">
      <inline-svg class="wait-list-angles" :src="require('@/assets/icons/bottom-angles.svg')" />
      <h2 class="wait-list-title">
        Have all ad assets <span>in one place</span> and take control back
      </h2>
      <div class="wait-list-subtitle">1-month free trial | Dedicated onboarding | Custom integrations</div>
      <form class="wait-list-form" name="join-wait-list" @submit="(e) => handleRequest(e)">
        <input type="hidden" name="type" value="join-wait-list" />
        <Input required v-model="email" class="wait-list-input" name="email" type="email" placeholder="Enter your email" />
        <Button color="accent" :submit="true">
          Test Me Out
        </Button>
      </form>
    </div>
    <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

import { sendForm } from '@/formspree.js'

import Button from '@/components/Button'
import Input from '@/components/Input'
import SuccessPopup from '@/components/index/SuccessPopup'

export default {
  name: 'BottomCTA',
  components: {
    Button,
    Input,
    InlineSvg,
    SuccessPopup
  },

  data() {
    return {
      email: '',
      showPopup: false
    }
  },

  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
    },

    async handleRequest(event) {
      event.preventDefault();
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
.wait-list {
  padding: 172px 0;

  position: relative;

  &-angles {
    position: absolute;
    z-index: -1;
    transform: translate(-50%, -50%) scale(1.2);
    top: 43%;
    left: 50%;
  }

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: $color-text-800;
    margin: 0 auto;
    margin-bottom: 16px;
    max-width: 760px;

    span {
      color: $color-accent-500;
    }
  }

  &-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;

    color: $color-text-600;

    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 758px;
  }

  &-form {
    display: flex;
    margin: 0 auto;
    max-width: 528px;
  }

  &-input {
    margin-right: 16px;
  }
}

@include desktop-s {
  .wait-list {
    padding: 32px 0;
    &-angles {
      display: none;
    }
  }
}

@include tablet-horizontal {
  .wait-list {
    &-title {
      font-size: 42px;
      line-height: 42px;
    }
  }
}

@include tablet-vertical {
  .wait-list {
    &-title {
      font-size: 32px;
      line-height: 32px;
    }
    &-subtitle {
      font-size: 12px;
      line-height: 18px;
    }

    &-form {
      flex-flow: column nowrap;
      // align-items: center;
    }

    &-input {
      margin: 0;
      margin-bottom: 8px;
    }
  }
}
</style>