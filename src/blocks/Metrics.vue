<template>
  <div class="metrics">
    <div class="container">
      <div class="metrics-container">
        <!-- <div class="metrics-eyebrow">Valuable metrics</div> -->
        <div class="metrics-wrapper">
          <div class="metics-title">Make the things <span>done on time</span></div>
          <div class="metrics-description">
            Track your campaigns and rotate creatives properly to keep performance on top.
            <!-- We are about the effectiveness, argumentation of the hypotheses put forward, forecasting and diversification of the risks of your investment in advertising -->
          </div>
        </div>
        <div class="metrics-list">
          <div class="metric" v-for="(metric, index) in metrics" :key="index">
            <div class="metric-title" v-html="metric.title" />
            <div class="metric-description">
              {{ metric.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Metrics',
  data() {
    return {
      metrics: [
        { title: 'up to 63 hr/mo', description: 'Savings per employee' },
        { title: '3 times faster', description: 'Launch, test and validate your creatives and hypotises' },
        { title: 'up to 90%', description: 'Budget leak prevention with Smart Insights' },
        { title: '<span class="accent">∞</span> times', description: 'More productive with Scalemate' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.metrics {
  padding: 96px 0;
  // background: url('~@/assets/images/features.jpg') no-repeat center / cover;

  .metrics-wrapper {
    max-width: 868px;
  }

  .metrics-container {
    max-width: 1084px;
  }

  .metrics-eyebrow {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #A5B4FC;
    margin-bottom: 12px;
  }

  .metics-title {
    font-weight: bold;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;;
    margin-bottom: 20px;
    color: $color-text-800;

    span {
      color: $color-accent-500;
    }
  }

  .metrics-description {
    margin-bottom: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $color-text-600;
  }

  .metrics-list {
    display: flex;
    justify-content: space-between;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    // gap: 48px;
  }

  .metric {
    max-width: 234px;
    // margin-bottom: 48px;
  }

  /deep/ .accent {
    color: $color-accent-500;
  }

  .metric-title {
    margin-bottom: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: $color-text-800;

  }

  .metric-description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: $color-text-600;
  }
}


@media (max-width: 450px) {
  .metrics {
    .metrics-list {
      grid-template-columns: 1fr;
    }

    .metric {
      margin-bottom: 0;
    }
  }
}
</style>