import { createI18nRouteForSubPath } from "../../renderer/i18nSsr";

const supportedLocales = ["th"] as const;

const route = createI18nRouteForSubPath({
  basePath: "trading-up",
  locales: supportedLocales,
});

export default route;
