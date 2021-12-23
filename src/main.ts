import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import i18n from './locales'
import core from './core'

router.beforeEach((to, from, next) => {
  next()
})

createApp(App).use(router).use(store, key).use(i18n).use(core).mount('#app')
