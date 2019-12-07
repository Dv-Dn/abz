<template>
  <Layout>
    <Banner />
    <About />
    <Relationships />
    <Requirements />
    <Users />
    <SignUp />
    <Footer />
  </Layout>
</template>

<script>
import Layout from "./layouts/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import Relationships from "./components//Relationships";
import Requirements from "./components/Requirements";
import Users from "./components/Users";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Layout,
    Banner,
    About,
    Relationships,
    Requirements,
    Users,
    SignUp,
    Footer
  },
  mounted: function() {},
  methods: {}
};
</script>

<style lang="scss">
@import "./styles/style.scss";
@import "./styles/variables.scss";
</style>
