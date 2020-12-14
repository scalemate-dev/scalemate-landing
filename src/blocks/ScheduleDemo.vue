<template lang="pug">
  .schedule-demo
    .wrapper
      .text
        h1.title Still in doubt?
        h2.subtitle Let's schedule a time to show you how #[span.accent Scalemate] works!
        form.form(@submit.prevent="onSubmit" name="request-demo" netlify)
          Input.form__input(placeholder="Email" type="email" required)
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
  },

  methods: {
    onSubmit() {
      this.$emit('togglePopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule-demo {

  .wrapper {
    @include container;
    display: flex;
    padding-top: 80px;
    padding-bottom: 116px;
    position: relative;
  }
  background: $color-grey;

  .subtitle {
    margin-bottom: 32px;
  }

  .accent {
    font-weight: 900;
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

@media (max-width: 960px) {
  .schedule-demo .person {
    display: none;
  }
}

@media (max-width: 768px) {
  .schedule-demo .title {
    line-height: 40px;
    margin-bottom: 8px;
  }

  .schedule-demo .subtitle {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>