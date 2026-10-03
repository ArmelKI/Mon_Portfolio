import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="a-propos" className="about-section section-shell">
      <div className="about-image"><img src="/assets/images/armel-portrait.webp" alt="Armel Stéphane Novak KI" width="1200" height="1200" loading="lazy" decoding="async" /></div>
      <div className="about-copy"><p className="eyebrow">{t.about.eyebrow}</p><h2>{t.about.title}</h2><p>{t.about.body}</p><blockquote>{t.about.signature}</blockquote></div>
    </section>
  );
}
