<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Switch 开关</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-switch v-model="value1" />
      <el-switch
        v-model="value2"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      />
      <el-switch
        v-model="value1"
        class="mb-2"
        active-text="Pay by month"
        inactive-text="Pay by year"
      />
      <el-switch v-model="value1" :active-icon="Check" :inactive-icon="Close" />
      <el-switch v-model="value1" disabled />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
