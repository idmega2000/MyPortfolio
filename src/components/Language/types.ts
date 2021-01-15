import { TFunction } from 'i18next';

export type LanguageNameType = 'en' | 'cn';

export type LanguageProviderState = {
  language: LanguageNameType;
  changeLanguage?: (lang: LanguageNameType) => Promise<TFunction>;
};
