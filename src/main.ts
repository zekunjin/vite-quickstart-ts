import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import filters from './core/filters'

router.beforeEach((to, from, next) => {
  next()
})

const app = createApp(App)
app.config.globalProperties.$filters = filters
app.use(router).mount('#app')
