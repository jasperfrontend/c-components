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
  <div style="max-width: 100%; display: flex; align-items: center; align-content: center; justify-content: center;">
    <iframe :src="giphysrc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
 </div>
</template>

<style>
iframe {
  max-width: 100%;
  overflow: hidden;
  border: none;
}
</style>