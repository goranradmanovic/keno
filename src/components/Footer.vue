<template lang="pug">
  span
    .container
      .row
        .col-md-6.col-sm-12
          .footer__left
            .row
              .col-md-4.col-sm-6.col-6
                .footer__left--img.lottery

              .col-md-4.col-sm-6.col-6
                .footer__left--img.keno

              .col-md-4.col-sm-6.col-12
                a.footer__social--link(href='#')
                  img.footer__social--link--img(src='../assets/images/icons/facebook.svg' alt='FB icon')
                  | facebook

                a.footer__social--link(href='#')
                  img.footer__social--link--img(src='../assets/images/icons/instagram.svg' alt='Instagram icon')
                  | instagram

            .row
              .col-md-3.col-sm-12.col-6
                .footer__left--icon.location
                p.footer__left--text Gundulićeva 33
                p.footer__left--text Banja Luka

              .col-md-3.col-sm-12.col-6
                .footer__left--icon.phone
                p.footer__left--text 051/432-700
                p.footer__left--text 051/430-500

              .col-md-3.col-sm-12.col-6
                .footer__left--icon.email
                p.footer__left--text info@kenolive.tv

              .col-md-3.col-sm-12.col-6
                .footer__left--icon.support
                p.footer__left--text Pomoć igračima 7/23h
                p.footer__left--text 051 322 458

        .col-md-6.col-sm-12.p-0
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
            .footer__copy--desktop
              strong Copyright:&nbsp;
              | Copyright &copy; 2019,&nbsp;
              span.footer__copy--legaly  18+&nbsp;
              | Licu mlađem od 18 godina zabranjeno je učestvovanje u igrama na sreću.
              
            .footer__copy--mobile
              p
                strong Copyright:&nbsp;
                | Copyright &copy; 2019,&nbsp;
              p
                span.footer__copy--legaly  18+&nbsp;
                | Licu mlađem od 18 godina zabranjeno je učestvovanje u igrama na sreću.
</template>

<script>

  export default {
    name: 'Footer',
  }

</script>
