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
        <Button color="blue" @click="handleRequest">
          Request a demo
        </Button>
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
  background: #111827;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .hero-title {
    max-width: 700px;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  .hero-title span {
    color: #818CF8;
  }

  .hero-subtitle {
    max-width: 674px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #D1D5DB;
    margin-bottom: 48px;
  }

  .hero-form {
    max-width: 576px;
    display: flex;
    gap: 12px;
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