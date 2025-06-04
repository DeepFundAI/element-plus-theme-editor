<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>DatePicker 日期选择器</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-radio-group v-model="size" label="size control">
        <el-radio-button value="large">large</el-radio-button>
        <el-radio-button value="default">default</el-radio-button>
        <el-radio-button value="small">small</el-radio-button>
      </el-radio-group>
    </div>
    <div class="flex gap-2 flex-wrap mt-1">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
      </div>
      <div class="block">
        <span class="demonstration">Picker with quick options</span>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          :size="size"
        />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date()
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>
