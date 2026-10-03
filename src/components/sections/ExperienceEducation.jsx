import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { journey } from '../../data/portfolio';
import { getText } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

export default function ExperienceEducation() {
  const { language, t } = useLanguage();
  const steps = journey.experience.map((item) => ({ ...item, key: 'experience', label: t.journey.experience }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];
  const selectRelative = (offset) => setActiveIndex((current) => (current + offset + steps.length) % steps.length);

  return (
    <section id="parcours" className="section-shell journey-section">
      <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} intro={t.journey.intro} />
      <div className="journey-explorer">
        <div className="journey-rail" aria-label={language === 'fr' ? 'Étapes du parcours' : 'Journey milestones'}>
          {steps.map((item, index) => (
            <button key={`${item.key}-${getText(item.title, language)}`} type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex} aria-controls="journey-detail">
              <span className="journey-marker">{String(index + 1).padStart(2, '0')}</span>
              <span><small>{item.label} · {getText(item.date, language)}</small><strong>{getText(item.title, language)}</strong><em>{getText(item.place, language)}</em></span>
            </button>
          ))}
        </div>
        <article key={`${active.key}-${getText(active.title, language)}`} id="journey-detail" className={`journey-detail journey-detail--${active.key}`} aria-live="polite">
          <div className="journey-detail-top"><span>{active.label}</span><strong>{String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</strong></div>
          <time>{getText(active.date, language)}</time>
          <h3>{getText(active.title, language)}</h3>
          <h4>{getText(active.place, language)}</h4>
          <p>{getText(active.description, language)}</p>
          <div className="journey-controls">
            <button type="button" onClick={() => selectRelative(-1)} aria-label={language === 'fr' ? 'Étape précédente' : 'Previous milestone'}><ArrowLeft /></button>
            <div aria-hidden="true">{steps.map((_, index) => <i key={index} className={index === activeIndex ? 'is-active' : ''} />)}</div>
            <button type="button" onClick={() => selectRelative(1)} aria-label={language === 'fr' ? 'Étape suivante' : 'Next milestone'}><ArrowRight /></button>
          </div>
        </article>
      </div>
      <div className="journey-secondary-groups">
        {[['education', t.journey.education], ['distinctions', t.journey.distinctions]].map(([key, label]) => (
          <section key={key} className={`journey-secondary journey-secondary--${key}`} aria-labelledby={`${key}-title`}>
            <p className="journey-secondary-label" id={`${key}-title`}>{label}</p>
            <div>
              {journey[key].map((item) => (
                <article key={getText(item.title, language)}>
                  <time>{getText(item.date, language)}</time>
                  <h3>{getText(item.title, language)}</h3>
                  <strong>{getText(item.place, language)}</strong>
                  <p>{getText(item.description, language)}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
