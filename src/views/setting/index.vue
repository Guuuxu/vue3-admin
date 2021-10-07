<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let title = ref('设置')
</script>
