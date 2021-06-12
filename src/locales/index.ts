import { App } from 'vue'
import { optionalChaining } from '@/utils/common'
import { ZH_CN, EN_US } from '@/constants'
import LocalConfigService from '@/services/local/config'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

export interface ILocaleMessages {
  [key: string]: string | ILocaleMessages
}

const messages: ILocaleMessages = {
  [ZH_CN]: { ...zhCN },
  [EN_US]: { ...enUS }
}

const defaultLang = LocalConfigService.getLanguage() || EN_US

class I18n {
  public locale = ''
  public messages = {}

  constructor({
    locale,
    messages
  }: {
    locale: string
    messages: ILocaleMessages
  }) {
    this.locale = locale
    this.messages = messages
  }

  install(app: App<Element>) {
    app.config.globalProperties.$t = this.t
  }

  t(keyOptions: string) {
    return optionalChaining(
      this.messages,
      this.locale,
      ...keyOptions.split('.')
    )
  }
}

export default new I18n({ locale: defaultLang, messages })
