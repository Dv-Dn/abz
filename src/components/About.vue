<template>
  <section id="about" ref="about">
    <div class="wrap">
      <h2>{{ about.title1 }}</h2>
      <div class="About">
        <img src="../assets/img/man-mobile.svg" />
        <article>
          <h3>
            {{ about.title2 }}
          </h3>
          <p>
            {{ about.text1 }}
          </p>
          <p>
            {{ about.text2 }}
          </p>
          <a href="signUp" @click="scrollToSignUp">Sign Up</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    about() {
      return this.$store.getters.get_about;
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
  padding: 67px 0 65px 0;
  text-align: center;
  @include respond-to(md) {
    padding: 113px 0 65px 0;
  }
  @include respond-to(lg) {
    padding: 133px 0 66px 0;
  }
  @include respond-to(xl) {
    padding: 135px 0 65px 0;
  }

  .About {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 22px;

    @include respond-to(md) {
      align-items: flex-start;
      flex-direction: row;
      margin-top: 41px;
    }
    @include respond-to(lg) {
      margin-top: 24px;
    }
    @include respond-to(xl) {
      margin-top: 6px;
    }

    img {
      width: 219px;
      height: 216px;
      margin-top: 4px;
      @include respond-to(md) {
        margin-top: 3px;
      }
      @include respond-to(lg) {
        width: 289px;
        height: 285px;
        margin-top: 0;
      }
      @include respond-to(xl) {
        margin-left: 36px;
        margin-top: 40px;
      }
    }

    article {
      @include respond-to(md) {
        margin-left: 30px;
        text-align: left;
      }
      @include respond-to(lg) {
        margin-top: 20px;
      }
      @include respond-to(xl) {
        margin-left: 64px;
        margin-top: 37px;
      }

      h3 {
        max-width: 65%;
        margin: 28px auto 0 auto;

        @include respond-to(md) {
          margin-top: 0;
          max-width: 100%;
        }
        @include respond-to(lg) {
          margin: 0;
        }
      }

      p {
        margin: 12px 0;
        color: #4c4b4b;
        @extend %p2;
        @include respond-to(md) {
          margin-top: 11px;
          margin-left: 1px;
        }
        @include respond-to(lg) {
          margin-top: 6px;
          width: 101%;
        }

        &:nth-child(2) {
          margin-bottom: 22px;
        }
        &:nth-last-child(2) {
          margin-bottom: 14px;
          @include respond-to(md) {
            margin-bottom: 19px;
          }
          @include respond-to(lg) {
          }
          @include respond-to(xl) {
            margin-bottom: 11px;
          }
        }
      }

      a {
        font-family: "SourceSansPro-Bold", sans-serif;
        font-size: 22px;
        color: $primary;
      }
    }
  }
}
</style>
