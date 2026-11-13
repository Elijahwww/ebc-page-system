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
  'th',
] as const

const onBeforeRender = createMultiLocaleOnBeforeRender({
  locales: localesAffiliate,
  defaultLocale: 'th',
  loadCommonMessages: loadCommon,
  loadPageMessages: loadPage,
  titleKey: 'word1',
  buildData:()=>({
  })
})

export { onBeforeRender }
