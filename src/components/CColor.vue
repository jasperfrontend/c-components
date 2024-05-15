<script>
export default {
  props: {
    color: String,
  },
  computed: {
    bgcolor() {
      let bg = `background-color: ${this.color}`;
      return bg;
    }
  }
}
</script>

<template>
  <div class="c c-color" :style="bgcolor">

  </div>
</template>

<style>
.c.c-color {
  width: 100%;
  height: 100%;
}
</style>