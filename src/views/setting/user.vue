<template>
  <div class="user-manage-view">
    <el-table :data="tableList">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="area" label="地址"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template #default="{ row }">
          <img v-show="row.avatar" :src="row.avatar" width="40" height="40" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button type="primary" size="small" icon="el-icon-edit"
            >修改
          </el-button>
          <el-popconfirm
            title="确定删除吗?"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="deleteUser(row)"
          >
            <template #reference>
              <el-button type="danger" size="small" icon="el-icon-delete"
                >删除
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive } from 'vue'
import { getUserInfo } from '@/api/user'

let tableList = reactive([])

onBeforeMount(() => {
  //请求mock api
  fetch('/api/get')
    .then((res) => res.json())
    .then((data) => {
      console.log('mockdata', data)
    })
  getUserList()
})

/**
 * 获取表格列表
 */
const getUserList = async () => {
  const res = await getUserInfo() // 解构赋值
  tableList.push(...res.data)
}
const deleteUser = (row) => {
  const index = tableList.findIndex((item) => item.id === row.id)
  tableList.splice(index, 1)
  console.log(tableList)
}
</script>

<style></style>
