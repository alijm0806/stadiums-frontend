<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newStadiumParams: {},
      errors: [],
    };
  },
  created: function () { },
  methods: {
    createStadium: function () {
      axios
        .post("/stadiums", this.newStadiumParams)
        .then((response) => {
          console.log("stadiums create", response);
          this.$router.push("/stadiums");
        })
        .catch((error) => {
          console.log("stadiums create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="stadiums-new">
    <h1>New Stadium</h1>
    <form v-on:submit.prevent="createStadium()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>

      <p>Name: <input type="text" v-model="newStadiumParams.name" /></p>

      <p>City: <input type="text" v-model="newStadiumParams.city" /></p>

      <p>Address: <input type="text" v-model="newStadiumParams.address" /></p>

      <p>image: <input type="text" v-model="newStadiumParams.image" /></p>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>