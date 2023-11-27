<template>
  <div class="unite">
    <Header />
    <Hero />
    <Hold />
    <Discover />
    <Scale />
    <WaitList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Unite/Hero'
import Hold from '@/components/Unite/Hold'
import WaitList from '@/components/Unite/WaitList'
import Scale from '@/components/Unite/Scale'
import Discover from '@/components/Unite/Discover'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Hold,
    Discover,
    Scale,
    WaitList,
    Footer,
  },
  metaInfo: {
    title: "Scalemate | I unite all ad assets in a single ad creative library. ",
    meta: [
      {
        name: "description",
        content: "Gather all ad assets you test for Facebook, TikTok, Snapchat, or Google campaigns in one ad creative library."
      },
      {
        name: "keywords",
        content: "facebook ad creative library, facebook ad library, ad creative library, creative testing library, ad asset library, all assets in one place, creative assets library, facebook ad archive, FB ad library, facebook creative library,"
      },
      {
        property: "og:title",
        content: "Scalemate unified ad creative library page"
      },
      {
        property: "og:description",
        content: "Gather all ad assets you test for Facebook, TikTok, Snapchat, or Google campaigns in one ad creative library."
      },
      {
        property: "og:image",
        content: "/og-image-unite.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Scalemate unified ad creative library page"
      },
      {
        name: "twitter:description",
        content: "Gather all ad assets you test for Facebook, TikTok, Snapchat, or Google campaigns in one ad creative library."
      },
      {
        name: "twitter:image",
        content: "/og-image-unite.png"
      }
    ]
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