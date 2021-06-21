<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProvide, IModule } from '@/utils/provider'
import store from '@/store'

export default defineComponent({
  name: 'App',
  setup: () => {
    Object.values(store).forEach((e: () => IModule) => {
      useProvide(e)
    })
  }
})
</script>

<style>
body {
  margin: 0;
}
</style>
