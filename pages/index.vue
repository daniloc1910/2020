<template>
  <div class="listado">
    <section class="projects-list">
      <ProjectListItem
        title="Geoff Levy"
        year="2020"
        role="Website Design, Art Direction"
        at='Twoo<span class="r">®</span>'
        description="Website design and development for Geoff Levy, a Brooklyn based photographer and film director."
        link="geoff-levy"
      />

      <!--      <ProjectListItem
        title="Escinter"
        year="2020"
        role="Website, Development"
        at='Twoo<span class="r">®</span>'
        description="Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer."
        link="escinter"
      />-->

      <ProjectListItem
        title="Lotus"
        year="2020"
        role="Visual Identity, Art Direction"
        at='Twoo<span class="r">®</span>'
        description="Rebranding of Lotus, a real estate company with headquarters in Brasília and Miami."
        link="lotus"
      />

      <ProjectListItem
        title="Museu Nacional da República"
        year="2019"
        role="Website Design, Development"
        at='Twoo<span class="r">®</span>'
        description="Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer."
        link="museu-nacional-da-republica"
      />

      <ProjectListItem
        title="Liv Up"
        year="2020"
        role="App Design, Visual Identity"
        at="Freelance"
        description="New Liv Up’s app for their new branding and business. I have collaborated with their talented internal team to shape a concept from navigation to visual direction."
        link="liv-up"
      />

      <ProjectListItem
        title="Vem do Bem"
        year="2019"
        role="Visual Identity, Art Direction"
        at='Twoo<span class="r">®</span>'
        description="Vem do Bem is a brazilian cosmetic brand. All their products are handmade, vegan and 100% organic."
        link="vem-do-bem"
      />

      <ProjectListItem
        title="Garage Beer Co."
        year="2019"
        role="Website Design, Development"
        at="Freelance"
        description="Design, development and 3D manipulation for Garage Beer Co. website, a craft brewery and tap room located in the centre of Barcelona."
        link="garage-beer-co"
      />

      <ProjectListItem
        title="GRANDE"
        year="2018"
        role="Visual Identity, Art Direction"
        at="Freelance"
        description="GRANDE is a creative studio based in São Paulo. They mix art, design and technology to deliver unique creative solutions for their clients."
        link="grande"
      />

      <ProjectListItem
        title="The Burger Map"
        year="2018"
        role="Website Design, Art Direction"
        at="Concept"
        description="Concept design and art direction for The Burger Map, an american-inspired burger joint in Brazil."
        link="the-burger-map"
      />

      <ProjectListItem
        title="Designers Brasileiros Pela Democracia"
        year="2018"
        role="Website Design, Development"
        at="Personal"
        description="A call inviting designers to stand in defense of democracy and diversity in the brazilian 2018 presidential election."
        link="designers-brasileiros-pela-democracia"
      />

      <ProjectListItem
        title="Meu Timão"
        year="2018"
        role="Website Design"
        at="Concept"
        description="Concept design and art direction for Meu Timão, the biggest news website about Sport Club Corinthians Paulista."
        link="meu-timao"
      />

      <ProjectListItem
        title="Re—mind"
        year="2017"
        role="Visual Identity, Website Design, Development"
        at="Personal"
        description="After the death of Del.icio.us, I decided to create Re—mind as an archive of all my inspirations and references links."
        link="re-mind"
      />
    </section>
  </div>
</template>

<script>
import ProjectListItem from '~/components/ProjectListItem.vue'

export default {
  components: {
    ProjectListItem
  }
}
</script>

<style scoped>
.listado {
  position: relative;
  display: flex;
  min-height: 100vh;
  z-index: 20;
}

.projects-list {
  position: relative;
  width: 100%;
  align-self: flex-end;
}
</style>
