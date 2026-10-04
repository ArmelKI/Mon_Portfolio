import { useState } from 'react';
import { ArrowUpRight, Github, Mail, MonitorPlay } from 'lucide-react';
import { explorations, getText, notableProjects, projects } from '../../data/projects';
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
        <img src={project.media.src} alt={getText(project.media.alt, language)} width={project.media.width} height={project.media.height} loading={project.order === 1 ? 'eager' : 'lazy'} decoding="async" />
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
      <span>{getText(project.title, language).split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase()}</span><strong>{getText(project.title, language)}</strong>
      <ul>{getText(project.visual, language).map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function PublicProjectCard({ project, index, language, codeLabel, requestLabel }) {
  const title = getText(project.title, language);
  const subject = language === 'fr' ? `Demande de démonstration — ${title}` : `Demo request — ${title}`;
  return (
    <article id={project.slug} className="public-work-card">
      <NotableVisual project={project} language={language} />
      <div className="public-work-copy">
        <div className="public-work-meta"><span>{String(index + 1).padStart(2, '0')}</span><strong>{getText(project.status, language)}</strong></div>
        <h3>{getText(project.title, language)}</h3>
        <p>{getText(project.description, language)}</p>
        <ul className="public-work-highlights">{getText(project.highlights, language).map((item) => <li key={item}>{item}</li>)}</ul>
        <ul className="tech-list">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {project.privateDemo
          ? <a className="public-work-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}`}><Mail />{requestLabel}<ArrowUpRight /></a>
          : <a className="public-work-link" href={project.url} target="_blank" rel="noreferrer"><Github />{codeLabel}<ArrowUpRight /></a>}
      </div>
    </article>
  );
}

function ExplorationGallery({ language, codeLabel }) {
  const [activeSlug, setActiveSlug] = useState(explorations[0].slug);
  const activeProject = explorations.find((project) => project.slug === activeSlug) ?? explorations[0];
  const title = language === 'fr' ? 'D’autres produits à faire tourner.' : 'More products to explore.';
  const intro = language === 'fr'
    ? 'Ces prototypes ne portent pas seuls le positionnement, mais ils montrent le volume, le soin d’interface et les terrains que j’ai explorés. Choisissez-en un pour voir ce qu’il contient.'
    : 'These prototypes do not carry the positioning alone, but they show volume, interface craft and the ground I have explored. Pick one to see what it contains.';

  return (
    <section className="section-shell exploration-section" aria-labelledby="exploration-title">
      <SectionHeading eyebrow={language === 'fr' ? '03 · Explorer' : '03 · Explore'} title={<span id="exploration-title">{title}</span>} intro={intro} />
      <div className="exploration-tabs" role="tablist" aria-label={language === 'fr' ? 'Autres réalisations' : 'Other work'}>
        {explorations.map((project, index) => (
          <button key={project.slug} type="button" role="tab" aria-selected={project.slug === activeProject.slug} aria-controls="exploration-detail" id={`exploration-tab-${project.slug}`} className={project.slug === activeProject.slug ? 'is-active' : ''} onClick={() => setActiveSlug(project.slug)}>
            <span>{String(index + 1).padStart(2, '0')}</span>{getText(project.title, language)}
          </button>
        ))}
      </div>
      <article id="exploration-detail" className="exploration-detail" role="tabpanel" aria-labelledby={`exploration-tab-${activeProject.slug}`}>
        <div className="exploration-visual"><NotableVisual project={activeProject} language={language} /></div>
        <div className="exploration-copy">
          <p className="exploration-status">{getText(activeProject.status, language)}</p>
          <h3>{getText(activeProject.title, language)}</h3>
          <p>{getText(activeProject.description, language)}</p>
          <ul className="public-work-highlights">{getText(activeProject.highlights, language).map((item) => <li key={item}>{item}</li>)}</ul>
          <ul className="tech-list">{activeProject.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          <a className="public-work-link" href={activeProject.url} target="_blank" rel="noreferrer"><Github />{codeLabel}<ArrowUpRight /></a>
        </div>
      </article>
    </section>
  );
}

export default function ProjectShowcase() {
  const { language, t } = useLanguage();
  const archiveTitle = language === 'fr' ? 'Quatre projets pour élargir la preuve.' : 'Four projects that broaden the evidence.';
  const archiveIntro = language === 'fr' ? 'Travail d’équipe, algorithmique, commerce visuel et SaaS métier : des réalisations complémentaires, chacune présentée à son niveau réel de maturité.' : 'Teamwork, algorithms, visual commerce and business SaaS: complementary work, each presented at its actual level of maturity.';
  const codeLabel = language === 'fr' ? 'Voir le code' : 'View code';
  const requestLabel = language === 'fr' ? 'Demander une démo' : 'Request a demo';
  const githubLabel = language === 'fr' ? 'Explorer tous mes dépôts GitHub' : 'Explore all my GitHub repositories';

  return (
    <>
      <section id="projets" className="section-shell projects-section">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
        <div className="project-stack">{projects.map((project) => <ProjectCase key={project.slug} project={project} language={language} copy={t.projects} />)}</div>
      </section>
      <section className="section-shell public-work-section" aria-labelledby="archive-title">
        <SectionHeading eyebrow={language === 'fr' ? '02 · Compléter' : '02 · Complete'} title={<span id="archive-title">{archiveTitle}</span>} intro={archiveIntro} />
        <div className="public-work-grid">
          {notableProjects.map((project, index) => <PublicProjectCard key={project.slug} project={project} index={index} language={language} codeLabel={codeLabel} requestLabel={requestLabel} />)}
        </div>
        <a className="public-work-link public-work-link--archive" href={profile.socials.github} target="_blank" rel="noreferrer"><Github />{githubLabel}<ArrowUpRight /></a>
      </section>
      <ExplorationGallery language={language} codeLabel={codeLabel} />
    </>
  );
}
