import axios from "axios";

export default {
  state: {
    current_page: 2,
    usersCount: 6,
    users: {},
    totalPages: false,
    usersStatus: "none"
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_USERS_COUNT(state, payload) {
      state.usersCount = payload;
    },
    SET_USERS_STATUS(state, payload) {
      state.usersStatus = payload;
    },
    LOAD_MORE_USERS(state, payload) {
      state.current_page += 1;
      if (state.current_page == payload.total_pages + 1) {
        state.totalPages = true;
      }
      state.users = state.users.concat(payload.users);
    }
  },
  actions: {
    // Получаем начальный список пользователей

    async getUsers({ commit, state }) {
      commit("SET_LOADING", true);
      try {
        let usersCount = state.usersCount;
        const response = await axios.get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${usersCount}`
        );
        commit("SET_USERS", response.data.users);
        commit("SET_USERS_STATUS", response.statusText);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },

    // Загрузить еще 6 пользователей
    async loadMoreUsers({ commit, getters, state }) {
      commit("SET_LOADING", true);
      try {
        let usersCount = state.usersCount;
        const response = await axios.get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${getters.current_page}&count=${usersCount}`
        );
        commit("LOAD_MORE_USERS", response.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    current_page(state) {
      return state.current_page;
    },
    end_of_users(state) {
      return state.totalPages;
    },
    users_status(state) {
      return state.usersStatus;
    }
  }
};
