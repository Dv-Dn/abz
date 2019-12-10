<template>
  <footer>
    <div class="wrap">
      <div class="footer-top">
        <IconBase icon-name="Logo" width="134" height="24">
          <IconLogo />
        </IconBase>
        <ul class="navLinks">
          <NavLink
            :link="i"
            v-for="(a, i) in navLinks"
            :key="i"
            :href="'#' + a"
            white
          />
        </ul>
      </div>
    </div>

    <hr />
    <div class="wrap">
      <div class="footer-center">
        <ul class="footer-center__contacts">
          <FooterContact icon="mail" text="work.of.future@gmail.com" />
          <FooterContact icon="phone" text="+38 (050) 789 24 98" />
          <FooterContact icon="cellphone" text="+38 (095) 556 08 45" />
        </ul>
        <div class="footer-center__links">
          <ul v-for="(ul, i) in links" :key="i">
            <a href="#" v-for="(a, i) in ul" :key="i">{{ a }}</a>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© abz.agency specially for the test task</p>
        <ul>
          <IconBase icon-name="Facebook">
            <a href="#">
              <Facebook />
            </a>
          </IconBase>
          <IconBase icon-name="Linkedin">
            <a href="#">
              <Linkedin />
            </a>
          </IconBase>
          <IconBase icon-name="Instagram">
            <a href="#">
              <Instagram />
            </a>
          </IconBase>
          <IconBase icon-name="Twitter">
            <a href="#">
              <Twitter />
            </a>
          </IconBase>
          <IconBase icon-name="Pinterest">
            <a href="#"><Pinterest /></a>
          </IconBase>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLink from "./NavLink";
import IconBase from "./Icons/IconBase";
import IconLogo from "./Icons/IconLogo";
import FooterContact from "./FooterContact";
import Facebook from "./Icons/IconFacebook";
import Linkedin from "./Icons/IconLinkedin";
import Instagram from "./Icons/IconInstagram";
import Twitter from "./Icons/IconTwitter";
import Pinterest from "./Icons/IconPinterest";

export default {
  data: function() {
    return {
      links: [
        ["News", "Blog", "Partners", "Shop"],
        ["Overview", "Design", "Code", "Collaborate"],
        ["Tutorials", "Resources", "Guides", "Examples"],
        ["FAQ", "Terms", "Conditions", "Help"]
      ]
    };
  },
  components: {
    NavLink,
    IconBase,
    IconLogo,
    FooterContact,
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    Pinterest
  },
  computed: {
    navLinks() {
      return this.$store.getters.get_nav_links;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  color: #fff;
  background-color: $secondary;
  .footer-top {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 31px 0 29px 0;

    @include respond-to(md) {
      padding: 30px 0 30px 0;
      flex-direction: row;
    }
    @include respond-to(xl) {
      padding: 28px 0 30px 0;
    }
    .navLinks {
      display: grid;
      margin: 0 auto;
      margin-top: 16px;
      text-align: center;
      grid-gap: 6px;
      @include respond-to(md) {
        margin: 0;
        display: flex;
        width: 63%;
        justify-content: space-between;
        margin-right: 1px;
      }
      @include respond-to(lg) {
        width: 49%;
      }
      @include respond-to(xl) {
        width: 40%;
      }
    }
  }
}

hr {
  color: #5f5fc4;
  max-width: 1140px;
  margin: 0 auto;
}
img {
  width: 134px;
  height: 24px;
}
.footer-center {
  display: flex;
  padding-top: 26px;
  @include respond-to(md) {
    justify-content: space-between;
  }
  @include respond-to(lg) {
    padding-top: 23px;
  }
  .footer-center__contacts {
    display: grid;
    width: 100%;
    justify-items: center;
    grid-gap: 11px;

    @include respond-to(md) {
      padding-left: 1px;
      padding: 0;
      justify-items: first baseline;
      grid-gap: 21px;
    }
    @include respond-to(lg) {
      width: auto;
      grid-gap: 18px;
    }
  }
  .footer-center__links {
    display: none;
    grid-template-columns: repeat(4, 1fr);

    @include respond-to(md) {
      display: grid;
      grid-gap: 52px;
      justify-content: space-between;
    }

    @include respond-to(lg) {
      grid-gap: 82px;
      padding-top: 2px;
      padding-bottom: 2px;
    }
    @include respond-to(xl) {
      grid-gap: 117px;
    }
    ul {
      @include respond-to(md) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }
}
.footer-bottom {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 30px 0;

  @include respond-to(md) {
    flex-direction: row;
    padding: 36px 0 16px 0;
    align-items: flex-start;
  }
  @include respond-to(lg) {
    padding: 35px 0 30px 0;
    align-items: flex-end;
  }
  @include respond-to(xl) {
    align-items: center;
  }
  ul {
    display: grid;
    margin-bottom: 16px;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    @include respond-to(lg) {
      grid-gap: 20px;
      margin: 0;
    }
  }
  a {
    color: #fff;
  }
  p {
    font-size: 12px;
    text-align: left;
    @include respond-to(xl) {
      margin-bottom: 3px;
    }
  }
}
</style>
