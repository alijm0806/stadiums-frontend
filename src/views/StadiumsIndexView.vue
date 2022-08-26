<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message1: "HOST STADIUM",
      message2: "2026 FIFA WORLD CUP",
      stadiums: [],
    };
  },
  created: function () {
    this.indexstadiums();
  },
  methods: {
    indexstadiums: function () {
      axios.get("/stadiums").then((response) => {
        console.log("stadiums index", response);
        this.stadiums = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="stadiums-index">
    <h1><b>{{ message1 }}</b></h1>
    <h1><b>{{ message2 }}</b></h1>
    <hr>
    <hr>
    <div v-for="stadium in stadiums" v-bind:key="stadium.id">


      <h2>
        {{ stadium.name }}
      </h2>
      <p> <a v-bind:href="`/stadiums/${stadium.id}`">More Detail</a> </p>
      <hr>
      <hr>
    </div>
  </div>
</template>