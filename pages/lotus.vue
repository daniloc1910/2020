<template>
  <section>
    <HeaderInterna
      title="Lotus"
      year="2020"
      role="Art Direction, Design"
      at='Twoo<span class="r">®</span>'
      description='Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer.<br><br>Project: manufatura.org<br>Creative Direction and Art Direction: Marcos Mendes Manente<br>Brand Strategy: Elisa Mendes<br>Research: Antônio Bonifácio and Paulo Henrique Paranhos<br>Copywriter: Bruna Amora<br>Graphic Design: Leo Porto and Felipe Rocha<br>Design Assistant: Vinicius Caetano<br>Motion: Lais Ikoma and Ronaldo Arthur Vidal<br>Web Design and Development: Carlos Kun and Danilo Campos<br>Content and Social Media: Front Filmes<br><br><a target="_blank" href="http://garage.danilocampos.com.br">See website</a>'
    />

    <Video100 video="lotus/typelogocolor.mp4" />

    <Video50Left video="lotus/refsbrasilia.mp4" />

    <Video50Right video="lotus/grid.mp4" />

    <Img100 img="lotus/290.jpg" />

    <Img50Left img="lotus/29.jpg" />

    <Img100 img="lotus/291.jpg" />

    <Img100 img="lotus/papelaria.jpg" />

    <Video50Right video="lotus/232.mp4" />

    <Img100 img="lotus/mmanual02.jpg" />

    <ImgTwoColumns 
      imgl="lotus/mmanual01.jpg" 
      imgr="lotus/mmanual03.jpg"     
    />

    <Img50Left img="lotus/capacete.jpg" />

    <Img50Right img="lotus/ccamiseta.jpg" />

    <Img100 img="lotus/lapis.jpg" />

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
import Video50Right from '~/components/Video50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import Video100 from '~/components/Video100.vue'
import ImgTwoColumns from '~/components/ImgTwoColumns.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Right,
    Video50Right,
    Video50Left,
    Video100,
    ImgTwoColumns,
    Img50Left
  },

  data() {
    return {
      title: 'Danilo Campos — Lotus'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
