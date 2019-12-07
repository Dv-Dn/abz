import Vue from "vue";
import Vuex from "vuex";
import shared from "./shared";
import users from "./users";
import user from "./user";
import signUp from "./signUp";
import about from "./about";
import nav from "./nav";
import banner from "./banner";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: { shared, users, user, signUp, about, nav, banner },
  state: {
    menuIsOpen: false
  }
});
