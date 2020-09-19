<template>
  <section>
    <HeaderInterna
      title="GRANDE"
      year="2018"
      role="Visual Identity, Art Direction"
      at="Freelance"
      description="GRANDE is a creative studio based in São Paulo. They mix art, design and technology to deliver unique creative solutions for their clients."
    />

    <Img100 img="grande/adesivos@2.jpg" />

    <Video50Left
      video="grande/gif_intro@2.mp4"
      poster="grande/gif_intro@2.jpg"
    />

    <Img100 img="grande/cartoes@2.jpg" />

    <Img50Right img="grande/tape@2.jpg" />

    <Img100 img="grande/pack@2.jpg" />

    <Video50Left
      video="grande/gif_logo_vermelho@2.mp4"
      poster="grande/gif_logo_vermelho@2.jpg"
    />

    <Video100
      video="grande/pack-color@2.mp4"
      poster="grande/pack-color@2.jpg"
    />

    <Video50Right
      video="grande/presentation.mp4"
      poster="grande/presentation.jpg"
    />

    <Img100 img="grande/home@2.jpg" />

    <Video50Left video="grande/web.mp4" poster="grande/web.jpg" />

    <Img100 img="grande/interna@2.jpg" />

    <Img50Right img="grande/print@2.jpg" />
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
import Video100 from '~/components/Video100.vue'
import Img50Right from '~/components/Img50Right.vue'
import Video50Left from '~/components/Video50Left.vue'
import Video50Right from '~/components/Video50Right.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video100,
    Img50Right,
    Video50Left,
    Video50Right
  },

  data() {
    return {
      title: 'GRANDE'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
