<template>
  <section>
    <HeaderInterna
      title="Geoff Levy"
      year="2020"
      role="Website"
      at='Twoo<span class="r">®</span>'
      description='Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer.<br><br>Project: manufatura.org<br>Creative Direction and Art Direction: Marcos Mendes Manente<br>Brand Strategy: Elisa Mendes<br>Research: Antônio Bonifácio and Paulo Henrique Paranhos<br>Copywriter: Bruna Amora<br>Graphic Design: Leo Porto and Felipe Rocha<br>Design Assistant: Vinicius Caetano<br>Motion: Lais Ikoma and Ronaldo Arthur Vidal<br>Web Design and Development: Carlos Kun and Danilo Campos<br>Content and Social Media: Front Filmes<br><br><a target="_blank" href="http://garage.danilocampos.com.br">See website</a>'
    />

    <Img100 img="geofflevy/home.jpg" />

    <Img100 img="geofflevy/photo.jpg" />

    <Img50Right img="geofflevy/homem.jpg" />

    <Video100 video="geofflevy/grid-view.mp4" />

    <Img50Left img="geofflevy/gridm.jpg" />

    <Img100 img="geofflevy/project.jpg" />
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

export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Right,
    Img50Left,
    Video100
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
