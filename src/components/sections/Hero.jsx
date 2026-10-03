import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const proofTargets = ['#ankata', '#ankata', '#axinafa-ai', '#covid-pipeline'];
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy intro-reveal">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title">{t.hero.titleLead}<br /><span>{t.hero.titleAccent}</span></h1>
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
        <figure className="hero-portrait">
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
