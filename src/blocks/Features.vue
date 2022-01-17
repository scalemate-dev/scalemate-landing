<template>
  <div class="features">

      <div class="feature">
        <div class="container">
          <div class="feature-info">
            <inline-svg class="feature-triangle feature-triangle-one" :src="require('@/assets/icons/triangle-1.svg')" />
            <div class="feature-title">
              Setup adsets from <span>Creative Library</span>
            </div>
            <div class="feature-description">
              Make creative production and user acquisition teams work as a single-engine.
              <br/><br/>
              Find and multiply creative winners with solid testing methodology and transparent cross-team communication.
            </div>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/creative-lib.png" :style="{height: '512px'}"/>
          </div>
        </div>
      </div>

      <div class="feature">
        <div class="container">
          <div class="feature-info">
            <inline-svg class="feature-triangle feature-triangle-two" :src="require('@/assets/icons/triangle-2.svg')" />
            <div class="feature-title">
              Cloud <span>sync</span>
            </div>
            <div class="feature-description">
              One-click uploading your creative assets to different platforms. Two clicks adding them to any campaign or some of them.
            </div>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/cloud-sync.png" :style="{height: '206px'}"/>
          </div>
        </div>
      </div>

      <div class="feature">
        <div class="container">
          <div class="feature-info">
            <inline-svg class="feature-triangle feature-triangle-three" :src="require('@/assets/icons/triangle-3.svg')" />
            <div class="feature-title">
              <span>BI</span> Technologies
            </div>
            <div class="feature-description">
              The significant point of great user acquisition comes down to data and measurement. Scalemate allows you to slice and dice any data by any segment imaginable.
            </div>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/report.png" :style="{height: '512px'}"/>
          </div>
        </div>
      </div>

      <div class="feature">
        <div class="container">
          <div class="feature-info">
            <inline-svg class="feature-triangle feature-triangle-four" :src="require('@/assets/icons/triangle-4.svg')" />
            <div class="feature-title">
              Get <span>notified</span> about results
            </div>
            <div class="feature-description">
              The significant point of great user acquisition comes down to data and measurement. Scalemate allows you to slice and dice any data by any segment imaginable.
            </div>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/notifications.png" :style="{height: '263px'}"/>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Features',
  components: { InlineSvg }
}
</script>

<style lang="scss" scoped>
.features {
  padding: 96px 0;
  // position: relative;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 96px;
  }


  .feature {
    // margin-bottom: 96px;
    position: relative;
    padding: 192px 0;


    background: $color-bg-grey-50;

    &:nth-child(even) {
      background: #ffffff;
    }
  }
  
  .feature-triangle {
    position: absolute;
  }

  .feature-triangle-one {
    top: 109%;
    right: 0;
  }

  .feature-triangle-two {
    top: 150%;
    right: 0;
  }

  .feature-triangle-three {
    top: 128%;
    left: -86px;
  }

  .feature-triangle-four {
    top: 115%;
    right: 0;
  }

  .feature-image {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    width: auto;
  }

  // .feature:nth-child(odd) {
  //   .feature-image {
  //     right: 0;
  //   }
  // }

  // .feature:nth-child(even) {
  //   .feature-image {
  //     left: 0;
  //   }
  // }

  .feature:nth-child(even) {
    .container {
      justify-content: flex-end;
      position: relative;
    }

    .feature-image {
      right: initial;
      left: 112px;
    }
  }

  .feature-image {
    flex: 0.5;
  }

  .feature-image img {
    width: 100%;
    height: auto;
  }

  .feature-info {
    position: relative;
    flex: 0.5 0 0;
  }

  .feature-icon {
    margin-bottom: 24px;
  }

  .feature-title {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #111827;

    span {
      color: $color-accent-500;
    }
  }

  .feature-description {
    max-width: 560px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #6B7280;
  }
}

@media (max-width: 768px) {
  .features {
    .feature {
      display: block;
    }

    .feature-image {
      margin-top: 32px;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 450px) {
  .features {
    .feature-description {
      font-size: 17px;
    }
  }
}
</style>