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
    for (const module in store) {
      useProvide(store[module])
    }
  }
})
</script>

<style>
:root {
  /* color palettes */
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6d49cb;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #5e5e5e;
  --gray-dark: #404040;
  --primary: #007bff;
  --secondary: #f0f0f0;
  --success: #108548;
  --info: #1f75cb;
  --warning: #ab6100;
  --danger: #dd2b0e;
  --light: #dbdbdb;
  --dark: #404040;
}
</style>
