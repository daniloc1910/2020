<template>
  <section>
    <HeaderInterna
      title="GRANDE"
      year="2018"
      role="Art Direction, design"
      at="Freelance"
      description='GRANDE It is a long established fact that a <a href="#">dad</a> reader will be distracted by the readable content of a page when looking at its layout.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Img100 img="grande/adesivos@2.jpg" />

    <Video50Left video="grande/gif_intro@2.mp4" />

    <Img100 img="grande/cartoes@2.jpg" />

    <Img50Right img="grande/tape@2.jpg" />

    <Img100 img="grande/pack@2.jpg" />

    <Video50Left video="grande/gif_logo_vermelho@2.mp4" />

    <Video100 video="grande/pack-color@2.mp4" />

    <Video50Right video="grande/presentation.mp4" />

    <Img100 img="grande/home@2.jpg" />

    <Video50Left video="grande/web.mp4" />

    <Img100 img="grande/interna@2.jpg" />

    <Img50Right img="grande/print@2.jpg" />
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
import Video100 from '~/components/Video100.vue'
import Img50Right from '~/components/Img50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import Video50Right from '~/components/Video50Right.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video100,
    Img50Right,
    Video50Left,
    Video50Right
  },

  data() {
    return {
      title: 'Danilo Campos — GRANDE'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
