<script>
export default {
  props: {
    orientation: {
      type: String,
      required: true,
      default: "horizontal",
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
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
    time1: String,
    time2: String,
    time3: String,
  }
}
</script>

<template>
  <div class="c c-pills" :data-orientation="orientation" :data-skin="skin">
    <span class="pill">
      {{ time1 }}
    </span>
    <span class="pill">
      {{ time2 }}
    </span>
    <span class="pill">
      {{ time3 }}
    </span>
  </div>
</template>