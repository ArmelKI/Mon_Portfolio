import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'timeline', href: '#timeline' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'certifications', href: '#certifications' },
  { key: 'contact', href: '#contact' }
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold font-mono text-white">
          Armel<span className="text-primary">.ai</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.key}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2 border border-white/10 rounded-full p-1 bg-black/20">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                language === 'fr' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                language === 'en' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded-full text-sm font-bold border ${
                language === 'fr'
                  ? 'bg-primary text-white border-primary'
                  : 'text-gray-300 border-white/20'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-bold border ${
                language === 'en'
                  ? 'bg-primary text-white border-primary'
                  : 'text-gray-300 border-white/20'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;