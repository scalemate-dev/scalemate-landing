<template>
  <div class="wait-list">
    <div class="container">
      <inline-svg class="wait-list-angles" :src="require('@/assets/icons/bottom-angles.svg')"/>
      <div class="wait-list-title">Join waitlist and get <span>3 month</span> free trial!</div>
      <div class="wait-list-subtitle">Cross-team out-of-the-box solution for companies that care about every unit effectiveness.</div>
      <form
        class="wait-list-form"
        name="join-wait-list"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="join-wait-list" value="join-wait-list" />
        <Input
          required
          v-model="email"
          class="wait-list-input"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <Button color="accent" :submit="true">
          Join waitlist
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'BottomCTA',
  components: {
    Button,
    Input,
    InlineSvg,
  },

  data() {
    return {
      email: ''
    }
  },

  methods: {
    handleRequest() {
      this.email = ''
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
    margin-bottom: 16px;

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
    max-width: 688px;
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
      font-size: 18px;
      line-height: 20px;
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