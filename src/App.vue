<script setup lang="ts">
import * as echarts from 'echarts'
provide('echarts', echarts)
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './common/index.scss';
body {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* 100vh让body的高度与视口一样高 */
  height: 100vh;
  /* margin + overflow 用于隐藏 */
  /* margin: 0;
  overflow: hidden; */
  ol,
  ul {
    list-style: none;
  }
}

#app {
  width: 100%;
  min-height: 100%;
  background-color: #e2e2e2;
}
</style>
