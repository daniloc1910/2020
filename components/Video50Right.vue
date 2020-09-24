<template>
  <div class="grid-imgs grid-video">
    <video
      class="video50right"
      loop
      playsinline
      autoplay
      muted
      :src="video"
      :poster="require('~/assets/images/' + poster)"
      type="video/mp4"
    ></video>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.video50right {
  grid-column: 3/5;
}

.grid-video {
  margin: 0 16px 16px 0px;
}

@media screen and (max-width: 745px) {
  .video50right {
    grid-column: 1/3;
  }

  .grid-video {
    margin: 0 16px 16px 16px;
  }
}
</style>
