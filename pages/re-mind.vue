<template>
  <section>
    <HeaderInterna
      title="Re—mind"
      year="2017"
      role="Visual Identity, Website Design, Development"
      at="Personal"
      description='After the death of Del.icio.us, I decided to create Re—mind as an archive of all my inspirations and references links.<br><br><a target="_blank" href="https://remind.danilocampos.com.br">See website</a>'
    />

    <Video50Right
      video="https://res.cloudinary.com/dzeoohwas/video/upload/v1600985364/video_mbbdc1.mp4"
      poster="remind/video.jpg"
    />

    <Img100 img="remind/home@2.jpg" />

    <Video50Left
      video="https://res.cloudinary.com/dzeoohwas/video/upload/v1600985364/web-video_vookbk.mp4"
      poster="remind/web-video.jpg"
    />
  </section>
</template>

<style scoped>
.projects-list {
  position: relative;
  margin-top: 32px;
}
</style>

<script>
import HeaderInterna from '~/components/HeaderInterna.vue'
import Img100 from '~/components/Img100.vue'
import Video50Right from '~/components/Video50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video50Right,
    Video50Left
  },

  data() {
    return {
      title: 'Re—mind'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
