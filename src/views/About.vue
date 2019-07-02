<template lang="pug">
  section.about
    .container
      .row
        .col-md-6.col-sm-12
          .about__image

        .col-md-6.col-sm-12
          .about__info
            h1.about__info--title O nama
            h4.about__info--subtitle Lorem ipsum dolor sit amet, consectetur
            p.about__info--text Nullam tempor hendrerit ante eu convallis. Mauris dignissim, felis porta varius scelerisque, tellus odio ultricies sapien, vitae ullamcorper sapien orci sit amet risus. Quisque sapien leo, lacinia eget sapien in, feugiat lobortis odio. Mauris eu viverra mi.

            p.about__info--phone +61 (0) 3 8376 6284
            p.about__info--smalltext Nullam tincidunt vestibulum scelerisque. Cras gravida dapibus lorem sed vehicula.
            p.about__info--email Write us: noreplay@envato.com

            address.about__info--address
              p.about__info--address--text Level 14, 2 Elizabeth St,
              p.about__info--address--text Melbourne, Victoria 3000
              p.about__info--address--text Australia

            .about__info--logo.lottery
            .about__info--logo.bono
</template>

<script>

  export default {
    name: 'about',
    data() {
      return {

      }
    }
  }

</script>
