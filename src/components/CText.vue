<script>
export default {
  props: {
    textSize: String,
    skin: String,
    text: String
  }
}
</script>

<template>
  <div class="c c-text" :data-text-size="textSize" :data-skin="skin">
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>