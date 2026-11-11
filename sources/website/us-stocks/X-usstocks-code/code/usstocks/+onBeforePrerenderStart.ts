export { onBeforePrerenderStart }

// 按 https://vike.dev/i18n 文档的“替代用法”：
// 在页面自己的 +onBeforePrerenderStart.ts 里为每个语言先调用本页的 onBeforeRender，
// 确保 pageContext.data.title / messages 等都正确设置，然后返回 URL + pageContext。
import { createI18nOnBeforePrerenderStart } from '../../renderer/i18nSsr'
import { onBeforeRender as usstocksOnBeforeRender } from './+onBeforeRender'

const localesUsstocks = [
  'zh',
  'es',
  'pt',
] as const
const localeDefault = 'zh'

const onBeforePrerenderStart = createI18nOnBeforePrerenderStart(
  usstocksOnBeforeRender,
  {
    baseUrl: '/usstocks',
    locales: localesUsstocks,
    defaultLocale: localeDefault,
    addDefaultLocaleAlias: true,
  }
)

 