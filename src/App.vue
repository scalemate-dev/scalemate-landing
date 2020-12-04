<template lang="pug">
  .app
    Hero
    Features
</template>

<script>

import Hero from '@/blocks/Hero'
import Features from '@/blocks/Features'
export default {
  name: 'App',
  components: {
    Hero,
    Features
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/fonts.scss';
// @import '@/assets/global.scss';
.app {

}

</style>