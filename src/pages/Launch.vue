<template>
  <div class="home">
    <Header />
    <Hero />
    <LighterPath />
    <Features :entries="features" />
    <Rules />
    <Align />
    <WaitList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Launch/Hero'
import LighterPath from '@/components/Launch/LighterPath'
import WaitList from '@/components/Launch/WaitList'
import Features from '@/components/Launch/Features'
import Align from '@/components/Launch/Align'
import Rules from '@/components/Launch/Rules'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Rules,
    Features,
    Align,
    LighterPath,
    WaitList,
    Footer,
  },
  metaInfo: {
    title: "Scalemate | I automate creative testing workflows across platforms.",
    meta: [
      {
        name: "description",
        content: "Launch Facebook, Tik-Tok, and Snapchat campaigns in 1 click. Speed up creative upload and set automated workflows."
      },
      {
        name: "keywords",
        content: "automated testing workflows, automated creative launch, cross-platform creative testing, automate creative rotation, automated campaign launch, automated creative upload"
      },
      {
        property: "og:title",
        content: "Scalemate automated creative launch page"
      },
      {
        property: "og:description",
        content: "Launch Facebook, Tik-Tok, and Snapchat campaigns in 1 click. Speed up creative upload and set automated workflows."
      },
      {
        property: "og:image",
        content: "/og-image-automate.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Scalemate automated creative launch page"
      },
      {
        name: "twitter:description",
        content: "Automate your creative testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      },
      {
        name: "twitter:image",
        content: "/og-image-automate.png"
      }
    ]
  },
  data() {
    return {
      features: [
        {
          title: "One minute to <span>upload</span>",
          description: `
            <span>You:</span> connect your Google Drive and instantly copy chosen files to your library.
            <br /><br />
            <span>Scalemate:</span> checks and updates the library each time designers add a new creative to Google Drive.
          `,
          image: "cloud-sync",
          triangle: "triangle-1"
        },
        {
          title: "One minute to <span>integrate</span>",
          description: `
            <span>You:</span> connect your Google Drive and instantly copy chosen files to your library.
            <br /><br />
            <span>Scalemate:</span> checks and updates the library each time designers add a new creative to Google Drive.
          `,
          image: "integrate",
          triangle: "triangle-2"
        }
      ],
    }
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