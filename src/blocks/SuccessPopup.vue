<template lang="pug">
  .popup-wrapper
    .background(@click="$emit('togglePopup')")
    .popup
      .cross(@click="$emit('togglePopup')") +
      h1.title Thank you!
      h3.subtitle Looking forward to talk with you!
      img.person(src="@/assets/images/laptop.svg")
</template>

<script>
export default {
  name: "Popup"
}
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
}

.background {
  background: rgba(0,0,0,.6);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.popup {
  max-width: 448px;
  min-width: 400px;
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  background: #ffffff;
  padding: 32px 40px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  padding-bottom: 288px;
  overflow: hidden;

  .cross {
    position: absolute;
    top: -8px;
    right: 8px;
    font-size: 56px;
    transform: rotate(45deg);
    user-select: none;
    cursor: pointer;
  }

  .person {
    position: absolute;
    bottom: -40px;
    left: 0;
  }
}
</style>