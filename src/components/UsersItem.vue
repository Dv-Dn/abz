<template>
  <div class="User">
    <!-- <img :src="img" alt /> -->
    <div
      class="User__photo"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="User-block">
      <h4>{{ name }}</h4>
      <p>{{ spec }}</p>
      <p>{{ email }}</p>
      <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "spec", "email", "phone"]
};
</script>

<style lang="scss" scoped>
.User {
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @include respond-to(lg) {
    align-items: flex-start;
    flex-direction: row;
    text-align: left;
  }

  .User-block {
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    margin-top: 14px;
    @include respond-to(md) {
      margin-top: 12px;
    }
    @include respond-to(lg) {
      max-width: auto;
      margin-top: 23px;
      margin-left: 9px;
      align-items: flex-start;
    }
    @include respond-to(xl) {
      margin-top: 24px;
    }
    p {
      font-size: 14px;
      overflow: hidden;
      max-width: 100%;
      line-height: 18px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #4c4b4b;

      &:nth-child(2) {
        white-space: normal;
        text-overflow: unset;
      }
    }
    h4 {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      max-width: 77.5%;
      margin-bottom: 3px;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      @include respond-to(md) {
        margin-bottom: 4px;
        min-width: 100%;
      }
      @include respond-to(lg) {
        margin-bottom: 9px;
      }
      @include respond-to(xl) {
        max-width: 240px;
      }
    }
  }
  img {
    width: 100%;
    max-width: 70px;
    height: 70px;
    border-radius: 100%;
    // transform: scale(1.1)
  }
  .User__photo {
    border-radius: 100%;
    // background-position: top left;
    background-position: 0 0;
    background-size: 104%;
    max-width: 70px;
    width: 100%;
    height: 70px;
  }
}
</style>
