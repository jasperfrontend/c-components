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
      default: "white",
      info: "plain (for coloured icons), white, light, dim or dark",
      validator(value) {
        return ['plain','white','light', 'dim', 'dark'].includes(value)
      },
    },
    size: {
      type: String,
      required: true,
      default: "medium",
      info: "tiny, small, medium or large",
      validator(value) {
        return ['tiny','small', 'medium', 'large'].includes(value)
      },
    },
    icon: {
      type: String,
      required: true,
      default: "mdi:twitch",
      info: "See <a href='https://icones.js.org' target='_blank'>icones.js.org</a>",
    },
    iconSize: {
      type: String,
      required: true,
      default: "medium",
      info: "tiny, small, medium or large",
      validator(value) {
        return ['tiny','small', 'medium', 'large'].includes(value)
      },
    }
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