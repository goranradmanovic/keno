<template lang="pug">
  .container
    .row
      .col-md-12.col-sm-12
        section.payment
            .payment__info
              h1.payment__info--title Uplata i isplata
              h2.payment__info--subtitle Lorem ipsum dolor sit amet
              p.payment__info--text Nunc aliquam turpis quis ipsum consequat porta. Donec volutpat elit nec enim sollicitudin, dapibus facilisis augue imperdiet. Phasellus vehicula ullamcorper sapien nec tristique. Mauris varius mauris non posuere mollis. Curabitur tempor porttitor justo ac maximus.

            .payment__images
              img(v-for='item in 6' :key='item' :src='getUserImage(item)'  alt='User image' class='payment__images--item')

            router-link.payment__btn#learn-more(:to='{ name: "saleplaces", params: {} }')  Saznaj više
</template>

<script>

  export default {
    name: 'payment',
    data() {
      return {

      }
    },

    methods: {
      //Placeholder function for getting lotto ball image path
      getUserImage(imageNumber) {
        return require('../assets/images/payment-img/' + imageNumber + '.png');
      }
    }
  }

</script>
