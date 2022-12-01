<script>
import axios from "axios";

export default {
  data: function () {
    return {

    };
  },
  methods: {},
};
</script>

<template>
  <div class="show-stadiums">
    <div class="container">
      <div class="home-video mt-5" style="max-width: 100%; border: none">
        <section>
          <iframe width="600" height="600" src="https://www.youtube.com/embed/uKTEl4uL1h0?autoplay=1&mute=1"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; mute=1"
            allowfullscreen></iframe>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
.show-stadiums {
  background: rgb(0, 0, 0)url("../assets/WCLogo.webp") no-repeat center center fixed;
  background-size: cover;
  background-position: -300px;
  width: 100%;
  height: calc(100vh - 150px);
}

.home-video {
  position: fixed;
  top: 28%;
  right: 25%;
}

@media only screen and (max-width: 600px) {
  .show-stadiums {
    background: rgb(0, 0, 0)url("../assets/WCLogo.webp") no-repeat center center fixed;
    background-size: cover;
    background-position: -300px;
    width: 100%;
  }

  .home-video {
    position: fixed;
    top: 28%;
    right: 0;
  }
}
</style>

