import axios from 'axios'

interface ApiResponse<T = any> {
  data: T
  code: number
  msg: string
  success: boolean
}

const { VITE_API_URL } = import.meta.env

const api = axios.create({
  baseURL: VITE_API_URL,
  timeout: 30000,
  headers: {},
})

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 对参数进行formData处理
    config.transformRequest = [(data) => {
      const formData = new FormData()
      for (const it in data)
        formData.append(it, data[it])
      return formData
    }]
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    // return response.data
    // if ([201].includes(response.data.code)) {
    if (response.data.code !== 200) {
      window.$dialog?.error({
        title: '错误',
        content: response.data?.msg || '服务器出错',
        positiveText: '好的',
      })
      throw new Error(response.data?.msg || 'Error')
    }
    else {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api.request<any, ApiResponse>
