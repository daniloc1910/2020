<template>
  <section>
    <HeaderInterna
      title="Garage Beer Co."
      year="2019"
      role="Website, Development"
      at="Freelance"
      description='Design, development and 3D manipulation for Garage Beer Co. website, a craft brewery and tap room located in the centre of Barcelona.<br><br>Creative direction by <a target="_blank" href="https://acreb.tv">Acreb Studio</a><br><a target="_blank" href="http://garage.danilocampos.com.br">See website</a>'
    />

    <Video50Left video="garagebeerco/lata.mp4" />

    <Img100 img="garagebeerco/web-desktop@2.jpg" />

    <Video50Left video="garagebeerco/web-video.mp4" />

    <Img50Right img="garagebeerco/mobile@2.jpg" />
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
      title: 'Danilo Campos — Garage Beer Co.'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
