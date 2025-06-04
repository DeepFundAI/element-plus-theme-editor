<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Input 输入框</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-input v-model="input" style="width: 240px" placeholder="Please input" />
      <el-input v-model="input" style="width: 240px" disabled placeholder="Please input" />
      <el-input
        v-model="input"
        style="width: 240px"
        type="password"
        placeholder="Please input password"
        show-password
      />
      <el-input-number v-model="num" :min="1" :max="10" />
      <el-input-number v-model="num" :disabled="true" />
      <el-input v-model="input1" style="max-width: 600px" placeholder="Please input">
        <template #prepend>Http://</template>
      </el-input>

      <el-input v-model="input2" style="max-width: 600px" placeholder="Please input">
        <template #append>.com</template>
      </el-input>

      <el-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>

      <el-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </el-input>
      <el-input
        v-model="textarea"
        style="width: 240px"
        :rows="2"
        type="textarea"
        placeholder="Please input"
      />
      <el-input
        v-model="text"
        style="width: 240px"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
      />
      <el-input
        v-model="textarea"
        maxlength="30"
        style="width: 240px"
        placeholder="Please input"
        show-word-limit
        type="textarea"
      />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
const text = ref('')
const textarea = ref('')
const num = ref(1)
</script>
