<script>
export default {
  props: {
    skin: String,
    textSize: String,
    title: String,
    text: String
  }
}
</script>

<template>
  <div class="c c-category-block" data-skin="white" :data-text-size="textSize">
    <div class="c-columns" data-orientation="vertical">
      <div class="col">
        <div class="title">
          {{ title }}
        </div>
      </div>
      <div class="col">
        <div class="text">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>