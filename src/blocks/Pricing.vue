<template lang="pug">
  .pricing
    .wrapper
      h1.title Fixed price for #[span.accent unlimited] spend! Only 139$ a month.
      form.form(@submit.prevent="onSubmit" id="request-access-form" name="request-access" method="POST" data-netlify="true")
        <input type="hidden" name="request-access" value="contact">
        Input.form__input(placeholder="Email" type="email" name="email" required)
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

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      let myForm = document.getElementById('request-access-form');
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
    },
    async onSubmit(e) {
      try {
        await this.handleSubmit(e)
        this.$emit('togglePopup')
      } catch (e) {
        console.error(e)
      }
    }
  }
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