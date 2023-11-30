<template>
  <div class="home" >
    <Header />
    <div class="main">
      <Hero />
      <WithScalemate />
      <ROICalculator />
      <HowCanHelp />
      <Features />
      <WaitList />
    </div>
    <div class="fixed">
      <Footer ref="myElement" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import HowCanHelp from '@/components/home/HowCanHelp'
import Features from '@/components/home/Features'
import WithScalemate from '@/components/home/WithScalemate'
import ROICalculator from '@/components/home/ROICalculator'
import WaitList from '@/components/home/WaitList'
import Footer from '@/components/home/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    HowCanHelp,
    Features,
    WithScalemate,
    ROICalculator,
    WaitList,
    Footer,
  },
  metaInfo: {
    title: "Scalemate | Creative Testing Automation Assistant",
    meta: [
      {
        name: "description",
        // content: "Automate your creatives testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
        content: "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster."
      },
      {
        name: "keywords",
        content: "Creatives testing automation, Optimize creative management, creatives testing platform, facebook creatives testing, facebook creatives testing tool, tiktok creatives testing tool, facebook ad testing tool"
      },
      {
        property: "og:title",
        content: "Creatives testing automation tool – Scalemate"
      },
      {
        property: "og:description",
        // content: "Automate your creatives testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
        content: "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster."
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
        content: "Creatives testing automation tool – Scalemate"
      },
      {
        name: "twitter:description",
        content: "Maximize ad performance with our Facebook creatives testing automation tool — validate your ads 3x faster."
        // content: "Automate your creatives testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      },
      {
        name: "twitter:image",
        content: "https://www.scalemate.co/twitter-og-image.png"
      }
    ]
  },
  data() {
    return {
      height: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      const element = this.$refs.myElement
      const height = element.$el.offsetHeight
      this.height = height
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';

.main {
  overflow: hidden;
}

.home {
  background: #1A1A1A;
}

.fixed {
  position: sticky;
  bottom: 0;
  z-index: 0;
  -webkit-transform: translate3d(0,0,0);
  width: 100%;
}

.main {
  position: relative;
  width: 100%;
  z-index: 1;
  
  background: #f8f8f8;
}

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

  .fixed {
    z-index: initial;
    position: static;
    bottom: initial;
  }
}
</style>