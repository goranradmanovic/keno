<template lang="pug">
  .container
    .row
      .col-md-12.col-sm-12.mt-5.mb-5
        h2.news__card--title.mt-2.mb-2 Sve Novosti

    .row
      .col-md-3.col-sm-12.mb-4(v-for='item in pagginatedPosts' :key='item.id' :per-page='perPage' :current-page='currentPage')
        b-card.news__card.grey-gradient-bg
          img.news__card--img(:src='"../assets/images/news-img/" + item.image  + ".png"' alt='News image')
          .news__card--date {{ item.date }}
          h3.news__card--title {{ item.title }}
          p.news__card--text {{ item.text }}
          a.news__card--link(href='/novosti') Vidi više

      b-pagination.news__card--pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' aria-controls='news-posts')
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        perPage: 8,
        currentPage: 1,
        news: [
          {
            image: 'img-1',
            date: '28.8.2019',
            title: '11. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-2',
            date: '28.8.2019',
            title: '11. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-3',
            date: '28.8.2019',
            title: '11. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-4',
            date: '28.8.2019',
            title: '11. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
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
          {
            image: 'img-4',
            date: '28.8.2019',
            title: '13. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-1',
            date: '28.8.2019',
            title: '13. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-3',
            date: '28.8.2019',
            title: '13. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-2',
            date: '28.8.2019',
            title: '13. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-3',
            date: '28.8.2019',
            title: '14. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-2',
            date: '28.8.2019',
            title: '14. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-1',
            date: '28.8.2019',
            title: '14. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
          {
            image: 'img-4',
            date: '28.8.2019',
            title: '14. rekordno kolo po broju dobitaka',
            text: 'Protekle sedmice tokom 12. kola se radovao najveci broj keno igrača do sad. Isplaćeno je čak 2 174 dobiti ...'
          },
        ]
      }
    },

    computed: {
      pagginatedPosts() {
        // Return just page of items needed
        return this.news.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      },
      rows() {
        return this.news.length;
      }
    }
  }
</script>
