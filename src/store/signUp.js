import axios from "axios";

export default {
  state: {
    options: {},
    optionsIsLoading: false,
    validate: false,
    token: "",
    alert: {
      title: "Congratulations",
      text: "You have successfully passed the registration",
      isOpen: false
    },
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
    },
    SET_ALERT_STATUS(state, payload) {
      state.alert.isOpen = payload;
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

    postUser({ commit, getters, dispatch, state }, formData) {
      axios({
        method: "post",
        url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        data: formData,
        headers: {
          Token: getters.get_token
        }
      })
        .then(function(response) {
          if (response.data.success) {
            dispatch("getUsers");
            commit("SET_ANSWER_STATUS", response.status);
          } else {
            state.alert.title = "Condolences";
            state.alert.text = "Whoops something went wrong :(";
          }
          commit("SET_ALERT_STATUS", true);
          return response.json();
        })
        .catch(function(error) {
          commit("SET_ERROR", error.message);
        });
      //   fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      //     method: "POST",
      //     body: formData,
      //     headers: {
      //       Token: getters.get_token
      //     }
      //   })
      //     .then(function(response) {
      // 			commit("SET_ANSWER_STATUS", response.status);
      // 			// *eslint-disable no-console*
      // 			console.log(response)
      //       return response.json();
      //     })
      //     .then(function(data) {
      //       if (data.success) {
      //         dispatch("getUsers");
      //       } else {
      //         // proccess server errors
      //       }
      //     })
      //     .catch(function(error) {
      //       commit("SET_ERROR", error.message);
      //     });
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
    get_alert_info(state) {
      return state.alert;
    }
  }
};
