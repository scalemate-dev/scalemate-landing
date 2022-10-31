<template>
  <div class="features">
    <div class="features-item" v-for="(item, index) in entries" :key="index">
      <div class="container">
        <div class="features-item__info">
          <inline-svg
            :class="['features-item__triangle', `features-item__triangle-${index}`]"
            :src="require(`@/assets/icons/${item.triangle}.svg`)"
          />
          <div class="features-item__title" v-html="item.title" />
          <div class="features-item__description" v-html="item.description" />
        </div>
        <div class="features-item__image">
          <img :src="require(`@/assets/images/${item.image}.png`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Features',
  components: {
    InlineSvg
  },
  props: {
    entries: {
      type: Array,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
.features {
  padding: 96px 0 140px;
  display: flex;
  flex-flow: column nowrap;
  gap: 260px;

  .features-item {
    position: relative;
    &:nth-child(even) .container {
      .features-item__info {
        order: 2;
      }

      .features-item__image {
        order: 1;
      }

      .features-item__triangle {
        top: -100px;
        left: 10%;
        height: 70px;
        width: 140px;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 96px;
  }

  .features-item__info {
    flex: 1;
  }

  .features-item__triangle {
    position: absolute;
    top: -100px;
    right: 10%;
    height: 70px;
    width: 140px;
  }

  .features-item__title {
    margin-bottom: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #101828;

    /deep/ span {
      color: $color-accent-500;
    }
  }

  .features-item__description {
    font-family: 'Inter';
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    max-width: 90%;

    /deep/ span {
      font-weight: bold;
    }
  }

  .features-item__image {
    img {
      width: 100%;
    }
  }

  @include tablet-horizontal {

  }

  @include tablet-vertical {
    padding: 96px 0;
    gap: 260px;
    background: linear-gradient(180deg, #FFFFFF 0%, #EEE 51.04%, rgba(217, 217, 217, 0) 100%);

    .features-item__info {
      width: 100%;
      padding: 0 24px;
    }

    .features-item__image {
      padding: 0 8px;
    }

    .features-item__title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .features-item__description {
      font-size: 18px;
      line-height: 24px;
      max-width: 100%;
    }

    .features {
      gap: 170px;
    }

    .container {
      gap: 32px;
      padding: 0;
      grid-template-columns: initial;
      display: flex;
      flex-flow: column nowrap;
    }

    .features-item__info {
      order: 1 !important;
    }

    .features-item__image {
      width: 100%;
      order: 2 !important;

      img {
        object-fit: contain;
        width: 100%;
      }
    }
  }
}
</style>