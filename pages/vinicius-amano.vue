<template>
  <section>
    <HeaderInterna
      title="Vinicius Amano"
      year="2017"
      role="Art direction, website, development"
      at="Freelance"
      description='Vinicius Amano It is a long established fact that a <a href="#">dad</a> reader will be distracted by the readable content of a page when looking at its layout.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Img50Right img="viniciusamano/businesscard.jpg" />

    <Video50Left video="viniciusamano/home-video.mp4" />

    <Img100 img="viniciusamano/home@2.jpg" />

    <Video50Right video="viniciusamano/interna-tothenorth-video.mp4" />

    <Img100 img="viniciusamano/interna_tothenorth@2.jpg" />

    <Img50Right img="viniciusamano/home_hover_zeroonze@2.jpg" />

    <Img100 img="viniciusamano/interna_diademadiamonds@2.jpg" />

    <Img50Left img="viniciusamano/mobile@2.jpg" />

    <Img100 img="viniciusamano/interna_about@2.jpg" />
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
import Img50Left from '~/components/Img50Left.vue'
import Img50Right from '~/components/Img50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import Video50Right from '~/components/Video50Right.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Left,
    Img50Right,
    Video50Left,
    Video50Right
  },

  data() {
    return {
      title: 'Danilo Campos — Vinicius Amano'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
