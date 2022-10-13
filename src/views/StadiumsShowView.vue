<script>
import axios from "axios";

export default {
  data: function () {
    return {
      stadium: {},

    };

  },
  created: function () {
    axios.get("/stadiums/" + this.$route.params.id + ".json").then((response) => {
      console.log("stadiums show", response);
      this.stadium = response.data;
      console.log("stadiums show", this.stadium.video_url)
    });
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="card mb-3 mt-5 ms-5" style="max-width: 90%;">
      <div class="row g-0">
        <div class="col-md-6">
          <img class="img-responsive" v-bind:src="stadium.image" v-bind:alt="stadium.name" type="video/mp4" />
        </div>
        <div class="col-md-6">
          <div class="card-body mt-8 pt-6 px-5">
            <h5 class="card-title"></h5>
            <div id="info">
              <h3><b>Name: </b>{{ stadium.name }}</h3>
              <p><b>City: </b>{{ stadium.city }}</p>
              <p><b>Address: </b>{{ stadium.address }}</p>
              <p><b>Coordinates: </b>{{ stadium.coordinates }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card d-flex" style="max-width: 98%;">
      <section>
        <iframe :src="stadium.video_url" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </section>
    </div>
    <div>
      <router-link to="/stadiums">Back to all stadiums</router-link>
    </div>
  </div>
</template>