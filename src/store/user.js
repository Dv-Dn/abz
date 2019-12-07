import axios from "axios";

export default {
  state: {
    headerUser: {},
    headerUserIsLoaded: false
  },
  mutations: {
    SET_HEADER_USER(state, payload) {
      state.headerUser = payload.user;
    },
    HEADER_USER_IS_LOADED(state, payload) {
      state.headerUserIsLoaded = payload;
    },
    SIGN_OUT(state) {
      state.headerUser = {};
    }
  },
  actions: {
    async getHeaderUser({ commit }) {
      commit("HEADER_USER_IS_LOADED", true);
      try {
        const response = await axios.get(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users/1"
        );
        commit("SET_HEADER_USER", response.data);
        // console.log(response.data.user);
        commit("HEADER_USER_IS_LOADED", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    }
  },
  getters: {
    get_header_user(state) {
      return state.headerUser;
    },
    user_is_loaded(state) {
      return state.headerUserIsLoaded;
    }
  }
};
