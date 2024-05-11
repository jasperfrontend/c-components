<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon
  },
  props: {
    skin: {
      type: String,
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
    },
    size: String,
    icon: {
      type: String,
      required: true,
      default: "mdi:twitch",
    },
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