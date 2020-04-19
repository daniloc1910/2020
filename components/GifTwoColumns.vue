<template>
  <div class="grid-imgs grid-twocolumns">
    <div class="img50left">
      <img :data-src="'~/assets/images/' + gifl" :data-srcset="'images/' + gifl" class="lazyload"/>
    </div>

    <div class="img50right">
      <img :data-src="'~/assets/images/' + gifr" :data-srcset="'images/' + gifr" class="lazyload"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gifl: {
      type: String,
      required: true
    },
    gifr: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.img50left {
  grid-column: 1/3;
  padding: 0px 0px 12px 16px;
}

.img50right {
  grid-column: 3/5;
  padding: 0px 16px 12px 0px;
}

.grid-twocolumns {
  align-items: end;
}

@media screen and (max-width: 745px) {
  .img50left {
    grid-column: 1/3;
    padding: 0px 16px 0px 16px;
  }

  .img50right {
    grid-column: 1/3;
    padding: 0px 16px 12px 16px;
  }
}
</style>
