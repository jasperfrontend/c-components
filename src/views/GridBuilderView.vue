<template>
  <div>
    <div class="component-options">
      <label for="componentSelect">Select Component:</label>
      <select id="componentSelect" v-model="selectedComponent">
        <option v-for="(component, index) in componentOptions" :value="component" :key="index">
          {{ component }}
        </option>
      </select>
      <div class="button-container">
        <button @click="openPropsModal">Add Component</button>
      </div>
    </div>
    <component-props-modal
      v-if="showPropsModal"
      :component-name="selectedComponent"
      :component-props="getComponentProps(selectedComponent)"
      @props-confirmed="addComponentWithProps"
    />
    <div class="container" ref="container"
      :style="{
      position: 'relative',
      backgroundColor: '#808080',
      background: 'linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)',
      backgroundSize: '20px 20px, 20px 20px',
    }">
      <div
        v-for="(draggableRef, index) in draggableRefs"
        :key="index"
        class="draggable"
        ref="draggableElements"
        >
        <vue-draggable-resizable
          :grid="[20, 20]"
          :x="0"
          :y="0"
        >
          <component :is="draggableRef.component" v-bind="draggableRef.props" />
        </vue-draggable-resizable>
      </div>
    </div>

  </div>
</template>

<script>
import { useDraggable } from '@/useDraggable';
import { ref } from 'vue';

// Import all components
import CBar from '@/components/CBar.vue';
import CCategory from '@/components/CCategory.vue';
import CCategoryBlock from '@/components/CCategoryBlock.vue';
import CCollage from '@/components/CCollage.vue';
import CGiphy from '@/components/CGiphy.vue';
import CIcon from '@/components/CIcon.vue';
import CImage from '@/components/CImage.vue';
import CLine from '@/components/CLine.vue';
import CPills from '@/components/CPills.vue';
import CSpacer from '@/components/CSpacer.vue';
import CStreamCategory from '@/components/CStreamCategory.vue';
import CStreamerName from '@/components/CStreamerName.vue';
import CText from '@/components/CText.vue';

import ComponentPropsModal from '@/components/ComponentPropsModal.vue';

export default {
  components: {
    CBar,
    CCategory,
    CCategoryBlock,
    CCollage,
    CGiphy,
    CIcon,
    CImage,
    CLine,
    CPills,
    CSpacer,
    CStreamCategory,
    CStreamerName,
    CText,
    ComponentPropsModal,
  },
  setup() {
    const grids = 40;
    const { draggableRefs } = useDraggable({ gridSize: grids });
    const nextIndex = ref(draggableRefs.length);
    const draggableElements = ref([]);

    const selectedComponent = ref(null);
    const componentOptions = [
      'CBar',
      'CCategory',
      'CCategoryBlock',
      'CCollage',
      'CGiphy',
      'CIcon',
      'CImage',
      'CLine',
      'CPills',
      'CSpacer',
      'CStreamCategory',
      'CStreamerName',
      'CText',
    ];

    const showPropsModal = ref(false);

    const handleMouseDown = (index, e) => {
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = draggableRefs.value[index].x;
      const startTop = draggableRefs.value[index].y;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        const newX = startLeft + deltaX;
        const newY = startTop + deltaY;

        const snappedX = Math.round(newX / grids) * grids;
        const snappedY = Math.round(newY / grids) * grids;

        draggableRefs.value[index].x = snappedX;
        draggableRefs.value[index].y = snappedY;

        if (draggableElements.value[index]) {
          draggableElements.value[index].style.transform = `translate3d(${snappedX}px, ${snappedY}px, 0)`;
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };



    const openPropsModal = () => {
      showPropsModal.value = true;
    };

    const getComponentProps = (component) => {
      // Return props for the selected component
      switch (component) {
        case 'CBar':
          return ['type', 'skin', 'size', 'textSize', 'icon', 'text'];
        case 'CCategory':
          return ['skin', 'textSize', 'text'];
        case 'CCategoryBlock':
          return ['skin', 'textSize', 'title', 'text'];
        case 'CCollage':
          return ['textSize', 'photo', 'categoryImage', 'text'];
        case 'CGiphy':
          return ['giphy'];
        case 'CIcon':
          return ['skin', 'size', 'icon', 'iconSize'];
        case 'CImage':
          return ['image', 'rotation'];
        case 'CLine':
          return ['type', 'color', 'width', 'height', 'spacing'];
        case 'CPills':
          return ['orientation', 'skin', 'time1', 'time2', 'time3'];
        case 'CSpacer':
          return ['spacing'];
        case 'CStreamCategory':
          return ['textSize', 'skin', 'channel', 'icon'];
        case 'CStreamerName':
          return ['textSize', 'skin', 'channel', 'icon'];
        case 'CText':
          return ['textSize', 'skin', 'text'];
        default:
          return [];
      }
    };

    const addComponentWithProps = (props) => {
      // Add the selected component to the grid with provided props
      draggableRefs.value.push({ x: 0, y: 0, component: selectedComponent.value, props });
      nextIndex.value++;
      showPropsModal.value = false;
    };

    // onMounted(() => {
    //   draggableRefs.value.forEach((draggableRef, index) => {
    //     draggableRef.node.value.addEventListener('mousedown', (e) => handleMouseDown(index, e));
    //   });
    // });

    // onUnmounted(() => {
    //   draggableRefs.value.forEach((draggableRef, index) => {
    //     draggableRef.node.value.removeEventListener('mousedown', (e) => handleMouseDown(index, e));
    //   });
    // });
    return {
      draggableRefs,
      handleMouseDown,
      selectedComponent,
      componentOptions,
      showPropsModal,
      openPropsModal,
      getComponentProps,
      addComponentWithProps
    };
  }
};
</script>

<style scoped>
.container {
  position: relative;
  aspect-ratio: 9 / 16;
  margin: 0 auto;
  width: 30rem;
}

.draggable {
  width: auto;
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
.draggable * {
  user-select: none;
  touch-action: none;
}

.component-options,
body .modal-content label {
  color: var(--gray-0);
}
.component-options {
  padding: var(--size-3);
}
.component-options label {
  display: block;
  padding-bottom: var(--size-2);
}
.button-container {
  margin-top: var(--size-2);
}
</style>