<template lang="pug">
  .button
    slot
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.button {
  color: $color-white;
  padding: 12px 16px;
  text-align: center;
  background: $color-accent;
  border-radius: 4px;
}
</style>