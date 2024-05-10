<script>
export default {
  props: {
    image: String,
  }
}
</script>

<template>
 <div class="c c-image">
  <img :src="image" alt="" style="width: 100%; height: auto;">
 </div>
</template>