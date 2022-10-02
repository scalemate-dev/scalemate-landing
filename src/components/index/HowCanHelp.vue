<template>
  <div class="help">
    <div class="container">
      <h2 class="title">
        I help busy marketing people get things done <span>on time</span>
      </h2>
      <div class="subtitle">
        Speed up creative testing, receive cross-platform insights, and streamline your mobile app growth regardless of
        your role in performance marketing.
      </div>
      <div class="help-wrapper">
        <div class="help-navigation">
          <h3
            class="help-navigation-item"
            :class="{ active: active === item.id}"
            v-for="item in cases"
            :key="item.position"
            @click="setActive(item.id)"
          >
            {{ item.position }}
          </h3>
        </div>

        <transition name="fade-in" mode="out-in">
          <div class="help-card" :key="activeItem.id">
            <div class="help-subtitle">{{ activeItem.description }}</div>
            <div class="help-descr-wrapper">
              <div class="help-descr" v-for="(opt, i) in activeItem.options" :key="i">
                <div class="help-descr-round" />
                <div>
                  <div class="help-descr-heading">{{opt.label}}</div>
                  <div class="help-descr-text" v-html="opt.text" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowCanHelp',
  data () {
    return {
      active: 0,
      cases: [
        {
          id: 0,
          position: 'User Acquisition Manager',
          description: 'Start doing what your brain capacity deserves.',
          options: [
            {label: 'Erase testing routine', text: 'Spend <b>62%</b> less time on creative testing and automate asset upload. '},
            {label: 'Test on all platforms at once', text: 'Use a <b>single “launch” button</b> for your Facebook, Tiktok & custom campaigns.'},
            {label: 'Get insights in one dashboard', text: 'Define <b>clear performance trends</b> across platforms and run winning creatives. '},
            {label: 'Communicate success', text: 'Auto-generate <b>BI-powered reports,</b> then show results to your lead & team. '}
          ]
        },
        {
          id: 1,
          position: 'Marketing Executive',
          description: 'Maximize ROI and unblock your productivity chakra.',
          options: [
            {label: 'Set up ad testing workflow', text: 'Own a <b>unified creative library</b> and harmonize your ad testing process.'},
            {label: 'Prevent budget leakage', text: 'Never launch potentially non-performing creatives and save <b>15%.</b>'},
            {label: 'Excel at strategic results', text: 'Combine <b>MMP + ad network data</b>, measure ROI & grow your app with confidence.'},
            {label: 'Optimize team performance', text: 'Reduce your team workload by <b>62%</b> and keep them focused on high-value tasks.'},
          ]
        },
        {
          id: 2,
          position: 'Creative Designer',
          description: 'Enter the creative flow with data - backed ideas in mind.',
          options: [
            {label: 'Always know best', text: 'Combine your skill with data insights to <b>design what works</b> offhand.'},
            {label: 'Reduce work with numbers', text: 'Receive <b>simplified reports</b> with explainers and analyze them in minutes.'},
            {label: 'Organize your visuals', text: 'Upload creatives to <b>the unified library</b> in 1 click and keep them in order.'},
            {label: 'Be on the same page', text: 'Align with UA managers and <b>sync your results</b> in a single intuitive dashboard.'},
          ]
        },
      ]
    }
  },
  methods: {
    setActive(id) {
      this.active = id
    }
  },
  computed: {
    activeItem() {
      return this.cases.find(item => item.id === this.active)
    }
  }
}
</script>

<style lang="scss" scoped>
.help {
  margin-bottom: 56px;

  .fade-in-enter-active,
  .fade-in-leave-active {
    transform: scale(1);
    transition: transform 0.1s ease, opacity 0.1s ease;
  }

  .fade-in-enter-from,
  .fade-in-leave-to {
    /* opacity: 0.7; */
    transform: scale(0.98);
  }

  .title {
    max-width: 800px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -2%;
    margin: 0 auto;
    color: $color-text-800;
    text-align: center;
    margin-bottom: 24px;

    span {
      color: $color-accent-500;
    }
  }

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #6B7280;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 48px;
  }

  &-navigation {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  &-navigation-item {
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding-bottom: 8px;
    transition: border-color 0.2s ease;
    will-change: border-color;
    &.active {
      border-color: $color-accent-500;
    }
  }

  &-wrapper {
    /* display: flex; */
    /* justify-content: space-between; */
  }

  &-card {
    max-width: 960px;
    margin: 0 auto;
    background: rgba($color-bg-grey, 0.7);
    border-radius: 8px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  }

  &-title {
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 500;
    color: $color-text-800;
  }

  &-subtitle {
    padding: 48px 48px 16px;
    /* border-bottom: 1px solid #fff; */
    color: $color-accent-500;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }

  &-descr-wrapper {
    padding: 32px 24px 48px;
    max-width: max-content;
    margin: 0 auto;
  }

  &-descr-round {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
    border-radius: 100px;
    border: 2px solid $color-accent-500;
    margin-right: 16px;
    margin-top: 2px;
    position: relative;

    &:before {
      content: '';
      background: $color-accent-500;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 100px;
    }
  }

  &-descr {
    display: flex;
    /* align-items: center; */
  }

  &-descr:not(:last-child) {
    margin-bottom: 32px;
  }

  &-descr-heading {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
    color: $color-text-800;
  }

  &-descr-text {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 400;
    color: $color-text-600;

    /deep/ b {
      color: $color-text-600;
    }
  }

  @include tablet-horizontal {
    &-wrapper {
      display: block;
    }

    &-card {
      max-width: 100%;
      margin-bottom: 32px;
    }
  }

  @include tablet-vertical {
    .title {
      // text-align: center;
      font-size: 32px;
      line-height: 40px;
    }

    .subtitle {
      font-size: 17px;
    }

    .help-navigation {
      gap: 16px;
      margin-bottom: 48px;
    }

    .help-navigation-item {
      font-size: 16px;
      /* text-transform: uppercase; */
      border-bottom: none;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 100%;
        background: transparent;
        width: 16px;
        height: 16px;
        border-radius: 100px;
      }

      &.active:before {
        background: $color-accent-500;
      }
    }

    .help-subtitle {
      font-size: 22px;
      line-height: 28px;
      padding: 32px 24px 8px;
    }
  }
}
</style>