<template>
  <div class="projects">
    <div class="grid">
      <div class="project-title">{{ title }}</div>

      <ul class="project-year-role-at">
        <li>{{ year }}</li>
        <li>{{ role }}</li>
        <li><span v-html="at"></span></li>
      </ul>

      <div class="project-description"><span v-html="description"></span></div>
    </div>
  </div>
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
    }
  }
}
</script>

<style scoped>
.projects {
  position: relative;
  padding: 10px 16px 28px 16px !important;
  background-color: white;
  border-top: solid 1px #cccccc;
  padding-bottom: 12px;
  transition-duration: 0.1s;
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
    grid-column: 1/3;
  }
}
</style>
