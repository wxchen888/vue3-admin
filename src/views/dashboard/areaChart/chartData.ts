export const title = {
  text: '一周趋势图',
  top: '10',
  left: 'center'
}
export const tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'cross',
    label: {
      backgroundColor: '#6a7985'
    }
  }
}
export const legend = {
  data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
  top: 40
}
export const color = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00']
export const toolbox = {
  feature: {
    saveAsImage: {}
  }
}
export const xAxis = [
  {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
]
export const yAxis = [
  {
    type: 'value'
  }
]
