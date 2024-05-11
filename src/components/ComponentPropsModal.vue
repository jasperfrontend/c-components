<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ componentName }}</h2>
      <p><a href="/" target="_blank">View all options</a></p>
      <!-- Render input fields for each prop -->
      <div v-for="prop in componentProps" :key="prop">
        <label :for="prop">{{ prop }}:</label>
        <input :id="prop" v-model="props[prop]" />
      </div>
      <button @click="confirmProps">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentName: String,
    componentProps: Array
  },
  data() {
    return {
      props: {}
    };
  },
  methods: {
    confirmProps() {
      this.$emit('props-confirmed', this.props);
    }
  }
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
