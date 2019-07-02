<template lang="pug">
  section
    .results
      .container
        .row
          .col-md-12.col-sm-12
            .results__screen
              video(autoplay muted loop class='results__screen--video')
                source(src='../assets/images/results-bg/lotto-balls.mp4' type='video/mp4')

              .results__screen--aside
                .results__screen--aside--title
                .results__screen--aside--numbers
                  .results__screen--aside--numbers--item(v-for="item in numbers") {{ item }}

                time.results__screen--aside--date {{ currentDate }}

              .results__screen--info.first
                span.results__screen--info--red Sa 3 Pogotka
                span.results__screen--info--strong 17 Kombinacija

              .results__screen--info.second
                span.results__screen--info--red Sa 4 Pogotka
                span.results__screen--info--strong 6 Kombinacija

              .results__screen--logotime
                .results__screen--logotime--logo
                time.results__screen--logotime--time {{ currentTime }}

              .results__screen--display
                .results__screen--display--ball(:style="{backgroundImage: 'url(' + getBallImage() + ')'}")
    .container
      .row
        .col-md-6.col-sm-12
          .results__start.red
            | Naredno&nbsp;
            span.results__start--strong Keno&nbsp;
            | izvlačenje počinje u 14:35

        .col-md-6.col-sm-12
          .results__start.yellow
            | Naredno&nbsp;
            span.results__start--strong Super 5&nbsp;
            | izvlačenje počinje u 14:55

    .container
      .row
        .col-md-12.col-sm-12.mt-5.mb-5.text-center
          h2 Rezultati
          p (privremeni izvještaj)
      .row
        .col-md-6.col-sm-12
          h4.mb-4.font-weight-bold.text-uppercase Keno

          #accordion.results__dropdown
            .card.border-0(v-for='(item, index) in keno')
              #headingOne.card-header.p-0
                h5.mb-0
                  button.btn.btn-link.results__dropdown--btn.red(data-toggle='collapse' :data-target='"#collapse-red-" + index' aria-expanded='false' :aria-controls='"collapse-" + index')
                    | 24 Kolo - {{ index + 1 }} izvlačenje
                    span.results__dropdown--btn--icon

              .collapse(aria-labelledby='headingOne' data-parent='#accordion' :id='"collapse-red-" + index')
                .card-body.pl-0.pr-0
                  .results__dropdown--info
                    .results__dropdown--info--total Ukupna Uplata: {{ item.total }}
                    .results__dropdown--info--combinations Broj kombinacija: {{ item.number_combinations }}
                    time.results__dropdown--info--date {{ currentDate }}

                  .results__dropdown--numbers
                    h3.results__dropdown--numbers--title Izvučeni brojevi

                    .results__dropdown--numbers--container
                      .results__dropdown--numbers--container--item.red-circle(v-for='number in item.numbers') {{ number }}

                  .results__dropdown--table
                    table.table
                      thead
                        tr
                          th.border-top-0.results__dropdown--table--title(scope='col') Vrsta igre
                          th.border-top-0.results__dropdown--table--title(scope='col') Broj dobitka
                          th.border-top-0.results__dropdown--table--title(scope='col') Iznos dobitka
                          th.border-top-0.results__dropdown--table--title(scope='col') Ukupan iznos
                      tbody
                        tr
                          td(scope='row') IGRA 1
                          td 27
                          td 1-10 KM
                          td 100 KM
                        tr
                          td(scope='row') IGRA 2
                          td 21
                          td 10-50 KM
                          td 44 KM
                        tr
                          td(scope='row') IGRA 3
                          td 0
                          td 0
                          td 0

                        tr
                          td(scope='row') IGRA 4
                          td 2
                          td 20-150 KM
                          td 121 KM

                        tr
                          td(scope='row') IGRA 5
                          td 0
                          td 1-10 KM
                          td 0 KM

                        tr
                          td(scope='row') IGRA 6
                          td 27
                          td 5-200 KM
                          td 400 KM

                        tr
                          td(scope='row') IGRA 7
                          td 21
                          td 10-50 KM
                          td 440 KM

                        tr
                          td(scope='row') IGRA 8
                          td 0
                          td 0
                          td 0

                        tr
                          td(scope='row') IGRA 9
                          td 2
                          td 20-150 KM
                          td 500 KM

                        tr
                          td(scope='row') IGRA 10
                          td 0
                          td 1-10 KM
                          td 0 KM

        .col-md-6.col-sm-12
          h4.mb-4.font-weight-bold.text-uppercase Loto Super 5

          #accordionTwo.results__dropdown
            .card.border-0(v-for='(item, index) in lotosuper')
              #headingTwo.card-header.p-0
                h5.mb-0
                  button.btn.btn-link.results__dropdown--btn.yellow(data-toggle='collapse' :data-target='"#collapse-yellow-" + index' aria-expanded='false' :aria-controls='"collapse-yellow-" + index')
                    | 24 Kolo - {{ index + 1 }} izvlačenje
                    span.results__dropdown--btn--icon

              .collapse(aria-labelledby='headingTwo' data-parent='#accordionTwo' :id='"collapse-yellow-" + index')
                .card-body.pl-0.pr-0
                  .results__dropdown--info
                    .results__dropdown--info--total Ukupna Uplata: {{ item.total }}
                    .results__dropdown--info--combinations Broj kombinacija: {{ item.number_combinations }}
                    time.results__dropdown--info--date {{ currentDate }}

                  .results__dropdown--numbers
                    h3.results__dropdown--numbers--title Izvučeni brojevi

                    .results__dropdown--numbers--container
                      .results__dropdown--numbers--container--item.yellow-circle(v-for='number in item.numbers') {{ number }}

                  .results__dropdown--win
                    .results__dropdown--win--title 1 Dobitnik sa 5 Pogodaka
                    .results__dropdown--win--total {{ item.total }} KM
                    .results__dropdown--win--city {{ item.city }}

                  .results__dropdown--table
                    table.table

                      tbody
                        tr
                          td(scope='row') SA 5 POGODAKA
                          td 1
                          td IZNOS DOBITKA
                          td 100 000 KM

                        tr
                          td(scope='row') SA 4 POGODAKA
                          td 3
                          td IZNOS DOBITKA
                          td 100 KM

                        tr
                          td(scope='row') SA 3 POGODAKA
                          td 15
                          td IZNOS DOBITKA
                          td 10 KM

                        tr
                          td(scope='row') SA 2 POGODAKA
                          td 212
                          td IZNOS DOBITKA
                          td 0.5 KM

      .row
        .col-md-12.col-sm-12
          .results__screen--allresults#allResults Pogledajte sve rezultate
</template>

<script>

  export default {
    name: 'results',
    data() {
      return {
        date: new Date(),
        numbers: [28, 5, 16, 17, 24], //Placeholder data
        timer: null,
        currentTime: null,
        currentDate: null,
        ballNumber: null,
        //Placeholder data
        keno: [
          {
            total: '110.000',
            number_combinations: 2525,
            numbers: [3, 5, 9, 10, 13, 18, 22, 23, 33, 36, 39, 40, 42, 44, 48, 51, 62, 69, 70, 71]
          },
          {
            total: '150.000',
            number_combinations: 6225,
            numbers: [4, 6, 10, 11, 43, 19, 22, 25, 32, 35, 36, 47, 44, 48, 49, 50, 66, 69, 78, 79]
          },
          {
            total: '90.000',
            number_combinations: 3523,
            numbers: [2, 4, 8, 10, 15, 10, 22, 21, 37, 35, 34, 22, 43, 44, 49, 57, 64, 65, 71, 73]
          },
        ],

        lotosuper: [
          {
            total: '110.000',
            number_combinations: 2525,
            numbers: [23, 5, 9, 10, 13],
            city: 'Banja Luka'
          },
          {
            total: '150.000',
            number_combinations: 6225,
            numbers: [5, 7, 11, 12, 44],
            city: 'Bijeljina'
          },
          {
            total: '90.000',
            number_combinations: 3523,
            numbers: [3, 5, 9, 15, 18],
            city: 'Prijedor'
          },
        ]
      }
    },
    methods: {

      setDate() {
        this.currentDate = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}.`;
      },

      setTime() {
          this.date = new Date();
          this.currentTime = `${this.date.getHours()}:${this.paddingMinutes(this.date.getMinutes())}`;
      },

      paddingMinutes(minutes) {
        return (minutes < 10 ? '0' : '') + minutes;
      },

      //Placeholder function for generating random number for simulating lotto ball changes
      randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },

      //Placeholder function for getting lotto ball image path
      getBallImage() {
        this.ballNumber = this.randomNumber(1, 2);
        return require('../assets/images/results-balls/' + this.ballNumber + '.png');
      }
    },

    computed: {

    },

    created() {

    },

    mounted() {
      this.setDate();
      this.setTime();
      this.timer = setInterval(() => { this.setTime() }, 1000);
    },

    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>
