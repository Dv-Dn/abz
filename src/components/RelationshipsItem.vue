<template>
  <div class="RelationshipsItem">
    <img :src="require('@/assets/img/'+image+'.svg')" />
    <!-- <div   :style ="` backgroundImage: require(@/assets/img/${image})` " > -->
    <aside>
      <h3>{{title}}</h3>
      <p>{{text}}</p>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    text: String
  }
};
</script>

<style lang="scss" scoped>
.RelationshipsItem {
  display: block;
  @include respond-to(md) {
    display: flex;
    text-align: left;
  }
  @include respond-to(lg) {
    display: block;
  }
  img {
    width: 88px;
    height: 99px;
    @include respond-to(md) {
      width: 88px;
      height: 100px;
      margin-top: 4px;
    }
    @include respond-to(lg) {
      width: 98px;
			height: 111px;
			margin-top: 2px;
		}
		@include respond-to(xl){
			margin-top: 3px;
		}
  }
  aside {
    @include respond-to(md) {
      margin-left: 35px;
    }
    @include respond-to(lg) {
      margin: 0;
    }
    p {
      word-break: keep-all;
      // white-space: pre-line;
      color: #4c4b4b;
      @extend %p2;
      @include respond-to(lg) {
        margin-left: 2px;
      }
      @include respond-to(xl) {
        margin: 0;
      }
    }
    h3 {
      margin: 9px 0 2px 0;
      @include respond-to(md) {
        margin: 2px 0 5px 0;
      }
      @include respond-to(lg) {
        margin: 21px 0 7px 0;
      }
      @include respond-to(xl) {
        margin: 21px 0 7px 0;
      }
    }
  }
}
</style>
