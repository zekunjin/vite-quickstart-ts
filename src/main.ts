import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './core/use'

router.beforeEach((to, from, next) => {
  next()
})

const app = createApp(App)
app.use(router).mount('#app')

export default app
