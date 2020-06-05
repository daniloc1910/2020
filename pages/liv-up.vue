<template>
  <section>
    <HeaderInterna
      title="Liv Up"
      year="2020"
      role="App, Art Direction"
      at='Twoo<span class="r">®</span>'
      description='Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer.<br><br>Project: manufatura.org<br>Creative Direction and Art Direction: Marcos Mendes Manente<br>Brand Strategy: Elisa Mendes<br>Research: Antônio Bonifácio and Paulo Henrique Paranhos<br>Copywriter: Bruna Amora<br>Graphic Design: Leo Porto and Felipe Rocha<br>Design Assistant: Vinicius Caetano<br>Motion: Lais Ikoma and Ronaldo Arthur Vidal<br>Web Design and Development: Carlos Kun and Danilo Campos<br>Content and Social Media: Front Filmes<br><br><a target="_blank" href="http://garage.danilocampos.com.br">See website</a>'
    />

    <Video100 video="livup/framework.mp4" />

    <Video50Left
      video="livup/brand.mp4"
      description="Brand assets<br>New logo, colors and typeface"
    />

    <Img100 img="livup/telas.jpg" />

    <Video50Right video="livup/checkout.mp4" />

    <Img100 img="livup/telas2.jpg" />

    <Img100 img="livup/telas3.jpg" />
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
import Video100 from '~/components/Video100.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video50Right,
    Video50Left,
    Video100
  },

  data() {
    return {
      title: 'Liv Up'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
