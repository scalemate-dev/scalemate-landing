<template>
  <div class="wait-list">
    <div class="container">
      <div class="wait-list-title">Join <span>waitlist</span> and get 2 month free trial!</div>
      <div class="wait-list-subtitle">Cross-team out-of-the-box solution for companies that care about every unit effectiveness.</div>
      <form class="wait-list-form" :submit="handleRequest">
        <Input
          required
          v-model="email"
          class="wait-list-input"
          placeholder="Enter your email"
        />
        <Button color="accent" submit>
          Join waitlist
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  name: 'BottomCTA',
  components: {
    Button,
    Input
  },

  data() {
    return {
      email: ''
    }
  },

  methods: {
    handleRequest() {
      console.log('handle request a demo', this.email, this.$slots)
      this.email = ''
    }
  },
}
</script>

<style lang="scss" scoped>
.wait-list {
  padding: 172px 0;

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
</style>