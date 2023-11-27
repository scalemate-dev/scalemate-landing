<template>
  <div class="hero">
    <inline-svg class="linear-background-1" :src="require(`@/assets/icons/hero-linear-background.svg`)" />
    <inline-svg class="linear-background-2" :src="require(`@/assets/icons/hero-linear-background-2.svg`)" />
    <div class="hero-container">
      <h1 class="hero-title">
        Find winning ads<br/> to <span>triple-scale</span> your app
      </h1>
      <div class="hero-description">
        Creative testing automation assistant for mobile-first agencies and busy app marketers. Born to erase performance marketing routine and save you 3 hours daily.
      </div>
      <a href="https://cal.com/scalemate/30min" target="_blank">
        <Button color="accent" class="hero-submit">
          Schedule a call <span :style="{marginLeft: '4px'}">🗓️</span>
        </Button>
      </a>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Button from '@/components/Button'

export default {
  name: 'Hero',
  components: {
    Button,
    InlineSvg,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 752px;
  position: relative;
}

.hero-submit {
  animation: float 2s ease-in-out infinite;
  transition: all 1s ease-in-out;

  &:hover {
    // -webkit-animation: 0;
    box-shadow: 0 5px 8px 0px rgba(0,0,0, 0.2) !important;
		transform: translatey(0px) !important;
  }

  &:active {
    background: grey;
  }
}

.linear-background-1 {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-0%, 0%);
  z-index: 0;
}

.linear-background-2 {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(25%, 5%);
  z-index: 0;
}

.hero-title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #121718;
  margin-bottom: 24px;

  span {
    background: url('~@/assets/images/home/hero-text.jpg');
    background-repeat: no-repeat;
    background-size: 137%;
    background-position: 40% 56%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.hero-container {
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 0 24px;
}

.hero-description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #121718;
  margin-bottom: 48px;
  max-width: 768px;
}

@include tablet-horizontal {
  .hero {
    height: initial;
    min-height: 683px;
  }

  .hero-submit {
    width: 100%;
  }

  .hero-title {
    font-size: 36px;
    line-height: 44px;
  }

  .hero-descripton {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 32px;
  }

  .linear-background-1 {
    transform: translate(-45%, -25%);
  }

  .linear-background-2 {
    transform: translate(65%, 25%);
  }
}

@keyframes float {
	0% {
		box-shadow: 0 5px 8px 0px rgba(0,0,0, 0.3);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 10px 8px 0px rgba(0,0,0,0.1);
		transform: translatey(-2px);
	}
	100% {
		box-shadow: 0 5px 8px 0px rgba(0,0,0,0.3);
		transform: translatey(0px);
	}
}
</style>