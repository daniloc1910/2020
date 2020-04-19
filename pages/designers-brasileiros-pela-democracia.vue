<template>
  <section>
    <HeaderInterna
      title="Designers Brasileiros Pela Democracia"
      year="2018"
      role="Design, development"
      at="Personal"
      description='Few days before the final voting for the presidential election in Brazil, we decided to react and create a last-minute movement in defense of democracy and diversity, in opposition to the authoritarian and discriminatory speech by Jair Bolsonaro (currently, the elected president for 2019).<br><br>Manifesto by <a target="_blank" href="https://www.rafaelbessa.com">Rafael Bessa</a><br><a target="_blank" href="http://democracia.brgb.com.br">See website</a>'
    />

    <Gif50Left gif="manifesto/gif@2.gif" />

    <Img100 img="manifesto/website@2.jpg" />
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
import Gif50Left from '~/components/Gif50Left.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Gif50Left
  },

  data() {
    return {
      title: 'Danilo Campos — Designers Brasileiros Pela Democracia'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
