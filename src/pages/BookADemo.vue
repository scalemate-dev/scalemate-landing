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