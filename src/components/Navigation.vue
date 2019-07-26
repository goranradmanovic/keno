<template lang="pug">
  span
    .container
      nav(class='navbar navbar-expand-lg navbar-light bg-light justify-content-end navigation')
        a(class='navbar-brand' href='/' class='navigation__homelink')
          img(src='../assets/images/header-img/keno-logo.png' alt='Keno Logo' class='navigation__homelink--logo')

        p.navigation__userhelp
          i.far.fa-life-ring.text-danger &nbsp;
          | Pomoć Igračima od 07h do 23h 051/000-000

        .navigation__search
          .input-group
            .input-group-prepend
              span#basic-addon1.input-group-text.border-right-0.navigation__search--addon
                i.fas.fa-search
              input.form-control.border-left-0.rounded-0.navigation__search--input(type='text' placeholder='Provjeri Dobitak' aria-label='Username' aria-describedby='basic-addon1')

        button(class='navbar-toggler navigation__mobilebtn' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
          .navigation__mobilebtn--icon

        .collapse.navbar-collapse.justify-content-end.navigation__navbar#navbarNav
          ul.navbar-nav
            li(v-for='navigationLink in navigationLinks' class='nav-item')
                router-link(:key='navigationLink.name' :to='navigationLink.path' id='navLink' class='nav-link navigation__link') {{ navigationLink.name }}
                span(class='sr-only') (current)

    .subnavigation.border-top
      .container
        ul.nav.justify-content-center.subnavigation__list#subNavbarNav
          li.nav-item.subnavigation__list--item(v-for='subNavigationLink in subNavigationLinks')
            router-link(:key='subNavigationLink.name' :to='subNavigationLink.path' id='subNavLink' class='nav-link subnavigation__list--item--link') {{ subNavigationLink.name }}
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
      },

      subNavigationLinks() {
        return this.$store.state.subNavLinks; //Return navigation links from store
      }
    },

    methods: {

    },

    mounted() {

    }
  }
</script>
