<template lang="pug">
  span
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
            | Naredna&nbsp;
            span.results__start--strong Keno&nbsp;
            | igra za 03:35
            div 3. Kolo - 9. Izvlačenje

        .col-md-6.col-sm-12
          .results__start.yellow
            | Naredno&nbsp;
            span.results__start--strong Super 5&nbsp;
            | izvlačenje počinje u 14:55
            div 3. Kolo - 9. Izvlačenje

    .container
      .row
        .col-md-12.col-sm-12.mt-5
          .row
            .col-md-8.col-sm-12
              .results__gameplaying
                .results__gameplaying--numbers
                    button.results__gameplaying--numbers--box(v-for='number in 60' :key='number' :value='number' :title='numberTooltip' :class='{disabled: selectedNumbersLenght}' @click='selectedNumber($event)' ref='gameplayingNumbers') {{ number }}

            .col-md-4.col-sm-12
              .results__wager
                .results__wager--text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper venenatis elementum. Maecenas a felis nulla. Curabitur nec molestie nunc. Nulla vel porttitor ante. Nullam cursus felis ante.
                .results__wager--bet Ulog:
                  span 1,00KM
                .results__wager--max Max mogući dobitak:
                  span 1000,00KM
                .results__wager--date Vrijeme i Datum:
                  time {{ currentWagerDate }}
                .results__wager--round 3. Kolo - 8. Izvlačenje

      .row
        .col-md-12.col-sm-12
          .row
            .col-md-8.col-sm-12
              .results__gameplaying

                .results__gameplaying--selectednumbers
                  h3.results__gameplaying--selectednumbers--title Odabrani brojevi
                  p.results__gameplaying--selectednumbers--empty(v-if='selectedNumbersArray.length == 0') Brojevi još nisu odabrani
                  .results__gameplaying--selectednumbers--box(v-for='number in selectedNumbersArray') {{ number }}

                .results__gameplaying--randomnumbers
                  h3.results__gameplaying--randomnumbers--title Nasumični brojevi
                  .results__gameplaying--randomnumbers--box(v-for='number in randomNumbers') {{ number }}

            .col-md-4.col-sm-12
              .results__wager
                .results__wager--controlls
                  .results__wager--controlls--title Uplata:

                  button.results__wager--controlls--trash(@click='deleteSelectedNumbers')
                    i.fas.fa-trash-alt

                  button.results__wager--controlls--plus
                    i.fas.fa-plus

                  .results__wager--controlls--display 1,00

                  button.results__wager--controlls--minus
                    i.fas.fa-minus

                .results__wager--play
                  button.results__wager--play--trash(@click='deleteRandomNumbers')
                    i.fas.fa-trash-alt

                  button.results__wager--play--btn Igraj

    .container
      .row
        .col-md-12.col-sm-12.mt-5.mb-5.text-center
          h2 Rezultati

      .row
        .col-md-6.col-sm-12
          h4.mb-4.font-weight-bold.text-uppercase.text-center Keno
          h5.mb-4.font-weight-bold.text-uppercase.text-center 3. Kolo - 8. izvlačenje

          .card.border-0(v-for='(item, index) in keno')

            .card-body.pl-0.pr-0
              .results__info
                .results__info--total Ukupna Uplata: {{ item.total }}
                .results__info--combinations Broj kombinacija: {{ item.number_combinations }}
                time.results__info--date {{ currentDate }}

              .results__numbers
                h3.results__numbers--title Izvučeni brojevi

                .results__numbers--container
                  .results__numbers--container--item.red-circle(v-for='number in item.numbers') {{ number }}

              .results__table
                table.table.table-striped
                  thead
                    tr
                      th.border-top-0.results__table--title(scope='col') Vrsta igre
                      th.border-top-0.results__table--title(scope='col') Broj dobitka
                      th.border-top-0.results__table--title(scope='col') Iznos dobitka
                      th.border-top-0.results__table--title(scope='col') Ukupan iznos
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
          h4.mb-4.font-weight-bold.text-uppercase.text-center Loto Super 5
          h5.mb-4.font-weight-bold.text-uppercase.text-center 3 Kolo - 8. izvlačenje

          .card.border-0(v-for='(item, index) in lotosuper')

              .card-body.pl-0.pr-0
                .results__info
                  .results__info--total Ukupna Uplata: {{ item.total }}
                  .results__info--combinations Broj kombinacija: {{ item.number_combinations }}
                  time.results__info--date {{ currentDate }}

                .results__numbers
                  h3.results__numbers--title Izvučeni brojevi

                  .results__numbers--container.border-bottom-0
                    .results__numbers--container--item.yellow-circle(v-for='number in item.numbers') {{ number }}

                .results__table
                  table.table.table-striped

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
          router-link(:to="{ name: 'allresults', params: {} }" class='results__screen--allresults' id='allResults') Pogledajte sve rezultate
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
        currentWagerDate: null,
        numberTooltip: 'Maksimalni odabir je 10 brojeva',
        ballNumber: null,
        selectedNumbers: [],
        randomNumbers: [],
        //Placeholder data
        keno: [
          {
            total: '110.000',
            number_combinations: 2525,
            numbers: [3, 5, 9, 10, 13, 18, 22, 23, 33, 36, 39, 40, 42, 44, 48, 51, 62, 69, 70, 71]
          },
          /*{
            total: '150.000',
            number_combinations: 6225,
            numbers: [4, 6, 10, 11, 43, 19, 22, 25, 32, 35, 36, 47, 44, 48, 49, 50, 66, 69, 78, 79]
          },
          {
            total: '90.000',
            number_combinations: 3523,
            numbers: [2, 4, 8, 10, 15, 10, 22, 21, 37, 35, 34, 22, 43, 44, 49, 57, 64, 65, 71, 73]
          },*/
        ],

        lotosuper: [
          {
            total: '110.000',
            number_combinations: 2525,
            numbers: [23, 5, 9, 10, 13],
            city: 'Banja Luka'
          },
          /*{
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
          },*/
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

      setWagerDate() {
        this.date = new Date();
        this.currentWagerDate = `${this.date.getHours()}:${this.paddingMinutes(this.date.getMinutes())}:${this.date.getSeconds() + 1} ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`;
      },

      paddingMinutes(minutes) {
        return (minutes < 10 ? '0' : '') + minutes;
      },

      generateRandomNumbers(min, max) {

        for (let i = 0; i < 10; i++) {
          let randNum = Math.floor(Math.random() * (max - min + 1) + min);

          this.randomNumbers.push(randNum);
        }
      },

      selectedNumber(event) {
        event.target.disabled = true;
        event.target.classList.add('disabled');

        let numberValue = event.target.value;
        this.selectedNumbers.push(numberValue);
      },

      deleteSelectedNumbers() {
        this.selectedNumbers = [];

        this.$refs.gameplayingNumbers.forEach(item => {
          item.disabled = false;
        })
      },

      deleteRandomNumbers() {
        this.randomNumbers = [];
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

      selectedNumbersArray() {
        return this.selectedNumbers;
      },

      selectedNumbersLenght() {
        if (this.selectedNumbers.length > 9) {
          return true;
        }
      }
    },

    created() {

    },

    mounted() {
      this.setDate();
      this.setTime();
      this.generateRandomNumbers(1, 60);

      this.timer = setInterval(() => {
        this.setTime();
        this.setWagerDate();
      }, 1000);
    },

    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>
