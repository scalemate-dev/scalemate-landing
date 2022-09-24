<template>
  <div class="input">
    <div v-if="label" class="input-label">
      {{ label }}
    </div>
    <input
      class="input-field"
      :class="{ 'left-padding': leftPadding, disabled: disabled }"
      :type="type ? type : 'text'"
      :name="name"
      v-model="formValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["placeholder", "leftPadding", "type", "disabled", "autocomplete", "label", "required", "name"],
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
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;

  .input-field {
    width: 100%;
    font-style: normal;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    border: 1px solid rgba(166, 170, 180, 0.5);
    border-radius: 10px;
    padding: 16px 18px;
    outline: none;
    transition: border-color 0.2s ease;
    will-change: border-color;
  }

  &::placeholder {
    color: #6B7280;
  }

  .input-label {
    margin-bottom: 12px;
    color: #878d93;
    font-size: 14px;
  }

  .left-padding {
    padding-left: 40px;
  }

  .disabled {
    pointer-events: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
