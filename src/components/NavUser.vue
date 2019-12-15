<template>
  <div>
    <div class="Userlogin">
      <div>
        <p>{{ name }}</p>
        <span>{{ email }}</span>
      </div>
      <img class="headerUser" :src="photo" />
      <IconBase
        icon-name="SignOut"
        width="25"
        height="20"
        iconColor="#283593"
        class="IconSignOut"
        @onClick="$emit('onClick')"
        :disabled="disabledIcon"
      >
        <IconSignOut />
      </IconBase>
    </div>
  </div>
</template>
<script>
import IconBase from "./Icons/IconBase";
import IconSignOut from "./Icons/IconSignOut";
export default {
  components: {
    IconBase,
    IconSignOut
  },
  props: {
    photo: {
      type: String,
      default: require("@/assets/user.jpg")
    },
    name: { type: String, default: "Superstar" },
    email: { type: String, default: "Superstar@gmail.com" },
    disabledIcon: Boolean
  }
};
</script>
<style lang="scss" scoped>
.Userlogin {
  display: flex;
  align-items: center;
  flex-basis: content;
  flex-direction: column-reverse;
  margin: 30px 0 0 15px;
  @include respond-to(md) {
    margin: 30px 0 0 24px;
  }
  @include respond-to(lg) {
    flex-direction: row;
    margin: 0;
  }
  div {
    text-align: left;
    @include respond-to(lg) {
      text-align: right;
      margin-right: 6px;
      padding-bottom: 4px;
    }
    p {
      font-size: 20px;
      margin-bottom: 3px;
      @include respond-to(lg) {
        margin-bottom: 0;
        font-size: 14px;
      }
    }
    span {
      display: block;
      font-size: 13px;
      margin-right: 2px;
      color: $grey;
      @include respond-to(lg) {
        font-size: 12px;
      }
    }
  }
  .headerUser {
    width: 67px;
    height: 67px;
    margin-bottom: 13px;
    margin-right: auto;
    border-radius: 100px;
    @include respond-to(lg) {
      width: 40px;
      height: 40px;
      margin: 7px;
    }
  }

  .IconSignOut {
    display: none;
    padding-left: 6px;
    padding-right: 1px;

    @include respond-to(lg) {
      display: block;
    }
  }
}
</style>
