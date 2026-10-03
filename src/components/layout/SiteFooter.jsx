import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export default function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <a className="brand brand--footer" href="#top"><span>AK</span> Armel KI</a>
      <p>© {new Date().getFullYear()} Armel KI · {t.footer}</p>
      <div className="social-row">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub — nouvel onglet"><Github /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn — nouvel onglet"><Linkedin /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
      </div>
    </footer>
  );
}
