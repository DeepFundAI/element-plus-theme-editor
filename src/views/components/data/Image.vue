<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Image 图片</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <div class="demo-image w-full">
        <div v-for="fit in fits" :key="fit" class="block">
          <span class="demonstration">{{ fit }}</span>
          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
