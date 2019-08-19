<template lang="pug">
  span
    Modal

    .results
      .container
        .row
          .col-md-12.col-sm-12
            VideoStream

      .results__gameplaying
        GamePlay

        GameResults

    .howtoplay
      .container
        .row
          .col-md-3.offset-md-1.col-sm-12
            .howtoplay__content
              p.howtoplay__content--title
                strong Brzo&nbsp;
                | odaberi svoju
                br
                | dobitnu kombinaciju
              .howtoplay__content--img.one

          .col-md-3.offset-md-1.col-sm-12
            .howtoplay__content
              p.howtoplay__content--title
                | Gledaj izvlačenje&nbsp;
                br
                strong uživo
              .howtoplay__content--img.two

          .col-md-3.offset-md-1.col-sm-12
            .howtoplay__content
              p.howtoplay__content--title
                | Osvoji i do&nbsp;
                br
                strong 60.000 KM
              .howtoplay__content--img.three

    .payment
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

    .pullout
      PulloutSchelude

    .news
      News
</template>

<script>
  import Modal from '@/components/Modal.vue';
  import VideoStream from '@/components/VideoStream.vue';
  import GamePlay from '@/components/GamePlay.vue';
  import GameResults from '@/components/GameResults.vue';
  import PulloutSchelude from '@/components/PulloutSchelude.vue';
  import News from '@/components/News.vue';

  export default {
    name: 'results',
    components: {
      Modal,
      VideoStream,
      GamePlay,
      GameResults,
      PulloutSchelude,
      News
    },
    data() {
      return {

      }
    },
    methods: {
      slickSliderInit() {
        $(document).ready(function(){
          $('.pullout__slider--responsive').slick({
              dots: false,
              infinite: true,
              prevArrow:"<span class='pullout__slider--responsive--btn-prev'></span>",
              nextArrow:"<span class='pullout__slider--responsive--btn-next'></span>",
              speed: 300,
              slidesToShow: 7,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });
        });
      }
    },

    created() {

    },

    mounted() {
      this.slickSliderInit();
    }
  }
</script>
