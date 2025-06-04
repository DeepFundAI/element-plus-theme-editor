<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Avatar 头像</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-avatar :size="50" :src="circleUrl" />
      <el-avatar v-for="size in sizeList" :key="size" :size="size" :src="circleUrl" />
      <el-avatar shape="square" :size="50" :src="squareUrl" />
      <el-avatar
        v-for="size in sizeList"
        :key="size"
        shape="square"
        :size="size"
        :src="squareUrl"
      />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
