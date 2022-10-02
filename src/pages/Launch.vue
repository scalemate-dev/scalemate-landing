<template>
  <div class="home">
    <Header />
    <Hero />
    <Rules />
    <WaitList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Launch/Hero'
import WaitList from '@/components/Launch/WaitList'
import Rules from '@/components/Launch/Rules'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Rules,
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