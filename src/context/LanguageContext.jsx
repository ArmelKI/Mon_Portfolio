import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { i18n } from '../data/i18n';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const stored = localStorage.getItem('portfolio_lang');
  if (stored === 'fr' || stored === 'en') {
    return stored;
  }

  const browserLang = navigator.language?.toLowerCase() || '';
  return browserLang.startsWith('fr') ? 'fr' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: i18n[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
