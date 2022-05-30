interface TitleObj {
  text: string
  subtext?: string
  left?: string | number
  top?: string | number
}
interface TooltipObj {
  trigger: string
  axisPointer?: any
  formatter?: any
}
interface LegendObj {
  data: Array<string>
  [propName: string]: any
}
export default function getChartOptions(title: TitleObj, tooltip?: TooltipObj, legend?: LegendObj) {
  const returnObj = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    title,
    tooltip,
    legend
  }
  return returnObj
}
