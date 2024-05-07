<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon
  },
  props: {
    skin: String,
    size: String,
    icon: String,
    iconSize: String
  },
}
</script>

<template>
  <div class="c c-icon" :data-skin="skin" :data-size="iconSize">
    <span class="icon">
      <Icon :icon="icon" width="100%" height="100%" />
    </span>
  </div>
</template>