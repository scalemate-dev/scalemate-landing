<template>
  <router-link :to="to" class="button link" :class="[color, wide ? 'wide' : '']" v-if="to">
    <slot />
  </router-link>
  <button
    v-else
    class="button"
    :class="[color, wide ? 'wide' : '']"
    :disabled="disabled"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
  >

    <Spinner v-if="loading"/>
    <slot />
  </button>
</template>

<script>
import Spinner from './Spinner'
// import Success from './Success'
export default {
  components: {
    Spinner,
  },
  props: ['color', 'submit', 'to', 'wide', 'loading', 'disabled'],
  methods: {
    handleClick() {
      if (this.props.disabled) return

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

  transition: background .3s ease-in-out;


  &.wide {
    width: 100%;
  }

  &.gray {
    background: $color-bg-grey;
  }

  &.accent {
    background: #1a1a1a;

    &:hover {
      background: #2a2a2a;
    }
  }

  &.round {
    border-radius: 100px;
    font-size: 20px;
    padding: 20px 32px;
  }

  &[disabled="disabled"] {
    // opacity: 0.5;
    color: #1A1A1A;
    background: rgb(236, 253, 243);
    pointer-events: none;
  }

  &.outline {
    padding: 10px 18px;
    background: transparent;
    border: 1px solid #1a1a1a;
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