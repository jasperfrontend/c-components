// useDraggable.js
import { ref } from 'vue';

export const useDraggable = ({ gridSize }) => {
  const draggableRefs = ref([]);
  return {
    draggableRefs,
    gridSize
  };
};
