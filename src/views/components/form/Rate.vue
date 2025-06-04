<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Rate 评分</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-rate v-model="value1" />
      <el-rate v-model="value2" :colors="colors" />
      <el-rate v-model="value" allow-half />
      <el-rate
        v-model="value"
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
        show-text
      />
      <el-rate
        v-model="value"
        :icons="icons"
        :void-icon="ChatRound"
        :colors="['#409eff', '#67c23a', '#FF9900']"
      />
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points"
      />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ChatDotRound, ChatLineRound, ChatRound } from '@element-plus/icons-vue'

const value = ref(3.7)
const value1 = ref(null)
const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
const icons = [ChatRound, ChatLineRound, ChatDotRound] // same as { 2: ChatRound, 4: { value: ChatLineRound, excluded: true }, 5: ChatDotRound }
</script>
