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
    <div class="container" id="screenshot" ref="container">
      
      <vue-draggable-resizable
        v-for="(draggableRef, index) in draggableRefs"
        :key="`draggable-${index}-${draggableRef.component}`"
        class="draggable"
        ref="draggableElements"
        :grid="[20,20]"
        :x="0"
        :y="0"
        :parent="limitDraggingToContainer"
      >
        <component :is="componentMap[draggableRef.component]" v-bind="draggableRef.props"></component>
      </vue-draggable-resizable>

    </div>
    <div class="options">
      <div class="option">
        <label>
          Limit dragging to the grid
          <input type="checkbox" v-model="limitDraggingToContainer">
        </label>
      </div>
      <div class="option">
        <label>
          <button @click="captureScreenshot">Capture Screenshot</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import domtoimage from 'dom-to-image';

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

// Define a map of component names to their respective components
const componentMap = {
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
};

function getComponentProps(componentName) {
  const component = componentMap[componentName];
  if (component) {
    return component.props || {};
  }
  return {};
}

const componentOptions = Object.keys(componentMap);
const selectedComponent = ref(null);
const showPropsModal = ref(false);
const draggableRefs = ref([]);
const limitDraggingToContainer = ref(true);

const openPropsModal = () => {
  showPropsModal.value = true;
};

const addComponentWithProps = (props) => {
  draggableRefs.value.push({ x: 0, y: 0, component: selectedComponent.value, props });
  showPropsModal.value = false;
};

const captureScreenshot = () => {
  const node = document.getElementById('screenshot');
  domtoimage.toJpeg(node, { quality: 1.0 })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'share-this-on-social-media.jpeg';
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error('Oops, something went wrong!', error);
    });
};

</script>

<style scoped>
.container {
  position: relative;
  aspect-ratio: 9 / 16;
  margin: 0 auto;
  width: 480px;
  border: 1px solid rgba(0,0,0,.1);
  position: relative; 
  background: 
    linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, 
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
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
.vdr {
	touch-action: none;
	position: absolute;
	box-sizing: border-box;
	border: none;
}
.draggable * {
  user-select: none;
  touch-action: none;
}
.draggable.active.draggable {
  box-shadow: 0 0 .25em rgba(255,255,255,.4);
}
.draggable.active.dragging.draggable {
  background: none;
  box-shadow: 0 0 1em rgba(255,255,255,.4);
}
.component-options,
label {
  color: var(--gray-0);
}
.component-options {
  padding: var(--size-3);
  position: fixed;
  top: 0;
  left: 0;
}
.component-options label {
  display: block;
  padding-bottom: var(--size-2);
}
.button-container {
  margin-top: var(--size-2);
}
.options {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>