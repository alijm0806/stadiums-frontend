<!-- <script>
import axios from "axios";
import { assertExpressionStatement } from '@babel/types';

export default {
  data: function () {
    return {
      message1: "HOST STADIUM",
      message2: "2026 FIFA WORLD CUP",
      stadiums: [],
      newStadium: {},
      currentStadium: {}
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
      console.log("show stadiums..")
      axios.get("http://localhost:3000/stadiums/" + stadium.id).then(response => {
        console.log(response.data)
        this.currentStadium = stadium
        document.querySelector("#stadium-details").showModal();
      })
    },
    createStadium: function () {
      console.log("creating stadiums..");
      console.log(this.newStadium);
      axios.post("http://localhost:3000/stadiums", this.newStadium).then(response => {
        console.log(response.data)
        this.stadiums.push(this.newStadium)

      })
    },
    updateStadium: function (currentStadium) {
      console.log("updating stadiums..");
      console.log(this.currentStadium);
      axios.patch("http://localhost:3000/stadiums/" + this.currentStadium.id, this.currentStadium).then(response => {
        console.log(this.currentStadium)
        this.currentStadium = {}
      })

    },
    deleteStadium: function (currentStadium) {
      console.log("deleting stadiums..");
      console.log(this.currentStadium);
      axios.delete("http://localhost:3000/stadiums/" + this.currentStadium.id).then(response => {
        console.log(response.data)
        var index = this.stadiums.indexOf(currentStadium);
        console.log(index);
        // delete that element from the array
        this.stadiums.splice(index, 1);
      })

    }
  }
}
</script>

<template>

  <div class="home">
    <div id="title">
      <h1><b>{{ message1 }}</b></h1>
      <h1><b>{{ message2 }}</b></h1>
    </div>
    <hr>
    <hr>


    <div><b>Name: </b><input type="text" v-model="newStadium.name"></div>
    <div><b>City: </b><input type="text" v-model="newStadium.city"></div>
    <div><b>address: </b><input type="text" v-model="newStadium.address"></div>
    <div><b>image: </b><input type="text" v-model="newStadium.image"></div>
    <button id="create-b" v-on:click="createStadium()">New Stadium</button>




    <hr>
    <hr>

    <div v-for="stadium in stadiums">
      <div id="info">
        <ul>
          <p><b>Name: </b>{{ stadium.name }}</p>
          <p><b>City: </b>{{ stadium.city }}</p>
          <p><b>Address: </b>{{ stadium.address }}</p>
        </ul>
      </div>
      <p><img v-bind:src="stadium.image" width="550" height="350"></p>

      <button id="show-b" v-on:click="showStadium(stadium)">More Info</button>
      <hr>
      <hr>
    </div>

    <dialog id="stadium-details">
      <form method="dialog">
        <h1>Stadium info</h1>
        <p>Name: {{ currentStadium.name }}</p>
        <p>City: {{ currentStadium.city }}</p>
        <p>Address: {{ currentStadium.address }}</p>
        <p>Image: {{ currentStadium.image }}</p>
        <hr>
        <hr>
        <div>Name: <input type="text" v-model="currentStadium.name"></div>
        <div>City: <input type="text" v-model="currentStadium.city"></div>
        <div>address: <input type="text" v-model="currentStadium.address"></div>
        <div>image: <input type="text" v-model="currentStadium.image"></div>
        <button id="update-b" v-on:click="updateStadium(currentStadium)">Update Stadium</button>
        <button id="delete-b" v-on:click="deleteStadium(currentStadium)">Delete Stadium</button>
        <button>Close</button>
      </form>
    </dialog>


  </div>
</template>

<style>
</style> -->


