import { createI18nRouteForSubPath } from '../../renderer/i18nSsr'

// 让 /tuiguang 以及 /tuiguang/xx 这类多语言 URL 都匹配到本页面
const supportedLocales = [
  'zh',
  'en',
  'zh-TW',
  'ja',
  'ko',
  'th',
  'vi',
  'id',
  'es',
  'pt',
  'mn'
  
] as const

const route = createI18nRouteForSubPath({
  basePath: 'oil-trading-a',
  locales: supportedLocales,
})

export default route

 