<template lang="pug">
  .container
    .row
      .col-md-12.col-sm-12
        .pullout
          table.table.table-bordered.pullout__table
            colgroup
              col#first-col
              col#second-col
              col#third-col

            tbody
              tr
                td Ponedeljak
                td 07:00
                td
                  img(:src='getBallImage("keno-logo-white")' alt='' class='pullout__table--image')

              tr.active
                td Utorak
                td 07:35
                td Muzika

              tr
                td Srijeda
                td 07:45
                td
                  img(:src='getBallImage("lotto-super-logo-white")' alt='' class='pullout__table--image')

              tr
                td Četvrtak
                td 08:20
                td Auto oglasi

              tr
                td Petak
                td 08:30
                td
                  img(:src='getBallImage("keno-logo-white")' alt='' class='pullout__table--image')

              tr
                td Subota
                td 08:45
                td Sport

              tr
                td Nedelja
                td 09:00
                td
                  img(:src='getBallImage("lotto-super-logo-white")' alt='' class='pullout__table--image')
</template>

<script>

  export default {
    name: 'pulloutschedule',

    data() {
      return {

      }
    },

    methods: {
      //Placeholder function for getting lotto ball image path
      getBallImage(imageName) {
        return require('../assets/images/pullout-img/' + imageName + '.png');
      }
    }
  }

</script>
