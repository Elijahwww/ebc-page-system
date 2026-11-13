import { createI18nRouteForSubPath } from "../../renderer/i18nSsr";

const supportedLocales = ["zh", "zh-TW"] as const;

const route = createI18nRouteForSubPath({
  basePath: "double11-2026",
  locales: supportedLocales,
});

export default route;
