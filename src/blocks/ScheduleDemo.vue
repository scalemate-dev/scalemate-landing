<template lang="pug">
  .schedule-demo
    .text
      h1.title Schedule demo
      h2.subtitle Automate campaign performance management.
      form.form(@submit.prevent="onSubmit")
        Input.form__input(placeholder="Email")
        Button(submit) Request a demo

    img.person(src="@/assets/images/sitting.svg")
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
export default {
  name: 'ScheduleDemo',
  components: {
    Button,
    Input
  }
}
</script>

<style lang="scss" scoped>
.schedule-demo {
  @include container;
  display: flex;

  padding-top: 80px;
  padding-bottom: 116px;
  position: relative;
  .subtitle {
    margin-bottom: 32px;
  }

  .text {
    align-self: center;
  }

  .form {
    display: flex;
    &__input {
      margin-right: 8px;
      flex: 1;
    }
  }

  .person {
    position: absolute;
    bottom: -160px;
    right: 68px;
  }

}

</style>