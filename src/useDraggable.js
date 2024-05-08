import {ref, onMounted, onUnmounted, reactive} from 'vue'

export const useDraggable = ({gridSize}) => {
  const node = ref(null);
  const state = reactive({
    dragging: false,
    x: 0,
    y: 0
  })

  const handleMouseDown = (e) => {
      
    const startPos = {
      x: e.clientX - state.x,
      y: e.clientY - state.y,
    };

    const handleMouseMove = (e) => {
      state.dragging = true
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const snappedX = Math.round(dx / gridSize) * gridSize;
      const snappedY = Math.round(dy / gridSize) * gridSize;
      state.x = snappedX;
      state.y = snappedY;
      updateCursor();
    }
    const handleMouseUp = () => {
      state.dragging = false
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

      state.dragging = true
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

      console.log('touchend event');
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
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('touchstart', handleTouchStart)
  })
  onUnmounted(() => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('touchstart', handleTouchStart)
  })
  return {
      node,
      state
  }
}