<template lang="pug">
  .deposit
    .container
      .row
        .col-md-6.col-sm-12.offset-md-3
          b-card.text-center(title='Depozit')

            b-form.mt-5
              b-form-group
                b-form-select(v-model='selectedDeposit' :options='deposits' class='deposit__selectbox')

              b-form-group
                b-input-group(size='lg' prepend='$' append='.00' v-model='depositAmount')
                  b-form-input

              b-form-group
                b-button(variant='outline-primary' block) Depozit
</template>

<script>
  export default {
    name: 'deposit',
    data() {
      return {
        deposits: [
          { value: null, text: 'Izaberite jednu od opcija Depozita', disabled: true },
          { value: '1', text: 'PayPal', disabled: false },
          { value: '2', text: 'Perfect Money', disabled: false },
          { value: '3', text: 'BitCoin', disabled: false },
          { value: '4', text: 'Credit Card', disabled: false },
          { value: '5', text: 'Bank Transfer', disabled: false },
          { value: '6', text: 'Mobile Money', disabled: false }
        ],
        selectedDeposit: null,
        depositAmount: null,
      }
    }
  }
</script>
