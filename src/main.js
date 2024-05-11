import '@/assets/main.css'
import "vue-draggable-resizable/style.css";
import { createApp } from 'vue'
import router from '@/router'
import VueDraggableResizable from 'vue-draggable-resizable'
import App from '@/App.vue'

createApp(App)
.use(router)
.component("vue-draggable-resizable", VueDraggableResizable)
.mount('#app')
