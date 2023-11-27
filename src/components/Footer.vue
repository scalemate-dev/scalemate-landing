<template>
  <div class="footer">
    <div class="container">
      <div class="col">
        <a target="_blank" href="/terms-and-conditions.pdf">Terms and Conditions</a>
        <a target="_blank" href="/privacy-policy.pdf">Privacy Policy</a>
      </div>
      <div class="col">
        © 2023 Scalemate
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 24px 0;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #9CA3AF;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .col {
    display: flex;
    gap: 16px;
  }

  .col a {
    color: #9CA3AF;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    .col:first-child {
      margin-bottom: 8px;
    }

    .container {
      display: block;
    }
  }
}

</style>