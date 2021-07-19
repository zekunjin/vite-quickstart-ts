<template>
  <keep-alive v-if="keepAlive">
    <router-view />
  </keep-alive>

  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'RouteView',

  props: {
    keepAlive: {
      type: Boolean,
      default: false
    }
  }
})
</script>
