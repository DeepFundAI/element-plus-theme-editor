<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Popconfirm 气泡确认框</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-popconfirm title="Are you sure to delete this?">
        <template #reference>
          <el-button>Delete</el-button>
        </template>
      </el-popconfirm>
    </div>
  </el-card>
</template>
