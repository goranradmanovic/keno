<template lang="pug">
  .container
    .row
      .col-md-6.col-sm-12.offset-md-3
        .userprofil
          .card.mt-5.mb-5.userprofil__card
            img.card-img-top(src='https://www.gravatar.com/avatar/00000000000000000000000000000000' alt='Korisnička profil slika')
            .card-body
              h5.card-title Ime i Prezime
              p.card-text example@gmail.com
              a.btn.btn-primary(href='#') Go somewhere
</template>

<script>
  export default {
    name: 'userprofil',
  }
</script>
