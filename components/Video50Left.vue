<template>
  <div class="grid-imgs grid-video">
    <video
      class="video50left"
      loop
      playsinline
      autoplay
      muted
      :src="video"
      :poster="require('~/assets/images/' + poster)"
      type="video/mp4"
    ></video>
    <p class="description"><span v-html="description"></span></p>
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
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.description {
  align-self: end;
  margin: 0 0 -4px 0;
}

.video50left {
  grid-column: 1/3;
}

.grid-video {
  margin: 0 16px 16px 16px;
}
</style>
