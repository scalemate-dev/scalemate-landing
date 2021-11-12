<template>
  <div class="features">
    <div class="container">
      <div class="feature">
        <div class="feature-info">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="6" fill="#6366F1"/>
              <path d="M32 25V18C32 16.8954 31.1046 16 30 16H18C16.8954 16 16 16.8954 16 18V25M32 25V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V25M32 25H29.4142C29.149 25 28.8946 25.1054 28.7071 25.2929L26.2929 27.7071C26.1054 27.8946 25.851 28 25.5858 28H22.4142C22.149 28 21.8946 27.8946 21.7071 27.7071L19.2929 25.2929C19.1054 25.1054 18.851 25 18.5858 25H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="6" fill="#6366F1"/>
              <path d="M17 15V19M15 17H19M18 29V33M16 31H20M25 15L27.2857 21.8571L33 24L27.2857 26.1429L25 33L22.7143 26.1429L17 24L22.7143 21.8571L25 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="6" fill="#6366F1"/>
              <path d="M32 25V18C32 16.8954 31.1046 16 30 16H18C16.8954 16 16 16.8954 16 18V25M32 25V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V25M32 25H29.4142C29.149 25 28.8946 25.1054 28.7071 25.2929L26.2929 27.7071C26.1054 27.8946 25.851 28 25.5858 28H22.4142C22.149 28 21.8946 27.8946 21.7071 27.7071L19.2929 25.2929C19.1054 25.1054 18.851 25 18.5858 25H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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

export default {
  name: 'Features',
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