import React, { useContext, useEffect, ReactNode, createContext, useState } from 'react';
import Router from 'next/router';
import i18n from '../../../i18n';
import { TFunction } from 'i18next';
// import useStateSafe from '../../utils/use-safe-state';
import { LanguageProviderState, LanguageNameType } from './types';

export type ProviderProps = {
  children: ReactNode;
};

const INITIAL_LANGUAGE_STATE: LanguageProviderState = {
  language: i18n.language as LanguageNameType,
};

export const LanguageContext = createContext<LanguageProviderState>(INITIAL_LANGUAGE_STATE);

const LanguageProvider: React.FC<ProviderProps> = ({ children }) => {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState<LanguageNameType>(languageContext.language);

  useEffect(() => {
    setLanguage(i18n.language as LanguageNameType);
  }, []);

  const changeLanguage = (name: LanguageNameType): Promise<TFunction> =>
    i18n.changeLanguage(name, () => {
      setLanguage(name);
      const path = Router.route;
      Router.push({ pathname: path, query: { lang: i18n.language } }, path, { swallow: true });
    });

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
