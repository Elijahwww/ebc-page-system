// pages/affiliate/+onBeforeRender.ts
import {
  createMultiLocaleOnBeforeRender,
  normalizeLocaleKey,
} from '../../renderer/i18nSsr'

import heroBg from '@img/ETF/a/bg.webp'
import heroBgMobile from '@img/ETF/a/bg_mobile.webp'

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
  // 'mn'
] as const

const onBeforeRender = createMultiLocaleOnBeforeRender({
  locales: localesAffiliate,
  defaultLocale: 'en',
  loadCommonMessages: loadCommon,
  loadPageMessages: loadPage,
  titleKey: 'word1',
  buildData:()=>({
    // singleNoGTM:true,
    // aglScript:``
    preloadHeadHtml: `
      <link rel="preload" as="image" href="${heroBg}" type="image/webp" fetchpriority="high" media="(min-width: 997px)">
      <link rel="preload" as="image" href="${heroBgMobile}" type="image/webp" fetchpriority="high" media="(max-width: 996px)">
    `.trim(),
  })
})

export { onBeforeRender }
