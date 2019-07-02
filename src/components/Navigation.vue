<template lang="pug">
  .container
    nav(class='navbar navbar-expand-lg navbar-light bg-light navigation')
      a(class='navbar-brand' href='/' class='navigation__homelink')
        img(src='../assets/images/header-img/keno-logo.png' alt='Keno Logo' class='navigation__homelink--logo')

      button(class='navbar-toggler navigation__mobilebtn' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
        .navigation__mobilebtn--icon

      .collapse.navbar-collapse.justify-content-end#navbarNav
        ul(class='navbar-nav')
          li(v-for='navigationLink in navigationLinks' class='nav-item')
              router-link(:key='navigationLink.name' :to='navigationLink.path' id='navLink' class='nav-link navigation__link') {{ navigationLink.name }}
              span(class='sr-only') (current)
</template>

<script>
  export default {
    name: 'Navigation',
    data() {

      return {

      }
    },

    computed: {
      navigationLinks() {
        return this.$store.state.navLinks; //Return navigation links from store
      }
    },

    methods: {

    },

    mounted() {

    }
  }
</script>
