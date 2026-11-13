export { onBeforePrerenderStart }

// 按 https://vike.dev/i18n 文档的“替代用法”：
// 在页面自己的 +onBeforePrerenderStart.ts 里为每个语言先调用本页的 onBeforeRender，
// 确保 pageContext.data.title / messages 等都正确设置，然后返回 URL + pageContext。
import { createI18nOnBeforePrerenderStart } from '../../renderer/i18nSsr'
import { onBeforeRender as affiliateOnBeforeRender } from './+onBeforeRender'

const localesAffiliate = ['th'] as const
const localeDefault = 'th'

const onBeforePrerenderStart = createI18nOnBeforePrerenderStart(
  affiliateOnBeforeRender,
  {
    baseUrl: '/live-trading2',
    locales: localesAffiliate,
    defaultLocale: localeDefault,
    addDefaultLocaleAlias: true,
  }
)

 