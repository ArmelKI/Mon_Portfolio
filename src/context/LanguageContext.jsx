import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { siteCopy } from '../data/profile';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const stored = window.localStorage.getItem('portfolio_lang');
  if (stored === 'fr' || stored === 'en') return stored;
  return window.navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: siteCopy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider.');
  return context;
}
