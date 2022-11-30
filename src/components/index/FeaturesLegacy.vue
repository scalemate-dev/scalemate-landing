<template>
  <div class="features">
    <div class="features-item" v-for="(item, index) in entries" :key="index">
      <div :class="['container', `container-${item.imageSize}`]">
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
  name: 'FeaturesLegacy',
  components: {
    InlineSvg
  },
  data() {
    return {
      entries: [
        {
          triangle: 'triangle-1',
          title: 'Unified <span>creative library</span>',
          image: 'quick',
          description: `
            Keep all your creatives in one place and instantly reach the asset you need. Filter files by tags, sizes,
            colors, and more.
            <br /><br />
            Access historical data about launched campaigns so you would never repeat them.
          `,
        },
        {
          triangle: 'triangle-1',
          title: 'Instant <span>asset upload</span>',
          image: 'connected-folders',
          description: `
            Forget about manual drag & drop routine — upload files in bulk via cloud sync.
            <br /><br />
            Transfer whole folders from Google Drive with zero effort on your side.
          `,
        },
        {
          triangle: 'triangle-1',
          title: 'Cross-platform <span>testing launch</span>',
          image: 'flow-with-background',
          imageSize: 'big',
          description: `
            Launch creative tests in one click, on different platforms, at once.
            <br /><br />
            Sleep at night while Scalemate pauses campaigns that are done.
          `,
        },
        {
          triangle: 'triangle-1',
          title: 'BI-powered <span>analytics</span>',
          image: 'instant',
          description: `
            Ditch spreadsheets and measure testing performance automatically. Integrate your ad platform with app
            attribution tools.
            <br /><br />
            Once your report is ready, slice & dice essential metrics to make wiser decisions.
          `,
        },
      ]
    }
  }
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

    &-big {
      gap: 96px;

      .features-item__image {
        img {
          height: 500px;
          width: initial;
        }
      }

      .features-item__description {
        max-width: initial;
      }
    }
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
    .container {
      &-big {
      gap: 96px;

        .features-item__image {
          img {
            height: initial;
            width: 100%;
          }
        }
      }
    }
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

      br {
        display: none;
      }
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