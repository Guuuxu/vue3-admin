<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container"> </sidebar>
    <!--主体内容-->
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import { computed, onBeforeMount, onMounted, onBeforeUnmount, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const classObj = computed(() => {
  return {
    hideSidebar: !store.state.app.sidebar.open,
    openSidebar: store.state.app.sidebar.open,
    withoutAnimation: store.state.app.sidebar.withoutAnimation,
    mobile: store.state.app.device === 'mobile',
  }
})

onBeforeMount(() => {
  window.addEventListener('resize', resizeHandler)
})

onMounted(() => {
  const isMob = isMobile()
  if (isMob) {
    store.dispatch('app/toggleDevice', 'mobile')
    store.dispatch('app/closeSideBar', { withoutAnimation: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})

const mobileWidth = ref(992)
const isMobile = () => {
  const rect = document.body.getBoundingClientRect()
  return rect.width - 1 < mobileWidth.value
}

const resizeHandler = () => {
  if (!document.hidden) {
    const isMob = isMobile()
    store.dispatch('app/toggleDevice', isMob ? 'mobile' : 'desktop')

    if (isMob) {
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
