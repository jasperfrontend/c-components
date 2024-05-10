import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import GridBuilderView from '@/views/GridBuilderView.vue'
import TemplateOne from '@/views/TemplateOne.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/builder', component: GridBuilderView },
  { path: '/1', component: TemplateOne },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
