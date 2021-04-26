<template>
  <suspense>
    <hello-world />
    <template #fallback>
      <span>loading...</span>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'account',

  components: {
    HelloWorld
  }
})
</script>
