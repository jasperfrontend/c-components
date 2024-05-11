<script>
export default {
  props: {
    giphy: String,
  },
  computed: {
    giphysrc() {
      const base = "https://giphy.com/embed/" + this.giphy;
      return base;
    }
  }
}
</script>

<template>
 <div class="c c-giphy">
  <div class="draghandle"></div>
  <div style="max-width: 100%; display: flex; align-items: center; align-content: center; justify-content: center;">
    <iframe :src="giphysrc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
 </div>
</template>

<style>
iframe {
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  border: none;
}
.c.c-giphy {
  position: relative;
}
.draghandle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: none;
}
</style>