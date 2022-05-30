import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建一个 axios 实例
let token = localStorage.getItem('USER_TOKEN')
if (token !== undefined && token !== null) {
  token = JSON.parse(token)
} else {
  token = ''
}
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // 所有的请求地址前缀部分
  timeout: 6000, // 请求超时时间毫秒

  headers: {
    // 设置后端需要的传参类型
    'Content-Type': 'application/json;charset=UTF-8',
    token: token!
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  switch (response.status) {
    case 200:
      break
    case 401:
      break
    case 403:
      break
    case 404:
      ElMessage.error('请求的资源不存在')
      break
    case 500:
      ElMessage.error('连接超时')
      break
    default:
      ElMessage.error('连接错误')
  }
  return response
})

export default service
