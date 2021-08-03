import { AxiosRequestConfig } from 'axios'
import AuthService from '@/services/auth.service'
import { Storage } from '@/constants'

export const setToken = (config: AxiosRequestConfig) => {
  const token: string = AuthService.getToken()
  if (token) {
    config.headers[Storage.ACCESS_TOKEN] = token
  }
  return config
}
