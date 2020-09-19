<template>
  <section>
    <HeaderInterna
      title="Garage Beer Co."
      year="2019"
      role="Website Design, Development"
      at="Freelance"
      description="Design, development and 3D manipulation for Garage Beer Co. website, a craft brewery and tap room located in the centre of Barcelona."
    />

    <Video50Left
      video="garagebeerco/lata.mp4"
      poster="garagebeerco/lata-p.jpg"
    />

    <Img100 img="garagebeerco/web-desktop@2.jpg" />

    <Video50Left
      video="garagebeerco/web-video.mp4"
      poster="garagebeerco/web-video-p.jpg"
    />

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
      title: 'Garage Beer Co.'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
