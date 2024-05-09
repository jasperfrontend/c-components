import {ref, onMounted, onUnmounted, reactive} from 'vue'

export const useDraggable = ({gridSize}) => {
  const node = ref(null);
  const state = reactive({
    x: 0,
    y: 0
  })

  const handleMouseDown = (e) => {
      
    const startPos = {
      x: e.clientX - state.x,
      y: e.clientY - state.y,
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const snappedX = Math.round(dx / gridSize) * gridSize;
      const snappedY = Math.round(dy / gridSize) * gridSize;
      state.x = snappedX;
      state.y = snappedY;
      updateCursor();
    }

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      resetCursor();
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  const handleTouchStart = (e) => { // afmaken
    const touch = e.touches[0];
    const startPos = {
      x: touch.clientX - state.x,
      y: touch.clientY - state.y,
    };
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      const snappedX = Math.round(dx / gridSize) * gridSize;
      const snappedY = Math.round(dy / gridSize) * gridSize;
      state.x = snappedX;
      state.y = snappedY;
      updateCursor();
    };
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      resetCursor();
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };
  const resetCursor = () => {
    document.body.style.cursor = 'default';
  }

  const updateCursor = () => {
    document.body.style.cursor = 'move';
  }
  onMounted(() => {
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('touchstart', handleTouchStart)
  })
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('touchstart', handleTouchStart)
  })
  return {
    node,
    state
  }
}