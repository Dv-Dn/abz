import axios from "axios";

export default {
  state: {
    options: {},
    optionsIsLoading: false,
    validate: false,
    token: "",
    answerStatus: "",
    // formData: {
    //   position_id: 0,
    //   name: "",
    //   email: "",
    //   phone: "",
    //   photo: {}
    // },
    signup: {
      title1: "Register to get a work",
      title2:
        "Attention! After successful registration and alert, update the list of users in the block from the top"
    }
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload.token;
    },
    SET_OPTIONS(state, payload) {
      state.options = payload;
    },
    SET_OPTIONS_LOADING(state, payload) {
      state.optionsIsLoaded = payload;
    },
    SET_ANSWER_STATUS(state, payload) {
      state.answerStatus = payload;
    }
  },
  actions: {
    async getOptions({ commit }) {
      commit("SET_OPTIONS_LOADING", true);
      try {
        const response = await axios.get(
          "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        );
        commit("SET_OPTIONS", response.data.positions);
        commit("SET_OPTIONS_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async getToken({ commit }) {
      commit("CLEAR_ERROR");
      try {
        const response = await axios.get(
          "https://frontend-test-assignment-api.abz.agency/api/v1/token"
        );
        commit("SET_TOKEN", response.data);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    postUser({ commit, getters, dispatch }, formData) {
      // axios({
      //   method: "post",
      //   url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      //   data: formData,
      //   headers: {
      //     Token: getters.get_token
      //   }
      // })
      //   .then(function(response) {
      //     commit("SET_ANSWER_STATUS", response.status);
      //     return response.json();
      //   })
      //   .then(function(data) {
      //     if (data.success) {
      //       dispatch("getUsers");
      //     } else {
      //       // proccess server errors
      //     }
      //   })
      //   .catch(function(error) {
      //     commit("SET_ERROR", error.message);
      //   });
      fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        method: "POST",
        body: formData,
        headers: {
          Token: getters.get_token
        }
      })
        .then(function(response) {
          commit("SET_ANSWER_STATUS", response.status);
          return response.json();
        })
        .then(function(data) {
          if (data.success) {
            dispatch("getUsers");
          } else {
            // proccess server errors
          }
        })
        .catch(function(error) {
          commit("SET_ERROR", error.message);
        });
    }
  },
  getters: {
    get_token(state) {
      return state.token;
    },
    get_options(state) {
      return state.options;
    },
    options_is_loading(state) {
      return state.optionsIsLoading;
    },
    get_signup(state) {
      return state.signup;
    },
    get_answer_status(state) {
      return state.answerStatus;
    }
  }
};
