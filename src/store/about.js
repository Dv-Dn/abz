export default {
  state: {
    about: {
      title1: "Let's get acquainted",
      title2: "I am cool frontend developer",
      text1:
        "When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.",
      text2:
        "Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."
    }
  },
  getters: {
    get_about(state) {
      return state.about;
    }
  }
};
