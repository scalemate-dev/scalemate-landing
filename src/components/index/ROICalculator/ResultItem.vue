<template>
  <div class="result-item">
    <div class="result-spent" v-html="title" />
    <div>
      <span class="result-title" v-html="text" />
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
    text: {
      type: String,
      default: 'First label'
    },
  }
}
</script>

<style lang="scss" scoped>
.result-item {
  flex: 1;

  .result-title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
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
    margin-bottom: 12px;

    /* :deep(b) {
      font-weight: 400;
      color: #1D2939;
    } */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .result-title {
      font-size: 18px;
      line-height: 18px;
    }

    .result-spent {
      margin-bottom: 8px;
    }
  }
}
</style>