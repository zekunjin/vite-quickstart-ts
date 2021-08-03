import axios, { AxiosRequestConfig } from 'axios'
import { setToken } from './interceptors/request/header.interceptor'
import { invalidateToken } from './interceptors/response/auth.interceptor'
import { setNotification } from './interceptors/response/notification.interceptor'

export interface IInterceptor {
  request: ((config: AxiosRequestConfig) => AxiosRequestConfig)[]
  response: ((error: any) => void)[]
}

export interface IResponseError {
  status: string
  data: any
  [key: string]: any
}

export class VueAxios {
  public service
  public interceptors: IInterceptor = {
    request: [],
    response: []
  }

  constructor(options: AxiosRequestConfig) {
    this.service = axios.create(options)
  }

  useRequestInterceptor(
    func: (config: AxiosRequestConfig) => AxiosRequestConfig
  ) {
    this.interceptors.request.push(func)
    return this
  }

  useResponseInterceptor(func: (error: any) => void) {
    this.interceptors.response.push(func)
    return this
  }

  end() {
    const _this = this

    _this.service.interceptors.request.use(
      (config) => {
        _this.interceptors.request.forEach((func) => {
          Object.assign(config, func(config))
        })
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
    _this.service.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        const { response } = error
        _this.interceptors.response.forEach((func) => {
          func(response)
        })
        return Promise.reject(error)
      }
    )
  }
}

const vueAxios = new VueAxios({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 6000
})

vueAxios.useRequestInterceptor(setToken)
vueAxios.useResponseInterceptor(invalidateToken)
vueAxios.useResponseInterceptor(setNotification)
vueAxios.end()

export default vueAxios.service
