<template>
  <div class="nav-dropdown">
    <div class="label">
      {{label}}
      <inline-svg class="arrow" alt="Scalemate logo" :src="require('@/assets/icons/chevron.svg')" />
    </div>
    <div class="list">
      <router-link
        class="item"
        :is="item.disabled ? 'span' : 'router-link'"

        v-for="item in items"
        :to="item.path"
        :key="item.path"
        :data-disabled="item.disabled"
      >
        {{item.label}}
        <span v-if="item.disabled" class="upcoming-note">Coming soon</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'NavigationDropdown',
  props: ['label', 'items'],
  components: { InlineSvg },
}
</script>

<style lang="scss" scoped>
.nav-dropdown {
  position: relative;
  
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    visibility: hidden;
    background-color: #fff;
    position: absolute;
    top: 24px;
    right: 0px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    width: 224px;
    // transition: ease-in-out all .4s;
    animation-timing-function: cubic-bezier(.02,.85,.01,.98);
    animation-duration: 0.4s;
    animation-name: scale, fadeIn;
  }
  &:hover .list {
    visibility: visible;
  }
  .label,
  .item {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2f2f2f;
    cursor: pointer;
  }

  .item {
    display: block;
  }

  .item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    // color: $navLinkTextColor;
    text-align: left;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #F3F4F7;
      text-decoration: none;
    }
  }

  .item[data-disabled="true"] {
    color: #cfd4df;
  }

  .item[data-disabled="true"]:hover {
    background-color: transparent;
    cursor: auto;
  }

  .upcoming-note {
    flex-grow: 1;
    text-align: right;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    color: #acb2be;
  }

  .arrow {
    width: 16px;
    height: auto;
    margin-left: 8px;
    transform: rotate(180deg);
    transition: transform .3s ease;
  }

  &:hover .arrow {
    transform: rotate(0);
  }


  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

  @keyframes scale {
    0% {
      transform: scale(.9);
    }
    100% {
      transform: scale(1);
    }
  }
}

</style>