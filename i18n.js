import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from 'translations/en.json';

i18n.use(LanguageDetector).init({
  resources: {
    en: { translation: en },
  },
  debug: false,
  fallbackLng: 'en',
  keySeparator: '/',
  interpolation: {
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage'],
    caches: ['cookie', 'localStorage'],
    lookupCookie: 'lang',
    lookupQuerystring: 'lang',
  },
  nsSeparator: ':',
  parseMissingKeyHandler: key => {
    // HACK: to prevent "escaped" slashs which are escaped by "\"
    const separatedKeys = key.replace(/([^\\])\//g, '$1\u000B').split('\u000B');
    return separatedKeys[separatedKeys.length - 1];
  },
});

// common translate function generator
const translate = file => string => i18n.t(`${file}/${string}`);

export { i18n as default, translate };
