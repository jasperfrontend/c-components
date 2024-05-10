<script>
export default {
  props: {
    type: String,
    color: String,
    width: String,
    height: String,
    spacing: String
  }

}
</script>

<template>
  <div class="c c-line" :class="type">
    <hr class="line" :style="`width: ${width}; border-top: ${height} ${type} ${color}; box-sizing: border-box; margin: ${spacing} 0;`">
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