<script>
export default {
  props: {
    orientation: String,
    skin: String,
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