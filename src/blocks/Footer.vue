<template lang="pug">
  .footer
    .copyright © 2020 Scalemate. All rights reserved
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 40px 32px;
    height: 216px;
    width: 100%;
    background: $color-accent;

    .copyright {
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: $color-white;
      margin-top: auto;
      
    }
  }

  @media (max-width: 960px) {
    .footer {
      display: none;
    }
  }
</style>