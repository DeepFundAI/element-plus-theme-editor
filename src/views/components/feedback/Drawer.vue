<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Drawer 抽屉</span>
      </div>
    </template>
    <el-radio-group v-model="direction">
      <el-radio value="ltr">left to right</el-radio>
      <el-radio value="rtl">right to left</el-radio>
      <el-radio value="ttb">top to bottom</el-radio>
      <el-radio value="btt">bottom to top</el-radio>
    </el-radio-group>

    <el-button type="primary" style="margin-left: 16px" @click="drawer = true"> open </el-button>
    <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
      with footer
    </el-button>

    <el-drawer
      v-model="drawer"
      title="I am the title"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>
    <el-drawer v-model="drawer2" :direction="direction">
      <template #header>
        <h4>set title by slot</h4>
      </template>
      <template #default>
        <div>
          <el-radio v-model="radio1" value="Option 1" size="large">Option 1</el-radio>
          <el-radio v-model="radio1" value="Option 2" size="large">Option 2</el-radio>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">cancel</el-button>
          <el-button type="primary" @click="confirmClick">confirm</el-button>
        </div>
      </template>
    </el-drawer>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message-box/style/css'
const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
