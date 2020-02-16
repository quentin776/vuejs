<template>
  <div>
    <br />
    <h1>{{ filmDetails.Title }}</h1>
    <br />
    <div>
      <b-card
        :img-src="filmDetails.Poster"
        img-alt="Card image"
        img-right
        img-height="500px"
      >
        <b-card-text>
          <p><strong>Nom du film:</strong> {{ filmName.Released }}</p>
          <p><strong>Nom des Acteurs:</strong> {{ filmDetails.Actors.Name }}</p>
          <p><strong>Durée du fim:</strong> {{ filmDetails.Runtime }}</p>
          <p><strong>Date de sortie:</strong> {{ filmDetails.Released }}</p>
          <p><strong>Date de sortie:</strong> {{ filmDetails.Released }}</p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "DetailsPage",
  data() {
    return {
      filmId: this.$route.params.id,
      filmDetails: null
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.filmId + "&apikey=904eed5c")
      .then(response => (this.filmDetails = response.data));
  }
};
</script>

<style>
</style>
