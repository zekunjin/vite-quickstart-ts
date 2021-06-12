import { App } from 'vue'
import { optionalChaining } from '@/utils/common'
import { ZH_CN, EN_US } from '@/constants'
import LocalConfigService from '@/services/local/config'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

export interface ILocaleMessages {
  [key: string]: string | ILocaleMessages
}

export interface II18nOptions {
  locale: string
  messages: ILocaleMessages
}

const messages: ILocaleMessages = {
  [ZH_CN]: { ...zhCN },
  [EN_US]: { ...enUS }
}

const defaultLang = LocalConfigService.getLanguage() || EN_US

export class I18n {
  public locale: string = ''
  public messages: ILocaleMessages = {}

  constructor({ locale, messages }: II18nOptions) {
    this.locale = locale
    this.messages = messages
  }

  install(app: App<Element>) {
    app.config.globalProperties.$t = (keyOptions: string) => {
      return optionalChaining(
        this.messages,
        this.locale,
        ...keyOptions.split('.')
      )
    }
  }

  setLocale(locale: string) {
    this.locale = locale
  }
}

export const createI18n = (options: II18nOptions) => new I18n(options)

export default createI18n({ locale: defaultLang, messages })
