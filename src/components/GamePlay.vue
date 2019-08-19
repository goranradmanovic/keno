<template lang="pug">
  .container.shadow
    .row
      .col-md-12.col-sm-12
        GameStart(v-bind:isKeno='isKeno')

    .row
      .col-md-6.col-sm-12
        //- KENO LOTO
        .results__gamepaying--keno(v-if='isKeno')
          p.results__gamepaying--keno--text KENO je brza, zabavna i laka igra na sreću, popularna u čitavom svijetu. Odigraj kombinaciju 1 do 10 srećnih brojeva, a izvlačenje 20 do 60 loptica gledaj uživo na KENO TV.
          h2.results__gamepaying--keno--title Ako pogodiš svih 10, možeš osvojiti do čak 60.000KM!

          .results__gamepaying--keno--select
            .row
              .col-md-6.col-sm-12
                .results__gamepaying--keno--select--box
                  p.results__gamepaying--keno--select--box--title Izaberi koliko brojeva igraš
                  b-form-select(v-model='selectedGame' :options='games' @change='disablePayment' class='results__gamepaying--keno--select--box--gamesbox')

              .col-md-6.col-sm-12
                .results__gamepaying--keno--select--box
                  p.results__gamepaying--keno--select--box--title Izaberi visinu uplate
                  b-form-select(v-model='selectedPayment' :options='payments' class='results__gamepaying--keno--select--box--paymentsbox' :disabled='!selectedGame')

          .results__gamepaying--keno--makings
            .row
              .col-md-12.col-sm-12
                p.results__gamepaying--keno--makings--title Maksimalan mogući dobitak

            .row
              .col-md-6.col-sm-12
                .results__gamepaying--keno--makings--box
                  ul.results__gamepaying--keno--makings--box--list
                    li.results__gamepaying--keno--makings--box--list--item
                      span 10/10
                      span 30.000,00 KM
                    li.results__gamepaying--keno--makings--box--list--item
                      span 9/10
                      span 1.000,00 KM
                    li.results__gamepaying--keno--makings--box--list--item
                      span 8/10
                      span 75,00KM

              .col-md-6.col-sm-12
                .results__gamepaying--keno--makings--box

                  ul.results__gamepaying--keno--makings--box--list
                    li.results__gamepaying--keno--makings--box--list--item
                      span 7/10
                      span 10,00 KM
                    li.results__gamepaying--keno--makings--box--list--item
                      span 6/10
                      span 3,50 KM
                    li.results__gamepaying--keno--makings--box--list--item
                      span 6/10
                      span 1,00 KM

        //- SUPER 5 LOTO
        .results__gamepaying-super5(v-else)
          p.results__gamepaying--super5--text LOTO SUPER 5 je moderna i brza verzija najpoznatije klasične lutrijske igre na sreću Loto. Odigraj 5 srećnih brojeva od 30 i gledaj izvlačenje uživo na KENO TV.
          .results__gamepaying--super5--info
            .results__gamepaying--super5--info--img
            p.results__gamepaying--super5--info--text Ako ostvariš superpeticu odnosno pogodiš svih&nbsp;
              strong 5&nbsp;
              | izvučenih brojeva, garantovani minimalni dobitak koji ostvajaš iznosi čak&nbsp;
              strong 5000 KM!
              br
              span Fiksna uplata za igru LOTO SUPERPET je 0,50KM.

      .col-md-6.col-sm-12
        //- KENO LOTO
        .results__gameplaying--keno(v-if='isKeno')
          p.results__gameplaying--keno--title Izaberi brojeve
          .results__gameplaying--keno--numbers
              button.results__gameplaying--keno--numbers--box(v-for='number in 60' :key='number' :value='number' :title='numberKenoTooltip' :class='{disabled: kenoSelectedNumbersLenght}' @click='selectedNumber($event)' ref='gameplayingNumbers') {{ number }}

          .results__gameplaying--keno--selectednumbers
            .results__gameplaying--keno--selectednumbers--container
              h3.results__gameplaying--keno--selectednumbers--container--title Odabrani brojevi:
              button.results__gameplaying--keno--selectednumbers--container--qp(@click='QP(1, 60)') Qp
              button.results__gameplaying--keno--selectednumbers--container--trash(@click='deleteSelectedNumbers') Poništi

            .results__gameplaying--keno--selectednumbers--container
              .results__gameplaying--keno--selectednumbers--container--box(v-for='number in selectedNumbersArray') {{ number }}

        //- SUPER 5 LOTO
        .results__gameplaying--super5(v-else)
          p.results__gameplaying--super5--title Izaberi brojeve
          .results__gameplaying--super5--numbers
              button.results__gameplaying--super5--numbers--box(v-for='number in 30' :key='number' :value='number' :title='numberSuper5Tooltip' :class='{disabled: superSelectedNumbersLenght}' @click='selectedNumber($event)' ref='gameplayingNumbers') {{ number }}

          .results__gameplaying--super5--selectednumbers
            .results__gameplaying--super5--selectednumbers--container
              h3.results__gameplaying--super5--selectednumbers--container--title Odabrani brojevi:
              button.results__gameplaying--super5--selectednumbers--container--qp(@click='QP(1, 30)') Qp
              button.results__gameplaying--super5--selectednumbers--container--trash(@click='deleteSelectedNumbers') Poništi

            .results__gameplaying--super5--selectednumbers--container
              .results__gameplaying--super5--selectednumbers--container--box(v-for='number in selectedNumbersArray') {{ number }}
    .row
      .col-md-12.col-sm-12
          button.results__gameplaying--btn Igraj
</template>

<script>
  import GameStart from '@/components/GameStart.vue';

  export default {
    name: 'gameplay',
    components: {
      GameStart
    },
    data() {
      return {
        isKeno: true,
        selectedNumbers: [],
        numberKenoTooltip: 'Maksimalni odabir je 10 brojeva',
        numberSuper5Tooltip: 'Maksimalni odabir je 5 brojeva',
        selectedGame: null,
        selectedPayment: null,
        games: [
          //{ value: null, text: 'Izaberite jednu od Keno igara', disabled: true},
          { value: null, text: '10 Brojeva', disabled: true},
          { value: '1', text: '1 Broja', disabled: false },
          { value: '2', text: '2 Broja', disabled: false },
          { value: '3', text: '3 Broja', disabled: false },
          { value: '4', text: '4 Broja', disabled: false },
          { value: '5', text: '5 Brojeva', disabled: false },
          { value: '6', text: '6 Brojeva', disabled: false },
          { value: '7', text: '7 Brojeva', disabled: false },
          { value: '8', text: '8 Brojeva', disabled: false },
          { value: '9', text: '9 Brojeva', disabled: false },
          { value: '10', text: '10 Brojeva', disabled: false },
        ],
        payments: [
          //{ value: null, text: 'Izaberite jednu od ponuđenih uplata', disabled: true},
          { value: null, text: '6.00 KM', disabled: true},
          { value: '0.50', text: '0.50 KM', disabled: false },
          { value: '1.00', text: '1.00 KM', disabled: false },
          { value: '1.50', text: '1.50 KM', disabled: false },
          { value: '2.00', text: '2.00 KM', disabled: false },
          { value: '2.50', text: '2.50 KM', disabled: false },
          { value: '3.00', text: '3.00 KM', disabled: false },
          { value: '3.50', text: '3.50 KM', disabled: false },
          { value: '4.00', text: '4.00 KM', disabled: false },
          { value: '4.50', text: '4.50 KM', disabled: false },
          { value: '5.00', text: '5.00 KM', disabled: false },
          { value: '5.50', text: '5.50 KM', disabled: false },
          { value: '6.00', text: '6.00 KM', disabled: false },
          { value: '6.50', text: '6.50 KM', disabled: false },
          { value: '7.00', text: '7.00 KM', disabled: false },
          { value: '7.50', text: '7.50 KM', disabled: false },
          { value: '8.00', text: '8.00 KM', disabled: false },
          { value: '8.50', text: '8.50 KM', disabled: false },
          { value: '9.00', text: '9.00 KM', disabled: false },
          { value: '9.50', text: '9.50 KM', disabled: false },
          { value: '10.00', text: '10.00 KM', disabled: false },
        ],
      }
    },

    methods: {
      selectedNumber(event) {
        event.target.disabled = true;
        event.target.classList.add('disabled');

        let numberValue = event.target.value;
        this.selectedNumbers.push(numberValue);
      },

      randomSelectedNumberHighlight() {
        for (let i = 0; i < this.$refs.gameplayingNumbers.length; i++) {

          for (let j = 0; j < this.selectedNumbers.length; j++) {
            if (this.$refs.gameplayingNumbers[i].value == this.selectedNumbers[j]) {
              this.$refs.gameplayingNumbers[i].disabled = true;
              this.$refs.gameplayingNumbers[i].classList.add('disabled');
            }
          }
        }
      },

      QP(min, max) {

        if (this.isKeno) {

          let maxAllowedSelectNumbers = (this.selectedGame) ? this.selectedGame : 10;
          this.selectedNumbers = [];

          for (let i = 0; i < maxAllowedSelectNumbers; i++) {
            let randNum = Math.floor(Math.random() * (max - min + 1) + min);

            this.selectedNumbers.push(randNum);
          }

          this.randomSelectedNumberHighlight();

        } else {
          this.selectedNumbers = [];
          for (let i = 0; i < 5; i++) {
            let randNum = Math.floor(Math.random() * (max - min + 1) + min);
            this.selectedNumbers.push(randNum);
          }

          this.randomSelectedNumberHighlight();
        }
      },

      deleteSelectedNumbers() {
        this.selectedNumbers = [];

        this.$refs.gameplayingNumbers.forEach(item => {
          item.disabled = false;
        })
      },

      disablePayment() {
        //If user select Keno9 or Keno10, then set disabled array elements from 11 el. or from 5 el
        let i = (this.selectedGame == 9) ? 11 : (this.selectedGame == 10) ? 5 : null;

        if (i != null) {
          for (; i < this.payments.length; i++) {
            this.payments[i].disabled = true;
          }

          return;
        }

        //If user is selected form Keno1 - Keno8 (set all payments as not disabled)
        for (let i = 1; i < this.payments.length; i++) {
          this.payments[i].disabled = false;
        }
      }
    },

    computed: {

      selectedNumbersArray() {
        return this.selectedNumbers;
      },

      kenoSelectedNumbersLenght() {
        let maxAllowedSelectNumbers = (this.selectedGame) ? this.selectedGame - 1 : 9;

        if (this.selectedNumbers.length > maxAllowedSelectNumbers) {
          return true;
        }
      },

      superSelectedNumbersLenght() {
        if (this.selectedNumbers.length > 4) {
          return true;
        }
      }
    },
  }
</script>
