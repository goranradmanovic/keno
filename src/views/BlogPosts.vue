<template lang="pug">
  .container
    .row
      .col-md-8.col-sm-12.offset-md-2
        .blogposts
          b-card#blog-posts.mt-5.mb-5(v-for='item in pagginatedPosts' :key='item.id' :per-page='perPage' :current-page='currentPage' :header='item.title' header-tag='header' :footer='item.first_name + " " + item.last_name' footer-tag='footer' :title='item.title')
            b-card-text Header and footers using props. {{ item.text }}
            b-button(href='#' variant='primary') Go somewhere
            
          p.mt-3 Current Page: {{ currentPage }}
          b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' aria-controls='blog-posts')
</template>

<script>

  export default {
    name: 'blogposts',
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, title: 'Title 1', first_name: 'Fred', last_name: 'Flintstone', text: 'Lorem Ipsum'},
          { id: 2, title: 'Title 2', first_name: 'Wilma', last_name: 'Flintstone', text: 'Lorem Ipsum'},
          { id: 3, title: 'Title 3', first_name: 'Barney', last_name: 'Rubble', text: 'Lorem Ipsum'},
          { id: 4, title: 'Title 4', first_name: 'Betty', last_name: 'Rubble', text: 'Lorem Ipsum'},
          { id: 5, title: 'Title 5', first_name: 'Pebbles', last_name: 'Flintstone', text: 'Lorem Ipsum'},
          { id: 6, title: 'Title 6', first_name: 'Bamm Bamm', last_name: 'Rubble', text: 'Lorem Ipsum'},
          { id: 7, title: 'Title 7', first_name: 'The Great', last_name: 'Gazzoo', text: 'Lorem Ipsum'},
          { id: 8, title: 'Title 8', first_name: 'Rockhead', last_name: 'Slate', text: 'Lorem Ipsum'},
          { id: 9, title: 'Title 9', first_name: 'Pearl', last_name: 'Slaghoople', text: 'Lorem Ipsum'},
          { id: 10, title: 'Title 10', first_name: 'Pearl 1', last_name: 'Slaghoople 1', text: 'Lorem Ipsum'}
        ]
      }
    },
    computed: {
      pagginatedPosts() {
        // Return just page of items needed
        return this.items.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      },
      rows() {
        return this.items.length;
      }
    }
  }

</script>
