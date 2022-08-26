<script>
import axios from "axios";
export default {
  data: function () {
    return {
      stadium: {},
    };
  },
  created: function () {
    axios.get("/stadiums/" + this.$route.params.id).then((response) => {
      console.log("stadiums show", response);
      this.stadium = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="stadiums-show">
    <div id="info">
      <h2><b>Name: </b>{{ stadium.name }}</h2>
      <p><b>City: </b>{{ stadium.city }}</p>
      <p><b>Address: </b>{{ stadium.address }}</p>
    </div>
    <br>
    <br>
    <br>
    <div id="image"><img v-bind:src="stadium.image" v-bind:alt="stadium.name" /></div>
    <br>
    <router-link to="/stadiums">Back to all stadiums</router-link>
  </div>
</template>