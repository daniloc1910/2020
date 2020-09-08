<template>
  <div>
    <nuxt-link to="/">
      <header class="grid header-internas">
        <div class="title">
          <ul class="title-sticky">
            <li>Danilo Campos</li>
            <li>About</li>
          </ul>
        </div>

        <div class="goma">
          <ul class="santoandre title-sticky">
            <li>From Santo André</li>
            <li>
              {{
                $moment()
                  .tz('America/Sao_Paulo')
                  .format('LT')
              }}
            </li>
          </ul>
          <ul class="barcelona title-sticky">
            <li>Based in Barcelona</li>
            <li>
              {{
                $moment()
                  .tz('Europe/Madrid')
                  .format('LT')
              }}
            </li>
          </ul>
        </div>
      </header>
    </nuxt-link>
    <transition name="paper" appear>
      <nuxt />
    </transition>
    <transition name="paper-projects" appear>
      <section class="projects-list">
        <ProjectListItem
          title="Geoff levy"
          year="2020"
          role="Website"
          at='Twoo<span class="r">®</span>'
          description="Website design and development for Geoff Levy, a Brooklyn based photographer and film director."
          link="geoff-levy"
        />

        <ProjectListItem
          title="Liv Up"
          year="2020"
          role="App, Visual Identity"
          at='Twoo<span class="r">®</span>'
          description="New Liv Up’s app for their new branding and business. I have collaborated with their talented internal team to shape a concept from navigation to visual direction."
          link="liv-up"
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
          description="Rebranding of Lotus, a real estate company with headquarters in Brasilia and Miami."
          link="lotus"
        />

        <ProjectListItem
          title="Museu Nacional da República"
          year="2019"
          role="Website, Development"
          at='Twoo<span class="r">®</span>'
          description="Website design and development for Museu Nacional de República, located in Brasília and designed by the architect Oscar Niemeyer."
          link="museu-nacional-da-republica"
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
          role="Website, Development"
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
          role="Art direction, Website"
          at="Concept"
          description="Concept design and art direction for The Burger Map, an american-inspired burger joint in Brazil."
          link="the-burger-map"
        />

        <ProjectListItem
          title="Designers Brasileiros Pela Democracia"
          year="2018"
          role="Website, Development"
          at="Personal"
          description="A call inviting designers to stand in defense of democracy and diversity in the brazilian 2018 presidential election."
          link="designers-brasileiros-pela-democracia"
        />

        <ProjectListItem
          title="Meu Timão"
          year="2018"
          role="Website"
          at="Concept"
          description="Concept design and art direction for Meu Timão, the biggest news website about Sport Club Corinthians Paulista."
          link="meu-timao"
        />

        <ProjectListItem
          title="Re—mind"
          year="2017"
          role="Art Direction, Website, Development"
          at="Personal"
          description="After the death of Del.icio.us, I decided to create Re—mind as an archive of all my inspirations and references links."
          link="re-mind"
        />
      </section>
    </transition>
  </div>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.header-internas {
  padding: 10px 16px 12px 16px;
  transition-timing-function: ease-in-out;
  transition-duration: 0.15s;
  height: 80px;
  margin-bottom: -46px;
}

.header-internas:hover {
  margin-bottom: -30px;
}

.title {
  grid-column: 1/2;
}

.title-sticky {
  position: sticky;
  top: 10px;
}

.goma {
  grid-column: 4/5;
}

.santoandre {
  width: 50%;
  float: left;
}

.barcelona {
  float: right;
}

@media screen and (max-width: 990px) {
  .goma {
    grid-column: 3/4;
  }
}

@media screen and (max-width: 745px) {
  .goma {
    display: none;
  }

  .header-internas:hover {
    margin-bottom: -46px;
  }

  .title-sticky {
    position: relative;
    top: 0px;
  }
}
</style>

<script>
import ProjectListItem from '~/components/ProjectListItem.vue'
export default {
  components: {
    ProjectListItem
  }
}
</script>
