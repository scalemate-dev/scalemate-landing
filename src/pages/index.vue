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
import Header from '@/components/Header'
import Hero from '@/components/index/Hero'
import HowCanHelp from '@/components/index/HowCanHelp'
import Features from '@/components/index/Features'
import ROICalculator from '@/components/index/ROICalculator'
import WaitList from '@/components/index/WaitList'
import Footer from '@/components/Footer'

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

a:hover {}

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