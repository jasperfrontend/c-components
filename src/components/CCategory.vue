<script>
export default {
  props: {
    skin: String,
    textSize: String,
    text: String
  }
}
</script>

<template>
  <div class="c c-category" :data-skin="skin" :data-text-size="textSize">
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>