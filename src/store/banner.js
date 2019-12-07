export default {
  state: {
    banner: {
      title: "Test assignment for Frontend Developer position",
      // text:
      //   "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."
      text:
        "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ",
      text2:
        "Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"
    }
  },
  getters: {
    get_banner(state) {
      return state.banner;
    }
  }
};
