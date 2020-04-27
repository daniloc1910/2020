<template>
  <div class="grid-imgs">
    <div class="img50left">
      <img
        :data-src="require('~/images/' + gif)"
        :data-srcset="require('~/assets/images/' + gif)"
        class="lazyload"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gif: {
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
