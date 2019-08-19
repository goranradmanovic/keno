<template lang="pug">
  .container
    .row.mt-5
      .col-md-12.col-sm-12.text-center
        h2.pullout__title Raspored izvlačenja

    .row.mb-5
      .col-md-10.offset-md-1.col-sm-12
        .pullout__slider
          .pullout__slider--buttons
            button.pullout__slider--buttons--btn(v-for='(item, index) in dateTimes' :key='index' @click="dayBtn($event); setSliderData(index)")
              span {{ item.day }} &nbsp;
              | {{ item.date }}

          .pullout__slider--responsive
            .pullout__slider--responsive--content(v-for="item in dateTimes[sliderDataIndex].times")
              .pullout__slider--responsive--content--time &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot; {{ item.time }} &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;
              img.pullout__slider--responsive--content--img(:src='"../assets/images/pullout-img/" + item.logo  + ".png"' :alt='item.logo')
</template>

<script>
//import Slick from 'vue-slick';

export default {
  //components: { Slick },
  data() {
    return {
      sliderDataIndex: 0,
      /*slickOptions: {
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
        // Any other options that can be got from plugin documentation
      },*/
      //Placeholder data
      dateTimes: [
        {
          day: 'Pon',
          date: '19.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        },
        {
          day: 'Uto',
          date: '20.08.',
          times: [
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
            {
              time: '15:30',
              logo: 'super5'
            },
          ]
        },
        {
          day: 'Sri',
          date: '21.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        },
        {
          day: 'Čet',
          date: '22.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        },
        {
          day: 'Pet',
          date: '22.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        },
        {
          day: 'Sub',
          date: '22.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        },
        {
          day: 'Ned',
          date: '24.08.',
          times: [
            {
              time: '7:00',
              logo: 'keno'
            },
            {
              time: '7:30',
              logo: 'super5'
            },
            {
              time: '8:00',
              logo: 'keno'
            },
            {
              time: '8:30',
              logo: 'super5'
            },
            {
              time: '9:00',
              logo: 'keno'
            },
            {
              time: '9:30',
              logo: 'super5'
            },
            {
              time: '10:00',
              logo: 'keno'
            },
            {
              time: '10:30',
              logo: 'super5'
            },
            {
              time: '11:00',
              logo: 'keno'
            },
            {
              time: '11:30',
              logo: 'super5'
            },
            {
              time: '12:00',
              logo: 'keno'
            },
            {
              time: '12:30',
              logo: 'super5'
            },
            {
              time: '13:00',
              logo: 'keno'
            },
            {
              time: '13:30',
              logo: 'super5'
            },
            {
              time: '14:00',
              logo: 'keno'
            },
            {
              time: '14:30',
              logo: 'super5'
            },
            {
              time: '15:00',
              logo: 'keno'
            },
          ]
        }
      ]
    }
  },
  methods: {

    dayBtn(event) {

      let allDateBtns = document.querySelectorAll('.pullout__slider--buttons--btn');

      allDateBtns.forEach(item => {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
        }
      });

      event.target.classList.add('active');
    },

    setSliderData(index) {
      this.sliderDataIndex = index;
    },

    initialActiveClass() {
      let allDateBtns = document.querySelectorAll('.pullout__slider--buttons--btn');

      allDateBtns[0].classList.add('active');
    },

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
    this.initialActiveClass();
  }
}
</script>
