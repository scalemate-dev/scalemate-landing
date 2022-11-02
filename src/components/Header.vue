<template>
  <div class="header">
    <div class="container">
      <div class="header-navigation">
        <router-link to="/" class="header-logo">
          <inline-svg class="logo" alt="Scalemate logo" :src="require('@/assets/icons/logo-black.svg')" />
        </router-link>
        <!-- <div class="header-link">
          Features
        </div>
        <div class="header-link">
          Company
        </div> -->
      </div>
      <router-link class="header-link" to="/automate">
        Automate
      </router-link>
      <!-- <Button @click="handleRequest" color="accent">
        Request a demo
      </Button> -->
    </div>
  </div>
</template>

<script>
// import Button from '@/components/Button'
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Header',
  components: {
    // Button,
    InlineSvg,
  },
  methods: {
    handleRequest() {
      console.log('handle request a demo')
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 48px 0;
  width: 100%;
  // position: fixed;

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .logo {
    *  > {
      fill: #1D2939;
    }
  }

  .header-navigation {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 40px;
  }

  .header-link {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2f2f2f;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 24px 0;
  }
}
</style>