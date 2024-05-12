<script>
export default {
  props: {
    textSize: {
      type: [String, null],
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny', 'small', 'medium', 'large'].includes(value)
      },
    },
    photo: String,
    categoryImage: String,
    text: {
      type: [String, null],
      required: true,
      default: "I am live soon! Come hang out!",
    },
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
        <div class="c-streamer-profile-pic">
          <img :src="photo" alt="" :style="imgsize">
        </div>
        <div class="c-stream-category">
          <img :src="categoryImage" alt="" :style="imgsize">
        </div>
      </div>
      <div class="col">
        <div class="c-streamer-comment">
          <div class="text">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.c-collage .text {
  background-color: var(--gray-0);
  color: var(--gray-12);
  padding: var(--size-fluid-2) var(--size-fluid-2);
}

.c-streamer-profile-pic {
  min-width: 120px;
}
.col:has(.c-streamer-profile-pic) {
  flex-grow: 0;
}
.col:has(> .c-streamer-comment) {
  display: flex;
  align-self: stretch;
}
</style>