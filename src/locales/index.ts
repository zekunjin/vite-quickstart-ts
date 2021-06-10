import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import { ZH_CN, EN_US } from '@/constants'
import LocalConfigService from '@/services/local/config'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

const messages: LocaleMessages<VueMessageType> = {
  [ZH_CN]: { ...zhCN },
  [EN_US]: { ...enUS }
}

const defaultLang = LocalConfigService.getLanguage() || EN_US

export default createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: defaultLang,
  globalInjection: true,
  messages
})
