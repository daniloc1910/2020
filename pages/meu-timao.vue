<template>
  <section>
    <HeaderInterna
      title="Meu Timão"
      year="2019"
      role="Art direction, design"
      at="Concept"
      description="Concept design and art direction for Meu Timão, the biggest news website about Sport Club Corinthians Paulista."
    />

    <Video50Left video="meutimao/home-video.mp4" />

    <Img100 img="meutimao/home@2.jpg" />

    <Img50Left img="meutimao/facebook1@2.jpg" />

    <Img50Right img="meutimao/facebook2@2.jpg" />

    <Img100 img="meutimao/especial@2.jpg" />

    <Img50Left img="meutimao/mobile-especial@2.jpg" />

    <Img100 img="meutimao/artigo@2.jpg" />
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
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Left,
    Img50Right,
    Video50Left
  },

  data() {
    return {
      title: 'Vem do Bem'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
