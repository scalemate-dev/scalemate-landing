<template>
  <router-link :to="to" class="button link" :class="[color, wide ? 'wide' : '']" v-if="to">
    <slot />
  </router-link>
  <button
    v-else
    class="button"
    :class="[color, wide ? 'wide' : '']"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ['color', 'submit', 'to', 'wide'],
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
  border-radius: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  user-select: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  outline: none;
  border: none;
  text-align: center;

  &.wide {
    width: 100%;
  }

  &.gray {
    background: $color-bg-grey;
  }

  &.accent {
    background: #121718;
  }

  &.round {
    border-radius: 100px;
    font-size: 20px;
    padding: 20px 32px;
  }

  &.outline {
    padding: 10px 18px;
    background: transparent;
    border: 1px solid #121718;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  &.no-background {
    padding: 10px 18px;
    background: transparent;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #747576;
  }
}
</style>