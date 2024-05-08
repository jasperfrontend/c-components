<template>
  <div class="container">
    <div
      class="draggable"
      ref="draggableRef"
      :style="{ transform: `perspective(500px) translate3d(${state.x}px, ${state.y}px, 0)` }"
    >Drag me</div>
  </div>
</template>



<script>
import { useDraggable } from '@/useDraggable';
export default {
  setup() {
    const { node, state } = useDraggable({ gridSize: 40 }); // Pass grid size
    return { node, state }
  }
};
</script>


<style scoped>
.container {
    position: relative;
    background-image:
        linear-gradient(to right, rgb(203 213 225) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(203 213 225) 1px, transparent 1px);
    background-size: 2.5rem 2.5rem;
    width: 100%;
    height: 24rem;
}

.draggable {
    background: rgb(203 213 225);
    height: 5rem;
    width: 7.5rem;

    position: absolute;
    top: 0;
    left: 0;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Indicate that the element is draggable */
    cursor: move;
    user-select: none;
    touch-action: none;
}
</style>
