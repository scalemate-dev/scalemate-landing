<template>
  <div class="input">
    <div v-if="label" class="input-label">
      <span>{{ label }}</span>{{ required ? '*' : ''}}
    </div>
    <textarea v-if="textarea" class="input-field textarea" :class="{ 'left-padding': leftPadding, disabled: disabled }" :type="type ? type : 'text'"
      :name="name" v-model="formValue" :placeholder="placeholder" :disabled="disabled" :required="required"
      :autocomplete="autocomplete" />
    <input v-else class="input-field" :class="{ 'left-padding': leftPadding, disabled: disabled }" :type="type ? type : 'text'"
      :name="name" v-model="formValue" :placeholder="placeholder" :disabled="disabled" :required="required"
      :autocomplete="autocomplete" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ['textarea', "value", "placeholder", "leftPadding", "type", "disabled", "autocomplete", "label", "required", "name"],
  computed: {
    formValue: {
      model() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
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
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 6px;
    padding: 12px 14px;
    outline: none;
    transition: border-color 0.2s ease;
    will-change: border-color;

    &::placeholder {
      color: #98A2B3;
    }
  }

  .input-label {
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

  .left-padding {
    padding-left: 40px;
  }

  .disabled {
    pointer-events: none;
  }

  .textarea {
    min-height: 130px;
    resize: vertical;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
