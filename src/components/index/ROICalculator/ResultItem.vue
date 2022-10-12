<template>
  <div class="result-item">
    <div class="result-title" v-html="title" />
    <div>
      <span class="result-spent" v-html="firstLabel" />,
      <span class="result-spent" v-html="secondLabel" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultItem',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    firstLabel: {
      type: String,
      default: 'First label'
    },
    secondLabel: {
      type: String,
      default: 'Second label'
    },
  }
}
</script>

<style lang="scss" scoped>
.result-item {
  flex: 1;

  .result-title {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 16px;
    color: #1D2939;

    :deep(span) {
      color: $color-accent-500;
    }
  }

  .result-spent {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #667085;
    margin-bottom: 4px;

    /* :deep(b) {
      font-weight: 400;
      color: #1D2939;
    } */
  }
}
</style>