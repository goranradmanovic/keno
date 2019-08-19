<template lang="pug">
.payment.mt-5.mb-5
  .container
    .row
      .col-md-3.offset-md-1.col-sm-12
        .payment__content
          .payment__content--img.one

          h5.payment__content--title Gdje se nalaze vaša prodajna mjesta?

          p.payment__content--text Pored mogućnosti igre na veb portalu, kombinaciju možete uplatiti na preko 3.000 lokacija u Republici Srpskoj.

      .col-md-3.offset-md-1.col-sm-12
        .payment__content
          .payment__content--img.two

          h5.payment__content--title Želim dopuniti račun?

          p.payment__content--text Dopuniti svoj račun za igru brzo i lako koristeći neki od ovih načina.

      .col-md-3.offset-md-1.col-sm-12
        .payment__content
          .payment__content--img.three

          h5.payment__content--title
            span Dobitak
            br
            | Kako da isplatim?

          p.payment__content--text
            span Čestitamo!
            br
            | Isplatite svoj dobitak odmah na bilo kojoj lokaciji ili putem interneta.
    .row
      .col-md-12.col-sm-12.text-center
        router-link(to='/uplata-isplata' class='payment__link') Uplate i isplate
</template>

<script>

  export default {
    name: 'payment',
    data() {
      return {

      }
    },
  }

</script>
