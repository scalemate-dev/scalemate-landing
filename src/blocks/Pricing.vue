<template lang="pug">
  .pricing
    .wrapper
      h1.title Fixed price for #[span.accent unlimited] spend! Only 139$ a month.
      form.form(@submit.prevent="onSubmit")
        Input.form__input(placeholder="Email" type="email" required)
        Button(submit) Request access
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
export default {
  name: 'Pricing',
  components: {
    Button,
    Input
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  .wrapper {
    @include container;
  }
  padding-top: 80px;
  padding-bottom: 100px;
  background: $color-grey;

  .title {
    margin-bottom: 8px;
  }

  .form {
    display: flex;
    max-width: 525px;
    &__input {
      margin-right: 8px;
      flex: 1;
    }
  }
}
</style>