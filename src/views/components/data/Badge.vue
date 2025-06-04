<template>
  <el-card style="width: 100%" class="mt-2">
    <template #header>
      <div class="card-header">
        <span>Badge 徽章</span>
      </div>
    </template>
    <div class="flex gap-2 flex-wrap">
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" color="green">
        <el-button>custom background</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              replies
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-badge :value="200" :max="99" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge is-dot class="item">query</el-badge>
      <el-badge is-dot class="item">
        <el-button class="share-button" :icon="Share" type="primary" />
      </el-badge>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { CaretBottom, Share } from '@element-plus/icons-vue'
</script>
