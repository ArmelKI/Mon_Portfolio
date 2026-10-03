import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const metadata = {
  fr: { title: 'Armel KI — Software & AI Engineer', description: 'Portfolio d’Armel KI : produits web et mobile, APIs, données, automatisation et IA. Apprenti ingénieur IA chez Sopra Steria Next jusqu’en août 2028.' },
  en: { title: 'Armel KI — Software & AI Engineer', description: "Armel KI's portfolio: web and mobile products, APIs, data, automation and AI. AI engineering apprentice at Sopra Steria Next through August 2028." },
};

export default function Seo() {
  const { language } = useLanguage();
  useEffect(() => {
    document.title = metadata[language].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata[language].description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata[language].description);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata[language].description);
  }, [language]);
  return null;
}
