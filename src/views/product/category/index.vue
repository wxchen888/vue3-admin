<template>
  <div class="product-list" shadow="always" body-style="{padding:'20px'}">
    <el-card style="width: 100%; height: 100%; margin: 20px 30px">
      <div>
        <el-icon class="is-loading">
          <Loading />
        </el-icon>
        <el-button type="primary">
          <el-icon style="vertical-align: middle">
            <Search />
          </el-icon>
          <span style="vertical-align: middle"> 搜索 </span>
        </el-button>
      </div>
      <div style="font-size: 20px">
        <!-- 由于SVG图标默认不携带任何属性 -->
        <!-- 你需要直接提供它们 -->
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <Share style="width: 1em; height: 1em; margin-right: 8px" />
        <Delete style="width: 1em; height: 1em; margin-right: 8px" />
        <Search style="width: 1em; height: 1em; margin-right: 8px" />
      </div>
      <!-- 响应式布局 -->
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          >1
          <div class="grid-content bg-purple"
        /></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          >2
          <div class="grid-content bg-purple-light"
        /></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          >3
          <div class="grid-content bg-purple"
        /></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          >4
          <div class="grid-content bg-purple-light"
        /></el-col>
      </el-row>
      <!-- 评分 -->
      <el-rate
        v-model="value"
        :icons="icons"
        :void-icon="ChatRound"
        :colors="['#409eff', '#67c23a', '#FF9900']"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
//使用svg图标

//使用rate评分
import { ChatDotRound, ChatLineRound, ChatRound } from '@element-plus/icons-vue'
const value = ref()
const icons = [ChatRound, ChatLineRound, ChatDotRound]
watchEffect(() => {
  console.log('value', value)
})
</script>
<style scoped lang="scss">
.product-list {
  width: 95%;
  height: 90%;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
