<template>
  <div class="metrics">
    <div class="container">
      <div class="metrics-container">
        <div class="metrics-eyebrow">Valuable metrics</div>
        <div class="metics-title">Get actionable data that will help grow your budgets</div>
        <div class="metrics-description">
          We are about the effectiveness, argumentation of the hypotheses put forward, forecasting and diversification of the risks of your investment in advertising
        </div>
        <div class="metrics-list">
          <div class="metric" v-for="(metric, index) in metrics" :key="index">
            <div class="metric-title">
              {{ metric.title }}
            </div>
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
        { title: 'up to 63 hr/mo', description: 'Per employee saving with Cloud sync' },
        { title: '3 times faster', description: 'Launch, test and validate your creatives and hypotises' },
        { title: 'up to 90%', description: 'Budget leak prevention with Smart Insights' },
        { title: '∞ times', description: 'More productive with Scalemate' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.metrics {
  padding: 96px 0;
  background: url('~@/assets/images/features.jpg') no-repeat center / cover;

  .metrics-container {
    max-width: 592px;
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
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    color: #FFFFFF;
  }

  .metrics-description {
    margin-bottom: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #D1D5DB;
  }

  .metrics-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .metric {
    margin-bottom: 48px;
  }

  .metric-title {
    margin-bottom: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
  }

  .metric-description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
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