<template>
  <section>
    <HeaderInterna
      title="Designers Brasileiros Pela Democracia"
      year="2018"
      role="Website Design, Development"
      at="Personal"
      description='Few days before the final voting for the presidential election in Brazil, we decided to react and create a last-minute movement in defense of democracy and diversity, in opposition to the authoritarian and discriminatory speech by Jair Bolsonaro (currently, the elected president for 2019).<br><br>Designed and coded with <a target="_blank" href="https://www.diogoakio.com.br">Diogo Akio</a><br>Manifesto by <a target="_blank" href="https://www.rafaelbessa.com">Rafael Bessa</a>'
    />

    <Video50Left video="manifesto/gif@2.mp4" />

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
import Video50Left from '~/components/Video50Left.vue'
export default {
  layout: 'interna',
  components: {
    HeaderInterna,
    Img100,
    Video50Left
  },

  data() {
    return {
      title: 'Designers Brasileiros Pela Democracia'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
