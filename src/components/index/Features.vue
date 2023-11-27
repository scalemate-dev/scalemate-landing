<template>
  <div class="features">

    <div class="feature">
      <div class="container">
        <div class="feature-info">
          <inline-svg class="feature-triangle feature-triangle-one" :src="require('@/assets/icons/triangle-1.svg')" />
          <div class="feature-title">
            Unified <span>creative library</span>
          </div>
          <div class="feature-description">
            Keep all your creatives in one place and instantly reach the asset you need. Filter files by tags, sizes,
            colors, and more.
            <br /><br />
            Access historical data about launched campaigns so you would never repeat them.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/creative-lib.png" />
        </div>
      </div>
    </div>

    <div class="feature">
      <div class="container">
        <div class="feature-info">
          <inline-svg class="feature-triangle feature-triangle-two" :src="require('@/assets/icons/triangle-2.svg')" />
          <div class="feature-title">
            Instant <span>asset upload</span>
          </div>
          <div class="feature-description">
            Forget about manual drag & drop routine — upload files in bulk via cloud sync.
            <br /><br />
            Transfer whole folders from Google Drive with zero effort on your side.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/cloud-sync.png" />
        </div>
      </div>
    </div>

    <!-- <div class="feature">
      <div class="container">
        <div class="feature-info">
          <inline-svg class="feature-triangle feature-triangle-three" :src="require('@/assets/icons/triangle-3.svg')" />
          <div class="feature-title">
            BI-powered <span>analytics</span>
          </div>
          <div class="feature-description">
            Ditch spreadsheets and measure testing performance automatically. Integrate your ad platform with app
            attribution tools.
            <br /><br />
            Once your report is ready, slice & dice essential metrics to make wiser decisions.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/report.png" />
        </div>
      </div>
    </div> -->

    <!-- <div class="feature">
      <div class="container">
        <div class="feature-info">
          <inline-svg class="feature-triangle feature-triangle-three" :src="require('@/assets/icons/triangle-3.svg')" />
          <div class="feature-title">
            Cross-platform <span>testing launch</span>
          </div>
          <div class="feature-description">
            Launch creative tests in one click, on different platforms, at once.
            <br /><br />
            Sleep at night while Scalemate pauses campaigns that are done.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/flow.png" />
        </div>
      </div>
    </div> -->

    <!-- <div class="feature">
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
      </div> -->

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
    padding: 250px 0;


    background: $color-bg-grey-50;

    &:nth-child(even) {
      background: #ffffff;
    }


    &:first-child .container .feature-image img {
      height: 512px;
    }
    &:nth-child(2) .container .feature-image img {
      height: 206px;
    }
    &:nth-child(3) .container .feature-image img {
      height: 512px;
    }

    &:nth-child(4) .container .feature-image img {
      height: 350px;
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
    font-weight: 700;
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

@include desktop-s {
  .features {
    .feature-image {
      max-width: 440px;
      // position: initial;
      // transform: none;
    }

    img {
      height: auto !important;
    }

    .feature-triangle {
      display: none;
    }
  }
}

@include tablet-horizontal {
  .features {
    .feature {
      padding: 0;
      padding-top: 32px;
      padding-bottom: 332px;
    }

    .feature .container {
      flex-flow: column nowrap;
      align-items: flex-start;

      .feature-image {
        // position: initial;
        transform: none;
        top: initial;
        bottom: 0;
      }

      .feature-image img {
        max-height: 320px;
      }
    }

    .feature:nth-child(even) .feature-image {
      left: initial;
      right: 0;
      top: calc(100% + 32px);
    }

    .feature-title {
      font-size: 32px;
      line-height: 32px;
    }
  }

}

@media (max-width: 768px) {
  .features {
    .feature {
      display: block;
    }

    .feature-image {
      // position: initial;
      // transform: none;
      // margin-top: 32px;
      // width: 100%;

      // img {
      //   width: 100%;
      // }
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