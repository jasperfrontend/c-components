<script>
export default {
  props: {
    image: String,
    rotation: String
  },
  computed: {
    rotdeg() {
      const rot = `width: 100%; height: auto; transform: rotate(${this.rotation}deg);`;
      return rot;
    }
  }
}
</script>

<template>
 <div class="c c-image">
  <img :src="image" alt="" :style="rotdeg">
 </div>
</template>