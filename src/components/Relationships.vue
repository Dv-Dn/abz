<template>
  <section id="relationships">
    <div class="wrap">
      <h2>About my relationships with web-development</h2>
      <div class="RelationshipsItems">
        <RelationshipsItem
          image="html"
          title="I'm in love with HTML"
          text="Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."
        />
        <RelationshipsItem
          image="css"
          title="CSS is my best friend"
          text="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
        />
        <RelationshipsItem
          image="javascript"
          title="JavaScript is my passion"
          text="JavaScript is a high-level, interpreted programming language.   It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
        />
      </div>
    </div>
  </section>
</template>

<script>
import RelationshipsItem from "./RelationshipsItem";
export default {
  components: {
    RelationshipsItem
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 2px 0 70px 0;
  text-align: center;
  @include respond-to(md) {
    padding: 68px 0 126px 0;
  }

  @include respond-to(lg) {
    padding: 58px 0 139px 0;
	}
	@include respond-to(xl){
    padding: 11px 0 141px 0;
	}
}

h2 {
  max-width: 560px;
  margin: 0 auto;
}

.RelationshipsItems {
  display: grid;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  grid-row-gap: 30px;
  @include respond-to(md) {
    grid-template-columns: 82%;
    justify-content: center;
    margin-top: 40px;
    grid-row-gap: 45px;
  }
  @include respond-to(lg) {
    margin-top: 43px;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    grid-gap: 30px;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
  }
  @include respond-to(xl) {
    margin-top: 42px;

    // grid-template-columns: 1fr 2% 1fr;
    // grid-gap: 40px;

  }
}
</style>
