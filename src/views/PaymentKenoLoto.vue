<template lang="pug">
  .paymentkenoloto
    .container
      .row
        .col-md-12.col-sm-12
          h1.paymentkenoloto__title Uplata Keno

      .row
        .col-md-6.col-sm-12.border-right
          .paymentkenoloto__select
            h2.paymentkenoloto__select--title Izaberi koliko brojeva igraš u kombinaciji:
            b-form-select(v-model='selectedGame' :options='games' @change='disablePayment' class='paymentkenoloto__select--gamesbox')

        .col-md-6.col-sm-12
          .paymentkenoloto__select
            h2.paymentkenoloto__select--title Izaberi cijenu uplate:
            b-form-select(v-model='selectedPayment' :options='payments' class='paymentkenoloto__select--paymentsbox')
      .row
        .col-md-6.offset-md-3.col-sm-12

          .paymentkenoloto__form
            b-form-group(id='fieldset-1' description='' label="Svaki broj u kombinaciji razdvojiti zarezom" label-for='input-1' class='paymentkenoloto__form--group')
              b-form-input(type='text' v-model='enteredNumbers' id='input-1' placeholder='Svaki broj u kombinaciji razdvojiti zarezom' @keydown='checkNumeric($event)' :disabled='disableNumberField' required class='paymentkenoloto__form--group--input')
            b-button.paymentkenoloto__form--qp QP

          p.paymentkenoloto__count Unio si {{ countEnteredNumbers }} od {{ maxEnteredNumbers }} brojeva za kombinaciju

          .paymentkenoloto__buttons
            b-button.paymentkenoloto__buttons--delete(@click='deleteEnteredNumbers') Ponisti unesenu kombinaciju
            b-button.paymentkenoloto__buttons--pay Uplati
</template>

<script>
  export default {
    name: 'paymentkenoloto',
    data() {
      return {
        selectedGame: null,
        selectedPayment: null,
        games: [
          { value: null, text: 'Izaberite jednu od Keno igara', disabled: true},
          { value: '1', text: 'Keno 1', disabled: false },
          { value: '2', text: 'Keno 2', disabled: false },
          { value: '3', text: 'Keno 3', disabled: false },
          { value: '4', text: 'Keno 4', disabled: false },
          { value: '5', text: 'Keno 5', disabled: false },
          { value: '6', text: 'Keno 6', disabled: false },
          { value: '7', text: 'Keno 7', disabled: false },
          { value: '8', text: 'Keno 8', disabled: false },
          { value: '9', text: 'Keno 9', disabled: false },
          { value: '10', text: 'Keno 10', disabled: false },
        ],
        payments: [
          { value: null, text: 'Izaberite jednu od ponuđenih uplata', disabled: true},
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
        enteredNumbers: '',
        selectedNumbers: [],
      }
    },

    methods: {
      deleteEnteredNumbers() {
        this.enteredNumbers = '';
      },

      checkNumeric(evt) {

        let theEvent = evt || window.event,
            key = theEvent.keyCode || theEvent.which,
            keyCode = key,
            regex = /^[0-9.,]+$/;

        key = String.fromCharCode(key);

        if (key.length == 0) return;

        if (keyCode == 188 || keyCode == 8) {
          return;
        } else {

          if (!regex.test(key)) {
           theEvent.returnValue = false;

           if (theEvent.preventDefault) theEvent.preventDefault();
          }
        }
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

    mounted() {

    },

    computed: {

      disableNumberField() {
        let maxAllowedNumbersForEntering = (this.selectedGame != null) ? this.selectedGame : 0;
        return this.selectedNumbers.length == maxAllowedNumbersForEntering;

      },

      countEnteredNumbers() {

        //Split string and convert it to array
        let arrayFromString = this.enteredNumbers.split(',');

        //Filter array and remove false value
        this.selectedNumbers = arrayFromString.filter(item => item);

        return this.selectedNumbers.length;
      },

      maxEnteredNumbers() {
        return (this.selectedGame != null) ? this.selectedGame : 0;
      }
    }
  }
</script>
