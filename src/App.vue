<template lang="pug">
  .app
    SuccessPopup(v-if="isPopupOpen" @togglePopup="togglePopup")
    Hero
    Pricing(@togglePopup="togglePopup")
    Features
    ScheduleDemo(@togglePopup="togglePopup")
    Footer
</template>

<script>

import Hero from '@/blocks/Hero'
import Pricing from '@/blocks/Pricing'
import Features from '@/blocks/Features'
import ScheduleDemo from '@/blocks/ScheduleDemo'
import Footer from '@/blocks/Footer'
import SuccessPopup from '@/blocks/SuccessPopup'

export default {
  name: 'App',
  components: {
    Hero,
    Features,
    Pricing,
    ScheduleDemo,
    SuccessPopup,
    Footer
  },

  data () {
    return {
      isPopupOpen: false
    }
  },

  methods: {
    togglePopup () {
      this.isPopupOpen = !this.isPopupOpen
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';
.app {

}
</style>