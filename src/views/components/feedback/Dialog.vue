<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Dialog 对话框</span>
      </div>
    </template>
    <el-button plain @click="dialogVisible = true"> Click to open the Dialog </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>

    <el-button plain @click="dialogVisible1 = true"> Open a draggable Dialog </el-button>
    <el-dialog v-model="dialogVisible1" title="Tips" width="500" draggable>
      <span>It's a draggable Dialog</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible1 = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible1 = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import 'element-plus/es/components/message-box/style/css'
const dialogVisible = ref(false)
import { ElMessageBox } from 'element-plus'

const dialogVisible1 = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
