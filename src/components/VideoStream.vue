<template lang="pug">
  .results__screen
    //-poster='../assets/images/results-img/live-stream-keno.png'
    video(autoplay muted loop class='results__screen--video')
      source(src='' type='video/mp4')
</template>

<script>
  export default {
    name: 'videostream',
  }
</script>
