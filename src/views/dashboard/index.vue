<template>
  <button @click="auth.login()">interactor</button>
  <div>user state: {{ store.state.user }}</div>
  <div>app state: {{ store.state.app }}</div>
  <div>current route: {{ routeName }}</div>
  <router-link :to="{ name: 'account' }">router link account</router-link>
  <div @click="naviAccount">javascript link account</div>
  <!-- <div>date format: {{ $filters.moment('2020.01.01') }}</div> -->
  <div>color scheme: {{ store.state.app.colorScheme }}</div>
  <div class="primary-color">
    <span>primary color</span>
  </div>

  <div>
    <div
      v-for="item in colors"
      :key="item"
      class="color-select-block"
      :style="{ backgroundColor: item }"
      @click="store.dispatch('app/setPrimaryColor', item)"
    />
  </div>

  <button @click="login">login</button>
  <button @click="setToken()">set token</button>
  <button @click="store.dispatch('app/setLanguage', Locale.EN_US)">
    set en-us lang
  </button>
  <button @click="store.dispatch('app/setLanguage', Locale.ZH_CN)">
    set zh-cn lang
  </button>

  <div>{{ $t('message', { msg: 'i18n' }) }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import { Locale } from '@/constants'
import { useAggregate } from '@/utils/metadata'
import colors from '@/core/theme/colors'
import Dashboard from './dashboard.aggregate'

export default defineComponent({
  name: 'dashboard',

  setup() {
    const { auth } = useAggregate(Dashboard)
    const router = useRouter()
    const store = useStore()
    const { name: routeName } = useRoute()

    const login = async () => {
      await auth.login('USERNAME', 'PASSWORD')
    }

    const setToken = () => {
      auth.setToken('TOKEN')
    }

    const naviAccount = () => {
      router.push({ name: 'account' })
    }

    return {
      Locale,
      auth,
      routeName,
      store,
      colors,
      login,
      setToken,
      naviAccount
    }
  }
})
</script>

<style lang="postcss" scoped>
.primary-color {
  & span {
    color: var(--primary-color);
    font-weight: 1000;
  }
}

.color-select-block {
  width: 100px;
  height: 100px;
  display: inline-block;
  cursor: pointer;
}
</style>
