import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'
import filters from './core/filters'
import theme from './core/theme'

router.beforeEach((to, from, next) => {
  next()
})

createApp(App).use(router).use(i18n).use(filters).use(theme).mount('#app')
