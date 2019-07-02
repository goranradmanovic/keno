<template lang="pug">
  #app
    header(class='header')
      Navigation

    section(class='content')
      router-view

    footer(class='footer')
      Footer
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Navigation, Footer
    }
  }
</script>

<style lang="sass">
  //This style tags are required here in order for sass compiler and live reload to work
</style>
