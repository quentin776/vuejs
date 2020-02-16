<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./views/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
