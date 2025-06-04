<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>TimePicker 时间选择器</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-time-picker v-model="value1" placeholder="Arbitrary time" />
      <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time" />
      <el-time-picker
        v-model="value3"
        is-range
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      />
      <el-time-picker
        v-model="value4"
        is-range
        arrow-control
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time"
      />
      <el-time-select
        v-model="value"
        style="width: 240px"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
      />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const value1 = ref()
const value2 = ref()

const value3 = ref<[Date, Date]>([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
const value4 = ref<[Date, Date]>([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
</script>

<style>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
