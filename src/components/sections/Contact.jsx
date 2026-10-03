import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(t.contact.subject)}`;
  const newTab = language === 'fr' ? 'Nouvel onglet' : 'New tab';
  return (
    <section id="contact" className="contact-section section-shell">
      <div><p className="eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.body}</p></div>
      <div className="contact-actions">
        <a className="button button--light" href={mailto}><Mail />{t.contact.email}<ArrowUpRight /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn<span>{newTab}</span></a>
        <a href={profile.socials.github} target="_blank" rel="noreferrer"><Github />GitHub<span>{newTab}</span></a>
      </div>
    </section>
  );
}
