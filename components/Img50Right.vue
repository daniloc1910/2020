<template>
  <div class="grid-imgs">
    <div class="img50right">
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :srcset="require('~/assets/images/' + img).srcSet"
        class="lazyload"
      />
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
.img50right {
  grid-column: 3/5;
  padding: 0px 16px 12px 0px;
}

@media screen and (max-width: 745px) {
  .img50right {
    grid-column: 1/3;
    padding: 0px 16px 12px 16px;
  }
}
</style>
