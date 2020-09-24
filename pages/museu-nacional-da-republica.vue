<template>
  <section>
    <HeaderInterna
      title="Museu Nacional da República"
      year="2019"
      role="Website Design, Development"
      at='Twoo<span class="r">®</span>'
      description="Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer.<br><br>Project: manufatura.org<br>Creative Direction and Art Direction: Marcos Mendes Manente<br>Brand Strategy: Elisa Mendes<br>Research: Antônio Bonifácio and Paulo Henrique Paranhos<br>Copywriter: Bruna Amora<br>Graphic Design: Leo Porto and Felipe Rocha<br>Design Assistant: Vinicius Caetano<br>Motion: Lais Ikoma and Ronaldo Arthur Vidal<br>Web Design and Development: Carlos Kun and Danilo Campos<br>Content and Social Media: Front Filmes<br>Guidelines: Glauber Sampaio<br><br>"
    />

    <Video50Left
      video="museunacional/web-video.mp4"
      poster="museunacional/web-video.jpg"
    />

    <Img100 img="museunacional/web@2.jpg" />

    <Img50Right img="museunacional/mobile@2.jpg" />
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
      title: 'Museu Nacional da República'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
