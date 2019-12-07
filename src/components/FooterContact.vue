<template>
  <div class="Footer__contact-item">
    <div>
      <img :src="require('@/assets/icons/' + icon + '.svg')" />
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: { icon: String, text: String }
};
</script>

<style lang="scss" scoped>
.Footer__contact-item {
  display: inline-flex;
  @include respond-to(lg) {
    height: 26px;
    align-items: flex-end;
  }
  p {
    font-size: 18px;
    @include respond-to(lg) {
      position: absolute;
      margin-left: 34px;
      font-size: 20px;
    }
  }
  div {
    @include respond-to(lg) {
      display: flex;
      width: 24px;
      justify-content: center;
    }
  }
  img {
    display: none;
    @include respond-to(lg) {
      display: block;
      // padding-left: 3px;
    }
  }
}
</style>
