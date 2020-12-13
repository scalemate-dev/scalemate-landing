<template lang="pug">
.text-input
  input.text-input__input(
    ref="input"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :value="value"
    :name="name"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  )

</template>

<script>
export default {
  name: 'TextInput',

  props: {
    name: String,
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    required: [Boolean],
    title: [String],
    placeholder: [String],
    disabled: [Boolean],
  }
};
</script>

<style scoped lang="scss">
.text-input {

  &__input {
    width: 100%;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid $color-grey-light;
    padding: 14px 16px;
    padding-bottom: 15px;
    resize: none;
    transition: border-color 0.3s;
    outline: 0;
    color: $color-black;

    // ios shadow remove
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-input-placeholder,
    &:-moz-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &::placeholder {
      color: $color-black;
      opacity: 0.5;
    }

    &:focus {
      border-color: $color-grey;
      box-shadow: 0 0 0 2px rgba(#ced3dc, 0.5);
    }

    &:disabled {
      color: $color-grey;
      background-color: $color-white;
    }
  }
}
</style>
