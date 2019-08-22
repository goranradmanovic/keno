<template lang="pug">
  .container
    .row
      .col-md-12.col-sm-12.mt-5.mb-5.text-center
        h2.results__info--title Rezultati poslednjeg izvlačenja

    .row.results__desktop
      .col-md-6.col-sm-12

        .card.border-0.results__info--bg(v-for='(item, index) in keno')

          .card-body.pl-1.pr-1
            .results__info.keno
              .results__info--img.keno
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

            .card-body.pl-0.pr-0
              .results__info.super5
                .results__info--img.super5
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

    .row.results__mobile
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
    .row
      .col-md-12.col-sm-12
        router-link(:to="{ name: 'allresults', params: {} }" class='results__screen--allresults' id='allResults') Svi rezultati
</template>

<script>

  export default {
    name: 'gameresults',
    props: ['isKeno'],
    data() {
      return {
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
        ]
      }
    },
  }
</script>
