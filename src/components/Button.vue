<template>
  <div class="button" :class="[color]" @click="handleClick">
    Request a demo
  </div>
</template>

<script>
export default {
  props: ['color'],
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
  padding: 9px 17px;
  background: #4B5563;
  border-radius: 6px;
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
    background: #4B5563;
  }

  &.blue {
    background: #6366F1;
  }
}
</style>