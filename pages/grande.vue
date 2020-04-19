<template>
  <section>
    <HeaderInterna
      title="GRANDE"
      year="2018"
      role="Art Direction, design"
      at="Freelance"
      description='GRANDE It is a long established fact that a <a href="#">dad</a> reader will be distracted by the readable content of a page when looking at its layout.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Gif100 gif="grande/adesivos@2.gif" />

    <Gif50Left gif="grande/gif_intro@2.gif" />

    <Img100 img="grande/cartoes@2.jpg" />

    <Img50Right img="grande/tape@2.jpg" />

    <Img100 img="grande/pack@2.jpg" />

    <Gif50Left gif="grande/gif_logo_vermelho@2.gif" />

    <Gif100 gif="grande/pack-color@2.gif" />

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
import Gif100 from '~/components/Gif100.vue'
import Gif50Left from '~/components/Gif50Left.vue'
import Img50Right from '~/components/Img50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import Video50Right from '~/components/Video50Right.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Gif100,
    Gif50Left,
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
