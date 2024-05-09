<template>
  <div class="container">
    <div
      v-for="(draggableRef, index) in draggableRefs"
      :key="index"
      class="draggable"
      ref="draggableRef"
      :style="{ transform: `perspective(500px) translate3d(${draggableRef.x}px, ${draggableRef.y}px, 0)` }"
      @mousedown="handleMouseDown(index, $event)"
    >
      Drag me {{ index + 1 }}
    </div>
    <button @click="addNode">Add Node</button>
  </div>
</template>

<script>
import { useDraggable } from '@/useDraggable';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const { draggableRefs } = useDraggable({ gridSize: 40 });
    const nextIndex = ref(draggableRefs.length);

    const handleMouseDown = (index, e) => {
      const startPos = {
        x: e.clientX - draggableRefs.value[index].x,
        y: e.clientY - draggableRefs.value[index].y
      };

      const handleMouseMove = (e) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        const snappedX = Math.round(dx / 40) * 40;
        const snappedY = Math.round(dy / 40) * 40;
        draggableRefs.value[index].x = snappedX;
        draggableRefs.value[index].y = snappedY;
        updateCursor();
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        resetCursor();
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    const addNode = () => {
      draggableRefs.value.push({ x: 0, y: 0 });
      nextIndex.value++;
    };

    const resetCursor = () => {
      document.body.style.cursor = 'default';
    };

    const updateCursor = () => {
      document.body.style.cursor = 'move';
    };

    onMounted(() => {
      draggableRefs.value.forEach((ref, index) => {
        ref.addEventListener('mousedown', (e) => handleMouseDown(index, e));
      });
    });

    onUnmounted(() => {
      draggableRefs.value.forEach((ref, index) => {
        ref.removeEventListener('mousedown', (e) => handleMouseDown(index, e));
      });
    });

    return { draggableRefs, handleMouseDown, addNode };
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
