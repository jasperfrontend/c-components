// useDraggable.js
import { ref, onMounted, onUnmounted, reactive } from 'vue';

export const useDraggable = ({ gridSize }) => {
  const draggableRefs = ref([]);

  const handleMouseDown = (index, e) => {
    const startPos = {
      x: e.clientX - draggableRefs.value[index].x,
      y: e.clientY - draggableRefs.value[index].y
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const snappedX = Math.round(dx / gridSize) * gridSize;
      const snappedY = Math.round(dy / gridSize) * gridSize;
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

  return {
    draggableRefs
  };
};
