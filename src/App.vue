<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProvide } from '@/utils/provider'
import store from '@/store'

export default defineComponent({
  name: 'App',
  setup: () => {
    useProvide(store.app)
    useProvide(store.user)
  }
})
</script>

<style>
body {
  margin: 0;
}
</style>
