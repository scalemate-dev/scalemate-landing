<template>
  <div class="align">
    <div class="container">
      <h2 class="align-title">
        <span>Align</span> user acquisition & design teams
      </h2>
      <div class="align-subtitle">
        Close the feedback gap between designers and UA managers. Minimize hassle with numbers and instantly share one-word testing resolutions with your team.
      </div>
    </div>
    <Features :entries="align" />
  </div>
</template>

<script>
import Features from '@/components/Launch/Features'

export default {
  name: 'Align',
  components: {
    Features
  },
  data() {
    return {
      align: [
        {
          title: "One minute to <span>report</span>",
          description: `
            <span>You:</span> select a group of creatives you’d like to assess or the entire library results.
            <br /><br />
            <span>Scalemate:</span> creates a custom report based on your KPIs and defines the creative’s performance (bad/good/ok/winner.) 
          `,
          image: "report-phases",
          triangle: "triangle-1"
        },
        {
          title: "One minute to <span>share</span>",
          description: `
            <span>You:</span> pick a sharing method: direct library link or Google Drive file.
            <br /><br />
            <span>Scalemate:</span> pulls creative testing data into Google Spreadsheets or PDFs.
          `,
          image: "export",
          triangle: "triangle-2"
        },
        {
          title: "One minute to <span>notify</span>",
          description: `
            <span>You:</span> connect Slack and emails of people you'd like to forward results to.
            <br /><br />
            <span>Scalemate:</span> keeps track of which creatives are successful and notifies your team.
          `,
          image: "notifications",
          triangle: "triangle-2"
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.align {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .align-title {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
    color: #1D2939;
    margin-bottom: 32px;
    text-align: center;
  }

  .align-title span {
    color: $color-accent-500;
  }

  .align-subtitle {
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

    .align-title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 16px;
      text-align: left;
    }

    .align-subtitle {
      font-size: 18px;
      text-align: left;
      line-height: 24px;
    }
  }
}
</style>