import { useMemo, useState } from 'react';
import { ArrowUpRight, FileText, Search, ShieldCheck } from 'lucide-react';
import { certifications } from '../../data/certifications';
import { credentialOverrides, selectedCredentialIds } from '../../data/portfolio';
import { getText } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

const categories = ['all', 'data-ai', 'cyber-cloud', 'dev', 'management'];
const matchesCategory = (item, category) => {
  if (category === 'all') return true;
  if (category === 'data-ai') return ['data', 'ai'].includes(item.category);
  if (category === 'cyber-cloud') return ['cyber', 'cloud'].includes(item.category);
  if (category === 'dev') return ['dev', 'mobile'].includes(item.category);
  return ['management', 'finance'].includes(item.category);
};

export default function SelectedCredentials() {
  const { language, t } = useLanguage();
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const selected = selectedCredentialIds.map((id) => certifications.find((item) => item.id === id)).filter(Boolean);
  const filtered = useMemo(() => certifications.filter((item) => matchesCategory(item, category) && `${item.title} ${item.provider} ${item.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const labels = language === 'fr'
    ? { all: 'Toutes', 'data-ai': 'Data & IA', 'cyber-cloud': 'Cyber & cloud', dev: 'Développement', management: 'Gestion', library: `Explorer les ${certifications.length} certifications`, close: 'Replier la bibliothèque', search: 'Rechercher une certification', count: 'résultats' }
    : { all: 'All', 'data-ai': 'Data & AI', 'cyber-cloud': 'Cyber & cloud', dev: 'Development', management: 'Management', library: `Explore all ${certifications.length} credentials`, close: 'Close the library', search: 'Search credentials', count: 'results' };

  return (
    <section id="certifications" className="section-shell credentials-section">
      <SectionHeading eyebrow={t.credentials.eyebrow} title={t.credentials.title} intro={t.credentials.intro} />
      <div className="selected-credentials">
        {selected.map((item, index) => {
          const override = credentialOverrides[item.id];
          return <article key={item.id}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.provider} · {getText(override.date, language)}</p><small>{getText(override.note, language)}</small></div><div className="credential-actions"><a href={item.verifyUrl} target="_blank" rel="noreferrer"><ShieldCheck />{t.credentials.verify}</a><a href={item.pdf} target="_blank" rel="noreferrer"><FileText />PDF</a></div></article>;
        })}
      </div>
      <button className="library-toggle" type="button" onClick={() => setLibraryOpen((value) => !value)} aria-expanded={libraryOpen} aria-controls="credential-library">
        {libraryOpen ? labels.close : labels.library}<span aria-hidden="true">{libraryOpen ? '−' : '+'}</span>
      </button>
      {libraryOpen && (
        <div id="credential-library" className="credential-library">
          <div className="library-tools">
            <label><Search aria-hidden="true" /><span className="sr-only">{labels.search}</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.search} /></label>
            <div className="filter-row" aria-label={language === 'fr' ? 'Filtrer les certifications' : 'Filter credentials'}>{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{labels[item]}</button>)}</div>
          </div>
          <p className="result-count">{filtered.length} {labels.count}</p>
          <div className="credential-table" role="list">
            {filtered.map((item) => <article role="listitem" key={item.id}><div><span>{item.category}</span><h3>{item.title}</h3><p>{item.provider} · {item.date}</p></div><div className="credential-actions"><a href={item.verifyUrl} target="_blank" rel="noreferrer" aria-label={`${t.credentials.verify} — ${item.title}`}><ShieldCheck />{t.credentials.verify}<ArrowUpRight /></a><a href={item.pdf} target="_blank" rel="noreferrer" aria-label={`${t.credentials.pdf} — ${item.title}`}><FileText />PDF</a></div></article>)}
          </div>
        </div>
      )}
    </section>
  );
}
