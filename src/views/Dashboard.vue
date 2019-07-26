<template lang="pug">
  .dashboard

    .container
      .row
        .col-md-3.col-sm-12.border-right
          DashboardNavigation

        .col-md-9.col-sm-12
          h3.dashboard__title Korisnik {{ email }}

          b-table(striped hover :items='transactions' caption-top)
            template(slot='table-caption') Recent Transactions
</template>

<script>
  import DashboardNavigation from '@/components/DashboardNavigation.vue';

  export default {
    name: 'dashboard',
    components: {
      DashboardNavigation
    },
    props: ['email'],
    data() {
      return {
        transactions: [
          {id: 1, action: 'Account Deposit', amount: '+$1000'},
          {id: 2, action: 'Account Deposit', amount: '+$5000'},
          {id: 3, action: 'Account Deposit', amount: '+$7000'},
          {id: 4, action: 'Account Deposit', amount: '+$8800'},
          {id: 5, action: 'Account Deposit', amount: '+$400'},
        ]
      }
    }
  }
</script>
