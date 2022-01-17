<template>
  <div class="hero">
    <div class="container">
      <div class="hero-title">
        Your data-driven <span>performance marketing</span> assistant.
      </div>
      <div class="hero-subtitle">
        Cross-team out-of-the-box solution for companies that care about every unit effectiveness.
      </div>
      <div class="hero-form">
        <Input placeholder="Enter your email" v-model="email" />
        <Button color="accent" @click="handleRequest">
          Request a demo
        </Button>
      </div>

      <div class="hero-integrations">
        <div class="hero-wework">
          <span>We work with</span>
          <div class="hero-logos">
            <div class="hero-logo-item" v-for="el of 4" :key="el">{{el}}</div>
          </div>
        </div>
        <div class="hero-ask">
          Not enough? <span>Ask for on-demand integration -> </span> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  name: 'Hero',
  components: {
    Button,
    Input,
  },
  data() {
    return {
      email: '',
    }
  },
  methods: {
    handleRequest() {
      console.log('handle request a demo', this.email)
      this.email = ''
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 700px;
  padding-top: 172px;
  padding-bottom: 172px;

  // background: #111827;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .hero-title {
    max-width: 700px;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
  }

  .hero-title span {
    color: $color-accent-500;
  }

  .hero-subtitle {
    max-width: 674px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #475467;
    margin-bottom: 48px;
  }

  .hero-form {
    max-width: 576px;
    display: flex;
    gap: 12px;
    margin-bottom: 64px;
  }

  .hero-wework {
    display: flex;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  .hero-logos {
    display: flex;
    margin-left: 12px;
  }

  .hero-ask span {
    color: #FD6F8E;

  }
}

@media (max-width: 768px) {
  .hero {
    .hero-title {
      font-size: 48px;
      line-height: 48px;
    }
  }
}
</style>