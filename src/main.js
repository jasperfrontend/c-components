import '@/assets/main.css'
import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import VueKonva from 'vue-konva';

createApp(App)
.use(router)
.use(VueKonva)
.mount('#app')
