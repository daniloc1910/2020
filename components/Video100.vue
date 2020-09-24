<template>
  <div class="grid-imgs grid-video">
    <video
      class="video100"
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
.video100 {
  grid-column: 1/5;
  background-color: aquamarine;
}

.grid-video {
  margin: 0 16px 16px 16px;
}
</style>
