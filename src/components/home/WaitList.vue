<template>
  <div class="black">
    <div class="wait-list">
      <div class="container">
        <h2 class="wait-list-title">
          Deal with creative testing <span>260% faster</span>
        </h2>
        <div class="wait-list-subtitle">1-month free trial | Dedicated onboarding | Custom integrations</div>
        <Button color="accent" to="/book-a-demo" class="wait-list-submit" v-if="!noButton">
          Book a demo
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'BottomCTA',
  props: ['noButton'],
  components: {
    Button,
  },
}
</script>

<style lang="scss" scoped>
.black {
  background: #1A1A1A;
}

.wait-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0px;
  gap: 64px;
  background: linear-gradient(90deg, rgba(238, 174, 202, 0.2) 9.68%, rgba(148, 187, 233, 0.2) 85.58%), #F9FAFB;
  border-radius: 0px 0px 60px 60px;

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  &-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 69px;
    text-align: center;
    color: #121718;
    max-width: 768px;
    margin-bottom: 32px;

    span {
      color: $color-accent-500;
    }
  }

  &-subtitle {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #121718;
    margin-bottom: 40px;
  }

  &-form {
    display: flex;
    margin: 0 auto;
    max-width: 528px;
  }

  &-input {
    margin-right: 16px;
  }
}

@include tablet-horizontal {
  .wait-list {
    border-radius: 0px 0px 30px 30px;

    &-title {
      font-size: 30px;
      line-height: 44px;
      margin-bottom: 16px;
    }

    &-subtitle {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 32px;
    }
  }

  .wait-list-submit {
    width: 100%;
  }
}
</style>