import { ArrowDownRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { capabilities } from '../../data/portfolio';
import { getText } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

export default function Capabilities() {
  const { language, t } = useLanguage();
  return (
    <section id="expertise" className="section-shell capabilities-section">
      <SectionHeading eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} intro={t.capabilities.intro} />
      <div className="capability-list">
        {capabilities.map((item) => (
          <article key={item.id} className="capability-row">
            <span className="capability-index">{item.index}</span>
            <div><h3>{getText(item.title, language)}</h3><p>{getText(item.description, language)}</p></div>
            <ul className="tech-list">{item.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <p className="proof-links"><span>{t.capabilities.proof}</span>{item.projects.join(' · ')}</p>
            <ArrowDownRight aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
