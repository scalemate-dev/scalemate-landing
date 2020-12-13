<template lang="pug">
.hero
  .text
    .logo Scalemate.
    h1.title Your best friend #[span.accent TikTok] Ads assistant
    h3.subtitle Let automation do the heavy lifting and save your time.
    form.form(@submit.prevent="onSubmit")
      Input.form__input(placeholder="Email" type="email" required)
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
  height: 400px;
  @include container;
  display: flex;
  position: relative;

  .text {
    margin-right: 150px;
    align-self: center;
  }

  .logo {
    @include title('3');
    color: $color-accent;
  }

  .title {
    line-height: 40px;
    margin-bottom: 8px;
  }

  .subtitle {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
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
    width: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}

@media (max-width: 960px) {
  .hero .text {
    width: 60%;
    margin-right: initial;
  }
}

@media (max-width: 768px) {
  .hero .person {
    right: -15%;
  }
}

@media (max-width: 550px) {
  .hero .text {
    width: 100%;
  }

  .hero .person {
    display: none;
  }
}
</style>