<template>
  <section>
    <HeaderInterna
      title="Lotus"
      year="2020"
      role="Visual Identity, Art Direction"
      at='Twoo<span class="r">®</span>'
      description="Rebranding of Lotus, a real estate company with headquarters in Brasilia and Miami, together with a team of talented architects they’ve been transforming one of the Plano Piloto newest neighborhoods Noroeste.<br><br>Brand Culture: manufatura<br>Creative Direction: Marcos Mendes Manente<br>Brand Strategy: Elisa Mendes<br>Content Direction: Front Filmes<br>Graphic Design Direction: Carlos Kun and Danilo Campos<br>Contributors: Duda Millington, Vinicius Caetano, Saulo dal Pozzo, Lerry Dias, Ketlyn Ramos, Marianne Diniz"
    />

    <Video100 video="lotus/video_intro.mp4" />

    <Img100 img="lotus/Image_3840x2560_11.jpg" />

    <Video50Right video="lotus/grid.mp4" />

    <Img100 img="lotus/Image_3840x2560_0.jpg" />

    <Video50Left video="lotus/typelogocolor.mp4" />

    <Img100 img="lotus/Image_3840x2560_23.jpg" />

    <ImgTwoColumns
      imgl="lotus/Image_3840x2560_7.jpg"
      imgr="lotus/Image_vertical_1804_2560_9.jpg"
    />

    <Img100 img="lotus/Image_3840x2560_25.jpg" />

    <Video50Right video="lotus/video_hor_1.mp4" />

    <Img100 img="lotus/Image_3840x2560_5.jpg" />

    <Video50Right video="lotus/mmlhd.mp4" />

    <Img100 img="lotus/Image_3840x2560_4.jpg" />

    <Video50Left video="lotus/video_hor_2.mp4" />

    <Img100 img="lotus/Image_3840x2560_2.jpg" />

    <ImgTwoColumns
      imgl="lotus/Image_vertical_1804_2560_3.jpg"
      imgr="lotus/Image_3840x2560_20.jpg"
    />

    <Img100 img="lotus/Image_3840x2560_29.jpg" />

    <Img100 img="lotus/Image_3840x2560_15.jpg" />

    <Img50Left img="lotus/Image_vertical_1804_2560_4.jpg" />

    <Img100 img="lotus/Image_3840x2560_8.jpg" />

    <Img100 img="lotus/Image_3840x2560_24.jpg" />

    <ImgTwoColumns
      imgl="lotus/Image_3840x2560_28.jpg"
      imgr="lotus/Image_3840x2560_9.jpg"
    />

    <Img100 img="lotus/Image_3840x2560_16.jpg" />

    <Img50Left img="lotus/Image_vertical_1804_2560_2.jpg" />

    <Img100 img="lotus/Image_3840x2560_21.jpg" />

    <Img100 img="lotus/Image_3840x2560_27.jpg" />

    <Img100 img="lotus/Image_3840x2560_22.jpg" />

    <Img50Right img="lotus/Image_vertical_1804_2560_6.jpg" />

    <Img100 img="lotus/Image_3840x2560_18.jpg" />

    <Img100 img="lotus/Image_3840x2560_10.jpg" />

    <Img100 img="lotus/Image_3840x2560_14.jpg" />

    <Img100 img="lotus/Image_3840x2560_17.jpg" />

    <Video50Right video="lotus/video_hor_3.mp4" />
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
    Img50Left,
    ImgTwoColumns
  },

  data() {
    return {
      title: 'Lotus'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
