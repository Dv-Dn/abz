<template>
  <div class="Tooltip"></div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.Tooltip {
  display: none;
  font-family: "SourceSansPro-Regular", sans-serif;
  position: absolute;
  max-width: 500px;
  margin: 5px;
  padding: 8px 10px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-color: #707070;
  -webkit-box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.11);
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.11);

  @extend %p3;
}
</style>