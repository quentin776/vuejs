<template>
  <div>
    <br />
    <h1>Liste des films Batman</h1>
    <br />
    <div v-for="film in films" :key="film.imdbID">
      <filmcarte :filmContent="film"> </filmcarte>
      <br />
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
import filmcarte from "../components/filmcarte.vue";

export default {
  name: "HomePage",
  components: {
    filmcarte
  },
  data() {
    return {
      films: null
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=batman&apikey=904eed5c")
      .then(response => (this.films = response.data.Search));
  }
};
</script>
