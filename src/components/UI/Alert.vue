<template>
  <div class="Alert">
    <div>
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
      <a @click="alertOnClick">ok</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isopen: Boolean,
    title: String,
    text: String
  },
  mounted() {
    document.querySelector("body").style.overflow = "hidden";
  },
  methods: {
    alertOnClick() {
      document.querySelector("body").style.overflow = "visible";
      this.$emit("onClick");
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes bdrop {
  from {
    background-color: rgba(#000, 0.1);
  }
}
@keyframes alert {
  from {
    opacity: 0.1;
  }
}
.Alert {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  animation: alert 0.4s ease-in;
  background-color: rgba(#160c0d, 0.3);
  div {
    position: relative;
    z-index: 101;
    box-sizing: border-box;
    width: 290px;
    min-height: 178px;
    margin-top: 64px;
    padding: 22px;
    text-align: left;
    border-radius: 4px;
    background-color: #fff;
    p {
      max-width: 200px;
      margin-left: 3px;
      margin-top: 6px;
      color: #393939;

      @extend %p2;
    }
    a {
      font-family: "SourceSansPro-Bold", sans-serif;
      font-size: 20px;
      position: absolute;
      right: 24px;
      bottom: 20px;
      cursor: pointer;
      transition: 0.3s ease-in;
      text-transform: uppercase;
      color: $primary;
      &:hover {
        color: $secondary;
      }
    }
  }
}
</style>
