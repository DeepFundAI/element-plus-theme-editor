<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Link 链接</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-link href="https://element-plus.org" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>
    <div class="flex gap-2 flex-wrap mt-1">
      <el-link disabled>default</el-link>
      <el-link type="primary" disabled>primary</el-link>
      <el-link type="success" disabled>success</el-link>
      <el-link type="warning" disabled>warning</el-link>
      <el-link type="danger" disabled>danger</el-link>
      <el-link type="info" disabled>info</el-link>
    </div>
  </el-card>
</template>
