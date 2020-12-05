<template lang="pug">
.hero
  .text
    .logo Scalemate.
    h1.title Your best friend #[span.accent TikTok] Ads assistant
    h3.subtitle Let automation do the heavy lifting and save your time.
    form.form(@submit.prevent="onSubmit")
      Input.form__input(placeholder="Email")
      Button(submit) Request a demo
  img.person(src="@/assets/images/bust.svg")
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
export default {
  name: 'Hero',
  components: { Input, Button },

  methods: {
    onSubmit() {
      this.$emit('togglePopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @include container;
  display: flex;
  .text {
    margin-right: 150px;
    align-self: center;
  }

  .logo {
    @include title('3');
    color: $color-accent;
  }

  .subtitle {
    margin-bottom: 32px;
  }

  .accent {
    color: $color-accent;
  }

  .form {
    display: flex;
    &__input {
      margin-right: 8px;
      flex: 1;
    }
  }

  .person {
    height: 400px;
    width: auto;
  }
}

</style>