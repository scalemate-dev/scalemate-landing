<template>
  <div class="hold">
    <div class="container">
      <h2 class="hold-title">
        Get a hold of your <span>historical data</span>
      </h2>
      <div class="hold-subtitle">
        Store your creatives in one place. Pull data from your creative storage and Facebook, TikTok & Snapchat ad libraries to bring it together in Scalemate.
      </div>

      <div class="hold-row">
        <div class="hold-item">
          <div class="hold-item__icon">
            <InlineSvg :src="require('@/assets/icons/table.svg')" />
          </div>
          <div class="hold-item__title">
            <span>Access</span> past results
          </div>
          <div class="hold-item__description">
            Keep stats for past periods, and don't test the same creatives again.
          </div>
        </div>
        <div class="hold-item">
          <div class="hold-item__icon">
            <InlineSvg :src="require('@/assets/icons/filter.svg')" />
          </div>
          <div class="hold-item__title">
            <span>Filter</span> stats by designer
          </div>
          <div class="hold-item__description">
            Find out whose designs perform better and boost creative production.
          </div>
        </div>
        <div class="hold-item">
          <div class="hold-item__icon">
            <InlineSvg :src="require('@/assets/icons/analytics.svg')" />
          </div>
          <div class="hold-item__title">
            <span>Analyze</span> AAC campaigns
          </div>
          <div class="hold-item__description">
            Step beyond basics and rotate dynamic ad assets alongside regular.
          </div>
        </div>
        <div class="hold-item">
          <div class="hold-item__icon">
            <InlineSvg :src="require('@/assets/icons/automation.svg')" />
          </div>
          <div class="hold-item__title">
            <span>Assign</span> tags automatically
          </div>
          <div class="hold-item__description">
            Tag creatives based on concept, resolution, or custom values.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
export default {
  name: 'Hold',
  components: {InlineSvg},
}
</script>

<style lang="scss" scoped>
.hold {
  padding: 150px 0 200px;
}

.hold-title {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.025em;
  color: #1D2939;
  margin-bottom: 32px;
  text-align: center;
}

.hold-title span {
  color: $color-accent-500;
}

.hold-subtitle {
  margin: 0 auto;
  max-width: 1024px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #475467;
  margin-bottom: 70px;
  text-align: center;
}

.hold-row {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 24px;
}

.hold-item {
  background: linear-gradient(360deg, #FCFDFF 0%, #F4F5F7 100%);
  box-shadow: 0px 20px 24px rgba(16, 24, 40, 0.1), 0px 8px 8px rgba(16, 24, 40, 0.04);

  border-radius: 16px;
  padding: 40px 24px 40px;
  transition: transform 0.2s ease;
  will-change: transform;
  &:hover {
    transform: translateY(-16px);
  }

  &:nth-child(1) .hold-item__icon {
    background: #A6F4C5;
    /* border: 1px solid #6CE9A6; */
  }

  &:nth-child(2) .hold-item__icon {
    background: #C7CCE5;
    /* border: 1px solid #9EA5D1; */
  }

  &:nth-child(3) .hold-item__icon {
    background: #FEDF89;
    /* border: 1px solid #FEC84B; */
  }

  &:nth-child(4) .hold-item__icon {
    background: #B9E6FE;
    /* border: 1px solid #7CD4FD; */
  }
}

.hold-item__icon {
  border-radius: 100px;
  width: 48px;
  height: 48px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  /deep/ svg {
    width: 28px;
    height: 28px;
  }
}

.hold-item__title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
  line-height: 24px;
  color: #1D2939;

  /deep/ span {
    color: $color-accent-500;
  }
}

.hold-item__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
}

@include desktop-s {
  .hold-row {
    grid-auto-flow: initial;
    grid-template-columns: 1fr 1fr;
  }

  .hold-item__description {
    font-size: 16px;
    line-height: 24px;
  }
}

@include tablet-vertical {
  .hold {
    background: linear-gradient(180deg, #FFFFFF 0%, #EEE 51.04%, rgba(217, 217, 217, 0) 100%);
    padding: 96px 0 140px;
  }

  .hold-title {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
    text-align: left;
  }

  .hold-subtitle {
    font-size: 18px;
    text-align: left;
    line-height: 24px;
    margin-bottom: 48px;
  }

  .hold-row {
    grid-auto-flow: initial;
    grid-template-columns: 1fr;
  }
}
</style>
