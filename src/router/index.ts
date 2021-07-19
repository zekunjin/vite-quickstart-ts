import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import authRoutes from './modules/auth.routes'

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
  },

  ...authRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
