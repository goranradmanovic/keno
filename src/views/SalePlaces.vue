<template lang="pug">
  .container
    .row
      .col-md-10.col-sm-12.offset-md-1
        .saleplaces
          h1.saleplaces__title Prodajna Mjesta
          gmap-map.mt-5.mb-5.saleplaces__map(:center='center' :zoom='9')
            gmap-marker(v-for='(marker, index) in markers' :key='index' :position='marker.position')

          b-table(striped hover :items='places')
</template>

<script>
  export default {
    name: 'saleplaces',
    data() {
      return {
        center: { lat: 44.772182, lng: 17.191000 },
        markers: [
          {
            position: {
              lat: 44.772182,
              lng: 17.191000,
            },
          },
          {
            position: {
              lat: 45.147991,
              lng: 17.252680,
            },
          },
          {
            position: {
              lat: 44.731640,
              lng: 18.083700,
            },
          },
          {
            position: {
              lat: 44.757401,
              lng: 19.217779,
            },
          },
          {
            position: {
              lat: 42.709400,
              lng: 18.345301,
            },
          },
          {
            position: {
              lat: 44.978748,
              lng: 16.710060,
            },
          },
        ],
        places: [
          { br: 1, grad: 'Banja Luka', adresa: 'Maldena Stojanovica br. 1' },
          { br: 2, grad: 'Prijedor', adresa: 'Maldena Stojanovica br. 1' },
          { br: 3, grad: 'Doboja', adresa: 'Maldena Stojanovica br. 1' },
          { br: 4, grad: 'Gradiska', adresa: 'Vidovdanska br. 3' },
          { br: 5, grad: 'Trebinje', adresa: 'Vidovdanska br. 3' },
        ],
      }
    },

    methods: {
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    },

    mounted() {
      this.geolocate();
    }
  }
</script>
