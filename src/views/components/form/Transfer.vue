<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Transfer 穿梭框</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-transfer v-model="value" :data="data" />

      <el-transfer
        v-model="value"
        filterable
        :filter-method="filterMethod"
        filter-placeholder="State Abbreviations"
        :data="data"
      />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
  initial: string
}

const generateData = () => {
  const data: Option[] = []
  const states = [
    'California',
    'Illinois',
    'Maryland',
    'Texas',
    'Florida',
    'Colorado',
    'Connecticut '
  ]
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
      disabled: index % 4 === 0
    })
  })
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])

const filterMethod = (query, item) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}
</script>
<style>
.el-transfer .el-button + .el-button {
  margin-left: 12px;
}
</style>
