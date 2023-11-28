<template>
  <div class="result-item">
    <div class="result-label" v-html="title" />
    <div>
      <span class="result-value" v-html="text" />
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

  .result-label {
    margin-bottom: 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #747576;

    :deep(span) {
      color: $color-accent-500;
    }
  }

  .result-value {
    font-variant-numeric: slashed-zero;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #121718;
  }

  @include tablet-horizontal {
    .result-label {
      font-size: 16px;
      line-height: 19px;
    }

    .result-value {
      font-size: 24px;
      line-height: 36px;
    }
  }
}
</style>