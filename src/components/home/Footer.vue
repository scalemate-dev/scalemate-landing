<template>
  <div class="footer">
    <div class="container">
      <div class="footer-left">
        <div class="footer-logo">
          <inline-svg :src="require(`@/assets/icons/logo-poppins.svg`)" />
        </div>
        <div class="footer-title">Find winning ads <br /> to triple-scale your app</div>
        <div class="footer-buttons">
          <a class="footer-button" href="google.com">
            Facebook
          </a>
          <a class="footer-button" href="google.com">
            Instagram
          </a>
          <a class="footer-button" href="google.com">
            LinkedIn
          </a>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-col">
          <div class="footer-col-title">Product</div>
          <a class="footer-col-link" href="/unite">Creative Library</a>
          <!-- <a class="footer-col-link" href="/terms-and-conditions.pdf">Automated Testing Workflows <span>New</span></a> -->
          <a class="footer-col-link" href="/automate">Automation rules</a>
          <!-- <a class="footer-col-link" href="/terms-and-conditions.pdf">One-click Integration</a>
          <a class="footer-col-link" href="/terms-and-conditions.pdf">Pricing</a>
          <a class="footer-col-link" href="/terms-and-conditions.pdf">FAQs</a> -->
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Legal</div>
          <a class="footer-col-link" href="/terms-and-conditions.pdf">Terms and Conditions</a>
          <a class="footer-col-link" href="/privacy-policy.pdf">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'Footer',
  components: {
    InlineSvg,
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #1A1A1A;
  padding: 60px 0 136px;
  width: 100%;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .footer-logo {
    margin-bottom: 32px;
  }

  .footer-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #EAECF0;
    margin-bottom: 48px;
  }

  .footer-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .footer-button {
    padding: 8px 27px;
    border: 1px solid #FFFFFF;
    border-radius: 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  }

  .footer-right {
    display: flex;
    gap: 32px;
  }

  .footer-col {
    display: flex;
    flex-flow: column nowrap;
  }

  .footer-col-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #98A2B3;
    margin-bottom: 16px;
  }

  .footer-col-link {
    margin-bottom: 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #EAECF0;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      padding: 2px 8px;
      background: #F2F4F7;
      border-radius: 16px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      color: #344054;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@include tablet-horizontal {
  .footer {
    padding: 96px 0;

    .container {
      flex-flow: column nowrap;
      gap: 64px;
    }

    .footer-title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>