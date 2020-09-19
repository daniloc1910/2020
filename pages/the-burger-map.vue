<template>
  <section>
    <HeaderInterna
      title="The Burger Map"
      year="2018"
      role="Website Design, Art Direction"
      at="Concept"
      description="Concept design and art direction for The Burger Map, an american-inspired burger joint in Brazil."
    />

    <Img100 img="theburgermap/home@2.jpg" />

    <Img50Right img="theburgermap/poster-class@2.jpg" />

    <Img100 img="theburgermap/cardapio-regional-burgers@2.jpg" />

    <Video50Left
      video="theburgermap/prototipo.mp4"
      poster="theburgermap/prototipo.jpg"
    />

    <Img100 img="theburgermap/modal-burger@2.jpg" />

    <Img50Right img="theburgermap/mobile@2.jpg" />

    <Img100 img="theburgermap/tbm-mountain@2.jpg" />

    <ImgTwoColumns
      imgl="theburgermap/poster-personalize@2.jpg"
      imgr="theburgermap/poster-fried-onion-burger@2.jpg"
    />

    <Img100 img="theburgermap/about@2.jpg" />
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
import ImgTwoColumns from '~/components/ImgTwoColumns.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Img50Right,
    Video50Left,
    ImgTwoColumns
  },

  data() {
    return {
      title: 'The Burger Map'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
