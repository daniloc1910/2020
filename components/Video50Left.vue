<template>
  <div class="grid-imgs grid-video">
    <video
      class="video50left"
      loop
      playsinline
      autoplay
      muted
      :src="require('~/assets/images/' + video)"
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
    }
  }
}
</script>

<style scoped>
.video50left {
  grid-column: 1/3;
}

.grid-video {
  margin: 0 16px 16px 16px;
}
</style>
