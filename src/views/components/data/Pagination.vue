<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Pagination 分页</span>
      </div>
    </template>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have few pages</div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have more than 7 pages</div>
      <el-pagination layout="prev, pager, next" :total="1000" />
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </el-card>
</template>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
