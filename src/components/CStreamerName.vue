<script>
import { Icon } from '@iconify/vue';
export default {
  props: {
    textSize: String,
    skin: String,
    channel: String,
    icon: String,
  },
  components: {
    Icon
  }
}
</script>

<template>
  <div class="c c-text" :data-text-size="textSize" :data-skin="skin">
    <div class="c-columns">
      <div class="col">
        <span class="icon">
          <Icon :icon="icon" style="width: 100%; height: 100%;" />
        </span>
      </div>
      <div class="col">
        <span class="text">
          {{ channel }}
        </span>
      </div>
    </div>
  </div>
</template>