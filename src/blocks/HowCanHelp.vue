<template>
  <div class="help">
    <div class="container">
      <div class="title">How <span>Scalemate</span> can help you</div>
      <div class="help-wrapper">
        <div class="help-card" v-for="el in cases" :key="el.position">
          <div class="help-title">{{ el.position }}</div>
          <div class="help-descr-wrapper">
            <div class="help-descr" v-for="(opt, i) in el.options" :key="i">
              <div class="help-descr-heading">{{opt.label}}</div>
              <div class="help-descr-text">{{opt.text}}</div>
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
          position: 'UA manager',
          options: [
            {label: 'Boost productivity and efficiency', text: 'Launch new ads in a few clicks from our Creative Dashboard.'},
            {label: 'All Data in one Dashboard', text: 'Deep predictive insights into profitable future growth'},
            {label: 'Own Creative Library with test results', text: 'Find and compare how creatives perform on different platforms.'}
          ]
        },
        {
          position: 'CMO / Head of Marketing',
          options: [
            {label: 'Make transparency at work', text: 'Enhance processes by standardization workflow of Creative and UA Teams.'},
            {label: 'Performance Analysis', text: 'Aggregated data from MMP and Ad Network in One Dashboard.'},
            {label: 'Unlock employees\' potential', text: 'Release your team from routine and keep them focused on high-value work.'},
          ]
        },
        {
          position: 'Creative Producer',
          options: [
            {label: 'Best creatives in a few clicks', text: 'Cross-channel testing results of creative assets in one place.'},
            {label: 'Discover what works, what doesn’t', text: 'Attribute Creatives\' success by any option: from concepts to author.'},
            {label: 'Stay away from digging in analytics numbers', text: 'See results in short statuses and interpreted comments.'},
            // {label: 'Your best-performing concepts in a few clicks away from you'},
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
    max-width: 700px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -2%;
    margin: 0 auto;
    color: $color-text-800;
    margin-bottom: 48px;

    span {
      color: $color-accent-500;
    }
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;

  }

  &-card {
    max-width: 350px;
    background: rgba($color-bg-grey, 0.7);
    border-radius: 10px;
    margin-right: 8px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  }

  &-title {
    padding: 16px 24px;
    border-bottom: 1px solid #fff;
    font-size: 18px;
    font-weight: 500;
    color: $color-text-800;

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