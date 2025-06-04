<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Radio 单选框</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-radio-group v-model="radio1" class="ml-4">
        <el-radio value="New York" size="large">Option 1</el-radio>
        <el-radio value="Washington" size="large">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio2" class="ml-4">
        <el-radio value="New York">Option 1</el-radio>
        <el-radio value="Washington">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" class="ml-4">
        <el-radio value="New York" size="small">Option 1</el-radio>
        <el-radio value="Washington" size="small">Option 2</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" disabled class="ml-4">
        <el-radio value="New York" size="small">Option 1</el-radio>
        <el-radio value="Washington" size="small">Option 2</el-radio>
      </el-radio-group>
    </div>

    <div class="flex gap-2 flex-wrap mt-1">
      <el-radio-group v-model="radio1" size="large">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button label="Washington" value="Washington" />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>

      <el-radio-group v-model="radio2">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button label="Washington" value="Washington" />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>

      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="New York" value="New York" />
        <el-radio-button label="Washington" value="Washington" disabled />
        <el-radio-button label="Los Angeles" value="Los Angeles" />
        <el-radio-button label="Chicago" value="Chicago" />
      </el-radio-group>
    </div>
    <div class="flex gap-2 flex-wrap mt-1">
      <el-radio-group v-model="radio1">
        <el-radio value="New York" size="large" border>Option A</el-radio>
        <el-radio value="Washington" size="large" border>Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio2">
        <el-radio value="New York" border>Option A</el-radio>
        <el-radio value="Washington" border>Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio3" size="small">
        <el-radio value="New York" border>Option A</el-radio>
        <el-radio value="Washington" border disabled>Option B</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radio4" size="small" disabled>
        <el-radio value="New York" border>Option A</el-radio>
        <el-radio value="Washington" border>Option B</el-radio>
      </el-radio-group>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
const radio4 = ref('New York')
</script>
