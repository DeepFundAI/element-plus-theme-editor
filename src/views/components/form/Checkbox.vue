<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Checkbox 多选框</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />

      <el-checkbox v-model="checked3" label="Option 1" />
      <el-checkbox v-model="checked4" label="Option 2" />

      <el-checkbox v-model="checked5" label="Option 1" size="small" />
      <el-checkbox v-model="checked6" label="Option 2" size="small" />

      <el-checkbox v-model="checked7" label="Option 1" size="small" disabled />
      <el-checkbox v-model="checked8" label="Option 2" size="small" disabled />
    </div>
    <div class="flex gap-2 flex-wrap mt-1">
      <el-checkbox v-model="checked1" label="Option1" size="large" border />
      <el-checkbox v-model="checked2" label="Option2" size="large" border />

      <el-checkbox v-model="checked3" label="Option1" border />
      <el-checkbox v-model="checked4" label="Option2" border />

      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="Option1" value="Shanghai" border />
        <el-checkbox label="Option2" value="Beijing" border />
      </el-checkbox-group>

      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="Option1" value="Shanghai" border disabled />
        <el-checkbox label="Option2" value="Beijing" border disabled />
      </el-checkbox-group>
    </div>
    <div class="flex gap-2 flex-wrap mt-1">
      <el-checkbox-group v-model="checkboxGroup1" size="large">
        <el-checkbox-button v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </el-checkbox-button>
      </el-checkbox-group>

      <el-checkbox-group v-model="checkboxGroup2">
        <el-checkbox-button v-for="city in cities" :key="city" :value="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>

      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button
          v-for="city in cities"
          :key="city"
          :value="city"
          :disabled="city === 'Beijing'"
          >{{ city }}</el-checkbox-button
        >
      </el-checkbox-group>

      <el-checkbox-group v-model="checkboxGroup4" size="small" disabled>
        <el-checkbox-button v-for="city in cities" :key="city" :value="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const checked8 = ref(false)

const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>
