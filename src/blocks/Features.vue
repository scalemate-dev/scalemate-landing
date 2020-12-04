<template lang="pug">
  .features
    .wrapper
      h1.title Scalemate is your #[span.accent mate] who would never abandon
      h2.subtitle Looks after your campaigns 24/7 and helps you with routine
      .list 
        .list__item(v-for="item in items")
          .img
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
          src: ''
        },
        {
          title: 'Creative analysis',
          subtitle: 'Choose any paradigm to analyze your creatives perfomance.',
          src: ''
        },
        {
          title: 'Notificatioins',
          subtitle: 'Stay in touch with your campaigns state triggered actions or errors.',
          src: ''
        },
        {
          title: 'Automated daily reports',
          subtitle: 'Build and schedule custom reports as frequently as you want.',
          src: ''
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.features {
  padding-top: 80px;
  padding-bottom: 100px;
  background: $color-grey;

  .wrapper {
    @include container;
  }
  .accent {
    color: $color-accent;
  }

  .subtitle {
    margin-bottom: 40px;
  }

  .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;

    &__item {
      flex: calc(50% - 8px) 0 0;
      min-height: 240px;
      // max-width: 551px;
      margin-bottom: 48px;
    }

    &__title,
    &__subtitle {
      max-width: 280px;
    }

    &__title {
      font-weight: 700;
    }
  }


  .img {
    min-height: 240px;
    width: 100%;
    margin-bottom: 16px;
    background: $color-black;
    border-radius: 16px;
  }

}
</style>