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
        <div class="help-card" v-for="el in cases" :key="el.position">
          <h3 class="help-title">{{ el.position }}</h3>
          <div class="help-subtitle">{{ el.description }}</div>
          <div class="help-descr-wrapper">
            <div class="help-descr" v-for="(opt, i) in el.options" :key="i">
              <div class="help-descr-heading">{{opt.label}}</div>
              <div class="help-descr-text" v-html="opt.text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowCanHelp',
  data () {
    return {
      cases: [
        {
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
  }
}
</script>

<style lang="scss" scoped>
.help {
  margin-bottom: 56px;

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
    margin-bottom: 64px;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;

  }

  &-card {
    max-width: 380px;
    background: rgba($color-bg-grey, 0.7);
    border-radius: 10px;
    margin-right: 8px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  }

  &-title {
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 500;
    color: $color-text-800;
  }

  &-subtitle {
    padding: 0px 24px 16px;
    border-bottom: 1px solid #fff;
    color: $color-text-500;
  }

  &-descr-wrapper {
    padding: 32px 24px;
  }

  &-descr:not(:last-child) {
    margin-bottom: 32px;
  }

  &-descr-heading {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    color: $color-text-600;
  }

  &-descr-text {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 400;
    color: $color-text-500;

    /deep/ b {
      color: $color-text-500;
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
      font-size: 42px;
      line-height: 42px;
    }
  }
}
</style>