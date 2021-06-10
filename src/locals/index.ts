import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import { ZH_CN, EN_US } from '@/constants'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

const messages: LocaleMessages<VueMessageType> = {
  [ZH_CN]: { ...zhCN },
  [EN_US]: { ...enUS }
}

const i18n = createI18n({
  legacy: false,
  locale: ZH_CN,
  fallbackLocale: ZH_CN,
  globalInjection: true,
  messages
})

export default i18n
