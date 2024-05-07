<template>
  <div class="flex justify-center">
    <div class="c-columns">
      <div class="col spaced">
        <draggable
          class="draggable"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :sort="true"
          @change="log"
          :move="checkMove"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
            v-for="element in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="col spaced">
        
        <draggable
          class="draggable"
          :list="list2"
          group="people"
          @change="log"
          :move="checkMove"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
            v-for="element in list2"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>

    <div class="c-columns">
      <div class="col">
        <rawDisplays class="w-64 mr-1" :value="list1" />
      </div>
      <div class="col">
        <rawDisplays class="w-64" :value="list2" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import rawDisplays from '@/components/rawDisplay.vue'
export default defineComponent({
  name: 'App',
  components: {
    draggable: VueDraggableNext,

    rawDisplays,
  },
  data() {
    return {
      enabled: true,
      list1: [
        { name: 'DRAG FROM HERE', id: 0 },
        { name: 'AAAAA', id: 1 },
        { name: 'BBBBB', id: 2 },
        { name: 'CCCCC', id: 3 },
        { name: 'DDDDD', id: 4 },
      ],
      list2: [
        { name: 'DROP TO HERE', id: 9999999 },
      ],
      dragging: false,
    }
  },
  methods: {
    add() {
      console.log('add')
    },
    replace() {
      console.log('replace')
    },
    checkMove(event) {
      console.log('checkMove', event.draggedContext)
      console.log('Future index: ' + event.draggedContext.futureIndex)
    },
    log(event) {
      const { moved, added } = event

      if (moved) console.log('moved', moved)
      if (added) console.log('added', added, added.element)
    },
  },
})
</script>
<style>
.item-attribute {
  padding: 10px;
  border: 1px solid black;
}
.clone-grid {
  display: flex;
}
</style>