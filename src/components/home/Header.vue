<template>
  <header class="header">
    <div class="container">
      <div class="header-navigation">
        <router-link to="/" class="header-logo">
          <inline-svg class="logo" alt="Scalemate logo" :src="require('@/assets/icons/logo-poppins.svg')" />
        </router-link>
        <NavDropdown :items="soulutions" label="Product"/>
      </div>
      <Button color="no-background">Log in</Button>
      <Button color="outline">Get Started</Button>
    </div>
  </header>
</template>

<script>
import Button from '@/components/Button'
import InlineSvg from 'vue-inline-svg'
import NavDropdown from '@/components/NavDropdown'

export default {
  name: 'Header',
  components: {
    Button,
    NavDropdown,
    InlineSvg,
  },

  computed: {
    soulutions () {
      return [
        {label: 'Automate', path: '/automate'},
        {label: 'Creative library', path: '/unite', disabled: false},
        {label: 'Analytics', path: '/analytics', disabled: true},
      ]
    }
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
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 10px;

  .container {
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    max-width: 772px;
    @include backgroundBlur(24px, rgba(255, 194, 194, 0.95));
    background-color: rgba(#fff, 0.5);
  }

  .logo {
    /deep/ path {
      fill: #000000;
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

@include tablet-horizontal {
  .header {
    top: 0;

    .container {
      border-radius: 0px 0px 10px 10px;
      padding: 24px 16px;
    }
  }
}
</style>