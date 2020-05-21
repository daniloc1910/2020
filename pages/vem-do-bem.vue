<template>
  <section>
    <HeaderInterna
      title="Vem do Bem"
      year="2019"
      role="Design, development"
      at='Twoo<span class="r">®</span>'
      description='Vem do Bem It is a long established fact that a <a href="#">dad</a> reader will be distracted by the readable content of a page when looking at its layout.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Img50Left img="vemdobem/capa@2.jpg" />

    <Video100 video="vemdobem/ppattern@2.mp4" />

    <Img50Right img="vemdobem/produto@2.jpg" />

    <Video100 video="vemdobem/pack@2.mp4" />

    <Img50Left img="vemdobem/piscina@2.jpg" />

    <Img100 img="vemdobem/tresprodutos@2.jpg" />

    <Img50Right img="vemdobem/cenario@2.jpg" />

    <Img100 img="vemdobem/sacola@2.jpg" />

    <ImgTwoColumns
      imgl="vemdobem/cartao@2.jpg"
      imgr="vemdobem/papelaria@2.jpg"
    />

    <Img100 img="vemdobem/web-home@2.jpg" />

    <Video50Left video="vemdobem/home-video.mp4" />

    <Img100 img="vemdobem/web-interna@2.jpg" />

    <Img50Right img="vemdobem/mobile@2.jpg" />

    <Img100 img="vemdobem/web-interna-2@2.jpg" />
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
import Img50Left from '~/components/Img50Left.vue'
import Img50Right from '~/components/Img50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import ImgTwoColumns from '~/components/ImgTwoColumns.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video100,
    Img50Left,
    Img50Right,
    Video50Left,
    ImgTwoColumns
  },

  data() {
    return {
      title: 'Danilo Campos — Vem do Bem'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
