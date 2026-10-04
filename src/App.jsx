import { useEffect, useRef } from 'react';
import Seo from './components/Seo';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import Hero from './components/sections/Hero';
import ProjectShowcase from './components/sections/ProjectShowcase';
import Capabilities from './components/sections/Capabilities';
import ExperienceEducation from './components/sections/ExperienceEducation';
import SelectedCredentials from './components/sections/SelectedCredentials';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const cursorRef = useRef(null);
  useEffect(() => {
    if (!window.location.hash) return;
    window.requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  }, []);
  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', `${available > 0 ? (window.scrollY / available) * 100 : 0}%`);
    };
    const revealTargets = [...document.querySelectorAll('main > section:not(.hero)')];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.dataset.revealed = 'true';
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    revealTargets.forEach((target) => {
      target.dataset.reveal = 'true';
      observer.observe(target);
    });
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);
  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined;
    const cursor = cursorRef.current;
    const onMove = (event) => {
      cursor?.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursor?.style.setProperty('--cursor-y', `${event.clientY}px`);
      const interactive = event.target.closest('a, button, .project-case, .public-work-card, .capability-row');
      cursor?.toggleAttribute('data-active', Boolean(interactive));
    };
    const onLeave = () => cursor?.removeAttribute('data-active');
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return (
    <>
      <Seo />
      <div className="scroll-progress" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-orb" aria-hidden="true">GO</div>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProjectShowcase />
        <Capabilities />
        <ExperienceEducation />
        <SelectedCredentials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
