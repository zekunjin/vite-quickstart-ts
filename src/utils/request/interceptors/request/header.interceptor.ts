import { AxiosRequestConfig } from 'axios'
import { Storage } from '@/constants'
import AuthService from '@/modules/auth/auth.service'
import AuthController from '@/modules/auth/auth.controller'

const authService = new AuthService()
const authController = new AuthController(authService)

export const setToken = (config: AxiosRequestConfig) => {
  const token: string = authController.getToken()
  if (token) {
    config.headers[Storage.ACCESS_TOKEN] = token
  }
  return config
}
