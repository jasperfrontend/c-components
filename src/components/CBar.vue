<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      required: true,
      default: "bar",
      validator(value) {
        return ['plain', 'bar'].includes(value)
      },
    },
    skin: {
      type: [String, null],
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
    },
    size: {
      type: [String, null],
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny', 'small', 'medium', 'large'].includes(value)
      },
    },
    textSize: {
      type: [String, null],
      required: true,
      default: "medium",
      validator(value) {
        return ['tiny', 'small', 'medium', 'large'].includes(value)
      },
    },
    icon: {
      type: [String, null],
      required: true,
      default: "mdi:twitch",
    },
    text: {
      type: [String, null],
      required: true,
      default: "YourTwitchChannel",
    },
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