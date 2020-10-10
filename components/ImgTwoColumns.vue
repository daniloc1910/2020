<template>
  <div class="grid-imgs grid-twocolumns">
    <div class="img50left">
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :srcset="require('~/assets/images/' + imgl).srcSet"
        class="lazyload"
      />
    </div>

    <div class="img50right">
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :srcset="require('~/assets/images/' + imgr).srcSet"
        class="lazyload"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgl: {
      type: String,
      required: true
    },
    imgr: {
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
  align-items: top;
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
