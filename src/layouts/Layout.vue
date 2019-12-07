<template>
  <div>
    <Nav :isOpen="isOpen" :openMenu="openMenu" :closeMenu="closeMenu" />
    <!-- <Tooltip ref="Tooltip" /> -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
// import Tooltip from "../components/UI/Tooltip";
// import { textTooltip } from "../components/mixins/mixins.js";

export default {
  // mixins: [textTooltip],
  components: {
    Nav
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isOpen = true;
      document.querySelector("body").style.overflow = "hidden";
    },
    closeMenu() {
      this.isOpen = false;
      document.querySelector("body").style.overflow = "";
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
