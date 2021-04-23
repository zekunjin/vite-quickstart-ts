<template>
  <div>{{ store.state.user }}</div>
  <div>current route: {{ routeName }}</div>
  <router-link :to="{ name: 'account' }">router link account</router-link>
  <div @click="naviAccount">javascript link account</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AjaxAuthService from '@/services/ajax/auth'

export default defineComponent({
  name: 'dashboard',

  setup() {
    const store = useStore()
    const router = useRouter()
    const { name: routeName } = useRoute()

    onMounted(() => {
      AjaxAuthService.login({ username: 'USERNAME', password: 'PASSWORD' })
        .then((res) => {})
        .catch((err) => {
          store.dispatch('user/login')
        })
    })

    const naviAccount = () => {
      router.push({ name: 'account' })
    }

    return { store, routeName, naviAccount }
  }
})
</script>
