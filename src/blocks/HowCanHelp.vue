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
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'}
          ]
        },
        {
          position: 'CMO',
          options: [
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'}
          ]
        },
        {
          position: 'Creative Producer',
          options: [
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'},
            {label: 'All your data is here', text: 'We combine data from your channels, BI, and the measurement platform'}
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.help {

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
    font-weight: 500;
    color: $color-text-500;
  }
}

</style>