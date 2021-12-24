import { AxiosRequestConfig } from 'axios'
import { Storage } from '@/constants'
import ls from '@/utils/storage'

export const setToken = (config: AxiosRequestConfig) => {
  const token: string = ls.get(Storage.ACCESS_TOKEN)
  if (token) {
    config.headers[Storage.ACCESS_TOKEN] = token
  }
  return config
}
