import { useEffect } from 'react';
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
  useEffect(() => {
    if (!window.location.hash) return;
    window.requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
  }, []);
  return (
    <>
      <Seo />
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
