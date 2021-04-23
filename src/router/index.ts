import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/account/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
