<template lang="pug">
  .features
    .wrapper
      h1.title Scalemate is your #[span.accent mate] who would never abandon
      h2.subtitle Looks after your campaigns 24/7 and doing the routine for you.
      .list
        .list__item(v-for="item in items")
          img.img(:src="item.src")
          .list__title {{item.title}}
          .list__subtitle {{item.subtitle}}
</template>

<script>

export default {
  name: 'Features',
  data () {
    return {
      items: [
        {
          title: 'Custom automations',
          subtitle: 'Looks after key metrics and triggers UA actions smatrly.',
          src: '/img/custom-automations.png'
        },
        {
          // title: 'Creative analysis',
          title: 'Creative insights',
          // subtitle: 'Choose any paradigm to analyze your creatives perfomance.',
          // subtitle: 'Analyze your audiences and creatives across all your campaigns.',
          subtitle: 'Get insights about your audiences and creatives across all your campaigns.',
          // subtitle: 'Get agregate data output of your audiences and creatives across all your campaigns.',
          src: '/img/analyze.png'
        },
        {
          title: 'Notificatioins',
          subtitle: 'Stay in touch with your campaigns state triggered actions or errors.',
          src: '/img/notifications.png'
        },
        {
          title: 'Automated daily reports',
          subtitle: 'Build and schedule custom reports as frequently as you want.',
          src: '/img/automated-reports.png'
        },
      ]
    }
  },
  
  methods: {
    // getImgUrl(src) {
      
    //   const images = require.context('@/assets/images', false, /\.png$/)
    //   return images('./' + src + ".png")
    // }

    // getImgUrl(pic) {
      // return require('../assets/'+pic)
    // }
  }
}
</script>

<style lang="scss" scoped>
.features {
  padding-top: 80px;
  padding-bottom: 100px;

  .wrapper {
    @include container;
  }

  .subtitle {
    margin-bottom: 40px;
  }

  .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    font-size: 18px;

    &__item {
      flex: calc(50% - 8px) 0 0;
      min-height: 240px;
      // max-width: 551px;
      margin-bottom: 48px;
    }

    &__title,
    &__subtitle {
      max-width: 328px;
    }

    &__title {
      font-weight: 700;
      margin-bottom: 8px;
    }
  }


  .img {
    width: 100%;
    margin-bottom: 16px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    border-radius: 17px;
  }
}

@media (max-width: 768px) {
  .features {
    padding-top: 64px;
    padding-bottom: 32px;
  }

  .features .list {
    display: block;
  }

  .features .list__item {
    min-height: initial;
  }

  .features .title {
    line-height: 40px;
    margin-bottom: 8px;
  }

  .features .subtitle {
    font-size: 18px;
    line-height: 24px;
  }

  .features .img {
    border-radius: 22px;
  }
}
</style>