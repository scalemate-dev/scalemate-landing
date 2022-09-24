<template>
  <div class="home">
    <Header />
    <Hero />
    <ROICalculator />
    <HowCanHelp />
    <Features />
    <WaitList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/blocks/Header'
import Hero from '@/blocks/Hero'
import HowCanHelp from '@/blocks/HowCanHelp'
import Features from '@/blocks/Features'
import ROICalculator from '@/blocks/ROICalculator'
import WaitList from '@/blocks/WaitList'
import Footer from '@/blocks/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    HowCanHelp,
    Features,
    ROICalculator,
    WaitList,
    Footer,
  },
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';

a {
  text-decoration: none;
}

a:hover {
  
}

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