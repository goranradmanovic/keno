<template lang="pug">
  span
    .container
      .row
        .col-md-6.col-sm-12
          .footer__left
            .row
              .col-md-6.col-sm-12
                .footer__left--img.lottery

              .col-md-6.col-sm-12
                .footer__left--img.keno

            .row
              .col-md-3.col-sm-12
                .footer__left--icon.location
                p.footer__left--text Gundulićeva 33
                p.footer__left--text Banja Luka

              .col-md-3.col-sm-12
                .footer__left--icon.phone
                p.footer__left--text 051/432-700
                p.footer__left--text 051/430-500

              .col-md-3.col-sm-12
                .footer__left--icon.email
                p.footer__left--text info@kenolive.tv

              .col-md-3.col-sm-12
                .footer__left--icon.support
                p.footer__left--text Pomoć igračima 7/23h
                p.footer__left--text 051 322 458

        .col-md-6.col-sm-12
          .footer__right
            .footer__right--links
              a.footer__right--links--link(href='#') O name
              a.footer__right--links--link(href='#') Politika privatnosti
              a.footer__right--links--link(href='#') Uslovi korištenja

            img.footer__right--img(src='../assets/images/footer-img/certificates.png' alt='Certificates image')

    .footer__copy
      .container
        .row
          .col-md-12.col-sm-12
            strong Copyright:&nbsp;
            | Copyright &copy; 2019,
            span.footer__copy--legaly  18+&nbsp;
            | Licu mlađem od 18 godina zabranjeno je učestvovanje u igrama na sreću.
</template>

<script>

  export default {
    name: 'Footer',
  }

</script>
