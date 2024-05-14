<script>
export default {
  props: {
    textSize: {
      type: String,
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny','small', 'medium', 'large'].includes(value)
      },
    },
    skin: {
      type: String,
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
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
  <div class="c c-text" :data-text-size="textSize" :data-skin="skin">
    <span class="text">
      {{ text }}
    </span>
  </div>
</template>