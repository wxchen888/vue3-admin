<template>
  <div ref="nameStatic" class="name-static"></div>
</template>

<script lang="ts" setup>
import { getData, title, tooltip } from './getData'
import getChartOptions from '@/utils/getChartOptions'

const echarts = inject('echarts') as any

const baseOption = getChartOptions(title, tooltip)

const data = getData(50)
const legend = {
  type: 'scroll',
  orient: 'vertical',
  right: 10,
  top: 20,
  bottom: 20,
  data: data.legendData
}
const series = [
  {
    name: '姓名',
    type: 'pie',
    radius: '55%',
    center: ['40%', '50%'],
    data: data.seriesData,
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
]
const options = {
  ...baseOption,
  legend,
  series
}
onMounted(() => {
  nextTick(() => {
    toSetOption()
  })
})
const toSetOption = () => {
  const myChart = echarts.init(document.querySelector('.name-static'))
  myChart.setOption(options)
}
</script>
<style scoped lang="scss">
.name-static {
  width: 800px;
  height: 450px;
}
</style>
