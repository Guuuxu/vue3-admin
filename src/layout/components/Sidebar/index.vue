<template>
  <div class="sidebar-container">
    <div class="logo">
      <img class="logo-img" src="@/assets/image/logo.png" alt="logo" />
      <transition name="el-zoom-in-center">
        <h1 v-show="opened" class="logo-text">Vue Element Admin</h1>
      </transition>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :default-active="$route.path"
        :collapse="isCollapse"
        :show-timeout="200"
        :unique-opened="true"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <SidebarItem
          v-for="item in routerList"
          :key="item.path"
          :index="item.path"
          :nav="item"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, ref } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { constantRoutes } from '@/router'

const routerList = reactive([])
const isCollapse = false // 是否水平折叠
const opened = ref(true)
onMounted(() => {
  constantRoutes.forEach((item) => {
    if (item.path === '/') {
      routerList.push(...item.children)
    }
  })
  console.log(routerList)
})
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background-color: #2b2f3a;
  @include fb(center, center);
  .logo-img {
    width: 32px;
    height: 32px;
  }
  .logo-text {
    display: inline-block;
    height: 50px;
    margin-left: 12px;
    font-size: 14px;
    line-height: 50px;
    color: #fff;
  }
}
</style>
