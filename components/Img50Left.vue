<template>
  <div class="grid-imgs">
    <div class="img50left">
      <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-src="require('~/assets/images/' + img).srcSet" :data-srcset="require('~/assets/images/' + img).srcSet" class="lazyload" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
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

@media screen and (max-width: 745px) {
  .img50left {
    grid-column: 1/3;
    padding: 0px 16px 12px 16px;
  }
}
</style>
