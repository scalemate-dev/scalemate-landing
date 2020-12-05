<template lang="pug">
  button.button(
    :type="submit ? 'submit' : 'button'"
    @click="onClick"
  )

    .button__waves
      transition-group(tag="div" name="wave")
        .button__wave(v-for="wave in waves", :key="wave")
    slot
</template>

<script>
export default {
  props: {
    submit: Boolean
  },

  data () {
    return {
      waves: []
    }
  },

  methods: {
    onClick (event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }

      this.createWave();
    },

    createWave () {
      this.waves.push(this.counter++);

      this.$nextTick(() => {
        this.waves.shift();
      });
    },
  }
}
</script>

<style lang="scss" scoped>
$outline-size: 10px;
.button {
  position: relative;
  color: $color-white;
  padding: 14px 16px;
  padding-bottom: 15px;
  text-align: center;
  background: $color-accent;
  border-radius: 4px;
  border: none;
  outline: none;


  &__waves {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__wave {
    position: absolute;
    top: -$outline-size;
    right: -$outline-size;
    bottom: -$outline-size;
    left: -$outline-size;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transform-origin: center;

    background-color: rgba($color-accent, 0.4);
    }
  }

  .wave-leave-to {
    width: calc(100% + #{$outline-size * 2});
    height: calc(100% + #{$outline-size * 2});
    opacity: 0;
    visibility: hidden;
  }

  .wave-leave-active {
    transition-property: width, height, opacity, visibility;
    transition-duration: 1.5s, 1.5s, 1.2s, 1.2s;
    transition-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  }


</style>