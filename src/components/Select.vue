<template>
  <div class="select-container">
    <div v-if="label" class="select-label">
      <span>{{ label }}</span>{{ required ? '*' : ''}}
    </div>
    <div class="select">
      <div class="select-icon">
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 1L7 7.5L13.5 1" stroke="black" />
        </svg>
      </div>
      <select class="select-element" :class="[formValue.length > 0 ? 'hasValue' : '']" v-model="formValue">
        <option value="" disabled selected v-if="placeholder">{{placeholder}}</option>
        <option v-for="(option, index) in options" :key="index">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false
    },
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
      default: 'Select'
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
  },
}
</script>

<style lang="scss" scoped>
.select-label {
  margin-bottom: 4px;
  color: #D92D20;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  span {
    color: #1D2939;
  }
}

.select {
  position: relative;
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
    color: #98A2B3;
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 6px;
    padding: 12px 14px;
    outline: none;
    transition: border-color 0.2s ease;
    will-change: border-color;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    &.hasValue {
      color: #000;
    }
  }
}
</style>