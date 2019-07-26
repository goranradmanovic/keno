<template lang="pug">
  section.paymentlotosuper
    .container
      .row
        .col-md-6.offset-md-3.col-sm-12
          h1.paymentlotosuper__title Uplata Loto Super Pet

          .paymentlotosuper__form
            b-form-group(id='fieldset-1' description='' label="Svaki broj u kombinaciji razdvojiti zarezom" label-for='input-1' class='paymentlotosuper__form--group')
              b-form-input(type='text' v-model='enteredNumbers' id='input-1' placeholder='Svaki broj u kombinaciji razdvojiti zarezom' @keydown='checkNumeric($event)' :disabled='disableNumberField' required class='paymentlotosuper__form--group--input')
            b-button.paymentlotosuper__form--qp QP

          p.paymentlotosuper__count Unio si {{ countEnteredNumbers }} od 5 brojeva za kombinaciju

          .paymentlotosuper__buttons
            b-button.paymentlotosuper__buttons--delete(@click='deleteEnteredNumbers') Ponisti unesenu kombinaciju
            b-button.paymentlotosuper__buttons--pay Uplati
</template>

<script>
  export default {
    name: 'paymentlotosuper',

    data() {
      return {
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
      }

    },

    computed: {

      disableNumberField() {
        return this.selectedNumbers.length == 5;
      },

      countEnteredNumbers() {

        //Split string and convert it to array
        let arrayFromString = this.enteredNumbers.split(',');

        //Filter array and remove false value
        this.selectedNumbers = arrayFromString.filter(item => item);

        return this.selectedNumbers.length;
      }
    }
  }
</script>
