<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-text class="mx-1">Default</el-text>
      <el-text class="mx-1" type="primary">Primary</el-text>
      <el-text class="mx-1" type="success">Success</el-text>
      <el-text class="mx-1" type="info">Info</el-text>
      <el-text class="mx-1" type="warning">Warning</el-text>
      <el-text class="mx-1" type="danger">Danger</el-text>
    </div>
  </el-card>
</template>
