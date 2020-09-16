<template>
  <section>
    <HeaderInterna
      title="Liv Up"
      year="2020"
      role="App Design, Visual Identity"
      at="Freelance"
      description="New Liv Up’s app for their new branding and business. I have collaborated with their talented internal team to shape a concept from navigation to visual direction."
    />

    <Video100 video="livup/framework.mp4" />

    <Video50Left
      video="livup/brand.mp4"
      description="Brand assets<br>New logo, colors and typeface"
    />

    <Img100 img="livup/telas.jpg" />

    <Video50Right video="livup/checkout.mp4" />

    <Img100 img="livup/telas2.jpg" />

    <Img100 img="livup/components.jpg" />

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
