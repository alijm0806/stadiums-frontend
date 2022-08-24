<script>
import axios from "axios";
import { assertExpressionStatement } from '@babel/types';

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      name: "ALI",
      stadiums: [],
      stadium: {},
      newStadium: {}
    };
  },
  created: function () { this.indexStadiums() },
  methods: {
    indexStadiums: function () {
      console.log("all stadiums..")
      axios.get("http://localhost:3000/stadiums.json").then(response => {
        console.log(response.data)
        this.stadiums = response.data
      })
    },
    showStadium: function (stadium) {
      console.log("all stadiums..")
      axios.get("http://localhost:3000/stadiums/4").then(response => {
        console.log(response.data)
        this.stadium = response.data
      })
    },
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ name }}</h1>
    <div v-for="stadium in stadiums">
      <p>{{ stadium.name }}</p>
      <p>{{ stadium.city }}</p>
      <br>
      <button v-on:click="showStadium(stadium)">More Info</button>
    </div>
    <!-- <button v-on:click="indexStadiums()"></button> -->




  </div>
</template>

<style>
</style>