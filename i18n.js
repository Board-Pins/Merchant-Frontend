import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const i18nInstance = i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next);

const initI18n = async () => {
  await i18nInstance.init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    load: 'languageOnly', // This will strip region code
    nonExplicitSupportedLngs: true, // This will accept partial language codes

    debug: process.env.NODE_ENV === 'development',

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true, // Enable Suspense
    },

    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

  return i18nInstance;
};

export { initI18n };
export default i18nInstance;