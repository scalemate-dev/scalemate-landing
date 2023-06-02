<template>
  <div class="help">
    <div class="container">
      <h2 class="title">
        We help busy marketing people get things done on time
      </h2>
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
        <div class="help-list">
          <div class="help-card" :key="activeItem.id">
            <div class="help-title">{{ activeItem.description }}</div>
            <div class="help-descr-wrapper">
              <div class="help-descr" v-for="(opt, i) in activeItem.options" :key="i">
                <div class="help-descr-heading">
                  <inline-svg :src="require(`@/assets/icons/help/${opt.icon}.svg`)" />
                  {{opt.label}}
                </div>
                <div class="help-descr-text" v-html="opt.text" />
              </div>
            </div>
          </div>
          <div class="help-image">
            <img src="@/assets/images/we-help.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
export default {
  name: 'HowCanHelp',
  components: {
    InlineSvg,
  },
  data () {
    return {
      active: 0,
      cases: [
        {
          id: 0,
          position: 'User Acquisition Manager',
          description: 'Start doing what your brain capacity deserves.',
          options: [
            {
              icon: 'clock',
              label: 'Erase testing routine',
              text: 'Spend <b>62%</b> less time on creative testing and automate asset upload. '
            },
            {
              icon: 'ship',
              label: 'Test on all platforms at once',
              text: 'Use a <b>single “launch” button</b> for your Facebook, Tiktok & custom campaigns.'
            },
            {
              icon: 'squares',
              label: 'Get insights in one dashboard',
              text: 'Define <b>clear performance trends</b> across platforms and run winning creatives. '
            },
            {
              icon: 'puzzle',
              label: 'Communicate success',
              text: 'Auto-generate <b>BI-powered reports,</b> then show results to your lead & team. '
            },
          ]
        },
        {
          id: 1,
          position: 'Marketing Executive',
          description: 'Maximize ROI and unblock your productivity chakra.',
          options: [
            {
              icon: 'database',
              label: 'Maximize ROI',
              text: 'Own a <b>unified creative library</b> and harmonize your ad testing process.'
            },
            {
              icon: 'bar-chart',
              label: 'Prevent budget leakage',
              text: 'Never launch potentially non-performing creatives and save <b>15%.</b>'
            },
            {
              icon: 'circles',
              label: 'Excel at strategic results',
              text: 'Combine <b>MMP + ad network data</b>, measure ROI & grow your app with confidence.'
            },
            {
              icon: 'arrows',
              label: 'Be on the same page',
              text: 'Reduce your team workload by <b>62%</b> and keep them focused on high-value tasks.'
            },
          ]
        },
        {
          id: 2,
          position: 'Creative Designer',
          description: 'Enter the creative flow with data - backed ideas in mind.',
          options: [
            {
              icon: 'light',
              label: 'Always know best',
              text: 'Combine your skill with data insights to <b>design what works</b> offhand.'
            },
            {
              icon: 'numbers-chart',
              label: 'Reduce work with numbers',
              text: 'Receive <b>simplified reports</b> with explainers and analyze them in minutes.'
            },
            {
              icon: 'visuals',
              label: 'Organize your visuals',
              text: 'Upload creatives to <b>the unified library</b> in 1 click and keep them in order.'
            },
            {
              icon: 'pc',
              label: 'Be on the same page',
              text: 'Align with UA managers and <b>sync your results</b> in a single intuitive dashboard.'
            },
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
  position: relative;
  z-index: 2;

  .container {
    background: #1A1A1A;
    border-radius: 80px;
    padding: 112px;
  }

  .title {
    max-width: 900px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    text-align: left;
    margin-bottom: 64px;
  }

  .help-navigation {
    margin-bottom: 24px;
    display: flex;
    gap: 16px;
  }

  .help-navigation-item {
    border: 1px solid #FFFFFF;
    border-radius: 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 16px;
    transition: border-color 0.2s ease, background-color 0.2s ease;
    will-change: border-color, background-color;

    &.active {
      background: #F63D68;
      border-color: #F63D68;
    }
  }

  .help-list {
    display: flex;
    gap: 96px;
    align-items: center;
  }

  .help-image {
    flex: 0 0 40%;

    img {
      width: 100%;
    }
  }

  .help-title {
    margin-bottom: 54px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #FFFFFF;
  }

  .help-descr-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 36px;
  }

  .help-descr-heading {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 12px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 8px;
  }

  .help-descr-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #DFE0E2;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    /deep/ b {
      color: #F63D68;
      font-weight: 600;
    }
  }

  @include tablet-horizontal {
    .container {
      padding: 64px 0px;
      border-radius: 30px;
    }

    .title {
      padding: 0 24px;
      font-size: 30px;
      line-height: 44px;
      margin-bottom: 48px;
    }

    .help-navigation {
      padding: 0 24px;
      overflow-x: scroll;
      white-space: nowrap;
      display: block;
    }

    .help-navigation-item {
      display: inline-block;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }

    .help-list {
      padding: 0 24px;
      flex-flow: column nowrap;
      gap: 48px;
    }

    .help-card {
      order: 2
    }

    .help-image {
      order: 1;
    }

    .help-title {
      font-size: 24px;
      line-height: 38px;
    }

    .help-descr-wrapper {
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>