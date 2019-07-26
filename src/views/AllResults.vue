<template lang="pug">
  .container
    .row
      .col-md-10.col-sm-12.offset-md-1
        .allresults
          b-table#my-table.mt-5.mb-5(:items='items' :per-page='perPage' :current-page='currentPage' small='')

          p.mt-3 Showing page {{ currentPage }} of {{ totalPages }}
          b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' aria-controls='blog-posts')
</template>

<script>
  export default {
    name: 'allresults',
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        totalPages: null,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },

    computed: {
      rows() {
        return this.items.length;
      },
    },

    methods: {
      getTotalPages() {
        this.totalPages = this.items.length / this.perPage;
      }
    },

    mounted() {
      this.getTotalPages();
    }
  }
</script>
