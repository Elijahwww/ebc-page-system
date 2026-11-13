import {
  createMultiLocaleOnBeforeRender,
  normalizeLocaleKey,
} from "../../renderer/i18nSsr";

async function loadCommon(locale: string) {
  const file = normalizeLocaleKey(locale);
  return import(`../../locales/${file}/index.ts`).then((m) => m.default);
}

async function loadPage(locale: string) {
  const file = normalizeLocaleKey(locale);
  return import(`./locales/${file}/index.ts`).then((m) => m.default);
}

const localesTradingUp = ["th"] as const;

const onBeforeRender = createMultiLocaleOnBeforeRender({
  locales: localesTradingUp,
  defaultLocale: "th",
  loadCommonMessages: loadCommon,
  loadPageMessages: loadPage,
  titleKey: "promote.title",
  buildData: () => ({}),
});

export { onBeforeRender };
