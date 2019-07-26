<template lang="pug">
  .dashboard__aside

    nav.dashboard__aside--nav#sidebar
      .dashboard__aside--nav--header
        h3 Dashboard

      ul.dashboard__aside--nav--list

        li.dashboard__aside--nav--list--item(v-for='dashboardLink in dashboardLinks')
          router-link(:key='dashboardLink.name' :to='dashboardLink.path' id='dashboardNavLink' class='dashboard__aside--nav--list--item--link') {{ dashboardLink.name }}

        li.dashboard__aside--nav--list--item
          a.dashboard__aside--nav--list--item--link.dropdown-toggle(href='#pageSubmenu' data-toggle='collapse' aria-expanded='false') Stranice

          ul.dashboard__aside--nav--list--item--sublist#pageSubmenu.collapse
            li.dashboard__aside--nav--list--item--sublist--item
              a.dashboard__aside--nav--list--item--sublist--item--link(href='#') Strana 1
            li.dashboard__aside--nav--list--item--sublist--item
              a.dashboard__aside--nav--list--item--sublist--item--link(href='#') Strana 2
            li.dashboard__aside--nav--list--item--sublist--item
              a.dashboard__aside--nav--list--item--sublist--item--link(href='#') Strana 3
</template>

<script>
  export default {
    name: 'DashboardNavigation',
    data() {
      return {

      }
    },
    computed: {
      dashboardLinks() {
        return this.$store.state.dashboardLinks; //Return dasboard navigation links from store
      }
    },
  }
</script>
