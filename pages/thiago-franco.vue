<template>
  <section>
    <HeaderInterna
      title="Thiago Franco"
      year="2018"
      role="Website"
      at="Freelance"
      description='Thiago Franco It is a long established fact that a <a href="#">dad</a> reader will be distracted by the readable content of a page when looking at its layout.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Video50Left video="thiagofranco/home-video.mp4" />

    <Img100 img="thiagofranco/home@2.jpg" />

    <Img50Right img="thiagofranco/mobile@2.jpg" />

    <Img100 img="thiagofranco/case@2.jpg" />
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
import Video50Left from '~/components/Video50Left.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Right,
    Video50Left
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
