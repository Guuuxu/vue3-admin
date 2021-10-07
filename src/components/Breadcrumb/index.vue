<template>
  <el-breadcrumb separator="/" class="ml10">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == breadList.length - 1"
        class="no-redirect"
      >
        {{ item.meta.title }}
      </span>
      <router-link v-else :to="item.redirect || item.path">
        {{ item.meta.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { reactive, watch, onMounted } from 'vue'
let breadList = reactive([])
const route = useRoute()
watch(route, () => {
  console.log('route')
  getBreadcrumb()
})

const getBreadcrumb = () => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  if (!isDashboard(matched[0])) {
    matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
  }
  breadList.length = 0
  const list = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
  breadList.push(...list)
  console.log(breadList)
}

const isDashboard = (meta) => {
  const name = meta && meta.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
}
onMounted(() => {
  getBreadcrumb()
})
</script>
<style scoped lang="scss">
.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
