import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <div id="hero"><Hero /></div>
        <div id="about" className="scroll-mt-20"><About /></div>
        <div id="timeline" className="scroll-mt-20"><Timeline /></div>
        <div id="skills" className="scroll-mt-20"><Skills /></div>
        <div id="projects" className="scroll-mt-20"><Projects /></div>
        <div id="certifications" className="scroll-mt-20"><Certifications /></div>
        <div id="contact" className="scroll-mt-20"><Contact /></div>
      </main>

      <Footer />
    </div>
  );
};

export default App;