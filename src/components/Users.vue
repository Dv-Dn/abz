<template>
  <section id="users">
    <div class="wrap">
      <h2>Our cheerful users</h2>
      <h5>Attention! Sorting users by registration date</h5>
      <!-- <div v-if="!loading" class="Users"> -->
      <div class="Users">
        <User
          v-for="(a, i) in users"
          :key="i + ' ' + a.id"
          :img="a.photo"
          :name="a.name"
          :spec="a.position"
          :email="a.email"
          :phone="a.phone"
        />
        <!-- <User
          :img="require('@/assets/img/user-noah-2x.jpg')"
          name="Noah"
          spec="Leading specialist of the Control Department"
          email="noah.controldepartment@gmail.com"
          phone="+38 (050) 678 03 24"
        />
        <User
          :img="require('@/assets/img/user-adolph-2x.png')"
          name="Adolph Blaine Charles David Earl"
          spec="The contextual advertising specialist"
          email="adolph.blainecharles-davidearl@example.com"
          phone="+38 (095) 556 08 45"
        />
        <User
          :img="require('@/assets/img/user-liam-2x.jpg')"
          name="Liamgrievescasey Smith Wiam"
          spec="Lead designer"
          email="liamgrievescasey@example.com"
          phone="+38 (050) 273 93 32"
        />
        <User
          :img="require('@/assets/img/user-elizabeth-2x.jpg')"
          name="Elizabeth"
          spec="Frontend developer"
          email="elisabet.frontend@gmail.com"
          phone="+38 (095) 924 66 37"
        />
        <User
          :img="require('@/assets/img/user-alexander-2x.jpg')"
          name="Alexander"
          spec="Backend developer"
          email="alexander.backend@gmail.com"
          phone="+38 (050) 789 24 09"
        />
        <User
          :img="require('@/assets/img/user-mason-2x.jpg')"
          name="Mason"
          spec="QA"
          email="mason.qa@gmail.com"
          phone="+38 (095) 283 27 00"
        /> -->
      </div>
      <!-- <Loader v-else /> -->
      <Button
        @onClick="loadMoreUsers"
        secondary
        v-if="!end_of_users"
        :disabled="loading"
        >Show more</Button
      >
      <Tooltip ref="Tooltip" />
    </div>
  </section>
</template>

<script>
import { textTooltip } from "./mixins/textTooltip.js";
import User from "./UsersItem";
import Button from "./UI/Button";
import Tooltip from "./UI/Tooltip";

// import Loader from "./UI/Loader";
export default {
  components: {
    User,
    Button,
    Tooltip
    // Loader
  },
  mixins: [textTooltip],
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loading() {
      return this.$store.getters.loading;
    },
    end_of_users() {
      return this.$store.getters.end_of_users;
    }
  },
  mounted() {
    if (document.body.clientWidth < 768 || screen.width < 768) {
      this.$store.commit("SET_USERS_COUNT", 3);
    }
    this.$store.dispatch("getUsers");
  },
  methods: {
    loadMoreUsers() {
      return this.$store.dispatch("loadMoreUsers");
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 67px 0 54px 0;
  text-align: center;

  @include respond-to(md) {
    padding: 114px 0 54px 0;
  }

  @include respond-to(lg) {
    padding: 133px 0 54px 0;
  }

  @include respond-to(xl) {
    padding: 136px 0 54px 0;
  }

  h2 {
    margin-bottom: 13px;

    @include respond-to(md) {
      margin-bottom: 12px;
    }
  }
  h5 {
    font-weight: 400;
    line-height: 22px;
    max-width: 58.75%;
    margin: 0 auto;
    @include respond-to(lg) {
      max-width: 100%;
    }
  }
  .Users {
    display: grid;
    margin-top: 30px;
    margin-bottom: 29px;

    grid-row-gap: 30px;

    @include respond-to(md) {
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 27px;
      margin-bottom: 60px;

      grid-column-gap: 30px;
      grid-row-gap: 38px;
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to(lg) {
      justify-content: space-between;
      margin-top: 60px;
      margin-bottom: 54px;

      grid-column-gap: 30px;
      grid-row-gap: 64px;
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to(xl) {
      margin-top: 59px;
      // margin-bottom: 54px;

      grid-row-gap: 58px;
    }
  }
}
</style>
