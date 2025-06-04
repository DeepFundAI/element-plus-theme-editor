<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Text 文本</span>
      </div>
    </template>
    <el-steps class="w-full" :active="active" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-steps class="mb-4 w-full" :space="200" :active="active" simple>
      <el-step title="Step 1" :icon="Edit" />
      <el-step title="Step 2" :icon="UploadFilled" />
      <el-step title="Step 3" :icon="Picture" />
    </el-steps>

    <el-steps direction="vertical" style="height: 200px" :active="active">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
