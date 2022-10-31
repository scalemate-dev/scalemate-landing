<template>
  <div class="rules">
    <div class="container">
      <div class="rules-container">
        <!-- <div class="rules-eyebrow">Valuable rules</div> -->
        <div class="rules-wrapper">
          <h2 class="metics-title">
            <span>Accelerate</span> with <br />automated testing workflow
          </h2>
          <div class="rules-description">
            Define your rules. Get simple reports for your testing approaches. Identify winning ads and their cost. Head on to the next goal!
          </div>
        </div>
        <div class="rules-list">
          <div class="rules-feature" v-for="(entry, index) in entries" :key="index">
            <div class="rules-feature-title" v-html="entry.title" />
            <div class="rules-feature-description">
              {{ entry.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Rules',
  data() {
    return {
      entries: [
        {
          title: 'Set up custom workflows',
          description: 'and define each creative path from upload & testing to going live'
        },
        {
          title: 'Use campaign templates',
          description: 'and save time on setting'
        },
        {
          title: 'Set automated rules at every level',
          description: 'and stop, scale, or change bids while sleeping at night.'
        },
        {
          title: 'Add KPIs for creative assets',
          description: 'define CPI, IPM, or spend to make sure it’s your winner.'
        },
        {
          title: 'Streamline creative rotation',
          description: 'add winners to live campaigns automatically'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.rules {
  padding: 96px 0;
  // background: url('~@/assets/images/features.jpg') no-repeat center / cover;

  .rules-wrapper {
    max-width: 868px;
  }

  .rules-container {
    max-width: 1084px;
  }

  .rules-eyebrow {
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
    letter-spacing: -0.02em;
    ;
    margin-bottom: 20px;
    color: $color-text-800;

    span {
      color: $color-accent-500;
    }
  }

  .rules-description {
    margin-bottom: 48px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $color-text-600;
  }

  .rules-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .rules-feature {
    /* max-width: 234px; */
    flex: 1;
    // margin-bottom: 48px;
  }

  /deep/ .accent {
    color: $color-accent-500;
  }

  .rules-feature-title {
    margin-bottom: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: $color-text-600;

  }

  .rules-feature-description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: $color-text-600;
  }
}

@include tablet-horizontal {
  .rules {
    padding-top: 16px;

    .metics-title {
      font-size: 42px;
      line-height: 42px;
    }
  }
}

@include tablet-vertical {
  .rules {
    .rules-list {
      flex-flow: row wrap;
    }

    .rules-feature {
      margin-bottom: 24px;
    }
  }
}
</style>
