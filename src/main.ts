import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import filters from './core/filters'

router.beforeEach((to, from, next) => {
  next()
})

createApp(App).use(router).use(filters).mount('#app')
