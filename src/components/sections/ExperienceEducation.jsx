import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { journey } from '../../data/portfolio';
import { getText } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

export default function ExperienceEducation() {
  const { language, t } = useLanguage();
  const groups = useMemo(() => [
    ['experience', t.journey.experience],
    ['education', t.journey.education],
    ['distinctions', t.journey.distinctions],
  ], [t]);
  const [activeGroup, setActiveGroup] = useState('experience');
  const [activeIndex, setActiveIndex] = useState(0);
  const [, activeLabel] = groups.find(([key]) => key === activeGroup) ?? groups[0];
  const steps = journey[activeGroup];
  const active = steps[activeIndex] ?? steps[0];
  const selectGroup = (key) => {
    setActiveGroup(key);
    setActiveIndex(0);
  };
  const selectRelative = (offset) => setActiveIndex((current) => (current + offset + steps.length) % steps.length);

  return (
    <section id="parcours" className="section-shell journey-section">
      <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} intro={t.journey.intro} />
      <div className="journey-group-tabs" role="tablist" aria-label={language === 'fr' ? 'Catégories du parcours' : 'Journey categories'}>
        {groups.map(([key, label]) => <button key={key} type="button" role="tab" aria-selected={activeGroup === key} className={activeGroup === key ? 'is-active' : ''} onClick={() => selectGroup(key)}>{label}</button>)}
      </div>
      <div className="journey-explorer" style={{ '--journey-progress': `${steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0}%` }}>
        <div className="journey-rail" role="tablist" aria-label={language === 'fr' ? `Étapes : ${activeLabel}` : `Milestones: ${activeLabel}`}>
          {steps.map((item, index) => (
            <button key={`${activeGroup}-${getText(item.title, language)}-${index}`} type="button" role="tab" className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} aria-selected={index === activeIndex} aria-controls="journey-detail">
              <span className="journey-marker">{String(index + 1).padStart(2, '0')}</span>
              <span><small>{activeLabel} · {getText(item.date, language)}</small><strong>{getText(item.title, language)}</strong><em>{getText(item.place, language)}</em></span>
            </button>
          ))}
        </div>
        <article key={`${activeGroup}-${getText(active.title, language)}`} id="journey-detail" className={`journey-detail journey-detail--${activeGroup}`} aria-live="polite">
          <div className="journey-detail-top"><span>{activeLabel}</span><strong>{String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</strong></div>
          <time>{getText(active.date, language)}</time>
          <h3>{getText(active.title, language)}</h3>
          <h4>{getText(active.place, language)}</h4>
          <p>{getText(active.description, language)}</p>
          {active.details && <ul className="journey-detail-lines">{getText(active.details, language).map((item) => <li key={item}>{item}</li>)}</ul>}
          <div className="journey-controls">
            <button type="button" onClick={() => selectRelative(-1)} aria-label={language === 'fr' ? 'Étape précédente' : 'Previous milestone'}><ArrowLeft /></button>
            <div aria-hidden="true">{steps.map((_, index) => <i key={index} className={index === activeIndex ? 'is-active' : ''} />)}</div>
            <button type="button" onClick={() => selectRelative(1)} aria-label={language === 'fr' ? 'Étape suivante' : 'Next milestone'}><ArrowRight /></button>
          </div>
        </article>
      </div>
    </section>
  );
}
