<template>
  <div class="button" :class="[color]" @click="handleClick" :submit="submit">
    <slot />
    <!-- <span v-if="!$slots.defaultSlot">Request a demo</span> -->
  </div>
</template>

<script>
export default {
  props: ['color', 'submit'],
  methods: {
    handleClick() {
      this.$emit('click');
    },
    mounted () {
      console.log('!!!!!!!!! hwllo world !!!!!!!!!! ')
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

  &.gray {
    background: $color-bg-grey;
  }

  &.accent {
    background: $color-accent-500;
  }
}
</style>