import { useRef } from 'react';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const portraitRef = useRef(null);
  const proofTargets = ['#ankata', '#fasopport', '#axiane-academy', '#imex-horizon'];
  const movePortrait = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    portraitRef.current?.style.setProperty('--portrait-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 10}px`);
    portraitRef.current?.style.setProperty('--portrait-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 10}px`);
  };
  const resetPortrait = () => {
    portraitRef.current?.style.setProperty('--portrait-x', '0px');
    portraitRef.current?.style.setProperty('--portrait-y', '0px');
  };
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy intro-reveal">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title"><span className="hero-title-line">{t.hero.titleLead}</span><span className="hero-title-line hero-title-line--accent">{t.hero.titleAccent}</span></h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <p className="hero-support">{t.hero.support}</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projets">{t.hero.projectsCta}<ArrowDownRight /></a>
          <a className="button button--ghost" href="#contact">{t.hero.contactCta}</a>
        </div>
        <div className="hero-socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-system intro-reveal" style={{ animationDelay: '120ms' }} aria-label={t.hero.proofLabel}>
        <figure ref={portraitRef} className="hero-portrait" onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
          <img src="/assets/images/armel-portrait.webp" alt="Armel Stéphane Novak KI" width="1200" height="1200" fetchPriority="high" />
          <figcaption>Armel KI <span>Software &amp; AI Engineer</span></figcaption>
        </figure>
        <div className="system-label">{t.hero.proofLabel}<span aria-hidden="true">↓</span></div>
        <ol>{t.hero.proof.map((item, index) => <li key={item} className={`play-tile play-tile--${index + 1}`}><a href={proofTargets[index]}><i aria-hidden="true" /><strong>{item}</strong><span aria-hidden="true">→</span></a></li>)}</ol>
        <p className="system-note">{t.hero.stats.join(' · ')}</p>
      </div>
    </section>
  );
}
