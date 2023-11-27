<template>
  <div class="features">
    <div class="container">
      <div class="feature" v-for="(feature, key) in features" :key="key">
        <img v-if="key === 0" class="feature-image-1" :src="require(`@/assets/images/home/features-1.png`)" />
        <img v-if="key === 1" class="feature-image-2" :src="require(`@/assets/images/home/features-2.png`)" />
        <div class="feature-content">
          <div class="feature-badge" :style="{color: feature.badge.color, background: feature.badge.background}">
            {{ feature.badge.label }}
          </div>
          <div class="feature-title">
            {{ feature.title }}
          </div>
          <div class="feature-description" v-html="feature.description" />
        </div>
        <div class="feature-image">
          <img :src="require(`@/assets/images/home/${feature.image}.png`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          image: 'creative-library',
          badge: {
            label: 'Creative Library',
            background: '#FFF1F3',
            color: '#C01048',
          },
          title: 'Unified creative library',
          description: `
            Keep all your creatives in one place and instantly reach the asset you need. Filter files by tags, sizes, colors, and more.
            <br /><br />
            Access historical data about launched campaigns so you would never repeat them.
          `,
        },
        {
          image: 'cloud-sync',
          // image: 'instant',
          badge: {
            label: 'Cloud Sync',
            background: '#ECFDF3',
            color: '#027A48',
          },
          title: 'One touch assets upload',
          description: `
            Forget about manual drag & drop routine — upload files in bulk via cloud sync.
            <br /><br />
            Transfer videos & images from cloud storage to advertisement platform with zero effort on your side.
          `,
        },
        {
          image: 'smart-flow',
          // image: 'testing-launch',
          badge: {
            label: 'Smart Flows',
            background: '#F4F3FF',
            color: '#5925DC',
          },
          // title: 'Cross-platform testing launch',
          title: 'Efortless launch to Win',
          description: `
            Test multiple ads with ease using dynamic flows.
            <br /><br />
            Launch with a click and Scalemate pick the top performers using your success criteria.
          `,
            // Launch creative tests simultaneously on various platforms with just one click.
            // <br /><br />
            // Have the peace of mind knowing that Scalemate will pause completed campaigns while you sleep.
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  padding: 236px 0;

  .container {
    display: flex;
    flex-flow: column nowrap;
    gap: 162px;
  }

  .feature {
    gap: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:nth-child(even) {
      .feature-image {
        order: 1;
      }

      .feature-content {
        order: 2;
      }
    }
  }

  .feature-image,
  .feature-content {
    position: relative;
    z-index: 1;
  }

  .feature-image-1 {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -70%);
    z-index: 0;
  }

  .feature-image-2 {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -40%);
    z-index: 0;
  }

  .feature-image {
    flex: 0 0 49%;

    img {
      width: 100%;
    }
  }

  .feature-badge {
    display: inline-block;
    background: #FFF1F3;
    border: 1px solid #121718;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 32px;
    padding: 4px 12px;
  }

  .feature-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    color: #101828;
    margin-bottom: 32px;
  }

  .feature-description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #121718;
  }
}

@include tablet-horizontal {
  .features {
    padding: 96px 0 64px;

    .feature {
      flex-flow: column nowrap;
      gap: 48px;

      &:nth-child(even) {
        .feature-image {
          order: 2;
        }

        .feature-content {
          order: 1;
        }
      }
    }

    .feature-badge {
      margin-bottom: 12px;
    }

    .feature-title {
      font-size: 30px;
      line-height: 47px;
      margin-bottom: 16px;
    }

    .feature-description {
      font-size: 18px;
      line-height: 28px;
    }
  }
}
</style>