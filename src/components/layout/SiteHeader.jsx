import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const links = [
  ['projects', '#projets'], ['expertise', '#expertise'], ['journey', '#parcours'], ['credentials', '#certifications'], ['about', '#a-propos'], ['contact', '#contact'],
];

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');
  const closeRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const toggleNode = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const focusable = document.querySelectorAll('#mobile-navigation a, #mobile-navigation button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      toggleNode?.focus();
    };
  }, [open]);

  useEffect(() => {
    const targets = links.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveHref(`#${visible.target.id}`);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.02, .25, .5] });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const switcher = (
    <div className="language-switcher" aria-label={language === 'fr' ? 'Langue' : 'Language'}>
      {['fr', 'en'].map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item}>{item.toUpperCase()}</button>
      ))}
    </div>
  );

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Armel KI — accueil"><span>AK</span> Armel KI</a>
      <nav className="desktop-nav" aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>
        {links.map(([key, href]) => <a key={key} href={href} aria-current={activeHref === href ? 'page' : undefined}>{t.nav[key]}</a>)}
        {switcher}
      </nav>
      <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={language === 'fr' ? 'Ouvrir le menu' : 'Open menu'}><Menu /></button>
      {open && (
        <div className="mobile-nav-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <nav id="mobile-navigation" className="mobile-nav" aria-label={language === 'fr' ? 'Navigation mobile' : 'Mobile navigation'}>
            <button ref={closeRef} className="menu-close" type="button" onClick={() => setOpen(false)} aria-label={language === 'fr' ? 'Fermer le menu' : 'Close menu'}><X /></button>
            {links.map(([key, href]) => <a key={key} href={href} aria-current={activeHref === href ? 'page' : undefined} onClick={() => setOpen(false)}>{t.nav[key]}</a>)}
            {switcher}
          </nav>
        </div>
      )}
    </header>
  );
}
