import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

router.beforeEach((to, from, next) => {
  next()
})

createApp(App).use(router).mount('#app')
