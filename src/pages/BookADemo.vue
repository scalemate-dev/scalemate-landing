<template>
  <div class="book-a-demo">
    <Header />
    <div class="main">
      <DemoForm />
      <WaitList :noButton="true"/>
    </div>
    <div class="fixed">
      <Footer ref="myElement" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/home/Header'
import DemoForm from '@/components/DemoForm'
import WaitList from '@/components/home/WaitList'
import Footer from '@/components/home/Footer'

export default {
  name: 'App',
  components: {
    Header,
    DemoForm,
    WaitList,
    Footer,
  },
  metaInfo: {
    title: "Scalemate | Book a Demo",
    meta: [
      {
        name: "description",
        content: "Experience the power of automation for creatives testing. Book a demo with Scalemate to see how you can validate your ads 3x faster."
      },
      {
        name: "keywords",
        content: "Book demo creatives testing, Scalemate demo, ad testing automation tool, cross-platform creatives testing, schedule Scalemate demo, ad validation acceleration"
      },
      {
        property: "og:title",
        content: "Creative Testing Automation - Book a Demo"
      },
      {
        property: "og:description",
        content: "Get a personalized demonstration of Scalemate and learn how our tool can triple your ad testing speed on Facebook and beyond."
      },
      // Keep the og:image the same unless you have a specific image for the demo page.
      {
        property: "og:image",
        content: "/og-image-demo.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Creative Testing Automation - Book a Demo"
      },
      {
        name: "twitter:description",
        content: "Get a personalized demonstration of Scalemate and learn how our tool can triple your ad testing speed on Facebook and beyond."
      },
      {
        name: "twitter:image",
        content: "/og-image-demo.png"
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

<style lang="scss" scoped>
@import '@/assets/fonts.scss';

.main {
  overflow: hidden;
}

.book-a-demo {
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
  background: #FFF;
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