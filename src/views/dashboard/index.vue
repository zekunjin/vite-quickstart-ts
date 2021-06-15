<template>
  <div class="user-container">
    <span class="username">username: {{ userState.username }}</span>
  </div>
  <div>current route: {{ routeName }}</div>
  <router-link :to="{ name: 'account' }">router link account</router-link>
  <div @click="naviAccount">javascript link account</div>
  <div>date format: {{ $filters.moment('2020.01.01') }}</div>

  <button @click="login">login</button>
  <button @click="userActions.login()">set token</button>
  <button @click="userActions.logout()">logout</button>
  <button @click="setLanguage(EN_US)">set en-us lang</button>
  <button @click="setLanguage(ZH_CN)">set zh-cn lang</button>

  <div>{{ $t('message', { msg: 'i18n' }) }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useInject } from '@/utils/provider'
import store from '@/store'
import AjaxAuthService from '@/services/ajax/auth'
import { EN_US, ZH_CN } from '@/constants'

export default defineComponent({
  name: 'dashboard',

  setup() {
    const router = useRouter()
    const { name: routeName } = useRoute()
    const { state: userState, actions: userActions } = useInject(store.user)
    const { actions: appActions } = useInject(store.app)

    const login = () => {
      AjaxAuthService.login({
        username: 'USERNAME',
        password: 'PASSWORD'
      }).then(({ data }) => {
        console.log(data)
      })
    }

    const naviAccount = () => {
      router.push({ name: 'account' })
    }

    const setLanguage = (locale: string) => {
      appActions.setLanguage(locale)
    }

    return {
      EN_US,
      ZH_CN,
      routeName,
      userState,
      userActions,
      login,
      naviAccount,
      setLanguage
    }
  }
})
</script>

<style scoped>
.user-container .username {
  color: var(--blue);
}
</style>
