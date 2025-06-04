<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Progress 进度条</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <div class="demo-progress w-full">
        <el-progress :percentage="50" />
        <el-progress :percentage="100" :format="format" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
      </div>
      <div class="demo-progress w-full">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
      </div>
      <div class="demo-progress w-full">
        <el-progress type="circle" :percentage="0" />
        <el-progress type="circle" :percentage="25" />
        <el-progress type="circle" :percentage="100" status="success" />
        <el-progress type="circle" :percentage="70" status="warning" />
        <el-progress type="circle" :percentage="50" status="exception" />
      </div>
      <div class="demo-progress w-full">
        <el-progress :percentage="50" :indeterminate="true" />
        <el-progress :percentage="100" :format="format" :indeterminate="true" />
        <el-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
        <el-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" />
        <el-progress :percentage="50" status="exception" :indeterminate="true" />
      </div>
      <div class="demo-progress w-full">
        <el-progress :percentage="50" :stroke-width="15" striped />
        <el-progress :percentage="30" :stroke-width="15" status="warning" striped striped-flow />
        <el-progress
          :percentage="100"
          :stroke-width="15"
          status="success"
          striped
          striped-flow
          :duration="10"
        />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
