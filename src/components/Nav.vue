<template>
  <section>
    <div class="Nav wrap">
      <IconBase icon-name="Logo" width="134px" height="24px" class="Nav__logo">
        <IconLogo />
      </IconBase>
      <nav :class="{ navOpen: isOpen }">
        <IconBase
          icon-name="Logo"
          width="134px"
          height="24px"
          class="Nav__logo-mobile"
        >
          <IconLogo />
        </IconBase>
        <ul>
          <NavLink :link="i" v-for="(a, i) in links" :key="i" :href="'#' + a" />
          <NavLink
            link="Sign Out"
            class="navLink__signOut"
            @onClick="signOut"
          />
        </ul>
        <hr size="1" />
        <NavUser
          v-if="!loading"
          :name="get_header_user.name"
          :email="get_header_user.email"
          :photo="get_header_user.photo"
          @onClick="signOut"
          :disabledIcon="!get_header_user.name || !get_header_user.email"
        />
      </nav>
      <IconBase
        icon-name="Menu"
        width="23"
        height="22"
        iconColor="#283593"
        class="Nav__iconMenu"
        @onClick="openMenu"
      >
        <IconMenu />
      </IconBase>
      <Backdrop v-if="isOpen" @onClick="closeMenu" />
    </div>
  </section>
</template>

<script>
import NavUser from "./NavUser";
import NavLink from "./NavLink";
import IconBase from "./Icons/IconBase";
import IconLogo from "./Icons/IconLogo";
import IconLineMenu from "./Icons/IconLineMenu";
import Backdrop from "./UI/Backdrop";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    openMenu: Function,
    closeMenu: Function
  },
  computed: {
    links() {
      return this.$store.getters.get_nav_links;
    },
    get_header_user() {
      return this.$store.getters.get_header_user;
    },
    loading() {
      return this.$store.getters.user_is_loaded;
    }
  },
  mounted() {
    return this.$store.dispatch("getHeaderUser");
  },
  components: {
    NavUser,
    NavLink,
    IconBase,
    IconLogo,
    IconMenu: IconLineMenu,
    Backdrop
  },
  methods: {
    signOut() {
      this.$store.commit("SIGN_OUT");
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: #fff;
}
.Nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  .Nav__iconMenu {
    @include respond-to(lg) {
      display: none;
    }
  }
  .navOpen {
    transform: translateX(0);
  }
  nav {
    z-index: 101;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: transform 0.3s ease-in;
    @media (max-width: #{map-get($breakpoints, lg)-1}) {
      position: fixed;
      top: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column-reverse;
      justify-content: flex-end;
      width: 250px;
      height: 100vh;
      padding: 0;
      transform: translateX(-250px);
      background-color: #fff;
      @include respond-to(md) {
        width: 259px;
        transform: translateX(-259px);
      }
    }
    ul {
      display: grid;
      grid-gap: 23px;
      padding-left: 15px;
      @include respond-to(md) {
        padding-left: 24px;
      }
      @include respond-to(lg) {
        grid-gap: 0;
        display: flex;
				flex:1;
				// max-width: 52%;
				justify-content: center;
        margin-right: 2px;
        padding-bottom: 4px;
        padding-left: 0;
      }
      @include respond-to(xl) {
        padding-left: 3px;
        padding-bottom: 2px;
      }
      li {
        @include respond-to(lg) {
          margin-right: 14px;
          margin-left: 15px;
          // margin: 0 14px;
        }
      }
      .navLink__signOut {
        margin-top: 4px;
        cursor: pointer;
        @include respond-to(lg) {
          display: none;
        }
      }
    }

    hr {
      width: 100%;
      margin: 24px 0 29px 0;
      color: $border;
      @include respond-to(lg) {
        display: none;
      }
    }
  }
}
.Nav__logo-mobile {
  display: none;

  @include respond-to(lg) {
    display: block;
  }
}
.Nav__logo {
  padding-left: 2px;
  @include respond-to(md) {
    padding: 0;
  }
  @include respond-to(lg) {
    display: none;
  }
}
</style>
