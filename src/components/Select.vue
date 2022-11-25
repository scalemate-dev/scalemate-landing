<template>
  <div class="select">
    <div class="select-icon">
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 1L7 7.5L13.5 1" stroke="black" />
      </svg>
    </div>
    <select
      :class="{'select-element': true, 'placeholder': isPlaceholder, 'as-input': asInput}"
      v-model="formValue"
    >
      <option v-if="placeholder" value="" disabled selected>
        {{ placeholder }}
      </option>
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Choose option'
    },
    asInput: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    isPlaceholder() {
      return this.formValue === ''
    }
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;

  .select-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
  }

  .select-element {
    width: 100%;
    font-style: normal;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    background: #FAFAFA;
    border: 1px solid #E5E7EB;
    border-radius: 10px;
    padding: 16px 18px;
    outline: none;
    transition: border-color 0.2s ease;
    will-change: border-color;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    &.placeholder {
      color: #6B7280;
    }

    &.as-input {
      border: 1px solid rgba(166, 170, 180, 0.5);
      background: #FFF;
    }
  }
}
</style>