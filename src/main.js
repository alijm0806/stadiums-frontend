import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'video.js/dist/video-js.css'


import Embed from 'v-video-embed'
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mighty-plateau-71758.herokuapp.com/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
createApp(App).use(router).mount('#app')
