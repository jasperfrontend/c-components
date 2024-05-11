<script>
export default {
  props: {
    skin: {
      type: String,
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
    },
    textSize:  {
      type: String,
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny', 'small', 'medium', 'large'].includes(value)
      },
    },
    text: {
      type: String,
      required: true,
      default: "Just Chatting",
    },
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