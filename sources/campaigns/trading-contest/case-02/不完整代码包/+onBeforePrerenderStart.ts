export { onBeforePrerenderStart };

import { createI18nOnBeforePrerenderStart } from "../../renderer/i18nSsr";
import { onBeforeRender as tradingUpOnBeforeRender } from "./+onBeforeRender";

const localesTradingUp = ["th"] as const;
const localeDefault = "th";

const onBeforePrerenderStart = createI18nOnBeforePrerenderStart(
  tradingUpOnBeforeRender,
  {
    baseUrl: "/trading-up",
    locales: localesTradingUp,
    defaultLocale: localeDefault,
    addDefaultLocaleAlias: true,
  },
);
