<template>
  <button
    class="button"
    :class="[color]"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ['color', 'submit'],
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  padding: 16px 32px;
  background: $color-bg-grey;
  border-radius: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  user-select: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-shrink: 0;

  outline: none;
  border: none;

  &.gray {
    background: $color-bg-grey;
  }

  &.accent {
    background: $color-accent-500;
  }

}
</style>