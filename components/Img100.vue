<template>
  <div class="grid-imgs">
    <div class="img100">
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
.img100 {
  grid-column: 1/5;
  padding: 0px 16px 12px 16px;
}
</style>
