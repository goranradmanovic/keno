<template lang="pug">
.allresults
  .container
    .row
      .col-md-12.col-sm-12.mt-5.mb-5
        h2.allresults__title Svi rezultati

    .row
      .col-md-6.col-sm-12
        .allresults__selects
          .allresults__selects--items
            label.allresults__selects--items--label Izaberi kolo
            b-form-select.allresults__selects--items--box(v-model='selectedRound' :options='optionsRounds')
          .allresults__selects--items
            label.allresults__selects--items--label Izaberi izvlačenje
            b-form-select.allresults__selects--items--box(v-model='selectedPullout' :options='optionsPullouts')
          .allresults__selects--items
            label.allresults__selects--items--label Izaberi datum
            b-form-select.allresults__selects--items--box(v-model='selectedDate' :options='optionsDates')

      .col-md-6.col-sm-12
        .allresults__paggination
          button.allresults__paggination--button.arrow(@click='currentPage = 1' :disabled='currentPage == 1' :class='{disabled: currentPage == 1}' title='First Page')
          button.allresults__paggination--button.arrow(@click='currentPage--' :disabled='currentPage == 1' :class='{disabled: currentPage == 1}' title='Previus')

          button.allresults__paggination--button(v-for='(item, index) in totalPages' @click='currentPage = index + 1' :title='index + 1') {{ index + 1 }}

          button.allresults__paggination--button.arrow(@click='currentPage++' :disabled='currentPage >= totalPages' :class='{disabled: currentPage >= totalPages}' title='Next')
          button.allresults__paggination--button.arrow(@click='currentPage = totalPages' title='Last Page' :disabled='currentPage == totalPages' :class='{disabled: currentPage >= totalPages}')

    .row
      .col-md-12.col-sm-12

        #accordionExample.accordion.mt-5.mb-5
          .card.allresults__card(v-for='(item, index) in paginate' :key='index')
            .card-header.allresults__card--header(:id='"heading-" + index')
              h2.mb-0
                button.btn.btn-link.allresults__card--button(type='button' data-toggle='collapse' :data-target='"#collapse-" + index') {{ item.round }}. Kolo  &nbsp;&nbsp;&nbsp; {{ item.drawing }}. Izvlačenje

            .collapse(:aria-labelledby='"heading-" + index' :id='"collapse-" + index' data-parent='#accordionExample')
              .card-body.p-1.allresults__desktop
                .container
                  .row
                    .col-md-6.col-sm-12

                      .card.border-0.results__info--bg(v-for='(item, index) in keno')

                        .card-body.p-0.pt-4.pb-4
                          .results__info.keno.small
                            .results__info--img.keno.small
                              span

                            .results__info--content
                              h5.results__info--content--subtitle.keno 3. Kolo &nbsp;&nbsp; 8. izvlačenje
                              time.results__info--content--date Datum: 05.08.2019.

                              .results__info--content--total.keno Ukupna uplata:&nbsp;
                                strong {{ item.total }} KM
                              .results__info--content--combinations.keno Broj kombinacija:&nbsp;
                                strong {{ item.number_combinations }}

                          .results__numbers
                            h3.results__numbers--title.keno Izvučeni brojevi

                            .results__numbers--container
                              .results__numbers--container--item.red-circle(v-for='number in item.numbers') {{ number }}


                    .col-md-6.col-sm-12

                      .card.border-0(v-for='(item, index) in lotosuper')

                          .card-body.p-0.pt-4.pb-4
                            .results__info.super5.small
                              .results__info--img.super5.small
                                span

                              .results__info--content
                                h5.results__info--content--subtitle.super5 3. Kolo &nbsp;&nbsp; 8. izvlačenje
                                time.results__info--content--date Datum: 05.08.2019.

                                .results__info--content--total.super5 Ukupna uplata:&nbsp;
                                  strong {{ item.total }} KM
                                .results__info--content--combinations.super5 Broj kombinacija:&nbsp;
                                  strong {{ item.number_combinations }}

                            .results__numbers
                              h3.results__numbers--title.super5 Izvučeni brojevi

                              .results__numbers--container.border-bottom-0
                                .results__numbers--container--item.green-circle(v-for='number in item.numbers') {{ number }}

              //-Mobile section
              .card-body.p-1.allresults__mobile
                .container
                  .row
                    .col-sm-12
                      div(v-if='isKeno')
                        .card.border-0.results__info--bg(v-for='(item, index) in keno')

                          .card-body.pl-1.pr-1
                            .results__info.keno
                              .results__info--img.keno
                                span

                              .results__info--img.super5.mobile
                                span

                              .results__info--content
                                h5.results__info--content--subtitle.keno 3. Kolo &nbsp;&nbsp; 8. izvlačenje
                                time.results__info--content--date Datum: 05.08.2019.

                                .results__info--content--total.keno Ukupna uplata:&nbsp;
                                  strong {{ item.total }} KM
                                .results__info--content--combinations.keno Broj kombinacija:&nbsp;
                                  strong {{ item.number_combinations }}

                            .results__numbers
                              h3.results__numbers--title.keno Izvučeni brojevi

                              .results__numbers--container
                                .results__numbers--container--item.red-circle(v-for='number in item.numbers') {{ number }}

                      div(v-else)
                        .card.border-0(v-for='(item, index) in lotosuper')

                            .card-body.pl-0.pr-0
                              .results__info.super5
                                .results__info--img.super5
                                  span

                                .results__info--img.keno.mobile
                                  span

                                .results__info--content
                                  h5.results__info--content--subtitle.super5 3. Kolo &nbsp;&nbsp; 8. izvlačenje
                                  time.results__info--content--date Datum: 05.08.2019.

                                  .results__info--content--total.super5 Ukupna uplata:&nbsp;
                                    strong {{ item.total }} KM
                                  .results__info--content--combinations.super5 Broj kombinacija:&nbsp;
                                    strong {{ item.number_combinations }}

                              .results__numbers
                                h3.results__numbers--title.super5 Izvučeni brojevi

                                .results__numbers--container.border-bottom-0
                                  .results__numbers--container--item.green-circle(v-for='number in item.numbers') {{ number }}
</template>

<script>
  import { bus } from '../main';

  export default {
    name: 'allresults',
    data() {
      return {
        //Pagination
        currentPage: 1,
        itemsPerPage: 5,
        resultCount: 0,
        isKeno: null,

        //Placeholder data
        //Select box
        selectedRound: null,
        selectedPullout: null,
        selectedDate: null,
        optionsRounds: [
          { value: null, text: 'Izaberi kolo' },
          { value: '3', text: '3.' },
          { value: '4', text: '4.' },
          { value: '5', text: '5.' },
          { value: '6', text: '6.' },
          { value: '7', text: '7.' },
          { value: '8', text: '8.' },
          { value: '9', text: '9.' },
          { value: '10', text: '10.' },
        ],

        optionsPullouts: [
          { value: null, text: 'Izaberi izvlačenje' },
          { value: '6', text: '6.' },
          { value: '7', text: '7.' },
          { value: '8', text: '8.' },
          { value: '9', text: '9.' },
          { value: '10', text: '10.' },
          { value: '11', text: '11.' },
          { value: '12', text: '12.' },
          { value: '13', text: '13.' },
          { value: '14', text: '14.' },
          { value: '15', text: '15.' },
        ],

        optionsDates: [
          { value: null, text: 'Izaberi datum' },
          { value: '01.08.2019', text: '01.08.2019' },
          { value: '02.08.2019', text: '02.08.2019' },
          { value: '03.08.2019', text: '03.08.2019' },
          { value: '04.08.2019', text: '04.08.2019' },
          { value: '05.08.2019', text: '05.08.2019' },
          { value: '06.08.2019', text: '06.08.2019' },
          { value: '07.08.2019', text: '07.08.2019' },
          { value: '08.08.2019', text: '08.08.2019' },
          { value: '09.08.2019', text: '09.08.2019' },
          { value: '10.08.2019', text: '10.08.2019' },
        ],

        //Placeholder data
        keno: [
          {
            total: '65.340,00',
            number_combinations: 1358,
            numbers: [3, 5, 9, 10, 13, 18, 22, 23, 33, 36, 39, 40, 42, 44, 48, 51, 62, 69, 70, 71]
          }
        ],

        lotosuper: [
          {
            total: '65.340,00',
            number_combinations: 1358,
            numbers: [23, 5, 9, 10, 13],
          }
        ],

        roundsdrawings: [
          {
            round: 3,
            drawing: 6
          },
          {
            round: 3,
            drawing: 7
          },
          {
            round: 3,
            drawing: 8
          },
          {
            round: 3,
            drawing: 9
          },
          {
            round: 3,
            drawing: 10
          },
          {
            round: 3,
            drawing: 11
          },
          {
            round: 3,
            drawing: 12
          },
          {
            round: 3,
            drawing: 13
          },
          {
            round: 3,
            drawing: 14
          },
          {
            round: 3,
            drawing: 15
          },
          {
            round: 3,
            drawing: 16
          },
          {
            round: 3,
            drawing: 17
          },
          {
            round: 3,
            drawing: 18
          },
          {
            round: 3,
            drawing: 19
          },
          {
            round: 3,
            drawing: 20
          },
          {
            round: 3,
            drawing: 21
          },
          {
            round: 3,
            drawing: 22
          },
          {
            round: 3,
            drawing: 23
          },
          {
            round: 3,
            drawing: 24
          },
          {
            round: 3,
            drawing: 25
          },
        ]
      }
    },

    methods: {
      kenoStoreStatus() {
        this.isKeno = this.$store.state.isKeno;
      }
    },

    created() {
      this.kenoStoreStatus();
    },

    computed: {

      //Calculate total page fro pagination
      totalPages() {
          return Math.ceil(this.resultCount / this.itemsPerPage); //Get total pages for pagination
      },

      //Paginate page data
      paginate() {
        //Check if items array is empty
        if (!this.roundsdrawings || this.roundsdrawings.length == 0) {
            return;
        }

        this.resultCount = this.roundsdrawings.length;

        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages
        }

        let index = this.currentPage * this.itemsPerPage - this.itemsPerPage;

        //Slice the items array
        return this.roundsdrawings.slice(index, index + this.itemsPerPage);
      },
    },

    mounted() {
    }
  }
</script>
