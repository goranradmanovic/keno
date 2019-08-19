<template lang="pug">
  .news
    .container
      .row
        .col-md-9.col-sm-12
          .news__card--article
            .news__card--article--date {{ singleNews.date }}
            h1.news__card--article--title {{ singleNews.title }}
            img.news__card--article--img(:src='"../assets/images/news-img/" + singleNews.image + ".png"' alt='Car image')
            p.news__card--article--text {{ singleNews.text[0] }}
            p.news__card--article--text {{ singleNews.text[1] }}
            p.news__card--article--text {{ singleNews.text[2] }}

        .col-md-3.col-sm-12
          .news__card.grey-gradient-bg(v-for='item, index in news' :key='index')
            .news__card--date {{ item.date }}
            h3.news__card--title {{ item.title }}
            p.news__card--text {{ item.text }}
            a.news__card--link(href='/novosticlanak') Vidi više

          .row
            .col-md-12.col-sm-12
              router-link(:to="{ name: 'news', params: {} }" class='news__btn') Sve novosti
</template>

<script>
  export default {
    name: 'singlenews',
    data() {
      return {

        //Placeholder data
        singleNews: {
            date: '20.08.2019',
            title: 'Dugi automobil, Pežo 208, našao put do svog vlasnika',
            image: 'peguot',
            text: [
              'Instant srećka "Sedmica" obradovala još jednog srećnog dobitnika automobila, koji je 14.2 u prostorijama "Verano Motorsa" preuzeo ključeve ovojenog pežoa 208.',
              'Drugi od sedam automobila srećke "Sedmica" uručen je igraču iz Banja Luke, koji je imao sreću da "ogrebe" novi automobil, ali tu nije kraj, s obzirom na to da još četri pežoa 208 i jednog Audija A3 čekaju svoje nove vlasnike.',
              'Dobitnik nije želio da se fotografiše, niti da mu se objavi identitet, a mi smo mu čestitali i poželili srećnu vožnju novim automobilom.'
            ]
          },
        news: [
          {
            image: 'img-1',
            date: '28.8.2019',
            title: '12. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-2',
            date: '28.8.2019',
            title: '12. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-3',
            date: '28.8.2019',
            title: '12. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-4',
            date: '28.8.2019',
            title: '12. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
        ]
      }
    }
  }
</script>
