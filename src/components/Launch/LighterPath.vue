<template>
  <div class="path">
    <div class="container">
      <h2 class="path-title">
        Step on a <span>Lighter Path</span> to Find a Winner
      </h2>
      <div class="path-subtitle">
        Shorten your creative rotation cycle and save more than 13 hours per 100 creatives. Release your team from the monkey
        job and streamline the process of finding the winning ad.
      </div>
      <div class="path-image">
        <img src="@/assets/images/lighter-path.png" />
      </div>
      <div class="path-tabs">
        <div class="path-navigation">
          <div
            :class="{'path-navigation-item': true, 'active': active === 'without-us'}"
            @click="setActive('without-us')"
          >
            Without us
          </div>
          <div
            :class="{'path-navigation-item': true, 'active': active === 'with-scalemate'}"
            @click="setActive('with-scalemate')"
          >
            With Scalemate
          </div>
        </div>
        <div class="path-content">
          <div class="path-content-item" v-for="(item, index) in entries" :key="index">
            <div :class="['path-content-item__icon', active]">
              {{ index + 1 }}
            </div>
            <div>
              <div class="path-content-item__title">
                {{ item.title }}
              </div>
              <div class="path-content-item__description">
                {{ item.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LighterPath',
  data() {
    return {
      active: 'with-scalemate',
      withScalemate: [
        {
          title: 'New creatives in the cloud',
          role: 'Creative designer',
        },
        {
          title: 'Sync creatives in one click',
          role: 'UA manager',
        },
        {
          title: 'Automatically add to testing campaigns',
          role: 'UA manager',
        },
        {
          title: 'Get notified about results',
          role: 'UA manager',
        },
        {
          title: 'Generate aggregated KPI report with testing results',
          role: 'UA manager',
        },
      ],
      withoutUs: [
        {
          title: 'Download it to your PC',
          role: 'UA manager',
        },
        {
          title: 'Upload it to ad platforms',
          role: 'UA manager',
        },
        {
          title: 'Manually add it to the сampaign',
          role: 'UA manager',
        },
        {
          title: 'Track testing campaign',
          role: 'UA manager',
        },
        {
          title: 'Aggregate stats manually',
          role: 'UA manager',
        },
        {
          title: 'Stop campaigns manually',
          role: 'UA manager',
        },
      ],
    }
  },
  computed: {
    entries() {
      return this.active === 'without-us' ? this.withoutUs : this.withScalemate
    }
  },
  methods: {
    setActive(active) {
      this.active = active
    }
  }
}
</script>

<style lang="scss" scoped>
.path {
  min-height: 700px;
  padding-top: 124px;
  padding-bottom: 200px;

  .container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0 auto;
    padding: 0 72px;
  }

  .path-title {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
    text-align: center;
  }

  .path-title span {
    color: $color-accent-500;
  }

  .path-subtitle {
    max-width: 1072px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #475467;
    margin-bottom: 72px;
    text-align: center;
  }

  .path-image {

  }

  .path-image img {
    width: 100%;
  }

  .path-tabs {
    display: none;
  }

  @include tablet-vertical {
    padding: 0 0 120px;
    min-height: initial;
    background: linear-gradient(180deg, #FFFFFF 0%, #EEE 51.04%, rgba(217, 217, 217, 0) 100%);

    .container {
      padding: 0 24px;
    }

    .path-title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 16px;
    }

    .path-subtitle {
      font-size: 18px;
      line-height: 24px;
    }

    .path-image {
      display: none;
    }

    .path-tabs {
      display: block;
      width: 100%;
    }

    .path-navigation {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      gap: 16px;
    }

    .path-navigation-item {
      cursor: pointer;
      font-size: 18px;
      line-height: 24px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
      padding: 16px;
      border-radius: 16px;
      font-weight: 600;

      &.active {
        background: #F9FAFB;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .path-content {
      display: flex;
      flex-flow: column nowrap;
      gap: 16px;
    }

    .path-content-item {
      padding: 16px;
      background: #F9FAFB;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 16px;
    }

    .path-content-item__icon {
      width: 48px;
      flex: 0 0 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 18px;

      &.without-us {
        border: 1px solid #FDA19B;
        background-color: #FECDC9;
      }

      &.with-scalemate {
        border: 1px solid #6CE9A6;
        background-color: #A6F4C5;
      }
    }

    .path-content-item__title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      color: #000000;
    }

    .path-content-item__description {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #000000;
    }
  }
}
</style>
