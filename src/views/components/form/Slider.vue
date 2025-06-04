<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Text 文本</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-slider v-model="value1" />
      <el-slider v-model="value2" disabled />
      <el-slider v-model="value3" :step="10" show-stops />
      <el-slider v-model="value4" show-input />
      <el-slider v-model="value5" range show-stops :max="10" />
      <el-slider v-model="value" vertical height="200px" />
      <el-slider v-model="value6" range :marks="marks" />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const value = ref(0)
const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref([4, 8])

import type { CSSProperties } from 'vue'

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

const value6 = ref([30, 60])
const marks = reactive<Marks>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA'
    },
    label: '50%'
  }
})
</script>
