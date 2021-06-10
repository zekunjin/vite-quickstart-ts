import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import filters from './core/filters'
import i18n from './locals'

router.beforeEach((to, from, next) => {
  next()
})

createApp(App).use(router).use(filters).use(i18n).mount('#app')
