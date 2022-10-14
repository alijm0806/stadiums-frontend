<script>
import mapboxgl from 'mapbox-gl';
export default {
  data: function () {
    return {
    };
  },
  mounted: function () {
    this.makeMap();
  },
  methods: {
    makeMap: function () {
      const coordinates = document.getElementById('coordinates');
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-96.62, 42], // starting position [lng, lat]
        zoom: 4, // starting zoom
      });
      // Access user created posts for map locations
      map.on('load', () => {
        map.addSource('stadiums', {
          type: 'geojson',
          data: 'https://mighty-plateau-71758.herokuapp.com/stadiums'
          // data: 'http://localhost:3000/stadiums'
        });
        // Adds layer over the map display corresponding to each post
        map.addLayer({
          'id': 'stadiums',
          'type': 'symbol',
          'source': 'stadiums',
          'layout': {
            'icon-image': '{icon}',
            'icon-allow-overlap': true,
            'icon-size': 2,

          }
        });
        // Defines what happens when user clicks on a point from the 'trees-layer'(the points on the map)
        map.on('click', 'stadiums', (e) => {
          // Obtains key data from each post to be referenced in other actions
          const coordinates = e.features[0].geometry.coordinates.slice();
          const name = e.features[0].properties.name;
          const image = e.features[0].properties.image;
          const stadium_id = e.features[0].properties.id;
          // const user_id = e.features[0].properties.user_id;
          // Pop-up box will appear when clicked on
          new mapboxgl.Popup({ offset: 25 })
            .setLngLat(coordinates)
            .setHTML(`<a href="/stadiums/${stadium_id}"><img src="${image}" width="400" /><p><b>${name}</p></a>`)
            .addClassName('popup')
            .addTo(map);

        });
        // Cursor turns changes style when hovering over post location on map
        map.on('mouseenter', 'stadiums', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        // Cursor changes back when it is no longer on post location
        map.on('mouseleave', 'stadiums', () => {
          map.getCanvas().style.cursor = '';
        });
      });
    }
  },
};
</script>

<template>
  <div class="container">
    <div>
      <div id='map' class="mapDisplay"></div>
      <pre id="coordinates" class="coordinates"></pre>
    </div>
  </div>
</template>
  
<style>
.mapDisplay {
  min-width: 90vh;
  min-height: 90vh;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
