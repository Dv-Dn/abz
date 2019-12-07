<template>
  <section id="banner">
    <div class="wrap">
      <h1>{{ header.title }}</h1>
      <p>
        <span>{{ header.text }}</span>
        <span>{{ header.text2 }}</span>
      </p>
      <Btn class="Banner__btn" @onClick="scrollToSignUp">Sign Up</Btn>
    </div>
  </section>
</template>

<script>
import Button from "./UI/Button";
export default {
  computed: {
    header() {
      return this.$store.getters.get_banner;
    }
  },

  components: {
    Btn: Button
  },
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  methods: {
    scrollToSignUp() {
      let target = document.querySelector("section" + "#signUp");
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  height: 393px;
  margin-top: 64px;
  text-align: center;
  color: #fff;
  // Изменение фонового изображения в зависимости он разрешения экрана.
	// Изображения были сжаты для повышения скорости загрузки без видимой потери в качестве.
	// При DPR>=2 меняем изображения на непрофессионально увеличенные в фотошопе копии
  @include imgRetina("../assets/img/banner-bg/banner-bg-sm", jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: $secondary;
  @media (min-width: #{map-get($breakpoints, sm)+1}) {
    @include imgRetina("../assets/img/banner-bg/banner-bg-md", jpg);
  }
  @media (min-width: #{map-get($breakpoints, md)+1}) {
    @include imgRetina("../assets/img/banner-bg/banner-bg-lg", jpg);
  }
  @media (min-width: #{map-get($breakpoints, lg)+1}) {
    @include imgRetina("../assets/img/banner-bg/banner-bg-xl", jpg);
  }


  // Изменение высоты банера
  @include respond-to(md) {
    height: 622px;
  }
  @include respond-to(lg) {
    height: 725px;
  }
  @include respond-to(xl) {
    height: 676px;
  }
}
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2px;
  @include respond-to(md) {
    align-items: flex-start;
    text-align: left;
  }
  @include respond-to(lg) {
    justify-content: center;
    margin-bottom: 17px;
  }
  @include respond-to(xl) {
    margin-bottom: 0;
  }
  p {
    line-height: 22px;
    display: block;
    overflow: hidden;
    max-width: 450px;
    margin: 10px 0 39px 0;

    @include respond-to(md) {
      margin: 20px 0 33px 0;
      line-height: 24px;
      font-size: 18px;
      max-width: 53.90625%;
    }
    @include respond-to(lg) {
      margin: 18px 0 40px 0;
      line-height: 26px;
      font-size: 20px;
      max-width: 49%;
    }
    @include respond-to(xl) {
      margin: 19px 0 36px 0;
    }
    span {
      &:nth-child(1) {
        @include respond-to(xl) {
          display: block;
          max-width: 85%;
        }
      }
      &:nth-child(2) {
        display: none;
        @include respond-to(md) {
          display: inline;
        }
        @include respond-to(xl) {
          display: block;
        }
      }
    }
  }
  h1 {
    max-width: 450px;
    margin-top: 4px;
    @include respond-to(md) {
      margin-left: -2px;
      margin-top: -2px;
    }
    @include respond-to(xl) {
      margin-top: 2px;
    }
  }
  .Banner__btn {
    margin-bottom: 5px;
    @include respond-to(xl) {
      margin-bottom: 11px;
    }
  }
}
</style>
