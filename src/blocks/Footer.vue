<template lang="pug">
  .footer
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 362px;
    width: 100%;
    background: $color-accent;
  }

  @media (max-width: 960px) {
    .footer {
      display: none;
    }
  }
</style>