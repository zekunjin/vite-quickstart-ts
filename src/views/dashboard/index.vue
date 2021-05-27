<template>
  <div class="user-container">
    <span class="username">username: {{ state.username }}</span>
  </div>
  <div>current route: {{ routeName }}</div>
  <router-link :to="{ name: 'account' }">router link account</router-link>
  <div @click="naviAccount">javascript link account</div>
  <div>date format: {{ $filters.moment('2020.01.01') }}</div>

  <button @click="login">login</button>
  <button @click="actions.login()">set token</button>
  <button @click="actions.logout()">logout</button>

  <div id="micro-vue" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useInject } from '@/utils/provider'
import { user as userStore } from '@/store'
import AjaxAuthService from '@/services/ajax/auth'

export default defineComponent({
  name: 'dashboard',

  setup() {
    const router = useRouter()
    const { name: routeName } = useRoute()
    const { state, actions } = useInject(userStore)

    const login = () => {
      AjaxAuthService.login(
        { username: 'USERNAME', password: 'PASSWORD' },
        { refresh: false }
      )
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {})
    }

    const naviAccount = () => {
      router.push({ name: 'account' })
    }

    return { routeName, state, actions, login, naviAccount }
  }
})
</script>

<style scoped>
.user-container .username {
  color: var(--blue);
}
</style>
