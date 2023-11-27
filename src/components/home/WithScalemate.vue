<template>
  <div class="with-scalemate">
    <inline-svg class="with-scalemate-background" :src="require(`@/assets/icons/with-scalemate-background.svg`)" />
    <div class="container">
      <div class="with-scalemate-navigation">
        <h2 class="with-scalemate-title">
          With Scalemate, UAMs shorten the testing path and reduce time by 62%.
        </h2>
        <div class="with-scalemate-navigation-buttons">
          <div class="with-scalemate-navigation-button prev">
            <inline-svg :src="require(`@/assets/icons/chevron-left.svg`)" />
          </div>
          <div class="with-scalemate-navigation-button active next">
            <inline-svg :src="require(`@/assets/icons/chevron-right.svg`)" />
          </div>
        </div>
      </div>
    </div>
    <swiper class="with-scalemate-cards" :options="swiperOption">
      <swiper-slide
        class="with-scalemate-card"
        v-for="(card, key) in cards"
        :key="key"
        :style="{background: card.background}"
      >
        <div class="with-scalemate-card-value" v-html="card.value" />
        <div class="with-scalemate-card-label" v-html="card.label" />
      </swiper-slide>
    </swiper>
    <div class="container mobile">
      <div class="with-scalemate-navigation-buttons">
        <div class="with-scalemate-navigation-button prev">
          <inline-svg :src="require(`@/assets/icons/chevron-left.svg`)" />
        </div>
        <div class="with-scalemate-navigation-button active next">
          <inline-svg :src="require(`@/assets/icons/chevron-right.svg`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'WithScalemate',
  components: {
    InlineSvg,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
      cards: [
        {
          value: '10k',
          label: 'creatives launched',
          background: '#FFE8D3',
        },
        {
          value: '1300',
          label: 'hours saved',
          background: '#F0DCFF',
        },
        {
          value: '-32%',
          label: 'cost per winner',
          background: '#FFBF99',
        },
        // {
        //   value: '+9%',
        //   label: 'ROAS for<br />your campaigns',
        //   background: '#FFBF99',
        // },
        {
          value: '+11%',
          label: 'increase in winner<br />rate',
          background: '#E0F8DE',
        },
        {
          value: '35%',
          label: 'increase in total<br/>advertising spend',
          background: '#FFE8D3',
        },
        {
          value: '<span>∞</span> times',
          label: 'more productive with<br/>Scalemate',
          background: '#F5F4EE',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.with-scalemate {
  position: relative;
  z-index: 1;
}

.with-scalemate-background {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-25%, -20%);
  z-index: 0;
}

.with-scalemate-navigation {
  display: flex;
  justify-content: space-between;
  gap: 128px;
  margin-bottom: 48px;
}

.with-scalemate-title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #121718;
  position: relative;
  z-index: 1;
}

.with-scalemate-navigation-buttons {
  display: flex;
  gap: 24px;
}

.with-scalemate-navigation-button {
  cursor: pointer;
  width: 64px;
  height: 64px;
  border: 1px solid #121718;
  background: #FFF;
  border-radius: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  &.active {
    background: #121718;
  }
}

.with-scalemate-cards {
  width: 100%;
  max-width: 1440px;
  padding: 0 112px;
  margin: 0 auto;
  overflow: initial;
}

.with-scalemate-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  border: 2px solid #121718;
  border-radius: 20px;
  flex: 0 0 300px;
  height: 300px;
}

.with-scalemate-card-value {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #1A1A1A;

  /deep/ span {
    color: $color-accent-500;
  }
}

.with-scalemate-card-label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #1A1A1A;
}

.mobile {
  display: none;
}

@include tablet-horizontal {
  .with-scalemate-cards {
    padding: 0 24px;
  }

  .with-scalemate-navigation-buttons {
    display: none;
  }

  .with-scalemate-title {
    font-size: 30px;
    line-height: 38px;
  }

  .mobile {
    display: block;
  }

  .mobile .with-scalemate-navigation-buttons {
    display: flex;
    position: relative;
    margin-top: 32px;
    gap: 16px;
  }

  .with-scalemate-navigation-button {
    height: 48px;
    width: 48px;
  }

  .with-scalemate-navigation-button svg {
    height: 18px;
    width: 18px;
  }
}
</style>