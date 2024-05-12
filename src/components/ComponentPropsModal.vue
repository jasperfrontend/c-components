<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ componentName }}</h2>
      <p><a href="/" target="_blank">View all options</a></p>
      <div v-for="propName in Object.keys(componentProps)" :key="propName">
        <label :for="propName">{{ propName }}:</label>
        <input :id="propName" v-model="props[propName]" />
      </div>
      <button @click="confirmProps">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentName: String,
    componentProps: Object
  },
  data() {
    return {
      props: {}
    };
  },
  methods: {
    confirmProps() {
      console.log(this.props);
      this.$emit('props-confirmed', this.props);
    }
  },
  emits: ['props-confirmed'] // Declare the emitted event
};
</script>

<style scoped>
.modal {
  background: #151515;
  background: rgba(15,15,15,.5);
  position: fixed;
  top: var(--size-3);
  z-index: 10;
  top: var(--size-12);
  left: var(--size-2);
  width: var(--size-15);
}
.modal-content {
  color: var(--gray-1);
  padding: var(--size-2);
}
.modal-content a {
  color: var(--yellow-4);
}
</style>
