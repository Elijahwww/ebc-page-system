export { onBeforePrerenderStart };

import { createI18nOnBeforePrerenderStart } from "../../renderer/i18nSsr";
import { onBeforeRender as double11OnBeforeRender } from "./+onBeforeRender";

const localesDouble11 = ["zh", "zh-TW"] as const;
const localeDefault = "zh";

const onBeforePrerenderStart = createI18nOnBeforePrerenderStart(
  double11OnBeforeRender,
  {
    baseUrl: "/double11-2026",
    locales: localesDouble11,
    defaultLocale: localeDefault,
    addDefaultLocaleAlias: true,
  },
);
