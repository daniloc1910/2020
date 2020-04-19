<template>
  <section>
    <HeaderInterna
      title="Re—mind"
      year="2017"
      role="Concept, art direction, design, development"
      at="Personal"
      description='Re—mind Few days before the final voting for the presidential election in Brazil, we decided to react and create a last-minute movement in defense of democracy and diversity, in opposition to the authoritarian and discriminatory speech by Jair Bolsonaro (currently, the elected president for 2019).<br><br>Manifesto by <a target="_blank" href="https://www.rafaelbessa.com">Rafael Bessa</a><br><a target="_blank" href="http://democracia.brgb.com.br">See website</a>'
    />

    <Video50Right video="remind/video.mp4" />

    <Img100 img="remind/home@2.jpg" />

    <Video50Left video="remind/web-video.mp4" />
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
      title: 'Danilo Campos — Re—mind'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
