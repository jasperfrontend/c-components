<script>
export default {
  props: {
    meme: {
      type: String,
    },
    topText: {
      type: String,
    },
    bottomText: {
      type: String,
    },
  },

}
</script>

<template>
  <div class="c c-meme" style="width: 100%; height: 100%;">  
    <img :src="`https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png`" alt="">

  </div>
</template>