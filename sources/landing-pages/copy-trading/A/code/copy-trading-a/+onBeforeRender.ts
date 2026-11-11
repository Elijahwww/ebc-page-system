// pages/affiliate/+onBeforeRender.ts
import {
  createMultiLocaleOnBeforeRender,
  normalizeLocaleKey,
} from '../../renderer/i18nSsr'

async function loadCommon(locale: string) {
  const file = normalizeLocaleKey(locale)
  return import(`../../locales/${file}/index.ts`).then((m) => m.default)
}

async function loadPage(locale: string) {
  const file = normalizeLocaleKey(locale)
  return import(`./locales/${file}/index.ts`).then((m) => m.default)
}

const localesAffiliate = [
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

const onBeforeRender = createMultiLocaleOnBeforeRender({
  locales: localesAffiliate,
  defaultLocale: 'en',
  loadCommonMessages: loadCommon,
  loadPageMessages: loadPage,
  titleKey: 'word1',
  
})

export { onBeforeRender }
