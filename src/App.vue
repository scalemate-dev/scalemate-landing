<template>
  <div class="home">
    <Header />
    <Hero />
    <Features />
    <Metrics />
    <Footer />
  </div>
</template>

<script>
import Header from '@/blocks/Header'
import Hero from '@/blocks/Hero'
import Features from '@/blocks/Features'
import Metrics from '@/blocks/Metrics'
import Footer from '@/blocks/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Features,
    Metrics,
    Footer,
  },
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';

.container {
  width: 100%;
  max-width: 1440px;
  padding: 0 112px;
  margin: 0 auto;
}

@media (max-width: 1080px) {
  .container {
    padding: 0 64px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
}
</style>