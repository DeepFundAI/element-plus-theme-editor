<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Notification 通知</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-button plain @click="open1"> Closes automatically </el-button>
      <el-button plain @click="open2"> Won't close automatically </el-button>
      <el-button plain @click="open3"> Success </el-button>
      <el-button plain @click="open4"> Warning </el-button>
      <el-button plain @click="open5"> Info </el-button>
      <el-button plain @click="open6"> Error </el-button>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'

const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder')
  })
}

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0
  })
}

const open3 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success'
  })
}

const open4 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning'
  })
}

const open5 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info'
  })
}

const open6 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error'
  })
}
</script>
<style scoped>
.el-button + .el-button {
  margin: 0px;
}
</style>
