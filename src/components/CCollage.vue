<script>
export default {
  props: {
    textSize: String,
    photo: String,
    categoryImage: String,
    text: String
  },
  computed: {
    imgsize() {
      let size = this.textSize;
      switch(size) {
        case "tiny":
          size = 4;
        break;
        case "small":
          size = 5;
        break;
        case "medium":
          size = 7;
        break;
        case "large":
          size = 9;
        break;
        default:
          size = 9;
      } 
      let css = `width: var(--size-fluid-${size});`;
      return css;
    }
  }
}
</script>

<template>
  <div class="c c-collage" data-skin="white" :data-text-size="textSize">
    <div class="c-columns">
      <div class="col">
        <span class="c-streamer-profile-pic">
          <img :src="photo" alt="" :style="imgsize">
        </span>
      </div>
      <div class="col">
        <div class="c-stream-category">
          <img :src="categoryImage" alt="" :style="imgsize">
        </div>
        <div class="c-streamer-comment">
          <div class="text">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>