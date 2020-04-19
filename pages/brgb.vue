<template>
  <section>
    <HeaderInterna
      title="BRGB"
      year="2019"
      role="Art direction, design"
      at="Personal"
      description='BRGB is a gallery featuring the best website designs made in Brazil.<br><br>Ilustrations by <a target="_blank" href="https://isabelaquintes.com">Isabela Quintes</a>'
    />

    <Img100 img="brgb/home@2.jpg" />

    <Video50Left video="brgb/intro-video.mp4" />

    <Img100 img="brgb/internal@2.jpg" />

    <ImgTwoColumns
      imgl="brgb/profile-internal@2.jpg"
      imgr="brgb/submit@2.jpg"
    />

    <Img100 img="brgb/about@2.jpg" />
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
import ImgTwoColumns from '~/components/ImgTwoColumns.vue'
import Video50Left from '~/components/Video50Left.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    ImgTwoColumns,
    Video50Left
  },

  data() {
    return {
      title: 'Danilo Campos — BRGB'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
