<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProvide } from '@/utils/provider'
import userStore from '@/store/modules/user'

export default defineComponent({
  name: 'App',
  setup: () => useProvide(userStore)
})
</script>
