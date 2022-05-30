<template>
  <div class="china-map"></div>
</template>

<script lang="ts" setup>
import { geoCoordMap } from '@/json/geoMap'
import { mapData } from './mapData'
import getChartOptions from '@/utils/getChartOptions'
import { title, tooltip, bmap } from './chartData'

const echarts = inject('echarts') as any
echarts.registerMap('China', geoCoordMap)
const baseOpiton = getChartOptions(title, tooltip)
onMounted(() => {
  nextTick(() => {
    toSetOption()
  })
})
const convertData = function (data: any) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
const series = [
  {
    name: 'pm2.5',
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: convertData(mapData),
    symbolSize: function (val: any) {
      return val[2] / 10
    },
    encode: {
      value: 2
    },
    label: {
      formatter: '{b}',
      position: 'right',
      show: false
    },
    emphasis: {
      label: {
        show: true
      }
    }
  },
  {
    name: 'Top 5',
    type: 'effectScatter',
    coordinateSystem: 'bmap',
    data: convertData(
      mapData
        .sort(function (a, b) {
          return b.value - a.value
        })
        .slice(0, 6)
    ),
    symbolSize: function (val: any) {
      return val[2] / 10
    },
    encode: {
      value: 2
    },
    showEffectOn: 'render',
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      formatter: '{b}',
      position: 'right',
      show: true
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: '#333'
    },
    emphasis: {
      scale: true
    },
    zlevel: 1
  }
]
const totalOptions = {
  ...baseOpiton,
  bmap,
  series
}
const toSetOption = () => {
  let myChart = echarts.init(document.querySelector('.china-map'))
  console.log('totalOptions', totalOptions)

  totalOptions && myChart.setOption(totalOptions)
}
</script>
<style scoped lang="scss">
.china-map {
  width: 800px;
  height: 600px;
}
</style>
