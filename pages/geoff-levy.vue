<template>
  <section>
    <HeaderInterna
      title="Geoff Levy"
      year="2020"
      role="Website Design, Art Direction"
      at='Twoo<span class="r">®</span>'
      description='Website design and development for Geoff Levy. Based in Brooklyn, Geoff has made films in Spanish, Portuguese, and French. His work aims to bridge art with commerce while elevating platforms of causes and cultures.<br><br>With: <a target="_blank" href="http://carloskun.com">Carlos Kun</a><br>Development: <a target="_blank" href="https://www.juliocesar.work">Julio Cesar</a> and <a target="_blank" href="https://jorgetoloza.co">Jorge Toloza</a><br><br><a target="_blank" href="https://geofflevy.com">See website</a>'
    />

    <Video100
      video="https://res.cloudinary.com/dzeoohwas/video/upload/v1600977811/video_intro_2_wftefv.mp4"
      poster="geofflevy/video_intro_2.jpg"
    />

    <Img100 img="geofflevy/home.jpg" />

    <Img50Left img="geofflevy/homem.jpg" />

    <Video50Right
      video="https://res.cloudinary.com/dzeoohwas/video/upload/v1600977812/videohome_nudziy.mp4"
      poster="geofflevy/videohome.jpg"
    />

    <ImgTwoColumns
      imgl="geofflevy/Image_3840x2560_3.jpg"
      imgr="geofflevy/Image_3840x2560_2.jpg"
    />

    <Img100 img="geofflevy/interna-full.jpg" />

    <Img50Left img="geofflevy/Image_3840x2560_8.jpg" />

    <Img50Right img="geofflevy/mobile-projeto.jpg" />

    <Img100 img="geofflevy/info.jpg" />

    <Video50Left
      video="https://res.cloudinary.com/dzeoohwas/video/upload/v1600977908/videoprojeto_tdwmhc.mp4"
      poster="geofflevy/videoprojeto.jpg"
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
import Img50Right from '~/components/Img50Right.vue'
import Img50Left from '~/components/Img50Left.vue'
import Video100 from '~/components/Video100.vue'
import Video50Right from '~/components/Video50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import ImgTwoColumns from '~/components/ImgTwoColumns.vue'

export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Right,
    Img50Left,
    Video100,
    Video50Right,
    Video50Left,
    ImgTwoColumns
  },

  data() {
    return {
      title: 'Geoff Levy'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
