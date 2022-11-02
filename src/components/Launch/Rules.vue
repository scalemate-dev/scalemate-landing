<template>
  <div class="rules">
    <div class="container">
      <div class="rules-title">
        <span>Accelerate</span> rotation<br />with automated testing workflow
      </div>
      <div class="rules-subtitle">
        Automate creative testing workflows. Get simple reports. Find out what works and what doesn't. Rotate winning ads and
        head on to the next testing round!
      </div>

      <div class="rules-row">
        <div class="rules-list">
          <div class="rules-item" v-for="(item, index) in entries" :key="index">
            <div class="rules-item-icon" :style="{backgroundColor: item.color, borderColor: item.borderColor}">
              <inline-svg :src="require(`@/assets/icons/${item.icon}.svg`)" />
            </div>
            <div class="rules-item-info">
              <div class="rules-item-title">
                {{ item.title }}
              </div>
              <div class="rules-item-description">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
        <div class="rules-flow">
          <img src="@/assets/images/flow.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Rules',
  components: {
    InlineSvg,
  },
  data() {
    return {
      entries: [
        {
          icon: "workflows",
          color: "#A6F4C5",
          borderColor: "#6CE9A6",
          title: 'Create automation workflows',
          description: 'and define each creative path from testing to going live.'
        },
        {
          icon: "kpi",
          color: "#FECDC9",
          borderColor: "#FDA19B",
          title: 'Add KPIs for creative assets',
          description: 'and qualify CPI, IPM, or ad spend to ensure it’s your winner. '
        },
        {
          icon: "templates",
          color: "#C7CCE5",
          borderColor: "#9EA5D1",
          title: 'Use campaign templates',
          description: 'and instantly run new testing campaigns with saved defaults.'
        },
        {
          icon: "streamline",
          color: "#FEDF89",
          borderColor: "#FEC84B",
          title: 'Streamline ad rotation',
          description: 'and launch creatives in live campaigns automatically.'
        },
        {
          icon: "rules",
          color: "#B9E6FE",
          borderColor: "#7CD4FD",
          title: 'Set testing workflow rules',
          description: 'and stop, scale, or change bids based on your conditions.'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.rules {
  padding: 150px 0 200px;
}

.rules-title {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.025em;
  color: #1D2939;
  margin-bottom: 32px;
  text-align: center;
}

.rules-title span {
  color: $color-accent-500;
}

.rules-subtitle {
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

.rules-row {
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
}

.rules-list {
  flex: 0 0 400px;
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
}

.rules-item {
  padding: 24px;
  background: #F9FAFB;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
}

.rules-item-icon {
  width: 72px;
  flex: 0 0 72px;
  height: 72px;
  border-radius: 8px;
  border: 1px solid transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.rules-item-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.rules-item-description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.rules-flow {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 24px 70px;
  background: #F9FAFB;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.rules-flow img {
  width: 100%;
}

@include tablet-vertical {
  .rules {
    background: linear-gradient(180deg, #FFFFFF 0%, #EEE 51.04%, rgba(217, 217, 217, 0) 100%);
    padding: 96px 0 140px;
  }

  .rules-title {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
    text-align: left;
  }

  .rules-subtitle {
    font-size: 18px;
    text-align: left;
    line-height: 24px;
    margin-bottom: 48px;
  }

  .rules-row {
    display: block;
  }

  .rules-flow {
    display: none;
  }
}
</style>
