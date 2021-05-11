import { RouteView } from '@/views/layouts'

export default [
  {
    path: '/auth',
    component: RouteView,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/login/index.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/register/index.vue')
      }
    ]
  }
]
