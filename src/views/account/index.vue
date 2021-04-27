<template>
  <suspense>
    <hello-world />
    <template #fallback>
      <span>loading...</span>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import validate from '@/utils/validate'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'account',

  components: {
    HelloWorld
  },

  setup() {
    onMounted(() => {
      validate({
        name: [{ required: true, message: 'required error message' }]
      })({
        name: ''
      })
        .then((res) => {
          console.log(`validate: ${res}`)
        })
        .catch((err) => {
          console.log(`invalidate: ${err}`)
        })
    })
  }
})
</script>
