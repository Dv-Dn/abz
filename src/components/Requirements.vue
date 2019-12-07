<template>
  <section id="requirements">
    <h2>General requirements for the test task</h2>
    <div class="wrap">
      <article>
        <p>
          Users want to find answers to their questions quickly and data shows
          that people really care about how quickly their pages load. The Search
          team announced speed would be a ranking signal for desktop searches in
          2010 and as of this month (July 2018), page speed will be a ranking
          factor for mobile searches too.
        </p>
        <p>
          If you're a developer working on a site, now is a good time to
          evaluate your performance using our speed tools. Think about how
          performance affects the user experience of your pages and consider
          measuring a variety of real-world user-centric performance metrics.
        </p>
        <p>
          Are you shipping too much JavaScript? Too many images? Images and
          JavaScript are the most significant contributors to the page weight
          that affect page load time based on data from HTTP Archive and the
          Chrome User Experience Report - our public dataset for key UX metrics
          as experienced by Chrome users under real-world conditions.
        </p>
      </article>
      <img class="mobile_img" src="@/assets/img/man-laptop-v1.svg" alt />
      <img class="tablet_img" src="@/assets/img/man-laptop-v2.svg" alt />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  padding: 66px 0 65px 0;
  color: #fff;
  @include imgRetina("../assets/img/third-block-bg/third-block-bg-sm", jpg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: $secondary;

  @media (min-width: #{map-get($breakpoints, sm)+1}) {
    @include imgRetina("../assets/img/third-block-bg/third-block-bg-md", jpg);
  }
  @media (min-width: #{map-get($breakpoints, md)+1}) {
    @include imgRetina("../assets/img/third-block-bg/third-block-bg-lg", jpg);
  }
  @media (min-width: #{map-get($breakpoints, lg)+1}) {
    @include imgRetina("../assets/img/third-block-bg/third-block-bg-xl", jpg);
  }
  @include respond-to(md) {
    padding: 114px 0 120px 0;
  }

  @include respond-to(lg) {
    padding: 134px 0 156px 0;
  }
  @include respond-to(xl) {
    padding: 134px 0 103px 0;
  }
  h2 {
    max-width: 88.75%;
    margin: 0 auto;
    text-align: center;

    @include respond-to(md) {
      max-width: 440px;
    }

    @include respond-to(lg) {
      max-width: 88.75%;
    }
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 39px;

    @include respond-to(md) {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 36px;
    }

    @include respond-to(lg) {
      justify-content: space-between;
    }
    @include respond-to(xl) {
      // justify-content: flex-start;
    }

    article {
      display: grid;
      width: 100%;
      margin-top: 25px;
      text-align: center;
      grid-gap: 22px;

      @include respond-to(md) {
        max-width: 47%;
        margin-top: 0;
        text-align: left;
      }
      @include respond-to(lg) {
        max-width: 49%;
        margin-top: 3px;
      }
    }
    img {
      width: 100%;
      max-width: 257px;
      height: 100%;
      max-height: 216px;
      margin-top: -14px;

      @include respond-to(md) {
        max-width: 343px;
        max-height: 407px;
        margin-top: 4px;
      }

      @include respond-to(lg) {
        max-width: 429px;
        max-height: 361px;
        margin-top: 18px;
      }
      @include respond-to(xl) {
        margin-right: 5.45%;
        margin-top: 7px;
      }
    }
    .mobile_img {
      @include respond-to(md) {
        display: none;
      }
      @include respond-to(lg) {
        display: block;
      }
    }
    .tablet_img {
      display: none;

      @include respond-to(md) {
        display: block;
      }
      @include respond-to(lg) {
        display: none;
      }
    }
    .QQQQ {
      height: 100px;
      background-image: url("../assets/img/man-laptop-v2.svg");
    }
  }

  p {
    word-break: keep-all;

    @extend %p2;
    @include respond-to(md) {
      // word-break: normal;
    }
  }
}
</style>
