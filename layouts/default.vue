<template>
  <div>
    <header class="grid header-default">
      <div class="profile">
        <p>
          Danilo Campos is a brazilian designer based in Barcelona focused on
          digital design and development. With more than 12 years of experience,
          so far he has lived and worked in São Paulo, Madrid and Barcelona. His
          design approach often merges graphic design aesthetic, smart
          interactions and smooth development.
        </p>
        <p>
          He is also one of
          <a href="https://wearetwoo.com" target="_blank">Twoo</a
          ><span class="r">®</span>, an independent design studio he runs with
          Carlos Kun. Focused on branding and digital, they work on a variety of
          projects ranging from brand identity systems, to product design and
          development.
        </p>

        <ul>
          <li>
            <a href="https://remind.danilocampos.com.br" target="_blank"
              >Re—mind</a
            >
          </li>
          <li>
            <a href="https://instagram.com/daniloc" target="_blank"
              >Instagram</a
            >
          </li>
          <li>
            <a href="https://behance.net/daniloc" target="_blank">Behance</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/daniloc" target="_blank"
              >Linkedin</a
            >
          </li>
          <li><br /></li>
          <li>Get in touch</li>
          <li>
            <a href="mailto:email@danilocampos.com.br" target="_blank"
              >email@danilocampos.com.br</a
            >
          </li>
        </ul>
      </div>

      <div class="experience">
        <ul>
          <li>—Experience</li>
          <li>2019 / Current — Twoo<span class="r">®</span>, Partner</li>
          <li>2017 / Current — C14TORCE (DDB), Design Lead</li>
          <li>2015 / 2017 — FJORD, Visual Designer</li>
          <li>2013 / 2015 — Isobar, Senior Designer</li>
          <li>2012 / 2013 — CUBOCC, Designer</li>
          <li>2011 / 2012 — TBWA, Art Assistant</li>
          <li>2008 / 2011 — Bule, Design Intern</li>
          <li><br /></li>
          <li>—Interviews</li>
          <li>
            <a
              href="https://www.creativedoc.co/interviews/danilo-campos"
              target="_blank"
              >Creative Doc</a
            >
          </li>
          <li>
            Extra #4 — Código e design (<a
              href="https://youtu.be/6qda_1UaITY"
              target="_blank"
              >Youtube</a
            >,
            <a
              href="https://open.spotify.com/episode/7sRJ4I1LvytSpFbjQSw6gD?si=id5RzbnbRIumyJGWc5Bbzg"
              target="_blank"
              >Spotify</a
            >)
          </li>
          <li><br /></li>
          <li>—Recognitions</li>
          <li>Brazilians Who Design</li>
          <li>Awwwards Mobile of the Week</li>
          <li>Behance Curated Galleries</li>
          <li>bauhaus100anos</li>
          <li>klikkenthéke</li>
          <li>siteInspire</li>
          <li>Mindsparkle Mag</li>
          <li>Httpster</li>
          <li>Nice Portfolio</li>
          <li>The Gallery</li>
          <li>Webdesigner Depot</li>
        </ul>
      </div>

      <div class="goma">
        <ul class="santoandre">
          <li>From Santo André</li>
          <li>
            {{
              $moment()
                .tz('America/Sao_Paulo')
                .format('LT')
            }}
          </li>
        </ul>
        <ul class="barcelona">
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
    <transition name="paper" appear>
      <nuxt />
    </transition>
  </div>
</template>

<style scoped>
.header-default {
  padding: 10px 16px 12px 16px;
  position: sticky;
  top: 0px;
  z-index: 1;
}

.title {
  grid-column: 1/2;
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
  .profile {
    grid-column: 1/3;
  }

  .goma {
    display: none;
  }

  .experience {
    grid-column: 1/3;
  }

  .header-default {
    position: relative;
    top: 0px;
  }
}
</style>
