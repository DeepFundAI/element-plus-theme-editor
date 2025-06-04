<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-calendar v-model="value" />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>
