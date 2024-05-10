<script>
export default {
  props: {
    spacing: String
  }
}
</script>


<template>
  <div class="c c-spacer" :style="`height: ${spacing}px;`">
  </div>
</template>

<style>
hr {
  height: 0;
  border: 0;
  text-align: center;
  margin: 0 auto;
}
</style>