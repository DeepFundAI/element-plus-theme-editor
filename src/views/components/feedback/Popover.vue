<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Popover 气泡卡片</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Hover to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Click to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        ref="popover"
        placement="right"
        title="Title"
        :width="200"
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Focus to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        ref="popover"
        title="Title"
        :width="200"
        trigger="contextmenu"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>contextmenu to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        :visible="visible"
        placement="bottom"
        title="Title"
        :width="200"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button @click="visible = !visible">Manual to activate</el-button>
        </template>
      </el-popover>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
<style scoped>
.el-button + .el-button {
  margin: 0px;
}
</style>
