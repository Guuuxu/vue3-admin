<template>
  <div class="navbar">
    <Humburger
      class="hamburger-container"
      :is-active="opened"
      @toggleClick="toggleSideBar"
    />
    <Breadcrumb class="breadcrumb-container" />
  </div>
</template>

<script setup>
import Humburger from '@/components/Humburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const opened = computed(() => store.state.app.sidebar.open)
const toggleSideBar = () => {
  store.dispatch('app/toggleSidebar')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  @include fb(flex-start);
  .hamburger-container {
    height: 50px;
    @include fb();
  }
}
</style>
