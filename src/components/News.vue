<template lang="pug">
  .container
    .row
      .col-md-12.col-sm-12.text-center
        h2.news__title Novosti

    .row
      .col-md-3.col-sm-12(v-for='item, index in news' :key='index')
        .news__card
          img.news__card--img(:src='"../assets/images/news-img/" + item.image  + ".png"' alt='News image')
          .news__card--date {{ item.date }}
          h3.news__card--title {{ item.title }}
          p.news__card--text {{ item.text }}
          a.news__card--link(href='/novosti') Vidi više

    .row
      .col-md-12.col-sm-12
        router-link(:to="{ name: 'news', params: {} }" class='news__btn') Sve novosti
</template>

<script>

  export default {
    name: 'news',
    data() {
      return {
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
