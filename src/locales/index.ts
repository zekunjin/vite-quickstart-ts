import { App, Ref, ref } from 'vue'
import { optionalChaining } from '@/utils/common'
import { ZH_CN, EN_US } from '@/constants'
import LocalConfigService from '@/services/local/app'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

export interface ILocaleMessages {
  [key: string]: string | ILocaleMessages
}

export interface II18nOptions {
  locale: string
  messages: ILocaleMessages
}

export interface ICustomMessages {
  [key: string]: string
}

const messages: ILocaleMessages = {
  [ZH_CN]: { ...zhCN },
  [EN_US]: { ...enUS }
}

const defaultLang = LocalConfigService.getLanguage() || EN_US

export class I18n {
  public locale: Ref<string> = ref('')
  public messages: ILocaleMessages = {}

  constructor({ locale, messages }: II18nOptions) {
    this.locale.value = locale
    this.messages = messages
  }

  install(app: App<Element>) {
    app.config.globalProperties.$t = (
      keyOptions: string,
      customOptions?: ICustomMessages
    ) => {
      let message = optionalChaining(
        this.messages,
        this.locale.value,
        ...keyOptions.split('.')
      ) as string
      if (customOptions) {
        Object.keys(customOptions).forEach((key) => {
          const value = customOptions[key]
          message = message && message.replaceAll(`{${key}}`, value)
        })
      }
      return message
    }
  }

  setLocale(locale: string) {
    this.locale.value = locale
  }
}

export const createI18n = (options: II18nOptions) => new I18n(options)

export default createI18n({ locale: defaultLang, messages })
