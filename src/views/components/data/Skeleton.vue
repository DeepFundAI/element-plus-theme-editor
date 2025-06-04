<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Skeleton 骨架屏</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-skeleton class="w-full" />
      <el-skeleton style="--el-skeleton-circle-size: 100px">
        <template #template>
          <el-skeleton-item variant="circle" />
        </template>
      </el-skeleton>
    </div>
    <el-skeleton class="mt-1" :rows="5" animated />
  </el-card>
</template>
