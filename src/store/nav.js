export default {
  state: {
    navLinks: {
      "About me": "about",
      Relationships: "relationships",
      Requirements: "requirements",
      Users: "users",
      "Sign Up": "signUp"
    }
  },
  getters: {
    get_nav_links(state) {
      return state.navLinks;
    }
  }
};
