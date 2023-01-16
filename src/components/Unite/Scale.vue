<template>
  <div class="scale">
    <div class="container">
      <h2 class="scale-title">
        Scale <span>winner rotation</span> on multiple ad networks
      </h2>
      <div class="scale-subtitle">
        One click — I start testing your creatives across platforms. Two clicks — I bring your finest creatives to life on platforms they proved to be effective.
      </div>

      <div class="scale-row">
        <div class="scale-item" v-for="(item, index) in entries" :key="index">
          <div class="scale-item__icon">
            {{ index + 1}}
          </div>
          <div class="scale-item__title">
            {{ item.title }}
          </div>
          <div class="scale-item__description" v-html="item.description" />
        </div>
      </div>
      <div class="scale-button">
        <Button color="accent round" to="/automate">
          Learn more
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Scale',
  components: {
    Button,
  },
  data() {
    return {
      entries: [
        {
          title: "Test Creatives in Bulk",
          description: "Add assets to testing campaigns using<br/> storage sync with the creative library."
        },
        {
          title: "Find Winners",
          description: "Get testing results & select creatives<br/> with the winner status only."
        },
        {
          title: "Rotate Ads Live",
          description: "Launch your top creatives in live campaigns<br/> on multiple ad networks at a time."
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.scale {
  padding: 150px 0 200px;
}

.scale-title {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.025em;
  color: #1D2939;
  margin-bottom: 32px;
  text-align: center;
}

.scale-title span {
  color: $color-accent-500;
}

.scale-subtitle {
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

.scale-row {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

.scale-item {
  background: linear-gradient(360deg, #FCFDFF 0%, #F4F5F7 100%);
  box-shadow: 0px 20px 24px rgba(16, 24, 40, 0.1), 0px 8px 8px rgba(16, 24, 40, 0.04);
  border-radius: 16px;
  padding: 40px 24px;

  transition: transform 0.2s ease;
  will-change: transform;
  &:hover {
    transform: translateY(-16px);
  }
}

.scale-item__icon {
  border-radius: 100px;
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border: 2px solid #424242;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #424242;

  /deep/ svg {
    width: 28px;
    height: 28px;
  }
}

.scale-item__title {
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

.scale-item__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
}

.scale-button {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
}

@include desktop-s {
  .scale-row {
    grid-auto-flow: initial;
    grid-template-columns: 1fr 1fr;
  }

  .scale-item__description {
    font-size: 16px;
    line-height: 24px;
  }
}

@include tablet-vertical {
  .scale {
    background: linear-gradient(180deg, #FFFFFF 0%, #EEE 51.04%, rgba(217, 217, 217, 0) 100%);
    padding: 96px 0 140px;
  }

  .scale-title {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
    text-align: left;
  }

  .scale-subtitle {
    font-size: 18px;
    text-align: left;
    line-height: 24px;
    margin-bottom: 48px;
  }

  .scale-row {
    grid-auto-flow: initial;
    grid-template-columns: 1fr;
  }
}
</style>
