import { ArrowUpRight, Github, Mail, MonitorPlay } from 'lucide-react';
import { getText, notableProjects, privateProjects, projects } from '../../data/projects';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

function ActionLink({ href, children, primary = false }) {
  return <a className={primary ? 'project-link project-link--primary' : 'project-link'} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a>;
}

function ProjectMedia({ project, language, demoLabel }) {
  if (project.media) {
    return (
      <figure className="project-media">
        <img src={project.media.src} alt={getText(project.media.alt, language)} width={project.media.width} height={project.media.height} loading={project.order === 2 ? 'eager' : 'lazy'} decoding="async" />
        {project.media.caption && <figcaption>{getText(project.media.caption, language)}</figcaption>}
        {project.slug === 'axinafa-ai' && !project.media.caption && <figcaption>{demoLabel}</figcaption>}
      </figure>
    );
  }
  return (
    <div className="architecture-card" aria-label="Architecture">
      <div className="architecture-top"><span>Architecture</span><span>{String(project.order).padStart(2, '0')}</span></div>
      <ol>{project.architecture.map((item, index) => <li key={item}><span>{index + 1}</span><strong>{item}</strong></li>)}</ol>
    </div>
  );
}

function ProjectCase({ project, language, copy }) {
  const requestLabel = language === 'fr' ? 'Demander une démo' : 'Request a demo';
  const subject = language === 'fr' ? `Demande de démonstration — ${getText(project.title, language)}` : `Demo request — ${getText(project.title, language)}`;
  return (
    <article id={project.slug} className={`project-case project-case--${project.tier}`}>
      <div className="project-visual"><ProjectMedia project={project} language={language} demoLabel={copy.demoData} /></div>
      <div className="project-copy">
        <div className="project-meta"><span>{String(project.order).padStart(2, '0')}</span><span>{project.category}</span><strong>{getText(project.status, language)}</strong></div>
        <h3>{getText(project.title, language)}</h3>
        <p className="project-summary">{getText(project.summary, language)}</p>
        <dl className="case-notes">
          {project.problem && <div><dt>{copy.problem}</dt><dd>{getText(project.problem, language)}</dd></div>}
          {project.built && <div><dt>{copy.built}</dt><dd>{getText(project.built, language)}</dd></div>}
          <div><dt>{copy.challenge}</dt><dd>{getText(project.challenge, language)}</dd></div>
          <div><dt>{copy.result}</dt><dd>{getText(project.result, language)}</dd></div>
        </dl>
        <div className="project-state"><span>{copy.state}</span><p>{getText(project.limitations, language)}</p></div>
        <ul className="tech-list" aria-label="Technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-actions">
          {project.demoUrl && <ActionLink href={project.demoUrl} primary><MonitorPlay />{copy.demo}</ActionLink>}
          {project.privateDemo ? <a className="project-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}`}><Mail />{requestLabel}<ArrowUpRight /></a> : <ActionLink href={project.notebookUrl ?? project.repoUrl}><Github />{project.notebookUrl ? copy.notebook : copy.code}</ActionLink>}
        </div>
      </div>
    </article>
  );
}

function NotableVisual({ project, language }) {
  if (project.media) {
    return <figure className="public-work-media"><img src={project.media.src} alt={getText(project.media.alt, language)} width={project.media.width} height={project.media.height} loading="lazy" decoding="async" /><figcaption>{getText(project.media.caption, language)}</figcaption></figure>;
  }
  return (
    <div className="public-work-evidence" aria-label={getText(project.title, language)}>
      <span>PY</span><strong>PyCompressor</strong>
      <ul>{getText(project.visual, language).map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function PublicProjectCard({ project, index, language, codeLabel }) {
  return (
    <article id={project.slug} className="public-work-card">
      <NotableVisual project={project} language={language} />
      <div className="public-work-copy">
        <div className="public-work-meta"><span>{String(index + 1).padStart(2, '0')}</span><strong>{getText(project.status, language)}</strong></div>
        <h3>{getText(project.title, language)}</h3>
        <p>{getText(project.description, language)}</p>
        <ul className="public-work-highlights">{getText(project.highlights, language).map((item) => <li key={item}>{item}</li>)}</ul>
        <ul className="tech-list">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <a className="public-work-link" href={project.url} target="_blank" rel="noreferrer"><Github />{codeLabel}<ArrowUpRight /></a>
      </div>
    </article>
  );
}

export default function ProjectShowcase() {
  const { language, t } = useLanguage();
  const featured = projects.filter((project) => project.tier !== 'selected');
  const selected = projects.filter((project) => project.tier === 'selected');
  const archiveTitle = language === 'fr' ? 'Des produits à explorer, pas des miniatures.' : 'Products to explore, not thumbnails.';
  const archiveIntro = language === 'fr' ? 'Interfaces métier, commerce, outil desktop, prospection et jeu : chaque projet public a son propre terrain, ses contraintes et son code.' : 'Business interfaces, commerce, desktop tooling, prospecting and a game: each public project has its own ground, constraints and code.';
  const privateTitle = language === 'fr' ? 'Des projets privés, visibles autrement.' : 'Private projects, shown differently.';
  const privateIntro = language === 'fr' ? 'Le code n’est pas public, mais le travail existe. Je présente ici uniquement les éléments documentés dans mon CV ; une démonstration ou un échange permet d’aller plus loin.' : 'The code is not public, but the work exists. I only present details documented in my résumé; a demo or conversation can provide the rest.';
  const codeLabel = language === 'fr' ? 'Voir le code' : 'View code';
  const requestLabel = language === 'fr' ? 'Demander une démo' : 'Request a demo';

  return (
    <>
      <section id="projets" className="section-shell projects-section">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
        <div className="project-stack">{featured.map((project) => <ProjectCase key={project.slug} project={project} language={language} copy={t.projects} />)}</div>
      </section>
      <section className="section-shell data-section" aria-labelledby="data-title">
        <SectionHeading eyebrow={t.dataWork.eyebrow} title={<span id="data-title">{t.dataWork.title}</span>} intro={t.dataWork.intro} />
        <div className="data-grid">{selected.map((project) => <ProjectCase key={project.slug} project={project} language={language} copy={t.projects} />)}</div>
      </section>
      <section className="section-shell public-work-section" aria-labelledby="archive-title">
        <SectionHeading eyebrow={language === 'fr' ? '03 · Élargir' : '03 · Expand'} title={<span id="archive-title">{archiveTitle}</span>} intro={archiveIntro} />
        <div className="public-work-grid">
          {notableProjects.map((project, index) => <PublicProjectCard key={project.slug} project={project} index={index} language={language} codeLabel={codeLabel} />)}
        </div>
      </section>
      <section className="section-shell private-work-section" aria-labelledby="private-work-title">
        <SectionHeading eyebrow={language === 'fr' ? '04 · En coulisses' : '04 · Behind the scenes'} title={<span id="private-work-title">{privateTitle}</span>} intro={privateIntro} />
        <div className="private-work-grid">
          {privateProjects.map((project, index) => {
            const title = getText(project.title, language);
            const subject = language === 'fr' ? `Demande de démonstration — ${title}` : `Demo request — ${title}`;
            return (
              <article key={title} className="private-work-card">
                <div className="private-work-top"><span>{String(index + 1).padStart(2, '0')}</span><strong>{getText(project.status, language)}</strong></div>
                <h3>{title}</h3>
                <p>{getText(project.description, language)}</p>
                <ul className="tech-list">{project.stack.map((tech) => <li key={getText(tech, language)}>{getText(tech, language)}</li>)}</ul>
                <a className="private-demo-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}`}><Mail />{requestLabel}<ArrowUpRight /></a>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
