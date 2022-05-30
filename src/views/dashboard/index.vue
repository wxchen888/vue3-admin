<template>
  <div class="dashboard">
    <div class="top">
      <div class="chart">
        <areaChart />
      </div>
      <div class="map">
        <!-- <mapChart /> -->
        <nameStatic />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import areaChart from './areaChart/index.vue'
// import mapChart from './map/index.vue' //使用地图需要进行额外配置
import nameStatic from './nameStatic/index.vue'
</script>
<style scoped lang="scss">
.dashboard {
  background-color: skyblue;
  height: 100%;
  .top {
    display: flex;
    justify-content: space-around;
    .map {
      margin-top: 10px;
    }
  }
}
</style>
