<template>
  <transition name="paper" appear>
    <nuxt-link :to="'/' + link" exact-active-class="active-project-item">
      <div class="projects">
        <div class="grid">
          <div class="project-title">{{ title }}</div>

          <ul class="project-year-role-at">
            <li>{{ year }}</li>
            <li>{{ role }}</li>
            <li><span v-html="at"></span></li>
          </ul>

          <div class="project-description">
            <span v-html="description"></span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    at: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.projects {
  position: relative;
  padding: 10px 16px 12px 16px;
  background-color: white;
  border-top: solid 1px #cccccc;
  padding-bottom: 12px;
  transition-timing-function: ease-in-out;
  transition-duration: 0.15s;
}

.projects:hover {
  margin-top: -20px;
  padding-bottom: 32px;
}

.project-title {
  grid-column: 1/2;
}

.project-year-role-at {
  grid-column: 2/3;
}

.project-description {
  grid-column: 4/5;
}

a {
  color: black;
  text-decoration: none;
}

.active-project-item {
  display: none;
}

@media screen and (max-width: 990px) {
  .project-description {
    grid-column: 3/4;
  }
}

@media screen and (max-width: 745px) {
  .project-title {
    grid-column: 1/3;
  }

  .project-year-role-at {
    grid-column: 1/3;
  }

  .project-description {
    display: none;
  }

  .projects:hover {
    margin-top: 0px;
    padding-bottom: 12px;
  }
}
</style>
