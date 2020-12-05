<template lang="pug">
  .app
    Hero
    Features
    ScheduleDemo
    Footer
</template>

<script>

import Hero from '@/blocks/Hero'
import Features from '@/blocks/Features'
import ScheduleDemo from '@/blocks/ScheduleDemo'
import Footer from '@/blocks/Footer'

export default {
  name: 'App',
  components: {
    Hero,
    Features,
    ScheduleDemo,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';
.app {

}
</style>