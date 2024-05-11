<script>
import { Icon } from '@iconify/vue';
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
    skin: {
      type: String,
      required: true,
      default: "dim",
      validator(value) {
        return ['white', 'light', 'dim', 'dark'].includes(value)
      },
    },
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