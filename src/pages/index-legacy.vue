<template>
  <div class="home">
    <Header />
    <Hero />
    <ROICalculator />
    <HowCanHelp />
    <!-- <Features /> -->
    <FeaturesLegacy />
    <WaitList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/index/Hero'
import HowCanHelp from '@/components/index/HowCanHelp'
// import Features from '@/components/index/Features'
import FeaturesLegacy from '@/components/index/FeaturesLegacy'
import ROICalculator from '@/components/index/ROICalculator'
import WaitList from '@/components/index/WaitList'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    HowCanHelp,
    // Features,
    FeaturesLegacy,
    ROICalculator,
    WaitList,
    Footer,
  },
  metaInfo: {
    title: "Scalemate | Creative Testing Automation Assistant",
    meta: [
      {
        name: "description",
        content: "Automate your creative testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      },
      {
        name: "keywords",
        content: "Creative testing automation, Optimize creative management, creative testing platform, facebook creative testing, facebook creative testing tool, tiktok creative testing tool, facebook ad testing tool"
      },
      {
        property: "og:title",
        content: "Scalemate creative testing automation main page"
      },
      {
        property: "og:description",
        content: "Automate your creative testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      },
      {
        property: "og:image",
        content: "/og-image.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Scalemate creative testing automation main page"
      },
      {
        name: "twitter:description",
        content: "Automate your creative testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      },
      {
        name: "twitter:image",
        content: "/og-image.png"
      }
    ]
  }
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