<template>
  <div class="book-a-demo">
    <Header />
    <div class="hero">
      <div class="container">
        <div class="hero-info">
          <h1 class="hero-title">
            Book a <span>demo</span>
          </h1>
          <div class="hero-subtitle">
            Join the community of advertisers all over the world and learn how you can optimize your marketing with Scalemate.
          </div>
          <div class="hero-integrations">
            <div class="hero-wework">
              <span>I work with</span>
              <div class="hero-logos">
                <inline-svg class="hero-logo-item" v-for="(el, i) of integrations" :key="i" :src="el" />
              </div>
            </div>
            <div class="hero-ask">
              Not enough? <a href="mailto:info@scalemate.co?subject=Hi, I'm interested in custom integration."><span>Ask for
                  on-demand integration -></span> </a>
            </div>
          </div>
        </div>
        <form class="hero-form" name="request-demo" @submit.prevent="(e) => handleRequest(e)">
          <input type="hidden" name="type" value="request-a-demo" />
          <div class="hero-input-label">
            Enter your name <span>*</span>
          </div>
          <Input :required="true" type="text" name="name" v-model="name" />
          <div class="hero-input-label">
            Enter your email <span>*</span>
          </div>
          <Input :required="true" type="email" name="email" v-model="email" />
          <div class="hero-input-label">
            Monthly ad budget <span>*</span>
          </div>
          <Select v-model="budget" :options="budgetOptions" asInput />
          <input type="hidden" name="budget" :value="budget" />
          <div class="hero-button-spacer" />
          <Button color="accent" :submit="true">
            Test Me Out
          </Button>
        </form>
        <SuccessPopup @togglePopup="togglePopup" v-if="showPopup" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InlineSvg from 'vue-inline-svg'
import { sendForm } from '@/formspree.js'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import SuccessPopup from '@/components/index/SuccessPopup'

export default {
  name: 'BookDemo',
  components: {
    Header,
    Footer,
    Button,
    Input,
    Select,
    InlineSvg,
    SuccessPopup
  },
  metaInfo: {
    title: "Scalemate | Book a Demo",
    meta: [
      // {
      //   name: "description",
      //   content: "Launch Facebook, Tik-Tok, and Snapchat campaigns in 1 click. Speed up creative upload and set automated workflows."
      // },
      // {
      //   name: "keywords",
      //   content: "automated testing workflows, automated creative launch, cross-platform creative testing, automate creative rotation, automated campaign launch, automated creative upload"
      // },
      // {
      //   property: "og:title",
      //   content: "Scalemate automated creative launch page"
      // },
      // {
      //   property: "og:description",
      //   content: "Launch Facebook, Tik-Tok, and Snapchat campaigns in 1 click. Speed up creative upload and set automated workflows."
      // },
      {
        property: "og:image",
        content: "/og-image-book-a-demo.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      // {
      //   name: "twitter:title",
      //   content: "Scalemate automated creative launch page"
      // },
      // {
      //   name: "twitter:description",
      //   content: "Automate your creative testing across Facebook, Tiktok, & more to validate your units 3 times faster with a cross-platform ad testing tool."
      // },
      {
        name: "twitter:image",
        content: "/og-image-book-a-demo.png"
      }
    ]
  },
  data() {
    return {
      showPopup: false,
      email: '',
      name: '',
      integrations: [
        require('@/assets/icons/tiktok-logo.svg'),
        require('@/assets/icons/fb.svg'),
        require('@/assets/icons/appsflyer.svg'),
      ],
      budget: '',
      budgetOptions: [
        'Up to 10K',
        '10K-100K',
        '100K-1M',
        '1M +',
      ]
    }
  },

  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
    },

    async handleRequest(event) {
      try {
        await sendForm(event)
        this.email = ''
        this.name = ''
        this.budget = ''
        this.showPopup = true
      } catch (error) {
        console.error('formspree error: ', error)
      }
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';

a {
  text-decoration: none;
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

.book-a-demo {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}
.hero {
  flex: 1;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .container {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
  }

  .hero-title {
    max-width: 700px;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
  }

  .hero-title span {
    color: $color-accent-500;
  }

  .hero-subtitle {
    max-width: 500px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #475467;
    margin-bottom: 48px;
  }

  .hero-form {
    width: 100%;
    max-width: 576px;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }

  .hero-input-label {
    margin-top: 12px;
    color: #2B2C39;
    font-size: 14px;

    &:first-of-type {
      margin-top: 0;
    }

    span {
      color: #F74972;
    }
  }

  .hero-button-spacer {}

  .hero-wework {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  .hero-logos {
    display: flex;
    margin-left: 12px;
  }

  .hero-logo-item {
    height: 21px;
    width: auto;
    margin-right: 8px;
  }

  .hero-ask span {
    color: #FD6F8E;
  }
}

@include tablet-vertical {
  .hero {
    .container {
      display: flex;
      flex-flow: column nowrap;
    }

    .hero-title {
      font-size: 42px;
      line-height: 48px;
    }

    .hero-subtitle {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>