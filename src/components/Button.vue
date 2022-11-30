<template>
  <router-link :to="to" class="button link" :class="[color]" v-if="to">
    <slot />
  </router-link>
  <button
    v-else
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
  props: ['color', 'submit', 'to'],
  methods: {
    handleClick() {
      this.$emit('click', this.$event);
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
  align-items: center;
  flex-shrink: 0;

  outline: none;
  border: none;
  text-align: center;

  &.gray {
    background: $color-bg-grey;
  }

  &.accent {
    background: $color-accent-500;
  }

  &.round {
    border-radius: 100px;
    font-size: 20px;
    padding: 20px 32px;
  }

}
</style>