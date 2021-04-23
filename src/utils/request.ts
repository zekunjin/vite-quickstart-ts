import axios from 'axios'
import LocalAuthService from '@/services/local/auth'
import { ACCESS_TOKEN } from '@/store/mutation-types'

interface IAxiosResponseError {
  response: {
    config?: any
    data?: any
    headers?: any
    status: number
    statusText?: string
  }
}

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 6000
})

const err = (error: IAxiosResponseError) => {
  if (error) {
    const { response } = error
    if (response) {
      const { data, status } = error.response
    }
  }

  return Promise.reject(error)
}

service.interceptors.request.use(
  (config) => {
    const token: string = LocalAuthService.getToken()
    if (token) {
      config.headers[ACCESS_TOKEN] = token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use((response) => {
  return response.data
}, err)

export default service
