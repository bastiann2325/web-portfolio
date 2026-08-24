import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEs from "../locales/es/translation.json";
import translationEn from "../locales/en/translation.json";

/**
 * i18next setup for the site. Detects the visitor's language from
 * localStorage first, then the browser, and falls back to Spanish. Imported
 * once (for its side effect) in `main.jsx` before the app renders.
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationEs },
      en: { translation: translationEn },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "locale",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
