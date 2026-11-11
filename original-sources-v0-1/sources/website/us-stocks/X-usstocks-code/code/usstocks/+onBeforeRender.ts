// pages/usstocks/+onBeforeRender.ts
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

const localesUsstocks = [
  'zh',
  'es',
  'pt',
] as const

const onBeforeRender = createMultiLocaleOnBeforeRender({
  locales: localesUsstocks,
  defaultLocale: 'zh',
  loadCommonMessages: loadCommon,
  loadPageMessages: loadPage,
  titleKey: 'promote.title',
})

export { onBeforeRender }
