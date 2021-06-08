<template>
  <div>async hello world component</div>
  <div>{{ state }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useInject } from '@/utils/provider'
import store from '@/store'

export default defineComponent({
  name: 'HelloWorld',

  setup() {
    const { state } = useInject(store.user)

    return { state }
  }
})
</script>
