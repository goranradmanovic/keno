<template lang="pug">
  .results__start
    //-Add .active class to the .results__start--red
    .results__start--red(:class='{ active: isKeno }')
      span.results__start--red--pseudo
      //-Add .active class to the .results__start--red--img.keno
      .results__start--red--img.keno(:class='{ active: isKeno }')
      .results__start--red--info
        p.results__start--red--info--title Naredna&nbsp;
          span.results__start--red--info--title--strong Keno&nbsp;
          | igra
        p.results__start--red--info--text
          span 3. Kolo&nbsp;
          br
          span 9. Izvlačenje
        time.results__start--red--info--time 25:18

    //-Add .active class to the .results__start--green
    .results__start--green(:class='{ active: !isKeno }')
      span.results__start--green--pseudo
      //-Add .active class to the .results__start--red--img.super5
      .results__start--green--img.super5(:class='{ active: !isKeno }')
      .results__start--green--info
        p.results__start--green--info--title Naredna &nbsp;
          span.results__start--green--info--title--strong Super 5 &nbsp;
          | igra
        p.results__start--green--info--text
          span 3. Kolo&nbsp;
          br
          span 9. Izvlačenje
        time.results__start--green--info--time 25:18

    .results__start--subtext * Uplate za naredno izvlačenje se onemogućuju 5 minuta prije izvlačenja automatski se prebacuju za sledeće izvlačenje
</template>

<script>
  export default {
    name: 'gamestart',
    props: ['isKeno']
  }
</script>
