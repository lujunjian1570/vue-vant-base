import axios from 'axios'
import { Toast } from 'vant'
// import store from '@/store'
import { getToken } from '@/utils/auth'
import configSite from '_conf'

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
service.baseURL = process.env.VUE_APP_API_PREFIX // .env中配置的api前缀
console.log(service.baseURL)
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
  config => {
    // 获取token
    const token = getToken()
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      // 处理自定义错误
      handleError(res.code)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // success
      return Promise.resolve(res.data)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)
/**
 * 请求失败后的错误统一处理
 * @param {Number} code 请求失败的状态码
 */
const handleError = code => {
  switch (code) {
    case 401:
      // .....
      break

    default:
      break
  }
}

export default service
