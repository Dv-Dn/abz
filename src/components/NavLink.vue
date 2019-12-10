<template>
  <li :class="{ color_white: white }" @click="$emit('onClick')">
    <a :href="href" @click="scrollToLink">{{ link }}</a>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    white: {
      type: Boolean,
      default: false
    },
    href: String
  },
  methods: {
    scrollToLink(e) {
      e.preventDefault();
      let link = e.target.getAttribute("href");
      let target = document.querySelector("section" + link);
      // console.log(this.$parent.$refs.about);

      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  a {
    font-size: 16px;
    transition: 0.3s;
    color: #000;
    &:hover {
      color: $primary;
    }
  }
}
.color_white {
  a {
    color: #fff;
  }
}
</style>