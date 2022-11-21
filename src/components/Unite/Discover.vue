<template>
  <div class="discover">
    <div class="container">
      <h2 class="discover-title">
        Discover your best assets to <span>win the game</span>
      </h2>
      <div class="discover-subtitle">
        Close the feedback gap between designers and UA managers. Minimize hassle with numbers and instantly share one-word testing resolutions with your team.
      </div>
    </div>
    <Features :entries="discover" />
  </div>
</template>

<script>
import Features from '@/components/Launch/Features'

export default {
  name: 'Discover',
  components: {
    Features
  },
  data() {
    return {
      discover: [
        {
          title: "Search with <span>quick</span><br /> creative lookup",
          description: `Find assets by tags in a one-stop ad archive instead of digging through Facebook, Tik Tok, or Snapchat creative library.`,
          image: "quick",
          triangle: "triangle-1"
        },
        {
          title: "Get <span>real-time</span><br /> status updates",
          description: `Test creatives on all ad platforms at once. Get one-word insights on their performance and rotate winners automatically.`,
          image: "real-time",
          triangle: "triangle-2"
        },
        {
          title: "Enjoy <span>prompt</span><br /> analytics delivery",
          description: `Identify working testing approaches and their winner percent. Set up suitable testing workflows based on cross-platform data.`,
          image: "prompt",
          triangle: "triangle-2"
        },
        {
          title: "Optimize with <span>instant</span><br /> results sharing",
          description: `Streamline your teamwork — instantly share testing results across departments or report your success to the team leader.`,
          image: "instant",
          triangle: "triangle-2"
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.discover {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 120px 0 0;

  .discover-title {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
    text-align: center;
  }

  .discover-title span {
    color: $color-accent-500;
  }

  .discover-subtitle {
    margin: 0 auto;
    max-width: 1072px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #475467;
    margin-bottom: 72px;
    text-align: center;
  }

  @include tablet-vertical {

    .discover-title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 16px;
      text-align: left;
    }

    .discover-subtitle {
      margin: initial;
      margin-bottom: 72px;
      font-size: 18px;
      text-align: left;
      line-height: 24px;
    }
  }
}
</style>