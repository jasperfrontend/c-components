import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import GridBuilderView from '@/views/GridBuilderView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/builder', component: GridBuilderView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
