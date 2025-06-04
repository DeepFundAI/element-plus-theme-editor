<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Message 消息提示</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-button :plain="true" @click="open2">Success</el-button>
      <el-button :plain="true" @click="open3">Warning</el-button>
      <el-button :plain="true" @click="open1">Message</el-button>
      <el-button :plain="true" @click="open4">Error</el-button>

      <el-button :plain="true" @click="open5">Success-Pain</el-button>
      <el-button :plain="true" @click="open6">Warning-Pain</el-button>
      <el-button :plain="true" @click="open7">Message-Pain</el-button>
      <el-button :plain="true" @click="open8">Error-Pain</el-button>
    </div>
  </el-card>
</template>
<style scoped>
.el-button + .el-button {
  margin: 0px;
}
</style>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const open1 = () => {
  ElMessage('This is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning'
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}
const open5 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    plain: true
  })
}
const open6 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    plain: true
  })
}
const open7 = () => {
  ElMessage({
    message: 'This is a message.',
    type: 'info',
    plain: true
  })
}
const open8 = () => {
  ElMessage({
    message: 'Oops, this is a error message.',
    type: 'error',
    plain: true
  })
}
</script>
