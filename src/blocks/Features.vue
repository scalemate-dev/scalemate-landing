<template>
  <div class="features">
    <div class="container">
      <div class="feature">
        <div class="feature-info">
          <div class="feature-icon">
            <inline-svg :src="require('@/assets/icons/feature-1.svg')" />
          </div>
          <div class="feature-title">
            Creative Rotation
          </div>
          <div class="feature-description">
            Make your designing and user acquisition teams work as a single engine.
            <br /><br />
            Find and multiply creative winners with solid testing methodology and transparent cross-team communication.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/feature-1.png" />
        </div>
      </div>

      <div class="feature">
        <div class="feature-info">
          <div class="feature-icon">
            <inline-svg :src="require('@/assets/icons/feature-2.svg')" />
          </div>
          <div class="feature-title">
            BI Technologies
          </div>
          <div class="feature-description">
            The significant point of great user acquisition comes down to data and measurement. Scalemate allows you to slice and dice any data by any segment imaginable.
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/feature-2.png" />
        </div>
      </div>

      <div class="feature">
        <div class="feature-info">
          <div class="feature-icon">
            <inline-svg :src="require('@/assets/icons/feature-3.svg')" />
          </div>
          <div class="feature-title">
            Cloud sync
          </div>
          <div class="feature-description">
            One click assets uploading
          </div>
        </div>
        <div class="feature-image">
          <img src="@/assets/images/feature-3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Features',
  components: {
    InlineSvg,
  },
}
</script>

<style lang="scss" scoped>
.features {
  padding: 96px 0;

  .feature {
    margin-bottom: 96px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 96px;
  }

  .feature:nth-child(even) {
    .feature-info {
      order: 1;
    }

    .feature-image {
      order: 0;
    }
  }

  .feature-info {
    flex: 1;
  }

  .feature-icon {
    margin-bottom: 24px;
  }

  .feature-title {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.025em;
    color: #111827;
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