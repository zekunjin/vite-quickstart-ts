<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'account',

  setup() {
    const msg = ref('account')
    return { msg }
  }
})
</script>
