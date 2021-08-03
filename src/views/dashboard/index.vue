<template>
  <div>user state: {{ userState }}</div>
  <div>app state: {{ appState }}</div>
  <div>current route: {{ routeName }}</div>
  <router-link :to="{ name: 'account' }">router link account</router-link>
  <div @click="naviAccount">javascript link account</div>
  <div>date format: {{ $filters.moment('2020.01.01') }}</div>
  <div>color scheme: {{ appState.colorScheme }}</div>
  <div class="primary-color">
    <span>primary color</span>
  </div>

  <div>
    <div
      v-for="item in colors"
      :key="item"
      class="color-select-block"
      :style="{ backgroundColor: item }"
      @click="appActions.setPrimaryColor(item)"
    />
  </div>

  <button @click="login">login</button>
  <button @click="setToken()">set token</button>
  <button @click="userActions.logout()">logout</button>
  <button @click="appActions.setLanguage(Locale.EN_US)">set en-us lang</button>
  <button @click="appActions.setLanguage(Locale.ZH_CN)">set zh-cn lang</button>

  <div>{{ $t('message', { msg: 'i18n' }) }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useInject } from '@/utils/provider'
import store from '@/store'
import AuthInteractor from '@/interactors/auth.interactor'
import AuthService from '@/services/auth.service'
import { Locale } from '@/constants'
import colors from '@/core/theme/colors'

export default defineComponent({
  name: 'dashboard',

  setup() {
    const router = useRouter()
    const { name: routeName } = useRoute()
    const { state: userState } = useInject(store.user)
    const { state: appState, actions: appActions } = useInject(store.app)

    const login = async () => {
      await AuthInteractor.login({
        username: 'USERNAME',
        password: 'PASSWORD'
      })
    }

    const setToken = () => {
      AuthService.setToken('TOKEN')
    }

    const naviAccount = () => {
      router.push({ name: 'account' })
    }

    return {
      Locale,
      routeName,
      userState,
      appState,
      appActions,
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
