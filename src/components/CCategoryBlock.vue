<script>
export default {
  props: {
    skin: {
      type: [String, null],
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
    },
    textSize: {
      type: [String, null],
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny', 'small', 'medium', 'large'].includes(value)
      },
    },
    title: {
      type: [String, null],
      required: true,
      default: "Streaming:",
    },
    text: {
      type: [String, null],
      required: true,
      default: "I am live soon! Come hang out!",
    },
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