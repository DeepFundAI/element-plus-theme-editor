<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Divider 分割线</span>
      </div>
    </template>
    <span
      >I sit at my window this morning where the world like a passer-by stops for a moment, nods to
      me and goes.</span
    >
    <el-divider />
    <span
      >There little thoughts are the rustle of leaves; they have their whisper of joy in my
      mind.</span
    >
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
    <el-divider border-style="dashed" />
    <span>Rain</span>
    <el-divider direction="vertical" />
    <span>Home</span>
    <el-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </el-card>
</template>
<script lang="ts" setup>
import { StarFilled } from '@element-plus/icons-vue'
</script>
