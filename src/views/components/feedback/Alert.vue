<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Alert 提示</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-alert title="Success alert" type="success" />
      <el-alert title="Info alert" type="info" />
      <el-alert title="Warning alert" type="warning" />
      <el-alert title="Error alert" type="error" />

      <el-alert title="Success alert" type="success" effect="dark" />
      <el-alert title="Info alert" type="info" effect="dark" />
      <el-alert title="Warning alert" type="warning" effect="dark" />
      <el-alert title="Error alert" type="error" effect="dark" />

      <el-alert
        title="Success alert"
        type="success"
        description="More text description"
        show-icon
      />
      <el-alert title="Info alert" type="info" description="More text description" show-icon />
      <el-alert
        title="Warning alert"
        type="warning"
        description="More text description"
        show-icon
      />
      <el-alert title="Error alert" type="error" description="More text description" show-icon />
    </div>
  </el-card>
</template>
