<template>
  <div>{{ state }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useInject } from '@/utils/provider'
import userStore from '@/store/modules/user'

export default defineComponent({
  name: 'account',

  setup() {
    const { state } = useInject(userStore)
    return { state }
  }
})
</script>
