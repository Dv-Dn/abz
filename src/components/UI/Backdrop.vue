<template>
  <div @click="$emit('onClick')"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes bdrop {
  from {
    background-color: rgba(#000, 0.1);
  }
}
div {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: bdrop 0.4s ease-in;
  opacity: 0.32;
  background-color: #160c0d;
  overflow: hidden;
}
</style>
