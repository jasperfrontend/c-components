<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon
  },
  props: {
    type: String,
    skin: String,
    size: String,
    textSize: String,
    icon: String,
    text: String
  }
}
</script>

<template>
  <div class="c c-bar" 
    :data-bar-type="type" 
    :data-skin="skin" 
    :data-size="size" 
    :data-text-size="textSize">
    <div class="c-columns">
      <div class="col">
        <span class="icon">
          <Icon :icon="icon" width="100%" height="100%" />
        </span>
      </div>
      <div class="col">
        <span class="text">
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>