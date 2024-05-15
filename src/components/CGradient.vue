<script>
export default {
  props: {
    direction: {
      type: String,
      required: true,
      default: "to bottom",
      info: "to bottom, to top, whatever you want bitch",
    },
    color1: {
      type: String,
      default: "var(--purple-4)",
    },
    color2: {
      type: String,
      default: "var(--purple-9)",
    },
  },
  computed: {
    bgcolor() {
      let bg = `background-image: linear-gradient(${this.direction}, ${this.color1}, ${this.color2});`;
      return bg;
    }
  }
}
</script>

<template>
  <div class="c c-gradient" :style="bgcolor">  
  </div>
</template>

<style>
.c.c-gradient {
  width: 100%;
  height: 100%;
}
</style>